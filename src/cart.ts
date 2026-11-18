import { price } from "./price.ts";

export interface Line {
  sku: string;
  cents: number;
  qty: number;
}

export function total(lines: Line[]): number {
  return lines.reduce((n, l) => n + l.cents * l.qty, 0);
}

export function receipt(lines: Line[]): string {
  return lines.map((l) => `${l.sku} x${l.qty} ${price(l.cents * l.qty)}`).join("\n") + `\nTOTAL ${price(total(lines))}`;
}
