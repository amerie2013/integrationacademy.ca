"use client";

import { FoundationsGame } from "../../../components/FoundationsGame";
import { CART_LEVELS } from "../../../lib/foundations";

export default function CartRush() {
  return (
    <FoundationsGame
      id="cart-rush"
      title="Cart Rush"
      glyph="🛒"
      intro="It's a sneaker drop and the cart is filling up. Add the prices before checkout closes — type the total."
      levels={CART_LEVELS}
      nextQuestion={(lv) => CART_LEVELS[lv].gen()}
      tip="Tip: add the ones first, carry the 1, then the tens."
    />
  );
}
