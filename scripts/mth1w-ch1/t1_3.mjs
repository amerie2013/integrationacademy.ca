// MTH1W 1.3 — Multiplying & Dividing Integers; Order of Operations (new; replaces "Integers in Context").
import { html, ex, pr, qa, watchOut, table, rng, bankKit, fillBank, packWorksheet, sg } from "./lib.mjs";

export const CODE = "1.3";
export const TITLE = "Multiplying & Dividing Integers";
export const FULL_TITLE = `${CODE} ${TITLE}`;

const lessonHtml = String.raw`<div class="lecture-box">
  <h1>✖️ Multiplying &amp; Dividing Integers</h1>
  <p><strong>Overview.</strong> Multiplication is repeated addition and division undoes multiplication. Once you know the <strong>sign rules</strong>, multiplying and dividing integers is the same as with whole numbers — you just decide the sign first. This lesson also puts all four operations together with the <strong>order of operations</strong> and shows how to <strong>substitute</strong> negative values into expressions.</p>

  <h2>📌 Multiplying integers</h2>
  <p>\(3\times(-4)\) means three groups of \(-4\): \((-4)+(-4)+(-4)=-12\). A pattern shows why the rules hold — each row below drops by \(3\):</p>
  ${table(["Product", "3 × 2", "3 × 1", "3 × 0", "3 × (−1)", "3 × (−2)", "3 × (−3)"], [["Value", "6", "3", "0", "−3", "−6", "−9"]])}
  <p>And the same pattern in the other factor: \((-3)\times 2=-6,\ (-3)\times1=-3,\ (-3)\times0=0,\ (-3)\times(-1)=3,\ (-3)\times(-2)=6\), so \((-3)\times(-3)=9\).</p>
  <ul>
    <li><strong>Same signs</strong> (both positive or both negative) → the product is <strong>positive</strong>.</li>
    <li><strong>Different signs</strong> → the product is <strong>negative</strong>.</li>
    <li>With several factors, count the negatives: an <strong>even</strong> number gives a positive product, an <strong>odd</strong> number a negative one. Anything times \(0\) is \(0\).</li>
  </ul>

  <h2>📌 Dividing integers</h2>
  <p>Division asks "what do I multiply by to get back?" Since \(6\times(-8)=-48\), we know \(-48\div6=-8\). So division follows the <strong>same sign rules</strong>: same signs give a positive quotient, different signs a negative one. Two special cases: \(0\div n=0\), but <strong>you can never divide by \(0\)</strong> — nothing times \(0\) gives a non-zero number.</p>

  <h2>📌 Order of operations</h2>
  <p>Use <strong>BEDMAS</strong>: <strong>B</strong>rackets, <strong>E</strong>xponents, then <strong>D</strong>ivision and <strong>M</strong>ultiplication left to right, then <strong>A</strong>ddition and <strong>S</strong>ubtraction left to right. A fraction bar acts like brackets around the top and the bottom. A number directly beside a bracket means multiply: \(-3(5-9)\) is \(-3\times(5-9)\).</p>

  <h2>📌 Substituting integers</h2>
  <p>To evaluate an expression for given values, replace each variable with its value <strong>in brackets</strong> so the sign travels with the number, then use BEDMAS. For \(x=-4\): \(2x\) becomes \(2(-4)\), and \(x^2\) becomes \((-4)^2=16\).</p>

  ${watchOut([
    String.raw`<strong>"Two negatives make a positive" is for multiplying and dividing</strong> (and for subtracting a negative). It is <em>not</em> for adding: \((-3)+(-4)=-7\).`,
    String.raw`<strong>Exponents come before multiplying.</strong> \(-2\times3^2=-2\times9=-18\), not \((-6)^2\). Brackets matter too: \((-3)^2=9\) but \(-3^2=-9\) (see lesson 1.6).`,
    String.raw`<strong>Never divide by \(0\).</strong> \(\dfrac{-5}{0}\) is undefined — it is not \(0\) and it is not \(-5\).`,
  ])}

  <h2>🔵 Examples</h2>
  ${ex(
    "Example 1: Why negative times negative is positive",
    String.raw`Use the pattern in the table to find \((-3)\times(-3)\).`,
    [String.raw`Start with \((-3)\times3=-9\) and decrease the second factor by \(1\) each step.`, String.raw`The products rise by \(3\) each step: \(-9,\ -6,\ -3,\ 0,\ 3,\ 6,\ 9\).`, String.raw`The second factor goes \(3,2,1,0,-1,-2,-3\), so the last product is for \((-3)\times(-3)\).`],
    String.raw`\((-3)\times(-3)=9\)`,
    table(["Second factor", "3", "2", "1", "0", "−1", "−2", "−3"], [["(−3) × factor", "−9", "−6", "−3", "0", "3", "6", "9"]]),
  )}
  ${ex(
    "Example 2: Different signs",
    String.raw`Evaluate \(-7\times6\) and \(4\times(-9)\).`,
    [String.raw`The signs differ, so each product is negative.`, String.raw`Multiply the absolute values: \(7\times6=42\) and \(4\times9=36\).`],
    String.raw`\(-7\times6=-42\) and \(4\times(-9)=-36\)`,
  )}
  ${ex(
    "Example 3: Same signs",
    String.raw`Evaluate \((-8)\times(-5)\).`,
    [String.raw`Both factors are negative, so the product is positive.`, String.raw`\(8\times5=40\).`],
    String.raw`\((-8)\times(-5)=40\)`,
  )}
  ${ex(
    "Example 4: Several factors",
    String.raw`Evaluate \((-2)(3)(-5)(-1)\).`,
    [String.raw`Count the negative factors: \(-2,\ -5,\ -1\) is \(3\) negatives, which is odd, so the product is negative.`, String.raw`Multiply the absolute values: \(2\times3\times5\times1=30\).`],
    String.raw`\((-2)(3)(-5)(-1)=-30\)`,
  )}
  ${ex(
    "Example 5: Dividing",
    String.raw`Evaluate \(-48\div6\) and \(-54\div(-9)\).`,
    [String.raw`\(-48\div6\): different signs, so negative. \(48\div6=8\), so \(-8\). Check: \(6\times(-8)=-48\).`, String.raw`\(-54\div(-9)\): same signs, so positive. \(54\div9=6\). Check: \(-9\times6=-54\).`],
    String.raw`\(-48\div6=-8\) and \(-54\div(-9)=6\)`,
  )}
  ${ex(
    "Example 6: In context",
    String.raw`A diver descends \(3\) m each minute for \(7\) minutes. Then a temperature drop of \(36\,^\circ\text{C}\) is spread evenly over \(4\) hours. Find the diver's change in depth and the average hourly temperature change.`,
    [String.raw`Descending is negative: \(7\times(-3)=-21\) m.`, String.raw`A drop is negative: \(-36\div4=-9\) degrees per hour.`],
    String.raw`the diver changes by \(-21\) m, and the temperature changes by \(-9\,^\circ\text{C}\) per hour`,
  )}
  ${ex(
    "Example 7: Order of operations with an exponent",
    String.raw`Evaluate \(5-2\times(-3)^2+(-12)\div4\).`,
    [String.raw`Exponent first: \((-3)^2=9\), giving \(5-2\times9+(-12)\div4\).`, String.raw`Multiply and divide left to right: \(2\times9=18\) and \((-12)\div4=-3\), giving \(5-18+(-3)\).`, String.raw`Add and subtract left to right: \(5-18=-13\), then \(-13+(-3)=-16\).`],
    String.raw`\(5-2\times(-3)^2+(-12)\div4=-16\)`,
  )}
  ${ex(
    "Example 8: Brackets and distributing",
    String.raw`Evaluate \(-3(5-9)-2(-4+1)\).`,
    [String.raw`Brackets first: \(5-9=-4\) and \(-4+1=-3\), so \(-3(-4)-2(-3)\).`, String.raw`Multiply: \(-3(-4)=12\) and \(2(-3)=-6\), so the expression is \(12-(-6)\).`, String.raw`Subtract a negative: \(12+6=18\).`],
    String.raw`\(-3(5-9)-2(-4+1)=18\)`,
  )}
  ${ex(
    "Example 9: Substituting negative values",
    String.raw`Evaluate \(2x-3y\) and \(x^2-y\) when \(x=-4\) and \(y=-5\).`,
    [String.raw`\(2x-3y=2(-4)-3(-5)\). Multiply: \(-8-(-15)\).`, String.raw`Subtract a negative: \(-8+15=7\).`, String.raw`\(x^2-y=(-4)^2-(-5)=16+5\). So \(x^2-y=21\).`],
    String.raw`\(2x-3y=7\) and \(x^2-y=21\)`,
  )}
  <h2>🟡 Practice Questions</h2>
  ${pr(1, "multiply", String.raw`Evaluate \(-9\times7\).`, String.raw`Different signs, so negative: \(-63\).`)}
  ${pr(2, "multiply", String.raw`Evaluate \((-6)(-8)\).`, String.raw`Same signs, so positive: \(48\).`)}
  ${pr(3, "divide", String.raw`Evaluate \(-72\div9\).`, String.raw`Different signs, so negative: \(-8\).`)}
  ${pr(4, "order of operations", String.raw`Evaluate \(3-4\times(-5)\).`, String.raw`Multiply first: \(4\times(-5)=-20\). Then \(3-(-20)=3+20=23\).`)}
  ${pr(5, "substitution", String.raw`Evaluate \(-3a+b^2\) when \(a=-2\) and \(b=-5\).`, String.raw`\(-3(-2)+(-5)^2=6+25=31\).`)}
  <h2>❓ Q&amp;A Summary</h2>
  ${qa("Q1: How do I decide the sign of a product or quotient?", String.raw`Same signs give a positive result; different signs give a negative result. With many factors, count the negatives — even is positive, odd is negative.`)}
  ${qa("Q2: Why can't I divide by 0?", String.raw`\(a\div0=q\) would mean \(0\times q=a\). But \(0\times q\) is always \(0\), so no number \(q\) works unless \(a=0\) (and then every number works), so the expression is undefined.`)}
  ${qa("Q3: Do multiplication and division always go first?", String.raw`They come before addition and subtraction, but after brackets and exponents. Among themselves, work left to right.`)}
  ${qa("Q4: Why put brackets around a negative value when I substitute?", String.raw`The brackets keep the sign attached: \(x^2\) with \(x=-4\) is \((-4)^2=16\), not \(-4^2=-16\).`)}
  ${qa("Q5: Does a negative sign in front of brackets flip everything inside?", String.raw`It multiplies everything inside by \(-1\): \(-(3-8)=-3+8=5\). Use the sign rules on each term.`)}
