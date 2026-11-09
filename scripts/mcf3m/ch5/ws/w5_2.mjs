// MCF3M Worksheet 5.2 — Problems with Two Right Triangles (teacher edition). Numbers computed in code.
import { svgT } from "../../ws/figT.mjs";
import { triD, sin, cos, tan, atan } from "../../figs.mjs";
const S = String.raw;
const f = (v) => v.toFixed(2);
const T = (pts, marks, extra) => svgT(triD(pts, [], { open: true, marks, extra }), 5.6);
const walk = (d, a1, a2) => d / (1 / tan(a1) - 1 / tan(a2));

const EXAMPLES = [
  { title: "Same side (depression)", q: S`From a $70$ m cliff, two buoys in line have angles of depression $48^\circ$ and $26^\circ$. How far apart are they?`,
    fig: T([[0, 70], [0, 0], [70 / tan(26), 0]], [[-12, 35, "70"]], [{ pts: [[0, 70], [70 / tan(48), 0]], color: "violet" }, { pts: [[0, 70], [70 / tan(26), 0]], color: "violet" }]),
    steps: [S`Near: $\frac{70}{\tan48^\circ}\approx${f(70 / tan(48))}$; far: $\frac{70}{\tan26^\circ}\approx${f(70 / tan(26))}$.`, S`Same side: subtract: $\approx${f(70 / tan(26) - 70 / tan(48))}$ m.`],
    ans: S`$\approx${f(70 / tan(26) - 70 / tan(48))}$ m` },
  { title: "Opposite sides", q: S`A $90$ m tower is seen from two points on opposite sides at $35^\circ$ and $50^\circ$. Distance between the points?`,
    fig: T([[-90 / tan(35), 0], [0, 0], [90 / tan(50), 0]], [[6, 45, "90"]], [{ pts: [[0, 0], [0, 90]], color: "red" }, { pts: [[-90 / tan(35), 0], [0, 90], [90 / tan(50), 0]], color: "violet" }]),
    steps: [S`$\frac{90}{\tan35^\circ}\approx${f(90 / tan(35))}$ and $\frac{90}{\tan50^\circ}\approx${f(90 / tan(50))}$.`, S`Add: $\approx${f(90 / tan(35) + 90 / tan(50))}$ m.`],
    ans: S`$\approx${f(90 / tan(35) + 90 / tan(50))}$ m` },
  { title: "Two buildings", q: S`From the top of a $24$ m building, the base of a taller building is at $40^\circ$ depression and its top at $32^\circ$ elevation. Find the taller building's height.`,
    fig: T([[0, 0], [0, 24], [24 / tan(40), 24 + (24 / tan(40)) * tan(32)], [24 / tan(40), 0]], [], [{ pts: [[0, 24], [24 / tan(40), 24]], color: "gray" }]),
    steps: [S`Gap $d=\frac{24}{\tan40^\circ}\approx${f(24 / tan(40))}$ m.`, S`Rise above eye level $d\tan32^\circ\approx${f((24 / tan(40)) * tan(32))}$ m.`, S`Total $\approx${f(24 + (24 / tan(40)) * tan(32))}$ m.`],
    ans: S`$\approx${f(24 + (24 / tan(40)) * tan(32))}$ m` },
  { title: "Walking toward", q: S`The elevation of a hilltop changes from $20^\circ$ to $34^\circ$ after walking $150$ m closer. Find the hill's height.`,
    fig: T([[-walk(150, 20, 34) / tan(20), 0], [0, 0], [0, walk(150, 20, 34)]], [], [{ pts: [[-walk(150, 20, 34) / tan(34), 0], [0, walk(150, 20, 34)]], color: "violet" }]),
    steps: [S`$x=\frac h{\tan34^\circ}$, $x+150=\frac h{\tan20^\circ}$.`, S`$150=h\left(\frac1{\tan20^\circ}-\frac1{\tan34^\circ}\right)\Rightarrow h\approx${f(walk(150, 20, 34))}$ m.`],
    ans: S`$\approx${f(walk(150, 20, 34))}$ m` },
  { title: "A shared leg", q: S`$\triangle ABD$ and $\triangle CBD$ are right-angled at $D$, with $BD$ common. $AB=12$, $\angle A=40^\circ$, $\angle C=65^\circ$. Find $AC$.`,
    fig: svgT(triD([[0, 0], [12 * cos(40), 12 * sin(40)], [12 * cos(40) + (12 * sin(40)) / tan(65), 0]], ["A", "B", "C"], { extra: [{ pts: [[12 * cos(40), 12 * sin(40)], [12 * cos(40), 0]], color: "red" }] }), 5.6),
    steps: [S`$BD=12\sin40^\circ\approx${f(12 * sin(40))}$; $AD=12\cos40^\circ\approx${f(12 * cos(40))}$.`, S`$DC=\frac{BD}{\tan65^\circ}\approx${f((12 * sin(40)) / tan(65))}$.`, S`$AC\approx${f(12 * cos(40) + (12 * sin(40)) / tan(65))}$.`],
    ans: S`$\approx${f(12 * cos(40) + (12 * sin(40)) / tan(65))}$` },
  { title: "Above and below eye level", q: S`From $35$ m away, a billboard's top is at $28^\circ$ elevation and bottom at $12^\circ$ elevation. Find its height.`,
    fig: T([[0, 0], [35, 0], [35, 35 * tan(28)]], [], [{ pts: [[0, 0], [35, 35 * tan(12)]], color: "violet" }, { pts: [[0, 0], [35, 35 * tan(28)]], color: "violet" }]),
    steps: [S`Top $35\tan28^\circ\approx${f(35 * tan(28))}$; bottom $35\tan12^\circ\approx${f(35 * tan(12))}$.`, S`Height $\approx${f(35 * tan(28) - 35 * tan(12))}$ m.`],
    ans: S`$\approx${f(35 * tan(28) - 35 * tan(12))}$ m` },
  { title: "Helicopter between two points", q: S`A helicopter is directly above a road between towns $A$ and $B$, $6$ km apart. Angles of depression to $A$ and $B$ are $25^\circ$ and $40^\circ$. Find its height.`,
    fig: T([[0, 0], [6, 0]], [[0, -0.4, "A"], [6, -0.4, "B"]], [{ pts: [[0, 0], [6 / (1 + tan(25) / tan(40)), 6 * tan(25) / (1 + tan(25) / tan(40))], [6, 0]], color: "violet" }]),
    steps: [S`$x\tan25^\circ=(6-x)\tan40^\circ=h$.`, S`$x=\frac{6\tan40^\circ}{\tan25^\circ+\tan40^\circ}\approx${f((6 * tan(40)) / (tan(25) + tan(40)))}$.`, S`$h\approx${f(((6 * tan(40)) / (tan(25) + tan(40))) * tan(25))}$ km.`],
    ans: S`$\approx${f(((6 * tan(40)) / (tan(25) + tan(40))) * tan(25))}$ km` },
  { title: "Two ladders", q: S`Two ladders lean on the same wall from the same point on the ground: one at $60^\circ$ reaching $5.2$ m, the other at $45^\circ$. How much lower does the second reach?`,
    fig: T([[5.2 / tan(60), 0], [0, 0], [0, 5.2]], [], [{ pts: [[5.2 / tan(60), 0], [0, 5.2 / tan(60)]], color: "violet" }]),
    steps: [S`Distance from wall $\frac{5.2}{\tan60^\circ}\approx${f(5.2 / tan(60))}$ m.`, S`Second height $\approx${f(5.2 / tan(60))}\tan45^\circ=${f(5.2 / tan(60))}$ m.`, S`Difference $\approx${f(5.2 - 5.2 / tan(60))}$ m.`],
    ans: S`$\approx${f(5.2 - 5.2 / tan(60))}$ m` },
  { title: "Kite and observer", q: S`A kite is $45$ m high. Two observers in line on the same side see it at $55^\circ$ and $30^\circ$. Distance between them?`,
    fig: T([[0, 45], [0, 0], [45 / tan(30), 0]], [], [{ pts: [[0, 45], [45 / tan(55), 0]], color: "violet" }, { pts: [[0, 45], [45 / tan(30), 0]], color: "violet" }]),
    steps: [S`$\frac{45}{\tan30^\circ}-\frac{45}{\tan55^\circ}\approx${f(45 / tan(30))}-${f(45 / tan(55))}$.`, S`$\approx${f(45 / tan(30) - 45 / tan(55))}$ m.`],
    ans: S`$\approx${f(45 / tan(30) - 45 / tan(55))}$ m` },
];

