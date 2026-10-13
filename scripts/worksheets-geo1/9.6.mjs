import { fig, cyclicQuad, thalesFig } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "9.6",
  title: "Inscribed Triangles & Quadrilaterals",
  intro: "A polygon is <b>cyclic</b> when all of its vertices lie on a single circle. For a cyclic quadrilateral, opposite angles are always <b>supplementary</b> ($180^\\circ$ total) — this follows directly from the Inscribed Angle Theorem, since each pair of opposite angles intercepts a pair of arcs that together make up the entire $360^\\circ$ circle. The converse is also true and useful: if a quadrilateral's opposite angles are supplementary, it can be inscribed in a circle. <b>Thales' Theorem</b> (from the previous lesson) is the triangle version of this idea: an inscribed triangle with one side as a diameter always has a right angle opposite that diameter. This worksheet combines both ideas, including the proof of the cyclic-quadrilateral rule and problems that mix arcs, angles, and algebra.",
  examples: [
    ["Example 1: Opposite angles are supplementary",
      "Cyclic quadrilateral $ABCD$ has $m\\angle A=85^\\circ$. Find $m\\angle C$.",
      fig(cyclicQuad(), "Opposite angles $A$ and $C$ intercept arcs that together fill the whole circle.") +
      "Opposite angles of a cyclic quadrilateral sum to $180^\\circ$:<br>" +
      "$m\\angle C=180^\\circ-85^\\circ=95^\\circ$.<br>" +
      "<b>Answer:</b> $95^\\circ$."],

    ["Example 2: Solve for $x$",
      "Cyclic quadrilateral $ABCD$ has $m\\angle B=(3x+10)^\\circ$ and $m\\angle D=(2x+30)^\\circ$ (opposite angles). Find $x$ and both angles.",
      "Identify that $\\angle B$ and $\\angle D$ are opposite angles of a cyclic quadrilateral, so they are supplementary.<br>" +
      "Set up and solve the equation:<br>" +
      "$(3x+10)+(2x+30)=180$<br>" +
      "$5x+40=180$<br>" +
      "$5x=140 \\Rightarrow x=28$.<br>" +
      "$m\\angle B=3(28)+10=94^\\circ$; $m\\angle D=2(28)+30=86^\\circ$.<br>" +
      "<b>Check:</b> $94+86=180^\\circ$. ✓"],

    ["Example 3: Thales' Theorem in a cyclic figure",
      "Triangle $ABC$ is inscribed in a circle with diameter $\\overline{AC}$. $m\\angle A=40^\\circ$. Find $m\\angle C$.",
      fig(thalesFig(), "The angle opposite a diameter is always $90^\\circ$.") +
      "$m\\angle B=90^\\circ$ (Thales' Theorem), so $m\\angle C=180^\\circ-90^\\circ-40^\\circ=50^\\circ$.<br>" +
      "<b>Answer:</b> $50^\\circ$."],

    ["Example 4: Arcs and an inscribed angle",
      "Cyclic quadrilateral $ABCD$ has arcs $m\\widehat{AB}=80^\\circ$, $m\\widehat{BC}=95^\\circ$, $m\\widehat{CD}=x$, $m\\widehat{DA}=110^\\circ$. Find $x$ and $m\\angle B$.",
      "All four arcs sum to $360^\\circ$: $80+95+x+110=360 \\Rightarrow 285+x=360 \\Rightarrow x=75^\\circ$.<br>" +
      "$\\angle B$ is inscribed and intercepts arc $ADC$ (the arc from $A$ to $C$ through $D$, not containing $B$): $m\\widehat{ADC}=m\\widehat{AD}+m\\widehat{DC}=110^\\circ+75^\\circ=185^\\circ$.<br>" +
      "$m\\angle B=\\dfrac{1}{2}(185^\\circ)=92.5^\\circ$.<br>" +
      "<b>Answer:</b> $x=75^\\circ$; $m\\angle B=92.5^\\circ$."],

    ["Example 5: Can it be cyclic?",
      "A quadrilateral has $m\\angle A=70^\\circ$ and $m\\angle C=100^\\circ$ (opposite angles). Can it be inscribed in a circle?",
      "Check the supplementary requirement: $70^\\circ+100^\\circ=170^\\circ\\neq180^\\circ$.<br>" +
      "<b>Answer:</b> No — the opposite angles don't sum to $180^\\circ$, so this quadrilateral cannot be inscribed in a circle."],

    ["Example 6: Opposite angles",
      "A cyclic quadrilateral has $m\\angle A=112^\\circ$. Find $m\\angle C$.",
      "Identify that $\\angle A$ and $\\angle C$ are opposite angles of a cyclic quadrilateral, so they must be supplementary.<br>" +
      "Subtract from $180^\\circ$:<br>" +
      "$180^\\circ-112^\\circ=68^\\circ$.<br>" +
      "<b>Answer:</b> $68^\\circ$."],

    ["Example 7: Solve for $x$",
      "$m\\angle B=4x$ and $m\\angle D=(2x+30)^\\circ$ (opposite angles). Find $x$ and both angles.",
      "Identify that opposite angles of a cyclic quadrilateral sum to $180^\\circ$.<br>" +
      "Set up and solve the equation:<br>" +
      "$4x+2x+30=180$<br>" +
      "$6x=150 \\Rightarrow x=25$.<br>" +
      "$m\\angle B=4(25)=100^\\circ$; $m\\angle D=2(25)+30=80^\\circ$.<br>" +
      "<b>Answer:</b> $x=25$; angles $100^\\circ$ and $80^\\circ$."],

    ["Example 8: Thales — algebra",
      "A right triangle is inscribed with the hypotenuse as a diameter; the other two angles are $3x$ and $2x$. Find $x$ and both angles.",
      "$3x+2x=90^\\circ$ (the two acute angles must complete the $90^\\circ$ right angle to reach $180^\\circ$ total):<br>" +
      "$5x=90^\\circ \\Rightarrow x=18^\\circ$.<br>" +
      "Angles: $54^\\circ$ and $36^\\circ$.<br>" +
      "<b>Answer:</b> $x=18^\\circ$; angles $54^\\circ$ and $36^\\circ$."],

    ["Example 9: Cyclic test",
      "A quadrilateral has opposite angles $95^\\circ$ and $85^\\circ$. Can it be cyclic?",
      "$95^\\circ+85^\\circ=180^\\circ$.<br>" +
      "<b>Answer:</b> Yes — the angles are supplementary, so the quadrilateral can be inscribed in a circle."],

    ["Example 10: Proving opposite angles are supplementary",
      "Prove that opposite angles $\\angle A$ and $\\angle C$ of cyclic quadrilateral $ABCD$ are supplementary.",
      "$\\angle A$ is an inscribed angle intercepting arc $BCD$ (the arc from $B$ to $D$ passing through $C$, which does not contain $A$): $m\\angle A=\\dfrac{1}{2}m\\widehat{BCD}$.<br>" +
      "$\\angle C$ is an inscribed angle intercepting arc $BAD$ (the arc from $B$ to $D$ passing through $A$, which does not contain $C$): $m\\angle C=\\dfrac{1}{2}m\\widehat{BAD}$.<br>" +
      "Arcs $BCD$ and $BAD$ together make up the entire circle: $m\\widehat{BCD}+m\\widehat{BAD}=360^\\circ$.<br>" +
      "Adding the two angle equations: $m\\angle A+m\\angle C=\\dfrac{1}{2}\\big(m\\widehat{BCD}+m\\widehat{BAD}\\big)=\\dfrac{1}{2}(360^\\circ)=180^\\circ$.<br>" +
      "The same argument (swapping which pair of arcs you use) proves $\\angle B$ and $\\angle D$ are supplementary too."],

    ["Example 11: Application — a circular skylight frame",
      "A circular skylight is framed by quadrilateral $PQRS$ inscribed in the circle. A carpenter cuts corner $P$ at $118^\\circ$. What angle should the opposite corner $R$ be cut at so the frame fits the circular opening?",
      "Opposite corners of a cyclic quadrilateral must be supplementary:<br>" +
      "$m\\angle R=180^\\circ-118^\\circ=62^\\circ$.<br>" +
      "<b>Answer:</b> $62^\\circ$."],
  ],
  questions: [
    ["Problem 1: Opposite angles", "Cyclic quadrilateral has $m\\angle A=78^\\circ$. Find $m\\angle C$.", "$102^\\circ$"],
    ["Problem 2: Opposite angles", "Cyclic quadrilateral has $m\\angle B=105^\\circ$. Find $m\\angle D$.", "$75^\\circ$"],
    ["Problem 3: Solve for $x$", "$m\\angle A=5x$ and $m\\angle C=(3x+20)^\\circ$ (opposite). Find $x$ and both angles.", "$x=20$; angles $100^\\circ$, $80^\\circ$"],
    ["Problem 4: Thales", "Diameter $\\overline{AB}$, point $C$ on circle. $m\\angle A=50^\\circ$. Find $m\\angle B$.", "$40^\\circ$"],
    ["Problem 5: Cyclic test", "Opposite angles $110^\\circ$ and $70^\\circ$. Can it be cyclic?", "Yes"],
    ["Problem 6: Cyclic test", "Opposite angles $88^\\circ$ and $95^\\circ$. Can it be cyclic?", "No"],
    ["Problem 7: Solve for $x$", "$m\\angle B=(2x+10)^\\circ$ and $m\\angle D=(4x-4)^\\circ$ (opposite). Find $x$ and both angles.", "$x=29$; angles $68^\\circ$, $112^\\circ$"],
    ["Problem 8: Arc sum", "Arcs of a cyclic quad: $70^\\circ$, $100^\\circ$, $85^\\circ$, and $x$. Find $x$.", "$105^\\circ$"],
    ["Problem 9: Inscribed angle", "In a cyclic quad, $\\angle A$ intercepts arc $BCD=160^\\circ$. Find $m\\angle A$.", "$80^\\circ$"],
    ["Problem 10: Thales", "Inscribed right triangle; both acute angles equal. Find each acute angle.", "$45^\\circ$ each"],
    ["Problem 11: Opposite angles", "$m\\angle A=125^\\circ$. Find $m\\angle C$.", "$55^\\circ$"],
    ["Problem 12: Vocabulary", "What must be true of opposite angles in a cyclic quadrilateral?", "They are supplementary (sum to $180^\\circ$)"],
    ["Problem 13: Thales", "Diameter hypotenuse; one acute angle is $32^\\circ$. Find the other.", "$58^\\circ$"],
    ["Problem 14: Challenge", "Cyclic quadrilateral: $m\\angle A=(3x+20)^\\circ$ and $m\\angle C=(2x+10)^\\circ$ (opposite). Find $x$, $m\\angle A$, and $m\\angle C$. Then, if $m\\angle B=(4x-15)^\\circ$, find $m\\angle D$.", "$x=30$; $m\\angle A=110^\\circ$, $m\\angle C=70^\\circ$; $m\\angle B=105^\\circ$, so $m\\angle D=75^\\circ$"],
    ["Problem 15: Challenge", "In cyclic quadrilateral $ABCD$, diagonal $\\overline{AC}$ is a diameter of the circle. Explain why both $m\\angle ABC$ and $m\\angle ADC$ must equal $90^\\circ$.", "$\\angle ABC=90^\\circ$ by Thales' Theorem; since $ABCD$ is cyclic, $\\angle ADC=180^\\circ-90^\\circ=90^\\circ$ too"],
  ],
};
