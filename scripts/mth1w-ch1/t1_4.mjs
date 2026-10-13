// MTH1W 1.4 — Fractions: Equivalence, Comparing, Adding & Subtracting (first half of the old 1.5, rebuilt).
import { html, ex, pr, qa, watchOut, table, fracBar, rng, bankKit, fillBank, packWorksheet, gcd, lcm } from "./lib.mjs";

export const CODE = "1.4";
export const TITLE = "Fractions: Equivalence, Comparing, Adding & Subtracting";
export const FULL_TITLE = `${CODE} ${TITLE}`;

const lessonHtml = String.raw`<div class="lecture-box">
  <h1>🍕 Fractions: Equivalence, Comparing, Adding &amp; Subtracting</h1>
  <p><strong>Overview.</strong> A fraction \(\dfrac{a}{b}\) says "\(a\) equal parts out of \(b\)" — and it is also the division \(a\div b\). In this lesson you build equivalent fractions, simplify them, compare and order them (including negative fractions), switch between improper fractions and mixed numbers, and add and subtract with signs. Multiplying, dividing and reciprocals come next, in lesson 1.5.</p>

  <h2>📌 Equivalent fractions and simplifying</h2>
  <p>Multiplying or dividing the numerator and denominator by the <strong>same non-zero number</strong> gives an <strong>equivalent fraction</strong> — the same amount in different-sized pieces: \(\dfrac12=\dfrac24=\dfrac36\). To <strong>simplify</strong> (write in lowest terms), divide top and bottom by their greatest common factor (GCF).</p>
  ${fracBar({ n: 1, d: 2, w: 288, caption: "1/2" })}
  ${fracBar({ n: 3, d: 6, w: 288, caption: "3/6 — the same length, so 1/2 = 3/6" })}
  <h2>📌 Comparing and ordering</h2>
  <p>Rewrite the fractions with a <strong>common denominator</strong> (best: the least common multiple, the LCD), then compare numerators. With <strong>negative</strong> fractions, the one farther left on the number line is smaller: \(-\dfrac56<-\dfrac23\) because \(-\dfrac{10}{12}<-\dfrac{8}{12}\).</p>
  <h2>📌 Improper fractions and mixed numbers</h2>
  <p>An <strong>improper fraction</strong> has a numerator at least as large as its denominator. Divide to get a mixed number: \(\dfrac{29}{6}=4\dfrac56\) because \(29=4\times6+5\). Go back with "whole × denominator + numerator": \(3\dfrac27=\dfrac{3\times7+2}{7}=\dfrac{23}{7}\).</p>
  <h2>📌 Adding and subtracting</h2>
  <ul>
    <li><strong>Same denominator:</strong> add or subtract the numerators and keep the denominator: \(\dfrac58+\dfrac78=\dfrac{12}{8}\).</li>
    <li><strong>Different denominators:</strong> rewrite both over the LCD first, then add or subtract: \(\dfrac34+\dfrac56=\dfrac{9}{12}+\dfrac{10}{12}=\dfrac{19}{12}\).</li>
    <li><strong>Signs</strong> follow the integer rules from lesson 1.2 — subtracting a fraction is adding its opposite.</li>
    <li><strong>Mixed numbers:</strong> add the whole parts and the fractions separately (carry if the fraction part reaches \(1\)), or convert to improper fractions.</li>
  </ul>

  ${watchOut([
    String.raw`<strong>Never add denominators.</strong> \(\dfrac13+\dfrac14\ne\dfrac27\). Make the denominators match first: \(\dfrac4{12}+\dfrac3{12}=\dfrac7{12}\).`,
    String.raw`<strong>Simplify by dividing, not subtracting.</strong> \(\dfrac{12}{18}\) becomes \(\dfrac23\) by dividing both by \(6\) — subtracting \(6\) from each gives \(\dfrac6{12}\), which is a different number.`,
    String.raw`<strong>Bigger denominator, smaller piece</strong> (for unit fractions): \(\dfrac15<\dfrac13\).`,
  ])}

  <h2>🔵 Examples</h2>
  ${ex(
    "Example 1: Building an equivalent fraction",
    String.raw`Write \(\dfrac35\) with a denominator of \(20\).`,
    [String.raw`\(20\div5=4\), so multiply the denominator by \(4\).`, String.raw`Multiply the numerator by the same \(4\): \(3\times4=12\).`],
    String.raw`\(\dfrac35=\dfrac{12}{20}\)`,
    fracBar({ n: 12, d: 20, w: 300, caption: "12 of 20 equal pieces is the same length as 3 of 5 pieces." }),
  )}
  ${ex(
    "Example 2: Simplifying with the GCF",
    String.raw`Simplify \(\dfrac{84}{126}\).`,
    [String.raw`Find the GCF: \(84=2^2\times3\times7\) and \(126=2\times3^2\times7\), so the GCF is \(2\times3\times7=42\).`, String.raw`Divide both by \(42\): \(84\div42=2\) and \(126\div42=3\).`],
    String.raw`\(\dfrac{84}{126}=\dfrac23\)`,
  )}
  ${ex(
    "Example 3: Comparing two fractions",
    String.raw`Which is larger, \(\dfrac56\) or \(\dfrac79\)?`,
    [String.raw`The LCD of \(6\) and \(9\) is \(18\).`, String.raw`\(\dfrac56=\dfrac{15}{18}\) and \(\dfrac79=\dfrac{14}{18}\).`, String.raw`Compare numerators: \(15>14\).`],
    String.raw`\(\dfrac56>\dfrac79\)`,
  )}
  ${ex(
    "Example 4: Ordering with negatives",
    String.raw`Order \(-\dfrac34,\ -\dfrac23,\ -\dfrac56,\ \dfrac12\) from least to greatest.`,
    [String.raw`Use the LCD \(12\): \(-\dfrac{9}{12},\ -\dfrac{8}{12},\ -\dfrac{10}{12},\ \dfrac{6}{12}\).`, String.raw`On the number line, \(-10\) is farthest left, then \(-9\), then \(-8\), then \(6\).`],
    String.raw`\(-\dfrac56<-\dfrac34<-\dfrac23<\dfrac12\)`,
  )}
  ${ex(
    "Example 5: Improper fractions and mixed numbers",
    String.raw`Write \(\dfrac{29}{6}\) as a mixed number and \(3\dfrac27\) as an improper fraction.`,
    [String.raw`\(29=4\times6+5\), so \(\dfrac{29}{6}=4\dfrac56\).`, String.raw`\(3\times7+2=23\), so \(3\dfrac27=\dfrac{23}{7}\).`],
    String.raw`\(\dfrac{29}{6}=4\dfrac56\) and \(3\dfrac27=\dfrac{23}{7}\)`,
  )}
  ${ex(
    "Example 6: Adding like denominators",
    String.raw`Evaluate \(\dfrac58+\dfrac78\) and write the answer as a mixed number.`,
    [String.raw`The denominators match: \(\dfrac{5+7}{8}=\dfrac{12}{8}\).`, String.raw`Simplify: \(\dfrac{12}{8}=\dfrac32=1\dfrac12\).`],
    String.raw`\(\dfrac58+\dfrac78=1\dfrac12\)`,
  )}
  ${ex(
    "Example 7: Adding unlike denominators",
    String.raw`Evaluate \(\dfrac34+\dfrac56\).`,
    [String.raw`The LCD of \(4\) and \(6\) is \(12\).`, String.raw`\(\dfrac34=\dfrac{9}{12}\) and \(\dfrac56=\dfrac{10}{12}\).`, String.raw`Add: \(\dfrac{9+10}{12}=\dfrac{19}{12}=1\dfrac{7}{12}\).`],
    String.raw`\(\dfrac34+\dfrac56=1\dfrac{7}{12}\)`,
  )}
  ${ex(
    "Example 8: Subtracting with negatives",
    String.raw`Evaluate \(-\dfrac23-\dfrac35\) and \(\dfrac12-\dfrac7{10}\).`,
    [String.raw`LCD \(15\): \(-\dfrac{10}{15}-\dfrac{9}{15}=-\dfrac{19}{15}=-1\dfrac{4}{15}\).`, String.raw`LCD \(10\): \(\dfrac{5}{10}-\dfrac{7}{10}=-\dfrac{2}{10}=-\dfrac15\).`],
    String.raw`\(-\dfrac23-\dfrac35=-1\dfrac4{15}\) and \(\dfrac12-\dfrac7{10}=-\dfrac15\)`,
  )}
  ${ex(
    "Example 9: Mixed numbers in a recipe",
    String.raw`A smoothie recipe uses \(2\dfrac14\) cups of milk, then \(1\dfrac23\) cups of juice. How many cups of liquid is that?`,
    [String.raw`Add whole numbers: \(2+1=3\).`, String.raw`Add fractions with LCD \(12\): \(\dfrac3{12}+\dfrac8{12}=\dfrac{11}{12}\).`],
    String.raw`\(2\dfrac14+1\dfrac23=3\dfrac{11}{12}\) cups`,
  )}
  <h2>🟡 Practice Questions</h2>
  ${pr(1, "simplify", String.raw`Simplify \(\dfrac{54}{90}\).`, String.raw`GCF \(18\): \(\dfrac{54\div18}{90\div18}=\dfrac35\).`)}
  ${pr(2, "compare", String.raw`Which is larger, \(\dfrac47\) or \(\dfrac59\)?`, String.raw`LCD \(63\): \(\dfrac{36}{63}\) and \(\dfrac{35}{63}\), so \(\dfrac47\) is larger.`)}
  ${pr(3, "add", String.raw`Evaluate \(\dfrac56+\dfrac3{10}\).`, String.raw`LCD \(30\): \(\dfrac{25}{30}+\dfrac{9}{30}=\dfrac{34}{30}=\dfrac{17}{15}=1\dfrac2{15}\).`)}
  ${pr(4, "subtract with signs", String.raw`Evaluate \(-\dfrac38-\dfrac14\).`, String.raw`LCD \(8\): \(-\dfrac38-\dfrac28=-\dfrac58\).`)}
  ${pr(5, "word problem", String.raw`A board is \(5\) m long. A piece \(1\dfrac38\) m long is cut off. How long is the rest?`, String.raw`\(5-1\dfrac38=4\dfrac88-1\dfrac38=3\dfrac58\) m.`)}
  <h2>❓ Q&amp;A Summary</h2>
  ${qa("Q1: Why do I need a common denominator to add fractions?", String.raw`You can only add pieces that are the same size. Rewriting over a common denominator makes every piece the same size, so counting them is just adding the numerators.`)}
  ${qa("Q2: Do I have to use the least common denominator?", String.raw`No — any common denominator works, but the LCD keeps the numbers small and often saves a simplifying step.`)}
  ${qa("Q3: How do I compare a negative fraction with a positive one?", String.raw`Every negative fraction is smaller than every positive fraction. Between two negatives, the one with the larger absolute value is smaller.`)}
  ${qa("Q4: When should I use a mixed number and when an improper fraction?", String.raw`Use improper fractions while calculating (they are easier to multiply and divide), and a mixed number when giving a final answer for a measurement or context.`)}
  ${qa("Q5: How do I know a fraction is fully simplified?", String.raw`The numerator and denominator have no common factor other than \(1\), so their GCF is \(1\).`)}
</div>`;

