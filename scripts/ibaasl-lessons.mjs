// IB AA SL authored lessons. Each unit module exports an object keyed by lesson
// code; merged into `authored`, which seed-ibaasl.mjs uses to override scaffolds.
// All 7 units are now fully authored.
import { u1 } from "./ibaasl-lessons-u1.mjs";
import { u2 } from "./ibaasl-lessons-u2.mjs";
import { u3 } from "./ibaasl-lessons-u3.mjs";
import { u4 } from "./ibaasl-lessons-u4.mjs";
import { u5 } from "./ibaasl-lessons-u5.mjs";
import { u6 } from "./ibaasl-lessons-u6.mjs";
import { u7 } from "./ibaasl-lessons-u7.mjs";

export const authored = {};
Object.assign(authored, u1); // Unit 1 — Number & Algebra
Object.assign(authored, u2); // Unit 2 — Functions
Object.assign(authored, u3); // Unit 3 — Geometry & Trigonometry
Object.assign(authored, u4); // Unit 4 — Statistics & Probability
Object.assign(authored, u5); // Unit 5 — Differential Calculus
Object.assign(authored, u6); // Unit 6 — Integral Calculus
Object.assign(authored, u7); // Unit 7 — The Exploration (IA)
