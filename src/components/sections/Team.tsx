"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Cpu,
  Landmark,
  ShieldCheck,
  Factory,
  type LucideIcon,
} from "lucide-react";

const DOMAINS: {
  key: "ai" | "finance" | "compliance" | "industrial";
  icon: LucideIcon;
}[] = [
  { key: "ai", icon: Cpu },
  { key: "finance", icon: Landmark },
  { key: "compliance", icon: ShieldCheck },
  { key: "industrial", icon: Factory },
];

export function Team() {
  const t = useTranslations("team");

  return (
    <section id="team" className="relative scroll-mt-24 py-20">
      <div className="ambient-glow bottom-0 right-1/4 h-64 w-64 bg-accent-secondary/20" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {DOMAINS.map((domain, index) => {
            const Icon = domain.icon;
            return (
              <motion.article
                key={domain.key}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.07, duration: 0.45 }}
                className="glass-card group relative overflow-hidden rounded-2xl p-6"
              >
                <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-accent/10 blur-2xl transition group-hover:bg-accent/20" />
                <div className="relative flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/25">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {t(`domains.${domain.key}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {t(`domains.${domain.key}.description`)}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