export const lessonBlocks = () => [html(lessonHtml)];

export const ASSIGNMENT = {
  title: `Assignment ${CODE} — ${TITLE}`,
  description: String.raw`Knowledge & Understanding
1. Simplify \( \dfrac{84}{126} \).
2. Write \( 4\dfrac35 \) as an improper fraction and \( \dfrac{31}{8} \) as a mixed number.
3. Evaluate \( \dfrac34+\dfrac56 \).
Thinking
4. Order \( \dfrac35,\ \dfrac58,\ \dfrac7{12} \) from least to greatest. Show the common denominator you used.
5. Find a fraction that lies strictly between \( \dfrac25 \) and \( \dfrac37 \), and show how you know.
Communication
6. Use a picture or a number line to explain why \( \dfrac13+\dfrac14 \) is not equal to \( \dfrac27 \).
7. A student simplifies \( \dfrac{12}{18} \) by subtracting \( 6 \) from the numerator and the denominator to get \( \dfrac6{12} \). Explain the mistake and give the correct simplified fraction.
Application
8. A recipe uses \( 2\dfrac14 \) cups of flour and \( 1\dfrac23 \) cups of sugar. How many cups of dry ingredients is that altogether?
9. A \( 5 \) m board has a \( 1\dfrac38 \) m piece cut off, and then a \( \dfrac78 \) m piece. How long is the remaining board?
10. A water tank is \( \dfrac38 \) full. After \( 25 \) L is added it is \( \dfrac78 \) full. What is the capacity of the tank?`,
};

