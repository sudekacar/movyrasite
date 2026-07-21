export const SITE_URL = "https://movyra.qybitlabs.com" as const;
export const SITE_NAME = "Movyra AI";
export const SITE_EMAIL = "movyra@qybitlabs.com";

export function absoluteUrl(path = ""): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized === "/" ? "" : normalized}`;
}
