// MCV4U authored lessons. Each unit module exports an object keyed by lesson code;
// merged into `authored`, which seed-mcv4u.mjs uses to override scaffolds.
import { u1 } from "./mcv4u-lessons-u1.mjs";
import { u2 } from "./mcv4u-lessons-u2.mjs";
import { u3 } from "./mcv4u-lessons-u3.mjs";
import { u4 } from "./mcv4u-lessons-u4.mjs";
import { u5 } from "./mcv4u-lessons-u5.mjs";
import { u6 } from "./mcv4u-lessons-u6.mjs";
import { u7 } from "./mcv4u-lessons-u7.mjs";

export const authored = {};
Object.assign(authored, u1); // Unit 1 — Rates of Change & Limits
Object.assign(authored, u2); // Unit 2 — Derivative Rules
Object.assign(authored, u3); // Unit 3 — Derivatives of Transcendental Functions
Object.assign(authored, u4); // Unit 4 — Curve Sketching
Object.assign(authored, u5); // Unit 5 — Applications of Derivatives
Object.assign(authored, u6); // Unit 6 — Geometry & Algebra of Vectors
Object.assign(authored, u7); // Unit 7 — Lines & Planes
