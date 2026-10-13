import { fig, orderedSlots, chosenSet } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "12.4",
  title: "Permutations and Combinations",
  intro: "A <b>permutation</b> counts ordered arrangements — position matters, so swapping two chosen items creates a different outcome: $_{n}P_{r}=\\dfrac{n!}{(n-r)!}$. A <b>combination</b> counts unordered selections — swapping two chosen items gives the <i>same</i> outcome (a committee is a committee no matter what order you name its members): $_{n}C_{r}=\\dfrac{n!}{r!(n-r)!}=\\dfrac{_{n}P_{r}}{r!}$. The single most important skill here is deciding <i>which one applies</i> before computing anything — ask \"does order/role matter?\" This worksheet also combines permutations/combinations with the Fundamental Counting Principle, restrictions (a specific person must/must not be included or placed), and probability.",
  examples: [
    ["Example 1: Factorial",
      "Evaluate $6!$.",
      "Identify: $n!$ means multiply all whole numbers from $n$ down to $1$.<br>" +
      "Compute: $6!=6\\times5\\times4\\times3\\times2\\times1=720$.<br>" +
      "<b>Answer:</b> $720$."],

    ["Example 2: Permutation — arranging a subset in order",
      "In how many ways can $3$ of $7$ different books be arranged on a shelf (order matters)?",
      fig(orderedSlots([7, 6, 5]), "Three ordered slots: 7 choices for the first, then 6, then 5 — order matters.") +
      "Identify: order matters (a different arrangement of the same $3$ books is a different outcome), so this is a <b>permutation</b>. Use $_{n}P_{r}=\\dfrac{n!}{(n-r)!}$ with $n=7$, $r=3$.<br>" +
      "Compute: $_{7}P_{3}=\\dfrac{7!}{4!}=\\dfrac{7\\times6\\times5\\times4!}{4!}=7\\times6\\times5=210$.<br>" +
      "<b>Answer:</b> $210$ ways."],

    ["Example 3: Combination — the same books, but order doesn't matter",
      "In how many ways can $3$ of the same $7$ books be <i>chosen</i> (not arranged — order doesn't matter)?",
      fig(chosenSet(7, 3), "The 3 circled books form one set — no matter what order they're named, it's the same selection.") +
      "Identify: order no longer matters (choosing books X, Y, Z is the same outcome regardless of the order named), so this is a <b>combination</b>. Use $_{n}C_{r}=\\dfrac{n!}{r!(n-r)!}$ with $n=7$, $r=3$.<br>" +
      "Compute: $_{7}C_{3}=\\dfrac{7!}{3!\\,4!}=\\dfrac{7\\times6\\times5}{3\\times2\\times1}=\\dfrac{210}{6}=35$.<br>" +
      "Notice this equals $\\dfrac{_{7}P_{3}}{3!}=\\dfrac{210}{6}=35$ — combinations always undercount permutations by the $r!$ orderings that get treated as \"the same\" selection.<br>" +
      "<b>Answer:</b> $35$ ways."],

    ["Example 4: P or C? — Officers with distinct roles",
      "A club of $10$ people elects a president, vice-president, and secretary. How many ways can these three distinct roles be filled?",
      "The roles are different, so swapping who gets which role creates a genuinely different outcome — this is a <b>permutation</b>.<br>" +
      "$_{10}P_{3}=\\dfrac{10!}{7!}=10\\times9\\times8=720$.<br>" +
      "<b>Answer:</b> $720$ ways."],

    ["Example 5: P or C? — An unranked committee",
      "The same club of $10$ people chooses $4$ people (with no distinct roles) for a committee. How many ways?",
      "No roles to distinguish the four — this is a <b>combination</b>.<br>" +
      "$_{10}C_{4}=\\dfrac{10!}{4!\\,6!}=\\dfrac{10\\times9\\times8\\times7}{4\\times3\\times2\\times1}=\\dfrac{5040}{24}=210$.<br>" +
      "<b>Answer:</b> $210$ ways."],

    ["Example 6: Why $0!=1$",
      "Explain why $0!$ is defined to equal $1$, not $0$.",
      "The factorial pattern is $n!=n\\times(n-1)!$. Working this backward from $n=1$: $1!=1\\times0!$. Since $1!=1$, we need $0!=1$ to keep the pattern consistent.<br>" +
      "It also matches counting logic: there is exactly $1$ way to arrange zero objects (do nothing) — an empty arrangement is still one valid outcome, not zero outcomes.<br>" +
      "<b>Answer:</b> $0!=1$, by the recursive pattern and by counting logic (one way to arrange nothing)."],

    ["Example 7: Reversing the relationship",
      "If $_{n}C_{3}=20$, find $_{n}P_{3}$.",
      "Use $_{n}P_{r}={_{n}C_{r}}\\times r!$:<br>" +
      "$_{n}P_{3}=20\\times3!=20\\times6=120$.<br>" +
      "<b>Answer:</b> $120$."],

    ["Example 8: Permutation with a fixed position (restriction)",
      "$5$ runners finish a race; medals go to the top $3$ finishers in order (1st, 2nd, 3rd). If a particular runner, Maria, is guaranteed to finish 1st, in how many ways can the remaining medal positions (2nd and 3rd) be filled?",
      "Maria's spot is fixed, so only the other $4$ runners compete for the $2$ remaining ordered positions:<br>" +
      "$_{4}P_{2}=4\\times3=12$.<br>" +
      "<b>Answer:</b> $12$ ways."],

    ["Example 9: Fundamental Counting Principle + permutations — license plates",
      "A license plate has $3$ different letters (no repeats) followed by $3$ different digits (no repeats). How many plates are possible?",
      fig(orderedSlots([26, 25, 24]) + '<div style="text-align:center;font-size:16px;font-weight:700;color:#475569;margin:2px 0">&times;</div>' + orderedSlots([10, 9, 8]),
        "Letter slots (top) shrink 26→25→24; digit slots (bottom) shrink 10→9→8. Multiply the two stages together.") +
      "<b>Letters:</b> choose and arrange $3$ of $26$ letters, order matters (position matters on a plate): $_{26}P_{3}=26\\times25\\times24=15{,}600$.<br>" +
      "<b>Digits:</b> choose and arrange $3$ of $10$ digits: $_{10}P_{3}=10\\times9\\times8=720$.<br>" +
      "<b>Combine with the Fundamental Counting Principle</b> (multiply independent stages): $15{,}600\\times720=11{,}232{,}000$.<br>" +
      "<b>Answer:</b> $11{,}232{,}000$ possible plates."],

    ["Example 10: Combination with a required member",
      "A committee of $5$ is chosen from $12$ people, and Alex must be on it. How many committees are possible?",
      "Since Alex's spot is guaranteed, only $4$ more people need to be chosen — from the remaining $11$ people, order doesn't matter:<br>" +
      "$_{11}C_{4}=\\dfrac{11!}{4!\\,7!}=\\dfrac{11\\times10\\times9\\times8}{4\\times3\\times2\\times1}=\\dfrac{7920}{24}=330$.<br>" +
      "<b>Answer:</b> $330$ committees."],

    ["Example 11: Capstone — combinations and probability together",
      "A lottery requires picking the correct $6$ numbers from $49$ (order doesn't matter). Given that $_{49}C_{6}=13{,}983{,}816$, find the probability of winning with one ticket.",
      "There is exactly $1$ winning combination out of all $_{49}C_{6}$ equally likely combinations:<br>" +
      "$P(\\text{win})=\\dfrac{1}{_{49}C_{6}}=\\dfrac{1}{13{,}983{,}816}$.<br>" +
      "<b>Answer:</b> $\\dfrac{1}{13{,}983{,}816}$ — an illustration of how quickly combinations grow, and why lottery odds are so small."],
  ],
  questions: [
    ["Problem 1: Factorial", "Evaluate $4!$.", "$24$"],
    ["Problem 2: Permutation", "Find $_{6}P_{3}$.", "$120$"],
    ["Problem 3: Combination", "Find $_{8}C_{3}$.", "$56$"],
    ["Problem 4: P or C?", "The finishing order of $5$ of $12$ runners in a race: permutation or combination?", "Permutation"],
    ["Problem 5: P or C?", "Choosing $5$ of $12$ runners for a relay team (no order): permutation or combination?", "Combination"],
    ["Problem 6: Evaluate", "Find $_{4}P_{4}$.", "$24$"],
    ["Problem 7: Evaluate", "Find $_{5}C_{1}$.", "$5$"],
    ["Problem 8: Evaluate", "Find $_{9}C_{2}$.", "$36$"],
    ["Problem 9: Evaluate", "Find $_{8}P_{2}$.", "$56$"],
    ["Problem 10: Zero factorial", "Evaluate $0!$.", "$1$"],
    ["Problem 11: Relationship", "If $_{n}C_{3}=20$, find $_{n}P_{3}$.", "$120$"],
    ["Problem 12: Arrangement", "In how many ways can $4$ of $6$ different novels be arranged on a shelf?", "$_{6}P_{4}=360$"],
    ["Problem 13: Selection", "In how many ways can $4$ of $6$ people be chosen for an unranked group?", "$_{6}C_{4}=15$"],
    ["Problem 14: Restriction", "$6$ people sit in a row. Two specific people, X and Y, must sit at the two ends (in either order). How many seatings are possible?", "$2\\times4!=48$"],
    ["Problem 15: Challenge", "A lottery requires picking $5$ correct numbers from $40$ (order doesn't matter), where $_{40}C_{5}=658{,}008$. Find the probability of winning with one ticket.", "$\\dfrac{1}{658{,}008}$"],
  ],
};
