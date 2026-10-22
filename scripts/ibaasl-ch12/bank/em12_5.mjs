// 12.5 Graphs of Sine, Cosine and Tangent — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI, r3 = (v) => Math.round(v * 1000) / 1000;
const g = (curves, lines = [], ymin = -1.6, ymax = 1.6, xmin = 0, xmax = 2 * PI) => planeDoc({ view: { xmin, xmax, ymin, ymax }, curves, lines, step: { x: PI / 2, y: ymax > 2 ? 1 : 0.5 } });

export const E = [
  mc(S`The period of $y=\sin x$ is:`, S`$2\pi$`, [S`$\pi$`, S`$\frac{\pi}{2}$`, S`$4\pi$`], "One full turn."),
  mc(S`The period of $y=\tan x$ is:`, S`$\pi$`, [S`$2\pi$`, S`$\frac{\pi}{2}$`, S`$4\pi$`], "tan repeats every half-turn."),
  mc(S`The range of $y=\cos x$ is:`, S`$-1\le y\le1$`, [S`$0\le y\le1$`, "all real numbers", S`$-2\le y\le2$`], "x-coordinate on the unit circle."),
  mc(S`The maximum value of $y=\sin x$ is:`, "1", ["2", S`$\pi$`, S`$\frac{\pi}{2}$`], "Top of the unit circle."),
  mc(S`The graph of $y=\cos x$ meets the y-axis at:`, "(0, 1)", ["(0, 0)", "(0, −1)", "(1, 0)"], "cos 0 = 1."),
  num(S`How many zeros does $y=\sin x$ have for $0\le x\le2\pi$?`, 3, "0, π, 2π."),
  mc(S`On $[0,2\pi]$, the minimum of $y=\cos x$ occurs at:`, S`$x=\pi$`, [S`$x=\frac{\pi}{2}$`, S`$x=0$`, S`$x=\frac{3\pi}{2}$`], "cos π = −1."),
  mc(S`On $[0,2\pi]$, the maximum of $y=\sin x$ occurs at:`, S`$x=\frac{\pi}{2}$`, [S`$x=\pi$`, S`$x=0$`, S`$x=\frac{3\pi}{2}$`], "sin(π/2) = 1."),
  num(S`How many vertical asymptotes does $y=\tan x$ have for $0\le x\le2\pi$?`, 2, "x = π/2 and 3π/2."),
  mc(S`$y=\tan x$ is not defined at:`, S`$x=\frac{\pi}{2}$`, [S`$x=0$`, S`$x=\pi$`, S`$x=\frac{\pi}{4}$`], "cos x = 0 there."),
  tf(S`$\sin(-x)=-\sin x$, so the sine graph has rotational symmetry about the origin.`, true, "Odd function."),
  tf(S`The graph of $y=\cos x$ is symmetric about the y-axis.`, true, "Even function."),
  tf(S`$y=\tan x$ has a maximum value.`, false, "It takes every real value."),
  fill(S`The graph of $y=\cos x$ is the graph of $y=\sin x$ translated left by ___.`, ["π/2", "pi/2", "\\frac{\\pi}{2}"], "cos x = sin(x + π/2)."),
  ms("Which functions have period 2π? Select all.", [S`$y=\sin x$`, S`$y=\cos x$`, S`$y=\tan x$`, S`$y=-\sin x$`], [0, 1, 3], "tan has period π."),
  mc("The graph shown is:", S`$y=\cos x$`, [S`$y=\sin x$`, S`$y=\tan x$`, S`$y=-\cos x$`], "Starts at (0, 1).", g([{ f: Math.cos }])),
  mc("The graph shown, with two vertical asymptotes, is:", S`$y=\tan x$`, [S`$y=\sin x$`, S`$y=\cos x$`, S`$y=\frac{1}{x}$`], "Asymptotes at π/2 and 3π/2.", g([{ f: Math.tan }], [], -4, 4)),
  num(S`Find the value of $\sin\frac{3\pi}{2}$.`, -1, "Lowest point."),
  mc(S`For $0\le x\le\frac{\pi}{2}$, $y=\sin x$ is:`, "increasing", ["decreasing", "constant", "negative"], "Rises from 0 to 1."),
  mc(S`The zeros of $y=\cos x$ on $[0,2\pi]$ are:`, S`$\frac{\pi}{2},\frac{3\pi}{2}$`, [S`$0,\pi,2\pi$`, S`$\pi$ only`, S`$\frac{\pi}{4},\frac{5\pi}{4}$`], "Point (0, ±1) on the circle."),
];

