import { fig, coordPts } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "8.2",
  title: "Weighted Average of Points (Section Formula)",
  intro: "A point $P$ that divides $\\overline{AB}$ in the ratio $AP:PB=m:n$ is a <b>weighted average</b> of the endpoints — it sits closer to whichever endpoint has the larger share of the ratio. Since $P$ is a fraction $\\dfrac{m}{m+n}$ of the way from $A$ to $B$, you can find it with $P=A+\\dfrac{m}{m+n}(B-A)$, which expands to the section formula $P=\\left(\\dfrac{nx_A+mx_B}{m+n},\\dfrac{ny_A+my_B}{m+n}\\right)$. When $m=n$ (ratio $1:1$), this collapses to the ordinary midpoint formula — the midpoint is just the special case of a $1:1$ weighted average. This worksheet also runs the formula in reverse: given the partition point and one endpoint, find the missing endpoint.",
  examples: [
    ["Example 1: Ratio $1:2$ from $A$",
      "$A(0,0)$, $B(6,9)$. Point $P$ divides $\\overline{AB}$ so that $AP:PB=1:2$. Find $P$.",
      fig(coordPts([{ x: 0, y: 0, label: "A" }, { x: 2, y: 3, label: "P", color: "#2563eb" }, { x: 6, y: 9, label: "B" }]), "$P$ is $\\tfrac{1}{3}$ of the way from $A$ to $B$.") +
      "$P$ is $\\dfrac{m}{m+n}=\\dfrac{1}{3}$ of the way from $A$ to $B$:<br>" +
      "$P=A+\\dfrac{1}{3}(B-A)=(0,0)+\\dfrac{1}{3}(6,9)=(2,3)$.<br>" +
      "<b>Answer:</b> $P=(2,3)$."],

    ["Example 2: Ratio $2:1$ from $A$",
      "$A(1,2)$, $B(7,8)$. Point $P$ divides $\\overline{AB}$ so that $AP:PB=2:1$. Find $P$.",
      "Use the section formula with $m=2$, $n=1$:<br>" +
      "$x_P=\\dfrac{n\\cdot x_A+m\\cdot x_B}{m+n}=\\dfrac{1(1)+2(7)}{3}=\\dfrac{15}{3}=5$.<br>" +
      "$y_P=\\dfrac{1(2)+2(8)}{3}=\\dfrac{18}{3}=6$.<br>" +
      "<b>Answer:</b> $P=(5,6)$."],

    ["Example 3: Midpoint as the $1:1$ special case",
      "$A(4,-2)$, $B(10,6)$. Find the point that divides $\\overline{AB}$ in ratio $1:1$.",
      "With $m=n=1$, the section formula becomes $P=\\left(\\dfrac{x_A+x_B}{2},\\dfrac{y_A+y_B}{2}\\right)$ — the ordinary midpoint formula.<br>" +
      "$P=\\left(\\dfrac{4+10}{2},\\dfrac{-2+6}{2}\\right)=(7,2)$.<br>" +
      "<b>Answer:</b> $P=(7,2)$ (the midpoint)."],

    ["Example 4: Fraction form",
      "Find the point that is $\\dfrac{3}{4}$ of the way from $A(0,0)$ to $B(8,4)$.",
      "Identify the endpoints and the fraction of the way from $A$ to $B$: $A=(0,0)$, $B=(8,4)$, fraction $=\\dfrac{3}{4}$.<br>" +
      "Apply $P=A+\\dfrac{3}{4}(B-A)$:<br>" +
      "$P=A+\\dfrac{3}{4}(B-A)=(0,0)+\\dfrac{3}{4}(8,4)=(6,3)$.<br>" +
      "This point sits three-quarters of the way from $A$ toward $B$.<br>" +
      "<b>Answer:</b> $(6,3)$."],

    ["Example 5: Where the formula comes from",
      "Explain why $P=A+\\dfrac{m}{m+n}(B-A)$ is equivalent to $P=\\left(\\dfrac{nx_A+mx_B}{m+n},\\dfrac{ny_A+my_B}{m+n}\\right)$.",
      "Start with the $x$-coordinate: $x_P=x_A+\\dfrac{m}{m+n}(x_B-x_A)$.<br>" +
      "Distribute: $x_P=x_A+\\dfrac{m\\,x_B}{m+n}-\\dfrac{m\\,x_A}{m+n} = \\dfrac{(m+n)x_A-m\\,x_A+m\\,x_B}{m+n}=\\dfrac{n\\,x_A+m\\,x_B}{m+n}$.<br>" +
      "The same algebra applies to $y$. Both forms give the same point — the second form is just easier to compute directly."],

    ["Example 6: Ratio $3:1$",
      "$A(-2,5)$, $B(6,1)$; $AP:PB=3:1$. Find $P$.",
      "$m=3$, $n=1$:<br>" +
      "$x_P=\\dfrac{1(-2)+3(6)}{4}=\\dfrac{-2+18}{4}=\\dfrac{16}{4}=4$.<br>" +
      "$y_P=\\dfrac{1(5)+3(1)}{4}=\\dfrac{5+3}{4}=\\dfrac{8}{4}=2$.<br>" +
      "<b>Answer:</b> $P=(4,2)$."],

    ["Example 7: One-fourth of the way",
      "Find the point $\\dfrac{1}{4}$ of the way from $(2,3)$ to $(10,11)$.",
      "Identify the endpoints and the fraction: starting point $(2,3)$, ending point $(10,11)$, fraction $=\\dfrac{1}{4}$.<br>" +
      "Apply the weighted-average formula:<br>" +
      "$P=(2,3)+\\dfrac{1}{4}\\big((10,11)-(2,3)\\big)=(2,3)+\\dfrac{1}{4}(8,8)=(2,3)+(2,2)=(4,5)$.<br>" +
      "This point lies one-fourth of the way along the segment from $(2,3)$ to $(10,11)$.<br>" +
      "<b>Answer:</b> $(4,5)$."],

    ["Example 8: Ratio to fraction",
      "For ratio $AP:PB=2:3$, what fraction of the way from $A$ to $B$ is $P$?",
      "The fraction of the way from $A$ is always $\\dfrac{m}{m+n}$ where $m:n$ is the ratio from $A$: $\\dfrac{2}{2+3}=\\dfrac{2}{5}$.<br>" +
      "<b>Answer:</b> $\\dfrac{2}{5}$."],

    ["Example 9: Partition giving a decimal",
      "$A(0,8)$, $B(10,0)$; ratio $1:4$ from $A$. Find $P$.",
      "Identify $m$ and $n$ from the ratio $AP:PB=1:4$, so $m=1$, $n=4$.<br>" +
      "Apply the section formula:<br>" +
      "$x_P=\\dfrac{4(0)+1(10)}{5}=\\dfrac{10}{5}=2$.<br>" +
      "$y_P=\\dfrac{4(8)+1(0)}{5}=\\dfrac{32}{5}=6.4$.<br>" +
      "The point need not have whole-number coordinates.<br>" +
      "<b>Answer:</b> $P=(2,6.4)$."],

    ["Example 10: Work backward to find the missing endpoint",
      "Point $P(2,3)$ divides $\\overline{AB}$ so that $AP:PB=1:3$, and $A=(0,0)$. Find $B$.",
      "The fraction of the way from $A$ to $B$ is $\\dfrac{m}{m+n}=\\dfrac{1}{4}$, so $P=A+\\dfrac{1}{4}(B-A)$.<br>" +
      "Since $A=(0,0)$, this simplifies to $P=\\dfrac{1}{4}B$.<br>" +
      "Solve for $B$: $B=4P=4(2,3)=(8,12)$.<br>" +
      "<b>Answer:</b> $B=(8,12)$."],

    ["Example 11: Application — rest stop on a trail",
      "A hiking trail runs from the trailhead $T(0,0)$ to the summit $S(20,15)$ (coordinates in hundreds of meters). A rest stop sits exactly $\\dfrac{2}{5}$ of the way from $T$ to $S$. Find the coordinates of the rest stop.",
      "$P=T+\\dfrac{2}{5}(S-T)=(0,0)+\\dfrac{2}{5}(20,15)=\\left(\\dfrac{2}{5}\\cdot20,\\dfrac{2}{5}\\cdot15\\right)=(8,6)$.<br>" +
      "<b>Answer:</b> the rest stop is at $(8,6)$, i.e., $800$ m east and $600$ m north of the trailhead."],
  ],
  questions: [
    ["Problem 1: Ratio $1:1$", "$A(2,4)$, $B(8,10)$. Midpoint?", "$(5,7)$"],
    ["Problem 2: Ratio $1:2$", "$A(0,0)$, $B(9,6)$; $AP:PB=1:2$. Find $P$.", "$(3,2)$"],
    ["Problem 3: Ratio $2:1$", "$A(1,1)$, $B(4,7)$; $AP:PB=2:1$. Find $P$.", "$(3,5)$"],
    ["Problem 4: Fraction", "$\\dfrac{1}{4}$ of the way from $(0,0)$ to $(12,8)$.", "$(3,2)$"],
    ["Problem 5: Fraction", "$\\dfrac{3}{4}$ of the way from $(0,0)$ to $(12,8)$.", "$(9,6)$"],
    ["Problem 6: Ratio $3:2$", "$A(0,0)$, $B(10,15)$; $AP:PB=3:2$. Find $P$.", "$(6,9)$"],
    ["Problem 7: Fraction", "What fraction of the way is ratio $1:3$ from $A$?", "$\\dfrac{1}{4}$"],
    ["Problem 8: Partition", "$A(-4,2)$, $B(8,8)$; $AP:PB=1:2$. Find $P$.", "$(0,4)$"],
    ["Problem 9: Ratio $3:1$", "$A(2,0)$, $B(6,8)$; $AP:PB=3:1$. Find $P$.", "$(5,6)$"],
    ["Problem 10: Midpoint", "Ratio $1:1$ gives the…", "Midpoint"],
    ["Problem 11: Partition", "$A(5,5)$, $B(5,17)$; halfway point?", "$(5,11)$"],
    ["Problem 12: Fraction", "$\\dfrac{2}{5}$ of the way from $(1,2)$ to $(11,12)$.", "$(5,6)$"],
    ["Problem 13: Ratio $2:3$", "$A(0,6)$, $B(10,1)$; $AP:PB=2:3$. Find $P$.", "$(4,4)$"],
    ["Problem 14: Challenge", "Point $P(4,5)$ divides $\\overline{AB}$ so that $AP:PB=3:5$, with $A(1,2)$. Find $B$.", "$B=(9,10)$"],
    ["Problem 15: Challenge", "$A(2,-1)$, $B(14,11)$; $AP:PB=3:1$. Find $P$, then verify $AP+PB=AB$ using the distance formula.", "$P=(11,8)$; $AP=9\\sqrt2$, $PB=3\\sqrt2$, $AB=12\\sqrt2$, and $9\\sqrt2+3\\sqrt2=12\\sqrt2$"],
  ],
};