const PROBLEMS = [
  { level: 1, q: S`From a $50$ m tower, a car is at $30^\circ$ depression. How far is it from the base?`, ans: S`$\approx${f(50 / tan(30))}$ m` },
  { level: 1, q: S`A $100$ m cliff: boats at $45^\circ$ and $30^\circ$ depression, same side. Distance apart?`, ans: S`$\approx${f(100 / tan(30) - 100)}$ m` },
  { level: 1, q: S`A $60$ m pole is seen from opposite sides at $40^\circ$ and $55^\circ$. Distance between observers?`, ans: S`$\approx${f(60 / tan(40) + 60 / tan(55))}$ m` },
  { level: 2, q: S`Walking $50$ m closer changes the elevation of a tower top from $25^\circ$ to $40^\circ$. Find the height.`, ans: S`$\approx${f(walk(50, 25, 40))}$ m` },
  { level: 2, q: S`From the top of a $30$ m building, a taller building's base is at $35^\circ$ depression and top at $20^\circ$ elevation. Height?`, ans: S`$\approx${f(30 + (30 / tan(35)) * tan(20))}$ m` },
  { level: 2, q: S`A $15$ m flagpole stands on a building. From $60$ m away the top of the pole is at $40^\circ$. Find the building's height.`, ans: S`$\approx${f(60 * tan(40) - 15)}$ m` },
  { level: 2, q: S`$AB=20$, $\angle A=35^\circ$, $BD\perp AC$, $\angle C=55^\circ$. Find $AC$.`, ans: S`$\approx${f(20 * cos(35) + (20 * sin(35)) / tan(55))}$` },
  { level: 2, q: S`A plane at $2000$ m sees two ships on the same side at $20^\circ$ and $35^\circ$ depression. Distance apart?`, ans: S`$\approx${f(2000 / tan(20) - 2000 / tan(35))}$ m` },
  { level: 3, space: 5, q: S`A helicopter is above a straight road between points $4$ km apart, with angles of depression $30^\circ$ and $50^\circ$. Find its height.`, ans: S`$\approx${f(((4 * tan(50)) / (tan(30) + tan(50))) * tan(30))}$ km` },
  { level: 3, space: 5, q: S`From a window $12$ m high, the top of a building across the street is at $38^\circ$ elevation and its base at $25^\circ$ depression. Find the building's height and the street's width.`, ans: S`width $\approx${f(12 / tan(25))}$; height $\approx${f(12 + (12 / tan(25)) * tan(38))}$` },
  { level: 3, space: 5, q: S`Walking $80$ m toward a cliff, the elevation changes from $18^\circ$ to $27^\circ$. How much farther to the cliff's base?`, ans: S`$\approx${f(walk(80, 18, 27) / tan(27))}$ m` },
  { level: 3, space: 5, q: S`Explain why you subtract distances when two objects are on the same side of a tower and add when they are on opposite sides. Draw both cases.`, ans: S`distances measured from the same foot` },
  { level: 3, space: 5, q: S`A $40$ m lighthouse stands on a cliff. From a boat, the top of the lighthouse is at $30^\circ$ and the top of the cliff at $22^\circ$. Find the cliff's height.`, ans: S`$x(\tan30^\circ-\tan22^\circ)=40$: cliff $\approx${f((40 / (tan(30) - tan(22))) * tan(22))}$ m` },
];

