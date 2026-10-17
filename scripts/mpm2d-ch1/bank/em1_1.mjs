// 1.1 Review of Linear Relations — 20 easy + 20 medium questions (money written as "dollars")
import { mc, ms, num, tf, mx, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  num(`Find the slope of the line through $(1,2)$ and $(4,11)$.`, 3, "$\\frac{11-2}{4-1}=\\frac93=3$."),
  num(`Find the slope of the line through $(-2,7)$ and $(3,-3)$.`, -2, "$\\frac{-3-7}{3-(-2)}=\\frac{-10}{5}$."),
  num(`What is the slope of $y=-5x+8$?`, -5, "In $y=mx+b$, $m$ is the coefficient of $x$."),
  num(`What is the $y$-intercept of $y=\\frac23x-6$?`, -6, "In $y=mx+b$, $b$ is the $y$-intercept."),
  mc(`Which equation is in standard form?`, "$3x+4y=12$", ["$y=3x+4$", "$y-2=3(x-1)$", "$x=4y+12$"], "Standard form is $Ax+By=C$."),
  num(`Find the $x$-intercept of $2x+5y=20$.`, 10, "Set $y=0$: $2x=20$."),
  num(`Find the $y$-intercept of $2x+5y=20$.`, 4, "Set $x=0$: $5y=20$."),
  mc(`A line with a negative slope…`, "falls from left to right", ["rises from left to right", "is horizontal", "is vertical"], "As $x$ increases, $y$ decreases."),
  num(`What is the slope of the horizontal line $y=7$?`, 0, "Horizontal lines have no rise."),
  tf(`The vertical line $x=-3$ has a slope of $0$.`, false, "A vertical line has an undefined slope (no run)."),
  num(`Solve $4x-9=23$.`, 8, "$4x=32$."),
  num(`Solve $3(x+2)=21$.`, 5, "$x+2=7$."),
  num(`Solve $\\frac{x}{5}=-4$.`, -20, "Multiply both sides by $5$."),
  mc(`Two lines are parallel when their slopes are…`, "equal", ["negative reciprocals", "both zero only", "opposites"], "Parallel lines rise at the same rate."),
  num(`A line is perpendicular to a line with slope $4$. What is its slope? (decimal)`, -0.25, "Negative reciprocal: $-\\frac14$."),
  mx(`Write $2x+y=9$ in the form $y=\\ldots$ (type the right side).`, "-2*x+9", "Subtract $2x$ from both sides."),
  num(`The point $(3,k)$ lies on $y=2x-1$. Find $k$.`, 5, "$2(3)-1=5$."),
  tf(`The point $(2,1)$ lies on $3x-4y=2$.`, true, "$6-4=2$ ✓"),
  num(`Find the slope of the line shown.`, 2, "From $(0,-1)$ to $(2,3)$: rise $4$, run $2$.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, lines: [{ m: 2, b: -1, color: "blue" }], points: [{ x: 0, y: -1, label: "(0, −1)" }, { x: 2, y: 3, label: "(2, 3)" }], step: { x: 1, y: 1 } })),
  mc(`A taxi fare is $C=2.5d+4$ (dollars, $d$ in km). What does $4$ represent?`, "the fixed starting fee", ["the cost per km", "the distance", "the total fare"], "The constant term is the value when $d=0$."),
];

export const M = [
  mc(`Which is the slope of $3x-6y=12$?`, "$\\frac12$", ["$-\\frac12$", "$2$", "$-2$"], "$m=-\\frac AB=-\\frac{3}{-6}$."),
  mx(`Write $4x-2y=10$ in the form $y=\\ldots$ (type the right side).`, "2*x-5", "$-2y=-4x+10$, divide by $-2$."),
  mc(`Write $y=\\frac34x-2$ in standard form with integer coefficients.`, "$3x-4y=8$", ["$3x+4y=8$", "$3x-4y=-8$", "$4x-3y=8$"], "Multiply by $4$: $4y=3x-8$, so $3x-4y=8$."),
  mx(`Find the equation of the line through $(2,5)$ with slope $-3$. Type $y=\\ldots$ (right side only).`, "-3*x+11", "$5=-3(2)+b\\Rightarrow b=11$."),
  mx(`Find the equation of the line through $(-1,4)$ and $(3,-4)$. Type the right side of $y=\\ldots$`, "-2*x+2", "$m=\\frac{-8}{4}=-2$; $4=-2(-1)+b\\Rightarrow b=2$."),
  num(`Solve $5-2(x-3)=x+2$.`, 3, "$5-2x+6=x+2\\Rightarrow 9=3x$."),
  num(`Solve $\\frac{x+3}{4}=\\frac{x-1}{2}$.`, 5, "Multiply by $4$: $x+3=2x-2$."),
  num(`Solve $\\frac{2x}{3}-\\frac{x}{6}=3$.`, 6, "Multiply by $6$: $4x-x=18$."),
  num(`Solve $0.4x+1.2=0.1x+3$.`, 6, "$\\times10$: $4x+12=x+30\\Rightarrow 3x=18$."),
  mc(`Which line is perpendicular to $y=-\\frac25x+1$?`, "$5x-2y=4$", ["$2x+5y=4$", "$5x+2y=4$", "$2x-5y=4$"], "Need slope $\\frac52$: $5x-2y=4$ gives $y=\\frac52x-2$."),
  mc(`Which line is parallel to $2x+3y=6$?`, "$4x+6y=-5$", ["$3x+2y=6$", "$2x-3y=6$", "$3x-2y=1$"], "Both have slope $-\\frac23$."),
  ms(`Select all points on the line $x-3y=6$.`, ["$(6,0)$", "$(0,-2)$", "$(3,-1)$", "$(9,2)$", "$(0,2)$"], [0, 1, 2], "Substitute each point: $(9,2)$ gives $3$ and $(0,2)$ gives $-6$."),
  num(`A gym charges a sign-up fee plus a monthly fee. Three months cost 115 dollars and seven months cost 215 dollars. What is the monthly fee (dollars)?`, 25, "$\\frac{215-115}{7-3}=25$."),
  num(`For the gym in the previous situation (3 months: 115 dollars; 7 months: 215 dollars), what is the sign-up fee (dollars)?`, 40, "$115-3(25)=40$."),
  num(`Find $k$ so that the line through $(1,k)$ and $(4,10)$ has slope $2$.`, 4, "$\\frac{10-k}{3}=2\\Rightarrow k=4$."),
  tf(`The lines $y=3x+1$ and $y=-\\frac13x+5$ are perpendicular.`, true, "$3\\times\\left(-\\frac13\\right)=-1$."),
  mx(`Find the equation of the line shown. Type the right side of $y=\\ldots$`, "-1/2*x+3", "Intercepts $(6,0)$ and $(0,3)$: $m=-\\frac12$, $b=3$.", planeDoc({ view: { xmin: -2, xmax: 8, ymin: -2, ymax: 5 }, lines: [{ m: -0.5, b: 3, color: "violet" }], points: [{ x: 6, y: 0, label: "(6, 0)" }, { x: 0, y: 3, label: "(0, 3)" }], step: { x: 1, y: 1 } })),
  fill(`The standard form of the line with intercepts $(4,0)$ and $(0,-6)$ is $3x-2y=$ ___.`, ["12"], "At $(4,0)$: $3(4)-0=12$."),
  num(`Solve $\\frac{x+4}{3}-\\frac{x-2}{5}=2$.`, 2, "$\\times15$: $5x+20-3x+6=30\\Rightarrow 2x=4$."),
  mc(`The relation $d=80t$ gives distance (km) after $t$ hours. Which statement is true?`, "the slope 80 is the speed in km/h", ["the slope 80 is the distance", "the line has a $y$-intercept of 80", "the relation is not linear"], "The rate of change is km per hour."),
];
