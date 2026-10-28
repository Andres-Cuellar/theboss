export type BossIcon =
  | "lock"
  | "paw"
  | "phone"
  | "chat"
  | "whatsapp"
  | "instagram"
  | "facebook"
  | "tiktok"
  | "card";

export interface BossLink {
  /** Icon shown in the badge square */
  icon: BossIcon;
  label: string;
  sub: string;
  href: string;
  /** "featured" = lock-in CTA with glow, "primary" = big cards, "social" = compact grid */
  tier: "featured" | "primary" | "social";
  external?: boolean;
}

export const PROFILE = {
  kennel: "THE BOSS FRENCHIES",
  name: "PINK CHENZO",
  tagline: "STUD · LOCK-IN AVAILABLE",
  location: "Las Vegas, NV",
  bioLead: "🦍 PINK CHENZO 🦍",
  bio: "The SMALLEST pink big rope Isabella & Tan — bringing Quality Structure + Short Leg Genes",
  shareText: "Chenzo — The Boss Frenchies stud. Lock in now.",
};

/**
 * Background video slot. Hosted on CDN — swap this URL any time,
 * or set to "" to fall back to the animated gradient aurora.
 */
export const VIDEO_SRC =
  "https://assets.cdn.filesafe.space/AK3rMDJ4AS5yCkfu1EPy/media/6ad2530186f4a10b2fa43fe8.mp4";

export const MARQUEE_WORDS = [
  "LAST DAYS — $2500",
  "LOCK IN NOW",
  "LAST DAYS — $2500",
  "KEEP THIS PRICE FOREVER",
  "LAST DAYS — $2500",
  "PINK BIG ROPE",
  "LAST DAYS — $2500",
  "STUD SERVICE OPEN",
];

/* ------------------------------------------------------------------ */
/* TODO: replace placeholder links with the real ones                  */
/* ------------------------------------------------------------------ */
export const LINKS: BossLink[] = [
  {
    icon: "lock",
    label: "Lock-In Chenzo Stud",
    sub: "Lock in with just $500 — keep the $2,500 price",
    href: "/checkout/chenzo-lock-in",
    tier: "featured",
  },
  {
    icon: "paw",
    label: "Chenzo Stud Service",
    sub: "Info, pricing & availability",
    href: "/checkout/chenzo-stud-service",
    tier: "primary",
  },
  {
    icon: "card",
    label: "Payment Methods",
    sub: "Zelle, Cash App, Apple Pay, PayPal & Venmo",
    href: "/payment-methods",
    tier: "primary",
  },
  {
    icon: "phone",
    label: "Call Now",
    sub: "+1 (702) 415-0055",
    href: "tel:+17024150055",
    tier: "primary",
  },
  {
    icon: "chat",
    label: "Text Us",
    sub: "Fastest response",
    href: "sms:+17024150055",
    tier: "primary",
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    sub: "Chat with the kennel",
    href: "https://wa.me/17024150055",
    tier: "social",
    external: true,
  },
  {
    icon: "instagram",
    label: "Instagram",
    sub: "@theboss_frenchs_lv",
    href: "https://www.instagram.com/theboss_frenchs_lv/",
    tier: "social",
    external: true,
  },
  // Suspended for now — uncomment to re-enable
  // {
  //   icon: "facebook",
  //   label: "Facebook",
  //   sub: "The Boss Frenchies",
  //   href: "https://facebook.com/thebossfrenchies",
  //   tier: "social",
  //   external: true,
  // },
  // {
  //   icon: "tiktok",
  //   label: "TikTok",
  //   sub: "@thebossfrenchies",
  //   href: "https://tiktok.com/@thebossfrenchies",
  //   tier: "social",
  //   external: true,
  // },
];
