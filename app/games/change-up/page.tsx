"use client";

import { FoundationsGame } from "../../../components/FoundationsGame";
import { CHANGE_LEVELS } from "../../../lib/foundations";

export default function ChangeUp() {
  return (
    <FoundationsGame
      id="change-up"
      title="Change Up"
      glyph="💵"
      intro="You're on the till. The customer hands over a bill — work out the change they get back and type it in."
      levels={CHANGE_LEVELS}
      nextQuestion={(lv) => CHANGE_LEVELS[lv].gen()}
      tip="Tip: count up from the total to the amount paid — it's faster than borrowing."
    />
  );
}
