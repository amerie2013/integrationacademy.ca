// MTH1W 1.7 — Exponent Laws & Scientific Notation (rebuilt from the second half of the old 1.3, much deeper).
import { html, ex, pr, qa, watchOut, table, rng, bankKit, fillBank, packWorksheet, fracKit } from "./lib.mjs";

export const CODE = "1.7";
export const TITLE = "Exponent Laws & Scientific Notation";
export const FULL_TITLE = `${CODE} ${TITLE}`;

const lessonHtml = String.raw`<div class="lecture-box">
  <h1>🧮 Exponent Laws &amp; Scientific Notation</h1>
  <p><strong>Overview.</strong> Writing out repeated multiplication gets long fast. The <strong>exponent laws</strong> let you multiply, divide and raise powers to powers without expanding them — for numbers and for variables. They also make <strong>scientific notation</strong> work: it expresses very large and very small numbers (the distance to the Sun, the width of an atom) as a number between \(1\) and \(10\) times a power of \(10\), and the laws let you calculate with those numbers.</p>

  <h2>📌 The five laws (same base)</h2>
  ${table(["Law", "Rule", "Example"], [
    ["Product", "aᵐ × aⁿ = aᵐ⁺ⁿ", "2³ × 2⁴ = 2⁷"],
    ["Quotient", "aᵐ ÷ aⁿ = aᵐ⁻ⁿ", "5⁹ ÷ 5⁶ = 5³"],
    ["Power of a power", "(aᵐ)ⁿ = aᵐⁿ", "(4²)³ = 4⁶"],
    ["Power of a product", "(ab)ⁿ = aⁿbⁿ", "(2x)³ = 8x³"],
    ["Power of a quotient", "(a/b)ⁿ = aⁿ/bⁿ", "(3/4)² = 9/16"],
  ])}
  <p><strong>Why they work.</strong> Count the factors: \(2^3\times2^4=(2\times2\times2)(2\times2\times2\times2)=2^7\) — three factors plus four factors. Dividing cancels factors, and a power of a power repeats a group: \((4^2)^3=4^2\times4^2\times4^2=4^6\). Because \(a^{-n}\) is the reciprocal of \(a^n\) (lesson 1.6), the laws keep working when the exponent goes negative: \(3^2\div3^5=3^{-3}=\dfrac1{27}\).</p>

  <h2>📌 Variables and coefficients</h2>
  <p>Apply the laws to each part separately: multiply or divide the <strong>coefficients</strong> as ordinary numbers, and use the laws on each <strong>variable</strong>. A power applies to the coefficient too: \((3x)^2=9x^2\), not \(3x^2\). Finish with <strong>positive exponents</strong> by moving a negative-exponent factor across the fraction bar.</p>

  <h2>📌 Scientific notation</h2>
  <p>A number in <strong>scientific notation</strong> is \(a\times10^n\) with \(1\le a<10\) and \(n\) an integer. A positive \(n\) means a large number (move the decimal \(n\) places right); a negative \(n\) means a number between \(0\) and \(1\) (move it \(|n|\) places left). To multiply or divide, handle the \(a\)'s with ordinary arithmetic and the powers of \(10\) with the laws, then adjust so that \(1\le a<10\) again.</p>

  ${watchOut([
    String.raw`<strong>The laws need the same base.</strong> \(2^3\times2^4=2^7\), but \(2^3\times3^4\) cannot be combined, and \(2^3\times2^4\ne4^7\) (the base stays \(2\)).`,
    String.raw`<strong>They do not work for addition or subtraction.</strong> \(2^3+2^4=8+16=24\), not \(2^7=128\), and \((a+b)^2\ne a^2+b^2\).`,
    String.raw`<strong>Apply the exponent to everything inside the bracket.</strong> \((2x^3)^2=2^2x^6=4x^6\) — the coefficient gets squared too.`,
    String.raw`<strong>Keep \(a\) between \(1\) and \(10\).</strong> \(20\times10^8\) is not in scientific notation; it is \(2\times10^9\).`,
  ])}

  <h2>🔵 Examples</h2>
  ${ex(
    "Example 1: Product law",
    String.raw`Simplify and evaluate \(2^3\times2^4\).`,
    [String.raw`The bases are the same, so add the exponents: \(2^{3+4}=2^7\).`, String.raw`Evaluate: \(2^7=128\).`, String.raw`Check by expanding: \((2\times2\times2)\times(2\times2\times2\times2)=8\times16=128\).`],
    String.raw`\(2^3\times2^4=2^7=128\)`,
  )}
  ${ex(
    "Example 2: Quotient law",
    String.raw`Evaluate \(5^9\div5^6\) and \(3^2\div3^5\).`,
    [String.raw`Subtract the exponents: \(5^{9-6}=5^3=125\).`, String.raw`\(3^{2-5}=3^{-3}\), and a negative exponent means the reciprocal: \(\dfrac1{3^3}=\dfrac1{27}\).`],
    String.raw`\(5^9\div5^6=125\) and \(3^2\div3^5=\dfrac1{27}\)`,
  )}
  ${ex(
    "Example 3: Power of a power",
    String.raw`Evaluate \((4^2)^3\) and \(\big((-2)^3\big)^2\).`,
    [String.raw`Multiply the exponents: \((4^2)^3=4^{2\times3}=4^6=4096\).`, String.raw`\(\big((-2)^3\big)^2=(-2)^6=64\). Check: \((-8)^2=64\).`],
    String.raw`\((4^2)^3=4096\) and \(\big((-2)^3\big)^2=64\)`,
  )}
  ${ex(
    "Example 4: Power of a product and of a quotient",
    String.raw`Simplify \((2\times5)^3\), \(\left(\dfrac34\right)^2\) and \((2x)^3\).`,
    [String.raw`\((2\times5)^3=2^3\times5^3=8\times125=1000\).`, String.raw`\(\left(\dfrac34\right)^2=\dfrac{3^2}{4^2}=\dfrac9{16}\).`, String.raw`\((2x)^3=2^3x^3=8x^3\).`],
    String.raw`\(1000\), \(\dfrac9{16}\) and \(8x^3\)`,
  )}
  ${ex(
    "Example 5: Combining laws with variables",
    String.raw`Simplify \((2x^3y)^2\cdot3xy^4\).`,
    [String.raw`Power of a product: \((2x^3y)^2=2^2x^6y^2=4x^6y^2\).`, String.raw`Multiply coefficients: \(4\times3=12\). Add exponents of \(x\): \(6+1=7\). Add exponents of \(y\): \(2+4=6\).`],
    String.raw`\((2x^3y)^2\cdot3xy^4=12x^7y^6\)`,
  )}
  ${ex(
    "Example 6: Dividing with variables",
    String.raw`Simplify \(\dfrac{18a^5b^2}{6a^2b^5}\) with positive exponents.`,
    [String.raw`Divide coefficients: \(18\div6=3\).`, String.raw`Subtract exponents: \(a^{5-2}=a^3\) and \(b^{2-5}=b^{-3}\).`, String.raw`Move \(b^{-3}\) to the denominator to make the exponent positive.`],
    String.raw`\(\dfrac{18a^5b^2}{6a^2b^5}=\dfrac{3a^3}{b^3}\)`,
  )}
  ${ex(
    "Example 7: Writing in scientific notation",
    String.raw`Write \(4\,500\,000\) and \(0.00032\) in scientific notation, and write \(7.1\times10^3\) and \(2.5\times10^{-2}\) as ordinary numbers.`,
    [String.raw`\(4\,500\,000\): move the decimal \(6\) places left to get \(4.5\), so \(4.5\times10^6\).`, String.raw`\(0.00032\): move the decimal \(4\) places right to get \(3.2\), so \(3.2\times10^{-4}\).`, String.raw`\(7.1\times10^3\): move \(3\) places right: \(7100\). \(2.5\times10^{-2}\): move \(2\) places left: \(0.025\).`],
    String.raw`\(4.5\times10^6\), \(3.2\times10^{-4}\), \(7100\) and \(0.025\)`,
  )}
  ${ex(
    "Example 8: Multiplying and dividing in scientific notation",
    String.raw`Evaluate \((3\times10^4)(2.5\times10^5)\), \((4\times10^5)(5\times10^3)\) and \(\dfrac{6\times10^8}{4\times10^3}\).`,
    [String.raw`\((3\times2.5)\times10^{4+5}=7.5\times10^9\).`, String.raw`\((4\times5)\times10^{5+3}=20\times10^8\). That is not in scientific notation, so write \(20=2\times10^1\): \(2\times10^9\).`, String.raw`\(\dfrac{6}{4}\times10^{8-3}=1.5\times10^5\).`],
    String.raw`\(7.5\times10^9\), \(2\times10^9\) and \(1.5\times10^5\)`,
  )}
  ${ex(
    "Example 9: Light from the Sun",
    String.raw`Light travels at \(3\times10^8\) m/s. The Sun is \(1.5\times10^{11}\) m from Earth. How long does its light take to reach us?`,
    [String.raw`Time \(=\) distance \(\div\) speed \(=\dfrac{1.5\times10^{11}}{3\times10^8}\).`, String.raw`Divide the numbers and subtract the exponents: \(0.5\times10^{3}=5\times10^2\) s.`, String.raw`\(5\times10^2=500\) seconds, which is about \(8.3\) minutes.`],
    String.raw`sunlight takes \(5\times10^2\) s (about \(8.3\) minutes) to reach Earth`,
  )}
  <h2>🟡 Practice Questions</h2>
  ${pr(1, "product and quotient", String.raw`Evaluate \(7^5\times7^{-2}\).`, String.raw`\(7^{5+(-2)}=7^3=343\).`)}
  ${pr(2, "power of a power", String.raw`Evaluate \((3^2)^{-2}\).`, String.raw`\(3^{-4}=\dfrac1{81}\).`)}
  ${pr(3, "with variables", String.raw`Simplify \((-2x^2)^3\).`, String.raw`\((-2)^3x^{6}=-8x^6\).`)}
  ${pr(4, "scientific notation", String.raw`Write \(0.000062\) in scientific notation.`, String.raw`Move the decimal \(5\) places right: \(6.2\times10^{-5}\).`)}
  ${pr(5, "computing", String.raw`Evaluate \((2\times10^6)(3.5\times10^{-2})\) and write the answer as an ordinary number.`, String.raw`\((2\times3.5)\times10^{6-2}=7\times10^4=70\,000\).`)}
  <h2>❓ Q&amp;A Summary</h2>
  ${qa("Q1: Why do I add the exponents when multiplying powers?", String.raw`Each exponent counts factors. \(a^3\times a^2\) is three \(a\)'s times two \(a\)'s, which is five \(a\)'s: \(a^5\).`)}
  ${qa("Q2: What if the bases are different?", String.raw`The product and quotient laws need the same base. \(2^3\times5^3\) can use the power of a product law in reverse: \((2\times5)^3=10^3\), but \(2^3\times5^4\) cannot be combined into one power.`)}
  ${qa("Q3: Why is \\(2^3+2^4\\) not \\(2^7\\)?", String.raw`The laws describe multiplication and division of powers. Addition has no such shortcut: \(2^3+2^4=8+16=24\).`)}
  ${qa("Q4: Why must \\(a\\) in scientific notation be between 1 and 10?", String.raw`So every number has exactly one form, and the exponent immediately shows the size of the number. Compare \(4\times10^5\) and \(9\times10^4\) by the exponents first.`)}
  ${qa("Q5: How do I know whether the exponent is positive or negative?", String.raw`Large numbers (\(\ge10\)) have positive exponents and numbers between \(0\) and \(1\) have negative exponents. The exponent counts how many places the decimal moved.`)}
