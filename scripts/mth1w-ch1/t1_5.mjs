// MTH1W 1.5 — Fractions: Multiplying, Dividing & Reciprocals (second half of the old 1.5, expanded; reciprocals are new).
import { html, ex, pr, qa, watchOut, table, areaModel, rng, bankKit, fillBank, packWorksheet, fracKit, lcm } from "./lib.mjs";

export const CODE = "1.5";
export const TITLE = "Fractions: Multiplying, Dividing & Reciprocals";
export const FULL_TITLE = `${CODE} ${TITLE}`;

const lessonHtml = String.raw`<div class="lecture-box">
  <h1>🔁 Fractions: Multiplying, Dividing &amp; Reciprocals</h1>
  <p><strong>Overview.</strong> Multiplying fractions is easier than adding them — no common denominator is needed. Dividing is just multiplying by a <strong>reciprocal</strong>, the number that "undoes" a multiplication and gives a product of \(1\). Reciprocals appear all over mathematics: dividing fractions, unit rates, solving equations, and — in lesson 1.6 — negative exponents. Signs follow the same rules as for integers.</p>

  <h2>📌 Multiplying fractions</h2>
  <p>Multiply the numerators and multiply the denominators: \(\dfrac ab\times\dfrac cd=\dfrac{ac}{bd}\). The word "of" means multiply: \(\dfrac23\) of \(\dfrac34\) is \(\dfrac23\times\dfrac34\). To keep numbers small, <strong>cancel</strong> a factor common to any numerator and any denominator <em>before</em> multiplying. Write whole numbers over \(1\), and change mixed numbers to improper fractions first.</p>
  ${areaModel({ a: 2, b: 3, c: 3, d: 4, caption: "2/3 of 3/4: the green overlap is 6 of the 12 cells, so 2/3 × 3/4 = 6/12 = 1/2." })}

  <h2>📌 Reciprocals</h2>
  <p>The <strong>reciprocal</strong> (multiplicative inverse) of \(\dfrac ab\) is \(\dfrac ba\) — flip the fraction. A number times its reciprocal is \(1\): \(\dfrac35\times\dfrac53=1\). A whole number \(n\) has reciprocal \(\dfrac1n\), and a mixed number must be made improper first. The reciprocal keeps the sign, and <strong>\(0\) has no reciprocal</strong> (nothing times \(0\) is \(1\)). Do not confuse it with the <em>opposite</em>:</p>
  ${table(["Number", "Opposite (add to get 0)", "Reciprocal (multiply to get 1)"], [["3/5", "−3/5", "5/3"], ["−4", "4", "−1/4"], ["1/2", "−1/2", "2"], ["−2/7", "2/7", "−7/2"]])}

  <h2>📌 Dividing fractions</h2>
  <p><strong>Dividing by a number is multiplying by its reciprocal:</strong> \(\dfrac ab\div\dfrac cd=\dfrac ab\times\dfrac dc\). Why? "How many \(\dfrac14\)s fit in \(3\)?" Each whole holds \(4\) quarters, so \(3\div\dfrac14=3\times4=12\). Notice that dividing by a number smaller than \(1\) makes the result <em>bigger</em>:</p>
  ${table(["Division", "3 ÷ 1", "3 ÷ 1/2", "3 ÷ 1/4", "3 ÷ 1/8"], [["Result", "3", "6", "12", "24"]])}

  <h2>📌 Complex fractions and order of operations</h2>
  <p>A fraction bar means divide, so a <strong>complex fraction</strong> is a division: \(\dfrac{\ \frac34\ }{\ \frac58\ }=\dfrac34\div\dfrac58\). Work out the top and the bottom separately first when they contain sums. With several operations, use BEDMAS exactly as with integers.</p>

  ${watchOut([
    String.raw`<strong>Flip only the divisor.</strong> In \(\dfrac35\div\dfrac27\), change the division to multiplication <em>and</em> flip the second fraction: \(\dfrac35\times\dfrac72\). Flipping the first one, or both, gives a wrong answer.`,
    String.raw`<strong>Cancel only when multiplying.</strong> You may cancel across a multiplication sign. Do not cancel until the division has been rewritten as a multiplication.`,
    String.raw`<strong>Reciprocal is not opposite.</strong> The reciprocal of \(-\dfrac27\) is \(-\dfrac72\) (same sign); its opposite is \(\dfrac27\).`,
  ])}

  <h2>🔵 Examples</h2>
  ${ex(
    "Example 1: Multiplying fractions",
    String.raw`Evaluate \(\dfrac23\times\dfrac34\).`,
    [String.raw`Cancel the common factor \(3\): the \(3\) in the numerator and the \(3\) in the denominator.`, String.raw`That leaves \(\dfrac{2\times1}{1\times4}=\dfrac24\).`, String.raw`Simplify: \(\dfrac24=\dfrac12\).`],
    String.raw`\(\dfrac23\times\dfrac34=\dfrac12\), matching the picture above`,
  )}
  ${ex(
    "Example 2: Cancel first, then the sign",
    String.raw`Evaluate \(\left(-\dfrac56\right)\times\dfrac9{10}\).`,
    [String.raw`The signs differ, so the answer is negative.`, String.raw`Cancel \(5\) with \(10\) (leaving \(1\) and \(2\)) and \(9\) with \(6\) (leaving \(3\) and \(2\)).`, String.raw`Multiply what is left: \(-\dfrac{1\times3}{2\times2}=-\dfrac34\).`],
    String.raw`\(\left(-\dfrac56\right)\times\dfrac9{10}=-\dfrac34\)`,
  )}
  ${ex(
    "Example 3: Mixed numbers",
    String.raw`Evaluate \(2\dfrac12\times1\dfrac13\).`,
    [String.raw`Convert: \(2\dfrac12=\dfrac52\) and \(1\dfrac13=\dfrac43\).`, String.raw`Cancel \(4\) and \(2\): \(\dfrac52\times\dfrac43=\dfrac{5\times2}{1\times3}=\dfrac{10}{3}\).`, String.raw`Convert back: \(\dfrac{10}{3}=3\dfrac13\).`],
    String.raw`\(2\dfrac12\times1\dfrac13=3\dfrac13\)`,
  )}
  ${ex(
    "Example 4: Finding reciprocals",
    String.raw`Find the reciprocal of \(\dfrac35\), of \(-4\) and of \(2\dfrac13\), and check one by multiplying.`,
    [String.raw`\(\dfrac35\): flip to \(\dfrac53\).`, String.raw`\(-4=-\dfrac41\): flip to \(-\dfrac14\).`, String.raw`\(2\dfrac13=\dfrac73\): flip to \(\dfrac37\). Check: \(\dfrac73\times\dfrac37=\dfrac{21}{21}=1\).`],
    String.raw`the reciprocals are \(\dfrac53\), \(-\dfrac14\) and \(\dfrac37\)`,
  )}
  ${ex(
    "Example 5: Dividing fractions",
    String.raw`Evaluate \(\dfrac34\div\dfrac25\).`,
    [String.raw`Keep the first fraction, change \(\div\) to \(\times\), and flip the second: \(\dfrac34\times\dfrac52\).`, String.raw`Multiply: \(\dfrac{15}{8}\).`, String.raw`Write as a mixed number: \(1\dfrac78\).`],
    String.raw`\(\dfrac34\div\dfrac25=1\dfrac78\)`,
  )}
  ${ex(
    "Example 6: A whole number divided by a fraction",
    String.raw`How many \(\dfrac14\)-cup scoops can be filled from \(3\) cups of flour?`,
    [String.raw`This is \(3\div\dfrac14\).`, String.raw`Multiply by the reciprocal of \(\dfrac14\), which is \(4\): \(3\times4=12\).`],
    String.raw`\(12\) scoops`,
  )}
  ${ex(
    "Example 7: Dividing two negatives",
    String.raw`Evaluate \(\left(-\dfrac78\right)\div\left(-\dfrac7{12}\right)\).`,
    [String.raw`Both fractions are negative, so the quotient is positive.`, String.raw`Multiply by the reciprocal: \(\dfrac78\times\dfrac{12}{7}\). Cancel \(7\) with \(7\) and \(12\) with \(8\) (by \(4\)).`, String.raw`That leaves \(\dfrac{1\times3}{2\times1}=\dfrac32\).`],
    String.raw`\(\left(-\dfrac78\right)\div\left(-\dfrac7{12}\right)=\dfrac32=1\dfrac12\)`,
  )}
  ${ex(
    "Example 8: A complex fraction",
    String.raw`Simplify \(\dfrac{\dfrac34+\dfrac12}{\dfrac58}\).`,
    [String.raw`Top: \(\dfrac34+\dfrac12=\dfrac34+\dfrac24=\dfrac54\).`, String.raw`Now divide: \(\dfrac54\div\dfrac58=\dfrac54\times\dfrac85\).`, String.raw`Cancel \(5\) with \(5\) and \(8\) with \(4\): \(\dfrac{1\times2}{1\times1}=2\).`],
    String.raw`the complex fraction equals \(2\)`,
  )}
  ${ex(
    "Example 9: Order of operations",
    String.raw`Evaluate \(\dfrac56-\dfrac34\div\dfrac98\).`,
    [String.raw`Divide first: \(\dfrac34\div\dfrac98=\dfrac34\times\dfrac89=\dfrac{24}{36}=\dfrac23\).`, String.raw`Subtract: \(\dfrac56-\dfrac23=\dfrac56-\dfrac46=\dfrac16\).`],
    String.raw`\(\dfrac56-\dfrac34\div\dfrac98=\dfrac16\)`,
  )}
  <h2>🟡 Practice Questions</h2>
  ${pr(1, "multiply", String.raw`Evaluate \(\dfrac47\times\dfrac{14}{15}\).`, String.raw`Cancel \(7\): \(\dfrac{4\times2}{1\times15}=\dfrac8{15}\).`)}
  ${pr(2, "divide", String.raw`Evaluate \(\dfrac79\div\dfrac{14}{15}\).`, String.raw`\(\dfrac79\times\dfrac{15}{14}=\dfrac{105}{126}=\dfrac56\).`)}
  ${pr(3, "reciprocal", String.raw`Find the reciprocal of \(-3\dfrac12\).`, String.raw`\(-3\dfrac12=-\dfrac72\), so the reciprocal is \(-\dfrac27\).`)}
  ${pr(4, "word problem", String.raw`Each serving needs \(\dfrac34\) cup of rice. How many servings can be made from \(6\) cups?`, String.raw`\(6\div\dfrac34=6\times\dfrac43=8\) servings.`)}
  ${pr(5, "complex fraction", String.raw`Simplify \(\dfrac{-\frac23}{\frac49}\).`, String.raw`\(-\dfrac23\div\dfrac49=-\dfrac23\times\dfrac94=-\dfrac{18}{12}=-\dfrac32\).`)}
  <h2>❓ Q&amp;A Summary</h2>
  ${qa("Q1: Why does dividing by a fraction make the answer bigger?", String.raw`Dividing asks how many of a small piece fit. Many small pieces fit into a whole, so \(3\div\dfrac14=12\) — and the reciprocal \(4\) is bigger than \(1\).`)}
  ${qa("Q2: What is the difference between an opposite and a reciprocal?", String.raw`The opposite changes the sign (\(\dfrac23\to-\dfrac23\)) and adds to give \(0\). The reciprocal flips the fraction (\(\dfrac23\to\dfrac32\)) and multiplies to give \(1\).`)}
  ${qa("Q3: Which numbers have no reciprocal?", String.raw`Only \(0\). Every other number \(n\) has the reciprocal \(\dfrac1n\).`)}
  ${qa("Q4: Do I need a common denominator to multiply or divide?", String.raw`No — that is only for adding and subtracting. Multiply straight across (after cancelling), and for division multiply by the reciprocal.`)}
  ${qa("Q5: Where do reciprocals show up next?", String.raw`In lesson 1.6, a negative exponent means "reciprocal": \(2^{-1}=\dfrac12\) and \(\left(\dfrac23\right)^{-1}=\dfrac32\).`)}
</div>`;

