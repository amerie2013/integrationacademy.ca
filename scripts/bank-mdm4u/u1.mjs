// MDM4U Unit 1 — Counting, Permutations & Combinations: question bank.
// 60 questions per topic: 20 easy / 20 medium / 20 hard (hard = genuinely hard,
// contest / uni-prep, but within MDM4U scope). Kinds: mc, ms, tf, num, fill.
import { mc, ms, tf, num, fill } from "./helpers.mjs";

// ── 1.1 The Fundamental Counting Principle ───────────────────
function g11() {
  const q = [];
  // EASY
  q.push(mc("easy", "A meal has 3 mains and 4 drinks. How many meals?", ["$12$", "$7$", "$34$", "$3$"], 0));
  q.push(mc("easy", "How many 2-digit codes from digits $0$--$9$ (repeats allowed)?", ["$100$", "$90$", "$20$", "$45$"], 0));
  q.push(mc("easy", "3 shirts and 5 pants make how many outfits?", ["$15$", "$8$", "$35$", "$53$"], 0));
  q.push(mc("easy", "A coin is flipped 3 times. How many sequences?", ["$8$", "$6$", "$3$", "$9$"], 0));
  q.push(mc("easy", "A 4-colour spinner is spun twice. How many outcomes?", ["$16$", "$8$", "$4$", "$12$"], 0));
  q.push(mc("easy", "How many subsets does a 3-element set have?", ["$8$", "$6$", "$3$", "$9$"], 0));
  q.push(mc("easy", "How many ways to arrange 3 people in a row?", ["$6$", "$3$", "$9$", "$8$"], 0));
  q.push(ms("easy", "Which situations use the product rule (AND)?", ["choose a shirt AND pants", "a meal's courses in sequence", "a book OR a movie", "all-letters OR all-digits"], [0, 1]));
  q.push(ms("easy", "Which equal $2^4$?", ["$16$", "subsets of a 4-set", "$8$", "yes/no on 4 items"], [0, 1, 3]));
  q.push(ms("easy", "Which count the outcomes of rolling two dice?", ["$36$", "$6\\times6$", "$12$", "$6+6$"], [0, 1]));
  q.push(tf("easy", "For a sequence of independent choices, you multiply.", true));
  q.push(tf("easy", "For mutually exclusive cases, you add.", true));
  q.push(tf("easy", "A 3-letter code from 26 letters (repeats) has $26\\times3$ possibilities.", false, "It is $26^3$."));
  q.push(tf("easy", "There are $2^n$ subsets of an $n$-element set.", true));
  q.push(num("easy", "How many 2-letter codes from 26 letters, repeats allowed?", 676, 0));
  q.push(num("easy", "How many outcomes when rolling two dice?", 36, 0));
  q.push(num("easy", "How many 4-digit sequences of digits $0$--$9$ (repeats)?", 10000, 0));
  q.push(num("easy", "A pizza takes any subset of 5 toppings. How many pizzas (including none)?", 32, 0));
  q.push(fill("easy", "The number of ways to choose one of 3 apps AND one of 4 songs is ___.", ["12"]));
  q.push(fill("easy", "$5\\times4\\times3=$ ___.", ["60"]));
  // MEDIUM
  q.push(mc("medium", "How many 3-digit numbers have no repeated digit?", ["$648$", "$720$", "$900$", "$504$"], 0));
  q.push(mc("medium", "How many 3-digit even numbers are there?", ["$450$", "$500$", "$405$", "$400$"], 0));
  q.push(mc("medium", "License plate: 2 letters then 3 digits (repeats). How many?", ["$26^2\\cdot10^3$", "$26\\cdot25\\cdot10^3$", "$26^2\\cdot3$", "$2\\cdot26\\cdot3\\cdot10$"], 0));
  q.push(mc("medium", "How many 4-digit PINs use only odd digits?", ["$625$", "$5^5$", "$500$", "$120$"], 0));
  q.push(mc("medium", "A password is 2 letters then 2 digits, distinct within each type. How many?", ["$58\\,500$", "$67\\,600$", "$65\\,000$", "$60\\,000$"], 0));
  q.push(mc("medium", "How many 3-letter arrangements of distinct letters from 7 letters?", ["$210$", "$343$", "$21$", "$35$"], 0));
  q.push(mc("medium", "A 4-question true/false key with at least one True: how many?", ["$15$", "$16$", "$8$", "$14$"], 0));
  q.push(mc("medium", "How many ways to award gold/silver/bronze among 8 runners?", ["$336$", "$512$", "$56$", "$24$"], 0));
  q.push(ms("medium", "Which expressions count 3-digit numbers with distinct digits?", ["$9\\cdot9\\cdot8$", "$648$", "$9\\cdot10\\cdot10$", "$720$"], [0, 1]));
  q.push(ms("medium", "For an 'at least one' count, which approaches help?", ["total $-$ none", "the complement", "always list every case", "$2^n-1$ for non-empty subsets"], [0, 1, 3]));
  q.push(tf("medium", "There are exactly $900$ three-digit numbers.", true));
  q.push(tf("medium", "Half of all 3-digit numbers are even, giving $450$.", true));
  q.push(num("medium", "How many 4-digit numbers are divisible by 5?", 1800, 0));
  q.push(num("medium", "How many 3-digit numbers have at least one repeated digit?", 252, 0));
  q.push(num("medium", "How many ways to seat 4 of 6 people in a row?", 360, 0));
  q.push(num("medium", "How many 2-digit numbers have two distinct digits?", 81, 0));
  q.push(fill("medium", "The number of 3-digit numbers with all three digits equal is ___.", ["9"]));
  q.push(fill("medium", "$26^2\\cdot10^2=$ ___.", ["67600"]));
  q.push(fill("medium", "The number of 4-letter strings over $\\{A,B\\}$ is ___.", ["16"]));
  q.push(mc("medium", "How many functions map a 3-element set to a 4-element set?", ["$64$", "$12$", "$24$", "$81$"], 0));
  // HARD
  q.push(mc("hard", "How many 3-digit numbers have distinct digits and are even?", ["$328$", "$450$", "$360$", "$320$"], 0));
  q.push(mc("hard", "How many 4-digit numbers have all distinct digits and are even?", ["$2296$", "$2240$", "$2500$", "$2352$"], 0));
  q.push(mc("hard", "A 4-character password has exactly 2 letters and 2 digits (both may repeat). How many?", ["$\\binom{4}{2}26^2\\,10^2$", "$26^2\\,10^2$", "$26\\cdot25\\cdot10\\cdot9$", "$4!\\,26^2\\,10^2$"], 0));
  q.push(mc("hard", "A 4-note ringtone from 7 notes, no two consecutive equal. How many?", ["$1512$", "$840$", "$2401$", "$210$"], 0));
  q.push(mc("hard", "A 5-digit palindrome (no leading zero). How many?", ["$900$", "$1000$", "$90\\,000$", "$9000$"], 0));
  q.push(mc("hard", "How many 4-digit numbers contain exactly one $0$?", ["$2187$", "$2916$", "$1000$", "$729$"], 0));
  q.push(mc("hard", "How many 5-digit numbers have strictly increasing digits (using $1$--$9$)?", ["$126$", "$252$", "$120$", "$9^5$"], 0));
  q.push(mc("hard", "From 10 people, a president/VP/treasurer are chosen. In how many does a specific person hold an office?", ["$216$", "$720$", "$504$", "$120$"], 0));
  q.push(num("hard", "How many 4-digit numbers have all distinct digits and are even?", 2296, 0));
  q.push(num("hard", "How many 3-digit numbers have distinct digits and are even?", 328, 0));
  q.push(num("hard", "A 4-bead strip from 5 colours, no two adjacent equal. How many?", 320, 0));
  q.push(num("hard", "How many 4-digit numbers are divisible by 25?", 360, 0));
  q.push(num("hard", "How many 4-digit numbers contain exactly one $0$?", 2187, 0));
  q.push(num("hard", "How many 5-digit strictly increasing numbers use digits $1$--$9$?", 126, 0));
  q.push(num("hard", "How many 3-digit numbers use distinct nonzero digits ($1$--$9$)?", 504, 0));
  q.push(fill("hard", "A 4-character password with exactly 2 letters and 2 digits (repeats allowed) numbers ___.", ["405600", "405,600"]));
  q.push(tf("hard", "There are $328$ three-digit even numbers with distinct digits ($72$ ending in $0$, plus $256$ ending in $2,4,6,8$).", true));
  q.push(tf("hard", "There are more 4-digit numbers divisible by 5 than divisible by 25.", true, "$1800$ vs. $360$."));
  q.push(ms("hard", "Which equal the number of 3-letter distinct arrangements from 7 letters?", ["$7\\cdot6\\cdot5$", "$210$", "$\\dfrac{7!}{4!}$", "$7^3$"], [0, 1, 2]));
  q.push(mc("hard", "How many 4-letter arrangements use the 5 vowels with no repeats?", ["$120$", "$625$", "$24$", "$20$"], 0));
  return q;
}

