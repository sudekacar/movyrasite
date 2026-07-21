"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowRight, FileText, ShieldCheck, Sparkles } from "lucide-react";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden">
      <div className="ambient-glow -left-24 top-10 h-72 w-72 bg-accent/40" />
      <div className="ambient-glow right-0 top-32 h-80 w-80 bg-accent-secondary/25" />
      <div className="pointer-events-none absolute inset-0 grid-fade opacity-60 dark:opacity-40" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-secondary/30 bg-accent-secondary/10 px-3 py-1.5 text-xs font-semibold text-accent-secondary"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-secondary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-secondary" />
            </span>
            {t("badge")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="font-display text-4xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.15rem]"
          >
            <span className="block bg-gradient-to-r from-accent via-accent-bright to-accent-secondary bg-clip-text text-transparent neon-text">
              Movyra AI
            </span>
            <span className="mt-3 block text-[0.92em] text-foreground/95">
              {t("title")}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition hover:brightness-110"
            >
              {t("primaryCta")}
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#architecture"
              className="inline-flex items-center gap-2 rounded-xl border border-card-border bg-surface px-5 py-3 text-sm font-semibold text-foreground backdrop-blur-md transition hover:border-accent/40"
            >
              <FileText className="h-4 w-4 text-accent" />
              {t("secondaryCta")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4 text-xs text-muted"
          >
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-accent-success" />
              KVKK / GDPR
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Multimodal RAG
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-secondary" />
              On-Premises
            </span>
          </motion.div>
        </div>

        <HeroDashboardMockup />
      </div>
    </section>
  );
}

function HeroDashboardMockup() {
  const t = useTranslations("hero.mockup");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.18 }}
      className="relative"
    >
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/25 via-transparent to-accent-secondary/20 blur-2xl" />
      <div className="glass-card relative overflow-hidden rounded-2xl p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-muted">{t("title")}</p>
            <div className="mt-1 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-success opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-success" />
              </span>
              <span className="text-sm font-semibold text-accent-success">
                {t("status")}
              </span>
            </div>
          </div>
          <div className="rounded-lg border border-card-border bg-background/40 px-2.5 py-1 font-mono text-[10px] text-muted">
            v2.4.1-onprem
          </div>
        </div>

        <div className="mb-4 overflow-hidden rounded-xl border border-card-border bg-background/50 p-3">
          <div className="mb-3 flex items-center justify-between rounded-lg border border-accent-secondary/20 bg-accent-secondary/5 px-3 py-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 text-accent">
                <i className="fa-solid fa-person-half-dress text-sm" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-accent-secondary">
                  {t("patientDemographics")}
                </p>
                <p className="text-xs font-medium text-foreground">
                  {t("patientProfile")}
                </p>
              </div>
            </div>
            <span className="rounded-md bg-accent-success/15 px-2 py-0.5 text-[10px] font-semibold text-accent-success">
              ID #MVR-2847
            </span>
          </div>

          <div className="mb-2 flex items-center justify-between text-[11px] text-muted">
            <span>{t("parsing")}</span>
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="font-mono text-accent"
            >
              stream://ehr
            </motion.span>
          </div>
          <div className="space-y-2">
            {[92, 68, 84, 55, 76].map((width, i) => (
              <motion.div
                key={width}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: `${width}%`, opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.7 }}
                className="h-2 rounded-full bg-gradient-to-r from-accent/80 to-accent-secondary/70"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {[
            { label: t("confidence"), value: "93.4%", color: "text-accent" },
            { label: t("latency"), value: "118ms", color: "text-accent-secondary" },
            { label: t("sources"), value: "24", color: "text-accent-success" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-card-border bg-background/40 p-3"
            >
              <p className="text-[10px] uppercase tracking-wider text-muted">
                {stat.label}
              </p>
              <p className={`mt-1 font-display text-lg font-bold ${stat.color}`}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-accent/20 bg-accent/5 p-3">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            Clinical Insight
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xs leading-relaxed text-muted"
          >
            Multimodal signals aligned — recommend differential review with
            elevated ACS probability band.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
