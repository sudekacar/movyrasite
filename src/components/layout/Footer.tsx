import { useTranslations } from "next-intl";
import { Activity, Mail } from "lucide-react";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-card-border bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent/15 ring-1 ring-accent/40">
              <Activity className="h-4 w-4 text-accent" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Movyra{" "}
              <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                AI
              </span>
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            {t("tagline")}
          </p>
          <p className="mt-3 text-sm text-accent-secondary">{t("itu")}</p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold tracking-wide text-foreground">
            {t("contact")}
          </h3>
          <a
            href={`mailto:${t("email")}`}
            className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
          >
            <Mail className="h-4 w-4" />
            {t("email")}
          </a>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold tracking-wide text-foreground">
            {t("legal")}
          </h3>
          <ul className="space-y-2 text-sm text-muted">
            <li>
              <Link href="/privacy" className="transition hover:text-accent">
                {t("privacy")}
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="transition hover:text-accent"
              >
                {t("kvkk")}
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="transition hover:text-accent">
                {t("cookies")}
              </Link>
            </li>
            <li>
              <a
                href="mailto:movyra@qybitlabs.com"
                className="transition hover:text-accent"
              >
                {t("terms")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-card-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 text-xs text-muted sm:px-6">
          <span>
            © {year} Movyra AI. {t("rights")}
          </span>
          <span className="hidden sm:inline">Qybit Labs · movyra.qybitlabs.com</span>
        </div>
      </div>
    </footer>
  );
}