// ── 1.2 Factorials & Permutations of Distinct Objects ────────
function g12() {
  const q = [];
  // EASY
  q.push(mc("easy", "Evaluate $5!$.", ["$120$", "$25$", "$60$", "$720$"], 0));
  q.push(mc("easy", "Evaluate $0!$.", ["$1$", "$0$", "undefined", "$-1$"], 0));
  q.push(mc("easy", "Compute $_6P_2$.", ["$30$", "$36$", "$15$", "$12$"], 0));
  q.push(mc("easy", "How many arrangements of 4 distinct books?", ["$24$", "$16$", "$12$", "$4$"], 0));
  q.push(mc("easy", "Simplify $\\dfrac{6!}{5!}$.", ["$6$", "$1$", "$30$", "$120$"], 0));
  q.push(mc("easy", "Which equals $_nP_r$?", ["$\\dfrac{n!}{(n-r)!}$", "$\\dfrac{n!}{r!(n-r)!}$", "$n!\\,r!$", "$\\dfrac{n!}{r!}$"], 0));
  q.push(mc("easy", "How many arrangements of the letters of CAT?", ["$6$", "$3$", "$9$", "$1$"], 0));
  q.push(ms("easy", "Which equal $4!$?", ["$24$", "$4\\cdot3\\cdot2\\cdot1$", "$16$", "arrangements of 4 distinct items"], [0, 1, 3]));
  q.push(ms("easy", "Which involve order (permutations)?", ["ranking 3 finishers", "arranging books", "choosing a committee", "a lock code sequence"], [0, 1, 3]));
  q.push(tf("easy", "$0!=1$.", true));
  q.push(tf("easy", "$_nP_n=n!$.", true));
  q.push(tf("easy", "$3!=6$.", true));
  q.push(num("easy", "Evaluate $4!$.", 24, 0));
  q.push(num("easy", "Compute $_5P_2$.", 20, 0));
  q.push(num("easy", "Evaluate $\\dfrac{7!}{6!}$.", 7, 0));
  q.push(num("easy", "How many arrangements of 5 distinct paintings?", 120, 0));
  q.push(fill("easy", "$_7P_1=$ ___.", ["7"]));
  q.push(fill("easy", "The number of orderings of 3 distinct items is ___.", ["6"]));
  q.push(mc("easy", "Compute $_8P_1$.", ["$8$", "$1$", "$0$", "$40320$"], 0));
  q.push(num("easy", "Evaluate $6!$.", 720, 0));
  // MEDIUM
  q.push(mc("medium", "Compute $_8P_3$.", ["$336$", "$512$", "$56$", "$24$"], 0));
  q.push(mc("medium", "Simplify $\\dfrac{10!}{7!}$.", ["$720$", "$1000$", "$30$", "$120$"], 0));
  q.push(mc("medium", "Simplify $\\dfrac{(n+1)!}{(n-1)!}$.", ["$n^2+n$", "$n+1$", "$n!$", "$n^2-1$"], 0));
  q.push(mc("medium", "How many 4-digit numbers use distinct digits from $1$--$9$?", ["$3024$", "$6561$", "$126$", "$720$"], 0));
  q.push(mc("medium", "Solve $_nP_2=42$.", ["$7$", "$6$", "$8$", "$21$"], 0));
  q.push(mc("medium", "How many ways to give 3 distinct medals to 10 athletes?", ["$720$", "$1000$", "$120$", "$30$"], 0));
  q.push(ms("medium", "Which equal $\\dfrac{9!}{6!}$?", ["$9\\cdot8\\cdot7$", "$504$", "$_9P_3$", "$\\dfrac{9!}{3!}$"], [0, 1, 2]));
  q.push(ms("medium", "Which equal $6!$?", ["$720$", "$6\\cdot5!$", "$_6P_6$", "$36$"], [0, 1, 2]));
  q.push(tf("medium", "$\\dfrac{n!}{(n-2)!}=n(n-1)$.", true));
  q.push(tf("medium", "$_{10}P_3=720$.", true));
  q.push(tf("medium", "Arrangements of the 6 distinct letters of PLANET number $720$.", true));
  q.push(num("medium", "Simplify $\\dfrac{12!}{10!}$.", 132, 0));
  q.push(num("medium", "Compute $_9P_4$.", 3024, 0));
  q.push(num("medium", "Solve $_nP_2=30$ for $n$.", 6, 0));
  q.push(num("medium", "How many ways to seat 3 of 7 people in a row?", 210, 0));
  q.push(fill("medium", "Simplify $\\dfrac{n!}{(n-3)!}$.", ["n(n-1)(n-2)"]));
  q.push(fill("medium", "$_{12}P_2=$ ___.", ["132"]));
  q.push(mc("medium", "In how many ways can a club pick a president, then a VP, from 12 members?", ["$132$", "$66$", "$144$", "$24$"], 0));
  q.push(num("medium", "How many arrangements of the word MONEY (all distinct)?", 120, 0));
  q.push(fill("medium", "The number of 3-letter arrangements from 7 distinct letters is ___.", ["210"]));
  // HARD
  q.push(mc("hard", "Solve $_nP_3=336$.", ["$8$", "$7$", "$9$", "$6$"], 0));
  q.push(mc("hard", "Solve $_nP_2=132$.", ["$12$", "$11$", "$13$", "$66$"], 0));
  q.push(mc("hard", "Solve $\\dfrac{(n+2)!}{n!}=72$.", ["$7$", "$8$", "$6$", "$9$"], 0));
  q.push(mc("hard", "Simplify $\\dfrac{(n+1)!-n!}{(n-1)!}$.", ["$n^2$", "$n$", "$n^2+n$", "$n!$"], 0));
  q.push(mc("hard", "How many 4-digit even numbers use distinct digits from $1$--$6$?", ["$180$", "$360$", "$120$", "$90$"], 0));
  q.push(mc("hard", "Solve $_nP_2=_{\\,}12\\cdot{}_nP_1$.", ["$13$", "$12$", "$11$", "$6$"], 0));
  q.push(num("hard", "Solve $_nP_3=990$ for $n$.", 11, 0));
  q.push(num("hard", "Solve $_nP_4=_{\\,}20\\cdot{}_nP_2$ for $n$ (integer).", 7, 0));
  q.push(num("hard", "How many 5-digit numbers use distinct digits from $1$--$9$?", 15120, 0));
  q.push(num("hard", "How many arrangements of 7 distinct people have a particular person in the middle seat?", 720, 0));
  q.push(mc("hard", "Simplify $\\dfrac{n!}{(n-2)!}-\\dfrac{n!}{(n-1)!}$.", ["$n^2-2n$", "$n^2-n$", "$n-1$", "$n^2$"], 0));
  q.push(tf("hard", "$_nP_3=n(n-1)(n-2)$, so $_8P_3=336$.", true));
  q.push(tf("hard", "The equation $_nP_2=90$ has an integer solution.", true, "$n=10$."));
  q.push(tf("hard", "$_nP_2=50$ has an integer solution.", false, "$n(n-1)=50$ has none."));
  q.push(ms("hard", "Which equal $\\dfrac{(n+2)!}{n!}$?", ["$(n+2)(n+1)$", "$n^2+3n+2$", "$_{\\,n+2}P_2$", "$n+2$"], [0, 1, 2]));
  q.push(mc("hard", "How many 3-digit numbers with distinct digits are odd?", ["$320$", "$360$", "$328$", "$405$"], 0));
  q.push(num("hard", "How many 3-digit numbers with distinct digits are odd?", 320, 0));
  q.push(fill("hard", "Solve $_nP_3=6\\cdot{}_nP_2$: $n=$ ___.", ["8"]));
  q.push(mc("hard", "How many ways can 5 distinct trophies be given to 8 students, at most one each?", ["$6720$", "$32768$", "$40320$", "$120$"], 0));
  q.push(num("hard", "Compute $_8P_5$.", 6720, 0));
  return q;
}