export function bank() {
  const R = rng(1401);
  const { mcA, ms, tf, num, fill } = bankKit(R);
  const m = (s) => `$${s}$`;
  const F = (n, d) => (d === 1 ? `${n}` : n < 0 ? `-\\frac{${-n}}{${d}}` : `\\frac{${n}}{${d}}`);
  const red = (n, d) => { const g = gcd(n, d); n /= g; d /= g; if (d < 0) { n = -n; d = -d; } return [n, d]; };
  const FR = (n, d) => { [n, d] = red(n, d); return F(n, d); };
  const mixed = (n, d) => { [n, d] = red(n, d); const neg = n < 0; n = Math.abs(n); const w = Math.floor(n / d), r = n % d; const s = r === 0 ? `${w}` : w === 0 ? `\\frac{${r}}{${d}}` : `${w}\\frac{${r}}{${d}}`; return neg ? `-${s}` : s; };
  const mixedPlain = (n, d) => { [n, d] = red(n, d); const neg = n < 0; n = Math.abs(n); const w = Math.floor(n / d), r = n % d; const t = r === 0 ? `${w}` : w === 0 ? `${r}/${d}` : `${w} ${r}/${d}`; return neg ? `-${t}` : t; };
  const ansForms = (n, d) => { [n, d] = red(n, d); if (d === 1) return [String(n)]; const base = [`${n}/${d}`, `\\frac{${n}}{${d}}`]; if (Math.abs(n) > d) base.push(mixedPlain(n, d), mixed(n, d)); return [...new Set(base)]; };
  const prime = (d) => { const p = [2, 3, 5, 7, 11, 13]; return p.includes(d); };
  const dens = [2, 3, 4, 5, 6, 8, 9, 10, 12, 15];
  const T = [], add = (d, make, max) => T.push({ d, make, max });

  // easy
  add("easy", () => { const k = R.int(2, 9); const [n, d] = [R.int(1, 5), R.int(6, 9)]; if (gcd(n, d) !== 1) return null; const kk = R.int(2, 6); return mcA("easy", `Simplify ${m(F(n * kk, d * kk))}.`, m(FR(n, d)), [m(F(n * kk, d)), m(F(n, d * kk)), m(F(n * kk - 1, d * kk - 1))], "Divide the numerator and denominator by their GCF."); });
  add("easy", () => { const [n, d] = [R.int(1, 5), R.pick([3, 4, 5, 6, 7, 8])]; if (n >= d || gcd(n, d) !== 1) return null; const k = R.int(2, 7); return num("easy", `Fill in the blank: ${m(`\\frac{${n}}{${d}} = \\frac{x}{${d * k}}`)}. Then x = ___.`, n * k, 0); });
  add("easy", () => { const d = R.pick([3, 4, 5, 6, 7, 8, 9]), w = R.int(1, 4), r = R.int(1, d - 1); return mcA("easy", `Write ${m(`${w}\\frac{${r}}{${d}}`)} as an improper fraction.`, m(`\\frac{${w * d + r}}{${d}}`), [m(`\\frac{${w + r}}{${d}}`), m(`\\frac{${w * d + r + d}}{${d}}`), m(`\\frac{${w * r + d}}{${d}}`)], "Whole $\\times$ denominator $+$ numerator, over the denominator."); });
  add("easy", () => { const d = R.pick([3, 4, 5, 6, 7, 8]), n = R.int(d + 1, d * 4 + d - 1); if (n % d === 0) return null; return mcA("easy", `Write ${m(`\\frac{${n}}{${d}}`)} as a mixed number.`, m(mixed(n, d)), [m(`${Math.floor(n / d) + 1}\\frac{${n % d}}{${d}}`), m(`${Math.floor(n / d)}\\frac{${d - (n % d)}}{${d}}`), m(`${n % d}\\frac{${Math.floor(n / d)}}{${d}}`), m(`${Math.floor(n / d) - 1}\\frac{${n % d}}{${d}}`), m(`${Math.floor(n / d)}\\frac{${(n % d) + 1}}{${d}}`)]); });
  add("easy", () => { const d = R.pick(dens), a = R.int(1, d - 2), b = R.int(1, d - a - 0); if (a + b >= d * 2) return null; const [sn, sd] = red(a + b, d); return fill("easy", `${m(`\\frac{${a}}{${d}} + \\frac{${b}}{${d}}`)} in simplest form is ___.`, ansForms(a + b, d), "Add the numerators and keep the denominator."); });
  add("easy", () => { const s = R.pick([["$\\frac{2}{4}$ and $\\frac{1}{2}$ are equivalent.", true], ["$\\frac{3}{5} > \\frac{2}{5}$.", true], ["$\\frac{1}{3} + \\frac{1}{3} = \\frac{2}{6}$.", false, "It equals $\\frac{2}{3}$: only the numerators are added."], ["$\\frac{7}{4}$ is an improper fraction.", true], ["$\\frac{5}{9}$ is already in simplest form.", true], ["$\\frac{6}{8} = \\frac{3}{4}$.", true], ["$\\frac{1}{8} > \\frac{1}{6}$.", false, "Bigger denominator means a smaller piece."]]); return tf("easy", s[0], s[1], s[2] ?? ""); }, 6);
  add("easy", () => { const base = R.pick([[1, 2], [2, 3], [3, 4], [2, 5], [3, 5], [1, 3], [5, 6]]); const k = [2, 3, 4, 5, 6]; const eq = k.map((x) => [base[0] * x, base[1] * x]); const bad = [[base[0] * 2 + 1, base[1] * 2], [base[0] * 3, base[1] * 3 + 1]]; const opts = R.shuffle([...eq.slice(0, 2).map((e) => ({ e, ok: true })), ...bad.map((e) => ({ e, ok: false }))]); return ms("easy", `Which fractions are equivalent to ${m(F(base[0], base[1]))}?`, opts.map((o) => m(F(o.e[0], o.e[1]))), opts.map((o, i) => (o.ok ? i : -1)).filter((i) => i >= 0)); }, 3);
  add("easy", () => { const d = R.pick([4, 5, 6, 8]), n = R.int(1, d - 1); return num("easy", `A pizza is cut into ${d} equal slices and ${n} are eaten. How many slices are left?`, d - n, 0); }, 2);

  // medium
  add("medium", () => { const [a, b] = [R.int(2, 8), R.int(3, 9)]; const [c, e] = [R.int(2, 8), R.int(3, 9)]; if (a >= b || c >= e || b === e || a * e === b * c) return null; const g = a * e > b * c ? m(F(a, b)) : m(F(c, e)); const l = a * e > b * c ? m(F(c, e)) : m(F(a, b)); return mcA("medium", `Which fraction is larger: ${m(F(a, b))} or ${m(F(c, e))}?`, g, [l, "They are equal", "Cannot be determined"], `Cross-multiply or use the LCD ${lcm(b, e)}.`); });
  add("medium", () => { const [b, e] = R.pick([[4, 6], [6, 9], [4, 10], [6, 8], [3, 5], [9, 12], [8, 12], [6, 15]]); const a = R.int(1, b - 1), c = R.int(1, e - 1); const [n, d] = red(a * (lcm(b, e) / b) + c * (lcm(b, e) / e), lcm(b, e)); return mcA("medium", `Evaluate ${m(`${F(a, b)} + ${F(c, e)}`)}.`, m(F(n, d)), [m(F(a + c, b + e)), m(F(a + c, lcm(b, e))), m(F(n + 1, d))], `The LCD is ${lcm(b, e)}.`); });
  add("medium", () => { const [b, e] = R.pick([[4, 6], [6, 9], [5, 10], [3, 4], [8, 12], [2, 5], [6, 8]]); const a = R.int(1, b - 1), c = R.int(1, e - 1); const L = lcm(b, e); const n = -a * (L / b) - c * (L / e); return fill("medium", `Evaluate ${m(`-${F(a, b)} - ${F(c, e)}`)} in simplest form: ___.`, ansForms(n, L), `Use the LCD ${L}; both terms are negative.`); });
  add("medium", () => { const [b, e] = R.pick([[3, 4], [4, 6], [5, 10], [2, 3], [6, 9]]); const a = R.int(1, b - 1), c = R.int(1, e - 1); const L = lcm(b, e); const n = a * (L / b) - c * (L / e); if (n === 0) return null; return mcA("medium", `Evaluate ${m(`${F(a, b)} - ${F(c, e)}`)}.`, m(FR(n, L)), [m(FR(a - c, b - e === 0 ? 1 : b - e)), m(FR(-n, L)), m(FR(a * (L / b) + c * (L / e), L))].filter((x) => x), `LCD ${L}; the answer may be negative.`); });
  add("medium", () => { const w1 = R.int(1, 4), w2 = R.int(1, 4), d = R.pick([4, 6, 8]), a = R.int(1, d - 1), b = R.int(1, d - 1); const tot = (w1 + w2) * d + a + b; return mcA("medium", `Evaluate ${m(`${w1}\\frac{${a}}{${d}} + ${w2}\\frac{${b}}{${d}}`)}.`, m(mixed(tot, d)), [m(mixed(tot + 1, d)), m(mixed(tot - 1, d)), m(`${w1 + w2}\\frac{${a + b}}{${d}}`)].filter((x) => x !== m(mixed(tot, d))), "Add the whole parts and the fractions; carry if the fraction part reaches 1."); }, 3);
  add("medium", () => { const s = R.pick([["$\\frac{3}{4} + \\frac{1}{6} = \\frac{11}{12}$.", true], ["$-\\frac{2}{3} < -\\frac{3}{4}$.", false, "$-\\frac{8}{12} > -\\frac{9}{12}$."], ["$\\frac{5}{6} - \\frac{1}{3} = \\frac{1}{2}$.", true], ["$\\frac{2}{5} + \\frac{3}{10} = \\frac{5}{15}$.", false, "It equals $\\frac{7}{10}$."], ["$2\\frac{1}{2} = \\frac{5}{2}$.", true], ["$\\frac{9}{12} = \\frac{3}{4}$.", true]]); return tf("medium", s[0], s[1], s[2] ?? ""); }, 6);
  add("medium", () => { const a = R.int(2, 5), b = R.int(3, 7); const d1 = R.pick([3, 4, 5, 6]), d2 = R.pick([2, 8, 10]); const t = lcm(d1, d2); const p = R.int(1, d1 - 1), q = R.int(1, d2 - 1); const tot = p * (t / d1) + q * (t / d2); return mcA("medium", `Jo ran ${m(F(p, d1))} of a trail on Saturday and ${m(F(q, d2))} of it on Sunday. What fraction of the trail has Jo run?`, m(FR(tot, t)), [m(F(p + q, d1 + d2)), m(FR(tot + 1, t)), m(FR(Math.abs(p * (t / d1) - q * (t / d2)), t) === "0" ? "1" : FR(Math.abs(p * (t / d1) - q * (t / d2)) || 1, t))]); }, 3);
  add("medium", () => { const [d, n] = R.pick([[10, 7], [12, 9], [8, 5], [6, 5], [15, 11]]); const k = R.int(2, 6); return num("medium", `A bottle that is ${m(F(n, d))} full holds ${n * k} mL. The bottle's capacity is ___ mL.`, d * k, 0, `One ${d}th is ${k} mL.`); }, 2);
  add("medium", () => { const bases = [[2, 3], [3, 4], [5, 6], [1, 2], [3, 5]]; const b = R.pick(bases); const k = R.int(2, 5); const vals = [[b[0] * k, b[1] * k], [b[0] * (k + 1), b[1] * (k + 1)], [b[0] * k + 1, b[1] * k]]; return ms("medium", `Which equal ${m(F(b[0], b[1]))}?`, vals.map((v) => m(F(v[0], v[1]))).concat([m(F(b[1], b[0]))]), [0, 1]); }, 2);

  // hard
  add("hard", () => { const f = [[3, 5], [5, 8], [7, 12], [2, 3], [4, 7], [9, 16]]; const s = R.shuffle(f).slice(0, 3); const vals = s.map((x) => x[0] / x[1]); const order = [...s].sort((p, q) => p[0] / p[1] - q[0] / q[1]); const correct = order.map((x) => m(F(x[0], x[1]))).join(", "); const wrong = (arr) => arr.map((x) => m(F(x[0], x[1]))).join(", "); const alt = [[...order].reverse(), [order[1], order[0], order[2]], [order[0], order[2], order[1]]]; return mcA("hard", `Which lists ${s.map((x) => m(F(x[0], x[1]))).join(", ")} from least to greatest?`, correct, alt.map(wrong)); }, 3);
  add("hard", () => { const [b, e] = R.pick([[6, 9], [4, 10], [6, 15], [8, 12], [10, 15]]); const a = R.int(1, b - 1), c = R.int(1, e - 1); const L = lcm(b, e); const t = -a * (L / b) + c * (L / e); if (t === 0) return null; return fill("hard", `Evaluate ${m(`-${F(a, b)} + ${F(c, e)}`)} in simplest form: ___.`, ansForms(t, L)); }, 3);
  add("hard", () => { const d1 = R.pick([3, 4, 5]), d2 = R.pick([6, 8, 10]), d3 = R.pick([2, 12, 9]); const a = R.int(1, d1 - 1), b = R.int(1, d2 - 1), c = R.int(1, d3 - 1); const L = lcm(lcm(d1, d2), d3); const n = a * (L / d1) + b * (L / d2) - c * (L / d3); if (n === 0) return null; return mcA("hard", `Evaluate ${m(`${F(a, d1)} + ${F(b, d2)} - ${F(c, d3)}`)}.`, m(FR(n, L)), [m(FR(n + 1, L)), m(FR(-n, L)), m(FR(a * (L / d1) + b * (L / d2) + c * (L / d3), L))], `LCD ${L}.`); }, 3);
  add("hard", () => { const [d, p, q] = R.pick([[8, 3, 7], [10, 3, 9], [12, 5, 11], [6, 1, 5], [9, 2, 7]]); const L = R.int(3, 12) * (q - p) * 1; const cap = (L * d) / (q - p); return num("hard", `A tank is ${m(F(p, d))} full. After adding ${L} L it is ${m(F(q, d))} full. The capacity of the tank is ___ L.`, cap, 0, `${m(F(q - p, d))} of the tank is ${L} L.`); }, 3);
  add("hard", () => { const s = R.pick([["There is exactly one fraction between $\\frac{1}{4}$ and $\\frac{1}{3}$.", false, "There are infinitely many fractions between any two different fractions."], ["$\\frac{a}{b} - \\frac{c}{d}$ is always positive if $\\frac{a}{b} > \\frac{c}{d}$.", true], ["$\\frac{1}{2} + \\frac{1}{3}$ is less than $1$.", true], ["$\\frac{7}{3} = 2\\frac{1}{3}$.", true], ["The sum of two fractions that are each less than $1$ is always less than $1$.", false, "$\\frac{3}{4} + \\frac{3}{4} = \\frac{3}{2}$."]]); return tf("hard", s[0], s[1], s[2] ?? ""); }, 5);
  add("hard", () => { const [b, e] = R.pick([[3, 4], [2, 5], [5, 6], [4, 9]]); const a = R.int(1, b - 1), c = R.int(1, e - 1); const L = lcm(b, e); const n = a * (L / b) + c * (L / e); const vals = [[m(`${F(a, b)} + ${F(c, e)}`), true], [m(`${F(c, e)} + ${F(a, b)}`), true], [m(`${F(a + c, b + e)}`), false], [m(`${F(n, L)}`), true]]; const o = R.shuffle(vals); return ms("hard", `Which expressions have the same value as ${m(`${F(a, b)} + ${F(c, e)}`)}?`, o.map((x) => x[0]), o.map((x, i) => (x[1] ? i : -1)).filter((i) => i >= 0), "Addition is commutative; adding numerators and denominators separately is wrong."); }, 3);
  add("hard", () => { const [d1, d2] = R.pick([[6, 9], [4, 6], [10, 15], [8, 12]]); const L = lcm(d1, d2); const w = R.int(2, 6), a = R.int(1, d1 - 1), c = R.int(1, d2 - 1); const tot = w * L + a * (L / d1) - c * (L / d2); return fill("hard", `Evaluate ${m(`${w} + ${F(a, d1)} - ${F(c, d2)}`)} as a mixed number: ___.`, (tot % L === 0 ? [String(tot / L)] : [mixedPlain(tot, L), mixed(tot, L)]), `LCD ${L}.`); }, 3);

  return fillBank(T, 20);
}

