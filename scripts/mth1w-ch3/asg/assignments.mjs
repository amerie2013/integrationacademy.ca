// Chapter 3 assignments (homework): 10 questions each — Knowledge 1-3, Thinking 4-5, Communication 6-7, Application 8-10.
// [[key|caption]] in a line is replaced by a figure (uploaded SVG code listing) when published. Titles match the existing rows.
import { codeFig } from "../bank/code.mjs";

export const ASSIGNMENTS = [
  { code: "3.1", title: "Assignment 3.1 — Variables in Code", figs: {
      a: codeFig("p = 6\nq = p * 3 - 4\np = q - p\nprint(p, q)"),
      f: codeFig("def g(x):\n    return x ** 2 - 6 * x + 5\n\nfor x in range(0, 7):\n    print(x, g(x))"),
      ineq: codeFig("for x in range(-10, 11):\n    if 7 - 3 * x >= -5:\n        print(x, end=\" \")") }, lines: [
    "Knowledge & Understanding",
    String.raw`1. Predict the output of print(5 + 12 // 5 * 2) and of print(5 + 12 / 5 * 2). Explain the difference.`,
    String.raw`2. Write one Python line that stores \(y=\dfrac{3x-4}{2}\) in y.`,
    String.raw`3. Trace the program and give its output. [[a|Program for question 3]]`,
    "Thinking",
    String.raw`4. Predict the table of values printed by the program, then use it to find the values of \(x\) for which \(g(x)<0\). [[f|Program for question 4]]`,
    String.raw`5. Predict the output, then solve \(7-3x\ge-5\) with algebra and compare. [[ineq|Program for question 5]]`,
    "Communication",
    "6. Explain the difference between a parameter and an argument. Use a function of your own as an example.",
    String.raw`7. Explain why x = x + 5 makes sense in Python but \(x=x+5\) has no solution in algebra.`,
    "Application",
    String.raw`8. Write a function that returns the cost of a concert for \(n\) people if tickets cost 38.50 dollars each plus a 12-dollar booking fee. Give the cost for 4 people.`,
    String.raw`9. A phone plan costs \(25+0.15m\) dollars and another costs \(40+0.05m\) dollars for \(m\) minutes. Write a program that prints which plan is cheaper for m = 100, 150 and 200.`,
    String.raw`10. Write a program that uses a loop and an if to list every integer from \(-20\) to \(20\) that satisfies \(-8<4x+4\le24\). Check with algebra.`,
  ] },
  { code: "3.2", title: "Assignment 3.2 — Building Code from Steps", figs: {
      loop: codeFig("total = 0\nfor k in range(3, 30, 4):\n    total = total + k\nprint(total)"),
      water: codeFig("water = 1200\nminutes = 0\nwhile water > 300:\n    water = water - 75\n    minutes = minutes + 1\nprint(minutes, water)") }, lines: [
    "Knowledge & Understanding",
    "1. List the values produced by range(4, 25, 5) and by range(20, 0, -6).",
    "2. Predict the output of the program. [[loop|Program for question 2]]",
    "3. Name the three structures every program is built from, with a one-line example of each.",
    "Thinking",
    String.raw`4. A tank holds 1200 L and drains 75 L per minute. Predict the output of the program, then check with an inequality. [[water|Program for question 4]]`,
    "5. Write a program that counts the numbers from 1 to 500 that are multiples of 7 but not multiples of 2. Explain how you could check the answer without a computer.",
    "Communication",
    String.raw`6. Draw a flowchart for this problem: “A plant is 4 cm tall and grows 1.5 cm a week. After how many weeks is it taller than 30 cm?” Then write the code.`,
    "7. Explain when you would choose a for loop and when you would choose a while loop. Give one example of each from real life.",
    "Application",
    String.raw`8. Parking costs 4 dollars for the first hour and 2.50 dollars for each extra hour, to a maximum of 20 dollars. Write a function with if / elif / else for the cost of \(h\) whole hours, and give the cost for 1, 5 and 10 hours.`,
    String.raw`9. A car worth 26000 dollars loses 15% of its value each year. Write a program that finds how many years until it is worth less than 13000 dollars.`,
    String.raw`10. Write a program that finds the smallest whole number \(n\) for which \(1+2+3+\dots+n>750\).`,
  ] },
  { code: "3.3", title: "Assignment 3.3 — Reading, Predicting & Altering Code", figs: {
      trace: codeFig("x = 3\ny = 1\nfor i in range(4):\n    y = y * x\n    x = x - 1\nprint(x, y)"),
      bug: codeFig("# Goal: count the even numbers from 2 to 20\ncount = 0\nfor n in range(2, 20)\n    if n % 2 == 0:\n        count = count + 1\nprint(count)"),
      model: codeFig("price = 900\nrate = 0.04\nyear = 0\nwhile price < 1200:\n    price = price * (1 + rate)\n    year = year + 1\nprint(year, round(price, 2))") }, lines: [
    "Knowledge & Understanding",
    "1. Make a trace table for x, y and i, and give the output. [[trace|Program for question 1]]",
    "2. Name the three kinds of errors and give an example of each.",
    String.raw`3. What does for n in range(1, 8): print(n * n) print? How many lines?`,
    "Thinking",
    "4. The program has two errors. Find both, say what kind each is, and fix them. What does the corrected program print? [[bug|Program for question 4]]",
    "5. A program meant to add 1 + 2 + … + 50 prints 1225. Without seeing the code, explain the most likely bug and how you know.",
    "Communication",
    "6. Explain how a trace table helps you find a logic error. Use an example.",
    "7. Explain the difference between altering a parameter and altering a constraint in a program. Give an example of each using the program in question 8.",
    "Application",
    "8. The program models a price rising 4% a year. Predict its output. [[model|Program for question 8]]",
    String.raw`9. Alter the program in question 8 so the price rises 6% a year, and predict the new output. Then alter it to model a price that falls 4% a year from 900 dollars until it is below 600 dollars.`,
    "10. Write your own short program (5 to 8 lines) that models a real situation with a loop. Swap with a classmate: each predicts the other's output before running it.",
  ] },
];
