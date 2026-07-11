// MCV4U Unit 7 — Lines & Planes. Deep single-card lessons.
import { html } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u7 = {};

u7["7.1"] = L("7.1", "Equations of Lines", [
  html(String.raw`<div class="lecture-box">
  <h1>📏 Equations of Lines</h1>
  <p><strong>Overview.</strong> A line is fixed by one <strong>point</strong> on it and a <strong>direction vector</strong> \(\vec d\). The same line can be written three equivalent ways: <strong>vector</strong>, <strong>parametric</strong>, and <strong>symmetric</strong>. A direction vector through two points \(A,B\) is just \(\vec{AB}=B-A\).</p>
  <h2>📌 The three forms</h2>
  <ul>
    <li><strong>Vector:</strong> \(\vec r=\vec r_0+t\vec d\).</li>
    <li><strong>Parametric:</strong> \(x=x_0+ta,\ y=y_0+tb\ (,\ z=z_0+tc)\).</li>
    <li><strong>Symmetric:</strong> \(\dfrac{x-x_0}{a}=\dfrac{y-y_0}{b}\ \left(=\dfrac{z-z_0}{c}\right)\).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Vector equation</h3><p>Write the vector equation of the line through \((1,2)\) with direction \((3,4)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\vec r=\vec r_0+t\vec d\).</div><em>Conclusion: \(\vec r=(1,2)+t(3,4)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Parametric equations</h3><p>Write the parametric equations of that line.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Split into components.</div><em>Conclusion: \(x=1+3t,\ y=2+4t\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Line through two points (3-D)</h3><p>Find a vector equation through \(A(1,0,2)\) and \(B(4,6,8)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Direction \(\vec{AB}=B-A=(3,6,6)\).</div><em>Conclusion: \(\vec r=(1,0,2)+t(3,6,6)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Symmetric equation</h3><p>Write the symmetric equation of the line through \((1,2)\) with direction \((3,4)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Solve each parametric equation for \(t\) and equate.</div><em>Conclusion: \(\dfrac{x-1}{3}=\dfrac{y-2}{4}\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Is a point on the line?</h3><p>Is \((4,6)\) on \(\vec r=(1,2)+t(3,4)\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(4=1+3t\Rightarrow t=1\); check \(y\): \(2+4(1)=6\) ✓.</div><em>Conclusion: yes — at \(t=1\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Vector equation through \((0,1)\) with direction \((2,5)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\vec r=(0,1)+t(2,5)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Parametric equations of \(\vec r=(3,-1)+t(1,2)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x=3+t,\ y=-1+2t\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Direction vector through \(A(2,1,0)\) and \(B(5,7,6)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((3,6,6)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Symmetric equation through \((0,0)\) with direction \((1,3)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{x}{1}=\dfrac{y}{3}\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Is \((7,11)\) on \(\vec r=(1,2)+t(3,3)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(7=1+3t\Rightarrow t=2\); \(2+3(2)=8\ne11\): no.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What fixes a line?</h3><p><em>A point on it and a direction vector.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is the vector form?</h3><p><em>\(\vec r=\vec r_0+t\vec d\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you get a direction from two points?</h3><p><em>\(\vec d=B-A\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do you check a point is on the line?</h3><p><em>Find \(t\) from one component and confirm it works for the others.</em></p></div>
</div>`),
]);

u7["7.2"] = L("7.2", "Equations of Planes", [
  html(String.raw`<div class="lecture-box">
  <h1>🟦 Equations of Planes</h1>
  <p><strong>Overview.</strong> A plane is fixed by a <strong>point</strong> and a <strong>normal vector</strong> \(\vec n=(A,B,C)\) perpendicular to it. The <strong>scalar (Cartesian) equation</strong> is \(A(x-x_0)+B(y-y_0)+C(z-z_0)=0\), which rearranges to \(Ax+By+Cz=D\) — and the coefficients <em>are</em> the normal. If you only have direction vectors in the plane, the <strong>cross product</strong> gives the normal.</p>
  <h2>📌 The essentials</h2>
  <ul>
    <li><strong>Scalar equation:</strong> \(Ax+By+Cz=D\), normal \(\vec n=(A,B,C)\).</li>
    <li><strong>Vector equation:</strong> \(\vec r=\vec r_0+s\vec u+t\vec v\) (two in-plane directions).</li>
    <li><strong>Normal from directions:</strong> \(\vec n=\vec u\times\vec v\).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Scalar equation from a point &amp; normal</h3><p>Plane through \((1,2,3)\) with normal \((2,1,-1)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2(x-1)+1(y-2)-1(z-3)=0\).</div><div class="step"><strong>Step 2:</strong> \(2x+y-z-1=0\).</div><em>Conclusion: \(2x+y-z=1\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Read the normal</h3><p>State the normal vector of \(2x+y-z=5\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> The coefficients are the normal.</div><em>Conclusion: \(\vec n=(2,1,-1)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Is a point on the plane?</h3><p>Is \((1,1,1)\) on \(2x+y-z=2\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(2(1)+1-1=2\) ✓.</div><em>Conclusion: yes. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Normal from two directions</h3><p>A plane contains \(\vec u=(1,0,0)\) and \(\vec v=(0,1,0)\). Find a normal.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\vec n=\vec u\times\vec v=(0,0,1)\).</div><em>Conclusion: \(\vec n=(0,0,1)\) (a horizontal plane \(z=\)const). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Plane through three points</h3><p>Find the scalar equation through \(A(0,0,0),\ B(1,0,0),\ C(0,1,0)\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\vec{AB}=(1,0,0),\ \vec{AC}=(0,1,0)\); \(\vec n=\vec{AB}\times\vec{AC}=(0,0,1)\).</div><div class="step"><strong>Step 2:</strong> \(0(x)+0(y)+1(z-0)=0\).</div><em>Conclusion: \(z=0\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Scalar equation through \((0,0,0)\) with normal \((1,2,3)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(x+2y+3z=0\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Normal vector of \(3x-y+4z=7\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((3,-1,4)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Is \((2,0,1)\) on \(x+y+z=3\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(2+0+1=3\) ✓: yes.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Normal of the plane containing \((1,0,0)\) and \((0,0,1)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\((1,0,0)\times(0,0,1)=(0,-1,0)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Scalar equation through \((2,0,0)\) with normal \((1,0,0)\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1(x-2)=0\Rightarrow x=2\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What fixes a plane?</h3><p><em>A point and a normal vector.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: How do you read the normal off \(Ax+By+Cz=D\)?</h3><p><em>It's \((A,B,C)\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you get a normal from in-plane directions?</h3><p><em>Take their cross product.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do you check a point is on the plane?</h3><p><em>Substitute it into the equation.</em></p></div>
</div>`),
]);

