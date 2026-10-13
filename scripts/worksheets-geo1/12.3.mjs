import { fig, outcomeBoxes } from "./_figs.mjs";

const cell = (c, bold) => `<td style="border:1px solid #94a3b8;padding:4px 12px;text-align:center;${bold ? "font-weight:700;background:#f8fafc" : ""}">${c}</td>`;
const table = (headers, rows) =>
  `<table style="border-collapse:collapse;margin:6px auto;font-size:10pt">` +
  `<tr>${headers.map((h) => `<th style="border:1px solid #94a3b8;padding:4px 12px;background:#eff6ff">${h}</th>`).join("")}</tr>` +
  rows.map((r) => `<tr>${r.map((c, i) => cell(c, i === 0)).join("")}</tr>`).join("") +
  `</table>`;

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "12.3",
  title: "Conditional Probability",
  intro: "Conditional probability asks: given that event $B$ has already happened, how likely is $A$? The formula is $P(A\\mid B)=\\dfrac{P(A\\text{ and }B)}{P(B)}$ — restrict attention to the world where $B$ is true, then ask what fraction of <i>that</i> world also has $A$. Two-way (contingency) tables make this concrete: read down a column (or across a row) to get the reduced sample space. A key fact worth remembering: $P(A\\mid B)$ and $P(B\\mid A)$ are generally <b>not equal</b> — order matters. When $P(A\\mid B)=P(A)$, knowing $B$ told you nothing new about $A$, and the events are independent (Lesson 12.2).",
  examples: [
    ["Example 1: Formula, straight from given probabilities",
      "$P(A\\text{ and }B)=0.2$ and $P(B)=0.5$. Find $P(A\\mid B)$.",
      "Identify the formula: $P(A\\mid B)=\\dfrac{P(A\\text{ and }B)}{P(B)}$ — restrict attention to the world where $B$ happens, then see what fraction of it also has $A$.<br>" +
      "Substitute and compute: $P(A\\mid B)=\\dfrac{0.2}{0.5}=0.4$.<br>" +
      "<b>Answer:</b> $0.4$."],

    ["Example 2: Two-way table",
      "Of $100$ students surveyed, the results are shown below. Find $P(\\text{girl}\\mid\\text{sports})$.",
      fig(table(["", "Sports", "No Sports", "Total"], [["Girls", "25", "35", "60"], ["Boys", "15", "25", "40"], ["Total", "40", "60", "100"]]),
        "Conditioning on \"sports\" restricts attention to the Sports column only (40 students).") +
      "\"Given sports\" means we only look inside the Sports column: $40$ students total, of whom $25$ are girls.<br>" +
      "$P(\\text{girl}\\mid\\text{sports})=\\dfrac{25}{40}=\\dfrac58$.<br>" +
      "<b>Answer:</b> $\\dfrac58$."],

    ["Example 3: Cards",
      "A card is drawn from a standard deck. Find $P(\\text{king}\\mid\\text{face card})$.",
      "Face cards are J, Q, K in all $4$ suits: $12$ face cards total. Of those, $4$ are kings.<br>" +
      "$P(\\text{king}\\mid\\text{face card})=\\dfrac{4}{12}=\\dfrac13$.<br>" +
      "<b>Answer:</b> $\\dfrac13$."],

    ["Example 4: Checking independence",
      "$P(A)=0.3$ and $P(A\\mid B)=0.3$. Are $A$ and $B$ independent?",
      "Independence means knowing $B$ doesn't change $A$'s probability: $P(A\\mid B)=P(A)$.<br>" +
      "Here $0.3=0.3$, so yes — <b>independent</b>.<br>" +
      "<b>Answer:</b> Independent."],

    ["Example 5: Dice",
      "A fair die is rolled. Find $P(\\text{even}\\mid\\text{greater than }3)$.",
      fig(outcomeBoxes(6, [4, 5, 6], [4, 6]), "Blue outline = the conditioning set (\"greater than 3\"); orange fill = also even.") +
      "\"Given greater than $3$\" restricts the sample space to $\\{4,5,6\\}$ — only $3$ outcomes now. Of those, $\\{4,6\\}$ are even.<br>" +
      "$P(\\text{even}\\mid>3)=\\dfrac{2}{3}$.<br>" +
      "<b>Answer:</b> $\\dfrac23$."],

    ["Example 6: A conditioning event that forces certainty",
      "A bag has $3$ red and $7$ blue marbles. One is drawn. Find $P(\\text{red}\\mid\\text{not blue})$.",
      "\"Not blue\" in this bag means the marble <i>must</i> be red — there's no third color. So given \"not blue,\" red happens every single time.<br>" +
      "$P(\\text{red}\\mid\\text{not blue})=1$.<br>" +
      "<b>Answer:</b> $1$."],

    ["Example 7: Order matters — the reverse conditional",
      "Using the same table from Example 2, find $P(\\text{sports}\\mid\\text{girl})$ and compare it to $P(\\text{girl}\\mid\\text{sports})=\\dfrac58$ from Example 2.",
      "Now condition on \"girl\" — restrict to the Girls <i>row</i>: $60$ girls total, of whom $25$ play sports.<br>" +
      "$P(\\text{sports}\\mid\\text{girl})=\\dfrac{25}{60}=\\dfrac{5}{12}$.<br>" +
      "Compare: $P(\\text{girl}\\mid\\text{sports})=\\dfrac58=0.625$, but $P(\\text{sports}\\mid\\text{girl})=\\dfrac{5}{12}\\approx0.417$. <b>These are different</b> — conditioning on the column vs. the row gives different restricted sample spaces.<br>" +
      "<b>Answer:</b> $\\dfrac{5}{12}$; it is not equal to $P(\\text{girl}\\mid\\text{sports})$."],

    ["Example 8: Solve for the reverse conditional using the formula",
      "$P(A\\text{ and }B)=0.12$ and $P(A)=0.3$. Find $P(B\\mid A)$.",
      "Identify: this time condition on $A$ instead of $B$, so divide by $P(A)$: $P(B\\mid A)=\\dfrac{P(A\\text{ and }B)}{P(A)}$.<br>" +
      "Substitute and compute: $\\dfrac{0.12}{0.3}=0.4$.<br>" +
      "<b>Answer:</b> $0.4$."],

    ["Example 9: Larger table — word problem",
      "A survey of $80$ voters found $48$ said \"yes\" to a proposal; of those \"yes\" voters, $30$ were under age $30$. Find $P(\\text{under }30\\mid\\text{yes})$.",
      fig(table(["", "Yes", "No", "Total"], [["Under 30", "30", "?", "?"], ["30 or older", "18", "?", "?"], ["Total", "48", "32", "80"]]),
        "Only the \"Yes\" column (48 voters) matters for this conditional probability.") +
      "Restrict to the Yes column: $48$ voters, of whom $30$ are under $30$.<br>" +
      "$P(\\text{under }30\\mid\\text{yes})=\\dfrac{30}{48}=\\dfrac58$.<br>" +
      "<b>Answer:</b> $\\dfrac58$."],

    ["Example 10: Using conditional probability to test independence",
      "In a survey of $60$ teens, $36$ have phones, and $24$ of the phone owners are girls. Overall, $30$ of the $60$ teens are girls. Determine whether \"having a phone\" and \"being a girl\" are independent in this survey.",
      "Overall rate: $P(\\text{girl})=\\dfrac{30}{60}=\\dfrac12$.<br>" +
      "Conditional rate: $P(\\text{girl}\\mid\\text{phone})=\\dfrac{24}{36}=\\dfrac23$.<br>" +
      "Since $\\dfrac23\\neq\\dfrac12$, knowing someone has a phone <i>does</i> change the probability they're a girl — in this survey, the two categories are <b>dependent</b>, not independent.<br>" +
      "<b>Answer:</b> Dependent, since $P(\\text{girl}\\mid\\text{phone})=\\dfrac23\\neq P(\\text{girl})=\\dfrac12$."],

    ["Example 11: A \"90% accurate\" test isn't what it sounds like",
      "A disease affects $1\\%$ of a population. A test for it is $90\\%$ accurate both ways (it correctly identifies $90\\%$ of people who have the disease, and correctly clears $90\\%$ of people who don't). Given a positive test result, find $P(\\text{disease}\\mid\\text{positive})$.",
      "Imagine a population of $10{,}000$ for concreteness.<br>" +
      "<b>Have the disease:</b> $1\\%$ of $10{,}000=100$ people. Of these, $90\\%$ test positive: $90$ true positives (and $10$ false negatives).<br>" +
      "<b>Don't have it:</b> $9900$ people. Of these, $10\\%$ test positive anyway (false positive): $0.10\\times9900=990$ false positives.<br>" +
      "<b>Total positive tests:</b> $90+990=1080$.<br>" +
      "$P(\\text{disease}\\mid\\text{positive})=\\dfrac{90}{1080}=\\dfrac{1}{12}$.<br>" +
      "<b>Answer:</b> $\\dfrac{1}{12}$ — only about $8\\%$! Even an \"accurate\" test gives mostly false alarms when the disease is rare, because the huge healthy population produces far more false positives than the small sick population produces true positives."],
  ],
  questions: [
    ["Problem 1: Formula", "$P(A\\text{ and }B)=0.15$, $P(B)=0.6$. Find $P(A\\mid B)$.", "$0.25$"],
    ["Problem 2: Cards", "Find $P(\\text{ace}\\mid\\text{red card})$.", "$\\dfrac{1}{13}$"],
    ["Problem 3: Die", "Find $P(6\\mid\\text{even})$.", "$\\dfrac13$"],
    ["Problem 4: Independence", "$P(A)=0.5$, $P(A\\mid B)=0.4$. Are they independent?", "No"],
    ["Problem 5: Table", "$50$ people; $20$ take the bus; $12$ of the bus riders are students. Find $P(\\text{student}\\mid\\text{bus})$.", "$\\dfrac35$"],
    ["Problem 6: Die", "Find $P(\\text{odd}\\mid\\text{less than }4)$.", "$\\dfrac23$"],
    ["Problem 7: Formula", "$P(A\\text{ and }B)=\\dfrac{1}{10}$, $P(A)=\\dfrac25$. Find $P(B\\mid A)$.", "$\\dfrac14$"],
    ["Problem 8: Cards", "Find $P(\\text{heart}\\mid\\text{red})$.", "$\\dfrac12$"],
    ["Problem 9: Independence rule", "Events are independent exactly when $P(A\\mid B)$ equals what?", "$P(A)$"],
    ["Problem 10: Marbles", "Bag: $5$ red, $5$ blue. Find $P(\\text{red}\\mid\\text{not green})$.", "$\\dfrac12$"],
    ["Problem 11: Table", "$80$ voters; $48$ said yes; $30$ of the yes voters are under $30$. Find $P(\\text{under }30\\mid\\text{yes})$.", "$\\dfrac58$"],
    ["Problem 12: Order matters", "Is $P(A\\mid B)$ always the same as $P(B\\mid A)$?", "No, not in general"],
    ["Problem 13: Formula", "$P(A\\text{ and }B)=0.12$, $P(A)=0.3$. Find $P(B\\mid A)$.", "$0.4$"],
    ["Problem 14: Table application", "Of $120$ students, $72$ take art; $45$ of the art students also take music. Find $P(\\text{music}\\mid\\text{art})$.", "$\\dfrac58$"],
    ["Problem 15: Challenge", "A rare condition affects $2\\%$ of a population. A test is $95\\%$ accurate both ways. Using a population of $10{,}000$, find $P(\\text{condition}\\mid\\text{positive test})$.", "$\\dfrac{19}{68}$"],
  ],
};