// ── 1.3 Permutations with Identical Objects ──────────────────
function g13() {
  const q = [];
  // EASY
  q.push(mc("easy", "How many arrangements of the letters of TOO?", ["$3$", "$6$", "$2$", "$1$"], 0));
  q.push(mc("easy", "How many arrangements of the letters of BOOK?", ["$12$", "$24$", "$6$", "$4$"], 0));
  q.push(mc("easy", "Arrangements of 2 red and 1 blue identical flags in a row?", ["$3$", "$6$", "$2$", "$1$"], 0));
  q.push(mc("easy", "The formula for arrangements with repeats is:", ["$\\dfrac{n!}{a!\\,b!\\cdots}$", "$n!\\,a!$", "$\\dfrac{n!}{r!}$", "$a!\\,b!$"], 0));
  q.push(mc("easy", "How many arrangements of the letters of MOM?", ["$3$", "$6$", "$2$", "$1$"], 0));
  q.push(mc("easy", "How many arrangements of the letters of TREE?", ["$12$", "$24$", "$6$", "$4$"], 0));
  q.push(ms("easy", "Which words have exactly one pair of repeated letters?", ["BOOK", "TREE", "CAT", "DEED"], [0, 1]));
  q.push(ms("easy", "Which equal $\\dfrac{4!}{2!}$?", ["$12$", "arrangements of BOOK", "$24$", "$4\\cdot3$"], [0, 1, 3]));
  q.push(tf("easy", "Identical objects cause overcounting, so we divide.", true));
  q.push(tf("easy", "Arrangements of BALL number $12$.", true));
  q.push(tf("easy", "Arrangements of CAT number $6$.", true));
  q.push(num("easy", "How many arrangements of the letters of BOOK?", 12, 0));
  q.push(num("easy", "How many arrangements of the letters of NOON?", 6, 0));
  q.push(num("easy", "How many arrangements of 3 identical A's and 2 identical B's?", 10, 0));
  q.push(num("easy", "How many arrangements of the letters of ADD?", 3, 0));
  q.push(fill("easy", "Arrangements of TEE $=$ ___.", ["3"]));
  q.push(fill("easy", "$\\dfrac{5!}{3!2!}=$ ___.", ["10"]));
  q.push(mc("easy", "How many arrangements of the letters of APPLE?", ["$60$", "$120$", "$30$", "$20$"], 0));
  q.push(num("easy", "How many arrangements of the letters of LEVEL?", 30, 0));
  q.push(tf("easy", "Arrangements of the digits $1,1,2$ number $3$.", true));
  // MEDIUM
  q.push(mc("medium", "How many arrangements of the letters of BANANA?", ["$60$", "$120$", "$720$", "$180$"], 0));
  q.push(mc("medium", "Shortest routes across a $4\\times3$ grid (4 rights, 3 ups)?", ["$35$", "$12$", "$210$", "$7$"], 0));
  q.push(mc("medium", "How many arrangements of the letters of SUCCESS?", ["$420$", "$840$", "$5040$", "$210$"], 0));
  q.push(mc("medium", "How many 8-bit strings contain exactly three $1$s?", ["$56$", "$40320$", "$24$", "$28$"], 0));
  q.push(mc("medium", "Arrangements of the letters of ONTARIO?", ["$2520$", "$5040$", "$1260$", "$720$"], 0));
  q.push(mc("medium", "Shortest routes corner to corner of a $5\\times5$ grid?", ["$252$", "$120$", "$25$", "$3125$"], 0));
  q.push(ms("medium", "Which equal $\\dfrac{6!}{3!\\,2!}$?", ["$60$", "arrangements of BANANA", "$720$", "$\\dfrac{720}{12}$"], [0, 1, 3]));
  q.push(ms("medium", "For an 8-bit string with three $1$s, which count it?", ["$\\binom{8}{3}$", "$56$", "$\\dfrac{8!}{3!5!}$", "$8^3$"], [0, 1, 2]));
  q.push(tf("medium", "Arrangements of COMMITTEE number $45\\,360$.", true));
  q.push(tf("medium", "A lattice path count equals a binomial coefficient.", true));
  q.push(tf("medium", "Arrangements of TENNESSEE number $3780$.", true));
  q.push(num("medium", "How many arrangements of the letters of BANANA?", 60, 0));
  q.push(num("medium", "How many arrangements of the letters of CANADA?", 120, 0));
  q.push(num("medium", "Shortest routes across a $3\\times2$ grid?", 10, 0));
  q.push(num("medium", "How many arrangements of the letters of COMMITTEE?", 45360, 0));
  q.push(fill("medium", "Arrangements of the letters of TENNESSEE $=$ ___.", ["3780"]));
  q.push(fill("medium", "$\\dfrac{7!}{3!\\,2!}=$ ___.", ["420"]));
  q.push(mc("medium", "How many arrangements of the letters of BOOKKEEPER?", ["$151\\,200$", "$302\\,400$", "$75\\,600$", "$5040$"], 0));
  q.push(num("medium", "How many arrangements of the letters of TORONTO?", 420, 0));
  q.push(fill("medium", "Shortest routes on a $4\\times4$ grid $=$ ___.", ["70"]));
  // HARD
  q.push(mc("hard", "How many arrangements of MISSISSIPPI have all four S's together?", ["$840$", "$34\\,650$", "$1680$", "$420$"], 0));
  q.push(mc("hard", "How many arrangements of the letters of TORONTO begin with T?", ["$120$", "$420$", "$60$", "$210$"], 0));
  q.push(mc("hard", "How many arrangements of MISSISSIPPI?", ["$34\\,650$", "$39\\,916\\,800$", "$69\\,300$", "$5040$"], 0));
  q.push(mc("hard", "On a $4\\times4$ grid, how many shortest routes pass through the centre point $(2,2)$?", ["$36$", "$70$", "$16$", "$252$"], 0));
  q.push(mc("hard", "How many arrangements of BOOKKEEPER have the two K's together?", ["$30\\,240$", "$15\\,120$", "$60\\,480$", "$151\\,200$"], 0));
  q.push(mc("hard", "How many arrangements of the letters of STATISTICS?", ["$50\\,400$", "$100\\,800$", "$25\\,200$", "$3\\,628\\,800$"], 0));
  q.push(num("hard", "How many arrangements of MISSISSIPPI have the four S's together?", 840, 0));
  q.push(num("hard", "How many arrangements of the letters of STATISTICS?", 50400, 0));
  q.push(num("hard", "How many arrangements of TORONTO begin with T?", 120, 0));
  q.push(num("hard", "On a $4\\times4$ grid, shortest routes through $(2,2)$?", 36, 0));
  q.push(mc("hard", "How many arrangements of the digits of $112233$ have the two $1$s NOT adjacent?", ["$60$", "$90$", "$30$", "$120$"], 0));
  q.push(num("hard", "Total arrangements of the digits of $112233$?", 90, 0));
  q.push(tf("hard", "STATISTICS has $10!/(3!\\,3!\\,2!)=50\\,400$ arrangements.", true));
  q.push(tf("hard", "MISSISSIPPI has fewer arrangements than $11!$ because of its repeated letters.", true));
  q.push(ms("hard", "Which equal the number of $10$-bit strings with four $1$s?", ["$\\binom{10}{4}$", "$210$", "$\\dfrac{10!}{4!6!}$", "$10^4$"], [0, 1, 2]));
  q.push(mc("hard", "How many shortest routes from $(0,0)$ to $(3,3)$ avoid the point $(1,1)$?", ["$8$", "$20$", "$14$", "$16$"], 0));
  q.push(num("hard", "Shortest routes from $(0,0)$ to $(3,3)$ that avoid $(1,1)$?", 8, 0));
  q.push(fill("hard", "Arrangements of BOOKKEEPER with the O's together $=$ ___.", ["30240", "30,240"]));
  q.push(mc("hard", "How many arrangements of AABBC have no two identical letters adjacent?", ["$12$", "$30$", "$18$", "$24$"], 0));
  q.push(num("hard", "How many arrangements of the letters of BOOKKEEPER with the two K's together?", 30240, 0));
  return q;
}

