"use client";

import { FoundationsGame } from "../../../components/FoundationsGame";
import { SIGN_LEVELS } from "../../../lib/foundations";

export default function SignFlip() {
  return (
    <FoundationsGame
      id="sign-flip"
      title="Sign Flip"
      glyph="±"
      intro="Scores swing, balances dip below zero, temperatures drop. Add, subtract, multiply and divide positives and negatives — use the − key for negative answers."
      levels={SIGN_LEVELS}
      nextQuestion={(lv) => SIGN_LEVELS[lv].gen()}
      tip="Tip: subtracting a negative is the same as adding a positive."
    />
  );
}
