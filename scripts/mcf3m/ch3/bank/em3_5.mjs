// 3.5 Quadratic Models from Data — 20 easy + 20 medium
import { mc, ms, num, tf, fill } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;
const sc = (data, view, curve, step) => planeDoc({ view, points: data.map(([x, y]) => ({ x, y, label: "", color: "blue" })), curves: curve ? [curve] : [], ...(step ? { step } : {}) });

export const E = [
  num(S`Data have zeros $0$ and $6$ and pass through $(3,\,18)$. Enter $a$ in $y=ax(x-6)$.`, -2, "18 = a(3)(−3)."),
  num(S`Data peak at $(2,\,10)$ and pass through $(0,\,2)$. Enter $a$ in $y=a(x-2)^2+10$.`, -2, "2 = 4a + 10."),
  num(S`A model predicts $20$; the actual value is $21.5$. Enter the residual.`, 1.5, "actual − predicted.", null, 1e-9),
  num(S`A model predicts $8.4$; the actual value is $8.1$. Enter the residual.`, -0.3, "8.1 − 8.4.", null, 1e-9),
  mc("Which data pattern suggests a quadratic model?", "values rise, level off, then fall symmetrically", ["values rise by the same amount each step", "values double each step", "values stay constant"], "A parabola rises and falls."),
  mc("The scatter plot is shown. Which model type fits best?", "quadratic", ["linear", "constant", "none"], "The points curve and turn.", sc([[0, 1], [1, 6], [2, 9], [3, 10], [4, 9], [5, 6], [6, 1]], { xmin: -1, xmax: 7, ymin: 0, ymax: 12 })),
  mc("These six measurements are plotted. Which model type fits them best?", "linear", ["quadratic", "exponential", "none"], "The points lie close to a line.", sc([[0, 2], [1, 4.1], [2, 5.9], [3, 8.2], [4, 9.9], [5, 12]], { xmin: -1, xmax: 6, ymin: 0, ymax: 14 })),
  tf("A curve of best fit from technology uses all the data points.", true, "That is its purpose."),
  tf("A prediction far outside the data range is as reliable as one inside it.", false, "Extrapolation is risky."),
  fill("Predicting inside the range of the data is called ____.", ["interpolation", "interpolating"], "Interpolation."),
  fill("Predicting outside the range of the data is called ____.", ["extrapolation", "extrapolating"], "Extrapolation."),
  mc(S`Which point should NOT be used to find $a$ in $y=a(x-3)^2+5$?`, S`$(3,\,5)$`, [S`$(0,\,-4)$`, S`$(1,\,1)$`, S`$(5,\,1)$`], "The vertex gives 5 = 5."),
  mc(S`Which form should you use if a data set clearly shows its two $x$-intercepts?`, "factored form", ["vertex form", "standard form", "linear form"], "a(x − r)(x − s)."),
  mc(S`Which form should you use if a data set clearly shows its highest point?`, "vertex form", ["factored form", "linear form", "none"], "a(x − h)² + k."),
  num(S`A model $y=-2(x-1)(x-9)$ is used. Predict $y$ at $x=5$.`, 32, "−2(4)(−4)."),
  num(S`A model $y=0.5(x-4)^2+1$ is used. Predict $y$ at $x=8$.`, 9, "0.5(16) + 1."),
  num(S`Data have zeros $-2$ and $4$ and pass through $(1,\,-9)$. Enter $a$.`, 1, "−9 = a(3)(−3)."),
  tf("Residuals that are small and on both sides of the curve indicate a good fit.", true, "No pattern in the errors."),
  num(S`A model for a ball is $h=-5t^2+20t$. Predict $h$ at $t=1.5$.`, 18.75, "−11.25 + 30.", null, 1e-9),
  mc(S`A ball model $h=-5t^2+20t$ predicts $h(6)=-60$. What does this show?`, "the model does not apply after the ball lands", ["the ball is underground", "the data were wrong", "the ball goes up again"], "Outside the domain."),
];

