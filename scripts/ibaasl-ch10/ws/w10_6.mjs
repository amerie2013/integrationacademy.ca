// IB AA SL Worksheet 10.6 — Kinematics with Integration (teacher edition)
import { F, pt, svgT } from "./figT.mjs";
import { areaDoc } from "../figs10.mjs";

const S = String.raw;
const v2 = (t) => t * t - 4 * t + 3;

const EXAMPLES = [
  { title: "Velocity from acceleration", q: S`$a(t)=6t+2$ and $v(0)=-3$. Find $v(t)$.`,
    steps: [S`$v=3t^2+2t+C$; $C=-3$.`], ans: S`$v(t)=3t^2+2t-3$` },
  { title: "Position from velocity", q: S`$v(t)=4t-1$ and $s(0)=6$. Find $s(t)$ and $s(3)$.`,
    steps: [S`$s=2t^2-t+6$.`], ans: S`$s(3)=21$` },
  { title: "Displacement", q: S`$v(t)=t^2+1$. Find the displacement from $t=0$ to $t=3$.`,
    steps: [S`$\left[\frac13t^3+t\right]_0^3$.`], ans: "12" },
  { title: "When at rest", q: S`$v(t)=t^2-4t+3$. When is the particle at rest?`,
    fig: F({ view: { xmin: -0.3, xmax: 4.5, ymin: -2, ymax: 4 }, curves: [{ f: v2 }], points: [pt(1, 0, "", "red"), pt(3, 0, "", "red")], xlabel: "t", ylabel: "v" }, 5.8),
    steps: [S`$(t-1)(t-3)=0$.`], ans: S`$t=1$ and $t=3$` },
  { title: "Distance", q: S`For $v(t)=t^2-4t+3$, find the distance travelled from $t=0$ to $t=4$.`,
    fig: svgT(areaDoc({ view: { xmin: -0.3, xmax: 4.5, ymin: -2, ymax: 4 }, step: { x: 1, y: 1 }, curves: [{ f: v2 }], xlabel: "t", ylabel: "v" }, [{ f: v2, a: 0, b: 1, color: "green" }, { f: v2, a: 1, b: 3, color: "red" }, { f: v2, a: 3, b: 4, color: "green" }]), 5.8),
    steps: [S`Pieces: $\frac43$, $-\frac43$, $\frac43$.`], ans: "4 (displacement 4/3)" },
  { title: "Exponential velocity", q: S`$v(t)=5e^{-t}$. Find the displacement in the first 2 seconds.`,
    steps: [S`$\left[-5e^{-t}\right]_0^2=5-5e^{-2}$.`], ans: S`$\approx4.323$` },
  { title: "Reading a v–t graph", q: "A particle moves at 4 m/s for 3 s, then slows uniformly to rest over 2 s. Find the distance.",
    steps: ["Rectangle 12 + triangle 4."], ans: "16 m" },
  { title: "Two integrations", q: S`$a(t)=-10$, $v(0)=20$, $s(0)=0$. When does the particle return to $s=0$?`,
    steps: [S`$v=20-10t$, $s=20t-5t^2=5t(4-t)$.`], ans: S`$t=4$` },
  { title: "GDC distance", q: S`Use a GDC to find the distance travelled when $v(t)=e^{t}-3$ for $0\le t\le2$.`,
    steps: [S`$\int_0^2|e^t-3|\,dt$.`], ans: S`$\approx2.98$` },
];

