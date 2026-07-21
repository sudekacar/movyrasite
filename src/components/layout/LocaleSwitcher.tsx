"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("locale");

  const switchLocale = (next: Locale) => {
    if (next === locale) return;
    router.replace(pathname, { locale: next });
  };

  return (
    <div
      className="inline-flex items-center rounded-xl border border-card-border bg-surface p-0.5"
      role="group"
      aria-label="Language"
    >
      {(["tr", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchLocale(code)}
          className={cn(
            "rounded-lg px-2.5 py-1.5 text-xs font-semibold tracking-wide transition",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            locale === code
              ? "bg-accent text-white shadow-sm shadow-accent/30"
              : "text-muted hover:text-foreground",
          )}
        >
          {t(code)}
        </button>
      ))}
    </div>
  );
}