</div>`;

export const lessonBlocks = () => [html(lessonHtml)];

export const ASSIGNMENT = {
  title: `Assignment ${CODE} — ${TITLE}`,
  description: String.raw`Knowledge & Understanding
1. Evaluate \( (-7)(6) \).
2. Evaluate \( -56\div(-8) \).
3. Evaluate \( 5-3\times(-4) \).
Thinking
4. Find two integers whose product is \( -24 \) and whose sum is \( 2 \). Show how you found them.
5. The product of four integers is negative. What does this tell you about how many of the integers are negative? Give an example for each possibility.
Communication
6. Use a pattern of products to explain why \( (-3)\times(-4)=12 \).
7. Explain, using a multiplication fact, why \( -20\div0 \) is undefined.
Application
8. A diver descends \( 4 \) m every minute for \( 6 \) minutes. What is the diver's change in depth?
9. A company's profit changes by \( -350 \) dollars each week for \( 7 \) weeks. What is the total change in profit?
10. The temperature at a height of \( h \) km is given by \( T=15-6h \) degrees. Find \( T \) at \( h=4 \) and at \( h=-2 \) (a mine \( 2 \) km below sea level).`,
};

export function bank() {
  const R = rng(1301);
  const { mcA, ms, tf, num, fill } = bankKit(R);
  const m = (s) => `$${s}$`;
  const nz = (lo, hi) => { let v = 0; while (v === 0) v = R.int(lo, hi); return v; };
  const dist = (c, extra = []) => { const s = new Set([...extra, -c, c + 1, c - 1, c + 10, c - 10]); s.delete(c); return [...s]; };
  const T = [], add = (d, make, max) => T.push({ d, make, max });

  // easy
  add("easy", () => { const a = -R.int(2, 9), b = R.int(2, 9); const c = a * b; return mcA("easy", `Evaluate ${m(`${sg(a)} \\times ${b}`)}.`, m(c), dist(c, [Math.abs(c)]).map(m), "Different signs give a negative product."); });
  add("easy", () => { const a = -R.int(2, 9), b = -R.int(2, 9); return num("easy", `Evaluate ${m(`${sg(a, true)} \\times ${sg(b, true)}`)}.`, a * b, 0, "Same signs give a positive product."); });
  add("easy", () => { const b = R.int(2, 9), q = -R.int(2, 9); const a = b * q; return mcA("easy", `Evaluate ${m(`${a} \\div ${b}`)}.`, m(q), dist(q, [Math.abs(q)]).map(m), "Different signs give a negative quotient."); });
  add("easy", () => { const b = -R.int(2, 9), q = R.int(2, 9); const a = b * q; return num("easy", `Evaluate ${m(`${a} \\div ${sg(b, true)}`)}.`, q, 0); });
  add("easy", () => { const s = R.pick([["The product of two negative integers is positive.", true], ["$(-4) \\times 5$ is positive.", false], ["$(-12) \\div (-3) = 4$.", true], ["Any integer divided by $0$ equals $0$.", false], ["$0 \\times (-7) = 0$.", true], ["The quotient of a positive and a negative integer is negative.", true], ["$(-3) \\times (-3) = -9$.", false]]); return tf("easy", s[0], s[1]); }, 6);
  add("easy", () => { const t = R.pick([[-24, 4, 6], [-18, 3, 6], [-20, 4, 5], [-30, 5, 6], [-16, 2, 8], [-28, 4, 7], [-36, 6, 6]]); const n = R.int(3, 8); return fill("easy", `In ${m(`(-${t[1]}) \\times ${t[2]}`)}, the product is ___.`, [String(-t[1] * t[2])]); }, 3);
  add("easy", () => { const a = -R.int(2, 9), b = R.int(2, 9), c = -R.int(2, 9), d = R.int(2, 9); const four = [[a * b, `${sg(a)} \\times ${b}`], [c * d, `${sg(c)} \\times ${d}`], [a * c, `${sg(a)} \\times ${sg(c, true)}`], [b * d, `${b} \\times ${d}`]]; const idx = four.map((v, i) => (v[0] < 0 ? i : -1)).filter((i) => i >= 0); if (idx.length < 1 || idx.length > 3) return null; return ms("easy", "Which products are negative?", four.map((v) => m(v[1])), idx, "A product is negative when the signs differ."); }, 3);
  add("easy", () => { const k = R.int(3, 9), a = R.int(2, 8); return num("easy", `A hiker's elevation changes by ${m(`-${a}`)} m each minute for ${k} minutes. The total change is ___ m.`, -a * k, 0); }, 3);

  // medium
  add("medium", () => { const a = R.int(2, 6), b = -R.int(2, 6), c = R.int(2, 6), d = -R.int(2, 6); const v = a * b * c * d; return mcA("medium", `Evaluate ${m(`${a} \\times ${sg(b, true)} \\times ${c} \\times ${sg(d, true)}`)}.`, m(v), dist(v, [-v]).map(m), "Count the negative factors: an even number gives a positive product."); });
  add("medium", () => { const a = R.int(2, 9), b = R.int(2, 9), c = -R.int(2, 9); const v = a - b * c; return mcA("medium", `Evaluate ${m(`${a} - ${b} \\times ${sg(c, true)}`)}.`, m(v), dist(v, [(a - b) * c]).map(m), "Multiply before subtracting."); });
  add("medium", () => { const a = -R.int(2, 6), b = R.int(2, 9), c = R.int(2, 9); const v = a * (b - c); if (b === c) return null; return num("medium", `Evaluate ${m(`${sg(a)}(${b} - ${c})`)}.`, v, 0, "Brackets first, then multiply."); });
  add("medium", () => { const x = -R.int(2, 8), y = -R.int(2, 8), p = R.int(2, 5), q = R.int(2, 5); return num("medium", `Evaluate ${m(`${p}x - ${q}y`)} when ${m(`x = ${x}`)} and ${m(`y = ${y}`)}.`, p * x - q * y, 0, "Substitute in brackets, then use the order of operations."); });
  add("medium", () => { const x = -R.int(2, 7), c = R.int(1, 9); return mcA("medium", `Evaluate ${m(`x^2 - ${c}`)} when ${m(`x = ${x}`)}.`, m(x * x - c), dist(x * x - c, [-x * x - c, -x * x + c]).map(m), "$(-n)^2$ is positive."); });
  add("medium", () => { const q = -R.int(3, 9), b = R.int(2, 9), r = -R.int(2, 9), s = R.int(2, 6); const v = q + r * s; const a = q * b; return num("medium", `Evaluate ${m(`${a} \\div ${b} + ${sg(r, true)} \\times ${s}`)}.`, v, 0, "Divide and multiply first, left to right."); });
  add("medium", () => { const s = R.pick([["$-3(4 - 7) = 9$.", true], ["$(-2)^3 = 8$.", false, "$(-2)^3 = -8$."], ["$-5 \\times (-5) = 25$.", true], ["$-18 \\div 3 = 6$.", false, "$-18 \\div 3 = -6$."], ["$(-1)^{10} = 1$.", true]]); return tf("medium", s[0], s[1], s[2] ?? ""); }, 5);
  add("medium", () => { const t = R.pick([[-6, 4, 5], [-8, 3, 7], [-9, 2, 6], [-12, 4, 3]]); const total = R.int(3, 6) * t[1]; return num("medium", `A team's score changes by a total of ${m(-total)} points over ${total / t[1]} equal rounds. The change per round is ___ points.`, -t[1], 0); }, 3);
  add("medium", () => { const k = R.int(4, 9), w = R.int(5, 40); return num("medium", `A phone plan takes ${w} dollars from a customer's balance each week. Over ${k} weeks, the change in the balance is ___ dollars (write it as a signed number).`, -w * k, 0); }, 3);

  // hard
  add("hard", () => { const a = R.int(2, 5), b = -R.int(2, 5), c = -R.int(2, 6), d = R.int(2, 9); const v = a * b * b + c * d; return mcA("hard", `Evaluate ${m(`${a}${sg(b, true)}^2 + ${sg(c, true)} \\times ${d}`)}.`, m(v), dist(v, [a * b * b - c * d]).map(m), "Exponent first: the exponent applies to the bracket only."); });
  add("hard", () => { const a = -R.int(2, 7), b = R.int(2, 7), c = R.int(2, 7), d = -R.int(2, 7); const v = a * (b - c) - d * (b + c); if (b === c) return null; return num("hard", `Evaluate ${m(`${sg(a)}(${b} - ${c}) - ${sg(d, true)}(${b} + ${c})`)}.`, v, 0); });
  add("hard", () => { const x = -R.int(2, 6), y = R.int(2, 6), z = -R.int(2, 6); const v = (x * x - y * z) ; return num("hard", `Evaluate ${m(`x^2 - yz`)} when ${m(`x = ${x}`)}, ${m(`y = ${y}`)} and ${m(`z = ${z}`)}.`, v, 0); });
  add("hard", () => { const b = -R.int(2, 6), c = R.int(2, 6); const num_ = R.int(2, 9) * b * c * -1; return num("hard", `Evaluate ${m(`\\dfrac{${num_}}{${sg(b, true)} \\times ${c}}`)}.`, num_ / (b * c), 0, "The fraction bar groups the whole denominator."); });
  add("hard", () => { const p = R.pick([[-4, 6], [-3, 8], [-6, 4], [-5, 6], [-8, 3]]); const prod = p[0] * p[1]; const s = p[0] + p[1]; return num("hard", `Two integers have a product of ${m(prod)} and a sum of ${m(s)}. The smaller integer is ___.`, p[0], 0, "List factor pairs of the product and check the sum."); }, 4);
  add("hard", () => ms("hard", "Which statements are true for ALL non-zero integers $a$ and $b$?", ["$(-a)(-b) = ab$", "$(-a)^2 = -a^2$", "$\\dfrac{-a}{-b} = \\dfrac{a}{b}$", "$a \\div b = b \\div a$"], [0, 2], "$(-a)^2 = a^2$, and division is not commutative."), 1);
  add("hard", () => { const s = R.pick([["If the product of three integers is negative, an odd number of them are negative.", true], ["If $ab > 0$, then $a$ and $b$ must both be positive.", false, "Both could be negative."], ["If $a \\times b = 0$, then $a = 0$ or $b = 0$.", true], ["$(-1)^n = -1$ for every positive integer $n$.", false, "It equals $1$ when $n$ is even."], ["Dividing a non-zero integer by $-1$ gives its opposite.", true]]); return tf("hard", s[0], s[1], s[2] ?? ""); }, 5);
  add("hard", () => { const n = R.int(4, 9), per = R.int(3, 12); return num("hard", `A glacier's edge retreats ${per} m each month. Written as a signed number, the change in its position after ${n} months is ___ m.`, -per * n, 0); }, 3);
  add("hard", () => { const x = R.int(2, 6), y = -R.int(2, 6); return mcA("hard", `Which value of ${m("x")} makes ${m(`${x}x = ${x * y}`)} true?`, m(y), [m(-y), m(x * y + x), m(0)]); }, 3);

  add("medium", () => { const t = R.pick([-12, -18, -24, -20, -30, -36]); const pairs = [[2, 1], [3, 1], [4, 1], [6, 1], [-2, 1], [-3, 1], [-4, 1], [-6, 1]]; const fs = []; for (let a = -9; a <= 9; a++) { if (a === 0 || t % a !== 0) continue; const b = t / a; if (Math.abs(b) <= 12) fs.push([a, b]); } const good = R.shuffle(fs).slice(0, 2); const bad = []; while (bad.length < 2) { const a = nz(-9, 9), b = nz(-9, 9); if (a * b !== t) bad.push([a, b]); } const all = R.shuffle([...good.map((g) => ({ g, ok: true })), ...bad.map((g) => ({ g, ok: false }))]); const txt = all.map((x) => m(`${sg(x.g[0])} \\times ${sg(x.g[1], true)}`)); if (new Set(txt).size < 4) return null; return ms("medium", `Which products equal ${m(t)}?`, txt, all.map((x, i) => (x.ok ? i : -1)).filter((i) => i >= 0)); }, 3);
  add("medium", () => { const a = -R.int(2, 5), b = -R.int(2, 5), c = -R.int(2, 5); return fill("medium", `Evaluate ${m(`${sg(a)} \\times ${sg(b, true)} \\times ${sg(c, true)}`)}: ___.`, [String(a * b * c)], "Three negative factors: an odd number, so the product is negative."); }, 3);
  add("hard", () => { const f = () => nz(-6, 6); const sets = [0, 1, 2, 3].map(() => [f(), f(), f()]); const idx = sets.map((s, i) => (s[0] * s[1] * s[2] > 0 ? i : -1)).filter((i) => i >= 0); if (idx.length < 1 || idx.length > 3) return null; return ms("hard", "Which products are positive?", sets.map((s) => m(`${sg(s[0])} \\times ${sg(s[1], true)} \\times ${sg(s[2], true)}`)), idx, "Count the negative factors."); }, 3);
  add("hard", () => { const a = -R.int(2, 6), b = R.int(2, 6), c = -R.int(2, 6); if ((a * b) % c !== 0) return null; return fill("hard", `Evaluate ${m(`(${a} \\times ${b}) \\div ${sg(c, true)}`)}: ___.`, [String((a * b) / c)], "Multiply, then divide, keeping track of the signs."); }, 3);
  return fillBank(T, 20);
}

