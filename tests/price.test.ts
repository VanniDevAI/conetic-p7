import test from "node:test";
import assert from "node:assert/strict";
import { price } from "../src/price.ts";
import { receipt } from "../src/cart.ts";

test("price formats cents", () => {
  assert.equal(price(1234), "12.34");
});

test("receipt lists lines and a total", () => {
  assert.equal(receipt([{ sku: "tea", cents: 250, qty: 2 }]), "tea x2 5.00\nTOTAL 5.00");
});