// ── 1.4 Permutations with Constraints ────────────────────────
function g14() {
  const q = [];
  // EASY
  q.push(mc("easy", "How many ways to seat 4 people around a round table?", ["$6$", "$24$", "$3$", "$12$"], 0));
  q.push(mc("easy", "Two specific people among 4 in a row must sit together. How many?", ["$12$", "$24$", "$6$", "$4$"], 0));
  q.push(mc("easy", "Circular arrangements of $n$ people number:", ["$(n-1)!$", "$n!$", "$n$", "$2n$"], 0));
  q.push(mc("easy", "How many ways to seat 5 people around a round table?", ["$24$", "$120$", "$5$", "$60$"], 0));
  q.push(mc("easy", "To keep 2 people together, we treat them as one:", ["block", "gap", "circle", "case"], 0));
  q.push(mc("easy", "3 people in a row with 2 specific together. How many?", ["$4$", "$6$", "$2$", "$3$"], 0));
  q.push(ms("easy", "Which describe the 'together' method?", ["glue into a block", "arrange inside the block", "use the gap method", "subtract from the total"], [0, 1]));
  q.push(ms("easy", "Which equal $(6-1)!$?", ["$120$", "round-table seatings of 6", "$720$", "$5!$"], [0, 1, 3]));
  q.push(tf("easy", "Circular arrangements of $n$ objects number $(n-1)!$.", true));
  q.push(tf("easy", "To force two people apart, subtract the 'together' count from the total.", true));
  q.push(tf("easy", "5 people around a round table can sit in $24$ ways.", true));
  q.push(num("easy", "Round-table seatings of 4 people?", 6, 0));
  q.push(num("easy", "Round-table seatings of 6 people?", 120, 0));
  q.push(num("easy", "4 people in a row with 2 specific together?", 12, 0));
  q.push(num("easy", "Ways to arrange PENCIL with P and L at the two ends?", 48, 0));
  q.push(fill("easy", "Round-table seatings of 5 people $=$ ___.", ["24"]));
  q.push(fill("easy", "$(4-1)!=$ ___.", ["6"]));
  q.push(mc("easy", "6 people in a row with 2 specific together. How many?", ["$240$", "$720$", "$120$", "$48$"], 0));
  q.push(num("easy", "6 people in a row with 2 specific together?", 240, 0));
  q.push(tf("easy", "Arranging a word so it starts with a fixed letter fixes one position.", true));
  // MEDIUM
  q.push(mc("medium", "6 people in a row; 2 specific NOT together. How many?", ["$480$", "$240$", "$600$", "$720$"], 0));
  q.push(mc("medium", "5 math and 2 English books; all math together (all distinct). How many?", ["$720$", "$5040$", "$240$", "$120$"], 0));
  q.push(mc("medium", "7 people at a round table; 2 specific together. How many?", ["$240$", "$720$", "$1440$", "$120$"], 0));
  q.push(mc("medium", "Arrange FLOWER so it begins with a vowel. How many?", ["$240$", "$720$", "$120$", "$480$"], 0));
  q.push(mc("medium", "6 people in a row; a group of 3 stays together. How many?", ["$144$", "$720$", "$36$", "$120$"], 0));
  q.push(mc("medium", "Arrange NUMBER with N and R at the two ends. How many?", ["$48$", "$120$", "$24$", "$240$"], 0));
  q.push(ms("medium", "Which count 6 people in a row with 2 specific together?", ["$5!\\cdot2!$", "$240$", "$6!-5!\\cdot2!$", "$720$"], [0, 1]));
  q.push(ms("medium", "For 'not together', which are valid?", ["total $-$ together", "$6!-5!\\cdot2!$", "the gap method", "$5!\\cdot2!$"], [0, 1, 2]));
  q.push(tf("medium", "6 people in a row have $480$ arrangements with 2 specific people apart.", true));
  q.push(tf("medium", "Gluing 3 people into a block among 6 gives $4!\\cdot3!$ arrangements.", true));
  q.push(tf("medium", "A round table of 7 with two people glued gives $5!\\cdot2!=240$.", true));
  q.push(num("medium", "6 people in a row; 2 specific NOT together?", 480, 0));
  q.push(num("medium", "5 math and 2 English books with all math together?", 720, 0));
  q.push(num("medium", "Arrange FLOWER beginning with a vowel?", 240, 0));
  q.push(num("medium", "3 couples around a round table, each couple together?", 16, 0));
  q.push(fill("medium", "6 people in a row with a block of 3 together $=$ ___.", ["144"]));
  q.push(fill("medium", "Arrange NUMBER with N,R at the ends $=$ ___.", ["48"]));
  q.push(mc("medium", "3 couples at a round table, each couple together. How many?", ["$16$", "$48$", "$8$", "$32$"], 0));
  q.push(num("medium", "7 guests at a round table with 2 specific together?", 240, 0));
  q.push(fill("medium", "6 people in a row, 2 specific not together $=$ ___.", ["480"]));
  // HARD
  q.push(mc("hard", "4 boys and 3 girls in a row; no two girls adjacent. How many?", ["$1440$", "$720$", "$5040$", "$144$"], 0));
  q.push(mc("hard", "4 men and 4 women in a row, alternating by gender. How many?", ["$1152$", "$40320$", "$576$", "$2304$"], 0));
  q.push(mc("hard", "8 people at a round table; 2 specific NOT together. How many?", ["$3600$", "$5040$", "$1440$", "$4320$"], 0));
  q.push(mc("hard", "5 couples at a round table; each couple together. How many?", ["$768$", "$3840$", "$384$", "$120$"], 0));
  q.push(mc("hard", "How many arrangements of the letters of PICTURE have all 3 vowels together?", ["$720$", "$4320$", "$120$", "$5040$"], 0));
  q.push(mc("hard", "7 people in a row; 2 specific NOT adjacent. How many?", ["$3600$", "$5040$", "$1440$", "$720$"], 0));
  q.push(num("hard", "4 boys and 3 girls in a row with no two girls adjacent?", 1440, 0));
  q.push(num("hard", "4 men and 4 women in a row alternating by gender?", 1152, 0));
  q.push(num("hard", "8 people at a round table with 2 specific not together?", 3600, 0));
  q.push(num("hard", "5 couples at a round table, each couple together?", 768, 0));
  q.push(mc("hard", "How many arrangements of 5 distinct keys on a circular ring (reflections counted as the same)?", ["$12$", "$24$", "$120$", "$60$"], 0));
  q.push(num("hard", "Arrangements of 5 distinct keys on a ring (reflections identical)?", 12, 0));
  q.push(tf("hard", "Seating $4$ boys and $4$ girls alternately gives $2\\cdot4!\\cdot4!=1152$.", true));
  q.push(tf("hard", "The gap method places non-adjacent items into the spaces between already-seated items.", true));
  q.push(ms("hard", "Which count 4 boys, 3 girls in a row with no two girls adjacent?", ["$4!\\cdot{}_5P_3$", "$1440$", "$24\\cdot60$", "$7!$"], [0, 1, 2]));
  q.push(mc("hard", "How many arrangements of MACHINE keep the vowels (A, I, E) in that relative order?", ["$840$", "$5040$", "$120$", "$720$"], 0));
  q.push(num("hard", "Arrangements of MACHINE with vowels A, I, E in that fixed relative order?", 840, 0));
  q.push(fill("hard", "Arrangements of PICTURE with all 3 vowels together $=$ ___.", ["720"]));
  q.push(mc("hard", "6 people (3 couples) in a ROW, each couple together. How many?", ["$48$", "$16$", "$96$", "$720$"], 0));
  q.push(num("hard", "6 people (3 couples) in a row with each couple together?", 48, 0));
  return q;
}

