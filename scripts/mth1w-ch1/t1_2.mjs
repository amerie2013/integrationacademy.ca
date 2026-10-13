// MTH1W 1.2 — Adding & Subtracting Integers (new).
import { html, ex, pr, qa, watchOut, numberLine, chips, rng, bankKit, fillBank, packWorksheet, sg } from "./lib.mjs";

export const CODE = "1.2";
export const TITLE = "Adding & Subtracting Integers";
export const FULL_TITLE = `${CODE} ${TITLE}`;

const lessonHtml = String.raw`<div class="lecture-box">
  <h1>➕ Adding &amp; Subtracting Integers</h1>
  <p><strong>Overview.</strong> <strong>Integers</strong> are the whole numbers and their opposites: \(\dots,-3,-2,-1,0,1,2,3,\dots\). They describe temperatures below zero, elevations below sea level, overdrawn bank accounts and scores below par. In this lesson you will add and subtract integers with two pictures — the <strong>number line</strong> and <strong>zero pairs</strong> — and then with two clear rules. Everything later in algebra depends on getting these signs right.</p>

  <h2>📌 Opposites and absolute value</h2>
  <p>Two integers that are the same distance from \(0\) on opposite sides are <strong>opposites</strong>: \(4\) and \(-4\). Their sum is always \(0\). The <strong>absolute value</strong> \(|n|\) is the distance of \(n\) from \(0\), so it is never negative: \(|-4|=4\) and \(|4|=4\).</p>
  ${numberLine({ min: -6, max: 6, dots: [{ at: -4, label: "-4", color: "red" }, { at: 4, label: "4", color: "blue" }], caption: "-4 and 4 are opposites: both are 4 units from 0, so |-4| = |4| = 4.", id: "nl1" })}

  <h2>📌 Adding integers</h2>
  <p>On a number line, adding a positive integer moves you <strong>right</strong>; adding a negative integer moves you <strong>left</strong>. As rules:</p>
  <ul>
    <li><strong>Same signs:</strong> add the absolute values and keep the sign. \((-3)+(-5)=-8\).</li>
    <li><strong>Different signs:</strong> subtract the smaller absolute value from the larger, and keep the sign of the integer with the <em>larger</em> absolute value. \((-9)+4=-5\), because \(9-4=5\) and \(9\) is the larger absolute value.</li>
  </ul>
  <p>Zero pairs explain the second rule: one positive chip and one negative chip cancel to \(0\), so whatever is left over is the answer.</p>
  ${chips({ pos: 3, neg: 5, caption: "(-5) + 3: three zero pairs cancel and 2 negative chips remain, so the sum is -2." })}

  <h2>📌 Subtracting integers</h2>
  <p><strong>Subtracting is the same as adding the opposite:</strong> \(a-b=a+(-b)\). So \(7-10=7+(-10)=-3\), and subtracting a negative becomes adding a positive: \(3-(-4)=3+4=7\).</p>
  <p>Subtraction also measures <strong>distance</strong>: the distance from \(b\) up to \(a\) is \(a-b\) when \(a>b\). From \(-35\) up to \(20\) is \(20-(-35)=55\).</p>

  <h2>📌 Several terms</h2>
  <p>Rewrite every subtraction as adding the opposite, then add left to right (or collect the positives and the negatives separately). \(-5-8+12-(-3)=-5+(-8)+12+3\).</p>

  ${watchOut([
    String.raw`<strong>The minus sign has two jobs.</strong> In \(5-9\) it means <em>subtract</em>; in \(-9\) it means <em>negative</em>. Rewriting \(5-9\) as \(5+(-9)\) separates them.`,
    String.raw`<strong>"Two negatives make a positive" is not for addition.</strong> \((-3)+(-4)=-7\), not \(7\). The rule belongs to <em>subtracting</em> a negative (and to multiplying, in the next lesson).`,
    String.raw`<strong>Order matters in subtraction.</strong> \(3-8=-5\) but \(8-3=5\): swapping the numbers gives the opposite answer.`,
  ])}

  <h2>🔵 Examples</h2>
  ${ex(
    "Example 1: Adding on a number line",
    String.raw`Evaluate \(-3+5\) using a number line.`,
    [String.raw`Start at \(0\) and move \(3\) units left to reach \(-3\).`, String.raw`Adding \(5\) means moving \(5\) units right: \(-3\) to \(2\).`],
    String.raw`\(-3+5=2\)`,
    numberLine({ min: -5, max: 5, arrows: [{ from: 0, to: -3, label: "-3", color: "red", lane: 0 }, { from: -3, to: 2, label: "+5", color: "blue", lane: 1 }], dots: [{ at: 2, label: "2", color: "green" }], caption: "Start at 0, move 3 left, then 5 right: you land on 2.", id: "nl2" }),
  )}
  ${ex(
    "Example 2: Same signs",
    String.raw`Evaluate \((-7)+(-4)\).`,
    [String.raw`Both integers are negative, so add the absolute values: \(7+4=11\).`, String.raw`Keep the negative sign.`],
    String.raw`\((-7)+(-4)=-11\)`,
  )}
  ${ex(
    "Example 3: Different signs, negative answer",
    String.raw`Evaluate \(6+(-10)\).`,
    [String.raw`The signs differ, so subtract the absolute values: \(10-6=4\).`, String.raw`\(-10\) has the larger absolute value, so the answer is negative.`],
    String.raw`\(6+(-10)=-4\)`,
    chips({ pos: 6, neg: 10, caption: "6 zero pairs cancel; 4 negative chips are left, so the sum is -4." }),
  )}
  ${ex(
    "Example 4: Subtracting a positive",
    String.raw`Evaluate \(5-9\).`,
    [String.raw`Rewrite as adding the opposite: \(5+(-9)\).`, String.raw`Different signs: \(9-5=4\), and \(-9\) is larger in absolute value, so negative.`],
    String.raw`\(5-9=-4\)`,
  )}
  ${ex(
    "Example 5: Subtracting a negative",
    String.raw`Evaluate \(4-(-6)\).`,
    [String.raw`Subtracting \(-6\) is the same as adding its opposite, \(+6\): \(4+6\).`, String.raw`Add: \(4+6=10\).`],
    String.raw`\(4-(-6)=10\)`,
    numberLine({ min: -1, max: 11, arrows: [{ from: 4, to: 10, label: "-(-6) = +6", color: "blue", lane: 0 }], dots: [{ at: 4, label: "4", color: "gray" }, { at: 10, label: "10", color: "green" }], caption: "Taking away -6 moves you 6 units to the right.", id: "nl3" }),
  )}
  ${ex(
    "Example 6: Subtracting a negative from a negative",
    String.raw`Evaluate \(-12-(-5)\).`,
    [String.raw`Rewrite: \(-12+5\).`, String.raw`Different signs: \(12-5=7\), and \(-12\) has the larger absolute value, so negative.`],
    String.raw`\(-12-(-5)=-7\)`,
  )}
  ${ex(
    "Example 7: Several terms",
    String.raw`Evaluate \(-5-8+12-(-3)\).`,
    [String.raw`Rewrite every subtraction as adding the opposite: \(-5+(-8)+12+3\).`, String.raw`Add the negatives: \(-5+(-8)=-13\). Add the positives: \(12+3=15\).`, String.raw`Combine: \(-13+15=2\).`],
    String.raw`\(-5-8+12-(-3)=2\)`,
  )}
  ${ex(
    "Example 8: Temperature",
    String.raw`At 6 a.m. the temperature is \(-14\,^\circ\text{C}\). By noon it has risen \(9\,^\circ\text{C}\); by midnight it has fallen \(17\,^\circ\text{C}\) from the noon value. What is the midnight temperature?`,
    [String.raw`Rise: \(-14+9=-5\).`, String.raw`Fall: \(-5-17=-5+(-17)=-22\).`],
    String.raw`the midnight temperature is \(-22\,^\circ\text{C}\)`,
  )}
  ${ex(
    "Example 9: Distance between two heights",
    String.raw`A diver is at \(-35\) m (35 m below sea level) and a gull is at \(20\) m above sea level. How far apart are they?`,
    [String.raw`Distance \(=\) higher \(-\) lower \(=20-(-35)\).`, String.raw`Subtracting a negative: \(20+35=55\).`],
    String.raw`they are \(55\) m apart`,
  )}
  <h2>🟡 Practice Questions</h2>
  ${pr(1, "different signs", String.raw`Evaluate \(-9+4\).`, String.raw`Subtract \(9-4=5\); \(-9\) is larger in absolute value, so \(-5\).`)}
  ${pr(2, "subtract to a negative", String.raw`Evaluate \(7-12\).`, String.raw`\(7+(-12)=-5\).`)}
  ${pr(3, "subtract a negative", String.raw`Evaluate \(-6-(-10)\).`, String.raw`\(-6+10=4\).`)}
  ${pr(4, "same signs", String.raw`Evaluate \(-15+(-8)\).`, String.raw`Add \(15+8=23\) and keep the negative sign: \(-23\).`)}
  ${pr(5, "bank balance", String.raw`An account is overdrawn: its balance is \(-45\) dollars. A deposit of \(120\) dollars is made, then \(90\) dollars is withdrawn. What is the new balance?`, String.raw`\(-45+120=75\), then \(75-90=-15\). The balance is \(-15\) dollars (overdrawn by \(15\) dollars).`)}
  <h2>❓ Q&amp;A Summary</h2>
  ${qa("Q1: Why does subtracting a negative number make the result bigger?", String.raw`Subtracting \(-6\) takes away a debt, which leaves you better off. Algebraically, \(a-(-6)=a+6\): subtracting a number is adding its opposite.`)}
  ${qa("Q2: How do I know the sign when I add integers with different signs?", String.raw`Look at which integer is farther from \(0\). The answer takes that integer's sign, and its size is the difference of the absolute values.`)}
  ${qa("Q3: Is \(a-b\) the same as \(b-a\)?", String.raw`No. They are opposites: \(8-3=5\) but \(3-8=-5\).`)}
  ${qa("Q4: What does absolute value mean?", String.raw`The distance from \(0\) on the number line, so it is never negative: \(|-7|=7\).`)}
  ${qa("Q5: How can I check an answer?", String.raw`Sketch the moves on a number line, or estimate the sign first: if the larger absolute value is negative, the answer must be negative.`)}
