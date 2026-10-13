import { fig, segmentMid } from "./_figs.mjs";

function fourCollinear(labels = ["A", "B", "C", "D"]) {
  const xs = [30, 130, 220, 310];
  const colors = ["#ea580c", "#2563eb", "#2563eb", "#ea580c"];
  let pts = "";
  for (let i = 0; i < 4; i++) {
    pts += `<circle cx="${xs[i]}" cy="40" r="4.5" fill="${colors[i]}"/><text x="${xs[i]}" y="65" text-anchor="middle" font-size="13" fill="#334155" font-family="Georgia,serif">${labels[i]}</text>`;
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 80" width="300" style="display:block;margin:4px auto;max-width:100%" role="img" aria-label="Four collinear points">
  <line x1="20" y1="40" x2="320" y2="40" stroke="#0f172a" stroke-width="2.5"/>
  ${pts}
</svg>`;
}

function crossLines() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" style="display:block;margin:4px auto;max-width:100%" role="img" aria-label="Two intersecting lines">
  <line x1="20" y1="170" x2="180" y2="30" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="20" y1="40" x2="180" y2="160" stroke="#0f172a" stroke-width="2.5"/>
  <text x="100" y="58" font-size="13" fill="#9a3412" font-family="Georgia,serif" text-anchor="middle">1</text>
  <text x="145" y="102" font-size="13" fill="#1d4ed8" font-family="Georgia,serif" text-anchor="middle">2</text>
  <text x="100" y="148" font-size="13" fill="#9a3412" font-family="Georgia,serif" text-anchor="middle">3</text>
  <text x="55" y="102" font-size="13" fill="#1d4ed8" font-family="Georgia,serif" text-anchor="middle">4</text>
</svg>`;
}

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "1.6",
  title: "Introduction to Proofs",
  intro: "A proof is a chain of true statements, each one justified by a definition, postulate, theorem, or algebraic property — no step is allowed to appear \"because it looks true.\" This section reviews the algebraic properties (reflexive, symmetric, transitive, substitution, addition/subtraction) that fill in most proof reasons, then builds up to full two-column proofs that combine several of them in one argument, such as showing two overlapping segments are equal or formally proving the Vertical Angles Theorem instead of just quoting it.",
  examples: [
    ["Example 1: Reflexive Property",
      "Justify the statement $AB = AB$.",
      "A reflexive statement compares a quantity to itself, and any quantity is always equal to itself, no matter what it represents.<br>" +
      "This property is used constantly in proofs to introduce a side or angle that two figures share.<br>" +
      "<b>Answer:</b> Reflexive Property of Equality."],

    ["Example 2: Symmetric Property",
      "If $AB = CD$, then $CD = AB$. What justifies this step?",
      "Equality does not have a direction — if one quantity equals a second, the second equals the first.<br>" +
      "This lets you \"flip\" a given equation whenever it is more convenient to work with the reversed order.<br>" +
      "<b>Answer:</b> Symmetric Property of Equality."],

    ["Example 3: Transitive Property",
      "Given $AB = CD$ and $CD = EF$, conclude $AB = EF$. Justify the step, then apply it: if $AB = 5$, find $EF$.",
      "Two quantities each equal to the same third quantity must equal each other — that's the Transitive Property of Equality.<br>" +
      "Since $AB = CD$ and $CD = EF$, we get $AB = EF$ directly, without needing to know $CD$'s value.<br>" +
      "<b>Answer:</b> Transitive Property of Equality; since $AB = 5$, also $EF = 5$."],

    ["Example 4: Substitution Property",
      "If $x = 5$ and $y = x + 2$, conclude $y = 7$. What justifies replacing $x$ with $5$?",
      "The Substitution Property allows any quantity to be replaced by another quantity already known equal to it.<br>" +
      "Replace $x$ with $5$ in $y = x+2$: $y = 5+2 = 7$.<br>" +
      "<b>Answer:</b> Substitution Property of Equality."],

    ["Example 5: Addition Property of Equality",
      "If $AB = CD$, justify adding $EF$ to both sides to get $AB + EF = CD + EF$.",
      "The Addition Property says that adding the same quantity to both sides of a true equation keeps it true.<br>" +
      "This step is the algebraic engine behind Segment Addition proofs: it lets you turn a given equality of two pieces into an equality of two larger sums.<br>" +
      "<b>Answer:</b> Addition Property of Equality."],

    ["Example 6: Definition of midpoint",
      "$M$ is the midpoint of $\\overline{AB}$. What can you conclude, and which definition justifies it?",
      fig(segmentMid(), "M splits AB into two congruent halves.") +
      "By definition, a midpoint divides a segment into two <i>congruent</i> pieces.<br>" +
      "So $\\overline{AM} \\cong \\overline{MB}$, which by the definition of congruent segments also means $AM = MB$.<br>" +
      "<b>Answer:</b> $AM = MB$ (Definition of Midpoint)."],

    ["Example 7: Definition of congruent segments",
      "If $\\overline{AB} \\cong \\overline{CD}$, what can you conclude about their lengths — and is the reverse direction also true?",
      "By definition, congruent segments have equal length: $\\overline{AB}\\cong\\overline{CD} \\Rightarrow AB = CD$.<br>" +
      "The definition works both ways — it is really a biconditional (recall Section 1.5): equal length also implies congruence, $AB = CD \\Rightarrow \\overline{AB}\\cong\\overline{CD}$.<br>" +
      "<b>Answer:</b> $AB = CD$; yes, the reverse direction holds too, since \"congruent\" and \"equal length\" mean the same thing for segments."],

    ["Example 8: Vertical Angles Theorem",
      "Two angles are vertical angles. What can you conclude, and is this a postulate or a theorem?",
      fig(crossLines(), "∠1 and ∠3 are vertical; so are ∠2 and ∠4.") +
      "By the Vertical Angles Theorem, vertical angles are always congruent.<br>" +
      "It is a <b>theorem</b>, not a postulate — unlike a postulate, it must be (and has been) proved from more basic facts, specifically the Linear Pair Postulate and the Congruent Supplements Theorem.<br>" +
      "<b>Answer:</b> The angles are congruent; this is a theorem."],

    ["Example 9: A short two-column proof",
      "Given: $A$, $B$, $C$, $D$ are collinear in that order, and $AB = CD$. Prove: $AC = BD$.",
      fig(fourCollinear(), "Points in order A, B, C, D on one line.") +
      "1. $AB = CD$ — <i>Given</i><br>" +
      "2. $BC = BC$ — <i>Reflexive Property of Equality</i><br>" +
      "3. $AB + BC = CD + BC$ — <i>Addition Property of Equality</i> (adding the same quantity, step 2, to both sides of step 1)<br>" +
      "4. $AB + BC = AC$ and $BC + CD = BD$ — <i>Segment Addition Postulate</i> (since $B$ is between $A,C$ and $C$ is between $B,D$)<br>" +
      "5. $AC = BD$ — <i>Substitution</i> (replace $AB+BC$ and $CD+BC$ in step 3 using step 4)<br>" +
      "<b>∎ Proved:</b> $AC = BD$."],

    ["Example 10: Proving the Vertical Angles Theorem",
      "Given: $\\angle 1$ and $\\angle 2$ form a linear pair, and $\\angle 2$ and $\\angle 3$ form a linear pair (so $\\angle 1$ and $\\angle 3$ are vertical angles). Prove: $m\\angle 1 = m\\angle 3$.",
      fig(crossLines(), "∠1, ∠2, ∠3 around the intersection; ∠1 and ∠3 are vertical.") +
      "1. $\\angle 1, \\angle 2$ are a linear pair; $\\angle 2, \\angle 3$ are a linear pair — <i>Given</i><br>" +
      "2. $m\\angle 1 + m\\angle 2 = 180^\\circ$ and $m\\angle 2 + m\\angle 3 = 180^\\circ$ — <i>Linear Pair Postulate</i><br>" +
      "3. $m\\angle 1 + m\\angle 2 = m\\angle 2 + m\\angle 3$ — <i>Substitution</i> (both sums equal $180^\\circ$)<br>" +
      "4. $m\\angle 1 = m\\angle 3$ — <i>Subtraction Property of Equality</i> (subtract $m\\angle 2$ from both sides)<br>" +
      "<b>∎ Proved:</b> vertical angles $\\angle 1$ and $\\angle 3$ are congruent."],
  ],
  questions: [
    ["Problem 1: Reflexive", "Justify $m\\angle A = m\\angle A$.", "Reflexive Property"],
    ["Problem 2: Symmetric", "If $x = 7$, then $7 = x$. Reason?", "Symmetric Property"],
    ["Problem 3: Transitive", "If $a = b$ and $b = c$, then $a = c$. Reason?", "Transitive Property"],
    ["Problem 4: Midpoint", "$M$ midpoint of $\\overline{PQ}$. Conclude?", "$PM = MQ$"],
    ["Problem 5: Congruent segments", "$\\overline{AB} \\cong \\overline{CD}$. Conclude about lengths?", "$AB = CD$"],
    ["Problem 6: Vertical angles", "Vertical angles are always what?", "Congruent"],
    ["Problem 7: Linear pair", "Linear-pair angles sum to what?", "$180^\\circ$"],
    ["Problem 8: Substitution", "If $m\\angle 1 = 40^\\circ$ and $m\\angle 1 = m\\angle 2$, find $m\\angle 2$.", "$40^\\circ$"],
    ["Problem 9: Distributive", "Expand $2(x + 5)$.", "$2x + 10$"],
    ["Problem 10: Subtraction Property", "If $AB + CD = EF + CD$, conclude $AB = EF$. Reason?", "Subtraction Property of Equality"],
    ["Problem 11: Definition of bisector", "Ray bisects an angle. What about the two halves?", "They are congruent"],
    ["Problem 12: Theorem", "Is Vertical Angles a postulate or theorem?", "Theorem"],
    ["Problem 13: Given", "In a two-column proof, where does \"Given\" appear?", "As the reason for the first statement(s), taken directly from the problem"],
    ["Problem 14: Challenge — mini proof", "Given: $M$ is the midpoint of $\\overline{AB}$, and $AB = 24$. Prove $AM = 12$, giving a reason for each step.", "$AM=MB$ (Def. of Midpoint); $AM+MB=AB=24$ (Segment Addition Postulate); $2AM=24$ (Substitution); $AM=12$ (Division Property of Equality)"],
    ["Problem 15: Challenge — Congruent Complements", "Given: $\\angle 1$ and $\\angle 2$ are complementary; $\\angle 2$ and $\\angle 3$ are complementary. Prove $\\angle 1 \\cong \\angle 3$, and name the final property used.", "$m\\angle1+m\\angle2=90^\\circ=m\\angle2+m\\angle3$ (Transitive), so $m\\angle1=m\\angle3$ (Subtraction Property of Equality), so $\\angle1\\cong\\angle3$"],
  ],
};
