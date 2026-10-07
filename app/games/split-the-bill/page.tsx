"use client";

import { FoundationsGame } from "../../../components/FoundationsGame";
import { DIVIDE_LEVELS } from "../../../lib/foundations";

export default function SplitTheBill() {
  return (
    <FoundationsGame
      id="split-the-bill"
      title="Split the Bill"
      glyph="🍕"
      intro="The pizza's gone and the bill's on the table. Work out what each friend owes. Later levels leave a remainder — type it like 12 R 3."
      levels={DIVIDE_LEVELS}
      nextQuestion={(lv) => DIVIDE_LEVELS[lv].gen()}
      tip="Tip: division is multiplication backwards — ask “what times this gives that?”"
    />
  );
}