// ── 1.5 Combinations ─────────────────────────────────────────
function g15() {
  const q = [];
  // EASY
  q.push(mc("easy", "Compute $\\binom{5}{2}$.", ["$10$", "$20$", "$5$", "$25$"], 0));
  q.push(mc("easy", "Compute $\\binom{6}{1}$.", ["$6$", "$1$", "$5$", "$36$"], 0));
  q.push(mc("easy", "Compute $\\binom{n}{0}$.", ["$1$", "$0$", "$n$", "$n!$"], 0));
  q.push(mc("easy", "How many handshakes among 4 people?", ["$6$", "$12$", "$4$", "$8$"], 0));
  q.push(mc("easy", "The combination formula is:", ["$\\dfrac{n!}{r!(n-r)!}$", "$\\dfrac{n!}{(n-r)!}$", "$n!\\,r!$", "$\\dfrac{n!}{r!}$"], 0));
  q.push(mc("easy", "Compute $\\binom{4}{2}$.", ["$6$", "$8$", "$4$", "$12$"], 0));
  q.push(mc("easy", "Does order matter in a combination?", ["no", "yes", "sometimes", "only if repeats"], 0));
  q.push(ms("easy", "Which situations are combinations (order irrelevant)?", ["choosing a committee of 3", "a handshake", "ranking 3 finishers", "a lottery draw"], [0, 1, 3]));
  q.push(ms("easy", "Which equal $\\binom{5}{2}$?", ["$10$", "$\\binom{5}{3}$", "$\\dfrac{5\\cdot4}{2}$", "$20$"], [0, 1, 2]));
  q.push(tf("easy", "$\\binom{n}{r}=\\binom{n}{n-r}$.", true));
  q.push(tf("easy", "$\\binom{7}{2}=21$.", true));
  q.push(tf("easy", "A handshake between two people is a combination.", true));
  q.push(num("easy", "Compute $\\binom{6}{2}$.", 15, 0));
  q.push(num("easy", "Compute $\\binom{8}{2}$.", 28, 0));
  q.push(num("easy", "How many handshakes among 5 people?", 10, 0));
  q.push(num("easy", "Compute $\\binom{10}{1}$.", 10, 0));
  q.push(fill("easy", "$\\binom{7}{2}=$ ___.", ["21"]));
  q.push(fill("easy", "$\\binom{n}{n}=$ ___.", ["1"]));
  q.push(mc("easy", "How many 3-person committees from 5 people?", ["$10$", "$60$", "$15$", "$20$"], 0));
  q.push(num("easy", "Compute $\\binom{9}{2}$.", 36, 0));
  // MEDIUM
  q.push(mc("medium", "Compute $\\binom{10}{3}$.", ["$120$", "$720$", "$30$", "$210$"], 0));
  q.push(mc("medium", "Choose 2 of 6 men and 3 of 5 women. How many groups?", ["$150$", "$90$", "$300$", "$60$"], 0));
  q.push(mc("medium", "How many diagonals does an octagon have?", ["$20$", "$28$", "$16$", "$8$"], 0));
  q.push(mc("medium", "How many triangles from 10 points (no 3 collinear)?", ["$120$", "$720$", "$30$", "$100$"], 0));
  q.push(mc("medium", "Compute $\\binom{15}{13}$.", ["$105$", "$210$", "$15$", "$2$"], 0));
  q.push(mc("medium", "How many 5-card hands from a 52-card deck?", ["$2\\,598\\,960$", "$311\\,875\\,200$", "$52^5$", "$1\\,326$"], 0));
  q.push(ms("medium", "Which equal $\\binom{12}{2}$?", ["$66$", "handshakes among 12", "$\\dfrac{12\\cdot11}{2}$", "$132$"], [0, 1, 2]));
  q.push(ms("medium", "Which count choosing 3 boys and 2 girls from 7 boys, 5 girls?", ["$\\binom{7}{3}\\binom{5}{2}$", "$350$", "$35\\cdot10$", "$\\binom{12}{5}$"], [0, 1, 2]));
  q.push(tf("medium", "The number of diagonals of an $n$-gon is $\\binom{n}{2}-n$.", true));
  q.push(tf("medium", "$\\binom{20}{18}=190$.", true));
  q.push(tf("medium", "Choosing 3 of 7 boys AND 2 of 5 girls gives $350$ groups.", true));
  q.push(num("medium", "Compute $\\binom{10}{4}$.", 210, 0));
  q.push(num("medium", "How many diagonals does a decagon have?", 35, 0));
  q.push(num("medium", "Choose 3 of 7 boys and 2 of 5 girls: how many groups?", 350, 0));
  q.push(num("medium", "How many triangles from 8 points (no 3 collinear)?", 56, 0));
  q.push(fill("medium", "$\\binom{15}{5}=$ ___.", ["3003"]));
  q.push(fill("medium", "The number of 6-number selections from 49 is $\\binom{49}{6}=$ ___.", ["13983816", "13,983,816"]));
  q.push(mc("medium", "How many starting fives from 15 players?", ["$3003$", "$360360$", "$75$", "$1365$"], 0));
  q.push(num("medium", "How many 4-person committees from 12 people?", 495, 0));
  q.push(fill("medium", "Handshakes among 20 people $=$ ___.", ["190"]));
  // HARD
  q.push(mc("hard", "A team of 5 from 7 forwards and 4 defenders with exactly 3 forwards. How many?", ["$210$", "$126$", "$35$", "$462$"], 0));
  q.push(mc("hard", "Choose 3 of 7 pop and 2 of 5 rock songs, then play all 5 in order. How many sets?", ["$42\\,000$", "$350$", "$120$", "$3500$"], 0));
  q.push(mc("hard", "From 12 points on a circle, how many triangles can be drawn?", ["$220$", "$66$", "$1320$", "$132$"], 0));
  q.push(mc("hard", "How many chords join pairs of 12 points on a circle?", ["$66$", "$132$", "$220$", "$78$"], 0));
  q.push(mc("hard", "A committee of 4 from 12 must include a specific person. How many?", ["$165$", "$495$", "$330$", "$220$"], 0));
  q.push(mc("hard", "How many 5-card hands consist of 3 hearts and 2 spades?", ["$\\binom{13}{3}\\binom{13}{2}$", "$\\binom{26}{5}$", "$\\binom{13}{5}$", "$\\binom{52}{5}$"], 0));
  q.push(num("hard", "A team of 5 from 7 forwards and 4 defenders with exactly 3 forwards?", 210, 0));
  q.push(num("hard", "From 12 points on a circle, number of triangles?", 220, 0));
  q.push(num("hard", "Choose 4 of 9 for a bag AND arrange them on a shelf differs from just choosing. How many arrangements ($_9P_4$)?", 3024, 0));
  q.push(num("hard", "How many 5-card hands have exactly 3 hearts and 2 clubs?", 22308, 0));
  q.push(mc("hard", "How many ways to split 10 distinct books, giving 3 to Ann and 4 to Ben (rest kept)?", ["$4200$", "$5040$", "$210$", "$120$"], 0));
  q.push(num("hard", "Split 10 distinct books: 3 to Ann, 4 to Ben. How many ways?", 4200, 0));
  q.push(tf("hard", "$\\binom{n}{r}\\cdot r!={}_nP_r$.", true));
  q.push(tf("hard", "Choosing then arranging 4 of 9 books equals $\\binom{9}{4}\\cdot4!=3024$.", true));
  q.push(ms("hard", "Which equal the number of triangles from $n$ points (no 3 collinear)?", ["$\\binom{n}{3}$", "$\\dfrac{n(n-1)(n-2)}{6}$", "$\\binom{n}{2}$", "$_nP_3$"], [0, 1]));
  q.push(mc("hard", "How many committees of 5 from 9 people exclude two specific people?", ["$21$", "$126$", "$35$", "$70$"], 0));
  q.push(num("hard", "Committees of 5 from 9 people that exclude two specific people?", 21, 0));
  q.push(fill("hard", "$\\binom{7}{3}\\binom{4}{2}=$ ___.", ["210"]));
  q.push(mc("hard", "From 6 men and 4 women, how many committees of 4 have equal numbers of each?", ["$90$", "$36$", "$120$", "$210$"], 0));
  q.push(num("hard", "From 6 men and 4 women, committees of 4 with 2 of each?", 90, 0));
  return q;
}