u7["7.3"] = L("7.3", "Intersections of Lines & Planes", [
  html(String.raw`<div class="lecture-box">
  <h1>✖️ Intersections of Lines &amp; Planes</h1>
  <p><strong>Overview.</strong> To find a <strong>line–plane</strong> intersection, substitute the line's parametric coordinates into the plane's equation and solve for \(t\). For <strong>line–line</strong>, set the parametric forms equal and solve the system. Comparing direction vectors and normals reveals when objects are <strong>parallel</strong>, <strong>skew</strong>, or <strong>coincident</strong>.</p>
  <h2>📌 The methods</h2>
  <ul>
    <li><strong>Line–plane:</strong> substitute \(x,y,z\) of the line into the plane; solve for \(t\); back-substitute.</li>
    <li><strong>Line–line:</strong> equate parametric forms; solve for the parameters (no solution ⇒ parallel or skew).</li>
    <li><strong>Parallel:</strong> line ∥ plane when \(\vec d\cdot\vec n=0\); planes ∥ when normals are parallel.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Line meets a plane</h3><p>Where does \(\vec r=(1,0,0)+t(0,0,1)\) meet \(z=5\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(z=t=5\); \(x=1,\ y=0\).</div><em>Conclusion: \((1,0,5)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Substitute into the plane</h3><p>Where does the line \(x=t,\ y=t,\ z=t\) meet \(x+y+z=6\)?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(t+t+t=6\Rightarrow 3t=6\Rightarrow t=2\).</div><em>Conclusion: \((2,2,2)\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Line parallel to a plane</h3><p>Is \(\vec r=(0,0,1)+t(1,1,0)\) parallel to the plane \(z=5\) (normal \((0,0,1)\))?</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(\vec d\cdot\vec n=(1,1,0)\cdot(0,0,1)=0\), and the point \((0,0,1)\) isn't on \(z=5\).</div><em>Conclusion: yes — parallel, no intersection. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Parallel lines</h3><p>Are \(\vec r=(0,0)+t(2,4)\) and \(\vec r=(1,1)+s(1,2)\) parallel?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Directions \((2,4)\) and \((1,2)\): \((2,4)=2(1,2)\).</div><em>Conclusion: yes — the directions are scalar multiples. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Parallel planes</h3><p>Are \(2x+y-z=1\) and \(4x+2y-2z=9\) parallel?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Normals \((2,1,-1)\) and \((4,2,-2)=2(2,1,-1)\) — parallel.</div><div class="step"><strong>Step 2:</strong> The equations aren't multiples (\(1\) vs \(9/2\)), so they don't coincide.</div><em>Conclusion: parallel and distinct — no intersection. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Where does \(x=t,y=2t,z=0\) meet \(z=0\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Every point — the line lies in the plane.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Where does \(x=t,y=t,z=t\) meet \(x+y+z=9\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(3t=9\Rightarrow t=3\): \((3,3,3)\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Are the planes \(x+y+z=1\) and \(2x+2y+2z=5\) parallel?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Normals are parallel, equations not multiples ⇒ parallel &amp; distinct.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>Is the line with direction \((1,1,1)\) parallel to the plane \(x+y+z=4\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\vec d\cdot\vec n=1+1+1=3\ne0\): no (it crosses).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Where does \(\vec r=(0,0,0)+t(1,0,0)\) meet \(x=4\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(t=4\): \((4,0,0)\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do you find a line–plane intersection?</h3><p><em>Substitute the line into the plane and solve for \(t\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: When is a line parallel to a plane?</h3><p><em>When \(\vec d\cdot\vec n=0\) (and the line isn't in the plane).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: When are two lines parallel?</h3><p><em>When their direction vectors are scalar multiples.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: When are two planes parallel?</h3><p><em>When their normals are parallel.</em></p></div>
</div>`),
]);
