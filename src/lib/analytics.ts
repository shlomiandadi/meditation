export type PurchaseGender = "men" | "women";

export type ButtonLocation =
  | "hero"
  | "outcomes_banner"
  | "objections_banner"
  | "purchase"
  | "footer"
  | "sticky";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const PRODUCT_VALUE = 249;
const CURRENCY = "ILS";

export function trackPurchaseClick(
  gender: PurchaseGender,
  location: ButtonLocation
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  const itemName =
    gender === "men" ? "14 מדיטציות - גברים" : "14 מדיטציות - נשים";

  window.gtag("event", "purchase_button_click", {
    gender,
    button_location: location,
    value: PRODUCT_VALUE,
    currency: CURRENCY,
  });

  window.gtag("event", "begin_checkout", {
    currency: CURRENCY,
    value: PRODUCT_VALUE,
    items: [
      {
        item_name: itemName,
        item_category: "meditation_set",
        price: PRODUCT_VALUE,
        quantity: 1,
      },
    ],
  });
}