// ── 1.6 Combinations with Cases & the Complement ─────────────
function g16() {
  const q = [];
  // EASY
  q.push(mc("easy", "How many non-empty subsets does a 4-element set have?", ["$15$", "$16$", "$8$", "$14$"], 0));
  q.push(mc("easy", "A committee of 3 from 5 with at least 1 chosen — this is really just:", ["$\\binom{5}{3}$", "$\\binom{5}{2}$", "$0$", "$\\binom{5}{1}$"], 0));
  q.push(mc("easy", "'At least one' is fastest as:", ["total $-$ none", "sum of all", "$0$", "$n!$"], 0));
  q.push(mc("easy", "How many subsets of a 3-element set have at least one element?", ["$7$", "$8$", "$6$", "$3$"], 0));
  q.push(mc("easy", "To include a required member, you:", ["fix them, choose the rest", "ignore them", "subtract them", "double count"], 0));
  q.push(ms("easy", "Which are 'at least one' strategies?", ["complement", "$2^n-1$ for subsets", "list every case", "total $-$ none"], [0, 1, 3]));
  q.push(ms("easy", "Which equal the number of non-empty subsets of a 5-set?", ["$31$", "$2^5-1$", "$32$", "all subsets minus the empty set"], [0, 1, 3]));
  q.push(tf("easy", "$P(\\text{at least one})$ uses the complement of 'none'.", true));
  q.push(tf("easy", "A 5-element set has $31$ non-empty subsets.", true));
  q.push(tf("easy", "Fixing a required committee member reduces the remaining choice.", true));
  q.push(num("easy", "Non-empty subsets of a 6-element set?", 63, 0));
  q.push(num("easy", "How many subsets of a 4-set contain at least one element?", 15, 0));
  q.push(num("easy", "A committee of 4 from 6 that must include a specific person: $\\binom{5}{3}=$ ?", 10, 0));
  q.push(fill("easy", "$2^{8}-1=$ ___.", ["255"]));
  q.push(fill("easy", "Non-empty subsets of a 10-set $=$ ___.", ["1023"]));
  q.push(mc("easy", "A pizza with at least one of 5 toppings. How many?", ["$31$", "$32$", "$25$", "$5$"], 0));
  q.push(num("easy", "A pizza with at least one of 6 toppings?", 63, 0));
  q.push(tf("easy", "There are $2^7=128$ subsets of a 7-set.", true));
  q.push(mc("easy", "Choose 5 from 9 including a fixed person: how many?", ["$70$", "$126$", "$56$", "$35$"], 0));
  q.push(num("easy", "Choose 5 from 9 people including one fixed person ($\\binom{8}{4}$)?", 70, 0));
  // MEDIUM
  q.push(mc("medium", "A committee of 4 from 5 men and 4 women with at least 1 woman. How many?", ["$121$", "$126$", "$5$", "$120$"], 0));
  q.push(mc("medium", "From 5 men and 4 women, choose 3 with at least 2 men. How many?", ["$50$", "$40$", "$60$", "$10$"], 0));
  q.push(mc("medium", "Choose 5 from 8 boys and 4 girls with exactly 3 boys. How many?", ["$336$", "$792$", "$56$", "$120$"], 0));
  q.push(mc("medium", "A committee of 5 from 12 that excludes two specific people. How many?", ["$252$", "$792$", "$120$", "$462$"], 0));
  q.push(mc("medium", "How many 5-card hands are all hearts?", ["$1287$", "$2598960$", "$1716$", "$13$"], 0));
  q.push(mc("medium", "A pizza with at least one of 8 toppings. How many?", ["$255$", "$256$", "$128$", "$8$"], 0));
  q.push(ms("medium", "Which count a committee of 4 from 5M, 4W with at least one woman?", ["$\\binom{9}{4}-\\binom{5}{4}$", "$121$", "$126-5$", "$\\binom{4}{1}\\binom{5}{3}$"], [0, 1, 2]));
  q.push(ms("medium", "For 'at least 2 women', which cases apply (choosing 4 from 5M/4W)?", ["exactly 2 women", "exactly 3 women", "exactly 4 women", "exactly 0 women"], [0, 1, 2]));
  q.push(tf("medium", "A committee of 4 from 5M, 4W with at least one woman numbers $121$.", true));
  q.push(tf("medium", "There are $1287$ all-heart 5-card hands.", true));
  q.push(tf("medium", "$\\binom{9}{4}-\\binom{5}{4}=121$.", true));
  q.push(num("medium", "Committee of 4 from 6 men and 3 women with at least one woman?", 111, 0));
  q.push(num("medium", "From 7 boys and 5 girls, choose 4 with exactly 2 girls?", 210, 0));
  q.push(num("medium", "How many 5-card hands are all spades?", 1287, 0));
  q.push(num("medium", "From 4 men and 4 women, committees of 4 with equal numbers?", 36, 0));
  q.push(fill("medium", "$\\binom{9}{4}-\\binom{6}{4}=$ ___.", ["111"]));
  q.push(fill("medium", "A pizza with at least one of 8 toppings $=$ ___.", ["255"]));
  q.push(mc("medium", "How many 5-card hands are a flush of hearts or of spades?", ["$2574$", "$1287$", "$5148$", "$1716$"], 0));
  q.push(num("medium", "How many 5-card hands are a flush of hearts or of spades?", 2574, 0));
  q.push(fill("medium", "From 5 men and 4 women, choose 3 with at least 2 men $=$ ___.", ["50"]));
  // HARD
  q.push(mc("hard", "How many 5-card hands are exactly one pair?", ["$1\\,098\\,240$", "$123\\,552$", "$54\\,912$", "$3\\,744$"], 0));
  q.push(mc("hard", "How many 5-card hands are exactly two pair?", ["$123\\,552$", "$1\\,098\\,240$", "$54\\,912$", "$247\\,104$"], 0));
  q.push(mc("hard", "How many 5-card hands contain at least one ace?", ["$886\\,656$", "$778\\,320$", "$1\\,712\\,304$", "$18\\,472$"], 0));
  q.push(mc("hard", "How many positive divisors does $1200$ have?  ($1200=2^4\\cdot3\\cdot5^2$)", ["$30$", "$24$", "$16$", "$12$"], 0));
  q.push(mc("hard", "From 20 books (12 fiction, 8 non-fiction), choose 5 with at least one non-fiction. How many?", ["$14\\,712$", "$15\\,504$", "$792$", "$13\\,920$"], 0));
  q.push(mc("hard", "How many 5-card hands contain at least one face card (J, Q, K)?", ["$1\\,940\\,952$", "$658\\,008$", "$540\\,540$", "$885\\,720$"], 0));
  q.push(num("hard", "How many 5-card hands are exactly one pair?", 1098240, 0));
  q.push(num("hard", "How many 5-card hands are exactly two pair?", 123552, 0));
  q.push(num("hard", "How many 5-card hands contain at least one ace?", 886656, 0));
  q.push(num("hard", "Number of positive divisors of $1200$?", 30, 0));
  q.push(num("hard", "From 20 books (12 fiction, 8 non-fiction), choose 5 with at least one non-fiction?", 14712, 0));
  q.push(num("hard", "Number of positive divisors of $720$?", 30, 0));
  q.push(tf("hard", "There are $1\\,098\\,240$ one-pair 5-card hands.", true));
  q.push(tf("hard", "Two-pair hands ($123\\,552$) are rarer than one-pair hands.", true));
  q.push(ms("hard", "Which count one-pair 5-card hands?", ["$13\\binom{4}{2}\\binom{12}{3}4^3$", "$1\\,098\\,240$", "$\\binom{13}{2}$", "$\\binom{52}{5}$"], [0, 1]));
  q.push(mc("hard", "A 5-card hand with at least one king: how many?", ["$886\\,656$", "$778\\,320$", "$94\\,143\\,280$", "$48$"], 0));
  q.push(num("hard", "How many 5-card hands contain at least one king?", 886656, 0));
  q.push(fill("hard", "Number of positive divisors of $360$ ($=2^3\\cdot3^2\\cdot5$)  is ___.", ["24"]));
  q.push(mc("hard", "How many 5-card hands are a full house (3 of one rank, 2 of another)?", ["$3744$", "$54\\,912$", "$123\\,552$", "$1287$"], 0));
  q.push(num("hard", "How many 5-card hands are a full house?", 3744, 0));
  return q;
}

