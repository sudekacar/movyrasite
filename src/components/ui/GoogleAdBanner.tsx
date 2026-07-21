"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

type GoogleAdBannerProps = {
  slot?: string;
  format?: "auto" | "horizontal" | "rectangle" | "vertical";
  className?: string;
  size?: "leaderboard" | "rectangle" | "responsive";
};

const ADSENSE_CLIENT_ID =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ??
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT ??
  "ca-pub-XXXXXXXXXXXXXXXX";

const SIZE_CLASSES: Record<NonNullable<GoogleAdBannerProps["size"]>, string> = {
  leaderboard: "min-h-[90px]",
  rectangle: "min-h-[250px]",
  responsive: "min-h-[100px] sm:min-h-[90px]",
};

function isUnconfiguredClientId(clientId: string): boolean {
  return (
    !clientId ||
    clientId.includes("XXXXXXXX") ||
    clientId === "ca-pub-0000000000000000"
  );
}

export function GoogleAdBanner({
  slot = "0000000000",
  format = "auto",
  className,
  size = "responsive",
}: GoogleAdBannerProps) {
  const t = useTranslations("ads");
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);
  const [ready, setReady] = useState(false);

  const showFallback =
    process.env.NODE_ENV === "development" ||
    isUnconfiguredClientId(ADSENSE_CLIENT_ID);

  useEffect(() => {
    if (showFallback || pushed.current) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
      setReady(true);
    } catch {
      setReady(false);
    }
  }, [showFallback]);

  return (
    <aside
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6", className)}
      aria-label={t("label")}
    >
      <div
        className={cn(
          "glass-card relative overflow-hidden rounded-2xl",
          SIZE_CLASSES[size],
        )}
      >
        <p className="absolute left-3 top-2 z-10 text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
          {t("sponsored")}
        </p>

        {showFallback ? (
          <div
            className={cn(
              "flex h-full min-h-[inherit] items-center justify-center px-4 py-8",
              SIZE_CLASSES[size],
            )}
          >
            <div className="flex w-full max-w-md flex-col items-center gap-2 text-center">
              <div className="h-3 w-2/3 animate-pulse rounded-full bg-accent/15" />
              <div className="h-3 w-1/2 animate-pulse rounded-full bg-accent-secondary/15" />
              <p className="mt-2 text-xs text-muted">{t("placeholder")}</p>
              <p className="font-mono text-[10px] text-muted/70">
                client: {ADSENSE_CLIENT_ID} · slot: {slot}
              </p>
            </div>
          </div>
        ) : (
          <ins
            ref={adRef}
            className={cn("adsbygoogle block w-full", SIZE_CLASSES[size], {
              "opacity-100": ready,
              "opacity-0": !ready,
            })}
            style={{ display: "block" }}
            data-ad-client={ADSENSE_CLIENT_ID}
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive="true"
          />
        )}
      </div>
    </aside>
  );
}