export const WS = {
  code: "5.2",
  title: "Problems with Two Right Triangles",
  bigideas: S`Many height and distance problems split into two right triangles sharing a side. Solve the triangle with enough information first, then use the shared side in the other. Distances on the same side of a height are subtracted; on opposite sides they are added. “Walking toward” problems give two equations in the height and an unknown distance.`,
  goals: ["Draw two-triangle diagrams.", "Identify the shared side.", "Combine by adding or subtracting.", "Solve walking-toward problems."],
  curriculum: "C1.2",
  vocab: [["Shared side", "common to both triangles"], ["Same side", "subtract"], ["Opposite sides", "add"], ["Alternate angles", "depression = elevation"]],
  hook: S`How could you find the distance between two boats from a cliff, using only a clinometer?`,
  concepts: [
    ["1. Strategy", S`Diagram $\to$ shared side $\to$ first triangle $\to$ second triangle $\to$ combine $\to$ check.
${T([[-60, 0], [0, 0], [100, 0]], [], [{ pts: [[0, 0], [0, 50]], color: "red" }, { pts: [[-60, 0], [0, 50], [100, 0]], color: "violet" }])}`],
    ["2. Walking toward", S`$x=\frac h{\tan\beta}$, $x+d=\frac h{\tan\alpha}$; subtract: $h=\frac{d}{\frac1{\tan\alpha}-\frac1{\tan\beta}}$.`],
  ],
  tips: ["Keep full precision.", "Mark right angles clearly.", "Check which point is farther (smaller angle)."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
