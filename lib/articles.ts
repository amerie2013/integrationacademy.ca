// Static article store for the /articles section. Add entries here (newest
// first). Bodies are HTML; inline math uses \( … \) and display math \[ … \]
// (rendered with KaTeX on the article page). Swap this for a DB table later
// without changing the pages — keep the Article shape.

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string; // ISO
  readMins: number;
  tags: string[];
  body: string;
};

export const ARTICLES: Article[] = [
  {
    slug: "read-a-graph-like-a-mathematician",
    title: "How to Read a Graph Like a Mathematician",
    excerpt:
      "Before you compute anything, a good graph tells you the whole story — where a function rises, falls, turns, and breaks. Here's what to look for.",
    author: "Integration Academy",
    date: "2026-06-16",
    readMins: 5,
    tags: ["Functions", "Study Skills"],
    body: `
<p>A graph is a function's autobiography. Trained eyes read four things almost instantly — and once you do too, problems that looked algebraic become visual.</p>
<h2>1. Intercepts</h2>
<p>Where does it cross the axes? The \\( x \\)-intercepts are the <strong>roots</strong> (where \\( y = 0 \\)); the \\( y \\)-intercept is the starting value (where \\( x = 0 \\)). These anchor everything else.</p>
<h2>2. Increasing / decreasing</h2>
<p>Read left to right. Going uphill means increasing; downhill means decreasing. The places where it switches — the peaks and valleys — are the <strong>turning points</strong> (local max/min).</p>
<h2>3. End behaviour</h2>
<p>What happens as \\( x \\to \\pm\\infty \\)? A line shoots off forever; a parabola opens up or down; \\( y = 1/x \\) flattens toward an asymptote. End behaviour tells you the function's "family" at a glance.</p>
<h2>4. Breaks</h2>
<p>Holes, jumps, and vertical asymptotes are where the function misbehaves — exactly the points worth checking algebraically. A graph shows you <em>where</em> to look so you don't check everywhere.</p>
<p>Practice this live: open the <a href="/tools/graph">graphing calculator</a>, plot a function, and narrate those four features out loud before touching the algebra.</p>
`,
  },
  {
    slug: "quadratic-formula-demystified",
    title: "The Quadratic Formula, Demystified",
    excerpt:
      "That intimidating formula isn't magic — it's just completing the square, done once and for all. Here's where it comes from and how to use it confidently.",
    author: "Integration Academy",
    date: "2026-06-15",
    readMins: 6,
    tags: ["Algebra", "Grade 10"],
    body: `
<p>Every quadratic \\( ax^2 + bx + c = 0 \\) is solved by one formula:</p>
\\[ x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}. \\]
<p>It looks like something to memorize and fear. It's actually just <em>completing the square</em> performed on the general equation — once — so you never have to do it again.</p>
<h2>The discriminant tells the story first</h2>
<p>The piece under the root, \\( b^2 - 4ac \\), is the <strong>discriminant</strong>. Before solving, it tells you how many real solutions exist:</p>
<ul>
<li>\\( b^2 - 4ac > 0 \\): two real roots (the parabola crosses the \\( x \\)-axis twice).</li>
<li>\\( b^2 - 4ac = 0 \\): one repeated root (it just touches the axis).</li>
<li>\\( b^2 - 4ac < 0 \\): no real roots (it floats above or below the axis).</li>
</ul>
<h2>A worked example</h2>
<p>Solve \\( 2x^2 - 4x - 6 = 0 \\). Here \\( a = 2,\\ b = -4,\\ c = -6 \\).</p>
\\[ x = \\frac{-(-4) \\pm \\sqrt{(-4)^2 - 4(2)(-6)}}{2(2)} = \\frac{4 \\pm \\sqrt{16 + 48}}{4} = \\frac{4 \\pm 8}{4}. \\]
<p>So \\( x = 3 \\) or \\( x = -1 \\). Always substitute one back to check — \\( 2(9) - 12 - 6 = 0 \\). ✓</p>
<h2>Tip</h2>
<p>Compute the discriminant <em>first</em>. If it's negative, you can stop — there are no real solutions, and you've saved yourself the rest of the arithmetic.</p>
`,
  },
  {
    slug: "fundamental-theorem-of-calculus",
    title: "Why the Fundamental Theorem of Calculus Is So Beautiful",
    excerpt:
      "Two ideas that look unrelated — slopes and areas — turn out to be exact opposites. Here's the intuition behind the result that ties all of calculus together.",
    author: "Integration Academy",
    date: "2026-06-12",
    readMins: 6,
    tags: ["Calculus", "Big Ideas"],
    body: `
<p>Calculus has two halves. <strong>Differentiation</strong> asks: how fast is something changing right now? <strong>Integration</strong> asks: how much has accumulated so far? For centuries these felt like separate problems. The Fundamental Theorem of Calculus (FTC) says they are <em>inverse operations</em> — undoing one gives the other.</p>
<h2>The statement</h2>
<p>If \\( F(x) = \\int_a^x f(t)\\,dt \\) accumulates the area under \\( f \\) up to \\( x \\), then</p>
\\[ \\frac{d}{dx}\\left[\\int_a^x f(t)\\,dt\\right] = f(x). \\]
<p>In words: the rate at which area is piling up is exactly the height of the curve. That is the whole secret.</p>
<h2>Why it feels magical</h2>
<p>Picture sliding the right edge of an area a tiny step \\( dx \\) to the right. You add a thin sliver of area whose height is \\( f(x) \\) and width is \\( dx \\), so the area grows by about \\( f(x)\\,dx \\). Divide by \\( dx \\) and you get the rate of growth: \\( f(x) \\). The accumulation function "remembers" the curve through its slope.</p>
<h2>Why you should care</h2>
<p>The FTC is what lets you compute a messy area by finding an <em>antiderivative</em> instead of summing infinitely many rectangles. Every definite integral you'll ever evaluate by hand leans on it. It's not just a formula to memorize — it's the bridge between the two questions that started calculus.</p>
`,
  },
  {
    slug: "study-habits-that-raise-your-math-grade",
    title: "5 Study Habits That Actually Raise Your Math Grade",
    excerpt:
      "Re-reading your notes feels productive but barely moves the needle. These five evidence-based habits do — and most take less time than cramming.",
    author: "Integration Academy",
    date: "2026-06-08",
    readMins: 5,
    tags: ["Study Skills", "High School"],
    body: `
<p>Math rewards <em>doing</em>, not watching. If your study sessions are mostly re-reading worked solutions, here's how to spend the same hour far better.</p>
<h2>1. Practice retrieval, not recognition</h2>
<p>Close the book and try the problem from scratch. The struggle to recall is what builds memory — recognizing a solved example does not.</p>
<h2>2. Space it out</h2>
<p>Three 30-minute sessions across a week beat one 90-minute cram. Spacing forces your brain to reload the idea, which strengthens it each time.</p>
<h2>3. Interleave topics</h2>
<p>Mix factoring, graphing, and word problems in one session instead of doing 20 of the same kind. Real tests jump between topics; your practice should too.</p>
<h2>4. Explain it out loud</h2>
<p>If you can teach a step to an empty room — or a friend — you understand it. If you get stuck explaining, you've found exactly what to review.</p>
<h2>5. Track your error types</h2>
<p>Keep a short list: sign errors, dropped negatives, formula mix-ups. Most lost marks come from a handful of repeat mistakes, not from "not knowing the math."</p>
<p>Try our <a href="/games">math games</a> for low-stakes retrieval practice that doesn't feel like studying.</p>
`,
  },
  {
    slug: "slopes-to-derivatives",
    title: "From Slopes to Derivatives: The Big Idea Behind Calculus",
    excerpt:
      "A derivative is just a slope you refuse to stop zooming into. Here's how the slope of a line becomes the slope of a curve at a single point.",
    author: "Integration Academy",
    date: "2026-06-02",
    readMins: 7,
    tags: ["Calculus", "Functions"],
    body: `
<p>You already know slope: \\( m = \\dfrac{\\Delta y}{\\Delta x} \\), the rise over the run between two points. A derivative takes that exact idea and pushes it to the limit.</p>
<h2>The problem with curves</h2>
<p>On a straight line the slope is the same everywhere. On a curve it changes constantly — steeper here, flatter there. So "the slope of a curve" only makes sense <em>at a single point</em>.</p>
<h2>Zoom until it's straight</h2>
<p>Pick a point and a nearby point a distance \\( h \\) away. The slope of the line through them is</p>
\\[ \\frac{f(x+h) - f(x)}{h}. \\]
<p>Now shrink \\( h \\) toward 0. The two points slide together, the connecting line becomes the <em>tangent</em>, and the slope settles on a single value:</p>
\\[ f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}. \\]
<p>That limit is the derivative — the instantaneous slope, the exact rate of change at that point.</p>
<h2>See it move</h2>
<p>This is exactly why interactive graphs help: drag a point and watch the tangent line tilt in real time. Try our <a href="/tools/tangent">Tangent Explorer</a> — slide the point along a curve and see the slope (the derivative) update live, then shrink the secant gap to watch it become the tangent. Or plot freely in the <a href="/tools/graph">graphing calculator</a>.</p>
`,
  },
];

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