export const lessonBlocks = () => [html(lessonHtml)];

export const ASSIGNMENT = {
  title: `Assignment ${CODE} — ${TITLE}`,
  description: String.raw`Knowledge & Understanding
1. Evaluate \( \left(-\dfrac25\right)\times\dfrac{15}{16} \).
2. Write the reciprocal of \( -\dfrac74 \) and of \( 3 \).
3. Evaluate \( \dfrac49\div\dfrac8{15} \).
Thinking
4. Without calculating, which is greater: \( 6\div\dfrac23 \) or \( 6\times\dfrac23 \)? Explain how you know, then calculate both.
5. The product of two fractions is \( \dfrac3{10} \) and one of them is \( \dfrac35 \). Find the other fraction and show the operation you used.
Communication
6. Use the example \( 3\div\dfrac14 \) to explain why dividing by a fraction is the same as multiplying by its reciprocal.
7. A student says that the reciprocal of \( -\dfrac23 \) is \( \dfrac23 \). Explain the mistake and give the correct reciprocal.
Application
8. A recipe needs \( 2\dfrac14 \) cups of sugar for one batch. How much sugar is needed for \( 1\dfrac12 \) batches?
9. A \( 7\dfrac12 \) L jug of juice is poured into cups that each hold \( \dfrac34 \) L. How many cups can be filled?
10. A car uses \( \dfrac58 \) of a tank of fuel to drive \( 150 \) km. How far can it travel on a full tank, at the same rate?`,
};

