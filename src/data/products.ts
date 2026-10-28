export type CheckoutMode = "book" | "pay";

export interface CheckoutProduct {
  id: string;
  /** Product name shown in the summary and on the payment page */
  name: string;
  /** Short line under the name */
  tagline: string;
  image: string;
  imageAlt: string;
  /** Price per unit in USD */
  unitPrice: number;
  /** "book" = lock-in deposit, "pay" = full payment */
  mode: CheckoutMode;
  /** Maximum quantity a customer can select */
  maxQty: number;
  /** Minimum days between today and the estimated required date */
  minLeadDays: number;
}

export const CHECKOUT_PRODUCTS: Record<string, CheckoutProduct> = {
  "chenzo-lock-in": {
    id: "chenzo-lock-in",
    name: "Chenzo Stud — Lock-In",
    tagline: "Reserve now and keep the $2,500 price",
    image:
      "https://assets.cdn.filesafe.space/AK3rMDJ4AS5yCkfu1EPy/media/6ad253c4436f78fefb3ff7b4.jpg",
    imageAlt: "Pink Chenzo — Isabella & Tan French Bulldog stud",
    unitPrice: 500,
    mode: "book",
    maxQty: 10,
    minLeadDays: 1,
  },
  "chenzo-stud-service": {
    id: "chenzo-stud-service",
    name: "Chenzo Stud Service",
    tagline: "Full stud service payment",
    image:
      "https://assets.cdn.filesafe.space/AK3rMDJ4AS5yCkfu1EPy/media/6ad253c4436f78fefb3ff7b4.jpg",
    imageAlt: "Pink Chenzo — Isabella & Tan French Bulldog stud",
    unitPrice: 2500,
    mode: "pay",
    maxQty: 10,
    minLeadDays: 1,
  },
};

export const DEFAULT_PRODUCT_ID = "chenzo-lock-in";

export const CHECKOUT_PRODUCT_IDS = Object.keys(CHECKOUT_PRODUCTS);
