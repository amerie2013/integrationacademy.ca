// The 2.4 question bank: one-step and two-step equations (two-step may include brackets, fractions, decimals),
// application problems, and a deliberate mix of interactive formats (multiple choice, select-all, true/false,
// fill-in, put-in-order, matching) instead of type-in numbers only.
// Hidden `_eq` / `_ms` records let scripts/mth1w-ch1/check.mjs verify each equation by substituting the answer back.
import { rng, bankKit, fracKit } from "../mth1w-ch1/lib.mjs";

export function bank() {
  const R = rng(2402);
  const { mcA, ms, tf, num, fill } = bankKit(R);
  const K = fracKit();
  const m = (s) => `$${s}$`;
  const sgn = (n) => (n < 0 ? `-${-n}` : `${n}`);
  const mnum = (n) => (n < 0 ? `−${-n}` : `${n}`);
  const nz = (lo, hi) => { let v = 0; while (v === 0) v = R.int(lo, hi); return v; };
  const eq = (o, e) => Object.assign(o, { _eq: e });
  const tolFor = (at) => (Math.abs(Number(at) % 1) > 0 ? 0.001 : 0);

  // distractors for "solve for x" multiple choice
  const near = (at) => { const a = Number(at); return [-a, a + 1, a - 1, a * 2, a + 2, a - 2, a + 10].filter((v) => v !== a && Number.isFinite(v)); };
  const solveNum = (d, tex, v, at, fb = "") => eq(num(d, `Solve ${m(tex)}.`, Number(at), tolFor(at), fb), { tex, v, at: String(at) });
  const solveFill = (d, tex, v, at, forms, fb = "") => eq(fill(d, `Solve ${m(tex)}.`, forms, fb), { tex, v, at });
  const solveMC = (d, tex, v, at, fb = "") => { const ds = [...new Set(near(at).map((x) => Math.round(x * 100) / 100))].slice(0, 3); return eq(mcA(d, `Solve ${m(tex)}.`, m(`${v}=${mnum(Number(at))}`), ds.map((x) => m(`${v}=${mnum(x)}`)), fb), { tex, v, at: String(at) }); };
  const word = (d, text, tex, v, at, fb = "") => eq(num(d, text, Number(at), tolFor(at), fb), { tex, v, at: String(at) });
  const wordMC = (d, text, tex, v, at, unit, fb = "") => { const ds = [...new Set(near(at))].slice(0, 3); return eq(mcA(d, text, `${at}${unit}`, ds.map((x) => `${x}${unit}`), fb), { tex, v, at: String(at), answerText: true }); };

  const fixed = [];
  // ── Part A: one-step ──
  fixed.push(solveNum("easy", "x+9=15", "x", 6));
  fixed.push(solveMC("easy", "y-7=-3", "y", 4, "Add 7 to both sides."));
  fixed.push(solveNum("easy", "5m=45", "m", 9));
  fixed.push(solveNum("easy", "\\dfrac{n}{4}=12", "n", 48));
  fixed.push(solveMC("easy", "-6a=42", "a", -7, "Divide both sides by -6."));
  fixed.push(solveNum("easy", "x+3.5=8.2", "x", 4.7, "Subtract 3.5 from both sides."));
  fixed.push(solveFill("easy", "p-\\dfrac{3}{4}=\\dfrac{1}{2}", "p", "5/4", ["5/4", "1.25", "1 1/4", "\\frac{5}{4}"], "Add 3/4 to both sides."));
  fixed.push(solveMC("easy", "-x=11", "x", -11, "Multiply both sides by -1."));
  fixed.push(solveNum("easy", "\\dfrac{2}{3}w=10", "w", 15, "Multiply both sides by 3/2."));
  fixed.push(solveNum("easy", "\\dfrac{k}{-5}=6", "k", -30));
  fixed.push(wordMC("easy", "After a 15 dollar discount a jacket costs 64 dollars. What was the original price?", "j-15=64", "j", 79, " dollars", "Add 15 to both sides."));

  // ── Part B: two-step, advanced ──
  fixed.push(solveMC("medium", "7x-12=30", "x", 6));
  fixed.push(solveNum("medium", "-4x+9=-15", "x", 6));
  fixed.push(solveNum("medium", "23=5x-2", "x", 5));
  fixed.push(solveMC("medium", "\\dfrac{x}{6}+5=2", "x", -18));
  fixed.push(solveNum("medium", "\\dfrac{x-4}{3}=7", "x", 25));
  fixed.push(solveMC("medium", "\\dfrac{2x+5}{3}=9", "x", 11));
  fixed.push(solveNum("medium", "\\dfrac{3x}{4}-2=7", "x", 12));
  fixed.push(solveNum("medium", "-\\dfrac{x}{2}+6=11", "x", -10));
  fixed.push(solveNum("hard", "0.4x-1.2=2.8", "x", 10));
  fixed.push(solveNum("hard", "2.5y+3.5=-6.5", "y", -4));
  fixed.push(solveMC("hard", "9-2x=15", "x", -3));
  fixed.push(solveNum("hard", "5-\\dfrac{x}{3}=2", "x", 9));
  fixed.push(solveFill("hard", "\\dfrac{2}{3}x+\\dfrac{1}{2}=\\dfrac{5}{6}", "x", "1/2", ["1/2", "0.5", "\\frac{1}{2}"], "Subtract 1/2, then multiply by 3/2."));
  fixed.push(solveNum("hard", "-\\dfrac{3}{5}n-4=5", "n", -15));

  // ── Part C: application ──
  fixed.push(word("medium", "A taxi charges a flat fee of 4.50 dollars plus 1.75 dollars per km. A ride costs 18.50 dollars. How many km was the ride?", "4.5+1.75k=18.5", "k", 8, "4.5 + 1.75k = 18.5"));
  fixed.push(wordMC("medium", "A gym charges 25 dollars to join plus a monthly fee. After 6 months you have paid 97 dollars in total. What is the monthly fee?", "25+6m=97", "m", 12, " dollars"));
  fixed.push(word("medium", "The formula F = 1.8C + 32 converts Celsius to Fahrenheit. Find C when F = 113.", "1.8C+32=113", "C", 45));
  fixed.push(word("hard", "A rectangle is 12 cm long and has a perimeter of 38 cm. Find its width, in cm.", "24+2w=38", "w", 7, "Perimeter = 2(12) + 2w."));
  fixed.push(wordMC("hard", "Mia has 85 dollars and saves 15 dollars each week toward a bike that costs 160 dollars. For how many weeks must she save?", "85+15w=160", "w", 5, " weeks"));
  fixed.push(word("hard", "A phone plan costs 30 dollars plus 0.25 dollars per text, and this month's bill is 47.50 dollars. How many texts were sent?", "30+0.25t=47.5", "t", 70));
  fixed.push(word("hard", "At 6 p.m. it is 8 degrees Celsius and the temperature falls 2.5 degrees each hour. After how many hours is it -7 degrees?", "8-2.5h=-7", "h", 6));

  // ── Part D: interactive formats ──
  fixed.push(mcA("easy", `What is the first step to solve ${m("7x-12=30")}?`, "Add 12 to both sides", ["Subtract 12 from both sides", "Divide both sides by 7", "Multiply both sides by 7"], "Undo the subtraction first: add 12."));
  fixed.push(num("medium", `Complete the solution of ${m("5x+3=28")}. After subtracting 3 from both sides, ${m("5x")} = ___.`, 25, 0, "28 - 3 = 25, so x = 5."));
  fixed.push(eq(tf("easy", `${m("x=-3")} is the solution of ${m("9-2x=15")}.`, true, "9 - 2(-3) = 9 + 6 = 15."), { tex: "9-2x=15", v: "x", at: "-3", holds: true }));
  fixed.push(Object.assign(ms("easy", `Which equations have the solution ${m("x=4")}?`, [m("3x-5=7"), m("\\dfrac{x}{2}+3=5"), m("2x-1=9"), m("5-x=1")], [0, 1, 3]), { _ms: [{ tex: "3x-5=7", v: "x", at: "4" }, { tex: "\\dfrac{x}{2}+3=5", v: "x", at: "4" }, { tex: "2x-1=9", v: "x", at: "4" }, { tex: "5-x=1", v: "x", at: "4" }] }));
  fixed.push({ difficulty: "medium", kind: "ordering", prompt: `Put the steps in order to solve ${m("2x+7=19")}.`, choices: ["Subtract 7 from both sides: 2x = 12", "Divide both sides by 2: x = 6", "Check: 2(6) + 7 = 19"], answer: [0, 1, 2], points: 1, feedback: "Undo the addition, then the multiplication, then check." });
  fixed.push(mcA("medium", `A student solves ${m("3x-6=12")} and writes ${m("x=12-6\\div3=10")}. What went wrong?`, "She subtracted 6 instead of adding 6 to both sides", ["She divided by 3 before subtracting", "She should have multiplied both sides by 3", "Nothing; x = 10 is correct"], "Add 6: 3x = 18, so x = 6."));

  // ── Part E: creating equations from words (multiple choice, each equation verified by substitution) ──
  const create = (d, sentence, correct, wrongs, n0, fb = "") => fixed.push(eq(mcA(d, `Which equation models this situation? ${sentence}`, m(correct), wrongs.map(m), fb), { tex: correct, v: "n", at: String(n0), creates: true }));
  { const a = R.int(3, 9), n0 = R.int(4, 15); create("easy", `"A number increased by ${a} is ${n0 + a}."`, `n+${a}=${n0 + a}`, [`n-${a}=${n0 + a}`, `${a}-n=${n0 + a}`, `${a}n=${n0 + a}`], n0, "Increased by means add."); }
  { const k = R.pick([3, 4, 5]), n0 = R.int(4, 9) * k; create("easy", `"A number divided by ${k} is ${n0 / k}."`, `\\dfrac{n}{${k}}=${n0 / k}`, [`${k}n=${n0 / k}`, `n-${k}=${n0 / k}`, `\\dfrac{${k}}{n}=${n0 / k}`], n0, "Divided by means n over the number."); }
  { const m_ = R.int(2, 6), k = R.int(2, 9), n0 = R.int(4, 12); create("medium", `"${k} less than ${m_} times a number is ${m_ * n0 - k}."`, `${m_}n-${k}=${m_ * n0 - k}`, [`${k}-${m_}n=${m_ * n0 - k}`, `${m_}(n-${k})=${m_ * n0 - k}`, `${m_}n+${k}=${m_ * n0 - k}`], n0, `"${k} less than" means subtract ${k} from ${m_}n.`); }
  { const b = R.int(3, 9); let n0 = R.int(3, 12); while (n0 === b) n0 = R.int(3, 12); create("medium", `"Twice a number, increased by ${b}, is ${2 * n0 + b}."`, `2n+${b}=${2 * n0 + b}`, [`2(n+${b})=${2 * n0 + b}`, `n+${2 * b}=${2 * n0 + b}`, `2n-${b}=${2 * n0 + b}`], n0, "The increase is added after doubling."); }
  { const a = R.pick([3, 4, 5]); let b = R.int(2, 6); while (b === a) b = R.int(2, 6); const c = R.int(2, 7), n0 = a * (c + b); create("medium", `"The quotient of a number and ${a}, decreased by ${b}, is ${c}."`, `\\dfrac{n}{${a}}-${b}=${c}`, [`\\dfrac{${a}}{n}-${b}=${c}`, `\\dfrac{n}{${a}-${b}}=${c}`, `${a}n-${b}=${c}`], n0, "Quotient means divide; decreased by means subtract."); }
  { const m_ = R.int(2, 6), b = R.int(2, 9), n0 = R.int(3, 12); create("hard", `"${m_} times the sum of a number and ${b} is ${m_ * (n0 + b)}."`, `${m_}(n+${b})=${m_ * (n0 + b)}`, [`${m_}n+${b}=${m_ * (n0 + b)}`, `n+${m_ * b}=${m_ * (n0 + b)}`, `${m_}+n+${b}=${m_ * (n0 + b)}`], n0, "The sum is taken first, so it goes in brackets."); }
  { const fee = R.pick([40, 45, 60]), rate = R.pick([55, 65, 70]), h = R.int(2, 6); const total = fee + rate * h; const wrongs = [`${rate}+${fee}n=${total}`, `${fee + rate}n=${total}`, `${fee}(${rate}+n)=${total}`]; fixed.push(eq(mcA("hard", `A plumber charges a ${fee} dollar call-out fee plus ${rate} dollars per hour, and a bill is ${total} dollars. Which equation finds the number of hours n?`, m(`${fee}+${rate}n=${total}`), wrongs.map(m), "Fee plus rate times hours equals the total."), { tex: `${fee}+${rate}n=${total}`, v: "n", at: String(h), creates: true })); }
  { const k = R.pick([5, 6, 8]), fee = R.int(2, 5), t = R.int(6, 15); const total = k * (t + fee); fixed.push(eq(mcA("hard", `${k} friends each pay a ticket price n plus a ${fee} dollar fee, and the total paid is ${total} dollars. Which equation models this?`, m(`${k}(n+${fee})=${total}`), [`${k}n+${fee}=${total}`, `n+${k * fee}=${total}`, `${k}+${fee}n=${total}`].map(m), "Each friend pays n + fee, and there are several friends."), { tex: `${k}(n+${fee})=${total}`, v: "n", at: String(t), creates: true })); }

  // ───────── generators ─────────
  const lin = (a, b) => `${a === 1 ? "x" : a === -1 ? "-x" : `${a}x`}${b > 0 ? `+${b}` : b < 0 ? `-${-b}` : ""}`;
  const br = (a, b) => `${a}(x${b > 0 ? "+" : "-"}${Math.abs(b)})`;
  const T = [], add = (d, make) => T.push({ d, make });

  // true / false: is x = t a solution?
  const tfSolution = (d, texFn) => () => { const { tex, x0 } = texFn(); const ok = R.next() < 0.5; const test = ok ? x0 : x0 + R.pick([-3, -2, -1, 1, 2, 4]); return eq(tf(d, `${m(`x=${sgn(test)}`)} is a solution of ${m(tex)}.`, ok, ok ? "Substitute: both sides match." : "Substitute: the two sides are not equal."), { tex, v: "x", at: String(test), holds: ok }); };
  add("easy", tfSolution("easy", () => { const x0 = nz(-9, 9), a = R.int(2, 12); return { tex: `x-${a}=${x0 - a}`, x0 }; }));
  add("easy", tfSolution("easy", () => { const x0 = nz(-6, 8), a = R.int(2, 5), b = R.int(2, 9); return { tex: `${a}x+${b}=${a * x0 + b}`, x0 }; }));
  add("medium", tfSolution("medium", () => { const x0 = nz(-9, 9), a = R.int(2, 6), c = R.int(3, 14); return { tex: `${a}x-${c}=${a * x0 - c}`, x0 }; }));
  add("hard", tfSolution("hard", () => { const x0 = nz(-8, 10), a = R.pick([2, 3, 4, 5, -2, -3]), b = nz(-8, 8); return { tex: `${br(a, b)}=${a * (x0 + b)}`, x0 }; }));

  // select all that apply
  const msSolution = (d, mkTrue, mkFalse) => () => { const t = nz(-6, 9); const good = [mkTrue(t), mkTrue(t)], bad = [mkFalse(t), mkFalse(t)]; const o = R.shuffle([...good.map((g) => ({ g, ok: true })), ...bad.map((g) => ({ g, ok: false }))]); if (new Set(o.map((x) => x.g)).size < 4) return null; return Object.assign(ms(d, `Which equations have the solution ${m(`x=${sgn(t)}`)}?`, o.map((x) => m(x.g)), o.map((x, i) => (x.ok ? i : -1)).filter((i) => i >= 0)), { _ms: o.map((x) => ({ tex: x.g, v: "x", at: String(t) })) }); };
  add("easy", msSolution("easy", (t) => { const a = R.int(2, 5), c = R.int(1, 9); return R.pick([`x+${c}=${t + c}`, `${a}x=${a * t}`]); }, (t) => { const c = R.int(1, 9); return R.pick([`x-${c}=${t + c}`, `x+${c}=${t + c + 1}`, `3x=${3 * t + 2}`]); }));
  add("medium", msSolution("medium", (t) => { const a = R.int(2, 6), b = R.int(1, 9); return R.pick([`${a}x+${b}=${a * t + b}`, `${a}x-${b}=${a * t - b}`, `${b}-${a}x=${b - a * t}`]); }, (t) => { const a = R.int(2, 6), b = R.int(1, 9); return R.pick([`${a}x+${b}=${a * t - b}`, `${a}x-${b}=${a * t + b}`, `${b}-${a}x=${a * t - b}`]); }));
  add("hard", msSolution("hard", (t) => { const a = R.pick([2, 3, 4, 5]), b = nz(-6, 6); return R.pick([`${br(a, b)}=${a * (t + b)}`, `${a * (t + b)}=${br(a, b)}`]); }, (t) => { const a = R.pick([2, 3, 4]), b = nz(-6, 6); return R.pick([`${br(a, b)}=${a * (t + b) + a}`, `${br(a, b)}=${a * t + b}`]); }));

  // multiple choice: first step / error spotting / solve
  add("easy", () => { const a = R.int(2, 9), c = R.int(10, 40); return mcA("easy", `Which operation undoes the multiplication in ${m(`${a}x=${a * c}`)}?`, `Divide both sides by ${a}`, [`Multiply both sides by ${a}`, `Subtract ${a} from both sides`, `Add ${a} to both sides`]); });
  add("medium", () => { const a = R.int(2, 7), b = R.int(3, 15); const x0 = nz(-6, 8); const tex = `${a}x-${b}=${a * x0 - b}`; return mcA("medium", `What is the first step to solve ${m(tex)}?`, `Add ${b} to both sides`, [`Subtract ${b} from both sides`, `Divide both sides by ${a}`, `Multiply both sides by ${a}`], "Undo the subtraction before the multiplication."); });
  add("medium", () => { const a = R.pick([2, 3, 4, 5]), b = nz(-8, 8), x0 = nz(-8, 10); const tex = `${br(a, b)}=${a * (x0 + b)}`; return mcA("medium", `What is a good first step to solve ${m(tex)}?`, `Divide both sides by ${a}`, [`Subtract ${a} from both sides`, `Add ${a} to both sides`, `Multiply both sides by ${a}`], "Dividing by the number in front of the bracket leaves a one-step equation."); });
  add("medium", () => { const x0 = nz(-8, 9), a = R.int(2, 7), b = R.int(2, 15); const tex = `${a}x+${b}=${a * x0 + b}`; return solveMC("medium", tex, "x", x0, "Subtract first, then divide."); });
  add("hard", () => { const x0 = nz(-8, 10), a = R.int(2, 6), b = nz(-8, 8); const tex = br(a, b) + `=${a * (x0 + b)}`; const wrong = x0 + b * 2; if (x0 + 1 === -x0) return null; return eq(mcA("hard", `A student solves ${m(tex)} and gets ${m(`x=${sgn(wrong)}`)}. Which statement is true?`, `The answer is wrong; the correct solution is x = ${sgn(x0)}`, ["The answer is correct", `The correct solution is x = ${sgn(x0 + 1)}`, `The correct solution is x = ${sgn(-x0)}`], "Divide by the number outside the bracket, then undo the addition or subtraction, and check by substituting."), { tex, v: "x", at: String(x0) }); });
  add("hard", () => { const x0 = nz(-9, 12), a = R.pick([2, 3, 4, 5, 6, -2, -3, -4]), b = nz(-9, 9); return solveMC("hard", `${br(a, b)}=${a * (x0 + b)}`, "x", x0, "Divide both sides by the number outside the bracket, then undo the addition or subtraction."); });

  // ordering the steps
  add("medium", () => { const x0 = nz(-8, 10), a = R.int(2, 7), b = R.int(2, 15); const c = a * x0 + b; return { difficulty: "medium", kind: "ordering", prompt: `Put the steps in order to solve ${m(`${a}x+${b}=${c}`)}.`, choices: [`Subtract ${b} from both sides: ${a}x = ${c - b}`, `Divide both sides by ${a}: x = ${x0}`, `Check: ${a}(${x0}) + ${b} = ${c}`], answer: [0, 1, 2], points: 1, feedback: "Undo the addition, then the multiplication, then check." }; });
  add("hard", () => { const x0 = nz(-8, 10), a = R.pick([2, 3, 4, 5]), b = nz(-8, 8); const c = a * (x0 + b); return { difficulty: "hard", kind: "ordering", prompt: `Put the steps in order to solve ${m(`${br(a, b)}=${c}`)}.`, choices: [`Divide both sides by ${a}: x ${b > 0 ? "+" : "-"} ${Math.abs(b)} = ${x0 + b}`, `${b > 0 ? "Subtract" : "Add"} ${Math.abs(b)} ${b > 0 ? "from" : "to"} both sides: x = ${x0}`, `Check: ${a}(${x0} ${b > 0 ? "+" : "-"} ${Math.abs(b)}) = ${c}`], answer: [0, 1, 2], points: 1, feedback: "Divide by the number outside the bracket first." }; });

  // matching equations to solutions
  const matching = (d, mk) => () => { const xs = R.shuffle([-8, -5, -3, -2, 2, 3, 4, 5, 6, 7, 9]).slice(0, 4); const eqs = xs.map((x0) => mk(x0)); const right = R.shuffle(xs.map((x0) => `x = ${mnum(x0)}`)); return { difficulty: d, kind: "matching", prompt: `Match each equation to its solution.`, choices: { left: eqs.map((t) => m(t)), right }, answer: xs.map((x0) => right.indexOf(`x = ${mnum(x0)}`)), points: 1, feedback: "Solve each equation, or substitute each solution.", _matchEqs: eqs.map((t, i) => ({ tex: t, v: "x", at: String(xs[i]) })) }; };
  add("medium", matching("medium", (x0) => { const a = R.int(2, 6), b = R.int(1, 9); return R.pick([`${a}x+${b}=${a * x0 + b}`, `${a}x-${b}=${a * x0 - b}`, `x+${b}=${x0 + b}`]); }));
  add("hard", matching("hard", (x0) => { const a = R.pick([2, 3, 4, 5]), b = nz(-6, 6); return R.pick([`${br(a, b)}=${a * (x0 + b)}`, `${a}x+${b}=${a * x0 + b}`.replace("+-", "-")]); }));

  // typed answers (a limited number, mainly in the hard tier)
  add("medium", () => { const x0 = nz(-12, 12), a = R.pick([2, 3, 4, 5, 6, 7, 8, -2, -3, -4, -5]), b = nz(-15, 15); return solveNum("medium", `${lin(a, b)}=${a * x0 + b}`, "x", x0); });
  add("medium", () => { const x0 = nz(-10, 10), a = R.int(2, 8), b = R.int(3, 20); return solveNum("medium", `${b}-${a}x=${b - a * x0}`, "x", x0); });
  add("medium", () => { const b = nz(-9, 12), a = R.int(2, 7), c = nz(-6, 8); return solveNum("medium", `\\dfrac{x${b > 0 ? "+" : "-"}${Math.abs(b)}}{${a}}=${c}`, "x", a * c - b); });
  add("hard", () => { const x0 = nz(-9, 12), a = R.pick([2, 3, 4, 5, 6, -2, -3, -4]), b = nz(-9, 9); return solveNum("hard", `${a * (x0 + b)}=${br(a, b)}`, "x", x0); });
  add("hard", () => { const [p, qq] = R.pick([[2, 3], [3, 4], [1, 2], [3, 5], [2, 5], [5, 6]]); const k = nz(-4, 4), b = nz(-8, 9); const tex = `\\dfrac{${p}}{${qq}}(x${b > 0 ? "+" : "-"}${Math.abs(b)})=${p * k}`; return solveNum("hard", tex, "x", qq * k - b, "Multiply by the reciprocal of the fraction, then undo the bracket."); });
  add("hard", () => { const d10 = R.pick([5, 15, 25]), t = nz(-6, 9), b = R.pick([6, 1.2, 2.4, 3, 4.5]); const x0 = Math.round((t + b) * 10) / 10; const c = Math.round(d10 * t) / 10; return solveNum("hard", `${d10 / 10}(x-${b})=${c}`, "x", x0, "Divide by the decimal first."); });
  add("hard", () => { const [p, qq] = R.pick([[3, 4], [2, 3], [3, 5], [5, 6], [2, 5], [1, 2]]); const k = nz(-5, 6), b = nz(-9, 9); return solveNum("hard", `\\dfrac{${p}}{${qq}}x${b > 0 ? "+" : "-"}${Math.abs(b)}=${p * k + b}`, "x", qq * k); });
  add("hard", () => { const w = R.int(5, 12), l = R.int(w + 1, 22); return word("hard", `The perimeter of a rectangle is ${2 * (l + w)} cm and its width is ${w} cm. Use ${m(`2(l+${w})=${2 * (l + w)}`)} to find its length, in cm.`, `2(l+${w})=${2 * (l + w)}`, "l", l); });
  add("hard", () => { const n = R.pick([4, 5, 6, 8]), t = R.int(5, 16), fee = R.pick([1.5, 2, 2.5, 3]); const total = Math.round(n * (t + fee) * 100) / 100; return word("hard", `${n} tickets each cost a base price plus a ${fee} dollar service fee, and the total is ${total} dollars. Use ${m(`${n}(t+${fee})=${total}`)} to find the base price t, in dollars.`, `${n}(t+${fee})=${total}`, "t", t); });
  add("medium", () => { const a = R.pick([15, 20, 25, 30]), r = R.pick([8, 12, 15, 18, 22]), n = R.int(3, 9); return wordMC("medium", `A streaming service charges a ${a} dollar setup fee plus ${r} dollars per month. After some months you have paid ${a + r * n} dollars. How many months is that?`, `${a}+${r}m=${a + r * n}`, "m", n, " months"); });
  add("medium", () => { const c = R.int(2, 12), x0 = R.int(2, 15); return word("medium", `Twice a number, decreased by ${c}, is ${2 * x0 - c}. Find the number.`, `2n-${c}=${2 * x0 - c}`, "n", x0); });
  add("easy", () => { const n = R.int(3, 9), each = R.int(4, 15); return eq(num("easy", `${n} friends share a bill equally and each pays ${each} dollars. What was the total bill, in dollars?`, n * each, 0), { tex: `\\dfrac{b}{${n}}=${each}`, v: "b", at: String(n * each) }); });
  add("easy", () => { const [p, qq] = R.pick([[1, 2], [3, 4], [1, 3], [2, 5], [3, 5]]); const k = nz(2, 9); return eq(fill("easy", `Solve ${m(`x+\\dfrac{${p}}{${qq}}=${k}`)}. Write ${m("x")} as a fraction or mixed number.`, K.forms(k * qq - p, qq), `Subtract ${p}/${qq} from both sides.`), { tex: `x+${p}/${qq}=${k}`, v: "x", at: `${k * qq - p}/${qq}` }); });
  add("easy", () => { const x0 = nz(-12, 12), a = R.int(3, 25); return solveNum("easy", `x+${a}=${x0 + a}`, "x", x0); });

  // collect to 20 per difficulty; typed answers are capped so the bank stays interactive
  const out = [...fixed], seen = new Set(out.map((x) => x.prompt));
  const have = (d) => out.filter((x) => x.difficulty === d).length;
  const numeric = (d) => out.filter((x) => x.difficulty === d && x.kind === "numeric").length;
  const CAP = { easy: 8, medium: 8, hard: 9 };
  for (let round = 0; round < 1500; round++) {
    let progressed = false;
    for (const t of T) {
      if (have(t.d) >= 20) continue;
      const x = t.make();
      if (!x || seen.has(x.prompt)) continue;
      if (x.kind === "numeric" && numeric(t.d) >= CAP[t.d]) continue;
      seen.add(x.prompt); out.push(x); progressed = true;
    }
    if (["easy", "medium", "hard"].every((d) => have(d) >= 20)) break;
    if (!progressed && round > 150) break;
  }
  return out.sort((a, b) => ({ easy: 0, medium: 1, hard: 2 }[a.difficulty] - { easy: 0, medium: 1, hard: 2 }[b.difficulty]));
}
