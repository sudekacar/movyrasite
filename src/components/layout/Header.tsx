"use client";

import { useState } from "react";
import { Menu, X, Activity } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "#architecture", key: "architecture" as const },
  { href: "#features", key: "features" as const },
  { href: "#security", key: "security" as const },
  { href: "#team", key: "team" as const },
];

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-header-bg backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 ring-1 ring-accent/40">
            <Activity className="h-4.5 w-4.5 text-accent" />
            <span className="absolute inset-0 animate-ping rounded-xl bg-accent/20 [animation-duration:2.4s]" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Movyra{" "}
            <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
              AI
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition hover:bg-accent/10 hover:text-foreground"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LocaleSwitcher />
          <ThemeSwitcher />
          <a
            href="mailto:movyra@qybitlabs.com"
            className={cn(
              "inline-flex items-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white",
              "shadow-lg shadow-accent/25 transition hover:brightness-110",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            )}
          >
            {t("cta")}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-card-border bg-surface md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-card-border bg-header-bg px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent/10"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center gap-2">
            <LocaleSwitcher />
            <ThemeSwitcher />
            <a
              href="mailto:movyra@qybitlabs.com"
              className="ml-auto inline-flex items-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
