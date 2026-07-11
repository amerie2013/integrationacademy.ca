// MBF3C authored lessons. Each unit module exports an object keyed by lesson code;
// merged into `authored`, which seed-mbf3c.mjs uses to override scaffolds.
import { u1 } from "./mbf3c-lessons-u1.mjs";
import { u2 } from "./mbf3c-lessons-u2.mjs";
import { u3 } from "./mbf3c-lessons-u3.mjs";
import { u4 } from "./mbf3c-lessons-u4.mjs";
import { u5 } from "./mbf3c-lessons-u5.mjs";

export const authored = {};
Object.assign(authored, u1); // Unit 1 — Quadratic Relations
Object.assign(authored, u2); // Unit 2 — Exponential Relations
Object.assign(authored, u3); // Unit 3 — Personal Finance
Object.assign(authored, u4); // Unit 4 — Geometry & Trigonometry
Object.assign(authored, u5); // Unit 5 — Data Management