const wLesson = [
  ["Equivalent fractions and simplifying", String.raw`Multiply or divide the top and bottom by the <b>same</b> number to get an equivalent fraction: $\dfrac23=\dfrac46$. To simplify, divide both by their greatest common factor.`],
  ["Comparing and ordering", String.raw`Rewrite with a common denominator and compare numerators. A negative fraction farther left on the number line is smaller: $-\dfrac45<-\dfrac35$.`],
  ["Adding and subtracting", String.raw`Make the denominators match (use the least common denominator), then add or subtract the numerators and keep the denominator. Follow the integer sign rules.`],
];
const wExamples = [
  ["Example 1: Simplify", String.raw`Simplify $\dfrac{45}{75}$.`, String.raw`The GCF is $15$: $\dfrac{45\div15}{75\div15}=\dfrac35$.`],
  ["Example 2: Build an equivalent fraction", String.raw`Write $\dfrac79$ with denominator $54$.`, String.raw`$54\div9=6$, so $\dfrac{7\times6}{9\times6}=\dfrac{42}{54}$.`],
  ["Example 3: Compare", String.raw`Which is larger, $\dfrac34$ or $\dfrac{11}{15}$?`, String.raw`LCD $60$: $\dfrac{45}{60}$ and $\dfrac{44}{60}$, so $\dfrac34$ is larger.`],
  ["Example 4: Mixed to improper", String.raw`Write $5\dfrac34$ as an improper fraction.`, String.raw`$5\times4+3=23$, so $\dfrac{23}{4}$.`],
  ["Example 5: Improper to mixed", String.raw`Write $\dfrac{47}{9}$ as a mixed number.`, String.raw`$47=5\times9+2$, so $5\dfrac29$.`],
  ["Example 6: Same denominators", String.raw`Evaluate $\dfrac29+\dfrac49$.`, String.raw`$\dfrac{6}{9}=\dfrac23$.`],
  ["Example 7: Unlike denominators", String.raw`Evaluate $\dfrac58+\dfrac16$.`, String.raw`LCD $24$: $\dfrac{15}{24}+\dfrac{4}{24}=\dfrac{19}{24}$.`],
  ["Example 8: A negative answer", String.raw`Evaluate $\dfrac7{10}-\dfrac34$.`, String.raw`LCD $20$: $\dfrac{14}{20}-\dfrac{15}{20}=-\dfrac{1}{20}$.`],
  ["Example 9: Mixed numbers", String.raw`Evaluate $3\dfrac12+2\dfrac34$.`, String.raw`Whole parts: $3+2=5$. Fractions: $\dfrac24+\dfrac34=\dfrac54=1\dfrac14$. Total $6\dfrac14$.`],
];
const wQuestions = [
  ["Problem 1", String.raw`Simplify $\dfrac{36}{48}$.`, String.raw`$\dfrac34$`, 3.0],
  ["Problem 2", String.raw`Simplify $\dfrac{105}{140}$.`, String.raw`$\dfrac34$ (GCF $35$)`, 3.0],
  ["Problem 3", String.raw`Fill in the blank: $\dfrac78=\dfrac{\_\_\_}{40}$.`, String.raw`$35$`, 3.0],
  ["Problem 4", String.raw`Which is larger, $\dfrac57$ or $\dfrac9{13}$?`, String.raw`$\dfrac{65}{91}$ vs $\dfrac{63}{91}$, so $\dfrac57$`, 3.2],
  ["Problem 5", String.raw`Order from least to greatest: $-\dfrac12,\ -\dfrac35,\ -\dfrac49$.`, String.raw`$-\dfrac35<-\dfrac12<-\dfrac49$ (over $90$: $-54,\ -45,\ -40$)`, 3.4],
  ["Problem 6", String.raw`Write $6\dfrac25$ as an improper fraction.`, String.raw`$\dfrac{32}{5}$`, 3.0],
  ["Problem 7", String.raw`Write $\dfrac{53}{8}$ as a mixed number.`, String.raw`$6\dfrac58$`, 3.0],
  ["Problem 8", String.raw`Evaluate $\dfrac37+\dfrac27$.`, String.raw`$\dfrac57$`, 3.0],
  ["Problem 9", String.raw`Evaluate $\dfrac13+\dfrac35$.`, String.raw`$\dfrac{14}{15}$`, 3.2],
  ["Problem 10", String.raw`Evaluate $-\dfrac56+\dfrac14$.`, String.raw`$-\dfrac7{12}$`, 3.2],
  ["Problem 11", String.raw`Evaluate $\dfrac9{10}-\dfrac23$.`, String.raw`$\dfrac7{30}$`, 3.2],
  ["Problem 12", String.raw`Mia reads $\dfrac25$ of a book on Monday and $\dfrac14$ of it on Tuesday. What fraction has she read, and what fraction is left?`, String.raw`Read: $\dfrac{13}{20}$; left: $\dfrac{7}{20}$`, 3.6],
  ["Problem 13 --- Challenge", String.raw`What must be added to $2\dfrac13$ to make $5\dfrac16$?`, String.raw`$5\dfrac16-2\dfrac13=2\dfrac56$`, 3.8],
];
const ws = packWorksheet({
  code: CODE, title: TITLE,
  intro: "Fractions can be rewritten in many equal forms. This worksheet practises equivalent fractions, simplifying, comparing and ordering (with negatives), mixed numbers, and adding and subtracting fractions.",
  bigideas: String.raw`Fractions can only be added or subtracted when the pieces are the <b>same size</b> — so match the denominators first, then work with the numerators.`,
  lesson: wLesson, examples: wExamples, questions: wQuestions,
});
export const WORKSHEET_CONTENT = ws.content;
export const WORKSHEET_TEX = ws.texData;
