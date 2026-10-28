import {
  CHECKOUT_PRODUCTS,
  DEFAULT_PRODUCT_ID,
  type CheckoutMode,
  type CheckoutProduct,
} from "../data/products";
import { LEGAL } from "../data/legal";

/** n8n webhook that receives the order and routes it downstream. */
export const WEBHOOK_URL =
  "https://apiai.glumpstudio.com/webhook/f8e06c8d-3a6a-466e-8f53-99adcb344ab5";

export const CURRENCY = "USD";
export const MAX_QUANTITY = 10;
export const MIN_QUANTITY = 1;

export function getProductById(
  id: string | null | undefined,
): CheckoutProduct | undefined {
  if (!id || !Object.prototype.hasOwnProperty.call(CHECKOUT_PRODUCTS, id)) {
    return undefined;
  }
  return CHECKOUT_PRODUCTS[id];
}

export function getDefaultProduct(): CheckoutProduct {
  return CHECKOUT_PRODUCTS[DEFAULT_PRODUCT_ID];
}

export function clampQuantity(value: unknown): number {
  const parsed = typeof value === "number" ? value : Number.parseInt(String(value ?? ""), 10);

  if (!Number.isFinite(parsed)) return MIN_QUANTITY;
  return Math.min(MAX_QUANTITY, Math.max(MIN_QUANTITY, Math.trunc(parsed)));
}

export function checkoutTotal(product: CheckoutProduct, quantity: number): number {
  return product.unitPrice * clampQuantity(quantity);
}

export function modeLabel(mode: CheckoutMode): string {
  return mode === "book" ? "Book" : "Pay now";
}

export function modeBadge(mode: CheckoutMode): string {
  return mode === "book" ? "Lock-in deposit" : "Full payment";
}

export function formatUSD(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: CURRENCY,
    maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
  }).format(amount);
}

function randomToken(length = 4): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(length);

  if (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function") {
    crypto.getRandomValues(bytes);
  } else {
    for (let i = 0; i < length; i += 1) {
      bytes[i] = Math.floor(Math.random() * 256);
    }
  }

  return Array.from(bytes, (byte) => alphabet[byte % alphabet.length]).join("");
}

/** Human-readable reference shared by the webhook and the payment page. */
export function generateOrderRef(now = new Date()): string {
  const pad = (value: number) => String(value).padStart(2, "0");
  const stamp = `${pad(now.getFullYear() % 100)}${pad(now.getMonth() + 1)}${pad(now.getDate())}`;
  return `BF-${stamp}-${randomToken()}`;
}

export interface CheckoutDetails {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  estimatedDate: string;
}

export interface CheckoutConsent {
  termsAccepted: boolean;
  marketingConsent: boolean;
}

export interface CheckoutPayloadInput {
  product: CheckoutProduct;
  quantity: number;
  orderRef: string;
  details: CheckoutDetails;
  consent: CheckoutConsent;
  utm: Record<string, string>;
  pageUrl: string;
  submittedAt: string;
}

export type CheckoutPayload = {
  full_name: string;
  email: string;
  phone: string;
  address_line1: string;
  address_line2: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
  estimated_date: string;
  product_id: string;
  product_name: string;
  mode: CheckoutMode;
  quantity: number;
  unit_price: number;
  total: number;
  shipping_included: boolean;
  currency: string;
  order_ref: string;
  terms_accepted: boolean;
  marketing_consent: boolean;
  terms_version: string;
  page_url: string;
  submitted_at: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
};

export function buildCheckoutPayload({
  product,
  quantity,
  orderRef,
  details,
  consent,
  utm,
  pageUrl,
  submittedAt,
}: CheckoutPayloadInput): CheckoutPayload {
  const safeQuantity = clampQuantity(quantity);

  return {
    full_name: details.fullName.trim(),
    email: details.email.trim().toLowerCase(),
    phone: details.phone.trim(),
    address_line1: details.addressLine1.trim(),
    address_line2: details.addressLine2.trim(),
    city: details.city.trim(),
    state: details.state.trim(),
    postal_code: details.postalCode.trim(),
    country: details.country,
    estimated_date: details.estimatedDate,
    product_id: product.id,
    product_name: product.name,
    mode: product.mode,
    quantity: safeQuantity,
    unit_price: product.unitPrice,
    total: product.unitPrice * safeQuantity,
    shipping_included: false,
    currency: CURRENCY,
    order_ref: orderRef,
    terms_accepted: consent.termsAccepted,
    marketing_consent: consent.marketingConsent,
    terms_version: LEGAL.version,
    page_url: pageUrl,
    submitted_at: submittedAt,
    utm_source: utm.utm_source ?? "",
    utm_medium: utm.utm_medium ?? "",
    utm_campaign: utm.utm_campaign ?? "",
    utm_content: utm.utm_content ?? "",
    utm_term: utm.utm_term ?? "",
  };
}

export const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;