</div>`;

export const lessonBlocks = () => [html(lessonHtml)];

// ───────── assignment ─────────
export const ASSIGNMENT = {
  title: `Assignment ${CODE} — ${TITLE}`,
  description: String.raw`Knowledge & Understanding
1. Evaluate \( (-8)+5 \).
2. Evaluate \( 6-13 \).
3. Evaluate \( -7-(-12) \).
Thinking
4. Find the missing integers: (a) \( -9+\_\_\_=-3 \)  (b) \( 4-\_\_\_=11 \)
5. Choose two integers from \( \{-6,-3,2,5,9\} \) so that the first minus the second is as large as possible, and then as small as possible. Show the two subtractions and justify your choice.
Communication
6. Use a number line or zero pairs to explain why \( 4-(-6)=10 \).
7. Lena says that \( -3-4=1 \) "because two negatives make a positive." Explain her mistake and give the correct answer.
Application
8. At 8 p.m. the temperature is \( 3\,^\circ\text{C} \). It falls \( 11\,^\circ\text{C} \) by midnight and then rises \( 6\,^\circ\text{C} \) by dawn. What is the temperature at dawn?
9. A mine elevator starts at \( 35 \) m above ground and travels down to the level at \( -120 \) m. How far does it travel?
10. In golf, a score of \( -3 \) means 3 strokes under par. A player's four rounds, relative to par, are \( -4,\ +2,\ -5 \) and \( +1 \). What is the player's total score relative to par?`,
};

// ───────── bank ─────────
export function bank() {
  const R = rng(1201);
  const { mcA, ms, tf, num, fill } = bankKit(R);
  const m = (s) => `$${s}$`;
  const nz = (lo, hi) => { let v = 0; while (v === 0) v = R.int(lo, hi); return v; };
  const dist = (correct, extra) => { const set = new Set([...extra, correct + 1, correct - 1, -correct, correct + 2, correct - 2]); set.delete(correct); return [...set]; };
  const msEqual = (d, tlo, thi, span) => {
    const t = R.int(tlo, thi);
    const mk = (a, b, op) => ({ txt: `${sg(a)} ${op} ${sg(b, true)}`, val: op === "+" ? a + b : a - b });
    const good = [], bad = [];
    while (good.length < 2) { const a = R.int(-span, span), op = R.pick(["+", "-"]); const b = op === "+" ? t - a : a - t; if (b === 0 || Math.abs(b) > span + 8) continue; good.push(mk(a, b, op)); }
    while (bad.length < 2) { const a = R.int(-span, span), b = R.int(-span, span), op = R.pick(["+", "-"]); const e = mk(a, b, op); if (e.val === t || b === 0) continue; bad.push(e); }
    const all = R.shuffle([...good.map((e) => ({ ...e, ok: true })), ...bad.map((e) => ({ ...e, ok: false }))]);
    if (new Set(all.map((e) => e.txt)).size < 4) return null;
    return ms(d, `Which expressions equal ${m(t)}?`, all.map((e) => m(e.txt)), all.map((e, i) => (e.ok ? i : -1)).filter((i) => i >= 0));
  };
  const T = [];
  const add = (d, make) => T.push({ d, make });

  // ── easy ──
  add("easy", () => { const a = -R.int(2, 9), b = R.int(2, 9); if (a + b === 0) return null; const c = a + b; return mcA("easy", `Evaluate ${m(`${sg(a)} + ${b}`)}.`, m(c), dist(c, [Math.abs(a) + b, -(Math.abs(a) + b)]).map(m), "Different signs: subtract the absolute values and keep the sign of the larger one."); });
  add("easy", () => { const a = R.int(2, 8), b = R.int(a + 1, 14); const c = a - b; return mcA("easy", `Evaluate ${m(`${a} - ${b}`)}.`, m(c), dist(c, [b - a + 10, a + b, -(a + b)]).map(m), `$${a} - ${b} = ${a} + (-${b})$.`); });
  add("easy", () => { const a = -R.int(5, 20); return mcA("easy", `${m(`|${a}|`)} equals:`, m(-a), [m(a), m(0), m(-a * 2)]); });
  add("easy", () => { const a = nz(-15, 15); return mcA("easy", `The opposite of ${m(sg(a))} is:`, m(-a), [m(a), m(0), m(a === 1 ? 2 : Math.abs(a) + 1)]); });
  add("easy", () => { const a = -R.int(3, 12), b = -R.int(3, 12); return num("easy", `Evaluate ${m(`${sg(a, true)} + ${sg(b, true)}`)}.`, a + b, 0, "Same signs: add the absolute values and keep the negative sign."); });
  add("easy", () => { const a = -R.int(4, 15), b = R.int(a * -1 + 1, 22); return num("easy", `A freezer reads ${m(a)} degrees and warms up by ${b} degrees. The new temperature is ___ degrees.`, a + b, 0); });
  add("easy", () => { const a = R.int(4, 25); return fill("easy", `The opposite of ${m(a)} is ___.`, [`-${a}`, `−${a}`]); });
  add("easy", () => { const s = R.pick([["The sum of two negative integers is always negative.", true], ["$(-4) + (-6) = 2$.", false], ["Subtracting a negative number is the same as adding its opposite.", true], ["$6 - 9 = 9 - 6$.", false], ["$|-7| = |7|$.", true], ["$-5$ is greater than $-2$.", false], ["The sum of a number and its opposite is $0$.", true], ["$0$ is a positive integer.", false]]); return tf("easy", s[0], s[1]); });
  add("easy", () => msEqual("easy", -8, 8, 9));

  // ── medium ──
  add("medium", () => { const a = nz(-12, 12), b = -R.int(2, 12); const c = a - b; return mcA("medium", `Evaluate ${m(`${sg(a)} - ${sg(b, true)}`)}.`, m(c), dist(c, [a + b, b - a]).map(m), "Subtracting a negative is adding its opposite."); });
  add("medium", () => { const a = nz(-9, 9), b = nz(-9, 9), c = nz(-9, 9); const v = a + b - c; const e = `${sg(a)} ${b < 0 ? "-" : "+"} ${Math.abs(b)} ${c < 0 ? "+" : "-"} ${Math.abs(c)}`; return mcA("medium", `Evaluate ${m(e)}.`, m(v), dist(v, []).map(m), "Work left to right, or collect positives and negatives."); });
  add("medium", () => { const h = R.int(40, 150), d = R.int(5, 40); return num("medium", `A hawk flies at ${h} m above sea level and a fish swims at ${d} m below sea level (${m(`-${d}`)} m). The vertical distance between them is ___ m.`, h + d, 0, `${h} - (-${d}) = ${h + d}.`); });
  add("medium", () => { const b = -R.int(10, 60), dep = R.int(40, 120), w = R.int(30, 100); return num("medium", `A bank account balance is ${m(b)} dollars. A deposit of ${dep} dollars is made, then ${w} dollars is withdrawn. The new balance, in dollars, is ___.`, b + dep - w, 0); });
  add("medium", () => { const x = nz(-12, 12), y = nz(-12, 12); const rep = R.int(0, 2); const exprs = [[`${sg(x)} + ___ = ${x + y}`, y], [`${sg(x)} - ___ = ${x - y}`, y], [`___ - ${sg(y, true)} = ${x - y}`, x]]; const t = exprs[rep]; return num("medium", `Find the missing integer: ${m(t[0].replace("___", "\\_\\_\\_"))}.`, t[1], 0); });
  add("medium", () => msEqual("medium", -15, 15, 14));
  add("medium", () => { const s = R.pick([["$(-5) - (-5) = 0$.", true], ["$-8 - 3 = -5$.", false, "$-8 - 3 = -11$."], ["$-2 - (-7) = 5$.", true], ["$a - b$ and $b - a$ are opposites.", true], ["$|-9 + 4| = |-9| + |4|$.", false, "$|-5| = 5$ but $9 + 4 = 13$."], ["$-6 + 6 = 0$ because they are opposites.", true], ["$7 - (-3) = 4$.", false, "$7 + 3 = 10$."]]); return tf("medium", s[0], s[1], s[2] ?? ""); });
  add("medium", () => { const a = -R.int(10, 40), b = R.int(10, 40); return num("medium", `On a number line, the distance between ${m(a)} and ${m(b)} is ___.`, b - a, 0); });
  add("medium", () => { const a = nz(-9, 9), b = -R.int(3, 9), c = R.int(3, 9); const v = a - b + c; return num("medium", `Evaluate ${m(`${sg(a)} - ${sg(b, true)} + ${c}`)}.`, v, 0); });

  // ── hard ──
  add("hard", () => { const choices = [["-9 + 4", -5], ["3 - 10", -7], ["-2 - (-1)", -1], ["-6 + 5", -1], ["8 - 14", -6], ["-12 + 4", -8]]; const four = R.shuffle(choices).slice(0, 4); const best = Math.max(...four.map((c) => c[1])); if (four.filter((c) => c[1] === best).length > 1) return null; return mcA("hard", "Which expression has the greatest value?", m(four.find((c) => c[1] === best)[0]), four.filter((c) => c[1] !== best).map((c) => m(c[0])), "Evaluate each expression and compare."); });
  add("hard", () => { const a = -R.int(8, 25), b = R.int(5, 18), c = R.int(6, 22), d = R.int(6, 25); const v = a - -b + c - d; return num("hard", `Evaluate ${m(`${a} - (-${b}) + ${c} - ${d}`)}.`, v, 0); });
  add("hard", () => { const t = R.int(3, 12), drop = R.int(2, 5), rise = R.int(1, 4); const v = t - 3 * drop + 2 * rise; return num("hard", `At 2 p.m. the temperature is ${t} degrees. It falls ${drop} degrees each hour for 3 hours, then rises ${rise} degree${rise === 1 ? "" : "s"} each hour for 2 hours. The final temperature is ___ degrees.`, v, 0); });
  add("hard", () => { const a = R.int(2, 12), b = -R.int(3, 12); return num("hard", `Two integers have a sum of ${m(a + b)} and the larger minus the smaller is ${m(a - b)}. The smaller integer is ___.`, b, 0, "Add and subtract the two equations."); });
  add("hard", () => ms("hard", "Which statements are true for ALL integers $a$ and $b$?", ["$a + (-a) = 0$", "$a - b = b - a$", "$a - (-b) = a + b$", "$|a + b| = |a| + |b|$"], [0, 2], "$a - b$ and $b - a$ are opposites, and $|-1 + 1| = 0$ but $|-1| + |1| = 2$."));
  add("hard", () => { const s = R.pick([["If $a < 0$ and $b < 0$, then $a - b$ can be positive, negative or zero.", true], ["The sum of a negative integer and a positive integer is always negative.", false, "For example $-2 + 9 = 7$."], ["If $a - b > 0$, then $a > b$.", true], ["Subtracting a larger integer from a smaller one always gives a negative result.", true], ["For integers, $a + b$ is always greater than $a - b$.", false, "If $b$ is negative, $a - b > a + b$."]]); return tf("hard", s[0], s[1], s[2] ?? ""); });
  add("hard", () => { const a = -R.int(18, 40), b = R.int(12, 35); return mcA("hard", `A drone at ${b} m above ground and a cable robot at ${m(a)} m (below ground) are lined up vertically. How many metres apart are they?`, `${b - a} m`, [`${b + a} m`, `${Math.abs(a) - b} m`, `${b - a + 10} m`], "Distance $=$ higher $-$ lower."); });
  add("hard", () => { const k = R.int(3, 6), a = R.int(2, 7), b = R.int(2, 7); const net = k * a - k * b; return num("hard", `A game awards ${a} points for each correct answer and takes away ${b} points for each wrong answer. After ${k} correct and ${k} wrong answers in a row, the change in score is ___.`, net, 0); });

  add("easy", () => { const n = R.int(3, 25); return ms("easy", `Which numbers have an absolute value of ${m(n)}?`, [m(n), m(-n), m(0), m(n * 2)], [0, 1]); });
  add("medium", () => { const a = R.int(2, 14), b = R.int(2, 14); if (a === b) return null; return fill("medium", `Simplify ${m(`-${a} - (-${b})`)} and write the integer: ___.`, [String(b - a)], `$-${a} + ${b} = ${b - a}$.`); });
  add("hard", () => { const n = R.int(4, 20); return ms("hard", `Which integers ${m("x")} satisfy ${m(`|x| = ${n}`)}?`, [m(n), m(-n), m(0), m(n + 1)], [0, 1]); });
  add("hard", () => { const a = R.int(3, 15), b = R.int(3, 15); if (a === b) return null; const hi = Math.max(a, b), lo = Math.min(a, b); return fill("hard", `If ${m(`a = -${hi}`)} and ${m(`b = -${lo}`)}, then ${m("a - b")} = ___.`, [String(lo - hi)], `$-${hi} - (-${lo}) = ${lo - hi}$.`); });
  return fillBank(T, 20);
}

// ───────── worksheet ─────────
const wLesson = [
  ["Opposites and absolute value", String.raw`Opposites are the same distance from $0$ on opposite sides: $7$ and $-7$. The <b>absolute value</b> $|n|$ is that distance, so $|-7|=7$.`],
  ["Adding integers", String.raw`<b>Same signs:</b> add the absolute values and keep the sign. <b>Different signs:</b> subtract the absolute values and keep the sign of the integer that is farther from $0$.`],
  ["Subtracting integers", String.raw`Subtracting means adding the opposite: $a-b=a+(-b)$. So $3-(-4)=3+4=7$. Distance between two numbers is the larger minus the smaller.`],
];
const wExamples = [
  ["Example 1: Opposites and absolute value", String.raw`Write the opposite of $-8$ and the value of $|-8|$.`, String.raw`The opposite of $-8$ is $8$, and $|-8|=8$.`],
  ["Example 2: Same signs", String.raw`Evaluate $-9+(-6)$.`, String.raw`Add $9+6=15$ and keep the negative sign: $-15$.`],
  ["Example 3: Different signs", String.raw`Evaluate $-14+9$.`, String.raw`$14-9=5$, and $-14$ is farther from $0$, so $-5$.`],
  ["Example 4: A positive answer", String.raw`Evaluate $-4+11$.`, String.raw`$11-4=7$, and $11$ is farther from $0$, so $7$.`],
  ["Example 5: Subtracting a larger number", String.raw`Evaluate $3-10$.`, String.raw`$3-10=3+(-10)=-7$.`],
  ["Example 6: Subtracting a negative", String.raw`Evaluate $-2-(-9)$.`, String.raw`$-2-(-9)=-2+9=7$.`],
  ["Example 7: Several terms", String.raw`Evaluate $8-15+(-3)-(-6)$.`, String.raw`$8+(-15)+(-3)+6$. Positives: $8+6=14$. Negatives: $-15+(-3)=-18$. Total $14+(-18)=-4$.`],
  ["Example 8: An elevator", String.raw`An elevator starts at floor $-2$ (parking level 2), goes up $9$ floors, then down $4$ floors. Which floor is it on?`, String.raw`$-2+9=7$, then $7-4=3$. It is on floor $3$.`],
  ["Example 9: Distance on a number line", String.raw`Find the distance between $-6$ and $13$.`, String.raw`Larger minus smaller: $13-(-6)=13+6=19$.`],
];
const wQuestions = [
  ["Problem 1", String.raw`Evaluate $-7+12$.`, String.raw`$5$`, 3.0],
  ["Problem 2", String.raw`Evaluate $-13+(-9)$.`, String.raw`$-22$`, 3.0],
  ["Problem 3", String.raw`Evaluate $5-14$.`, String.raw`$-9$`, 3.0],
  ["Problem 4", String.raw`Evaluate $-8-(-3)$.`, String.raw`$-5$`, 3.0],
  ["Problem 5", String.raw`Evaluate $-20+20$.`, String.raw`$0$ (opposites)`, 3.0],
  ["Problem 6", String.raw`Evaluate $-6+15-4$.`, String.raw`$5$`, 3.2],
  ["Problem 7", String.raw`Evaluate $12-(-7)-9$.`, String.raw`$10$`, 3.2],
  ["Problem 8", String.raw`Fill in the blank: $-5+\_\_\_=-12$.`, String.raw`$-7$`, 3.0],
  ["Problem 9", String.raw`Fill in the blank: $\_\_\_-8=-3$.`, String.raw`$5$`, 3.0],
  ["Problem 10", String.raw`Which has the greater absolute value, $-9$ or $6$? Which is the greater number?`, String.raw`$|-9|=9>6$, but $6>-9$`, 3.2],
  ["Problem 11", String.raw`A player has $-35$ points, gains $50$, then loses $28$. What is the total?`, String.raw`$-13$ points`, 3.4],
  ["Problem 12", String.raw`A freezer is at $-18\,^\circ\text{C}$ and a room is at $21\,^\circ\text{C}$. How many degrees warmer is the room?`, String.raw`$39\,^\circ\text{C}$`, 3.4],
  ["Problem 13 --- Challenge", String.raw`Find two integers whose sum is $-2$ and whose difference (larger minus smaller) is $12$.`, String.raw`$5$ and $-7$`, 3.8],
];
const ws = packWorksheet({
  code: CODE, title: TITLE,
  intro: "Integers describe temperatures, elevations and balances below zero. This worksheet practises opposites, absolute value, and adding and subtracting integers with the same-signs / different-signs rules.",
  bigideas: String.raw`Subtracting an integer is the same as <b>adding its opposite</b>. When the signs differ, the integer farther from $0$ decides the sign of the answer.`,
  lesson: wLesson, examples: wExamples, questions: wQuestions,
});
export const WORKSHEET_CONTENT = ws.content;
export const WORKSHEET_TEX = ws.texData;