export function bank() {
  const R = rng(1501);
  const { mcA, ms, tf, num, fill } = bankKit(R);
  const K = fracKit();
  const { F, FR, mixed, forms, mul, div, addf, subf, red } = K;
  const m = (s) => `$${s}$`;
  const fr = () => { const d = R.pick([2, 3, 4, 5, 6, 7, 8, 9, 10, 12]); const n = R.int(1, d - 1); return [n, d]; };
  const sf = () => { const f = fr(); return R.next() < 0.4 ? [-f[0], f[1]] : f; };
  const txt = (f) => F(f[0], f[1]);
  const T = [], add = (d, make, max) => T.push({ d, make, max });

  // easy
  add("easy", () => { const a = fr(), b = fr(); const p = mul(a, b); return mcA("easy", `Evaluate ${m(`${txt(a)} \\times ${txt(b)}`)}.`, m(FR(p[0], p[1])), [m(FR(a[0] * b[1], a[1] * b[0])), m(FR(a[0] + b[0], a[1] + b[1])), m(FR(p[0] + 1, p[1])), m(F(a[0] * b[0], a[1] * b[1]))], "Multiply the numerators, multiply the denominators, then simplify."); });
  add("easy", () => { const a = fr(); return mcA("easy", `The reciprocal of ${m(txt(a))} is:`, m(F(a[1], a[0])), [m(F(-a[0], a[1])), m(F(a[0], a[1])), m(F(-a[1], a[0]))], "Flip the fraction; the product with the original is 1."); });
  add("easy", () => { const n = R.int(2, 12); const s = R.next() < 0.4 ? -1 : 1; return fill("easy", `The reciprocal of ${m(s * n)} is ___ (write as a fraction).`, [`${s < 0 ? "-" : ""}1/${n}`, `${s < 0 ? "-" : ""}\\frac{1}{${n}}`], "A whole number n has reciprocal 1/n."); });
  add("easy", () => { const a = fr(), k = R.int(2, 9); const p = mul(a, [k, 1]); return fill("easy", `${m(`${txt(a)} \\times ${k}`)} in simplest form is ___.`, forms(p[0], p[1])); });
  add("easy", () => { const s = R.pick([["The reciprocal of $\\frac{3}{4}$ is $\\frac{4}{3}$.", true], ["The reciprocal of $-5$ is $5$.", false, "It is $-\\frac{1}{5}$."], ["$0$ has no reciprocal.", true], ["$\\frac{2}{3} \\times \\frac{3}{2} = 1$.", true], ["Dividing by $\\frac{1}{2}$ is the same as multiplying by $2$.", true], ["$\\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{5}$.", false, "It equals $\\frac{1}{6}$."], ["The reciprocal of $1$ is $1$.", true]]); return tf("easy", s[0], s[1], s[2] ?? ""); }, 6);
  add("easy", () => { const a = fr(), b = fr(); const pairs = [[a, [a[1], a[0]], true], [a, [-a[0], a[1]], false], [b, [b[1], b[0]], true], [b, [b[0], b[1]], false]]; const o = R.shuffle(pairs); return ms("easy", "Which pairs of numbers are reciprocals of each other?", o.map((p) => m(`${txt(p[0])} \\text{ and } ${txt(p[1])}`)), o.map((p, i) => (p[2] ? i : -1)).filter((i) => i >= 0), "Reciprocals multiply to 1."); }, 2);
  add("easy", () => { const [d, n] = R.pick([[4, 3], [5, 2], [8, 3], [6, 5]]); const w = R.int(2, 5) * d; return num("easy", `Find ${m(F(n, d))} of ${w}.`, (n * w) / d, 0, `${w} ÷ ${d} × ${n}.`); }, 3);
  add("easy", () => { const k = R.int(2, 9), d = R.pick([2, 3, 4, 5]); return num("easy", `How many ${m(F(1, d))}s fit into ${k}? (Compute ${m(`${k} \\div ${F(1, d)}`)}.)`, k * d, 0); }, 3);

  // medium
  add("medium", () => { const a = sf(), b = sf(); const q = div(a, b); return mcA("medium", `Evaluate ${m(`${txt(a)} \\div ${b[0] < 0 ? `\\left(${txt(b)}\\right)` : txt(b)}`)}.`, m(FR(q[0], q[1])), [m(FR(...mul(a, b))), m(FR(-q[0], q[1])), m(FR(b[1] * a[0], a[1] * b[0] + 1 * 0 + 1)), m(FR(a[1] * b[0], a[0] * b[1]))], "Multiply by the reciprocal of the divisor and use the sign rules."); });
  add("medium", () => { const a = fr(), b = fr(); const q = div(a, b); return fill("medium", `${m(`${txt(a)} \\div ${txt(b)}`)} in simplest form is ___.`, forms(q[0], q[1]), "Flip the second fraction and multiply."); });
  add("medium", () => { const w1 = R.int(1, 3), w2 = R.int(1, 3), d1 = R.pick([2, 3, 4]), d2 = R.pick([2, 3, 5]); const n1 = R.int(1, d1 - 1), n2 = R.int(1, d2 - 1); const A = [w1 * d1 + n1, d1], B = [w2 * d2 + n2, d2]; const p = mul(A, B); return mcA("medium", `Evaluate ${m(`${w1}\\frac{${n1}}{${d1}} \\times ${w2}\\frac{${n2}}{${d2}}`)}.`, m(mixed(p[0], p[1])), [m(mixed(p[0] + 1, p[1])), m(`${w1 * w2}\\frac{${n1 * n2}}{${d1 * d2}}`), m(mixed(p[0] - p[1], p[1]))], "Convert to improper fractions first."); });
  add("medium", () => { const [pn, pd] = R.pick([[3, 4], [2, 3], [1, 4], [1, 2], [3, 8], [5, 6]]); const k = R.int(4, 12); if ((k * pn) % pd !== 0) return null; const W = (k * pn) / pd; return num("medium", `Each serving of oatmeal uses ${m(F(pn, pd))} cup of oats. How many servings can be made from ${W} cups of oats?`, k, 0, `${W} ÷ ${pn}/${pd} = ${k}.`); }, 3);
  add("medium", () => { const a = fr(), b = fr(), c = fr(); const v = mul(mul(a, b), [c[1], c[0]]); return fill("medium", `Evaluate ${m(`${txt(a)} \\times ${txt(b)} \\div ${txt(c)}`)}: ___.`, forms(v[0], v[1]), "Left to right: multiply, then divide."); });
  add("medium", () => { const s = R.pick([["$\\frac{3}{4} \\div \\frac{3}{8} = 2$.", true], ["$\\frac{2}{5} \\div \\frac{4}{5} = 2$.", false, "$\\frac{2}{5} \\times \\frac{5}{4} = \\frac{1}{2}$."], ["$\\left(-\\frac{1}{2}\\right) \\times \\left(-\\frac{1}{3}\\right) = \\frac{1}{6}$.", true], ["Dividing by a fraction less than $1$ gives a result larger than the number you started with.", true], ["$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{b}{a} \\times \\frac{c}{d}$.", false, "Flip the divisor, not the dividend."], ["$4 \\div \\frac{1}{2} = 2$.", false, "$4 \\times 2 = 8$."]]); return tf("medium", s[0], s[1], s[2] ?? ""); }, 6);
  add("medium", () => { const a = fr(); const b = [R.int(2, 6) * a[1], 1]; const t = mul(a, [R.int(2, 5), 1]); const g = R.int(2, 6); return num("medium", `A ribbon is ${g * 3} m long. A bow uses ${m(F(1, 3))} m. How many bows can be made?`, g * 9, 0); }, 3);
  add("medium", () => { const a = fr(); const o = [[a[0], a[1]], [a[1], a[0]], [-a[0], a[1]], [-a[1], a[0]]]; const rec = ms("medium", `Which are equal to the reciprocal of ${m(txt([a[0], a[1]]))}?`, [m(F(a[1], a[0])), m(`1 \\div ${txt(a)}`), m(F(-a[0], a[1])), m(`${txt(a)}^{-1}`)], [0, 1, 3], "$a^{-1}$ means the reciprocal of $a$ (see lesson 1.6)."); return rec; }, 1);

  // hard
  add("hard", () => { const a = fr(), b = fr(), c = fr(); const top = addf(a, b); const q = div(top, c); return mcA("hard", `Simplify ${m(`\\dfrac{${txt(a)} + ${txt(b)}}{${txt(c)}}`)}.`, m(FR(q[0], q[1])), [m(FR(top[0] * c[0], top[1] * c[1])), m(FR(...mul(top, c))), m(FR(q[0] + 1, q[1])), m(FR(c[0] * top[1], c[1] * top[0]))], "Add on top first, then divide by the bottom fraction."); });
  add("hard", () => { const a = fr(), b = fr(), c = fr(); const v = subf(a, div(b, c)); return fill("hard", `Evaluate ${m(`${txt(a)} - ${txt(b)} \\div ${txt(c)}`)}: ___.`, forms(v[0], v[1]), "Divide first, then subtract."); });
  add("hard", () => { const a = fr(), b = fr(); const v = mul(mul(a, [-1, 1]), mul(b, [-1, 1])); const w = div(mul(a, [-1, 1]), b); return fill("hard", `Evaluate ${m(`\\left(-${txt(a)}\\right) \\div ${txt(b)}`)}: ___.`, forms(w[0], w[1])); });
  add("hard", () => { const a = fr(), b = fr(); const x = mul(a, b); return fill("hard", `If ${m(`x \\div ${txt(b)} = ${txt(a)}`)}, then ${m("x")} = ___ (simplest form).`, forms(x[0], x[1]), "Undo the division: multiply both sides by the divisor."); }, 3);
  add("hard", () => { const d = R.pick([[3, 5, 12], [5, 8, 30], [2, 5, 24], [7, 8, 56], [3, 4, 18]]); const [p, q, km] = d; return num("hard", `A truck uses ${m(F(p, q))} of a tank to travel ${km * p} km. How far can it travel on a full tank, in km?`, km * q, 0, `${km * p} ÷ ${F(p, q).replace("\\frac", "")} ...`); }, 3);
  add("hard", () => { const s = R.pick([["For any non-zero number $a$, $a \\times \\frac{1}{a} = 1$.", true], ["If $x$ is between $0$ and $1$, then the reciprocal of $x$ is greater than $1$.", true], ["The reciprocal of a negative number is positive.", false, "It is negative."], ["$\\frac{\\frac{a}{b}}{\\frac{c}{d}}$ equals $\\frac{ad}{bc}$.", true], ["Dividing by $0.5$ gives the same result as multiplying by $2$.", true]]); return tf("hard", s[0], s[1], s[2] ?? ""); }, 5);
  add("hard", () => { const a = fr(); const o = R.shuffle([[m(`${txt(a)} \\div ${txt([a[1], a[0]])}`), a[0] * a[0] === a[1] * a[1]], [m(`${txt(a)} \\times ${txt([a[1], a[0]])}`), true], [m(`${txt(a)} \\div ${txt(a)}`), true], [m(`${txt(a)} + ${txt([-a[0], a[1]])}`), false]]); return ms("hard", "Which expressions equal $1$?", o.map((x) => x[0]), o.map((x, i) => (x[1] ? i : -1)).filter((i) => i >= 0)); }, 2);
  add("hard", () => { const [a, b] = [fr(), fr()]; const c = mul(a, b); const q = div(c, a); return mcA("hard", `The product of two fractions is ${m(txt(c))} and one is ${m(txt(a))}. The other fraction is:`, m(FR(q[0], q[1])), [m(FR(...mul(c, a))), m(FR(q[0] + 1, q[1])), m(FR(-q[0], q[1]))], "Divide the product by the known fraction."); }, 3);

  return fillBank(T, 20);
}

