const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "10.1",
  title: "Mathematics as Communication",
  intro: "Communicating mathematics precisely — writing good definitions, using exact terminology, and connecting concrete, pictorial, and symbolic representations.",
  lesson: [
    ["Precise definitions", R`A good definition states <b>necessary and sufficient</b> conditions and determines the object uniquely. A <em>description</em> merely lists some properties. E.g., a square is a quadrilateral with four equal sides <b>and</b> four right angles.`],
    ["The language of mathematics", R`Terms have exact meanings: "at least one" means one or more; "if and only if" asserts both directions; "mutually exclusive" means the events cannot both occur. Avoid ambiguous slang.`],
    ["Multiple representations", R`Ideas are communicated <b>concretely</b> (manipulatives), <b>pictorially</b> (diagrams), and <b>symbolically</b> (equations). Strong teaching links all three.`],
  ],
  examples: [
    ["Example 1: Definition vs description", R`Why is "a shape with four sides" not a good definition of a square?`, R`It is only a description — it does not uniquely determine a square (it also fits any quadrilateral). A definition needs four equal sides <b>and</b> four right angles.`],
    ["Example 2: Precise terms", R`What does "at least one" mean?`, R`One or more.`],
    ["Example 3: Biconditional", R`What does "if and only if" assert?`, R`Both directions of the implication (a biconditional).`],
    ["Example 4: Representation", R`Name a pictorial representation of $\tfrac12$.`, R`A circle or bar with half shaded.`],
    ["Example 5: Distinguishing shapes", R`A rhombus has four equal sides. What extra condition makes it a square?`, R`Four right angles.`],
  ],
  questions: [
    ["Problem 1", R`"At least two" means ___.`, R`two or more`],
    ["Problem 2", R`A definition should give ___ conditions.`, R`necessary and sufficient`],
    ["Problem 3", R`"Mutually exclusive" events ___.`, R`cannot both occur`],
    ["Problem 4", R`An equation is a ___ representation.`, R`symbolic`],
    ["Problem 5", R`Manipulatives are a ___ representation.`, R`concrete`],
    ["Problem 6", R`"If and only if" indicates a ___.`, R`biconditional`],
    ["Problem 7", R`A rhombus has four equal sides but not necessarily ___.`, R`right angles`],
    ["Problem 8", R`A labeled diagram is a ___ representation.`, R`pictorial`],
  ],
};
