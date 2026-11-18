export interface Money {
  cents: number;
  currency: string;
}

export function price(cents: number): string {
  return `${(cents / 100).toFixed(2)}`;
}