</div>`;

export const lessonBlocks = () => [html(lessonHtml)];

export const ASSIGNMENT = {
  title: `Assignment ${CODE} — ${TITLE}`,
  description: String.raw`Knowledge & Understanding
1. Simplify and evaluate \( 2^5\times2^3 \).
2. Evaluate \( (5^3)^2 \).
3. Write \( 380\,000 \) in scientific notation.
Thinking
4. Is \( 2^3+2^4=2^7 \)? Evaluate both sides to prove your answer.
5. Find the exponent \( n \) so that \( (2^n)^3\times2^2=2^{14} \). Show your steps.
Communication
6. Use the expansion of \( a^3\times a^2 \) to explain why the exponents are added when you multiply powers of the same base.
7. A student writes \( (3x)^2=3x^2 \). Explain the mistake and write the correct simplification.
Application
8. The mass of Earth is about \( 5.97\times10^{24} \) kg and the mass of the Moon is about \( 7.35\times10^{22} \) kg. About how many times as massive as the Moon is Earth? Round to the nearest whole number.
9. A processor performs \( 3\times10^9 \) operations every second. How many operations does it perform in \( 2\times10^{-3} \) seconds? Give the answer in scientific notation.
10. Light travels about \( 9.46\times10^{12} \) km in one year. The nearest star system is \( 4.2 \) light years away. How far is that in kilometres? Give the answer in scientific notation, rounded to three significant digits.`,
};

export function bank() {
  const R = rng(1701);
  const { mcA, ms, tf, num, fill } = bankKit(R);
  const K = fracKit();
  const m = (s) => `$${s}$`;
  const T = [], add = (d, make, max) => T.push({ d, make, max });
  const pw = Math.pow;
  const sup = (a, n) => `${a}^{${n}}`;
  const nice = (x) => String(Math.round(x * 1e6) / 1e6);

  // monomial helper: {c,x,y}
  const mono = (c, x, y) => { if (c === 0) return "0"; const e = (v, n) => (n === 0 ? "" : n === 1 ? v : `${v}^{${n}}`); let s = ""; if (c === -1 && (x || y)) s = "-"; else if (c !== 1 || (!x && !y)) s = `${c}`; return s + e("x", x) + e("y", y); };
  const showMono = (c, x, y) => mono(c, x, y);

  // easy
  add("easy", () => { const a = R.int(2, 9), p = R.int(2, 6), q = R.int(2, 6); return mcA("easy", `Simplify ${m(`${a}^{${p}} \\times ${a}^{${q}}`)}.`, m(`${a}^{${p + q}}`), [m(`${a}^{${p * q}}`), m(`${a * a}^{${p + q}}`), m(`${a}^{${Math.abs(p - q) || 1}}`)], "Same base: add the exponents."); });
  add("easy", () => { const a = R.int(2, 9), p = R.int(5, 10), q = R.int(2, 4); return mcA("easy", `Simplify ${m(`${a}^{${p}} \\div ${a}^{${q}}`)}.`, m(`${a}^{${p - q}}`), [m(`${a}^{${p + q}}`), m(`${a}^{${p * q}}`), m(`1^{${p - q}}`), m(`${a}^{${q - p}}`)], "Same base: subtract the exponents."); });
  add("easy", () => { const a = R.int(2, 9), p = R.int(2, 8), q = R.int(2, 8); return fill("easy", `Write ${m(`${a}^{${p}} \\times ${a}^{${q}}`)} as a single power: ___.`, [`${a}^${p + q}`, `${a}^{${p + q}}`], "Add the exponents."); }, 3);
  add("easy", () => { const x = R.pick(["x", "y", "a", "m"]), p = R.int(2, 8), q = R.int(2, 8); return fill("easy", `Simplify ${m(`${x}^{${p}} \\cdot ${x}^{${q}}`)}: ___.`, [`${x}^${p + q}`, `${x}^{${p + q}}`]); }, 3);
  add("easy", () => { const a = R.int(2, 6), p = R.int(2, 4), q = R.int(2, 3); return mcA("easy", `Simplify ${m(`(${a}^{${p}})^{${q}}`)}.`, m(`${a}^{${p * q}}`), [m(`${a}^{${p + q}}`), m(`${a * q}^{${p}}`), m(`${a}^{${p}}`), m(`${a}^{${p * q + 1}}`)], "Power of a power: multiply the exponents."); });
  add("easy", () => { const a = R.int(2, 4), p = R.int(1, 3), q = R.int(1, 3); return num("easy", `Evaluate ${m(`${a}^{${p}} \\times ${a}^{${q}}`)}.`, pw(a, p + q), 0); });
  add("easy", () => { const a = R.int(2, 6), p = R.int(2, 5), q = R.int(1, 5); return num("easy", `If ${m(`${a}^{${p}} \\times ${a}^{x} = ${a}^{${p + q}}`)}, then x = ___.`, q, 0); });
  add("easy", () => { const s = R.pick([["$3^4 \\times 3^2 = 3^6$.", true], ["$2^3 \\times 2^4 = 4^7$.", false, "The base stays $2$: $2^3 \\times 2^4 = 2^7$."], ["$(5^2)^3 = 5^6$.", true], ["$7^5 \\div 7^2 = 7^{10}$.", false, "Subtract the exponents: $7^3$."], ["$2^3 + 2^4 = 2^7$.", false, "$8 + 16 = 24$ but $2^7 = 128$."], ["$10^5 \\times 10^2 = 10^7$.", true], ["$(ab)^2 = a^2b^2$.", true]]); return tf("easy", s[0], s[1], s[2] ?? ""); }, 6);
  add("easy", () => { const e = R.int(3, 8); const a = R.pick([1.2, 2.4, 3.5, 4.8, 5.6, 6.1, 7.3, 8.9, 9.4]); const big = nice(a * pw(10, e)); const digits = big.replace(/\B(?=(\d{3})+(?!\d))/g, "\\,"); return num("easy", `${m(digits)} is written in scientific notation as ${m(`${a} \\times 10^{n}`)}. Then n = ___.`, e, 0); });
  add("easy", () => { const e = R.int(2, 6); const a = R.pick([1.5, 2.5, 3.2, 4, 6, 7.5, 8.1]); const val = nice(a * pw(10, -e)); return num("easy", `${m(val)} is written in scientific notation as ${m(`${a} \\times 10^{n}`)}. Then n = ___.`, -e, 0); });
  add("easy", () => { const base = R.pick([2, 3, 5]); const e = R.int(2, 4); const opts = R.shuffle([[m(`${base}^{${e}} \\times ${base}^{${e}}`), true], [m(`${base}^{${2 * e}}`), true], [m(`${base}^{${e * e}}`), e === 2], [m(`${base}^{${e}} + ${base}^{${e}}`), false]]); return ms("easy", `Which are equal to ${m(`${base}^{${2 * e}}`)}?`, opts.map((o) => o[0]), opts.map((o, i) => (o[1] ? i : -1)).filter((i) => i >= 0)); }, 1);

  // medium
  add("medium", () => { const a = R.int(2, 4), p = R.int(2, 5), q = R.int(6, 9); return mcA("medium", `Simplify ${m(`${a}^{${p}} \\div ${a}^{${q}}`)} and write with a positive exponent.`, m(`\\frac{1}{${a}^{${q - p}}}`), [m(`${a}^{${q - p}}`), m(`-${a}^{${q - p}}`), m(`\\frac{1}{${a}^{${p + q}}}`)], "A negative exponent means the reciprocal."); });
  add("medium", () => { const c1 = R.int(2, 4), a = R.int(1, 3), b = R.int(1, 3), p = R.int(2, 3), c2 = R.int(2, 5), d = R.int(1, 4), e = R.int(1, 4); const rc = pw(c1, p) * c2, rx = a * p + d, ry = b * p + e; return mcA("medium", `Simplify ${m(`(${showMono(c1, a, b)})^{${p}} \\cdot ${showMono(c2, d, e)}`)}.`, m(showMono(rc, rx, ry)), [m(showMono(c1 * p * c2, rx, ry)), m(showMono(rc, a * p * d, b * p * e)), m(showMono(rc, rx + 1, ry)), m(showMono(rc, rx, ry - 1))], "Power of a product first, then multiply coefficients and add exponents."); });
  add("medium", () => { const c = R.int(2, 6), q = R.int(2, 5), x1 = R.int(4, 9), x2 = R.int(1, 3), y1 = R.int(3, 7), y2 = R.int(1, 3); const rx = x1 - x2, ry = y1 - y2; return mcA("medium", `Simplify ${m(`\\dfrac{${c * q}x^{${x1}}y^{${y1}}}{${q}x^{${x2}}y^{${y2}}}`)}.`, m(showMono(c, rx, ry)), [m(showMono(c * q, rx, ry)), m(showMono(c, x1 + x2, y1 + y2)), m(showMono(c, rx, ry + 1)), m(showMono(c, rx - 1, ry))], "Divide coefficients and subtract exponents."); });
  add("medium", () => { const a = R.int(2, 5), p = R.int(2, 4), q = R.int(2, 3); return num("medium", `Evaluate ${m(`(${a}^{${p}})^{${q}} \\div ${a}^{${p * q - 2}}`)}.`, a * a, 0, "The exponent simplifies to 2."); });
  add("medium", () => { const a = R.pick([2, 3, 4, 5, 6, 7, 8, 9]); const e = R.int(3, 7); const mantissa = R.pick([1.4, 2.6, 3.1, 5.2, 6.8, 7.9]); const v = nice(mantissa * pw(10, e)); const digits = v.replace(/\B(?=(\d{3})+(?!\d))/g, "\\,"); return mcA("medium", `Write ${m(digits)} in scientific notation.`, m(`${mantissa} \\times 10^{${e}}`), [m(`${mantissa} \\times 10^{${e + 1}}`), m(`${mantissa * 10} \\times 10^{${e - 1}}`), m(`${mantissa} \\times 10^{-${e}}`)]); });
  add("medium", () => { const a = R.pick([1.5, 2, 2.5, 3, 4]), b = R.pick([1.2, 2, 3, 2.4]), e1 = R.int(3, 7), e2 = R.int(2, 6); const mm = nice(a * b); if (a * b >= 10) return null; return mcA("medium", `Evaluate ${m(`(${a} \\times 10^{${e1}})(${b} \\times 10^{${e2}})`)}.`, m(`${mm} \\times 10^{${e1 + e2}}`), [m(`${mm} \\times 10^{${e1 * e2}}`), m(`${nice(a + b)} \\times 10^{${e1 + e2}}`), m(`${mm} \\times 10^{${Math.abs(e1 - e2)}}`)], "Multiply the numbers and add the exponents."); });
  add("medium", () => { const s = R.pick([["$(2x)^3 = 6x^3$.", false, "$(2x)^3 = 8x^3$."], ["$x^4 \\cdot x^5 = x^9$.", true], ["$\\dfrac{y^7}{y^3} = y^4$.", true], ["$(a^2b)^3 = a^6b^3$.", true], ["$(x^3)^2 = x^5$.", false, "$(x^3)^2 = x^6$."], ["$5a^2 \\cdot 2a^3 = 10a^5$.", true]]); return tf("medium", s[0], s[1], s[2] ?? ""); }, 6);
  add("medium", () => { const e1 = R.int(3, 6), e2 = R.int(1, 3); const mant = R.pick([4, 5, 6, 8]); return num("medium", `${m(`${mant} \\times 10^{${e1}}`)} written as an ordinary number has ___ zeros after the ${mant}.`, e1, 0); }, 3);
  add("medium", () => { const base = R.pick([2, 3, 5]), e = R.int(2, 4); const o = R.shuffle([[m(`(${base}^{${e}})^{3}`), m(`${base}^{${3 * e}}`)], [m(`(${base}^{3})^{${e}}`), m(`${base}^{${3 * e}}`)], [m(`${base}^{${e}} \\times ${base}^{3}`), m(`${base}^{${e + 3}}`)], [m(`(${base} \\times ${base})^{${e}}`), m(`${base}^{${2 * e}}`)]]); const good = o.map((x, i) => i).filter((i) => o[i][1] === m(`${base}^{${3 * e}}`)); if (good.length < 1 || good.length > 3) return null; return ms("medium", `Which expressions equal ${m(`${base}^{${3 * e}}`)}?`, o.map((x) => x[0]), good); }, 2);

  // hard
  add("hard", () => { const c1 = R.int(2, 3), a = R.int(1, 3), b = R.int(1, 3), p = R.int(2, 3), c2 = R.int(2, 6), d = R.int(1, 3), e = R.int(1, 3); const num_ = pw(c1, p) * c2; const rx = a * p + d, ry = b * p + e; const denC = R.pick([2, 4]); if (num_ % denC !== 0) return null; const x2 = R.int(1, rx - 1), y2 = R.int(1, ry - 1); const rc = num_ / denC; return mcA("hard", `Simplify ${m(`\\dfrac{(${showMono(c1, a, b)})^{${p}} \\cdot ${showMono(c2, d, e)}}{${denC}x^{${x2}}y^{${y2}}}`)}.`, m(showMono(rc, rx - x2, ry - y2)), [m(showMono(num_ * denC, rx - x2, ry - y2)), m(showMono(rc, rx + x2, ry + y2)), m(showMono(c1 * p * c2 / denC, rx - x2, ry - y2)), m(showMono(rc, rx - x2, ry - y2 + 1))], "Expand the power, multiply, then divide."); }, 3);
  add("hard", () => { const a = R.pick([1.5, 2.4, 3, 4.8, 6, 7.2]), b = R.pick([2, 4, 5, 8, 3]), e1 = R.int(6, 12), e2 = R.int(2, 5); const q = a / b; const mant = q < 1 ? q * 10 : q; const e = q < 1 ? e1 - e2 - 1 : e1 - e2; return mcA("hard", `Evaluate ${m(`\\dfrac{${a} \\times 10^{${e1}}}{${b} \\times 10^{${e2}}}`)} in scientific notation.`, m(`${nice(mant)} \\times 10^{${e}}`), [m(`${nice(q)} \\times 10^{${e1 - e2}}`), m(`${nice(mant)} \\times 10^{${e1 + e2}}`), m(`${nice(mant)} \\times 10^{${e + 1}}`)].filter((x) => x !== m(`${nice(mant)} \\times 10^{${e}}`)), "Divide the numbers, subtract the exponents, then adjust so the first factor is between 1 and 10."); }, 3);
  add("hard", () => { const a = R.pick([4, 5, 6, 7, 8]), b = R.pick([3, 4, 5, 6]), e1 = R.int(3, 8), e2 = R.int(2, 7); const prod = a * b; const e = e1 + e2 + 1; return mcA("hard", `Evaluate ${m(`(${a} \\times 10^{${e1}})(${b} \\times 10^{${e2}})`)} in scientific notation.`, m(`${prod / 10} \\times 10^{${e}}`), [m(`${prod} \\times 10^{${e - 1}}`), m(`${prod / 10} \\times 10^{${e - 1}}`), m(`${prod / 10} \\times 10^{${e1 * e2}}`)], "The product of the first factors is 10 or more, so move one place and increase the exponent."); }, 3);
  add("hard", () => { const v = R.pick([[3, 8, 1.5, 11, "500 seconds", 500], [3, 8, 6, 11, "2000 seconds", 2000], [3, 5, 9, 8, "300 seconds", 300]]); const [s_, se, d_, de, , ans] = v; const t = (d_ * pw(10, de)) / (s_ * pw(10, se)); return num("hard", `A signal travels at ${m(`${s_} \\times 10^{${se}}`)} m/s over a distance of ${m(`${d_} \\times 10^{${de}}`)} m. The travel time, in seconds, is ___.`, Math.round(t * 1e6) / 1e6, 0.001, "Time = distance ÷ speed."); }, 2);
  add("hard", () => { const k = R.int(2, 5), g = R.pick([[2, "doubles"], [3, "triples"]]); const start = R.int(2, 9); const total = start * pw(g[0], k); return num("hard", `A colony starts with ${start} cells and ${g[1]} every hour. The number of cells after ${k} hours is ___.`, total, 0, `${start} × ${g[0]}^${k}.`); }, 3);
  add("hard", () => { const s = R.pick([["$\\left(\\dfrac{a}{b}\\right)^{3} = \\dfrac{a^3}{b^3}$ for $b \\ne 0$.", true], ["$(a + b)^2 = a^2 + b^2$.", false, "$(a+b)^2 = a^2 + 2ab + b^2$."], ["$x^{-2} \\cdot x^{5} = x^{3}$.", true], ["$20 \\times 10^8$ is written in scientific notation.", false, "The first factor must be less than $10$: $2 \\times 10^9$."], ["$\\dfrac{x^3}{x^3} = 0$ for $x \\ne 0$.", false, "It equals $x^0 = 1$."]]); return tf("hard", s[0], s[1], s[2] ?? ""); }, 5);
  add("hard", () => { const [mm, e] = R.pick([[5.97, 24], [7.35, 22], [1.99, 30], [6.02, 23], [9.11, -31]]); const x = R.int(2, 4); const big = e > 0; return mcA("hard", `Which is greater: ${m(`${mm} \\times 10^{${e}}`)} or ${m(`${nice(mm * 10)} \\times 10^{${e - 2}}`)}?`, m(`${mm} \\times 10^{${e}}`), [m(`${nice(mm * 10)} \\times 10^{${e - 2}}`), "They are equal", "Cannot be compared"], `The second equals $${nice(mm * 10)} \\times 10^{${e - 2}} = ${mm} \\times 10^{${e - 1}}$, which is smaller.`); }, 2);
  add("hard", () => { const sets = [["$x^2 \\cdot x^3$", "x^5"], ["$(x^2)^3$", "x^6"], ["$x^{10} \\div x^5$", "x^5"], ["$\\dfrac{x^8}{x^3}$", "x^5"], ["$x^3 \\cdot x^3$", "x^6"]]; const pick4 = R.shuffle(sets).slice(0, 4); const idx = pick4.map((s, i) => (s[1] === "x^5" ? i : -1)).filter((i) => i >= 0); if (idx.length < 1 || idx.length > 3) return null; return ms("hard", "Which expressions simplify to $x^5$?", pick4.map((s) => s[0]), idx); }, 2);

  return fillBank(T, 20);
}

const wLesson = [
  ["The exponent laws", String.raw`For the same base: $a^m\times a^n=a^{m+n}$, $a^m\div a^n=a^{m-n}$ and $(a^m)^n=a^{mn}$. For products and quotients: $(ab)^n=a^nb^n$ and $\left(\dfrac ab\right)^n=\dfrac{a^n}{b^n}$. They do not apply to addition or subtraction.`],
  ["Variables", String.raw`Work on coefficients and each variable separately, and apply a power to the coefficient too: $(2x)^3=8x^3$. Finish with positive exponents.`],
  ["Scientific notation", String.raw`Write a number as $a\times10^n$ with $1\le a<10$. To multiply or divide, calculate with the $a$'s, use the laws on the powers of $10$, then adjust so $a$ is between $1$ and $10$.`],
];
const wExamples = [
  ["Example 1: Product law", String.raw`Simplify and evaluate $3^5\times3^2$.`, String.raw`$3^{5+2}=3^7=2187$.`],
  ["Example 2: Quotient law", String.raw`Simplify $10^8\div10^5$.`, String.raw`$10^{8-5}=10^3=1000$.`],
  ["Example 3: A negative result", String.raw`Evaluate $6^2\div6^4$.`, String.raw`$6^{2-4}=6^{-2}=\dfrac1{36}$.`],
  ["Example 4: Power of a power", String.raw`Evaluate $(2^3)^2$.`, String.raw`$2^{3\times2}=2^6=64$.`],
  ["Example 5: Power of a product", String.raw`Simplify $(5x)^2$.`, String.raw`$5^2x^2=25x^2$.`],
  ["Example 6: Combining laws", String.raw`Simplify $\dfrac{(3a^2)^3}{9a^4}$.`, String.raw`$\dfrac{27a^6}{9a^4}=3a^{2}$.`],
  ["Example 7: Into scientific notation", String.raw`Write $83\,000$ and $0.0007$ in scientific notation.`, String.raw`$8.3\times10^4$ and $7\times10^{-4}$.`],
  ["Example 8: Out of scientific notation", String.raw`Write $5.6\times10^{-3}$ as an ordinary number.`, String.raw`Move the decimal $3$ places left: $0.0056$.`],
  ["Example 9: Multiplying in scientific notation", String.raw`Evaluate $(4\times10^3)(6\times10^2)$.`, String.raw`$24\times10^5=2.4\times10^6$.`],
];
const wQuestions = [
  ["Problem 1", String.raw`Simplify and evaluate $2^4\times2^5$.`, String.raw`$2^9=512$`, 3.0],
  ["Problem 2", String.raw`Simplify $10^7\div10^3$.`, String.raw`$10^4$`, 3.0],
  ["Problem 3", String.raw`Evaluate $5^3\div5^6$.`, String.raw`$5^{-3}=\dfrac1{125}$`, 3.0],
  ["Problem 4", String.raw`Evaluate $(3^2)^3$.`, String.raw`$3^6=729$`, 3.0],
  ["Problem 5", String.raw`Simplify $(2y)^4$.`, String.raw`$16y^4$`, 3.0],
  ["Problem 6", String.raw`Simplify $x^5\cdot x^{-2}$.`, String.raw`$x^3$`, 3.0],
  ["Problem 7", String.raw`Simplify $(-2a^3)^2$.`, String.raw`$4a^6$`, 3.2],
  ["Problem 8", String.raw`Simplify $\dfrac{12m^6}{3m^2}$.`, String.raw`$4m^4$`, 3.2],
  ["Problem 9", String.raw`Simplify $\dfrac{(2x^2y)^3}{4xy^2}$.`, String.raw`$\dfrac{8x^6y^3}{4xy^2}=2x^5y$`, 3.4],
  ["Problem 10", String.raw`Write $0.00045$ in scientific notation.`, String.raw`$4.5\times10^{-4}$`, 3.0],
  ["Problem 11", String.raw`Write $7.2\times10^5$ as an ordinary number.`, String.raw`$720\,000$`, 3.0],
  ["Problem 12", String.raw`Evaluate $(3\times10^6)(4\times10^{-2})$ in scientific notation.`, String.raw`$12\times10^4=1.2\times10^5$`, 3.4],
  ["Problem 13 --- Challenge", String.raw`A bacterium is $2\times10^{-6}$ m long. How many fit end to end across $1$ m? Give the answer in scientific notation.`, String.raw`$\dfrac{1}{2\times10^{-6}}=0.5\times10^6=5\times10^5$`, 3.8],
];
const ws = packWorksheet({
  code: CODE, title: TITLE,
  intro: "The exponent laws let you multiply, divide and raise powers without expanding them, and scientific notation uses powers of ten to write very large and very small numbers. This worksheet practises the laws with numbers and variables, then scientific notation.",
  bigideas: String.raw`With the <b>same base</b>: multiplying <b>adds</b> exponents, dividing <b>subtracts</b> them, and a power of a power <b>multiplies</b> them. The laws never apply to addition.`,
  lesson: wLesson, examples: wExamples, questions: wQuestions,
});
export const WORKSHEET_CONTENT = ws.content;
export const WORKSHEET_TEX = ws.texData;
