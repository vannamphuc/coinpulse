import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge multiple CSS class values into a single normalized class string suitable for Tailwind.
 *
 * @param inputs - CSS class values to merge (e.g., strings, arrays, or objects describing conditional classes)
 * @returns The merged class string with conflicting Tailwind utility classes resolved
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format a number as a currency string using the en-US locale.
 *
 * Formats `value` as currency using the specified ISO 4217 `currency` code, with two fraction digits.
 *
 * @param value - The numeric amount to format
 * @param currency - The ISO 4217 currency code to use (default: "USD")
 * @returns The formatted currency string (for example, "$1,234.56")
 */
export function formatCurrency(
  value: number,
  currency: string = "USD"
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}