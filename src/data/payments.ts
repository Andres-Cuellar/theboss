export interface PaymentMethod {
  id: string;
  name: string;
  value: string;
  displayValue: string;
  /** Short label that explains what the value is (cashtag, email, etc.) */
  valueLabel: string;
  recipient: string;
  brandColor: string;
  iconBg: string;
  iconColor: string;
  qrCode?: string;
  actionUrl?: string;
  actionLabel?: string;
}

export const PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: "zelle",
    name: "ZELLE",
    value: "6692999245",
    displayValue: "6692999245",
    valueLabel: "Zelle phone number",
    recipient: "ANGHELO JOVEL",
    brandColor: "#7414CA",
    iconBg: "#7414CA",
    iconColor: "#ffffff",
  },
  {
    id: "cashapp",
    name: "CASH APP",
    value: "$ANGHELOJOVEL",
    displayValue: "$ANGHELOJOVEL",
    valueLabel: "Cash App cashtag",
    recipient: "ANGHELO JOVEL",
    brandColor: "#00D632",
    iconBg: "#00D632",
    iconColor: "#ffffff",
    actionUrl: "https://cash.app/$ANGHELOJOVEL",
    actionLabel: "Open Cash App",
  },
  {
    id: "applepay",
    name: "APPLE PAY",
    value: "7024150055",
    displayValue: "7024150055",
    valueLabel: "Apple Pay phone number",
    recipient: "ANGHELO JOVEL",
    brandColor: "#ffffff",
    iconBg: "#000000",
    iconColor: "#ffffff",
    actionUrl: "sms:+17024150055",
    actionLabel: "Open Messages",
  },
  {
    id: "paypal",
    name: "PAYPAL",
    value: "anghelojr79@outlook.com",
    displayValue: "anghelojr79@outlook.com",
    valueLabel: "PayPal email",
    recipient: "THE BOSS FRENCHIES LV",
    brandColor: "#0079C1",
    iconBg: "#ffffff",
    iconColor: "#003087",
    actionUrl: "https://www.paypal.com",
    actionLabel: "Open PayPal",
  },
  {
    id: "venmo",
    name: "VENMO",
    value: "@Angelo-Ruiz-12",
    displayValue: "@Angelo-Ruiz-12",
    valueLabel: "Venmo username",
    recipient: "ANGHELO RUIZ",
    brandColor: "#008CFF",
    iconBg: "#008CFF",
    iconColor: "#ffffff",
    qrCode: "/venmo-qr.png",
    actionUrl: "https://venmo.com/u/Angelo-Ruiz-12",
    actionLabel: "Open Venmo",
  },
];
