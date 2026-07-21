import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Shield, Server, Cookie, Eye, Database, Mail } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { absoluteUrl, SITE_EMAIL, SITE_NAME } from "@/lib/site";
import { routing } from "@/i18n/routing";

type PrivacyPageProps = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  const canonical = absoluteUrl(`/${locale}/privacy`);

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical,
      languages: {
        tr: absoluteUrl("/tr/privacy"),
        en: absoluteUrl("/en/privacy"),
        "x-default": absoluteUrl("/tr/privacy"),
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      url: canonical,
      siteName: SITE_NAME,
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("metaTitle"),
      description: t("metaDescription"),
    },
  };
}

const SECTION_ICONS = [Shield, Server, Eye, Cookie, Database, Mail] as const;

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");

  const sections = [
    "controller",
    "onPrem",
    "dataCollected",
    "cookies",
    "adsense",
    "rights",
  ] as const;

  return (
    <article className="relative overflow-hidden">
      <div className="ambient-glow -left-16 top-10 h-64 w-64 bg-accent/30" />
      <div className="ambient-glow right-0 top-40 h-72 w-72 bg-accent-secondary/20" />

      <div className="relative mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent-secondary">
          {t("eyebrow")}
        </p>
        <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-3 text-sm text-muted">{t("updated")}</p>
        <p className="mt-6 text-base leading-relaxed text-muted">{t("intro")}</p>

        <div className="mt-12 space-y-8">
          {sections.map((key, index) => {
            const Icon = SECTION_ICONS[index];
            return (
              <section
                key={key}
                className="glass-card rounded-2xl p-6 sm:p-7"
                id={key}
              >
                <div className="mb-4 flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/25">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    {t(`sections.${key}.title`)}
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                  {t(`sections.${key}.body`)}
                </p>
              </section>
            );
          })}
        </div>

        <div className="mt-10 rounded-2xl border border-accent-secondary/25 bg-accent-secondary/5 p-5 text-sm text-muted">
          <p>
            {t("contactLabel")}{" "}
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="font-semibold text-accent transition hover:brightness-110"
            >
              {SITE_EMAIL}
            </a>
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex text-sm font-semibold text-accent transition hover:brightness-110"
          >
            ← {t("backHome")}
          </Link>
        </div>
      </div>
    </article>
  );
}