// ── 1.7 Pascal's Triangle & Combinatorial Identities ─────────
function g17() {
  const q = [];
  // EASY
  q.push(mc("easy", "The entries of row $n$ of Pascal's triangle are:", ["$\\binom{n}{r}$", "$n^r$", "$_nP_r$", "$n!$"], 0));
  q.push(mc("easy", "Row 2 of Pascal's triangle is:", ["$1,2,1$", "$1,1$", "$1,3,3,1$", "$2,2$"], 0));
  q.push(mc("easy", "The sum of the entries in row $n$ is:", ["$2^n$", "$n^2$", "$n!$", "$2n$"], 0));
  q.push(mc("easy", "$\\binom{n}{0}=$", ["$1$", "$0$", "$n$", "$n!$"], 0));
  q.push(mc("easy", "$\\binom{5}{5}=$", ["$1$", "$5$", "$0$", "$120$"], 0));
  q.push(mc("easy", "Row 3 of Pascal's triangle is:", ["$1,3,3,1$", "$1,2,1$", "$1,4,6,4,1$", "$3,3,3$"], 0));
  q.push(ms("easy", "Which are true of Pascal's triangle?", ["it is symmetric", "row $n$ sums to $2^n$", "entries are $\\binom{n}{r}$", "all entries are $1$"], [0, 1, 2]));
  q.push(ms("easy", "Which equal $\\binom{4}{2}$?", ["$6$", "$\\binom{4}{2}$", "the middle entry of row 4", "$4$"], [0, 1, 2]));
  q.push(tf("easy", "Pascal's triangle is symmetric: $\\binom{n}{r}=\\binom{n}{n-r}$.", true));
  q.push(tf("easy", "The sum of row 4 is $16$.", true));
  q.push(tf("easy", "Row 5 begins and ends with $1$.", true));
  q.push(num("easy", "Sum of the entries in row 5?", 32, 0));
  q.push(num("easy", "The middle entry of row 4 ($\\binom{4}{2}$)?", 6, 0));
  q.push(num("easy", "$\\binom{6}{6}=$", 1, 0));
  q.push(num("easy", "Sum of the entries in row 3?", 8, 0));
  q.push(fill("easy", "Row 4 of Pascal's triangle is $1,4,6,4,$ ___.", ["1"]));
  q.push(fill("easy", "$\\binom{5}{0}+\\cdots+\\binom{5}{5}=$ ___.", ["32"]));
  q.push(mc("easy", "How many subsets does a 6-element set have?", ["$64$", "$32$", "$12$", "$720$"], 0));
  q.push(num("easy", "Number of subsets of a 6-element set?", 64, 0));
  q.push(tf("easy", "The number of subsets of an $n$-set equals the sum of row $n$.", true));
  // MEDIUM
  q.push(mc("medium", "Pascal's identity states $\\binom{n}{r}=$", ["$\\binom{n-1}{r-1}+\\binom{n-1}{r}$", "$\\binom{n-1}{r}$", "$\\binom{n+1}{r}$", "$\\binom{n}{r-1}$"], 0));
  q.push(mc("medium", "Using row 7, $\\binom{8}{3}=\\binom{7}{2}+\\binom{7}{3}=$", ["$56$", "$35$", "$28$", "$70$"], 0));
  q.push(mc("medium", "Which entry equals $\\binom{10}{7}$?", ["$\\binom{10}{3}$", "$\\binom{10}{7}$ only", "$\\binom{7}{3}$", "$\\binom{10}{4}$"], 0));
  q.push(mc("medium", "$\\binom{2}{2}+\\binom{3}{2}+\\binom{4}{2}=$", ["$10$", "$9$", "$6$", "$20$"], 0));
  q.push(mc("medium", "The alternating sum $\\binom{4}{0}-\\binom{4}{1}+\\binom{4}{2}-\\binom{4}{3}+\\binom{4}{4}=$", ["$0$", "$1$", "$16$", "$8$"], 0));
  q.push(mc("medium", "$\\binom{9}{7}=$", ["$36$", "$72$", "$9$", "$84$"], 0));
  q.push(ms("medium", "Which identities are true?", ["$\\binom{n}{r}=\\binom{n}{n-r}$", "$\\sum_r\\binom{n}{r}=2^n$", "alternating row sum $=0$", "$\\binom{n}{r}=n^r$"], [0, 1, 2]));
  q.push(ms("medium", "Which equal $\\binom{10}{4}$?", ["$210$", "$\\binom{9}{3}+\\binom{9}{4}$", "$\\binom{10}{6}$", "$\\binom{10}{4}+1$"], [0, 1, 2]));
  q.push(tf("medium", "$\\binom{7}{3}=\\binom{6}{2}+\\binom{6}{3}$.", true));
  q.push(tf("medium", "The alternating sum of any full row (from $n\\ge1$) is $0$.", true));
  q.push(tf("medium", "$\\binom{12}{5}=\\binom{11}{4}+\\binom{11}{5}$.", true));
  q.push(num("medium", "Compute $\\binom{9}{3}+\\binom{9}{4}$ (which equals $\\binom{10}{4}$).", 210, 0));
  q.push(num("medium", "$\\binom{2}{2}+\\binom{3}{2}+\\binom{4}{2}+\\binom{5}{2}$ (hockey stick)?", 20, 0));
  q.push(num("medium", "The 3rd entry (position $r=2$) of row 9, i.e. $\\binom{9}{2}$?", 36, 0));
  q.push(num("medium", "Number of subsets of size $\\ge1$ of a 5-element set?", 31, 0));
  q.push(fill("medium", "Sum of the entries in row 7 $=$ ___.", ["128"]));
  q.push(fill("medium", "$\\binom{2}{2}+\\binom{3}{2}+\\binom{4}{2}=$ ___.", ["10"]));
  q.push(mc("medium", "How many shortest grid routes reach the cell 3 right and 2 up?", ["$10$", "$6$", "$5$", "$20$"], 0));
  q.push(num("medium", "Shortest grid routes to the cell 4 right and 3 up ($\\binom{7}{3}$)?", 35, 0));
  q.push(fill("medium", "$\\binom{12}{5}=$ ___.", ["792"]));
  // HARD
  q.push(mc("hard", "Evaluate $\\binom{4}{0}^2+\\binom{4}{1}^2+\\binom{4}{2}^2+\\binom{4}{3}^2+\\binom{4}{4}^2$.", ["$70$", "$16$", "$256$", "$35$"], 0));
  q.push(mc("hard", "$\\sum_{k=0}^{n}\\binom{n}{k}^2$ equals:", ["$\\binom{2n}{n}$", "$2^n$", "$n^2$", "$\\binom{2n}{2}$"], 0));
  q.push(mc("hard", "The hockey-stick identity gives $\\sum_{i=2}^{6}\\binom{i}{2}=$", ["$\\binom{7}{3}=35$", "$\\binom{6}{3}=20$", "$\\binom{7}{2}=21$", "$56$"], 0));
  q.push(mc("hard", "$\\binom{n}{1}+2\\binom{n}{2}+3\\binom{n}{3}+\\cdots$ relates to $n\\cdot2^{n-1}$; for $n=4$ it equals:", ["$32$", "$16$", "$24$", "$8$"], 0));
  q.push(mc("hard", "The number of subsets of a 10-set with an even size is:", ["$512$", "$1024$", "$256$", "$500$"], 0));
  q.push(num("hard", "Evaluate $\\sum_{k=0}^{4}\\binom{4}{k}^2$ (equals $\\binom{8}{4}$).", 70, 0));
  q.push(num("hard", "Evaluate $\\sum_{k=0}^{5}\\binom{5}{k}^2$ (equals $\\binom{10}{5}$).", 252, 0));
  q.push(num("hard", "Number of even-sized subsets of a 10-element set?", 512, 0));
  q.push(num("hard", "$\\sum_{k=1}^{n}k\\binom{n}{k}$ for $n=4$ (equals $4\\cdot2^{3}$)?", 32, 0));
  q.push(mc("hard", "How many shortest routes from $(0,0)$ to $(4,4)$?", ["$70$", "$40$", "$256$", "$35$"], 0));
  q.push(num("hard", "Shortest routes from $(0,0)$ to $(4,4)$?", 70, 0));
  q.push(tf("hard", "$\\sum_{k}\\binom{n}{k}^2=\\binom{2n}{n}$ (Vandermonde).", true));
  q.push(tf("hard", "A set with $n$ elements has $2^{n-1}$ even-sized subsets (for $n\\ge1$).", true));
  q.push(ms("hard", "Which equal $\\binom{8}{4}$?", ["$70$", "$\\sum_{k=0}^{4}\\binom{4}{k}^2$", "shortest routes to $(4,4)$", "$\\binom{8}{3}$"], [0, 1, 2]));
  q.push(mc("hard", "$\\binom{6}{0}+\\binom{6}{2}+\\binom{6}{4}+\\binom{6}{6}=$", ["$32$", "$64$", "$16$", "$21$"], 0));
  q.push(num("hard", "$\\binom{6}{0}+\\binom{6}{2}+\\binom{6}{4}+\\binom{6}{6}$?", 32, 0));
  q.push(fill("hard", "$\\sum_{k=0}^{5}\\binom{5}{k}^2=$ ___.", ["252"]));
  q.push(mc("hard", "The number of lattice paths from $(0,0)$ to $(5,3)$ is:", ["$56$", "$120$", "$28$", "$35$"], 0));
  q.push(num("hard", "Lattice paths from $(0,0)$ to $(5,3)$?", 56, 0));
  q.push(tf("hard", "The sum of the squares of row 3 entries is $\\binom{6}{3}=20$.", true));
  return q;
}

