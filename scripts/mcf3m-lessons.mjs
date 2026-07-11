// MCF3M authored lessons. Each unit module exports an object keyed by lesson code;
// they are merged into `authored`, which seed-mcf3m.mjs uses to override scaffolds.
import { u1 } from "./mcf3m-lessons-u1.mjs";
import { u2 } from "./mcf3m-lessons-u2.mjs";
import { u3 } from "./mcf3m-lessons-u3.mjs";
import { u4 } from "./mcf3m-lessons-u4.mjs";
import { u5 } from "./mcf3m-lessons-u5.mjs";
import { u6 } from "./mcf3m-lessons-u6.mjs";

export const authored = {};
Object.assign(authored, u1); // Unit 1 — Quadratic Expressions & Equations
Object.assign(authored, u2); // Unit 2 — Quadratic Functions
Object.assign(authored, u3); // Unit 3 — Exponential Functions
Object.assign(authored, u4); // Unit 4 — Financial Mathematics
Object.assign(authored, u5); // Unit 5 — Trigonometry
Object.assign(authored, u6); // Unit 6 — Sine Functions
