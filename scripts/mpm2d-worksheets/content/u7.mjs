// MPM2D Unit 7 — The Sine & Cosine Laws (worksheets 7.1–7.4)
const r = String.raw;

export default [
{
  code: "7.1", unit: "7: Sine \\& Cosine Laws", title: "The Sine Law",
  intro: r`The \textbf{sine law} relates sides to their opposite angles in any triangle: $\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}$.`,
  ideas: [
    r`Each side pairs with the angle \emph{opposite} it.`,
    r`Use the sine law when you know a side and its opposite angle (plus one more piece): \textbf{AAS}, \textbf{ASA}, or \textbf{SSA}.`,
    r`To find a side, put sides on top; to find an angle, flip both fractions.`,
    r`Find a missing third angle with $A+B+C=180^\circ$ when needed.`,
  ],
  examples: [
    { t: "Finding a side", body: r`In $\triangle ABC$, $A=40^\circ$, $B=60^\circ$, $b=10$. Find $a$.
\gtri{$A$}{$B$}{$C$}{$a$}{$b$}{$c$}
\soln $\dfrac{a}{\sin40^\circ}=\dfrac{10}{\sin60^\circ}\Rightarrow a=\dfrac{10\sin40^\circ}{\sin60^\circ}\approx7.4.$` },
    { t: "Another side", body: r`$A=50^\circ$, $a=8$, $B=70^\circ$. Find $b$.
\soln $b=\dfrac{8\sin70^\circ}{\sin50^\circ}\approx9.8.$` },
    { t: "Finding an angle", body: r`$a=7$, $A=40^\circ$, $b=10$. Find $B$.
\soln $\sin B=\dfrac{10\sin40^\circ}{7}\approx0.918\Rightarrow B\approx66.6^\circ.$` },
    { t: "ASA (find third angle first)", body: r`$A=45^\circ$, $B=65^\circ$, $c=12$. Find $a$.
\soln $C=70^\circ$; $a=\dfrac{12\sin45^\circ}{\sin70^\circ}\approx9.0.$` },
    { t: "Mixed", body: r`$B=30^\circ$, $A=80^\circ$, $a=15$. Find $b$.
\soln $b=\dfrac{15\sin30^\circ}{\sin80^\circ}\approx7.6.$` },
    { t: "Angle again", body: r`$a=12$, $A=70^\circ$, $c=9$. Find $C$.
\soln $\sin C=\dfrac{9\sin70^\circ}{12}\approx0.705\Rightarrow C\approx44.8^\circ.$` },
    { t: "AAS", body: r`$A=55^\circ$, $B=40^\circ$, $a=18$. Find $b$.
\soln $b=\dfrac{18\sin40^\circ}{\sin55^\circ}\approx14.1.$` },
    { t: "Find a side after the third angle", body: r`$A=60^\circ$, $B=50^\circ$, $b=14$. Find $c$.
\soln $C=70^\circ$; $c=\dfrac{14\sin70^\circ}{\sin50^\circ}\approx17.2.$` },
    { t: "Solve two sides (harder)", body: r`$A=35^\circ$, $B=85^\circ$, $a=20$. Find $b$ and $c$.
\soln $C=60^\circ$; $b=\dfrac{20\sin85^\circ}{\sin35^\circ}\approx34.7$; $c=\dfrac{20\sin60^\circ}{\sin35^\circ}\approx30.2.$` },
  ],
  questions: [
    { ask: r`$A=50^\circ$, $B=60^\circ$, $b=12$. Find $a$.`, ws: "2.2cm" },
    { ask: r`$A=40^\circ$, $a=9$, $B=75^\circ$. Find $b$.`, ws: "2.2cm" },
    { ask: r`$a=8$, $A=35^\circ$, $b=11$. Find $B$.`, ws: "2.2cm" },
    { ask: r`$A=55^\circ$, $B=65^\circ$, $c=10$. Find $a$.`, ws: "2.4cm" },
    { ask: r`$B=45^\circ$, $A=80^\circ$, $a=15$. Find $b$.`, ws: "2.2cm" },
    { ask: r`$a=14$, $A=70^\circ$, $c=10$. Find $C$.`, ws: "2.2cm" },
    { ask: r`$A=48^\circ$, $B=62^\circ$, $a=20$. Find $b$.`, ws: "2.2cm" },
    { ask: r`$A=35^\circ$, $B=75^\circ$, $b=18$. Find $a$.`, ws: "2.4cm" },
    { ask: r`$A=60^\circ$, $a=24$, $B=40^\circ$. Find $b$.`, ws: "2.2cm" },
    { ask: r`$a=10$, $A=45^\circ$, $b=12$. Find $B$.`, ws: "2.2cm" },
    { ask: r`$A=50^\circ$, $C=70^\circ$, $b=16$. Find $a$.`, ws: "2.4cm" },
    { ask: r`$A=40^\circ$, $C=85^\circ$, $a=12$. Find $c$.`, ws: "2.4cm" },
    { ask: r`$A=42^\circ$, $B=78^\circ$, $a=16$. Find $b$ and $c$.`, ws: "3.0cm", challenge: true },
  ],
  answers: [
    r`$\dfrac{12\sin50^\circ}{\sin60^\circ}\approx10.6$.`,
    r`$\dfrac{9\sin75^\circ}{\sin40^\circ}\approx13.5$.`,
    r`$\sin B=\tfrac{11\sin35^\circ}{8}\approx0.789\Rightarrow B\approx52.1^\circ$.`,
    r`$C=60^\circ$; $a=\dfrac{10\sin55^\circ}{\sin60^\circ}\approx9.5$.`,
    r`$\dfrac{15\sin45^\circ}{\sin80^\circ}\approx10.8$.`,
    r`$\sin C=\tfrac{10\sin70^\circ}{14}\approx0.671\Rightarrow C\approx42.2^\circ$.`,
    r`$\dfrac{20\sin62^\circ}{\sin48^\circ}\approx23.8$.`,
    r`$\dfrac{18\sin35^\circ}{\sin75^\circ}\approx10.7$.`,
    r`$\dfrac{24\sin40^\circ}{\sin60^\circ}\approx17.8$.`,
    r`$\sin B=\tfrac{12\sin45^\circ}{10}\approx0.849\Rightarrow B\approx58.0^\circ$.`,
    r`$B=60^\circ$; $a=\dfrac{16\sin50^\circ}{\sin60^\circ}\approx14.2$.`,
    r`$\dfrac{12\sin85^\circ}{\sin40^\circ}\approx18.6$.`,
    r`$C=60^\circ$; $b\approx23.4$, $c\approx20.7$.`,
  ],
},
{
  code: "7.2", unit: "7: Sine \\& Cosine Laws", title: "The Cosine Law",
  intro: r`The \textbf{cosine law} generalises the Pythagorean theorem: $c^2=a^2+b^2-2ab\cos C$.`,
  ideas: [
    r`Use it for \textbf{SAS} (two sides and the included angle) to find the third side.`,
    r`Use the rearranged form $\cos C=\dfrac{a^2+b^2-c^2}{2ab}$ for \textbf{SSS} (find an angle).`,
    r`The angle and the side it helps find are always \emph{opposite} each other.`,
    r`A negative cosine means an obtuse angle.`,
  ],
  examples: [
    { t: "SAS find a side", body: r`In $\triangle ABC$, $a=5$, $b=7$, $C=60^\circ$. Find $c$.
\gtri{$A$}{$B$}{$C$}{$a$}{$b$}{$c$}
\soln $c^2=25+49-2(5)(7)\cos60^\circ=74-35=39\Rightarrow c\approx6.2.$` },
    { t: "Obtuse not yet", body: r`$a=8$, $b=6$, $C=40^\circ$. Find $c$.
\soln $c^2=64+36-96\cos40^\circ\approx26.5\Rightarrow c\approx5.1.$` },
    { t: "SSS find an angle", body: r`Find $C$ in a triangle with $a=5$, $b=6$, $c=7$.
\soln $\cos C=\dfrac{25+36-49}{2(5)(6)}=\dfrac{12}{60}=0.2\Rightarrow C\approx78.5^\circ.$` },
    { t: "Largest angle", body: r`Find the largest angle of a $4$-$5$-$6$ triangle.
\soln Largest is opposite $6$: $\cos\theta=\dfrac{16+25-36}{40}=0.125\Rightarrow\theta\approx82.8^\circ.$` },
    { t: "Obtuse included angle", body: r`$a=10$, $b=12$, $C=100^\circ$. Find $c$.
\soln $c^2=100+144-240\cos100^\circ\approx285.7\Rightarrow c\approx16.9.$` },
    { t: "Find an angle", body: r`Find $A$ in a triangle with $a=7$, $b=8$, $c=9$.
\soln $\cos A=\dfrac{64+81-49}{2(8)(9)}=\dfrac{96}{144}=0.667\Rightarrow A\approx48.2^\circ.$` },
    { t: "SAS again", body: r`$a=11$, $b=13$, $C=72^\circ$. Find $c$.
\soln $c^2=121+169-286\cos72^\circ\approx201.6\Rightarrow c\approx14.2.$` },
    { t: "Smallest angle", body: r`Find the smallest angle of a $6$-$8$-$9$ triangle.
\soln Smallest is opposite $6$: $\cos\theta=\dfrac{64+81-36}{144}\approx0.757\Rightarrow\theta\approx40.8^\circ.$` },
    { t: "Recognising a right angle (harder)", body: r`Use the cosine law to find $C$ in a $9$-$12$-$15$ triangle ($c=15$).
\soln $\cos C=\dfrac{81+144-225}{2(9)(12)}=\dfrac{0}{216}=0\Rightarrow C=90^\circ$ --- it's a right triangle.` },
  ],
  questions: [
    { ask: r`$a=6$, $b=9$, $C=50^\circ$. Find $c$.`, ws: "2.4cm" },
    { ask: r`$a=7$, $b=10$, $C=120^\circ$. Find $c$.`, ws: "2.4cm" },
    { ask: r`Find $C$ in a triangle with $a=4$, $b=5$, $c=6$.`, ws: "2.4cm" },
    { ask: r`Find the largest angle of a $5$-$7$-$9$ triangle.`, ws: "2.4cm" },
    { ask: r`$a=9$, $b=12$, $C=35^\circ$. Find $c$.`, ws: "2.4cm" },
    { ask: r`Find $A$ in a triangle with $a=6$, $b=8$, $c=10$.`, ws: "2.4cm" },
    { ask: r`$a=11$, $b=13$, $C=72^\circ$. Find $c$.`, ws: "2.4cm" },
    { ask: r`Find the smallest angle of a $6$-$8$-$9$ triangle.`, ws: "2.4cm" },
    { ask: r`$a=5$, $b=12$, $C=90^\circ$. Find $c$.`, ws: "2.2cm" },
    { ask: r`Find $B$ in a triangle with $a=7$, $b=9$, $c=8$.`, ws: "2.4cm" },
    { ask: r`$a=10$, $b=10$, $C=80^\circ$. Find $c$.`, ws: "2.4cm" },
    { ask: r`Find the largest angle of a $3$-$5$-$7$ triangle.`, ws: "2.4cm" },
    { ask: r`Find the largest angle of an $8$-$11$-$15$ triangle.`, ws: "2.8cm", challenge: true },
  ],
  answers: [
    r`$c^2=117-108\cos50^\circ\approx47.6\Rightarrow c\approx6.9$.`,
    r`$c^2=149-140\cos120^\circ=219\Rightarrow c\approx14.8$.`,
    r`$\cos C=\tfrac{5}{40}=0.125\Rightarrow C\approx82.8^\circ$.`,
    r`Opp $9$: $\cos\theta=\tfrac{-7}{70}=-0.1\Rightarrow\theta\approx95.7^\circ$.`,
    r`$c^2=225-216\cos35^\circ\approx48\Rightarrow c\approx6.9$.`,
    r`$\cos A=\tfrac{128}{160}=0.8\Rightarrow A\approx36.9^\circ$.`,
    r`$c^2\approx201.6\Rightarrow c\approx14.2$.`,
    r`Opp $6$: $\cos\theta\approx0.757\Rightarrow\theta\approx40.8^\circ$.`,
    r`$c^2=169\Rightarrow c=13$.`,
    r`$\cos B=\tfrac{32}{112}\approx0.286\Rightarrow B\approx73.4^\circ$.`,
    r`$c^2=200-200\cos80^\circ\approx165.3\Rightarrow c\approx12.9$.`,
    r`Opp $7$: $\cos\theta=-0.5\Rightarrow\theta=120^\circ$.`,
    r`Opp $15$: $\cos\theta=\tfrac{-40}{176}\approx-0.227\Rightarrow\theta\approx103.1^\circ$.`,
  ],
},
{
  code: "7.3", unit: "7: Sine \\& Cosine Laws", title: "Choosing the Right Law",
  intro: r`Pick the law from the information you're given.`,
  ideas: [
    r`\textbf{Sine law:} you have a side with its opposite angle (AAS, ASA, SSA).`,
    r`\textbf{Cosine law:} you have SAS (two sides + included angle) or SSS (three sides).`,
    r`Right triangle? Plain SOH CAH TOA is simplest.`,
    r`After finding one unknown, the sine law is often easiest for the rest.`,
  ],
  examples: [
    { t: "Identify (AAS)", body: r`Which law: given $A$, $B$, and $a$?
\soln A side with its opposite angle $\Rightarrow$ \textbf{sine law}.` },
    { t: "Identify (SAS)", body: r`Which law: given $a$, $b$, and $C$?
\soln Two sides and the included angle $\Rightarrow$ \textbf{cosine law}.` },
    { t: "Identify (SSS)", body: r`Which law: given $a$, $b$, $c$?
\soln Three sides $\Rightarrow$ \textbf{cosine law} (to find an angle).` },
    { t: "Identify (SSA)", body: r`Which law: given $A$, $a$, $b$?
\soln A side with its opposite angle $\Rightarrow$ \textbf{sine law} (find $B$).` },
    { t: "Solve with cosine", body: r`$a=6$, $b=8$, $C=60^\circ$. Find $c$.
\soln SAS: $c^2=36+64-96\cos60^\circ=52\Rightarrow c\approx7.2.$` },
    { t: "Solve with sine", body: r`$A=40^\circ$, $B=60^\circ$, $a=10$. Find $b$.
\soln Sine law: $b=\dfrac{10\sin60^\circ}{\sin40^\circ}\approx13.5.$` },
    { t: "Identify (ASA)", body: r`Which law: given $A$, $B$, $c$?
\soln \textbf{Sine law} (after finding $C=180^\circ-A-B$).` },
    { t: "Solve SSS angle", body: r`Find the largest angle of a $5$-$6$-$7$ triangle.
\soln Cosine law, opposite $7$: $\cos\theta=\dfrac{25+36-49}{60}=0.2\Rightarrow\theta\approx78.5^\circ.$` },
    { t: "Two-step (harder)", body: r`$a=9$, $b=7$, $C=110^\circ$. Find $c$, then $A$.
\soln Cosine: $c^2=81+49-126\cos110^\circ\approx173.1\Rightarrow c\approx13.2$. Then sine: $\sin A=\dfrac{9\sin110^\circ}{13.2}\approx0.641\Rightarrow A\approx39.9^\circ.$` },
  ],
  questions: [
    { ask: r`Which law: given $A$, $a$, $B$? (Name it.)`, ws: "1.8cm" },
    { ask: r`Which law: given $a$, $b$, $c$?`, ws: "1.8cm" },
    { ask: r`Which law: given $b$, $c$, $A$?`, ws: "1.8cm" },
    { ask: r`Which law: given $A$, $B$, $a$?`, ws: "1.8cm" },
    { ask: r`$a=7$, $b=9$, $C=55^\circ$. Find $c$.`, ws: "2.4cm" },
    { ask: r`$A=35^\circ$, $B=70^\circ$, $a=12$. Find $b$.`, ws: "2.4cm" },
    { ask: r`Which law for SSS, and what does it find?`, ws: "2.0cm" },
    { ask: r`Find the largest angle of a $4$-$6$-$8$ triangle.`, ws: "2.4cm" },
    { ask: r`$A=50^\circ$, $a=12$, $b=9$. Find $B$.`, ws: "2.4cm" },
    { ask: r`$a=9$, $b=7$, $C=110^\circ$. Find $c$.`, ws: "2.4cm" },
    { ask: r`Given $A=30^\circ$, $B=70^\circ$, $c=10$, which law finds $a$, and what is $a$?`, ws: "2.6cm" },
    { ask: r`Given $a=8$, $c=5$, $B=95^\circ$, which law finds $b$, and what is $b$?`, ws: "2.6cm" },
    { ask: r`A triangle has $a=14$, $b=9$, $A=65^\circ$. Choose a law and find $B$.`, ws: "2.8cm", challenge: true },
  ],
  answers: [
    r`Sine law.`, r`Cosine law.`, r`Cosine law (SAS).`, r`Sine law.`,
    r`$c^2=130-126\cos55^\circ\approx57.7\Rightarrow c\approx7.6$.`,
    r`$\dfrac{12\sin70^\circ}{\sin35^\circ}\approx19.7$.`,
    r`Cosine law --- finds an angle.`,
    r`Opp $8$: $\cos\theta=\tfrac{16+36-64}{48}=-0.25\Rightarrow\theta\approx104.5^\circ$.`,
    r`$\sin B=\tfrac{9\sin50^\circ}{12}\approx0.574\Rightarrow B\approx35.1^\circ$.`,
    r`$c^2\approx173.1\Rightarrow c\approx13.2$.`,
    r`Sine ($C=80^\circ$): $a=\dfrac{10\sin30^\circ}{\sin80^\circ}\approx5.1$.`,
    r`Cosine: $b^2=64+25-80\cos95^\circ\approx96\Rightarrow b\approx9.8$.`,
    r`Sine: $\sin B=\tfrac{9\sin65^\circ}{14}\approx0.583\Rightarrow B\approx35.6^\circ$.`,
  ],
},
{
  code: "7.4", unit: "7: Sine \\& Cosine Laws", title: "Applications of the Sine \\& Cosine Laws",
  intro: r`Many real situations form non-right triangles --- surveying, navigation, and design. Sketch the triangle, label it, and pick a law.`,
  ideas: [
    r`Draw and label the triangle from the words; mark known sides and angles.`,
    r`SAS or SSS $\Rightarrow$ cosine law; a side with its opposite angle $\Rightarrow$ sine law.`,
    r`Bearings and directions become the angles of the triangle.`,
    r`State the final answer with units.`,
  ],
  examples: [
    { t: "Two roads", body: r`Two straight roads leave a point $70^\circ$ apart, running $5$ km and $8$ km. How far apart are their ends?
\soln $c^2=25+64-80\cos70^\circ\approx61.6\Rightarrow c\approx7.9$ km.` },
    { t: "Triangular field", body: r`A field has sides $40$, $60$, $50$ m. Find the angle between the $40$ m and $60$ m sides.
\soln Opposite the $50$ m side: $\cos\theta=\dfrac{1600+3600-2500}{2(40)(60)}=0.5625\Rightarrow\theta\approx55.8^\circ.$` },
    { t: "Two ships", body: r`Two ships leave port on courses $65^\circ$ apart. When they have sailed $30$ km and $45$ km, how far apart are they?
\soln $c^2=900+2025-2700\cos65^\circ\approx1784\Rightarrow c\approx42.2$ km.` },
    { t: "Surveying a baseline", body: r`From the ends of a $100$ m baseline, a tree is sighted at $50^\circ$ and $60^\circ$. Find its distance from the first point.
\soln Third angle $=70^\circ$; distance $=\dfrac{100\sin60^\circ}{\sin70^\circ}\approx92.2$ m.` },
    { t: "Third side", body: r`Two sides of a triangle are $7$ m and $9$ m with a $80^\circ$ angle between. Find the third side.
\soln $c^2=49+81-126\cos80^\circ\approx108.1\Rightarrow c\approx10.4$ m.` },
    { t: "Parallelogram diagonal", body: r`A parallelogram has sides $6$ and $8$ with a $110^\circ$ angle. Find the longer diagonal.
\soln $d^2=36+64-96\cos110^\circ\approx132.8\Rightarrow d\approx11.5.$` },
    { t: "Flight path", body: r`A plane flies $200$ km, turns $30^\circ$, and flies $150$ km. How far is it from the start?
\soln Interior angle $=150^\circ$: $c^2=200^2+150^2-2(200)(150)\cos150^\circ\approx114460\Rightarrow c\approx338.3$ km.` },
    { t: "Largest angle of a plot", body: r`A triangular plot has sides $10$, $14$, $18$ m. Find its largest angle.
\soln Opposite $18$: $\cos\theta=\dfrac{100+196-324}{280}=-0.1\Rightarrow\theta\approx95.7^\circ.$` },
    { t: "Two-step survey (harder)", body: r`A triangle has sides $12$ and $15$ with an included angle of $95^\circ$. Find the third side, then one of the remaining angles.
\soln $c^2=144+225-360\cos95^\circ\approx400.4\Rightarrow c\approx20.0$. Then $\sin A=\dfrac{12\sin95^\circ}{20}\approx0.598\Rightarrow A\approx36.7^\circ.$` },
  ],
  questions: [
    { ask: r`Two roads leave a point $80^\circ$ apart, running $6$ km and $9$ km. How far apart are their ends?`, ws: "2.6cm" },
    { ask: r`A field has sides $30$, $40$, $50$ m. Find the angle between the $30$ m and $40$ m sides.`, ws: "2.6cm" },
    { ask: r`Two ships leave port $75^\circ$ apart, sailing $20$ km and $35$ km. How far apart are they?`, ws: "2.6cm" },
    { ask: r`From a $120$ m baseline, a point is sighted at $55^\circ$ and $65^\circ$. Find its distance from the first end.`, ws: "2.8cm" },
    { ask: r`Two sides of a triangle are $9$ m and $11$ m with a $70^\circ$ angle between. Find the third side.`, ws: "2.4cm" },
    { ask: r`A parallelogram has sides $5$ and $7$ with a $120^\circ$ angle. Find the longer diagonal.`, ws: "2.4cm" },
    { ask: r`A plane flies $180$ km, turns $40^\circ$, and flies $120$ km. How far is it from the start?`, ws: "2.8cm" },
    { ask: r`A triangular plot has sides $12$, $15$, $20$ km. Find its largest angle.`, ws: "2.6cm" },
    { ask: r`A boat sails $12$ km, then turns so the interior angle is $100^\circ$, and sails $18$ km. Find its distance from the start.`, ws: "2.8cm" },
    { ask: r`From two points $80$ m apart, a landmark is sighted at $55^\circ$ and $65^\circ$. Find its distance from the first point.`, ws: "2.8cm" },
    { ask: r`A triangular garden has two sides $25$ m and $30$ m meeting at $95^\circ$. Find the length of the third side (the fence).`, ws: "2.6cm" },
    { ask: r`Three towns form a triangle with sides $9$, $12$, $16$ km. Find the largest angle.`, ws: "2.6cm" },
    { ask: r`A triangle has sides $14$ and $18$ with an included angle of $105^\circ$. Find the third side and then one remaining angle.`, ws: "3.2cm", challenge: true },
  ],
  answers: [
    r`$c^2=117-108\cos80^\circ\approx98.2\Rightarrow c\approx9.9$ km.`,
    r`Opp $50$: $\cos\theta=\tfrac{900+1600-2500}{2400}=0\Rightarrow\theta=90^\circ$.`,
    r`$c^2=1625-1400\cos75^\circ\approx1262\Rightarrow c\approx35.5$ km.`,
    r`Third angle $60^\circ$; $\dfrac{120\sin65^\circ}{\sin60^\circ}\approx125.6$ m.`,
    r`$c^2=202-198\cos70^\circ\approx134.3\Rightarrow c\approx11.6$ m.`,
    r`$d^2=25+49-70\cos120^\circ=109\Rightarrow d\approx10.4$.`,
    r`Interior $140^\circ$: $c^2\approx180^2+120^2-2(180)(120)\cos140^\circ\approx79899\Rightarrow c\approx282.7$ km.`,
    r`Opp $20$: $\cos\theta=\tfrac{144+225-400}{360}\approx-0.086\Rightarrow\theta\approx94.9^\circ$.`,
    r`$c^2=144+324-432\cos100^\circ\approx543\Rightarrow c\approx23.3$ km.`,
    r`Third angle $60^\circ$; $\dfrac{80\sin65^\circ}{\sin60^\circ}\approx83.7$ m.`,
    r`$c^2=625+900-1500\cos95^\circ\approx1656\Rightarrow c\approx40.7$ m.`,
    r`Opp $16$: $\cos\theta=\tfrac{81+144-256}{216}\approx-0.144\Rightarrow\theta\approx98.3^\circ$.`,
    r`$c^2=196+324-504\cos105^\circ\approx650.4\Rightarrow c\approx25.5$; $\sin A=\tfrac{14\sin105^\circ}{25.5}\approx0.530\Rightarrow A\approx32.0^\circ$.`,
  ],
},
];
