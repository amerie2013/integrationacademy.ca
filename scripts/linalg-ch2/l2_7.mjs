// LINALG1 2.7 — Applications of Linear Systems: polynomial interpolation (why it is unique), network flow
// (conservation at every node, free flows and their limits), balancing chemical equations (homogeneous systems),
// electrical circuits (Kirchhoff's laws) and steady-state temperatures (the averaging rule).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, definition, theorem, vec, am, sys, steps } from "./lib.mjs";
import { vfig } from "./vecfig.mjs";

export const TITLE = "2.7 Applications of Linear Systems";
export const ID = "11a10001-0001-4001-8001-000000000207";

const S = String.raw;
const W = (w, h, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" font-family="Arial, sans-serif" style="max-width:100%;height:auto;"><rect width="${w}" height="${h}" fill="#fff"/><defs><marker id="ah" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0,0 L12,6 L0,12 z" fill="#1e40af"/></marker><marker id="ar" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0,0 L12,6 L0,12 z" fill="#be123c"/></marker></defs>${body}</svg>`;
const fig = (svg, cap) => `<div style="text-align:center;margin:12px 0;">${svg}${cap ? `<div style="font-size:13px;color:#64748b;margin-top:2px;">${cap}</div>` : ""}</div>`;
const arrow = (x1, y1, x2, y2, t, tx, ty, red = false) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${red ? "#be123c" : "#1e40af"}" stroke-width="2.6" marker-end="url(#${red ? "ar" : "ah"})"/><text x="${tx}" y="${ty}" font-size="14" font-weight="700" text-anchor="middle" fill="${red ? "#be123c" : "#1e40af"}">${t}</text>`;
const node = (x, y, t) => `<circle cx="${x}" cy="${y}" r="16" fill="#fef3c7" stroke="#b45309" stroke-width="2"/><text x="${x}" y="${y + 5}" font-size="15" font-weight="800" text-anchor="middle" fill="#92400e">${t}</text>`;

/** the traffic network of Example 2 (and the notes) */
const NETWORK = W(420, 330, [
  arrow(116, 80, 296, 80, "x₁", 206, 70), arrow(320, 104, 320, 216, "x₂", 336, 164), arrow(296, 240, 116, 240, "x₃", 206, 262), arrow(92, 216, 92, 104, "x₄", 72, 164),
  arrow(20, 80, 72, 80, "300", 40, 70, true), arrow(92, 58, 92, 14, "100", 112, 30, true),
  arrow(320, 14, 320, 56, "200", 342, 32, true), arrow(340, 80, 400, 80, "400", 372, 70, true),
  arrow(400, 240, 340, 240, "350", 372, 230, true), arrow(320, 262, 320, 312, "150", 342, 300, true),
  arrow(92, 312, 92, 264, "100", 112, 300, true), arrow(72, 240, 20, 240, "300", 40, 230, true),
  node(92, 80, "A"), node(320, 80, "B"), node(320, 240, "C"), node(92, 240, "D"),
].join(""));
/** a two-loop circuit: 12 V source, resistors 2 Ω, 3 Ω, 6 Ω */
const CIRCUIT = W(400, 230, `<g stroke="#0f172a" stroke-width="2.4" fill="none">
<path d="M60,40 H340 V190 H60 Z"/><path d="M200,40 V190"/></g>
<g stroke="#0f172a" stroke-width="2.4"><line x1="48" y1="105" x2="72" y2="105"/><line x1="53" y1="122" x2="67" y2="122"/></g>
<rect x="54" y="98" width="12" height="32" fill="#fff"/><line x1="44" y1="104" x2="76" y2="104" stroke="#0f172a" stroke-width="2.6"/><line x1="51" y1="122" x2="69" y2="122" stroke="#0f172a" stroke-width="4"/>
<text x="24" y="118" font-size="14" font-weight="700" fill="#0f172a">12 V</text>
<rect x="110" y="28" width="50" height="24" fill="#fff" stroke="#b45309" stroke-width="2.4"/><text x="135" y="22" font-size="13" font-weight="700" text-anchor="middle" fill="#b45309">2 Ω</text>
<rect x="188" y="90" width="24" height="50" fill="#fff" stroke="#b45309" stroke-width="2.4"/><text x="222" y="120" font-size="13" font-weight="700" fill="#b45309">3 Ω</text>
<rect x="328" y="90" width="24" height="50" fill="#fff" stroke="#b45309" stroke-width="2.4"/><text x="362" y="120" font-size="13" font-weight="700" fill="#b45309">6 Ω</text>
${arrow(170, 40, 192, 40, "", 0, 0, true)}<text x="176" y="66" font-size="14" font-weight="800" fill="#be123c">I₁</text>
${arrow(200, 160, 200, 180, "", 0, 0, true)}<text x="208" y="176" font-size="14" font-weight="800" fill="#be123c">I₂</text>
${arrow(250, 40, 290, 40, "", 0, 0, true)}<text x="266" y="30" font-size="14" font-weight="800" fill="#be123c">I₃</text>
<circle cx="200" cy="40" r="4" fill="#0f172a"/><circle cx="200" cy="190" r="4" fill="#0f172a"/>
<text x="130" y="128" font-size="13" fill="#475569">loop 1</text><text x="262" y="128" font-size="13" fill="#475569">loop 2</text>`);
/** steady-state plate: four interior points */
const PLATE = W(330, 300, `<rect x="60" y="40" width="210" height="210" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
<line x1="130" y1="40" x2="130" y2="250" stroke="#cbd5e1"/><line x1="200" y1="40" x2="200" y2="250" stroke="#cbd5e1"/><line x1="60" y1="110" x2="270" y2="110" stroke="#cbd5e1"/><line x1="60" y1="180" x2="270" y2="180" stroke="#cbd5e1"/>
${[[130, 110, "T₁"], [200, 110, "T₂"], [130, 180, "T₃"], [200, 180, "T₄"]].map(([x, y, t]) => `<circle cx="${x}" cy="${y}" r="15" fill="#fde68a" stroke="#b45309" stroke-width="2"/><text x="${x}" y="${y + 5}" font-size="13" font-weight="800" text-anchor="middle" fill="#92400e">${t}</text>`).join("")}
<text x="165" y="30" font-size="14" font-weight="700" text-anchor="middle" fill="#be123c">100°</text><text x="165" y="274" font-size="14" font-weight="700" text-anchor="middle" fill="#1e40af">0°</text>
<text x="40" y="150" font-size="14" font-weight="700" text-anchor="middle" fill="#b45309">50°</text><text x="292" y="150" font-size="14" font-weight="700" text-anchor="middle" fill="#b45309">50°</text>`);
const PARAB = vfig({ view: { xmin: -0.5, xmax: 4, ymin: -0.5, ymax: 7 }, step: 1, width: 300, segs: [{ pts: Array.from({ length: 41 }, (_, i) => { const x = -0.2 + (3.8 * i) / 40; return [x, 3 - 2 * x + x * x]; }), color: "violet", w: 2.6 }], points: [{ x: 1, y: 2, label: "(1, 2)", color: "red" }, { x: 2, y: 3, label: "(2, 3)", color: "red", dx: 8, dy: 12 }, { x: 3, y: 6, label: "(3, 6)", color: "red", dx: -8, anchor: "end" }] }, "p(x) = 3 − 2x + x² through the three points");

export const blocks = () => [
  intro({
    icon: "🛠️",
    title: "Applications of Linear Systems",
    overview: S`Linear systems are the workhorse of applied mathematics. Whenever several quantities must satisfy several linear conditions at once — a curve must pass through given points, traffic into a junction must equal traffic out, atoms must balance in a reaction, voltages must add up around a circuit, a temperature must equal the average of its neighbours — the result is a system you can solve with the tools of this chapter. This lesson sets up five such models. The skill to practise is the <strong>modelling</strong>: choosing unknowns, writing one equation per condition, and then interpreting the solution, including what free variables and restrictions such as "flows cannot be negative" mean in context.`,
    goals: [
      "find the polynomial through given points and explain why it is unique;",
      "set up and solve network-flow problems, interpreting free variables and limits on them;",
      "balance chemical equations with a homogeneous system;",
      "find currents in a circuit with Kirchhoff's laws;",
      "find steady-state temperatures from the averaging rule.",
    ],
    outcomes: "systems of linear equations: modelling and applications",
    prior: [
      [S`What is the general quadratic?`, S`\(p(x)=a_0+a_1x+a_2x^2\), with three unknown coefficients.`],
      [S`What does a free variable mean for the number of solutions?`, S`Infinitely many solutions, one parameter per free variable (2.3).`],
      [S`What is a homogeneous system?`, S`All constants are 0; \(\vec x=\vec 0\) always works (2.6).`],
    ],
    words: [
      ["Interpolating polynomial", "the polynomial through given data points", "\\(p(x_i)=y_i\\)"],
      ["Conservation of flow", "flow in = flow out at every node", "traffic, pipes, money"],
      ["Balanced equation", "same number of each atom on both sides", "\\(2\\mathrm{H_2}+\\mathrm{O_2}\\to2\\mathrm{H_2O}\\)"],
      ["Kirchhoff's laws", "currents balance at junctions; voltages balance around loops", "\\(V=IR\\) on each resistor"],
      ["Steady state", "temperatures no longer change", "each point = average of its neighbours"],
    ],
  }),

  section("📌 Fitting a polynomial through points", S`
  <p>To find \(p(x)=a_0+a_1x+\dots+a_{k-1}x^{k-1}\) through \(k\) points \((x_i,y_i)\), each point gives one <strong>linear</strong> equation in the unknown coefficients: \(a_0+a_1x_i+\dots+a_{k-1}x_i^{k-1}=y_i\). The unknowns are the \(a_j\), not \(x\).</p>
  ${theorem("unique interpolating polynomial", S`If \(x_1,\dots,x_k\) are distinct, there is exactly one polynomial of degree at most \(k-1\) with \(p(x_i)=y_i\) for all \(i\).`, S`The homogeneous system (all \(y_i=0\)) asks for a polynomial of degree \(\le k-1\) with \(k\) distinct roots; only the zero polynomial has that many roots, so the homogeneous system has only the trivial solution. Hence the \(k\times k\) coefficient matrix has rank \(k\) and the system has exactly one solution for every choice of the \(y_i\) (2.5 and 2.6).`)}
  ${PARAB}`),

  section("📌 Network flow", S`
  <p>A <strong>network</strong> consists of nodes (junctions) joined by branches carrying a flow — cars per hour, litres per minute, dollars per day. At every node, <strong>flow in = flow out</strong>. One equation per node gives a linear system; the total external inflow must equal the total outflow for it to be consistent.</p>
  ${fig(NETWORK, "one-way streets around a block (cars per hour); red flows enter or leave the network")}
  ${keyIdea(S`Free variables in a network are flows you can choose: traffic can be routed in several ways. Real constraints such as \(x_i\ge0\) (one-way streets) and capacities then restrict the parameter to an interval.`)}`),

  section("📌 Chemical equations, circuits and heat", S`
  ${table(["Model", "Unknowns", "One equation for each…", "Type of system"], [
    ["chemical equation", "the coefficients of the molecules", "element (atoms balance)", "homogeneous — scale to the smallest whole numbers"],
    ["electrical circuit", "the currents \\(I_k\\)", "junction (in = out) and loop (sum of \\(RI\\) = voltage)", "usually one solution"],
    ["steady-state heat", "temperatures at interior points", "interior point (= average of its 4 neighbours)", "one solution"],
  ])}
  <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;">${fig(CIRCUIT, "a two-loop circuit")}${fig(PLATE, "a square plate with fixed edge temperatures")}</div>`),

  section("📌 Explore", S`<p>Move the red points. The lab builds the augmented matrix \([\,1\ x_i\ x_i^2\mid y_i\,]\), row reduces it and draws the unique quadratic (or cubic) through the points. Make the three points collinear: the \(x^2\) coefficient becomes 0 and the "parabola" is a line.</p>`),
  widget("laInterp", { init: { k: 3 } }),

  section("📌 Common mistakes", watchOut([
    "In interpolation the unknowns are the coefficients aⱼ; the xᵢ are known numbers in the matrix.",
    "Count every external flow at a node, and decide carefully whether it goes in or out.",
    "A negative flow means the traffic actually goes the other way — not allowed on one-way streets.",
    "Balanced chemical equations use the smallest positive whole numbers: choose the parameter to clear fractions.",
    "In a loop, go around in one direction and use the same sign convention for every resistor and source.",
  ])),

  examples([
    ["A parabola through three points", S`Find the quadratic \(p(x)=a_0+a_1x+a_2x^2\) through \((1,2)\), \((2,3)\) and \((3,6)\).`,
      [S`<strong>Set up.</strong> Each point \((x_i,y_i)\) gives one linear equation \(a_0+a_1x_i+a_2x_i^2=y_i\) in the unknown coefficients: \(a_0+a_1+a_2=2\), \(a_0+2a_1+4a_2=3\), \(a_0+3a_1+9a_2=6\).`, ...steps([[1, 1, 1, 2], [1, 2, 4, 3], [1, 3, 9, 6]], [
        [S`Clear column 1: subtract row 1 from rows 2 and 3.`, ["R2-R1", "R3-R1"]],
        [S`Clear column 2 below the pivot of row 2.`, ["R3-2R2"]],
      ]).steps, S`<strong>Back substitution.</strong> Row 3: \(2a_2=2\), so \(a_2=1\). Row 2: \(a_1+3a_2=1\), so \(a_1=-2\). Row 1: \(a_0+a_1+a_2=2\), so \(a_0=3\).`, S`<strong>Check</strong> every point: \(p(1)=3-2+1=2\) ✓, \(p(2)=3-4+4=3\) ✓, \(p(3)=3-6+9=6\) ✓.`],
      S`\(p(x)=3-2x+x^2\)`, PARAB],
    ["Traffic around a block", S`Find all possible flows \(x_1,\dots,x_4\) in the network shown (cars per hour). What happens if street \(BC\) is closed for repairs?`,
      [S`<strong>One equation per node</strong> (in = out). Node \(A\): \(x_4+300=x_1+100\), so \(x_1-x_4=200\). Node \(B\): \(x_1+200=x_2+400\), so \(x_1-x_2=200\). Node \(C\): \(x_2+350=x_3+150\), so \(x_2-x_3=-200\). Node \(D\): \(x_3+100=x_4+300\), so \(x_3-x_4=200\).`, ...steps([[1, 0, 0, -1, 200], [1, -1, 0, 0, 200], [0, 1, -1, 0, -200], [0, 0, 1, -1, 200]], [
        [S`Clear column 1 below the pivot.`, ["R2-R1"]],
        [S`Make the pivot of row 2 equal to 1.`, ["R2*-1"]],
        [S`Clear column 2 below the pivot of row 2.`, ["R3-R2"]],
        [S`Make the pivot of row 3 equal to 1.`, ["R3*-1"]],
        [S`Clear column 3 below the pivot of row 3: row 4 becomes zero (the four node equations are not independent — total in = total out).`, ["R4-R3"]],
      ]).steps, S`<strong>Read the solution.</strong> Column 4 has no pivot, so \(x_4=t\) is free. Row 3: \(x_3=200+t\). Row 2: \(x_2=t\). Row 1: \(x_1=200+t\).`, S`<strong>Interpret.</strong> One-way streets need every \(x_i\ge0\), so \(t\ge0\). Closing \(BC\) forces \(x_2=0\), so \(t=0\): flows \((200,0,200,0)\). Check node \(A\): \(0+300=200+100\) ✓.`],
      S`\((x_1,x_2,x_3,x_4)=(200+t,\ t,\ 200+t,\ t)\), \(t\ge0\); with \(BC\) closed: \((200,0,200,0)\)`, fig(NETWORK, "")],
    ["Balancing a combustion", S`Balance \(x_1\,\mathrm{C_2H_5OH}+x_2\,\mathrm{O_2}\to x_3\,\mathrm{CO_2}+x_4\,\mathrm{H_2O}\).`,
      [S`<strong>One equation per element</strong> (atoms on the left minus atoms on the right = 0). Carbon: \(2x_1-x_3=0\). Hydrogen: \(6x_1-2x_4=0\). Oxygen: \(x_1+2x_2-2x_3-x_4=0\). A homogeneous system, so reduce the coefficient matrix.`, ...steps([[2, 0, -1, 0], [6, 0, 0, -2], [1, 2, -2, -1]], [
        [S`Bring the row with leading 1 to the top.`, ["R1<->R3"]],
        [S`Clear column 1.`, ["R2-6R1", "R3-2R1"]],
        [S`Swap so the smaller entry \(-4\) is the pivot of column 2.`, ["R2<->R3"]],
        [S`Clear column 2 below the pivot.`, ["R3-3R2"]],
      ], { bar: false, intro: "Coefficient matrix" }).steps, S`<strong>Back substitution</strong> with \(x_4=t\) free: row 3 gives \(3x_3=2t\), so \(x_3=\tfrac23t\); row 2 gives \(-4x_2+3x_3+2x_4=0\), so \(x_2=t\); row 1 gives \(x_1=-2x_2+2x_3+x_4=\tfrac13t\).`, S`<strong>Smallest whole numbers:</strong> \(t=3\) gives \((x_1,x_2,x_3,x_4)=(1,3,2,3)\). Check oxygen: \(1+6=4+3\) ✓; hydrogen: \(6=6\) ✓.`],
      S`\(\mathrm{C_2H_5OH}+3\,\mathrm{O_2}\to2\,\mathrm{CO_2}+3\,\mathrm{H_2O}\)`],
    ["Currents in a circuit", S`Find the currents \(I_1,I_2,I_3\) in the circuit shown (12 V source; resistors 2 Ω, 3 Ω, 6 Ω).`,
      [S`<strong>Equations.</strong> Junction (top node): \(I_1=I_2+I_3\), i.e. \(I_1-I_2-I_3=0\). Loop 1 (source, 2 Ω, 3 Ω): \(2I_1+3I_2=12\). Loop 2 (3 Ω and 6 Ω, no source): \(3I_2-6I_3=0\).`, ...steps([[1, -1, -1, 0], [2, 3, 0, 12], [0, 3, -6, 0]], [
        [S`Clear column 1 below the pivot.`, ["R2-2R1"]],
        [S`Row 3 has the simpler numbers in column 2; swap rows 2 and 3.`, ["R2<->R3"]],
        [S`Divide row 2 by 3.`, ["R2*1/3"]],
        [S`Clear the 5 below the pivot of row 2.`, ["R3-5R2"]],
      ], { intro: "Augmented matrix (unknowns \\(I_1,I_2,I_3\\))" }).steps, S`<strong>Back substitution.</strong> Row 3: \(12I_3=12\), so \(I_3=1\). Row 2: \(I_2-2I_3=0\), so \(I_2=2\). Row 1: \(I_1=I_2+I_3=3\).`, S`<strong>Check:</strong> \(2(3)+3(2)=12\) ✓ and \(3(2)-6(1)=0\) ✓.`],
      S`\(I_1=3\) A, \(I_2=2\) A, \(I_3=1\) A`, fig(CIRCUIT, "")],
    ["Temperatures in a plate", S`The edges of a square plate are held at 100° (top), 0° (bottom) and 50° (left and right). At steady state each interior temperature is the average of its four neighbours. Find \(T_1,\dots,T_4\).`,
      [S`\(T_1=\tfrac14(100+50+T_2+T_3)\), so \(4T_1-T_2-T_3=150\); similarly \(4T_2-T_1-T_4=150\), \(4T_3-T_1-T_4=50\), \(4T_4-T_2-T_3=50\).`, S`<strong>Use the symmetry.</strong> The left and right edges are both 50°, so the plate is symmetric: \(T_1=T_2\) and \(T_3=T_4\). Substituting into the first and third equations: \(4T_1-T_1-T_3=150\), i.e. \(3T_1-T_3=150\), and \(4T_3-T_1-T_3=50\), i.e. \(-T_1+3T_3=50\).`, ...steps([[3, -1, 150], [-1, 3, 50]], [
        [S`Swap so the simpler row comes first.`, ["R1<->R2"]],
        [S`Clear column 1 below the pivot.`, ["R2+3R1"]],
      ], { intro: "Augmented matrix (unknowns \\(T_1,T_3\\))" }).steps, S`<strong>Back substitution.</strong> Row 2: \(8T_3=300\), so \(T_3=37.5\). Row 1: \(-T_1+3(37.5)=50\), so \(T_1=62.5\).`, S`<strong>Check</strong> with the averaging rule: \(\tfrac14(100+50+62.5+37.5)=62.5\) ✓ and \(\tfrac14(0+50+62.5+37.5)=37.5\) ✓.`],
      S`\(T_1=T_2=62.5^\circ\), \(T_3=T_4=37.5^\circ\)`, fig(PLATE, "")],
  ]),

  practice([
    q("interpolate", S`The quadratic through \((0,1)\), \((1,2)\) and \((2,5)\) is \(p(x)\). Find \(p(3)\).`, num(10),
      "Find a₀, a₁, a₂ first.", [S`\(a_0=1\); \(a_1+a_2=1\); \(2a_1+4a_2=4\). So \(a_2=1\), \(a_1=0\).`, S`\(p(x)=1+x^2\), \(p(3)=10\).`], S`\(10\)`),
    q("balance", S`In the balanced equation \(2\,\mathrm{H_2}+x\,\mathrm{O_2}\to y\,\mathrm{H_2O}\), find \(x\).`, num(1),
      "Hydrogen gives y; then balance oxygen.", [S`Hydrogen: \(4=2y\), \(y=2\). Oxygen: \(2x=y=2\).`], S`\(1\)`),
    q("a node", S`At a junction, flows of 300 and \(x\) cars per hour enter and a flow of 450 leaves. Find \(x\).`, num(150),
      "In = out.", [S`\(300+x=450\).`], S`\(150\)`),
    q("a junction", S`At a junction \(I_1=I_2+I_3\). If \(I_2=2\) A and \(I_3=1.5\) A, find \(I_1\).`, num(3.5),
      "Kirchhoff's current law.", [S`\(2+1.5\).`], S`\(3.5\)`),
    q("why unique?", "Why is there exactly one quadratic through three points with different x-coordinates?", choice(["the 3 × 3 coefficient matrix has rank 3", "every system with three equations has one solution", "a quadratic has three coefficients", "the points are always collinear"], 0),
      "Think about the homogeneous system.", ["A nonzero quadratic cannot vanish at three different x, so only the trivial homogeneous solution exists and the rank is 3."], "the matrix has rank 3"),
  ]),

  ...hard([
    ["A cubic through four points", S`Find the cubic \(p(x)=a_0+a_1x+a_2x^2+a_3x^3\) through \((-1,-4)\), \((0,1)\), \((1,2)\), \((2,11)\).`,
      [S`Each point gives one linear equation in \(a_0,\dots,a_3\): \(p(0)=1\), \(p(-1)=-4\), \(p(1)=2\), \(p(2)=11\), i.e. \[${sys([[1, 0, 0, 0, 1], [1, -1, 1, -1, -4], [1, 1, 1, 1, 2], [1, 2, 4, 8, 11]], ["a_0", "a_1", "a_2", "a_3"])}\]`,
        ...steps([[1, 0, 0, 0, 1], [1, -1, 1, -1, -4], [1, 1, 1, 1, 2], [1, 2, 4, 8, 11]], [
          [S`Clear column 1 below the pivot.`, ["R2-R1", "R3-R1", "R4-R1"]],
          [S`Make the second pivot 1.`, ["R2*-1"]],
          [S`Clear column 2 below its pivot.`, ["R3-R2", "R4-2R2"]],
          [S`Make the third pivot 1.`, ["R3*1/2"]],
          [S`Clear column 3 below its pivot.`, ["R4-6R3"]],
          [S`Make the fourth pivot 1.`, ["R4*1/6"]],
          [S`Back substitute: clear column 4 above its pivot.`, ["R2-R4"]],
          [S`Clear column 3 above its pivot.`, ["R2+R3"]],
        ], { intro: "Write the augmented matrix" }).steps,
        S`So \(a_0=1\), \(a_1=1\), \(a_2=-2\), \(a_3=2\). Check: \(p(-1)=1-1-2-2=-4\) ✓, \(p(2)=1+2-8+16=11\) ✓.`],
      S`\(p(x)=1+x-2x^2+2x^3\)`],
    ["A harder reaction", S`Balance \(x_1\,\mathrm{KMnO_4}+x_2\,\mathrm{HCl}\to x_3\,\mathrm{KCl}+x_4\,\mathrm{MnCl_2}+x_5\,\mathrm{H_2O}+x_6\,\mathrm{Cl_2}\).`,
      [S`One equation per element (left minus right \(=0\)) — K: \(x_1-x_3=0\); Mn: \(x_1-x_4=0\); O: \(4x_1-x_5=0\); H: \(x_2-2x_5=0\); Cl: \(x_2-x_3-2x_4-2x_6=0\). A homogeneous system \(A\vec x=\vec 0\).`,
        ...steps([[1, 0, -1, 0, 0, 0, 0], [1, 0, 0, -1, 0, 0, 0], [4, 0, 0, 0, -1, 0, 0], [0, 1, 0, 0, -2, 0, 0], [0, 1, -1, -2, 0, -2, 0]], [
          [S`Clear column 1 below the pivot.`, ["R2-R1", "R3-4R1"]],
          [S`Column 2 has its nonzero entries in rows 4 and 5: bring row 4 up.`, ["R2<->R4"]],
          [S`Clear column 2 below its pivot.`, ["R5-R2"]],
          [S`Column 3: the pivot 4 is in row 3. Clear column 3 in rows 4 and 5.`, ["R4-1/4R3", "R5+1/4R3"]],
          [S`Column 4: pivot \(-1\) in row 4. Clear column 4 in row 5.`, ["R5-2R4"]],
        ], { intro: "Augmented matrix [A | 0]" }).steps,
        S`Five pivots for six unknowns: \(x_6=t\) is free. Back substitute from the bottom row up: row 5, \(\tfrac54x_5-2x_6=0\), gives \(x_5=\tfrac85t\); row 4, \(-x_4+\tfrac14x_5=0\), gives \(x_4=\tfrac25t\); row 3, \(4x_3-x_5=0\), gives \(x_3=\tfrac25t\); row 2, \(x_2-2x_5=0\), gives \(x_2=\tfrac{16}5t\); row 1, \(x_1-x_3=0\), gives \(x_1=\tfrac25t\).`,
        S`Clear the fraction with \(t=5\): \(\vec x=(2,16,2,2,8,5)\). Check every element: K \(2=2\), Mn \(2=2\), O \(8=8\), H \(16=16\), Cl \(16=2+4+10\) ✓.`],
      S`\(2\,\mathrm{KMnO_4}+16\,\mathrm{HCl}\to2\,\mathrm{KCl}+2\,\mathrm{MnCl_2}+8\,\mathrm{H_2O}+5\,\mathrm{Cl_2}\)`],
  ], [
    q("hard", S`In the traffic network of Example 2, the flow on \(DA\) is \(x_4=50\). Find \(x_3\).`, num(250),
      "x₃ = 200 + t with t = x₄.", [S`\(t=50\).`], S`\(250\)`),
    q("hard", S`The plate of Example 5 has its top edge at 80° and the other three edges at 0°. Find \(T_1\).`, num(30),
      "Use the symmetry T₁ = T₂, T₃ = T₄.", [S`\(3T_1-T_3=80\) and \(3T_3-T_1=0\).`, S`\(T_1=3T_3\), so \(8T_3=80\): \(T_3=10\), \(T_1=30\).`], S`\(30\)`),
    q("hard", "How many points (with different x-coordinates) determine a unique polynomial of degree at most 4?", num(5),
      "Count the unknown coefficients.", [S`\(a_0,\dots,a_4\): five unknowns, five equations.`], S`\(5\)`),
  ]),

  wrapUp({
    qas: [
      ["What are the unknowns when fitting a polynomial?", "Its coefficients. Each data point gives one linear equation in them."],
      ["Why must total inflow equal total outflow in a network?", "Adding all node equations cancels the internal flows; if the external totals differ, the system is inconsistent."],
      ["What do free variables mean in a traffic problem?", "Some flows can be chosen freely; constraints such as non-negative flows then limit the parameter."],
      ["Why is balancing a chemical equation homogeneous?", "Every equation says atoms on the left minus atoms on the right equals 0; any multiple of a solution is a solution, so pick the smallest whole numbers."],
      ["Where else do these models appear?", "Economics (input–output), structural engineering (forces in trusses), computer graphics, statistics and machine learning."],
    ],
    summary: [
      "Interpolation: one equation per point; distinct x's give a unique polynomial of degree ≤ k − 1.",
      "Networks: in = out at every node; free flows plus constraints.",
      "Chemistry: atoms balance → a homogeneous system; scale to whole numbers.",
      "Circuits: junction and loop laws give a solvable system for the currents.",
      "Heat: each interior temperature is the average of its neighbours.",
    ],
    next: "Chapter 3 introduces matrix algebra: products, transposes and the matrix form Ax = b behind everything in this chapter.",
  }),
];