export const M = [
  num(S`How many solutions does $\sin x=0.25$ have for $0\le x\le6\pi$?`, 6, "Two per period, three periods."),
  num(S`How many times do $y=\sin x$ and $y=\cos x$ meet for $0\le x\le2\pi$?`, 2, "π/4 and 5π/4."),
  mc(S`On which interval is $y=\cos x$ decreasing?`, S`$[0,\pi]$`, [S`$[\pi,2\pi]$`, S`$\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$`, S`$\left[\frac{\pi}{2},\frac{3\pi}{2}\right]$`], "From 1 down to −1."),
  mc(S`On which interval is $y=\sin x$ decreasing?`, S`$\left[\frac{\pi}{2},\frac{3\pi}{2}\right]$`, [S`$[0,\pi]$`, S`$\left[-\frac{\pi}{2},\frac{\pi}{2}\right]$`, S`$[\pi,2\pi]$`], "From the maximum to the minimum."),
  num(S`How many solutions does $\tan x=-1$ have for $0\le x\le3\pi$?`, 3, "3π/4, 7π/4, 11π/4."),
  mc(S`The vertical asymptotes of $y=\tan x$ are:`, S`$x=\frac{\pi}{2}+k\pi$`, [S`$x=k\pi$`, S`$x=2k\pi$`, S`$x=\frac{\pi}{4}+k\pi$`], "Where cos x = 0."),
  mc(S`Since $\sin(\pi-x)=\sin x$, the graph of $y=\sin x$ is symmetric about the line:`, S`$x=\frac{\pi}{2}$`, [S`$x=\pi$`, S`$y=0$`, S`$x=0$`], "Mirror the hump on [0, π]."),
  num(S`Find the sum of the zeros of $y=\cos x$ for $0\le x\le4\pi$ (3 d.p.).`, r3(8 * PI), "π/2 + 3π/2 + 5π/2 + 7π/2.", null, 0.001),
  mc("The graph shows y = sin x and y = cos x on [−π, π]. How many times do they meet?", "2", ["1", "3", "4"], "At π/4 and −3π/4.", g([{ f: Math.sin }, { f: Math.cos, color: "amber" }], [], -1.6, 1.6, -PI, PI)),
  mc("The graph shows y = tan x and y = −1 on (−π/2, 3π/2). The solutions are:", S`$-\frac{\pi}{4},\frac{3\pi}{4}$`, [S`$\frac{\pi}{4},\frac{5\pi}{4}$`, S`$-\frac{\pi}{4}$ only`, S`$\frac{3\pi}{4},\frac{7\pi}{4}$`], "Period π.", g([{ f: Math.tan }], [{ m: 0, b: -1, color: "amber", dash: true }], -4, 4, -PI / 2, (3 * PI) / 2)),
  tf(S`$y=\cos x$ has a turning point at every multiple of π.`, true, "Maximum at even multiples, minimum at odd."),
  tf(S`The graph of $y=\tan x$ passes through $\left(\frac{\pi}{4},1\right)$.`, true, "tan(π/4) = 1."),
  ms(S`Which functions are zero at $x=\pi$? Select all.`, [S`$\sin x$`, S`$\tan x$`, S`$\cos x$`, S`$\cos\frac{x}{2}$`], [0, 1, 3], "cos π = −1; cos(π/2) = 0."),
  num(S`Find the maximum value of $y=\sin x+2$.`, 3, "1 + 2."),
  num(S`How many maximum points does $y=\sin x$ have for $0\le x\le10\pi$?`, 5, "π/2, 5π/2, 9π/2, 13π/2, 17π/2."),
  mc(S`The graph of $y=|\sin x|$ has period:`, S`$\pi$`, [S`$2\pi$`, S`$\frac{\pi}{2}$`, S`$4\pi$`], "The negative humps flip up."),
  num(S`Find the first positive x with $\tan x=5$ (3 d.p.).`, r3(Math.atan(5)), "tan⁻¹ 5.", null, 0.001),
  num(S`For $0\le x\le2\pi$, find the total length of the interval where $\cos x<0$ (3 d.p.).`, r3(PI), "From π/2 to 3π/2.", null, 0.001),
  mc(S`Where does $\sin x=-\cos x$ for $0\le x\le2\pi$?`, S`$\frac{3\pi}{4},\frac{7\pi}{4}$`, [S`$\frac{\pi}{4},\frac{5\pi}{4}$`, S`$\frac{3\pi}{4},\frac{5\pi}{4}$`, S`$\frac{\pi}{4},\frac{3\pi}{4}$`], "tan x = −1."),
  num(S`For $0\le x\le2\pi$, find the total length of the interval where $\sin x>0.5$ (3 d.p.).`, r3((2 * PI) / 3), "From π/6 to 5π/6.", null, 0.001),
];
