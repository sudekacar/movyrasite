"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FlaskConical, FileSearch, ScanLine, LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { GoogleAdBanner } from "@/components/ui/GoogleAdBanner";

const ADSENSE_SLOT_DEMO =
  process.env.NEXT_PUBLIC_ADSENSE_SLOT_DEMO ?? "2222222222";

const CASES = [
  { key: "clinical" as const, icon: FileSearch },
  { key: "lab" as const, icon: FlaskConical },
  { key: "imaging" as const, icon: ScanLine },
];

export function InteractiveDemo() {
  const t = useTranslations("demo");
  const [active, setActive] = useState<(typeof CASES)[number]["key"]>("clinical");
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProcessing(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 8;
      });
    }, 40);
    const timeout = setTimeout(() => setProcessing(false), 650);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [active]);

  const ActiveIcon = CASES.find((c) => c.key === active)!.icon;

  return (
    <section id="features" className="relative scroll-mt-24 py-20">
      <div className="ambient-glow left-0 top-24 h-72 w-72 bg-accent/20" />
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

        <div className="mt-10 glass-card overflow-hidden rounded-2xl">
          <div className="flex flex-col gap-3 border-b border-card-border p-3 sm:flex-row sm:items-center sm:justify-between sm:p-4">
            <div className="inline-flex items-center gap-2.5 rounded-xl border border-accent-secondary/25 bg-accent-secondary/5 px-3 py-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <i className="fa-solid fa-person-half-dress text-sm" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-accent-secondary">
                  {t("patientDemographics")}
                </p>
                <p className="text-xs font-medium text-foreground">{t("patientBadge")}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
            {CASES.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActive(item.key)}
                  className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive
                      ? "bg-accent text-white shadow-md shadow-accent/25"
                      : "text-muted hover:bg-accent/10 hover:text-foreground",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {t(`cases.${item.key}.label`)}
                </button>
              );
            })}
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-2">
            <div className="border-b border-card-border p-5 sm:p-6 lg:border-b-0 lg:border-r">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
                <ActiveIcon className="h-3.5 w-3.5 text-accent" />
                Input
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`${active}-input`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="rounded-xl border border-card-border bg-background/50 p-4 font-mono text-sm leading-relaxed text-foreground/90"
                >
                  {t(`cases.${active}.input`)}
                </motion.p>
              </AnimatePresence>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    {processing ? (
                      <LoaderCircle className="h-3.5 w-3.5 animate-spin text-accent" />
                    ) : (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-success" />
                    )}
                    {processing ? t("processing") : "Ready"}
                  </span>
                  <span className="font-mono">{Math.min(progress, 100)}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-card-border">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-accent to-accent-secondary"
                    animate={{ width: `${Math.min(progress, 100)}%` }}
                    transition={{ ease: "linear", duration: 0.05 }}
                  />
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                {t("output")}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${active}-output`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                >
                  <p className="rounded-xl border border-accent/20 bg-accent/5 p-4 text-sm leading-relaxed text-foreground">
                    {t(`cases.${active}.output`)}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <Metric
                      label={t("accuracy")}
                      value={t(`cases.${active}.accuracy`)}
                      tone="accent"
                    />
                    <Metric
                      label={t("confidence")}
                      value={t(`cases.${active}.confidence`)}
                      tone="secondary"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <GoogleAdBanner
            slot={ADSENSE_SLOT_DEMO}
            size="rectangle"
            format="rectangle"
            className="px-0"
          />
        </div>
      </div>
    </section>
  );
}

function Metric({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "accent" | "secondary";
}) {
  return (
    <div className="rounded-xl border border-card-border bg-background/40 p-4">
      <p className="text-[11px] uppercase tracking-wider text-muted">{label}</p>
      <p
        className={cn(
          "mt-1 font-display text-2xl font-bold",
          tone === "accent" ? "text-accent" : "text-accent-secondary",
        )}
      >
        {value}
      </p>
    </div>
  );
}
