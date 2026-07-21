"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  BrainCircuit,
  Filter,
  Inbox,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS: {
  key: "ingestion" | "privacy" | "engine" | "dashboard";
  icon: LucideIcon;
}[] = [
  { key: "ingestion", icon: Inbox },
  { key: "privacy", icon: Filter },
  { key: "engine", icon: BrainCircuit },
  { key: "dashboard", icon: LayoutDashboard },
];

export function TechArchitecture() {
  const t = useTranslations("architecture");
  const [active, setActive] = useState(0);
  const ActiveIcon = STEPS[active].icon;

  return (
    <section id="architecture" className="relative scroll-mt-24 py-20">
      <div className="ambient-glow right-10 top-20 h-72 w-72 bg-accent/25" />
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

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col gap-3">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const isActive = active === index;
              return (
                <button
                  key={step.key}
                  type="button"
                  onClick={() => setActive(index)}
                  className={cn(
                    "glass-card flex items-start gap-4 rounded-2xl p-4 text-left transition",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive
                      ? "border-accent/50 shadow-lg shadow-accent/10"
                      : "hover:border-accent/30",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold",
                      isActive
                        ? "bg-accent text-white"
                        : "bg-accent/10 text-accent",
                    )}
                  >
                    {index + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <Icon
                        className={cn(
                          "h-4 w-4",
                          isActive ? "text-accent" : "text-muted",
                        )}
                      />
                      <span className="font-display text-sm font-semibold text-foreground">
                        {t(`steps.${step.key}.title`)}
                      </span>
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted">
                      {t(`steps.${step.key}.description`)}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="glass-card relative overflow-hidden rounded-2xl p-6 sm:p-8">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-6 h-36 w-36 rounded-full bg-accent-secondary/15 blur-3xl" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.28 }}
                className="relative"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15 text-accent ring-1 ring-accent/30">
                  <ActiveIcon className="h-7 w-7" />
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                  Step {active + 1} / {STEPS.length}
                </p>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {t(`steps.${STEPS[active].key}.title`)}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted sm:text-base">
                  {t(`steps.${STEPS[active].key}.description`)}
                </p>

                <div className="mt-8 flex items-center gap-2">
                  {STEPS.map((step, index) => (
                    <div
                      key={step.key}
                      className={cn(
                        "h-1.5 flex-1 rounded-full transition",
                        index <= active ? "bg-accent" : "bg-card-border",
                      )}
                    />
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {["DICOM", "EHR", "Notes", "LLM"].map((tag, i) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="rounded-xl border border-card-border bg-background/40 px-3 py-2.5 font-mono text-xs text-muted"
                    >
                      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent-secondary" />
                      {tag}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
