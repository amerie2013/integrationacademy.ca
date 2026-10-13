// MCV4U Unit 6 worksheets — Geometry & Algebra of Vectors.
const r = String.raw;
const U = "6: Geometry and Algebra of Vectors";

const resfig = r`\begin{center}\begin{tikzpicture}[scale=0.7]\draw[->,thick,exblue](0,0)--(3,0)node[midway,below]{$3$ E};\draw[->,thick,qorange](3,0)--(3,4)node[midway,right]{$4$ N};\draw[->,very thick,red](0,0)--(3,4)node[midway,above left]{$R=5$};\end{tikzpicture}\end{center}`;
const vfig = r`\begin{center}\begin{tikzpicture}[scale=0.6]\draw[->,gray](-0.5,0)--(5,0)node[right]{\small$x$};\draw[->,gray](0,-0.5)--(0,5)node[above]{\small$y$};\draw[->,very thick,exblue](0,0)--(3,4)node[midway,above left]{$|\vec v|=5$};\node at (3,4)[above right]{$(3,4)$};\end{tikzpicture}\end{center}`;

export default [
  {
    code: "6.1", unit: U, title: "Introduction to Vectors",
    intro: r`A vector has magnitude and direction (velocity, force); a scalar has magnitude only (speed, mass). Equal vectors share magnitude and direction; $-\vec v$ reverses direction.`,
    ideas: [r`Vector = magnitude + direction; scalar = magnitude only.`, r`Equal vectors: same magnitude and direction (position-free).`, r`Directions via bearings ($N30^\circ E$, $030^\circ$).`],
    examples: [
      { t: "Vector or scalar", body: r`Classify velocity, speed, force, temperature, displacement.\soln
\textbf{Step 1 (ask whether direction matters for each quantity):} velocity, force, and displacement all depend on which way they point; speed and temperature do not.\\[3pt]
\textbf{Conclusion:} vectors: velocity, force, displacement. Scalars: speed, temperature.` },
      { t: "Magnitude & direction", body: r`A plane flies 500 km at $N60^\circ E$.\soln
\textbf{Step 1 (identify the magnitude):} the distance travelled is $500$ km.\\[3pt]
\textbf{Step 2 (identify the direction):} the bearing $N60^\circ E$ means $60^\circ$ measured from north, toward east.\\[3pt]
\textbf{Conclusion:} magnitude $500$ km; direction $N60^\circ E$.` },
      { t: "Equal vectors", body: r`When are two displacement vectors equal?\soln
\textbf{Step 1 (recall what defines a vector):} magnitude and direction, not position.\\[3pt]
\textbf{Conclusion:} two vectors are equal exactly when they share magnitude and direction --- where they're drawn doesn't matter.` },
      { t: "Opposite vector", body: r`If $\vec v$ is 8 m/s east, describe $-\vec v$.\soln
\textbf{Step 1 (recall what $-\vec v$ means):} same magnitude, reversed direction.\\[3pt]
\textbf{Step 2 (apply it):} magnitude stays $8$ m/s; east reverses to west.\\[3pt]
\textbf{Conclusion:} $-\vec v$ is 8 m/s west.` },
      { t: "Bearing", body: r`Express "$40^\circ$ east of north" as a true bearing.\soln
\textbf{Step 1 (recall true bearing format):} measured clockwise from north, as a 3-digit angle.\\[3pt]
\textbf{Step 2 (convert):} "$40^\circ$ east of north" is already $40^\circ$ clockwise from north.\\[3pt]
\textbf{Conclusion:} $040^\circ$.` },
      { t: "Vector or scalar", body: r`Is acceleration a vector or scalar?\soln
\textbf{Step 1 (ask if direction matters):} acceleration has a direction (the way the velocity is changing).\\[3pt]
\textbf{Conclusion:} vector.` },
      { t: "Vector or scalar", body: r`Is mass a vector or scalar?\soln
\textbf{Step 1 (ask if direction matters):} mass is just an amount, with no direction.\\[3pt]
\textbf{Conclusion:} scalar.` },
      { t: "Opposite", body: r`Describe $-\vec v$ if $\vec v$ is 10 N north.\soln
\textbf{Step 1 (keep the magnitude, reverse the direction):} $10$ N stays the same; north reverses to south.\\[3pt]
\textbf{Conclusion:} $-\vec v$ is 10 N south.` },
      { t: "Bearing", body: r`Write $N75^\circ E$ as a true bearing.\soln
\textbf{Step 1 (convert from N-E form to true bearing):} $N75^\circ E$ means $75^\circ$ clockwise from north.\\[3pt]
\textbf{Conclusion:} $075^\circ$.` },
    ],
    questions: [
      { ask: r`Is force a vector or a scalar?` },
      { ask: r`Is temperature a vector or a scalar?` },
      { ask: r`Describe $-\vec v$ if $\vec v$ is 6 m/s west.` },
      { ask: r`Two vectors have equal magnitude, opposite direction. Equal?` },
      { ask: r`Write $N20^\circ E$ as a true bearing.` },
      { ask: r`Is displacement a vector or a scalar?` },
      { ask: r`Is speed a vector or a scalar?` },
      { ask: r`Describe $-\vec v$ if $\vec v$ is 12 N east.` },
      { ask: r`What two things define a vector?` },
      { ask: r`Write $N50^\circ E$ as a true bearing.` },
      { ask: r`Is energy a vector or a scalar?` },
      { ask: r`Does the position of a vector affect whether two are equal?` },
      { ask: r`A ship sails 30 km at a bearing of $120^\circ$. State its magnitude and describe the bearing in N–E form.`, challenge: true, ws: "2.6cm" },
    ],
    answers: [r`vector`, r`scalar`, r`6 m/s east`, r`no (opposites)`, r`$020^\circ$`, r`vector`, r`scalar`, r`12 N west`, r`magnitude and direction`, r`$050^\circ$`, r`scalar`, r`no`, r`30 km; $120^\circ=S60^\circ E$`],
  },
  {
    code: "6.2", unit: U, title: "Vector Operations (Geometric)",
    intro: r`Add tip-to-tail (triangle law); subtract via $\vec a-\vec b=\vec a+(-\vec b)$; scale by $k$ to change length (and flip if $k<0$).`,
    ideas: [r`Addition: tip-to-tail; resultant from first tail to last tip.`, r`Subtraction: $\vec a-\vec b=\vec a+(-\vec b)$.`, r`$k\vec v$ has length $|k||\vec v|$; reversed if $k<0$.`],
    examples: [
      { t: "Perpendicular resultant", body: r`Add 3 east and 4 north; find the resultant.\soln
\textbf{Step 1 (the two vectors are perpendicular, so use the Pythagorean theorem for magnitude):} $|\vec R|=\sqrt{3^2+4^2}=\sqrt{9+16}=\sqrt{25}$.\\[3pt]
\textbf{Step 2 (find the direction with $\tan^{-1}$ of opposite over adjacent):} $\theta=\tan^{-1}\tfrac43\approx53^\circ$ north of east.\\[3pt]
\textbf{Conclusion:} magnitude $5$, direction $\approx53^\circ$ N of E:` + resfig },
      { t: "Triangle law", body: r`How do you draw $\vec a+\vec b$?\soln
\textbf{Step 1 (draw $\vec a$ first):} start anywhere and draw $\vec a$.\\[3pt]
\textbf{Step 2 (attach $\vec b$ tip-to-tail):} place the tail of $\vec b$ at the tip (arrowhead) of $\vec a$.\\[3pt]
\textbf{Step 3 (draw the resultant):} the sum $\vec a+\vec b$ runs from $\vec a$'s starting tail to $\vec b$'s final tip.\\[3pt]
\textbf{Conclusion:} tip-to-tail, then close the triangle from the first tail to the last tip.` },
      { t: "Scalar multiple", body: r`Describe $3\vec v$ and $-2\vec v$.\soln
\textbf{Step 1 (scalar multiplication scales the length by $|k|$):} for $3\vec v$, $|k|=3$; for $-2\vec v$, $|k|=2$.\\[3pt]
\textbf{Step 2 (the sign of $k$ determines direction):} positive $k$ keeps the same direction; negative $k$ reverses it.\\[3pt]
\textbf{Conclusion:} $3\vec v$ is three times as long, same direction; $-2\vec v$ is twice as long, opposite direction.` },
      { t: "Subtraction", body: r`How do you draw $\vec a-\vec b$?\soln
\textbf{Step 1 (rewrite subtraction as addition of the opposite):} $\vec a-\vec b=\vec a+(-\vec b)$.\\[3pt]
\textbf{Step 2 (draw $-\vec b$, i.e.\ $\vec b$ reversed):} flip $\vec b$'s direction, keeping its length.\\[3pt]
\textbf{Step 3 (add tip-to-tail):} attach $-\vec b$'s tail to $\vec a$'s tip, as in ordinary addition.\\[3pt]
\textbf{Conclusion:} draw $\vec a$, then add the reversed $\vec b$ tip-to-tail.` },
      { t: "Resultant force", body: r`Forces 6 N east and 8 N north. Find the resultant.\soln
\textbf{Step 1 (perpendicular components, use Pythagorean theorem):} $|\vec R|=\sqrt{6^2+8^2}=\sqrt{36+64}=\sqrt{100}$.\\[3pt]
\textbf{Step 2 (find the direction):} $\theta=\tan^{-1}\tfrac86\approx53^\circ$ north of east.\\[3pt]
\textbf{Conclusion:} $10$ N at $\approx53^\circ$ N of E.` },
      { t: "Perpendicular resultant", body: r`Resultant magnitude of 5 east and 12 north?\soln
\textbf{Step 1 (Pythagorean theorem, since the components are perpendicular):} $\sqrt{5^2+12^2}=\sqrt{25+144}=\sqrt{169}$.\\[3pt]
\textbf{Conclusion:} $13$.` },
      { t: "Scalar multiple", body: r`Describe $-\tfrac12\vec v$.\soln
\textbf{Step 1 (magnitude scales by $|k|=\tfrac12$):} half the original length.\\[3pt]
\textbf{Step 2 (negative $k$ reverses direction):} points opposite to $\vec v$.\\[3pt]
\textbf{Conclusion:} half the length, opposite direction.` },
      { t: "Perpendicular resultant", body: r`Resultant magnitude of 9 east and 12 north?\soln
\textbf{Step 1 (Pythagorean theorem):} $\sqrt{9^2+12^2}=\sqrt{81+144}=\sqrt{225}$.\\[3pt]
\textbf{Conclusion:} $15$.` },
      { t: "Direction", body: r`Direction of the resultant of 3 east, 4 north?\soln
\textbf{Step 1 (set up the tangent ratio, opposite over adjacent):} $\tan\theta=\tfrac{4}{3}$ (north component over east component).\\[3pt]
\textbf{Step 2 (solve for $\theta$):} $\theta=\tan^{-1}\tfrac43\approx53^\circ$.\\[3pt]
\textbf{Conclusion:} $\approx53^\circ$ north of east.` },
    ],
    questions: [
      { ask: r`Resultant magnitude of 5 east and 12 north?` },
      { ask: r`Describe $4\vec v$.` },
      { ask: r`Describe $-\tfrac13\vec v$.` },
      { ask: r`Resultant magnitude of 8 east and 15 north?` },
      { ask: r`What law adds vectors tip-to-tail?` },
      { ask: r`Resultant magnitude of 6 east and 8 north?` },
      { ask: r`Describe $-3\vec v$.` },
      { ask: r`Resultant magnitude of 7 east and 24 north?` },
      { ask: r`How do you express $\vec a-\vec b$ as an addition?` },
      { ask: r`Direction (N of E) of the resultant of 5 east, 5 north?` },
      { ask: r`Resultant magnitude of 9 east and 40 north?` },
      { ask: r`Length of $5\vec v$ if $|\vec v|=3$?` },
      { ask: r`Two forces, 10 N east and 24 N north, act on an object. Find the magnitude and direction of the resultant.`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$13$`, r`4× length, same direction`, r`$\tfrac13$ length, opposite`, r`$17$`, r`triangle law`, r`$10$`, r`3× length, opposite direction`, r`$25$`, r`$\vec a+(-\vec b)$`, r`$45^\circ$`, r`$41$`, r`$15$`, r`$\sqrt{100+576}=26$ N at $\tan^{-1}\tfrac{24}{10}\approx67^\circ$ N of E`],
  },
  {
    code: "6.3", unit: U, title: "Cartesian Vectors in 2-D & 3-D",
    intro: r`Component form $(a,b)$ or $(a,b,c)$; magnitude $\sqrt{a^2+b^2(+c^2)}$; operate componentwise; $\vec{AB}=B-A$; unit vector $\vec v/|\vec v|$.`,
    ideas: [r`$|(a,b)|=\sqrt{a^2+b^2}$, $|(a,b,c)|=\sqrt{a^2+b^2+c^2}$.`, r`Add/subtract/scale componentwise; $\vec{AB}=B-A$.`, r`Unit vector $\hat v=\vec v/|\vec v|$.`],
    examples: [
      { t: "Magnitude (2-D)", body: r`Find $|(3,4)|$.\soln
\textbf{Step 1 (apply the 2-D magnitude formula):} $|(a,b)|=\sqrt{a^2+b^2}$.\\[3pt]
\textbf{Step 2 (substitute):} $\sqrt{3^2+4^2}=\sqrt{9+16}=\sqrt{25}$.\\[3pt]
\textbf{Conclusion:} $|(3,4)|=5$:` + vfig },
      { t: "Magnitude (3-D)", body: r`Find $|(1,2,2)|$.\soln
\textbf{Step 1 (apply the 3-D magnitude formula):} $|(a,b,c)|=\sqrt{a^2+b^2+c^2}$.\\[3pt]
\textbf{Step 2 (substitute):} $\sqrt{1^2+2^2+2^2}=\sqrt{1+4+4}=\sqrt9$.\\[3pt]
\textbf{Conclusion:} $|(1,2,2)|=3$.` },
      { t: "Componentwise", body: r`Compute $(2,3)+(1,-1)$ and $3(2,-1)$.\soln
\textbf{Step 1 (add component by component):} $(2+1,\,3+(-1))=(3,2)$.\\[3pt]
\textbf{Step 2 (scale each component by $3$):} $(3\cdot2,\,3\cdot(-1))=(6,-3)$.\\[3pt]
\textbf{Conclusion:} $(2,3)+(1,-1)=(3,2)$ and $3(2,-1)=(6,-3)$.` },
      { t: "Between points", body: r`Find $\vec{AB}$ and $|\vec{AB}|$ for $A(1,2),B(4,6)$.\soln
\textbf{Step 1 (subtract $A$ from $B$, tail from tip):} $\vec{AB}=B-A=(4-1,\,6-2)=(3,4)$.\\[3pt]
\textbf{Step 2 (find the magnitude):} $|\vec{AB}|=\sqrt{3^2+4^2}=\sqrt{25}$.\\[3pt]
\textbf{Conclusion:} $\vec{AB}=(3,4)$, with length $5$.` },
      { t: "Unit vector", body: r`Unit vector of $(3,4)$.\soln
\textbf{Step 1 (find the magnitude):} $|(3,4)|=\sqrt{9+16}=5$.\\[3pt]
\textbf{Step 2 (divide each component by the magnitude):} $\left(\dfrac35,\dfrac45\right)$.\\[3pt]
\textbf{Conclusion:} the unit vector is $\big(\tfrac35,\tfrac45\big)$.` },
      { t: "Magnitude (2-D)", body: r`Find $|(6,8)|$.\soln
\textbf{Step 1 (apply the magnitude formula):} $\sqrt{6^2+8^2}=\sqrt{36+64}=\sqrt{100}$.\\[3pt]
\textbf{Conclusion:} $10$.` },
      { t: "Magnitude (3-D)", body: r`Find $|(2,3,6)|$.\soln
\textbf{Step 1 (apply the 3-D magnitude formula):} $\sqrt{2^2+3^2+6^2}=\sqrt{4+9+36}=\sqrt{49}$.\\[3pt]
\textbf{Conclusion:} $7$.` },
      { t: "Componentwise", body: r`Compute $(5,1)-(2,4)$.\soln
\textbf{Step 1 (subtract component by component):} $(5-2,\,1-4)$.\\[3pt]
\textbf{Conclusion:} $(3,-3)$.` },
      { t: "Between points", body: r`Find $\vec{AB}$ for $A(2,1),B(5,5)$.\soln
\textbf{Step 1 (subtract $A$ from $B$):} $(5-2,\,5-1)$.\\[3pt]
\textbf{Conclusion:} $\vec{AB}=(3,4)$.` },
    ],
    questions: [
      { ask: r`Find $|(6,8)|$.` },
      { ask: r`Find $|(2,3,6)|$.` },
      { ask: r`Compute $(5,1)-(2,4)$.` },
      { ask: r`Find $\vec{AB}$ for $A(2,1),B(5,5)$.` },
      { ask: r`Unit vector of $(6,8)$?` },
      { ask: r`Find $|(5,12)|$.` },
      { ask: r`Find $|(1,4,8)|$.` },
      { ask: r`Compute $(3,2)+(4,-5)$.` },
      { ask: r`Compute $2(3,-4)$.` },
      { ask: r`Find $|\vec{AB}|$ for $A(0,0),B(8,6)$.` },
      { ask: r`Unit vector of $(0,5)$?` },
      { ask: r`Find $|(7,24)|$.` },
      { ask: r`Given $A(1,2,3)$ and $B(4,6,15)$, find $\vec{AB}$ and $|\vec{AB}|$.`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$10$`, r`$7$`, r`$(3,-3)$`, r`$(3,4)$`, r`$(\tfrac35,\tfrac45)$`, r`$13$`, r`$9$`, r`$(7,-3)$`, r`$(6,-8)$`, r`$10$`, r`$(0,1)$`, r`$25$`, r`$(3,4,12)$, $|\vec{AB}|=\sqrt{9+16+144}=13$`],
  },
  {
    code: "6.4", unit: U, title: "The Dot Product",
    intro: r`$\vec a\cdot\vec b=a_1b_1+a_2b_2(+a_3b_3)=|\vec a||\vec b|\cos\theta$. Gives the angle; zero means perpendicular; work $=\vec F\cdot\vec d$.`,
    ideas: [r`Components: $\vec a\cdot\vec b=a_1b_1+a_2b_2+a_3b_3$.`, r`$\cos\theta=\dfrac{\vec a\cdot\vec b}{|\vec a||\vec b|}$.`, r`Perpendicular $\iff\vec a\cdot\vec b=0$; work $=\vec F\cdot\vec d$.`],
    examples: [
      { t: "Dot product (2-D)", body: r`Find $(2,3)\cdot(4,-1)$.\soln
\textbf{Step 1 (multiply matching components):} $(2)(4)$ and $(3)(-1)$.\\[3pt]
\textbf{Step 2 (add the products):} $8+(-3)$.\\[3pt]
\textbf{Conclusion:} $=5$.` },
      { t: "Dot product (3-D)", body: r`Find $(1,2,3)\cdot(2,0,-1)$.\soln
\textbf{Step 1 (multiply matching components):} $(1)(2)$, $(2)(0)$, $(3)(-1)$.\\[3pt]
\textbf{Step 2 (add the products):} $2+0+(-3)$.\\[3pt]
\textbf{Conclusion:} $=-1$.` },
      { t: "Angle", body: r`Angle between $(1,0)$ and $(1,1)$?\soln
\textbf{Step 1 (find the dot product):} $(1)(1)+(0)(1)=1$.\\[3pt]
\textbf{Step 2 (find both magnitudes):} $|(1,0)|=1$; $|(1,1)|=\sqrt2$.\\[3pt]
\textbf{Step 3 (apply $\cos\theta=\frac{\vec a\cdot\vec b}{|\vec a||\vec b|}$):} $\cos\theta=\dfrac{1}{1\cdot\sqrt2}=\dfrac1{\sqrt2}$.\\[3pt]
\textbf{Conclusion:} $\theta=45^\circ$.` },
      { t: "Perpendicular", body: r`Are $(2,3)$ and $(3,-2)$ perpendicular?\soln
\textbf{Step 1 (compute the dot product):} $(2)(3)+(3)(-2)=6-6$.\\[3pt]
\textbf{Step 2 (recall the perpendicularity test, dot product $=0$):} the result is $0$.\\[3pt]
\textbf{Conclusion:} yes, perpendicular.` },
      { t: "Work", body: r`$\vec F=(3,4)$ N, $\vec d=(2,0)$ m. Find the work.\soln
\textbf{Step 1 (recall the work formula):} $W=\vec F\cdot\vec d$.\\[3pt]
\textbf{Step 2 (compute the dot product):} $(3)(2)+(4)(0)=6+0$.\\[3pt]
\textbf{Conclusion:} $W=6$ J.` },
      { t: "Dot product", body: r`Find $(1,2)\cdot(3,4)$.\soln
\textbf{Step 1 (multiply matching components and add):} $(1)(3)+(2)(4)=3+8$.\\[3pt]
\textbf{Conclusion:} $=11$.` },
      { t: "Dot product (3-D)", body: r`Find $(2,-1,3)\cdot(1,4,2)$.\soln
\textbf{Step 1 (multiply matching components and add):} $(2)(1)+(-1)(4)+(3)(2)=2-4+6$.\\[3pt]
\textbf{Conclusion:} $=4$.` },
      { t: "Angle", body: r`Angle between $(1,0)$ and $(0,1)$?\soln
\textbf{Step 1 (compute the dot product):} $(1)(0)+(0)(1)=0$.\\[3pt]
\textbf{Step 2 (interpret a zero dot product):} the vectors are perpendicular.\\[3pt]
\textbf{Conclusion:} $90^\circ$.` },
      { t: "Work", body: r`$\vec F=(5,0)$, $\vec d=(3,4)$. Find the work.\soln
\textbf{Step 1 (apply $W=\vec F\cdot\vec d$):} $(5)(3)+(0)(4)=15+0$.\\[3pt]
\textbf{Conclusion:} $W=15$ J.` },
    ],
    questions: [
      { ask: r`Find $(1,2)\cdot(3,4)$.` },
      { ask: r`Find $(2,-1,3)\cdot(1,4,2)$.` },
      { ask: r`Are $(1,2)$ and $(4,-2)$ perpendicular?` },
      { ask: r`Angle between $(1,0)$ and $(0,1)$?` },
      { ask: r`Work of $\vec F=(5,0)$ along $\vec d=(3,4)$?` },
      { ask: r`Find $(3,1)\cdot(2,5)$.` },
      { ask: r`Find $(1,1,1)\cdot(2,3,4)$.` },
      { ask: r`Are $(3,4)$ and $(4,-3)$ perpendicular?` },
      { ask: r`Angle between $(2,0)$ and $(2,2)$?` },
      { ask: r`Work of $\vec F=(2,3)$ along $\vec d=(4,0)$?` },
      { ask: r`Find $(0,5)\cdot(5,0)$.` },
      { ask: r`Find $|\vec a|$ from $\vec a\cdot\vec a=25$.` },
      { ask: r`Find the angle between $(3,4)$ and $(4,3)$ to the nearest degree.`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$11$`, r`$4$`, r`$0$: yes`, r`$90^\circ$`, r`$15$ J`, r`$11$`, r`$9$`, r`$0$: yes`, r`$45^\circ$`, r`$8$ J`, r`$0$`, r`$5$`, r`$\cos\theta=\tfrac{24}{25}\Rightarrow\theta\approx16^\circ$`],
  },
  {
    code: "6.5", unit: U, title: "The Cross Product",
    intro: r`$\vec a\times\vec b=(a_2b_3-a_3b_2,\,a_3b_1-a_1b_3,\,a_1b_2-a_2b_1)$ is perpendicular to both; $|\vec a\times\vec b|$ is the parallelogram area.`,
    ideas: [r`$\vec a\times\vec b=(a_2b_3-a_3b_2,\,a_3b_1-a_1b_3,\,a_1b_2-a_2b_1)$.`, r`$\vec a\times\vec b\perp\vec a$ and $\perp\vec b$.`, r`$|\vec a\times\vec b|=$ parallelogram area; triangle $=\tfrac12|\vec a\times\vec b|$.`],
    examples: [
      { t: "Standard basis", body: r`Compute $(1,0,0)\times(0,1,0)$.\soln
\textbf{Step 1 (apply the cross-product formula $(a_2b_3-a_3b_2,\,a_3b_1-a_1b_3,\,a_1b_2-a_2b_1)$ with $\vec a=(1,0,0),\vec b=(0,1,0)$):} first component $0\cdot0-0\cdot1=0$; second $0\cdot0-1\cdot0=0$; third $1\cdot1-0\cdot0=1$.\\[3pt]
\textbf{Conclusion:} $(1,0,0)\times(0,1,0)=(0,0,1)$.` },
      { t: "General", body: r`Compute $(1,2,3)\times(4,5,6)$.\soln
\textbf{Step 1 (label components):} $\vec a=(1,2,3)$, $\vec b=(4,5,6)$.\\[3pt]
\textbf{Step 2 (apply the formula component by component):} first: $2\cdot6-3\cdot5=12-15=-3$; second: $3\cdot4-1\cdot6=12-6=6$; third: $1\cdot5-2\cdot4=5-8=-3$.\\[3pt]
\textbf{Conclusion:} $(1,2,3)\times(4,5,6)=(-3,6,-3)$.` },
      { t: "Perpendicular check", body: r`Verify $(-3,6,-3)\perp(1,2,3)$.\soln
\textbf{Step 1 (use the dot product to test perpendicularity):} $(-3)(1)+(6)(2)+(-3)(3)$.\\[3pt]
\textbf{Step 2 (compute):} $-3+12-9$.\\[3pt]
\textbf{Conclusion:} $=0$, so the vectors are perpendicular (as the cross product must be, to both original vectors).` },
      { t: "Parallelogram area", body: r`Area from $(1,0,0)$ and $(0,2,0)$.\soln
\textbf{Step 1 (compute the cross product):} $(1,0,0)\times(0,2,0)=(0\cdot0-0\cdot2,\,0\cdot0-1\cdot0,\,1\cdot2-0\cdot0)=(0,0,2)$.\\[3pt]
\textbf{Step 2 (the parallelogram area equals the magnitude of the cross product):} $|(0,0,2)|=2$.\\[3pt]
\textbf{Conclusion:} area $=2$.` },
      { t: "Triangle area", body: r`Triangle area from $(1,0,0)$ and $(0,2,0)$.\soln
\textbf{Step 1 (recall the triangle is half the parallelogram):} from the previous example, the parallelogram area is $2$.\\[3pt]
\textbf{Step 2 (halve it):} $\tfrac12(2)$.\\[3pt]
\textbf{Conclusion:} triangle area $=1$.` },
      { t: "Standard basis", body: r`Compute $(0,1,0)\times(0,0,1)$.\soln
\textbf{Step 1 (apply the formula with $\vec a=(0,1,0),\vec b=(0,0,1)$):} first: $1\cdot1-0\cdot0=1$; second: $0\cdot0-0\cdot1=0$; third: $0\cdot0-1\cdot0=0$.\\[3pt]
\textbf{Conclusion:} $(0,1,0)\times(0,0,1)=(1,0,0)$.` },
      { t: "General", body: r`Compute $(2,0,0)\times(0,3,0)$.\soln
\textbf{Step 1 (apply the formula):} first: $0\cdot0-0\cdot3=0$; second: $0\cdot0-2\cdot0=0$; third: $2\cdot3-0\cdot0=6$.\\[3pt]
\textbf{Conclusion:} $(2,0,0)\times(0,3,0)=(0,0,6)$.` },
      { t: "General", body: r`Compute $(1,1,0)\times(0,1,1)$.\soln
\textbf{Step 1 (apply the formula with $\vec a=(1,1,0),\vec b=(0,1,1)$):} first: $1\cdot1-0\cdot1=1$; second: $0\cdot0-1\cdot1=-1$; third: $1\cdot1-1\cdot0=1$.\\[3pt]
\textbf{Conclusion:} $(1,1,0)\times(0,1,1)=(1,-1,1)$.` },
      { t: "Parallelogram area", body: r`Area from $(3,0,0)$ and $(0,4,0)$.\soln
\textbf{Step 1 (compute the cross product):} $(3,0,0)\times(0,4,0)=(0\cdot0-0\cdot4,\,0\cdot0-3\cdot0,\,3\cdot4-0\cdot0)=(0,0,12)$.\\[3pt]
\textbf{Step 2 (take the magnitude):} $|(0,0,12)|=12$.\\[3pt]
\textbf{Conclusion:} area $=12$.` },
    ],
    questions: [
      { ask: r`Compute $(0,1,0)\times(0,0,1)$.` },
      { ask: r`Compute $(2,0,0)\times(0,3,0)$.` },
      { ask: r`What direction is $\vec a\times\vec b$ relative to $\vec a,\vec b$?` },
      { ask: r`Area of the parallelogram from $(3,0,0)$ and $(0,4,0)$?` },
      { ask: r`Compute $(1,1,0)\times(0,1,1)$.` },
      { ask: r`Compute $(1,0,0)\times(0,0,1)$.` },
      { ask: r`Compute $(1,2,3)\times(4,5,6)$.` },
      { ask: r`Triangle area from $(2,0,0)$ and $(0,2,0)$?` },
      { ask: r`Is $(1,2,3)\times(2,4,6)$ the zero vector? Why?` },
      { ask: r`Compute $(0,0,1)\times(1,0,0)$.` },
      { ask: r`Magnitude of $(1,0,0)\times(0,5,0)$?` },
      { ask: r`Verify $(1,2,3)\times(4,5,6)=(-3,6,-3)$ is perpendicular to $(4,5,6)$.` },
      { ask: r`Find the area of the triangle with vertices $A(0,0,0)$, $B(1,0,0)$, $C(0,2,3)$.`, challenge: true, ws: "3.5cm" },
    ],
    answers: [r`$(1,0,0)$`, r`$(0,0,6)$`, r`perpendicular to both`, r`$12$`, r`$(1,-1,1)$`, r`$(0,-1,0)$`, r`$(-3,6,-3)$`, r`$\tfrac12(4)=2$`, r`yes — they are parallel ($\sin\theta=0$)`, r`$(0,1,0)$`, r`$5$`, r`$-12+30-18=0$ ✓`, r`$\vec{AB}\times\vec{AC}=(1,0,0)\times(0,2,3)=(0,-3,2)$; area $=\tfrac12\sqrt{13}$`],
  },
];
