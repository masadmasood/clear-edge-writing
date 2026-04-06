const DEFAULT_SITE_URL = "https://clearedgewriting.com";
const DEFAULT_CONTACT_EMAIL = "support@clearedgewriting.com";

function trimTrailingSlash(value: string) {
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

function normalizePhone(value: string) {
  return value.replace(/\D/g, "");
}

function normalizeOptionalUrl(value: string) {
  const trimmed = value.trim();
  return trimmed ? trimTrailingSlash(trimmed) : "";
}

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? DEFAULT_SITE_URL;
const configuredContactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ??
  process.env.CONTACT_EMAIL ??
  DEFAULT_CONTACT_EMAIL;
const configuredWhatsAppNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? process.env.WHATSAPP_NUMBER ?? "";
const configuredFacebookUrl =
  process.env.NEXT_PUBLIC_FACEBOOK_URL ?? process.env.FACEBOOK_URL ?? "";
const configuredInstagramUrl =
  process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? process.env.INSTAGRAM_URL ?? "";

export const siteConfig = {
  name: "ClearEdge Writing",
  shortName: "ClearEdge",
  title: "ClearEdge Writing | Academic Support for UK University Students",
  description:
    "ClearEdge Writing provides structured academic support for Computer Science and Management students at UK universities.",
  serviceDescription:
    "Structured academic guidance covering essays, assignments, research papers, proposals, dissertations, and proofreading.",
  siteUrl: trimTrailingSlash(configuredSiteUrl),
  ogImagePath: "/assets/hero-visual.png",
  contactEmail: configuredContactEmail,
  whatsappNumber: normalizePhone(configuredWhatsAppNumber),
  facebookUrl: normalizeOptionalUrl(configuredFacebookUrl),
  instagramUrl: normalizeOptionalUrl(configuredInstagramUrl),
} as const;

export const mailtoHref = `mailto:${siteConfig.contactEmail}`;
export const whatsappHref = siteConfig.whatsappNumber
  ? `https://wa.me/${siteConfig.whatsappNumber}`
  : "";
export const primaryContactHref = whatsappHref || mailtoHref;
export const primaryContactTarget = whatsappHref ? "_blank" : undefined;
export const primaryContactRel = whatsappHref
  ? "noopener noreferrer"
  : undefined;
