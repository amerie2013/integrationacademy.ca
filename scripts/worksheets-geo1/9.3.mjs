import { fig, chordPerp, tangentSecant } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "9.3",
  title: "Chords, Tangents, and Secants",
  intro: "Several clean theorems govern how chords, tangents, and secants interact with a circle. A radius drawn perpendicular to a chord always bisects it (and the converse: the perpendicular from the center to a chord bisects it), which lets the Pythagorean Theorem connect radius, chord, and distance-to-center. A tangent line is always perpendicular to the radius at the point of tangency, and the two tangent segments drawn from the same external point are always congruent. For intersecting chords, secants, and tangents, two families of theorems apply: <b>length</b> theorems (chord–chord: $a\\cdot b=c\\cdot d$; tangent–secant: $t^2=(\\text{whole})(\\text{external})$; secant–secant: $(\\text{whole}_1)(\\text{external}_1)=(\\text{whole}_2)(\\text{external}_2)$ — together called the Power of a Point) and <b>angle</b> theorems (two chords meeting inside: angle $=\\dfrac{1}{2}$(sum of intercepted arcs); two secants/tangents meeting outside: angle $=\\dfrac{1}{2}$(difference of intercepted arcs)). This worksheet uses all of these, including multi-secant algebra and a real-world tangent application.",
  examples: [
    ["Example 1: Perpendicular radius bisects the chord",
      "A circle has radius $13$. A chord is $5$ units from the center. Find the chord's length.",
      fig(chordPerp(), "The radius perpendicular to the chord bisects it, forming a right triangle.") +
      "The perpendicular from the center, the half-chord, and the radius form a right triangle:<br>" +
      "half-chord $=\\sqrt{13^2-5^2}=\\sqrt{169-25}=\\sqrt{144}=12$.<br>" +
      "Full chord $=2(12)=24$.<br>" +
      "<b>Answer:</b> $24$."],

    ["Example 2: Congruent tangent segments",
      "From external point $P$, two tangent segments to a circle measure $3x+2$ and $23$. Find $x$.",
      fig(tangentSecant(), "Two tangent segments from the same external point are always congruent.") +
      "Tangent segments from the same external point are congruent:<br>" +
      "$3x+2=23$<br>" +
      "$3x=21 \\Rightarrow x=7$.<br>" +
      "<b>Answer:</b> $x=7$."],

    ["Example 3: Chord–chord product",
      "Two chords intersect inside a circle. One chord is split into segments $6$ and $12$; the other into segments $8$ and $x$. Find $x$.",
      "The products of the segments of intersecting chords are equal:<br>" +
      "$6\\cdot12=8x$<br>" +
      "$72=8x \\Rightarrow x=9$.<br>" +
      "<b>Answer:</b> $9$."],

    ["Example 4: Tangent–secant length",
      "A tangent segment has length $t$. A secant from the same external point has external part $4$ and whole length $16$. Find $t$.",
      "Identify the relationship: for a tangent and secant from the same external point, the tangent squared equals the secant's whole length times its external part: $t^2=(\\text{whole})(\\text{external})$.<br>" +
      "Compute: $t^2=16\\cdot4=64$, so $t=\\sqrt{64}=8$.<br>" +
      "<b>Answer:</b> $8$."],

    ["Example 5: Exterior angle from two secants",
      "Two secants from an external point intercept arcs of $100^\\circ$ and $30^\\circ$. Find the angle at the external point.",
      "Exterior angle $=\\dfrac{1}{2}(\\text{far arc}-\\text{near arc})=\\dfrac{1}{2}(100^\\circ-30^\\circ)=\\dfrac{1}{2}(70^\\circ)=35^\\circ$.<br>" +
      "<b>Answer:</b> $35^\\circ$."],

    ["Example 6: Distance from center to a chord",
      "A circle has radius $10$ and a chord of length $16$. Find the distance from the center to the chord.",
      "Identify: the perpendicular from the center bisects the chord, forming a right triangle with legs equal to the half-chord and the unknown distance, and hypotenuse equal to the radius.<br>" +
      "Half-chord $=\\dfrac{16}{2}=8$. Apply the Pythagorean Theorem: distance $=\\sqrt{10^2-8^2}=\\sqrt{100-64}=\\sqrt{36}=6$.<br>" +
      "<b>Answer:</b> $6$."],

    ["Example 7: Tangent segments — algebra",
      "Tangent segments from an external point measure $5x-3$ and $27$. Find $x$.",
      "Identify: the two tangent segments come from the same external point, so they must be congruent.<br>" +
      "Set them equal and solve: $5x-3=27 \\Rightarrow 5x=30 \\Rightarrow x=6$.<br>" +
      "<b>Answer:</b> $x=6$ (each tangent segment then measures $27$)."],

    ["Example 8: Interior angle from two chords",
      "Two chords intersect inside a circle, intercepting arcs of $95^\\circ$ and $55^\\circ$. Find the angle formed.",
      "Interior angle $=\\dfrac{1}{2}(\\text{sum of intercepted arcs})=\\dfrac{1}{2}(95^\\circ+55^\\circ)=\\dfrac{1}{2}(150^\\circ)=75^\\circ$.<br>" +
      "<b>Answer:</b> $75^\\circ$."],

    ["Example 9: Tangent–secant, solve for the whole secant",
      "A tangent segment is $12$; a secant from the same external point has external segment $8$. Find the whole length of the secant.",
      "Identify: use the tangent–secant relationship $t^2=(\\text{whole})(\\text{external})$, this time solving for the whole length instead of the tangent.<br>" +
      "Compute: $12^2=8w \\Rightarrow 144=8w \\Rightarrow w=18$.<br>" +
      "<b>Answer:</b> $18$."],

    ["Example 10: Two secants — algebra with the Power of a Point",
      "From external point $P$, one secant has near (external) segment $3$ and far segment $x$; another secant has near segment $4$ and far segment $8$. Find $x$.",
      "Power of a Point (secant–secant): (near$_1$)(whole$_1$) $=$ (near$_2$)(whole$_2$):<br>" +
      "$3(3+x)=4(4+8)$<br>" +
      "$9+3x=4(12)=48$<br>" +
      "$3x=39 \\Rightarrow x=13$.<br>" +
      "<b>Answer:</b> $x=13$ (whole length of the first secant $=3+13=16$)."],

    ["Example 11: Application — line of sight to a pond's edge",
      "An observer stands $5$ km from the center of a circular pond of radius $3$ km. Find the length of the tangent line of sight from the observer to the edge of the pond.",
      "The tangent segment, the radius to the point of tangency, and the segment from the observer to the center form a right triangle (radius $\\perp$ tangent at the point of tangency):<br>" +
      "$t^2+r^2=d^2$, where $d$ is the distance from the observer to the center.<br>" +
      "$t^2+3^2=5^2 \\Rightarrow t^2=25-9=16 \\Rightarrow t=4$.<br>" +
      "<b>Answer:</b> $4$ km."],
  ],
  questions: [
    ["Problem 1: Chord length", "Radius $15$, distance to chord $9$. Find the chord length.", "$24$"],
    ["Problem 2: Congruent tangents", "Tangent segments $4x+1$ and $21$. Find $x$.", "$x=5$"],
    ["Problem 3: Chord–chord", "Segments $9$ and $8$; other chord $6$ and $x$. Find $x$.", "$x=12$"],
    ["Problem 4: Tangent–secant", "Tangent $6$; whole secant $18$. Find the external part.", "$2$"],
    ["Problem 5: Exterior angle", "Intercepted arcs $120^\\circ$ and $40^\\circ$ outside the circle. Find the angle.", "$40^\\circ$"],
    ["Problem 6: Distance to chord", "Radius $13$, chord $10$. Find the distance from center to chord.", "$12$"],
    ["Problem 7: Interior angle", "Intersecting chords intercept arcs $80^\\circ$ and $50^\\circ$. Find the angle.", "$65^\\circ$"],
    ["Problem 8: Tangents", "Tangent segments $2x+7$ and $x+15$. Find $x$ and the length.", "$x=8$; length $23$"],
    ["Problem 9: Chord–chord", "Segments $4$ and $15$; other $6$ and $x$. Find $x$.", "$x=10$"],
    ["Problem 10: Tangent–secant", "Tangent $9$; external part $3$. Find the whole secant.", "$27$"],
    ["Problem 11: Radius to tangent", "A radius meets a tangent at the point of contact. What angle is formed?", "$90^\\circ$"],
    ["Problem 12: Exterior angle", "Arcs $90^\\circ$ and $20^\\circ$ from two secants outside. Find the angle.", "$35^\\circ$"],
    ["Problem 13: Chord length", "Radius $5$, distance to chord $3$. Find the chord length.", "$8$"],
    ["Problem 14: Challenge", "From external point $P$, one secant has near segment $5$ and far segment $x$; another has near segment $6$ and far segment $9$. Find $x$.", "$x=13$"],
    ["Problem 15: Challenge", "An observer stands $13$ km from the center of a circular pond of radius $5$ km. Find the tangent line-of-sight distance to the pond's edge.", "$12$ km"],
  ],
};
