"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Database,
  Fingerprint,
  ScrollText,
  Shield,
  type LucideIcon,
} from "lucide-react";

const ITEMS: { key: "onPrem" | "anonymized" | "audit" | "closedLoop"; icon: LucideIcon }[] = [
  { key: "onPrem", icon: Database },
  { key: "anonymized", icon: Fingerprint },
  { key: "audit", icon: ScrollText },
  { key: "closedLoop", icon: Shield },
];

export function SecurityCompliance() {
  const t = useTranslations("security");

  return (
    <section id="security" className="relative scroll-mt-24 py-20">
      <div className="ambient-glow left-1/2 top-0 h-64 w-64 -translate-x-1/2 bg-accent-secondary/20" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-secondary">
            {t("eyebrow")}
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {t("subtitle")}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="glass-card group rounded-2xl p-5 transition hover:border-accent-secondary/40"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent-secondary/10 text-accent-secondary ring-1 ring-accent-secondary/25 transition group-hover:bg-accent-secondary/15">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground">
                  {t(`items.${item.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t(`items.${item.key}.description`)}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