const PROBLEMS = [
  { level: 1, q: S`$v(t)=8t$. Find the displacement from $t=1$ to $t=3$.`, recap: "Integrate v.", ans: "32" },
  { level: 1, q: S`$a(t)=4$ and $v(0)=2$. Find $v(5)$.`, recap: "Integrate a.", ans: "22" },
  { level: 1, q: S`$v(t)=3t^2$ and $s(0)=-5$. Find $s(2)$.`, recap: "Integrate v, then use s(0).", ans: "3" },
  { level: 2, q: S`$v(t)=2t-8$. Find the distance travelled from $t=0$ to $t=6$.`, recap: "Split at 4.", ans: "20" },
  { level: 2, q: S`$v(t)=6-3t$. Find the displacement and distance from $t=0$ to $t=4$.`, recap: "Split at 2.", ans: "0; 12" },
  { level: 2, q: S`$a(t)=6t-6$, $v(0)=3$. Find when the velocity is minimum and its value.`, recap: "a = 0.", ans: S`$t=1$; $v=0$` },
  { level: 2, q: S`$v(t)=\frac{2}{t+1}$. Find the displacement from $t=0$ to $t=3$.`, recap: "ln.", ans: S`$2\ln4\approx2.773$` },
  { level: 2, q: S`Shade the displacement on the v–t graph of $v=4-t$ for $0\le t\le6$ and find it.`, recap: "Signed area.", ans: "6 (8 forward, 2 back)",
    fig: F({ view: { xmin: -0.3, xmax: 6.5, ymin: -3, ymax: 5 }, xlabel: "t", ylabel: "v" }, 5) },
  { level: 3, space: 4, q: S`$a(t)=12-6t$, $v(0)=0$, $s(0)=0$. Find the distance travelled from $t=0$ to $t=5$.`, recap: S`$v=12t-3t^2$; zero at 4.`, ans: S`$32+7=39$` },
  { level: 3, space: 4, q: S`Particles A and B start at the origin with $v_A=2t+1$ and $v_B=4$. When do they meet again?`, recap: S`$s_A=s_B$.`, ans: S`$t^2+t=4t\Rightarrow t=3$` },
  { level: 3, space: 4, q: S`$v(t)=t^3-4t$ for $0\le t\le3$. Find the distance travelled.`, recap: "Split at 2.", ans: S`$4+\frac{25}4=\frac{41}4$` },
  { level: 3, space: 4, q: S`A car decelerates from 30 m/s with $a=-2t$. How far does it travel before stopping?`, recap: S`$v=30-t^2$.`, ans: S`stops at $t=\sqrt{30}$; distance $20\sqrt{30}\approx109.5$ m` },
  { level: 3, space: 4, q: S`Explain why total distance is greater than displacement whenever the particle changes direction.`, recap: "Backward parts.", ans: "backward motion subtracts from displacement but adds to distance" },
];

export const WS = {
  code: "10.6",
  title: "Kinematics with Integration",
  bigideas: S`$v=\int a\,dt$ and $s=\int v\,dt$, with constants from initial conditions. Displacement $=\int_{t_1}^{t_2}v\,dt$ (signed area under the v–t graph); distance $=\int_{t_1}^{t_2}|v|\,dt$ — split where $v=0$ and add the sizes. A GDC can evaluate $\int|v|\,dt$ directly.`,
  goals: ["Integrate a and v.", "Use initial conditions.", "Find displacement and distance.", "Read v–t graphs."],
  curriculum: "SL 5.9",
  vocab: [["Displacement", S`$\int v\,dt$`], ["Distance", S`$\int|v|\,dt$`], ["Initial condition", S`value at $t=0$`]],
  hook: "A runner jogs 400 m out and 400 m back along a straight path. What is their displacement? Their distance?",
  concepts: [
    ["1. Chain", S`$a\to v\to s$ by integrating.`],
    ["2. Areas", S`${svgT(areaDoc({ view: { xmin: -0.3, xmax: 4.5, ymin: -2, ymax: 4 }, step: { x: 1, y: 1 }, curves: [{ f: v2 }], xlabel: "t", ylabel: "v" }, [{ f: v2, a: 0, b: 1, color: "green" }, { f: v2, a: 1, b: 3, color: "red" }, { f: v2, a: 3, b: 4, color: "green" }]), 4.8)} Green forward, red back.`],
    ["3. Distance", "Split at v = 0."],
  ],
  tips: ["Use initial conditions.", "s(0) is a position.", "Find v = 0 first.", "Distance ≥ |displacement|.", "Use |v| on a GDC."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
