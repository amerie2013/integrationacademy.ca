// MPM2D Unit 6 — Trigonometry of Right Triangles (worksheets 6.1–6.6)
const r = String.raw;

export default [
{
  code: "6.1", unit: "6: Trigonometry", title: "Congruence \\& Similar Triangles",
  intro: r`\textbf{Similar} triangles ($\sim$) have equal angles and proportional sides; \textbf{congruent} ($\cong$) triangles are identical (scale factor $1$).`,
  ideas: [
    r`Similar triangles: corresponding angles equal, corresponding sides in a constant ratio (the \textbf{scale factor}).`,
    r`Prove similar by \textbf{AA} (two equal angles), \textbf{SSS} (sides proportional), or \textbf{SAS}.`,
    r`Set up a proportion $\dfrac{\text{side}}{\text{matching side}}=\dfrac{\text{side}}{\text{matching side}}$ to find a missing length.`,
    r`Equal ratios of perimeters equal the scale factor.`,
  ],
  examples: [
    { t: "AA similarity", body: r`Two triangles have angles $40^\circ,60^\circ,80^\circ$ each. Are they similar?
\soln Yes --- all corresponding angles are equal (AA), so the triangles are similar.` },
    { t: "SSS similarity", body: r`Are triangles with sides $3,4,5$ and $6,8,10$ similar?
\soln $\tfrac{3}{6}=\tfrac{4}{8}=\tfrac{5}{10}=\tfrac12$ --- all ratios equal, so similar (scale factor $2$).` },
    { t: "Finding a side", body: r`$\triangle ABC\sim\triangle DEF$ with $AB=4$, $DE=6$, $DF=9$. Find $AC$.
\soln $\dfrac{AC}{DF}=\dfrac{AB}{DE}\Rightarrow \dfrac{AC}{9}=\dfrac{4}{6}\Rightarrow AC=6.$` },
    { t: "Scale factor", body: r`Find the scale factor from $5,12,13$ to $10,24,26$.
\soln Each side doubles, so the scale factor is $2$.` },
    { t: "Proportion", body: r`In similar triangles, $\dfrac{2}{5}=\dfrac{8}{x}$. Find $x$.
\soln Cross-multiply: $2x=40\Rightarrow x=20.$` },
    { t: "Shadow problem", body: r`A $1.5$ m person casts a $2$ m shadow; a tree casts a $16$ m shadow. Find the tree's height.
\soln $\dfrac{1.5}{2}=\dfrac{h}{16}\Rightarrow h=12$ m.` },
    { t: "Overlapping triangles", body: r`Two nested similar triangles give $\dfrac{6}{9}=\dfrac{8}{x}$. Find $x$.
\soln $6x=72\Rightarrow x=12.$` },
    { t: "Checking similarity", body: r`Are triangles $3,4,6$ and $6,8,12$ similar?
\soln $\tfrac36=\tfrac48=\tfrac{6}{12}=\tfrac12$ --- yes, similar.` },
    { t: "Perimeter ratio (harder)", body: r`$\triangle ABC\sim\triangle DEF$ with scale factor $3:5$. If the perimeter of $\triangle ABC$ is $24$, find the perimeter of $\triangle DEF$.
\soln Perimeters share the scale factor: $24\times\tfrac53=40.$` },
  ],
  questions: [
    { ask: r`Two triangles have angles $50^\circ,70^\circ,60^\circ$ each. Are they similar? Why?`, ws: "2.0cm" },
    { ask: r`Are triangles with sides $5,12,13$ and $10,24,26$ similar? Justify.`, ws: "2.2cm" },
    { ask: r`$\triangle ABC\sim\triangle DEF$ with $AB=6$, $DE=9$, $DF=15$. Find $AC$.`, ws: "2.2cm" },
    { ask: r`Find the scale factor from $4,7,9$ to $12,21,27$.`, ws: "2.0cm" },
    { ask: r`Solve the proportion $\dfrac{3}{7}=\dfrac{12}{x}$.`, ws: "2.0cm" },
    { ask: r`A $1.8$ m person casts a $3$ m shadow; a flagpole casts a $25$ m shadow. Find its height.`, ws: "2.4cm" },
    { ask: r`Two nested similar triangles give $\dfrac{4}{10}=\dfrac{6}{x}$. Find $x$.`, ws: "2.2cm" },
    { ask: r`Are triangles $2,3,4$ and $6,9,12$ similar? Justify.`, ws: "2.2cm" },
    { ask: r`$\triangle ABC\sim\triangle PQR$ with scale factor $2:3$. If $AB=8$, find $PQ$.`, ws: "2.0cm" },
    { ask: r`Solve $\dfrac{x}{6}=\dfrac{10}{4}$.`, ws: "2.0cm" },
    { ask: r`Two similar triangles have perimeters $15$ and $25$. Find the scale factor.`, ws: "2.0cm" },
    { ask: r`A model triangle has sides $3,4,5$; a similar one has its longest side $20$. Find the other sides.`, ws: "2.4cm" },
    { ask: r`$\triangle ABC\sim\triangle DEF$ with ratio $4:7$. If the perimeter of $\triangle DEF$ is $42$, find the perimeter of $\triangle ABC$.`, ws: "2.8cm", challenge: true },
  ],
  answers: [
    r`Yes --- equal corresponding angles (AA).`,
    r`Yes --- all ratios $=\tfrac12$ (SSS).`,
    r`$\tfrac{AC}{15}=\tfrac{6}{9}\Rightarrow AC=10$.`,
    r`Scale factor $3$.`,
    r`$3x=84\Rightarrow x=28$.`,
    r`$\tfrac{1.8}{3}=\tfrac{h}{25}\Rightarrow h=15$ m.`,
    r`$4x=60\Rightarrow x=15$.`,
    r`Yes --- all ratios $=\tfrac13$.`,
    r`$\tfrac{8}{PQ}=\tfrac23\Rightarrow PQ=12$.`,
    r`$4x=60\Rightarrow x=15$.`,
    r`$25/15=\tfrac53$.`,
    r`Factor $4$: sides $12$ and $16$.`,
    r`$42\times\tfrac47=24$.`,
  ],
},
{
  code: "6.2", unit: "6: Trigonometry", title: "Solving Problems with Similar Triangles",
  intro: r`Similar triangles let you measure things indirectly --- heights, distances, and map scales --- with a proportion.`,
  ideas: [
    r`Match corresponding sides and write a proportion.`,
    r`Shadow problems compare height to shadow length.`,
    r`Map/scale problems use the scale ratio as one fraction.`,
    r`Always include units and a concluding sentence.`,
  ],
  examples: [
    { t: "Building by shadows", body: r`A $1.8$ m person casts a $3$ m shadow; a building casts a $30$ m shadow. Find its height.
\soln $\dfrac{1.8}{3}=\dfrac{h}{30}\Rightarrow h=18$ m.` },
    { t: "Pole by shadows", body: r`A $1$ m stick casts a $1.5$ m shadow; a pole casts a $9$ m shadow. Find its height.
\soln $\dfrac{1}{1.5}=\dfrac{h}{9}\Rightarrow h=6$ m.` },
    { t: "Map scale", body: r`On a $1:50000$ map, two towns are $4$ cm apart. Find the real distance.
\soln $4\text{ cm}\times50000=200000$ cm $=2$ km.` },
    { t: "Mirror method", body: r`A person whose eyes are $1.6$ m up stands $2$ m from a mirror and sees the top of a tree $6$ m beyond the mirror. Find the tree's height.
\soln $\dfrac{1.6}{2}=\dfrac{h}{6}\Rightarrow h=4.8$ m.` },
    { t: "Nested triangles", body: r`A $1.5$ m sign and a lamp post stand in line; the sign is $4$ m and the post $10$ m from a light. Find the post's height.
\soln $\dfrac{1.5}{4}=\dfrac{h}{10}\Rightarrow h=3.75$ m.` },
    { t: "River width", body: r`Similar triangles give $\dfrac{w}{40}=\dfrac{15}{20}$ for a river width $w$. Find $w$.
\soln $w=40\times\tfrac{15}{20}=30$ m.` },
    { t: "Scale drawing", body: r`A scale model uses $1:20$. A model car is $22$ cm long. Find the real length.
\soln $22\times20=440$ cm $=4.4$ m.` },
    { t: "Ramp", body: r`A ramp and a support post are similar triangles: $\dfrac{1.2}{3}=\dfrac{h}{5}$. Find $h$.
\soln $h=5\times\tfrac{1.2}{3}=2$ m.` },
    { t: "Two-step (harder)", body: r`A $2$ m person stands so their $2.5$ m shadow just reaches the same point as a tree's shadow; the person is $12$ m from the tree's base. Find the tree's height.
\soln Tree's shadow $=12+2.5=14.5$ m. $\dfrac{2}{2.5}=\dfrac{h}{14.5}\Rightarrow h=11.6$ m.` },
  ],
  questions: [
    { ask: r`A $1.5$ m person casts a $2.5$ m shadow; a tree casts a $20$ m shadow. Find its height.`, ws: "2.4cm" },
    { ask: r`A $2$ m post casts a $3$ m shadow; a tower casts a $45$ m shadow. Find its height.`, ws: "2.4cm" },
    { ask: r`On a $1:25000$ map, two points are $6$ cm apart. Find the real distance (km).`, ws: "2.4cm" },
    { ask: r`A mirror method gives $\dfrac{1.7}{1.5}=\dfrac{h}{9}$. Find the tree's height.`, ws: "2.2cm" },
    { ask: r`A $1.2$ m sign is $3$ m from a light; a $h$ m post is $12$ m from it. Find $h$ if $\dfrac{1.2}{3}=\dfrac{h}{12}$.`, ws: "2.4cm" },
    { ask: r`Similar triangles give $\dfrac{w}{50}=\dfrac{12}{30}$ for a river width $w$. Find $w$.`, ws: "2.2cm" },
    { ask: r`A $1:50$ scale model is $30$ cm tall. Find the real height (m).`, ws: "2.2cm" },
    { ask: r`A $1$ m stick casts a $0.8$ m shadow; a building casts a $20$ m shadow. Find its height.`, ws: "2.4cm" },
    { ask: r`A map scale is $1:100000$. A road is $7.5$ cm long. Find the real length (km).`, ws: "2.2cm" },
    { ask: r`Similar triangles: $\dfrac{2.5}{4}=\dfrac{h}{16}$. Find $h$.`, ws: "2.2cm" },
    { ask: r`A flagpole's shadow is $14$ m when a $1.6$ m person's shadow is $2$ m. Find the flagpole's height.`, ws: "2.4cm" },
    { ask: r`A photo is enlarged with scale factor $4$. If the original is $5\text{ cm}\times7\text{ cm}$, find the new dimensions.`, ws: "2.4cm" },
    { ask: r`A $1.8$ m person's $2.4$ m shadow reaches the tip of a tree's shadow; the person is $15$ m from the tree. Find the tree's height.`, ws: "3.0cm", challenge: true },
  ],
  answers: [
    r`$\tfrac{1.5}{2.5}=\tfrac{h}{20}\Rightarrow h=12$ m.`,
    r`$\tfrac{2}{3}=\tfrac{h}{45}\Rightarrow h=30$ m.`,
    r`$6\times25000=150000$ cm $=1.5$ km.`,
    r`$h=9\times\tfrac{1.7}{1.5}=10.2$ m.`,
    r`$h=12\times\tfrac{1.2}{3}=4.8$ m.`,
    r`$w=50\times\tfrac{12}{30}=20$ m.`,
    r`$30\times50=1500$ cm $=15$ m.`,
    r`$\tfrac{1}{0.8}=\tfrac{h}{20}\Rightarrow h=25$ m.`,
    r`$7.5\times100000=750000$ cm $=7.5$ km.`,
    r`$h=16\times\tfrac{2.5}{4}=10$.`,
    r`$\tfrac{1.6}{2}=\tfrac{h}{14}\Rightarrow h=11.2$ m.`,
    r`$20\text{ cm}\times28$ cm.`,
    r`Shadow $=15+2.4=17.4$; $\tfrac{1.8}{2.4}=\tfrac{h}{17.4}\Rightarrow h=13.05$ m.`,
  ],
},
{
  code: "6.3", unit: "6: Trigonometry", title: "The Primary Trigonometric Ratios",
  intro: r`In a right triangle, the angle $\theta$ relates the sides through \textbf{SOH CAH TOA}: $\sin\theta=\tfrac{\text{opp}}{\text{hyp}}$, $\cos\theta=\tfrac{\text{adj}}{\text{hyp}}$, $\tan\theta=\tfrac{\text{opp}}{\text{adj}}$.`,
  ideas: [
    r`Label sides relative to $\theta$: \textbf{opposite}, \textbf{adjacent}, and the \textbf{hypotenuse} (across from the right angle).`,
    r`SOH CAH TOA gives the three ratios.`,
    r`Use the Pythagorean theorem to find a missing side first if needed.`,
    r`Ratios depend only on the angle, not the triangle's size.`,
  ],
  examples: [
    { t: "The 3-4-5 triangle", body: r`State $\sin\theta$, $\cos\theta$, $\tan\theta$ for this triangle.
\rtri{4}{3}{$3$}{$4$}{$5$}
\soln $\sin\theta=\tfrac35$, $\cos\theta=\tfrac45$, $\tan\theta=\tfrac34.$` },
    { t: "Sine from two sides", body: r`If the opposite is $5$ and the hypotenuse is $13$, find $\sin\theta$.
\soln $\sin\theta=\tfrac{5}{13}.$` },
    { t: "Cosine", body: r`If the adjacent is $8$ and the hypotenuse is $17$, find $\cos\theta$.
\soln $\cos\theta=\tfrac{8}{17}.$` },
    { t: "Tangent", body: r`If the opposite is $7$ and the adjacent is $24$, find $\tan\theta$.
\soln $\tan\theta=\tfrac{7}{24}.$` },
    { t: "All three (6-8-10)", body: r`For a $6$-$8$-$10$ right triangle with $\theta$ opposite the $6$, find all three ratios.
\soln $\sin\theta=\tfrac{6}{10}=\tfrac35$, $\cos\theta=\tfrac{8}{10}=\tfrac45$, $\tan\theta=\tfrac68=\tfrac34.$` },
    { t: "Find the hypotenuse first", body: r`The legs are $3$ and $4$; find $\sin\theta$ for $\theta$ opposite the $3$.
\soln Hyp $=\sqrt{3^2+4^2}=5$, so $\sin\theta=\tfrac35.$` },
    { t: "Identifying the ratio", body: r`Which ratio uses the opposite and adjacent sides only?
\soln $\tan\theta=\dfrac{\text{opp}}{\text{adj}}.$` },
    { t: "5-12-13", body: r`For a $5$-$12$-$13$ triangle with $\theta$ opposite the $5$, find the three ratios.
\soln $\sin\theta=\tfrac{5}{13}$, $\cos\theta=\tfrac{12}{13}$, $\tan\theta=\tfrac{5}{12}.$` },
    { t: "Both acute angles (harder)", body: r`For an $8$-$15$-$17$ triangle, give the three ratios for each acute angle $\alpha$ (opp $8$) and $\beta$ (opp $15$).
\soln $\alpha$: $\sin=\tfrac{8}{17}$, $\cos=\tfrac{15}{17}$, $\tan=\tfrac{8}{15}$. $\beta$: $\sin=\tfrac{15}{17}$, $\cos=\tfrac{8}{17}$, $\tan=\tfrac{15}{8}.$` },
  ],
  questions: [
    { ask: r`A right triangle has opposite $9$, hypotenuse $15$. Find $\sin\theta$.`, ws: "1.8cm" },
    { ask: r`Find $\cos\theta$ if the adjacent is $12$ and the hypotenuse is $13$.`, ws: "1.8cm" },
    { ask: r`Find $\tan\theta$ if the opposite is $9$ and the adjacent is $40$.`, ws: "1.8cm" },
    { ask: r`For a $9$-$12$-$15$ triangle with $\theta$ opposite the $9$, find all three ratios.`, ws: "2.4cm" },
    { ask: r`The legs are $5$ and $12$; find $\sin\theta$ for $\theta$ opposite the $5$.`, ws: "2.2cm" },
    { ask: r`Find $\cos\theta$ if the opposite is $7$ and the hypotenuse is $25$ (find adjacent first).`, ws: "2.4cm" },
    { ask: r`Which ratio uses the adjacent side and the hypotenuse?`, ws: "1.8cm" },
    { ask: r`For a $7$-$24$-$25$ triangle with $\theta$ opposite the $7$, find all three ratios.`, ws: "2.4cm" },
    { ask: r`If $\tan\theta=\tfrac34$, sketch a right triangle and find $\sin\theta$.`, ws: "2.6cm" },
    { ask: r`Find $\sin\theta$, $\cos\theta$, $\tan\theta$ for a $20$-$21$-$29$ triangle ($\theta$ opp $20$).`, ws: "2.4cm" },
    { ask: r`The hypotenuse is $10$ and one leg is $6$. Find $\tan\theta$ for $\theta$ opposite the $6$.`, ws: "2.4cm" },
    { ask: r`If $\sin\theta=\tfrac{8}{17}$, find $\cos\theta$ and $\tan\theta$.`, ws: "2.4cm" },
    { ask: r`For a $9$-$40$-$41$ triangle, give all three ratios for both acute angles.`, ws: "3.0cm", challenge: true },
  ],
  answers: [
    r`$\tfrac{9}{15}=\tfrac35$.`, r`$\tfrac{12}{13}$.`, r`$\tfrac{9}{40}$.`,
    r`$\sin=\tfrac35$, $\cos=\tfrac45$, $\tan=\tfrac34$.`,
    r`Hyp $13$; $\sin\theta=\tfrac{5}{13}$.`,
    r`Adj $=\sqrt{625-49}=24$; $\cos\theta=\tfrac{24}{25}$.`,
    r`$\cos\theta=\dfrac{\text{adj}}{\text{hyp}}$.`,
    r`$\sin=\tfrac{7}{25}$, $\cos=\tfrac{24}{25}$, $\tan=\tfrac{7}{24}$.`,
    r`Opp $3$, adj $4$, hyp $5$: $\sin\theta=\tfrac35$.`,
    r`$\sin=\tfrac{20}{29}$, $\cos=\tfrac{21}{29}$, $\tan=\tfrac{20}{21}$.`,
    r`Adj $=8$; $\tan\theta=\tfrac68=\tfrac34$.`,
    r`Adj $15$: $\cos\theta=\tfrac{15}{17}$, $\tan\theta=\tfrac{8}{15}$.`,
    r`$\alpha$ (opp $9$): $\tfrac{9}{41},\tfrac{40}{41},\tfrac{9}{40}$; $\beta$: $\tfrac{40}{41},\tfrac{9}{41},\tfrac{40}{9}$.`,
  ],
},
{
  code: "6.4", unit: "6: Trigonometry", title: "Finding Side Lengths",
  intro: r`To find an unknown side, choose the ratio that links the known angle, the known side, and the unknown side.`,
  ideas: [
    r`Opposite from hyp: $\text{opp}=\text{hyp}\sin\theta$. Adjacent from hyp: $\text{adj}=\text{hyp}\cos\theta$.`,
    r`Opposite from adj: $\text{opp}=\text{adj}\tan\theta$.`,
    r`If the unknown is in the denominator, divide: $\text{hyp}=\dfrac{\text{opp}}{\sin\theta}$.`,
    r`Set the calculator to \textbf{degrees}; round sensibly (e.g. $1$ decimal).`,
  ],
  examples: [
    { t: "Opposite from hypotenuse", body: r`Find the opposite side: hyp $=10$, $\theta=30^\circ$.
\soln $\text{opp}=10\sin30^\circ=5.$` },
    { t: "Adjacent from hypotenuse", body: r`Find the adjacent side: hyp $=20$, $\theta=60^\circ$.
\soln $\text{adj}=20\cos60^\circ=10.$` },
    { t: "Opposite from adjacent", body: r`Find the opposite side: adj $=8$, $\theta=40^\circ$.
\soln $\text{opp}=8\tan40^\circ\approx6.7.$` },
    { t: "Hypotenuse from opposite", body: r`Find the hypotenuse: opp $=6$, $\theta=30^\circ$.
\soln $\text{hyp}=\dfrac{6}{\sin30^\circ}=12.$` },
    { t: "Adjacent in denominator", body: r`Find the hypotenuse: adj $=12$, $\theta=25^\circ$.
\soln $\text{hyp}=\dfrac{12}{\cos25^\circ}\approx13.2.$` },
    { t: "Opposite (calculator)", body: r`Find the opposite side: hyp $=14$, $\theta=35^\circ$.
\soln $\text{opp}=14\sin35^\circ\approx8.0.$` },
    { t: "Using tangent", body: r`A right triangle has $\theta=50^\circ$ and adjacent $9$. Find the opposite side $x$.
\soln $x=9\tan50^\circ\approx10.7.$` },
    { t: "Hypotenuse via cosine", body: r`Find the hypotenuse: adj $=10$, $\theta=40^\circ$.
\soln $\text{hyp}=\dfrac{10}{\cos40^\circ}\approx13.1.$` },
    { t: "Two unknown sides (harder)", body: r`A right triangle has hyp $=18$ and $\theta=28^\circ$. Find both legs.
\soln Opp $=18\sin28^\circ\approx8.5$; adj $=18\cos28^\circ\approx15.9.$` },
  ],
  questions: [
    { ask: r`Find the opposite side: hyp $=12$, $\theta=30^\circ$.`, ws: "2.0cm" },
    { ask: r`Find the adjacent side: hyp $=16$, $\theta=45^\circ$.`, ws: "2.0cm" },
    { ask: r`Find the opposite side: adj $=10$, $\theta=35^\circ$.`, ws: "2.0cm" },
    { ask: r`Find the hypotenuse: opp $=8$, $\theta=30^\circ$.`, ws: "2.0cm" },
    { ask: r`Find the hypotenuse: adj $=15$, $\theta=20^\circ$.`, ws: "2.2cm" },
    { ask: r`Find the opposite side: hyp $=25$, $\theta=52^\circ$.`, ws: "2.0cm" },
    { ask: r`Find side $x$ (opposite) if adj $=14$ and $\theta=38^\circ$.`, ws: "2.0cm" },
    { ask: r`Find the hypotenuse: adj $=9$, $\theta=33^\circ$.`, ws: "2.2cm" },
    { ask: r`Find the adjacent side: hyp $=30$, $\theta=65^\circ$.`, ws: "2.0cm" },
    { ask: r`Find the opposite side: adj $=20$, $\theta=15^\circ$.`, ws: "2.0cm" },
    { ask: r`Find the hypotenuse: opp $=11$, $\theta=42^\circ$.`, ws: "2.2cm" },
    { ask: r`A right triangle has $\theta=60^\circ$ and opposite $12$. Find the adjacent side.`, ws: "2.2cm" },
    { ask: r`A right triangle has hyp $=22$ and $\theta=37^\circ$. Find both legs.`, ws: "2.8cm", challenge: true },
  ],
  answers: [
    r`$12\sin30^\circ=6$.`, r`$16\cos45^\circ\approx11.3$.`, r`$10\tan35^\circ\approx7.0$.`,
    r`$\tfrac{8}{\sin30^\circ}=16$.`, r`$\tfrac{15}{\cos20^\circ}\approx16.0$.`, r`$25\sin52^\circ\approx19.7$.`,
    r`$14\tan38^\circ\approx10.9$.`, r`$\tfrac{9}{\cos33^\circ}\approx10.7$.`, r`$30\cos65^\circ\approx12.7$.`,
    r`$20\tan15^\circ\approx5.4$.`, r`$\tfrac{11}{\sin42^\circ}\approx16.4$.`, r`$\tfrac{12}{\tan60^\circ}\approx6.9$.`,
    r`Opp $=22\sin37^\circ\approx13.2$; adj $=22\cos37^\circ\approx17.6$.`,
  ],
},
{
  code: "6.5", unit: "6: Trigonometry", title: "Finding Angles",
  intro: r`Given two sides, use the \textbf{inverse} trig functions $\sin^{-1}$, $\cos^{-1}$, $\tan^{-1}$ to find the angle.`,
  ideas: [
    r`Choose the ratio matching the two known sides, then apply its inverse.`,
    r`$\theta=\sin^{-1}\!\left(\tfrac{\text{opp}}{\text{hyp}}\right)$, and similarly for $\cos^{-1}$ and $\tan^{-1}$.`,
    r`Keep the calculator in \textbf{degree} mode.`,
    r`The two acute angles add to $90^\circ$.`,
  ],
  examples: [
    { t: "Inverse sine", body: r`Find $\theta$ if $\sin\theta=0.5$.
\soln $\theta=\sin^{-1}(0.5)=30^\circ.$` },
    { t: "Inverse tangent", body: r`Find $\theta$ if $\tan\theta=1$.
\soln $\theta=\tan^{-1}(1)=45^\circ.$` },
    { t: "Inverse cosine", body: r`Find $\theta$ if $\cos\theta=0.6$.
\soln $\theta=\cos^{-1}(0.6)\approx53.1^\circ.$` },
    { t: "From opp and hyp", body: r`Opp $=3$, hyp $=5$. Find $\theta$.
\soln $\theta=\sin^{-1}\!\left(\tfrac35\right)\approx36.9^\circ.$` },
    { t: "From opp and adj", body: r`Opp $=4$, adj $=3$. Find $\theta$.
\soln $\theta=\tan^{-1}\!\left(\tfrac43\right)\approx53.1^\circ.$` },
    { t: "From adj and hyp", body: r`Adj $=5$, hyp $=13$. Find $\theta$.
\soln $\theta=\cos^{-1}\!\left(\tfrac{5}{13}\right)\approx67.4^\circ.$` },
    { t: "Both acute angles", body: r`Find both acute angles of a $5$-$12$-$13$ triangle.
\soln $\tan^{-1}\!\left(\tfrac{5}{12}\right)\approx22.6^\circ$ and $90-22.6=67.4^\circ.$` },
    { t: "Small angle", body: r`Opp $=7$, adj $=24$. Find $\theta$.
\soln $\theta=\tan^{-1}\!\left(\tfrac{7}{24}\right)\approx16.3^\circ.$` },
    { t: "From a triangle (harder)", body: r`Find both acute angles of an $8$-$15$-$17$ triangle.
\soln $\tan^{-1}\!\left(\tfrac{8}{15}\right)\approx28.1^\circ$ and $90-28.1=61.9^\circ.$` },
  ],
  questions: [
    { ask: r`Find $\theta$ if $\sin\theta=0.8$.`, ws: "1.8cm" },
    { ask: r`Find $\theta$ if $\tan\theta=2$.`, ws: "1.8cm" },
    { ask: r`Find $\theta$ if $\cos\theta=0.25$.`, ws: "1.8cm" },
    { ask: r`Opp $=6$, hyp $=10$. Find $\theta$.`, ws: "2.0cm" },
    { ask: r`Opp $=5$, adj $=8$. Find $\theta$.`, ws: "2.0cm" },
    { ask: r`Adj $=9$, hyp $=12$. Find $\theta$.`, ws: "2.0cm" },
    { ask: r`Find both acute angles of a $3$-$4$-$5$ triangle.`, ws: "2.4cm" },
    { ask: r`Opp $=12$, adj $=5$. Find $\theta$.`, ws: "2.0cm" },
    { ask: r`Find $\theta$ if $\sin\theta=\tfrac{7}{25}$.`, ws: "2.0cm" },
    { ask: r`Adj $=20$, hyp $=25$. Find $\theta$.`, ws: "2.0cm" },
    { ask: r`Opp $=9$, adj $=40$. Find $\theta$.`, ws: "2.0cm" },
    { ask: r`A ramp rises $1$ m over a $5$ m run. Find its angle of incline.`, ws: "2.2cm" },
    { ask: r`Find both acute angles of a $9$-$12$-$15$ triangle.`, ws: "2.6cm", challenge: true },
  ],
  answers: [
    r`$\sin^{-1}(0.8)\approx53.1^\circ$.`, r`$\tan^{-1}(2)\approx63.4^\circ$.`, r`$\cos^{-1}(0.25)\approx75.5^\circ$.`,
    r`$\sin^{-1}(0.6)\approx36.9^\circ$.`, r`$\tan^{-1}(0.625)\approx32.0^\circ$.`, r`$\cos^{-1}(0.75)\approx41.4^\circ$.`,
    r`$36.9^\circ$ and $53.1^\circ$.`, r`$\tan^{-1}(2.4)\approx67.4^\circ$.`, r`$\sin^{-1}(0.28)\approx16.3^\circ$.`,
    r`$\cos^{-1}(0.8)\approx36.9^\circ$.`, r`$\tan^{-1}(0.225)\approx12.7^\circ$.`, r`$\tan^{-1}(0.2)\approx11.3^\circ$.`,
    r`$\tan^{-1}(\tfrac{9}{12})\approx36.9^\circ$ and $53.1^\circ$.`,
  ],
},
{
  code: "6.6", unit: "6: Trigonometry", title: "Solving Right Triangles \\& Applications",
  intro: r`To \textbf{solve} a right triangle is to find all unknown sides and angles. Real problems use angles of elevation and depression.`,
  ideas: [
    r`With one angle and one side, find the rest using SOH CAH TOA and the Pythagorean theorem.`,
    r`The two acute angles sum to $90^\circ$.`,
    r`\textbf{Angle of elevation} is measured up from the horizontal; \textbf{depression} is measured down.`,
    r`Draw and label a diagram before choosing a ratio.`,
  ],
  examples: [
    { t: "Solve from angle + hyp", body: r`Solve the right triangle with $\theta=30^\circ$ and hyp $=10$.
\soln Opp $=10\sin30^\circ=5$; adj $=10\cos30^\circ\approx8.7$; other angle $=60^\circ.$` },
    { t: "Solve from two legs", body: r`Solve the right triangle with legs $3$ and $4$.
\soln Hyp $=5$; angles $\tan^{-1}(\tfrac34)\approx36.9^\circ$ and $53.1^\circ.$` },
    { t: "Angle of elevation", body: r`From $50$ m away, the angle of elevation to a tower's top is $40^\circ$. Find its height.
\soln $h=50\tan40^\circ\approx42.0$ m.` },
    { t: "Angle of depression", body: r`From an $80$ m cliff, the angle of depression to a boat is $25^\circ$. Find the boat's distance from the base.
\soln $d=\dfrac{80}{\tan25^\circ}\approx171.6$ m.` },
    { t: "Ladder", body: r`A $5$ m ladder rests with its base $1.5$ m from a wall. Find the angle with the ground and the height reached.
\soln Angle $=\cos^{-1}\!\left(\tfrac{1.5}{5}\right)\approx72.5^\circ$; height $=\sqrt{5^2-1.5^2}\approx4.8$ m.` },
    { t: "Ramp angle", body: r`A ramp rises $2$ m over a $10$ m horizontal run. Find its angle.
\soln $\theta=\tan^{-1}\!\left(\tfrac{2}{10}\right)\approx11.3^\circ.$` },
    { t: "Kite", body: r`A kite string $60$ m long makes a $50^\circ$ angle with the ground. Find the kite's height.
\soln $h=60\sin50^\circ\approx46.0$ m.` },
    { t: "Elevation to a building", body: r`From $100$ m away, the angle of elevation to a building's top is $35^\circ$. Find its height.
\soln $h=100\tan35^\circ\approx70.0$ m.` },
    { t: "Two-step (harder)", body: r`A $12$ m flagpole casts a shadow when the sun's elevation is $58^\circ$. Find the shadow length, then the angle when the shadow is $20$ m.
\soln Shadow $=\dfrac{12}{\tan58^\circ}\approx7.5$ m. When the shadow is $20$ m: $\theta=\tan^{-1}\!\left(\tfrac{12}{20}\right)\approx31.0^\circ.$` },
  ],
  questions: [
    { ask: r`Solve the right triangle with $\theta=40^\circ$ and hyp $=20$.`, ws: "2.6cm" },
    { ask: r`Solve the right triangle with legs $6$ and $8$.`, ws: "2.6cm" },
    { ask: r`From $30$ m away, the angle of elevation to a tree top is $50^\circ$. Find its height.`, ws: "2.4cm" },
    { ask: r`From a $60$ m tower, the angle of depression to a car is $35^\circ$. Find its distance from the base.`, ws: "2.6cm" },
    { ask: r`A $4$ m ladder's base is $1$ m from a wall. Find the angle with the ground.`, ws: "2.4cm" },
    { ask: r`A ramp rises $3$ m over a $12$ m run. Find its angle.`, ws: "2.2cm" },
    { ask: r`A kite string $80$ m long makes a $40^\circ$ angle. Find the kite's height.`, ws: "2.2cm" },
    { ask: r`From $120$ m away, the elevation to a building top is $28^\circ$. Find its height.`, ws: "2.4cm" },
    { ask: r`Solve the right triangle with $\theta=55^\circ$ and adjacent $14$.`, ws: "2.6cm" },
    { ask: r`A $10$ m wire is anchored $4$ m from the base of a pole. Find the angle the wire makes with the ground.`, ws: "2.4cm" },
    { ask: r`From a $45$ m lighthouse, the depression to a boat is $20^\circ$. Find the boat's distance.`, ws: "2.4cm" },
    { ask: r`A slide is $5$ m long and meets the ground at $30^\circ$. Find its height.`, ws: "2.2cm" },
    { ask: r`A $15$ m pole casts a shadow when the sun's elevation is $62^\circ$. Find the shadow, then the elevation when the shadow is $25$ m.`, ws: "3.2cm", challenge: true },
  ],
  answers: [
    r`Opp $=20\sin40^\circ\approx12.9$; adj $\approx15.3$; other angle $50^\circ$.`,
    r`Hyp $10$; angles $\approx36.9^\circ$ and $53.1^\circ$.`,
    r`$30\tan50^\circ\approx35.8$ m.`,
    r`$\tfrac{60}{\tan35^\circ}\approx85.7$ m.`,
    r`$\cos^{-1}(0.25)\approx75.5^\circ$.`,
    r`$\tan^{-1}(0.25)\approx14.0^\circ$.`,
    r`$80\sin40^\circ\approx51.4$ m.`,
    r`$120\tan28^\circ\approx63.8$ m.`,
    r`Opp $=14\tan55^\circ\approx20.0$; hyp $\approx24.4$; other angle $35^\circ$.`,
    r`$\cos^{-1}(0.4)\approx66.4^\circ$.`,
    r`$\tfrac{45}{\tan20^\circ}\approx123.6$ m.`,
    r`$5\sin30^\circ=2.5$ m.`,
    r`Shadow $=\tfrac{15}{\tan62^\circ}\approx8.0$ m; then $\tan^{-1}(\tfrac{15}{25})\approx31.0^\circ$.`,
  ],
},
];