const wLesson = [
  ["Multiplying fractions", String.raw`Multiply the numerators and the denominators: $\dfrac ab\times\dfrac cd=\dfrac{ac}{bd}$. Cancel common factors first. "Of" means multiply, and mixed numbers must be made improper first.`],
  ["Reciprocals", String.raw`The reciprocal of $\dfrac ab$ is $\dfrac ba$, and a number times its reciprocal is $1$. $0$ has no reciprocal. The reciprocal is not the opposite: for $-\dfrac23$ it is $-\dfrac32$.`],
  ["Dividing fractions", String.raw`Dividing by a fraction means multiplying by its reciprocal: $\dfrac ab\div\dfrac cd=\dfrac ab\times\dfrac dc$. Flip only the divisor. The sign rules for integers still apply.`],
];
const wExamples = [
  ["Example 1: Multiply", String.raw`Evaluate $\dfrac58\times\dfrac23$.`, String.raw`Cancel $2$ with $8$: $\dfrac{5\times1}{4\times3}=\dfrac{5}{12}$.`],
  ["Example 2: Cancel first", String.raw`Evaluate $\dfrac9{14}\times\dfrac7{12}$.`, String.raw`Cancel $7$ with $14$ and $9$ with $12$ (by $3$): $\dfrac{3\times1}{2\times4}=\dfrac38$.`],
  ["Example 3: A fraction of a number", String.raw`Find $\dfrac35$ of $40$.`, String.raw`$\dfrac35\times40=\dfrac{120}{5}=24$.`],
  ["Example 4: Mixed numbers", String.raw`Evaluate $1\dfrac34\times2\dfrac23$.`, String.raw`$\dfrac74\times\dfrac83=\dfrac{7\times2}{1\times3}=\dfrac{14}{3}=4\dfrac23$.`],
  ["Example 5: Reciprocals", String.raw`Find the reciprocal of $\dfrac79$, of $-5$ and of $2\dfrac34$.`, String.raw`$\dfrac97$; $-\dfrac15$; and $2\dfrac34=\dfrac{11}{4}$, so $\dfrac4{11}$.`],
  ["Example 6: Divide", String.raw`Evaluate $\dfrac23\div\dfrac49$.`, String.raw`$\dfrac23\times\dfrac94=\dfrac{18}{12}=\dfrac32=1\dfrac12$.`],
  ["Example 7: A whole number divided by a fraction", String.raw`Evaluate $6\div\dfrac23$.`, String.raw`$6\times\dfrac32=9$.`],
  ["Example 8: Signs", String.raw`Evaluate $-\dfrac34\div\dfrac9{10}$.`, String.raw`Different signs, so negative: $\dfrac34\times\dfrac{10}9=\dfrac{30}{36}=\dfrac56$. The answer is $-\dfrac56$.`],
  ["Example 9: A complex fraction", String.raw`Simplify $\dfrac{\ \frac56\ }{1\frac23}$.`, String.raw`$1\dfrac23=\dfrac53$, so $\dfrac56\div\dfrac53=\dfrac56\times\dfrac35=\dfrac12$.`],
];
const wQuestions = [
  ["Problem 1", String.raw`Evaluate $\dfrac35\times\dfrac{10}{21}$.`, String.raw`$\dfrac27$`, 3.0],
  ["Problem 2", String.raw`Evaluate $-\dfrac49\times\dfrac38$.`, String.raw`$-\dfrac16$`, 3.0],
  ["Problem 3", String.raw`Find $\dfrac23$ of $45$.`, String.raw`$30$`, 3.0],
  ["Problem 4", String.raw`Evaluate $2\dfrac12\times\dfrac35$.`, String.raw`$\dfrac32=1\dfrac12$`, 3.2],
  ["Problem 5", String.raw`Find the reciprocal of $-\dfrac73$.`, String.raw`$-\dfrac37$`, 3.0],
  ["Problem 6", String.raw`Find the reciprocal of $0.2$.`, String.raw`$0.2=\dfrac15$, so $5$`, 3.0],
  ["Problem 7", String.raw`Evaluate $\dfrac8{15}\div\dfrac45$.`, String.raw`$\dfrac23$`, 3.2],
  ["Problem 8", String.raw`Evaluate $\left(-\dfrac5{12}\right)\div\left(-\dfrac{15}8\right)$.`, String.raw`$\dfrac29$`, 3.4],
  ["Problem 9", String.raw`Evaluate $9\div\dfrac34$.`, String.raw`$12$`, 3.0],
  ["Problem 10", String.raw`Evaluate $3\dfrac13\div\dfrac56$.`, String.raw`$\dfrac{10}3\times\dfrac65=4$`, 3.2],
  ["Problem 11", String.raw`Simplify $\dfrac{\ \frac38\ }{\frac9{16}}$.`, String.raw`$\dfrac23$`, 3.2],
  ["Problem 12", String.raw`A ribbon $4\dfrac12$ m long is cut into pieces $\dfrac34$ m long. How many pieces are there?`, String.raw`$\dfrac92\div\dfrac34=6$ pieces`, 3.4],
  ["Problem 13 --- Challenge", String.raw`Evaluate $\dfrac12+\dfrac34\div\left(-\dfrac32\right)\times\dfrac25$.`, String.raw`$\dfrac3{10}$`, 3.8],
];
const ws = packWorksheet({
  code: CODE, title: TITLE,
  intro: "Multiplying fractions needs no common denominator, and dividing by a fraction means multiplying by its reciprocal. This worksheet practises products, reciprocals, quotients, complex fractions and word problems.",
  bigideas: String.raw`<b>Divide by multiplying by the reciprocal:</b> flip only the divisor. A number times its reciprocal is always $1$.`,
  lesson: wLesson, examples: wExamples, questions: wQuestions,
});
export const WORKSHEET_CONTENT = ws.content;
export const WORKSHEET_TEX = ws.texData;