// ── 1.8 The Binomial Theorem ─────────────────────────────────
function g18() {
  const q = [];
  // EASY
  q.push(mc("easy", "How many terms are in the expansion of $(a+b)^{5}$?", ["$6$", "$5$", "$10$", "$32$"], 0));
  q.push(mc("easy", "The general term of $(a+b)^n$ is:", ["$\\binom{n}{k}a^{n-k}b^{k}$", "$\\binom{n}{k}a^{k}b^{k}$", "$a^{n}b^{n}$", "$\\binom{n}{k}$"], 0));
  q.push(mc("easy", "Expand $(x+1)^2$.", ["$x^2+2x+1$", "$x^2+1$", "$x^2+x+1$", "$2x+1$"], 0));
  q.push(mc("easy", "The coefficients of $(a+b)^3$ come from which row of Pascal?", ["row 3", "row 2", "row 4", "row 1"], 0));
  q.push(mc("easy", "The sum of the coefficients of $(x+1)^4$ (set $x=1$) is:", ["$16$", "$8$", "$4$", "$1$"], 0));
  q.push(mc("easy", "Expand $(x-1)^2$.", ["$x^2-2x+1$", "$x^2+2x+1$", "$x^2-1$", "$x^2+1$"], 0));
  q.push(ms("easy", "Which are true about $(a+b)^n$?", ["it has $n+1$ terms", "coefficients are $\\binom{n}{k}$", "it has $n$ terms", "powers of $a$ decrease"], [0, 1, 3]));
  q.push(ms("easy", "Which equal the coefficient of $x^2$ in $(x+1)^4$?", ["$\\binom{4}{2}$", "$6$", "$\\binom{4}{1}$", "the middle coefficient"], [0, 1, 3]));
  q.push(tf("easy", "$(a+b)^n$ has $n+1$ terms.", true));
  q.push(tf("easy", "The sum of the coefficients of $(x+1)^n$ is $2^n$.", true));
  q.push(tf("easy", "$(x+1)^3=x^3+3x^2+3x+1$.", true));
  q.push(num("easy", "How many terms are in the expansion of $(a+b)^{9}$?", 10, 0));
  q.push(num("easy", "The sum of the coefficients of $(x+1)^5$?", 32, 0));
  q.push(num("easy", "The coefficient of $x^2$ in $(x+1)^4$?", 6, 0));
  q.push(num("easy", "The constant term of $(x+1)^3$?", 1, 0));
  q.push(fill("easy", "Expand $(x+2)^2=x^2+4x+$ ___.", ["4"]));
  q.push(fill("easy", "Number of terms in $(a+b)^{7}$ $=$ ___.", ["8"]));
  q.push(mc("easy", "The middle term of $(a+b)^4$ is:", ["$6a^2b^2$", "$4a^2b^2$", "$a^2b^2$", "$6ab$"], 0));
  q.push(num("easy", "The coefficient of $a^2b^2$ in $(a+b)^4$?", 6, 0));
  q.push(tf("easy", "In $(a+b)^n$ the powers of $b$ increase from $0$ to $n$.", true));
  // MEDIUM
  q.push(mc("medium", "The coefficient of $x^2$ in $(x+3)^4$ is:", ["$54$", "$6$", "$36$", "$12$"], 0));
  q.push(mc("medium", "The term in $x^3$ of $(2x+1)^5$ is:", ["$80x^3$", "$40x^3$", "$10x^3$", "$32x^3$"], 0));
  q.push(mc("medium", "The constant term of $\\left(x+\\dfrac1x\\right)^6$ is:", ["$20$", "$15$", "$6$", "$1$"], 0));
  q.push(mc("medium", "The middle term of $(a+b)^8$ is:", ["$70a^4b^4$", "$56a^4b^4$", "$28a^4b^4$", "$8a^4b^4$"], 0));
  q.push(mc("medium", "The sum of the coefficients of $(2x+3)^4$ is:", ["$625$", "$16$", "$81$", "$5$"], 0));
  q.push(mc("medium", "The coefficient of $x^3$ in $(2x-1)^5$ is:", ["$80$", "$-80$", "$40$", "$-40$"], 0));
  q.push(ms("medium", "Which equal the coefficient of $x^3$ in $(2x+1)^5$?", ["$\\binom{5}{2}2^3$", "$80$", "$10\\cdot8$", "$\\binom{5}{3}$"], [0, 1, 2]));
  q.push(ms("medium", "Which give the constant term of $(x+1/x)^6$?", ["$\\binom{6}{3}$", "$20$", "term with $x^{6-2k}=x^0$", "$\\binom{6}{0}$"], [0, 1, 2]));
  q.push(tf("medium", "The middle term of $(a+b)^6$ is $20a^3b^3$.", true));
  q.push(tf("medium", "The coefficient of $x^4$ in $(1+x)^7$ is $35$.", true));
  q.push(tf("medium", "Setting $x=1$ gives the sum of the coefficients.", true));
  q.push(num("medium", "The coefficient of $x^2$ in $(x+3)^4$?", 54, 0));
  q.push(num("medium", "The constant term of $\\left(x+\\dfrac1x\\right)^4$?", 6, 0));
  q.push(num("medium", "The coefficient of $x^4$ in $(1+x)^7$?", 35, 0));
  q.push(num("medium", "The sum of the coefficients of $(3x-2)^5$ (set $x=1$)?", 1, 0));
  q.push(fill("medium", "The constant term of $\\left(x^2+\\dfrac1x\\right)^6$ is ___.", ["15"]));
  q.push(fill("medium", "The middle coefficient of $(a+b)^8$ is ___.", ["70"]));
  q.push(mc("medium", "The coefficient of $x^6$ in $(x+2)^9$ is:", ["$672$", "$84$", "$512$", "$168$"], 0));
  q.push(num("medium", "The coefficient of $x^6$ in $(x+2)^9$?", 672, 0));
  q.push(fill("medium", "The coefficient of $x^3$ in $(2x-1)^5$ is ___.", ["80"]));
  // HARD
  q.push(mc("hard", "The term independent of $x$ in $\\left(2x-\\dfrac{3}{x^2}\\right)^6$ is:", ["$2160$", "$-2160$", "$4860$", "$240$"], 0));
  q.push(mc("hard", "The constant term of $\\left(x^2-\\dfrac{1}{x}\\right)^6$ is:", ["$15$", "$-15$", "$20$", "$-20$"], 0));
  q.push(mc("hard", "The coefficient of $x^5$ in $\\left(x-\\dfrac{2}{x}\\right)^7$ is:", ["$-14$", "$14$", "$-84$", "$84$"], 0));
  q.push(mc("hard", "The coefficient of $x^{10}$ in $(x^2+2)^7$ is:", ["$84$", "$168$", "$672$", "$280$"], 0));
  q.push(mc("hard", "In $\\left(x+\\dfrac{2}{x}\\right)^8$, the constant term is:", ["$1120$", "$70$", "$560$", "$256$"], 0));
  q.push(num("hard", "The term independent of $x$ in $\\left(2x-\\dfrac{3}{x^2}\\right)^6$?", 2160, 0));
  q.push(num("hard", "The constant term of $\\left(x+\\dfrac{2}{x}\\right)^8$?", 1120, 0));
  q.push(num("hard", "The coefficient of $x^{10}$ in $(x^2+2)^7$?", 84, 0));
  q.push(mc("hard", "The coefficient of $x^4$ in $(1+x)^{2}(1+x)^{5}$ (i.e. $(1+x)^7$) is:", ["$35$", "$21$", "$42$", "$70$"], 0));
  q.push(mc("hard", "The coefficient of $x^2$ in $(1+x)(1+x)^{4}$ is:", ["$10$", "$6$", "$4$", "$5$"], 0));
  q.push(num("hard", "The coefficient of $x^2$ in $(1+x)^5$?", 10, 0));
  q.push(num("hard", "The greatest coefficient in $(1+x)^{6}$ (the middle one)?", 20, 0));
  q.push(tf("hard", "The general term of $\\left(2x-3/x^2\\right)^6$ has $x$-power $6-3k$, so $k=2$ gives the constant term.", true));
  q.push(tf("hard", "The coefficient of $x^5$ in $(x-2/x)^7$ is $-14$.", true));
  q.push(ms("hard", "For the constant term of $(x^2+1/x)^6$, which are true?", ["general power is $12-3k$", "$k=4$", "value $\\binom{6}{4}=15$", "$k=2$"], [0, 1, 2]));
  q.push(mc("hard", "The sum $\\binom{6}{0}2^6+\\binom{6}{1}2^5+\\cdots+\\binom{6}{6}$ equals $(2+1)^6=$", ["$729$", "$64$", "$216$", "$1296$"], 0));
  q.push(num("hard", "Evaluate $(2+1)^6$ using the binomial theorem.", 729, 0));
  q.push(fill("hard", "The term independent of $x$ in $(2x-3/x^2)^6$ is ___.", ["2160"]));
  q.push(mc("hard", "The coefficient of $x^3$ in $(1+2x)^{6}$ is:", ["$160$", "$20$", "$80$", "$320$"], 0));
  q.push(num("hard", "The coefficient of $x^3$ in $(1+2x)^6$?", 160, 0));
  return q;
}

export default [
  { code: "1.1", gen: g11 },
  { code: "1.2", gen: g12 },
  { code: "1.3", gen: g13 },
  { code: "1.4", gen: g14 },
  { code: "1.5", gen: g15 },
  { code: "1.6", gen: g16 },
  { code: "1.7", gen: g17 },
  { code: "1.8", gen: g18 },
];
