// MTH1W 1.11 — Chapter 1 Review (self-study format, new lesson placed after 1.10)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, frac, sci, choice } from "./lib.mjs";

export const TITLE = "1.11 Chapter 1 Review";
// New lesson: created on --apply with this id at this position (later lessons shift down by one).
export const NEW = { id: "6f1c2b7e-1a11-4c0e-9b11-c1a9f0000111", position: 10 };

const MAP = String.raw`<div style="text-align:center;margin:12px 0;"><svg viewBox="0 0 640 250" width="640" style="max-width:100%;height:auto;" role="img" aria-label="Chapter 1 concept map">
<defs><marker id="cm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>
<g font-family="Arial" font-size="13" font-weight="700" text-anchor="middle">
<rect x="250" y="8" width="140" height="40" rx="10" fill="#ede9fe" stroke="#6d28d9"/><text x="320" y="33" fill="#6d28d9">1.1 Number sets</text>
<rect x="40" y="88" width="150" height="40" rx="10" fill="#dbeafe" stroke="#1e40af"/><text x="115" y="113" fill="#1e40af">1.2–1.3 Integers</text>
<rect x="245" y="88" width="150" height="40" rx="10" fill="#dcfce7" stroke="#15803d"/><text x="320" y="113" fill="#15803d">1.4–1.5 Fractions</text>
<rect x="450" y="88" width="150" height="40" rx="10" fill="#fee2e2" stroke="#be123c"/><text x="525" y="113" fill="#be123c">1.10 Density, limits</text>
<rect x="40" y="180" width="150" height="40" rx="10" fill="#fef3c7" stroke="#b45309"/><text x="115" y="205" fill="#b45309">1.6–1.7 Powers</text>
<rect x="245" y="180" width="150" height="40" rx="10" fill="#e0f2fe" stroke="#0369a1"/><text x="320" y="205" fill="#0369a1">1.8 Ratios</text>
<rect x="450" y="180" width="150" height="40" rx="10" fill="#f1f5f9" stroke="#334155"/><text x="525" y="205" fill="#334155">1.9 Rates, percents</text>
</g>
<g stroke="#475569" stroke-width="1.8" fill="none" marker-end="url(#cm)">
<path d="M290,48 L140,86"/><path d="M320,48 L320,86"/><path d="M350,48 L500,86"/><path d="M115,128 L115,178"/><path d="M190,108 L243,108"/><path d="M320,128 L320,178"/><path d="M395,200 L448,200"/><path d="M395,108 L448,108"/>
</g>
<g font-family="Arial" font-size="11" fill="#475569"><text x="128" y="157">signs carry over</text><text x="330" y="157">fractions → ratios</text><text x="421" y="98">midpoints</text><text x="421" y="193">per unit</text></g>
</svg><div style="font-size:13px;color:#64748b;">How the chapter fits together: every later topic reuses integer signs and fraction skills.</div></div>`;

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 1 Review — Number Sense",
    overview: String.raw`This page pulls the whole chapter together before the chapter test. It summarises every topic on one screen, shows how the topics connect, and gives you mixed practice — the kind of questions where <em>you</em> have to decide which skill to use. Work through it after you have finished 1.1–1.10, and go back to any lesson where you get stuck.`,
    goals: [
      "recall the key idea, a typical example and the most common mistake for each topic in the chapter;",
      "choose the right strategy when a question does not say which lesson it comes from;",
      "solve multi-step problems that combine integers, fractions, decimals, powers, ratios and percents;",
      "check your own readiness for the chapter test with the self-assessment list.",
    ],
    curriculum: "B1.1–B1.3, B2.1–B2.2, B3.1–B3.5 (whole chapter)",
    book: "Nelson Principles of Mathematics 9, Chapter 1 Review and Chapter Self-Test",
    prior: [
      [String.raw`What is \((-3)\times(-4)\)? What is \((-3)+(-4)\)?`, String.raw`\(12\) and \(-7\). Different rules for multiplying and adding.`],
      [String.raw`What is \(2^{-2}\)?`, String.raw`\(\tfrac14\) — a negative exponent means reciprocal.`],
      [String.raw`What is \(15\%\) of \(80\)?`, String.raw`\(12\).`],
    ],
    words: [
      ["Rational number", "can be written \\(\\tfrac ab\\) (integers, \\(b\\neq0\\))", "\\(-2.5=-\\tfrac52\\)"],
      ["Reciprocal", "multiplies with the number to give 1", "\\(\\tfrac34\\leftrightarrow\\tfrac43\\)"],
      ["Exponent laws", "same base: add, subtract or multiply exponents", "\\(x^2x^5=x^7\\)"],
      ["Proportion", "two equal ratios", "\\(\\tfrac{x}{6}=\\tfrac{2}{3}\\)"],
      ["Multiplier", "one-step percent change", "\\(-20\\%\\to\\times0.8\\)"],
    ],
  }),

  section("📌 The chapter on one page", table(["Topic", "Key idea", "Typical example", "Watch out"], [
    ["1.1 Number sets", "\\(\\mathbb N\\subset\\mathbb W\\subset\\mathbb Z\\subset\\mathbb Q\\subset\\mathbb R\\); terminating/repeating decimals are rational", "\\(0.\\overline{2}=\\tfrac29\\)", "simplify first: \\(\\sqrt{25}=5\\)"],
    ["1.2 Add/subtract integers", "\\(a-b=a+(-b)\\)", "\\(-3-(-9)=6\\)", "\\((-3)+(-4)=-7\\), not \\(7\\)"],
    ["1.3 Multiply/divide integers", "same signs \\(+\\), different signs \\(-\\); BEDMAS", "\\((-6)(-5)\\div(-3)=-10\\)", "\\(-3^2=-9\\) but \\((-3)^2=9\\)"],
    ["1.4 Add/subtract fractions", "common denominator first", "\\(\\tfrac23-\\tfrac34=-\\tfrac1{12}\\)", "never add denominators"],
    ["1.5 Multiply/divide fractions", "multiply across; divide = multiply by reciprocal", "\\(\\tfrac35\\div\\tfrac9{10}=\\tfrac23\\)", "mixed numbers → improper first"],
    ["1.6 Powers", "\\(a^0=1\\), \\(a^{-n}=\\tfrac1{a^n}\\); roots undo powers", "\\(3^{-2}=\\tfrac19\\), \\(\\sqrt{0.36}=0.6\\)", "negative exponent ≠ negative value"],
    ["1.7 Laws, sci. notation", "\\(a^ma^n=a^{m+n}\\), \\(\\tfrac{a^m}{a^n}=a^{m-n}\\), \\((a^m)^n=a^{mn}\\)", "\\(4.2\\times10^{-3}=0.0042\\)", "\\(x^2x^3=x^5\\), not \\(x^6\\)"],
    ["1.8 Ratios", "scale every term by the same number", "\\(12:20=3:5\\)", "order matters; total = sum of parts"],
    ["1.9 Rates, percents", "unit rates; part/whole = %/100; multipliers", "\\(+13\\%\\to\\times1.13\\)", "percent change ÷ the original"],
    ["1.10 Density, limits", "always a midpoint between two rationals", "\\(\\tfrac1n\\to0\\)", "\\(0.\\overline9=1\\)"],
  ])),

  section("📌 How the topics connect", String.raw`${MAP}
  ${keyIdea(String.raw`Most chapter-test mistakes are not new-topic mistakes — they are <strong>sign errors</strong> (1.2–1.3) and <strong>fraction errors</strong> (1.4–1.5) inside a later question. When an answer looks wrong, check those first.`)}`),

  section("📌 Which skill is this?", String.raw`<p>On a test, questions do not say which lesson they come from. Before you calculate, name the skill. Try the five questions below — they ask only <em>which</em> method to use.</p>`),

  practice([
    q("strategy", String.raw`To decide which is larger, \(\tfrac58\) or \(\tfrac{7}{11}\), the best first step is to…`, choice(["rewrite both with a common denominator", "add the numerators and the denominators", "multiply by the reciprocal", "take square roots"], 0),
      "Comparing fractions needs pieces of the same size.", ["Common denominator \\(88\\): \\(\\tfrac{55}{88}\\) and \\(\\tfrac{56}{88}\\)."], String.raw`common denominator (\(\tfrac{7}{11}\) is larger)`),
    q("strategy", String.raw`Which law simplifies \(\dfrac{x^7}{x^{-2}}\)?`, choice(["quotient law: subtract the exponents", "product law: add the exponents", "power of a power: multiply the exponents", "no law applies"], 0),
      "Same base, dividing.", [String.raw`\(x^{7-(-2)}=x^9\).`], String.raw`quotient law, giving \(x^9\)`),
    q("strategy", String.raw`A price is cut by \(15\%\) and then \(13\%\) HST is added. Which single calculation gives the final price \(P\)?`, choice([String.raw`\(P\times0.85\times1.13\)`, String.raw`\(P\times(1-0.15+0.13)\)`, String.raw`\(P\times0.98\)`, String.raw`\(P-15+13\)`], 0),
      "Each percent change is a multiplier; successive changes multiply.", [String.raw`Discount: \(\times0.85\). Tax on the sale price: \(\times1.13\).`], String.raw`\(P\times0.85\times1.13\)`),
    q("strategy", String.raw`To prove that \(0.\overline{6}\) is rational, you should…`, choice(["let x = 0.666…, compare 10x and x, and solve", "round it to 0.67", "show it is between 0 and 1", "square it"], 0),
      "Rational means a quotient of integers — find that fraction.", [String.raw`\(10x-x=6\), so \(x=\tfrac69=\tfrac23\).`], String.raw`compare \(10x\) with \(x\): \(0.\overline6=\tfrac23\)`),
    q("strategy", String.raw`Which fact tells you \(-3-(-8)\) is positive without calculating?`, choice(["subtracting a negative is adding its opposite", "two negatives always make a positive", "the larger number is negative", "subtraction is commutative"], 0),
      "Rewrite subtraction as addition.", [String.raw`\(-3-(-8)=-3+8=5>0\). (“Two negatives make a positive” is a multiplying rule, not an adding rule.)`], "adding the opposite"),
  ]),

  examples([
    ["Number sets and roots", String.raw`Evaluate \(\sqrt{\tfrac{49}{81}}-0.\overline{3}\) and state which number sets the answer belongs to.`,
      [String.raw`\(\sqrt{\tfrac{49}{81}}=\tfrac79\) and \(0.\overline3=\tfrac13=\tfrac39\).`, String.raw`\(\tfrac79-\tfrac39=\tfrac49\).`, String.raw`\(\tfrac49=0.\overline{4}\) is a quotient of integers, not an integer.`],
      String.raw`\(\tfrac49\): rational and real`],
    ["Integers and BEDMAS", String.raw`Evaluate \(-3^2+(-12)\div(-4)\times2-(-5)\).`,
      [String.raw`Exponent: \(-3^2=-9\) (the base is \(3\)).`, String.raw`Left to right: \((-12)\div(-4)=3\), then \(3\times2=6\).`, String.raw`\(-9+6-(-5)=-9+6+5=2\).`],
      String.raw`\(2\)`],
    ["Fractions, mixed numbers and decimals", String.raw`Evaluate \(\left(2\tfrac13-3.5\right)\div\left(-\tfrac{7}{12}\right)\).`,
      [String.raw`Same form: \(2\tfrac13=\tfrac73\), \(3.5=\tfrac72\). Bracket: \(\tfrac{14}{6}-\tfrac{21}{6}=-\tfrac76\).`, String.raw`\(-\tfrac76\div\left(-\tfrac{7}{12}\right)=\tfrac76\times\tfrac{12}{7}\) (same signs → positive).`, String.raw`\(=\tfrac{12}{6}=2\).`],
      String.raw`\(2\)`],
    ["Exponent laws with scientific notation", String.raw`Evaluate \(\dfrac{(6\times10^{5})^2}{1.2\times10^{-3}}\) in scientific notation.`,
      [String.raw`Numerator: \(6^2\times10^{10}=36\times10^{10}\).`, String.raw`Divide: \(\tfrac{36}{1.2}=30\) and \(10^{10-(-3)}=10^{13}\).`, String.raw`\(30\times10^{13}=3\times10^{14}\).`],
      String.raw`\(3\times10^{14}\)`],
    ["Ratio, then percent", String.raw`A drink is mixed concentrate : water \(=2:5\). (a) How much concentrate is in \(4.2\) L of drink? (b) Concentrate costs \(3.60\) dollars per litre and is \(25\%\) off. What does that amount cost?`,
      [String.raw`(a) \(7\) parts make \(4.2\) L, so one part is \(0.6\) L; concentrate \(=2\times0.6=1.2\) L.`, String.raw`(b) Full price \(1.2\times3.60=4.32\) dollars; \(25\%\) off: \(4.32\times0.75=3.24\).`],
      String.raw`(a) \(1.2\) L; (b) \(3.24\) dollars`],
  ]),

  section("📌 Mixed review", String.raw`<p>These five questions each combine two or more lessons. Estimate first, then check.</p>`),

  practice([
    q("powers + BEDMAS", String.raw`Evaluate \((-2)^3-4^{-1}\times12\).`, num(-11), String.raw`\(4^{-1}=\tfrac14\).`, [String.raw`\((-2)^3=-8\).`, String.raw`\(\tfrac14\times12=3\).`, String.raw`\(-8-3=-11\).`], String.raw`\(-11\)`),
    q("rational numbers", String.raw`Evaluate \(\tfrac34-1\tfrac16+(-0.5)\). Give a fraction.`, frac(-11, 12), "Change everything to twelfths.", [String.raw`\(\tfrac{9}{12}-\tfrac{14}{12}-\tfrac{6}{12}\).`, String.raw`\(=-\tfrac{11}{12}\).`], String.raw`\(-\tfrac{11}{12}\)`, { placeholder: "e.g. -5/6" }),
    q("scientific notation", String.raw`Write \(0.0072\times5000\) in scientific notation.`, sci(3.6, 1), String.raw`\(7.2\times10^{-3}\times5\times10^{3}\).`, [String.raw`\(7.2\times5=36\) and \(10^{-3+3}=10^0\).`, String.raw`\(36=3.6\times10^{1}\).`], String.raw`\(3.6\times10^{1}\)`, { placeholder: "e.g. 4.5 x 10^2" }),
    q("ratio", String.raw`Share \(156\) dollars in the ratio \(5:7\). How many dollars is the larger share?`, num(91), "Total parts, then one part.", [String.raw`\(12\) parts; one part \(=13\).`, String.raw`\(7\times13=91\).`], String.raw`\(91\) dollars`),
    q("density", String.raw`Find the midpoint of \(-0.4\) and \(\tfrac14\). Give a decimal.`, num(-0.075), String.raw`\(\tfrac14=0.25\); average the two.`, [String.raw`\(-0.4+0.25=-0.15\).`, String.raw`\(-0.15\div2=-0.075\).`], String.raw`\(-0.075\)`),
  ]),

  section("📌 Am I ready for the test?", String.raw`<p>Tick each statement only if you can do it <em>without looking at your notes</em>. If you cannot, the lesson number tells you where to go back.</p>
  <ul style="list-style:none;padding-left:0;">
    ${[
      ["1.1", "I can classify any number, and turn a repeating decimal into a fraction."],
      ["1.2", "I can add and subtract integers, and explain why subtracting a negative adds."],
      ["1.3", "I can multiply and divide integers and use BEDMAS with brackets and powers."],
      ["1.4", "I can compare, add and subtract fractions and mixed numbers, including negatives."],
      ["1.5", "I can multiply and divide fractions, and calculate with decimals and fractions together."],
      ["1.6", "I can evaluate zero and negative exponents, and use square roots to undo squares."],
      ["1.7", "I can use the exponent laws and calculate in scientific notation."],
      ["1.8", "I can simplify ratios, solve proportions and share in a ratio."],
      ["1.9", "I can find unit rates, signed rates of change, percents and percent change."],
      ["1.10", "I can find a number between any two rationals and describe a limit."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  wrapUp({
    qas: [
      ["How should I study for the chapter test?", "Do the mixed review above without notes, mark what you got wrong, and redo the practice in those lessons. Then do the worksheet problems from your weakest two topics. Mixed practice beats re-reading."],
      ["What are the most common mistakes in this chapter?", String.raw`Sign errors (\((-3)+(-4)\) vs \((-3)(-4)\)), adding denominators, forgetting brackets on negative bases (\(-3^2\) vs \((-3)^2\)), treating a negative exponent as a negative number, and dividing a percent change by the new value.`],
      ["How do I know which rule to use?", "Name the operation first (add? multiply? power?) and the type of number (integer, fraction, decimal). Then use the rule for that operation — the type of number never changes the sign rules."],
      ["Should I use a calculator?", "Use it to check, not to think. You still need to decide the order of operations, the signs and whether the answer is reasonable. Enter negative bases in brackets."],
      ["I am still weak with fractions. What should I do?", "Go back to the fraction explorers in 1.4 and 1.5 and do every practice question there. Fraction skill is used in almost every later chapter, so it is worth the extra time."],
    ],
    summary: [
      "Number sense = sets, signs, fractions, powers and proportional reasoning.",
      "Decide the sign first, then the size; estimate before you calculate.",
      "Every later topic reuses integer and fraction skills.",
    ],
    next: "Write the Chapter 1 test. Then Chapter 2 uses these skills to build and simplify algebraic expressions.",
  }),
];
