// IB AA SL Worksheet 12.2 — The Unit Circle and Exact Values (teacher edition)
import { svgT } from "./figT.mjs";
import { figDoc, unitPoint } from "../figs12.mjs";

const S = String.raw;
const T = (items, w = 4.8) => svgT(figDoc({ items }), w);
const PI = Math.PI;

const EXAMPLES = [
  { title: "Coordinates on the unit circle", q: S`Find the coordinates of the point at angle $\frac{3\pi}{4}$ on the unit circle.`,
    fig: T(unitPoint((3 * PI) / 4, { label: "3π/4" })),
    steps: [S`Reference $\frac{\pi}{4}$; quadrant 2.`], ans: S`$\left(-\frac{\sqrt2}2,\frac{\sqrt2}2\right)$` },
  { title: "Exact value", q: S`Find $\cos\frac{7\pi}{6}$ and $\tan\frac{7\pi}{6}$.`,
    steps: [S`Quadrant 3, reference $\frac{\pi}{6}$.`], ans: S`$-\frac{\sqrt3}2$; $\frac{\sqrt3}{3}$` },
  { title: "Negative angle", q: S`Find $\cos\left(-\frac{2\pi}{3}\right)$.`,
    steps: [S`$-\frac{2\pi}3$ is in quadrant 3.`], ans: S`$-\frac12$` },
  { title: "Large angle", q: S`Find $\sin\frac{19\pi}{6}$.`,
    steps: [S`$\frac{19\pi}{6}-2\pi=\frac{7\pi}6$.`], ans: S`$-\frac12$` },
  { title: "Signs", q: S`In which quadrant is θ if $\sin\theta<0$ and $\tan\theta>0$?`,
    steps: ["CAST: tan only positive in quadrant 3."], ans: "3" },
  { title: "Other ratios", q: S`Given $\cos\theta=\frac{5}{13}$ and $\frac{3\pi}{2}<\theta<2\pi$, find $\sin\theta$ and $\tan\theta$.`,
    fig: T(unitPoint(2 * PI - Math.acos(5 / 13), { label: "θ" })),
    steps: [S`$\sin\theta=-\frac{12}{13}$ (quadrant 4).`], ans: S`$-\frac{12}{13}$; $-\frac{12}{5}$` },
  { title: "From tan", q: S`Given $\tan\theta=\frac{7}{24}$ and $\pi<\theta<\frac{3\pi}{2}$, find $\cos\theta$.`,
    steps: ["7-24-25 triangle; quadrant 3."], ans: S`$-\frac{24}{25}$` },
  { title: "Solve on the unit circle", q: S`Find θ in $[0,2\pi]$ with $\sin\theta=-\frac{\sqrt2}{2}$.`,
    steps: [S`Reference $\frac{\pi}4$; quadrants 3 and 4.`], ans: S`$\frac{5\pi}4$, $\frac{7\pi}4$` },
  { title: "Related angles", q: S`Given $\cos\alpha=0.4$ (α acute), find $\cos(\pi-\alpha)$ and $\cos(2\pi-\alpha)$.`,
    steps: ["Quadrants 2 and 4."], ans: S`$-0.4$; $0.4$` },
];

const PROBLEMS = [
  { level: 1, q: S`Find $\sin\frac{5\pi}{4}$.`, recap: "Quadrant 3.", ans: S`$-\frac{\sqrt2}{2}$` },
  { level: 1, q: S`Find $\cos\pi$ and $\sin\pi$.`, recap: "Point (−1, 0).", ans: S`$-1$, $0$` },
  { level: 1, q: S`State the sign of $\tan\frac{2\pi}{3}$.`, recap: "Quadrant 2.", ans: "negative" },
  { level: 2, q: S`Find the exact value of $\tan\frac{11\pi}{6}$.`, recap: "Quadrant 4.", ans: S`$-\frac{\sqrt3}{3}$` },
  { level: 2, q: S`Find the exact value of $\cos\frac{13\pi}{4}$.`, recap: "Subtract 2π.", ans: S`$-\frac{\sqrt2}{2}$` },
  { level: 2, q: S`$\sin\theta=-\frac35$, θ in quadrant 3. Find $\cos\theta$.`, recap: "3-4-5.", ans: S`$-\frac45$` },
  { level: 2, q: S`Find all θ in $[0,2\pi]$ with $\tan\theta=-\sqrt3$.`, recap: "Quadrants 2, 4.", ans: S`$\frac{2\pi}3$, $\frac{5\pi}3$` },
  { level: 2, q: S`Mark the point for $\theta=\frac{5\pi}{3}$ and write its exact coordinates.`, recap: "Quadrant 4.", ans: S`$\left(\frac12,-\frac{\sqrt3}2\right)$`,
    fig: T(unitPoint((5 * PI) / 3, { label: "5π/3", ref: false }), 4.2) },
  { level: 3, space: 4, q: S`Evaluate exactly $\sin\frac{\pi}{3}+\cos\frac{5\pi}{6}+\tan\frac{\pi}{4}$.`, recap: "Combine.", ans: "1" },
  { level: 3, space: 4, q: S`Given $\sin\theta=k$ with θ in quadrant 2, write $\cos\theta$ and $\tan\theta$ in terms of k.`, recap: "Pythagoras.", ans: S`$-\sqrt{1-k^2}$; $-\frac{k}{\sqrt{1-k^2}}$` },
  { level: 3, space: 4, q: S`Show that $\sin\left(\theta+\pi\right)=-\sin\theta$ using the unit circle.`, recap: "Half-turn.", ans: "adding π moves the point to the opposite side, negating both coordinates" },
  { level: 3, space: 4, q: S`How many angles θ in $[-2\pi,2\pi]$ satisfy $\cos\theta=\frac12$? List them.`, recap: "Two per turn.", ans: S`4: $\pm\frac{\pi}{3}$, $\pm\frac{5\pi}{3}$` },
  { level: 3, space: 4, q: S`A point P on the unit circle has y-coordinate $-0.6$ and lies in quadrant 3. Find the angle (rad, 3 d.p.).`, recap: "π + reference.", ans: S`$\pi+\sin^{-1}0.6\approx3.785$` },
];

export const WS = {
  code: "12.2",
  title: "The Unit Circle and Exact Values",
  bigideas: S`The point at angle θ (anticlockwise from the positive x-axis) on the unit circle is $(\cos\theta,\sin\theta)$, and $\tan\theta=\frac{\sin\theta}{\cos\theta}$. Signs follow CAST (cos, all, sin, tan positive in quadrants 4, 1, 2, 3). Use the reference angle and the exact values for $\frac\pi6,\frac\pi4,\frac\pi3$.`,
  goals: ["Read cos and sin from the unit circle.", "Use CAST.", "Find exact values.", "Find other ratios from one."],
  curriculum: "SL 3.5",
  vocab: [["Unit circle", "radius 1"], ["Reference angle", "acute angle to the x-axis"], ["CAST", "signs by quadrant"]],
  hook: "A Ferris wheel seat starts level with the hub. How can we describe its height for any angle the wheel turns?",
  concepts: [
    ["1. Coordinates", S`${T(unitPoint(PI / 6, { label: "π/6" }), 4.2)} $(\cos\theta,\sin\theta)$.`],
    ["2. CAST", "Signs by quadrant."],
    ["3. Exact values", "π/6, π/4, π/3."],
  ],
  tips: ["Reference angle to the x-axis.", "Sign from the quadrant.", "Add/subtract 2π.", "tan undefined at π/2.", "Draw the circle."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