export const M = [
  num(S`Data: $(0,0)$, $(2,16)$, $(4,24)$, $(6,24)$, $(8,16)$, $(10,0)$. Enter $a$ in $y=ax(x-10)$.`, -1, "16 = a(2)(−8)."),
  num(S`For the data above, enter the predicted maximum value.`, 25, "Vertex at x = 5: −(5)(−5)."),
  num(S`A vertex model $y=a(x-5)^2+20$ passes through $(1,\,4)$. Enter $a$.`, -1, "4 = 16a + 20."),
  num(S`With $y=-(x-5)^2+20$, predict $y$ at $x=8$.`, 11, "−9 + 20."),
  num(S`A model predicts $52.6$ at a point where the data show $50.0$. Enter the residual.`, -2.6, "50 − 52.6.", null, 1e-9),
  mc("Two models give residuals at five points. Model A: 0.2, −0.1, 0.3, −0.2, 0.1. Model B: 1.5, 1.2, 1.8, 1.4, 1.6. Which fits better?", "Model A", ["Model B", "they fit equally", "cannot tell"], "B's residuals are large and all positive."),
  mc("The scatter plot and a model are shown. How well does the model fit?", "well: points are close and on both sides", ["badly: it misses every point", "it is a linear model", "it has no residuals"], "Small, balanced residuals.", sc([[0, 0.2], [1, 4.8], [2, 8.1], [3, 8.8], [4, 8.2], [5, 4.7], [6, -0.2]], { xmin: -1, xmax: 7, ymin: -1, ymax: 10 }, { f: (x) => -x * (x - 6), color: "violet" })),
  mc("The scatter plot shows temperature of a cooling drink. Is a quadratic opening up a good long-term model?", "no: it would predict the drink heating up again", ["yes: it fits the first points", "yes: all data are quadratic", "no: cooling is linear"], "Cooling levels off at room temperature.", sc([[0, 90], [5, 70], [10, 56], [15, 46], [20, 40]], { xmin: -2, xmax: 45, ymin: 0, ymax: 100 }, { f: (t) => 0.06 * (t - 30) ** 2 + 36, color: "red", a: 0, b: 45 }, { x: 5, y: 10 })),
  num(S`An arch is $30$ m wide and $12$ m high. With feet at $0$ and $30$, enter $a$ in $h=ax(x-30)$ (decimal, 4 places).`, -0.0533, "12 = a(15)(−15).", null, 0.0002),
  num(S`For the arch $h=-\tfrac{12}{225}x(x-30)$, enter the height (m) at $x=5$ (one decimal).`, 6.7, "−12/225 · 5 · (−25) = 6.67.", null, 0.06),
  ms("Select every reasonable way to judge a quadratic model.", ["check residuals at points not used", "compare with a curve of best fit", "check the shape makes sense physically", "always accept it if it passes through one point"], [0, 1, 2], "One point proves nothing."),
  tf(S`If data have roughly constant second differences, a quadratic model is reasonable.`, true, "That is the signature of a quadratic."),
  num(S`Data: $(1,3)$, $(2,4)$, $(3,3)$, $(4,0)$. Enter $a$ in $y=a(x-2)^2+4$ using $(4,\,0)$.`, -1, "0 = 4a + 4."),
  num(S`A model $h=-4.8t(t-5)$ fits a rocket. Predict its maximum height (m).`, 30, "Vertex t = 2.5: −4.8(2.5)(−2.5)."),
  mc(S`A model was built for $0\le x\le10$. Which prediction is extrapolation?`, S`$x=15$`, [S`$x=5$`, S`$x=0.5$`, S`$x=9.9$`], "Outside the range."),
  num(S`Technology's curve of best fit is $y=-0.98x^2+9.9x+0.1$. Predict $y$ at $x=5$ (two decimals).`, 25.1, "−24.5 + 49.5 + 0.1.", null, 0.01),
  num(S`A hand-built model predicts $24$ at $x=5$ and the actual value is $25$. Enter the residual.`, 1, "25 − 24."),
  fill(S`To find $a$ in $y=a(x-r)(x-s)$, substitute a data point that is not a ____ (one word).`, ["zero", "root", "x-intercept"], "At a zero both sides are 0."),
  mc(S`Two choices of point give $a=-2.9$ and $a=-3.1$ for a model. What does this suggest?`, "the data are close to, but not exactly, a parabola", ["one of the points is wrong", "the model must be linear", "a = −3 exactly"], "Real data have scatter."),
  num(S`Data pass through $(0,\,6)$ with zeros $2$ and $3$. Enter $a$ in $y=a(x-2)(x-3)$.`, 1, "6 = a(−2)(−3)."),
];
