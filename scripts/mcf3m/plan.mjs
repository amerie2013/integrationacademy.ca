// MCF3M (Functions and Applications, Grade 11) — 8-chapter self-study layout chosen by the user on 2026-11-08.
// Each lesson: [code, title, lesson id]. Ids of the 24 lessons that existed before are kept (their content is
// rebuilt chapter by chapter); brand-new lessons get fixed ids c3f30000-0001-4001-8001-000000000CLL.
// `old` = the code the lesson had before the restructure (bank topics / assignments / worksheets are renamed from it).
export const CID = "9b5d2c58-858e-4609-a021-005c72bde403";
export const COURSE = "Functions and Applications, Grade 11 (MCF3M)";

export const CHAPTERS = {
  1: "Functions and Quadratic Transformations",
  2: "Quadratic Expressions",
  3: "Quadratic Equations and the Factored Form",
  4: "Vertex Form and the Quadratic Formula",
  5: "Trigonometry of Acute Triangles",
  6: "Sinusoidal Functions",
  7: "Exponential Functions",
  8: "Financial Applications",
};

const N = (c) => `c3f30000-0001-4001-8001-000000000${c.replace(".", "").padStart(3, "0")}`;
export const newId = N;
/** fixed ids for assignments that did not exist before */
export const newAsgId = (c) => `c3f30000-0001-4001-8001-0000000a${c.replace(".", "").padStart(4, "0")}`;

export const LESSONS = [
  // code, title, id, old code
  ["1.1", "Relations and Functions", "91306b8a-caeb-4ce6-862a-8f4e2c832f20", "2.1"],
  ["1.2", "Function Notation", N("1.02"), null],
  ["1.3", "Domain and Range", N("1.03"), null],
  ["1.4", "Comparing Linear and Quadratic Relations", N("1.04"), null],
  ["1.5", "Transformations of Quadratic Functions", "b533b393-dee8-427b-9142-9f19547c23cc", "2.2"],
  ["1.6", "Graphing Quadratics in Vertex Form", N("1.06"), null],
  ["1.7", "Chapter 1 Review", N("1.07"), null],

  ["2.1", "Expanding and Simplifying Quadratic Expressions", "8a87946f-e9b2-4c21-98ec-76692b1c4693", "1.1"],
  ["2.2", "Common Factoring", N("2.02"), null],
  ["2.3", "Factoring Simple Trinomials", "06d0d94e-a7f0-41e3-aeec-aff733803a8a", "1.2"],
  ["2.4", "Factoring Complex Trinomials", N("2.04"), null],
  ["2.5", "Factoring Special Quadratics", N("2.05"), null],
  ["2.6", "Chapter 2 Review", N("2.06"), null],

  ["3.1", "Standard and Factored Forms", "e7b120a0-978e-44e8-9698-1a32487472f1", "2.4"],
  ["3.2", "Solving Quadratic Equations by Graphing", "ca13e34c-dd9a-4fff-8ebf-ed81606e4350", "1.5"],
  ["3.3", "Solving Quadratic Equations by Factoring", "1ca449c6-031b-4186-a184-5efb99b07431", "1.3"],
  ["3.4", "Solving Problems with Quadratic Equations", N("3.04"), null],
  ["3.5", "Quadratic Models from Data", N("3.05"), null],
  ["3.6", "Chapter 3 Review", N("3.06"), null],

  ["4.1", "Vertex Form and Standard Form", N("4.01"), null],
  ["4.2", "Completing the Square", "31c049ac-8c9f-46d0-8b0e-8e38a20e8280", "2.3"],
  ["4.3", "The Quadratic Formula", "3dacdeb9-0cc3-4e51-9943-24895f923f5f", "1.4"],
  ["4.4", "The Discriminant and the Number of Roots", N("4.04"), null],
  ["4.5", "Maximum and Minimum Problems", "8ad6945f-5e56-4467-b907-6621b5d8fc37", "2.5"],
  ["4.6", "Chapter 4 Review", N("4.06"), null],

  ["5.1", "The Primary Trigonometric Ratios", "1a21db76-b386-4110-94da-d7db6087bc7b", "5.1"],
  ["5.2", "Problems with Two Right Triangles", "5450bf4b-29df-49be-92a5-04e3968d24d6", "5.2"],
  ["5.3", "The Sine Law", "cbb25e8a-cd1a-421b-99d5-3f9f9f1117b7", "5.3"],
  ["5.4", "The Cosine Law", "e95b8d73-d806-4172-8283-081dc3beadb8", "5.4"],
  ["5.5", "Solving Acute-Triangle Problems", N("5.05"), null],
  ["5.6", "Chapter 5 Review", N("5.06"), null],

  ["6.1", "Periodic Functions", "a2a6a384-04c8-41b6-a4dd-fd9986ac0028", "6.1"],
  ["6.2", "The Sine Function", "af63ecbf-5c8b-4563-a1e1-9da7e789a158", "6.2"],
  ["6.3", "Vertical Transformations of the Sine Function", "88e47226-921c-49bd-a6e5-598eff6937b1", "6.3"],
  ["6.4", "Horizontal Translations of the Sine Function", N("6.04"), null],
  ["6.5", "Sinusoidal Models", "5f36b412-a615-44be-83cd-e155c42608da", "6.4"],
  ["6.6", "Chapter 6 Review", N("6.06"), null],

  ["7.1", "The Laws of Exponents", "6c1a4045-4f1e-4685-9d93-002e2646ae46", "3.1"],
  ["7.2", "Zero and Negative Exponents", N("7.02"), null],
  ["7.3", "Rational Exponents", N("7.03"), null],
  ["7.4", "Exponential Functions and Their Graphs", "68b94bff-499f-492f-927e-477da521f7e0", "3.2"],
  ["7.5", "Exponential Growth", "b340d9c7-0355-4da7-8c40-e768d55a2daa", "3.3"],
  ["7.6", "Exponential Decay", N("7.06"), null],
  ["7.7", "Chapter 7 Review", N("7.07"), null],

  ["8.1", "Simple and Compound Interest", "4ff2949c-342a-42bd-bb83-50507b53a095", "4.1"],
  ["8.2", "Compound Interest: Future Value", N("8.02"), null],
  ["8.3", "Present Value", "27ee4cc2-7576-4fb3-825a-64de4a07caae", "4.2"],
  ["8.4", "Finding the Interest Rate and the Time", N("8.04"), null],
  ["8.5", "Annuities: Future Value", "e7c2146f-4475-4b8f-90c8-65754f0b3467", "4.3"],
  ["8.6", "Annuities: Present Value", N("8.06"), null],
  ["8.7", "Savings Plans and Loans", N("8.07"), null],
  ["8.8", "Chapter 8 Review", N("8.08"), null],
];

export const lesson = (code) => {
  const l = LESSONS.find((x) => x[0] === code);
  if (!l) throw new Error(`no MCF3M lesson ${code}`);
  return { code, title: l[1], full: `${code} ${l[1]}`, id: l[2], old: l[3] };
};
export const isReview = (code) => /Review$/.test(lesson(code).title);