const wLesson = [
  ["The sign rules", String.raw`<b>Same signs</b> give a positive product or quotient; <b>different signs</b> give a negative one. With several factors, count the negatives: even gives positive, odd gives negative.`],
  ["Dividing", String.raw`Division undoes multiplication, so the same sign rules apply: $-48\div6=-8$ because $6\times(-8)=-48$. You can never divide by $0$.`],
  ["Order of operations and substitution", String.raw`Do <b>B</b>rackets, <b>E</b>xponents, then <b>D</b>ivision and <b>M</b>ultiplication left to right, then <b>A</b>ddition and <b>S</b>ubtraction left to right. When substituting a negative value, put it in brackets.`],
];
const wExamples = [
  ["Example 1: A pattern", String.raw`Complete: $2\times(-1)=\_\_\_$, $2\times(-2)=\_\_\_$, $2\times(-3)=\_\_\_$.`, String.raw`Each step down in the second factor lowers the product by $2$: $-2,\ -4,\ -6$.`],
  ["Example 2: Different signs", String.raw`Evaluate $-9\times4$.`, String.raw`Different signs, so negative: $9\times4=36$, so $-36$.`],
  ["Example 3: Same signs", String.raw`Evaluate $(-6)(-7)$.`, String.raw`Same signs, so positive: $42$.`],
  ["Example 4: Five factors", String.raw`Evaluate $(-1)(2)(-3)(-1)(2)$.`, String.raw`Three negatives (odd), so negative. $1\times2\times3\times1\times2=12$, so $-12$.`],
  ["Example 5: Dividing different signs", String.raw`Evaluate $-63\div7$.`, String.raw`$63\div7=9$ and the signs differ, so $-9$.`],
  ["Example 6: Dividing two negatives", String.raw`Evaluate $-45\div(-5)$.`, String.raw`$45\div5=9$ and the signs match, so $9$.`],
  ["Example 7: Order of operations", String.raw`Evaluate $12+3\times(-4)-8\div(-2)$.`, String.raw`Multiply and divide: $3\times(-4)=-12$ and $8\div(-2)=-4$. Then $12+(-12)-(-4)=0+4=4$.`],
  ["Example 8: Brackets", String.raw`Evaluate $(-2)(-3+8)+5$.`, String.raw`Brackets: $-3+8=5$. Multiply: $(-2)(5)=-10$. Add: $-10+5=-5$.`],
  ["Example 9: Substitution", String.raw`Evaluate $4x+7$ and $x^2-2x$ when $x=-3$.`, String.raw`$4(-3)+7=-12+7=-5$. $(-3)^2-2(-3)=9+6=15$.`],
];
const wQuestions = [
  ["Problem 1", String.raw`Evaluate $-8\times7$.`, String.raw`$-56$`, 3.0],
  ["Problem 2", String.raw`Evaluate $(-9)(-6)$.`, String.raw`$54$`, 3.0],
  ["Problem 3", String.raw`Evaluate $-81\div9$.`, String.raw`$-9$`, 3.0],
  ["Problem 4", String.raw`Evaluate $-96\div(-12)$.`, String.raw`$8$`, 3.0],
  ["Problem 5", String.raw`Evaluate $(-2)(5)(-3)$.`, String.raw`$30$`, 3.0],
  ["Problem 6", String.raw`Evaluate $(-1)(-1)(-1)(-1)(-1)$.`, String.raw`$-1$ (five negatives)`, 3.0],
  ["Problem 7", String.raw`Evaluate $4-3\times(-6)$.`, String.raw`$22$`, 3.2],
  ["Problem 8", String.raw`Evaluate $-20\div4+2\times(-7)$.`, String.raw`$-19$`, 3.2],
  ["Problem 9", String.raw`Evaluate $-3(7-12)+4$.`, String.raw`$19$`, 3.2],
  ["Problem 10", String.raw`Evaluate $5a-2b$ when $a=-3$ and $b=4$.`, String.raw`$-23$`, 3.2],
  ["Problem 11", String.raw`A tank drains $15$ L every minute. What is the change in the amount of water after $8$ minutes?`, String.raw`$-120$ L`, 3.4],
  ["Problem 12", String.raw`Find the mean of the temperature changes $-12,\ -5,\ 7,\ -2,\ -8$.`, String.raw`Sum $=-20$, and $-20\div5=-4$`, 3.4],
  ["Problem 13 --- Challenge", String.raw`Find two integers whose product is $-36$ and whose sum is $-5$.`, String.raw`$-9$ and $4$`, 3.8],
];
const ws = packWorksheet({
  code: CODE, title: TITLE,
  intro: "Multiplying and dividing integers follow one sign rule, and the order of operations ties all four operations together. This worksheet practises products, quotients, BEDMAS and substituting negative values.",
  bigideas: String.raw`<b>Same signs</b> give a positive result and <b>different signs</b> give a negative one, for both multiplying and dividing. Always finish multiplication and division before addition and subtraction.`,
  lesson: wLesson, examples: wExamples, questions: wQuestions,
});
export const WORKSHEET_CONTENT = ws.content;
export const WORKSHEET_TEX = ws.texData;
