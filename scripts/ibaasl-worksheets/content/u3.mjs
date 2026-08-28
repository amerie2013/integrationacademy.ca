// IB AA SL worksheets — Unit 3: Geometry and Trigonometry. Original problems.
const r = String.raw;
const U = "3: Geometry and Trigonometry";

export default [
  {
    code: "3.1", unit: U, title: "3D Geometry: Volume, Surface Area and Distance",
    intro: r`3D distance and volume formulas extend familiar 2D ideas one dimension further.`,
    ideas: [
      r`Distance: $d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}$.`,
      r`Cone: $V=\tfrac13\pi r^2h$, curved area $\pi rl$. Sphere: $V=\tfrac43\pi r^3$, area $4\pi r^2$.`,
      r`Angle between a diagonal and a face: find the base diagonal first, then use right-triangle trig with the height.`,
    ],
    examples: [
      { t: "3D distance", body: r`Find the distance between $P(2,-1,4)$ and $Q(6,3,1)$.\soln
$d=\sqrt{16+16+9}=\sqrt{41}$.\\[3pt]\textbf{Conclusion:} $d=\sqrt{41}\approx6.40$.` },
      { t: "Composite solid surface area", body: r`A cone (radius 5 m, height 12 m) is topped with a hemisphere of the same radius. Find the total exposed curved area.\soln
Slant height $l=\sqrt{25+144}=13$. Cone: $\pi(5)(13)=65\pi$. Hemisphere: $\tfrac12(4\pi\cdot25)=50\pi$.\\[3pt]\textbf{Conclusion:} total $=115\pi\approx361.3\text{ m}^2$.` },
      { t: "Pyramid height", body: r`A square pyramid has base side 9 cm and volume 189 cm$^3$. Find its height.\soln
Base area $=81$; $189=\tfrac13(81)h=27h$.\\[3pt]\textbf{Conclusion:} $h=7$ cm.` },
      { t: "Angle with the base", body: r`A box has length 12 cm, width 5 cm, height 9 cm. Find the angle the space diagonal makes with the base.\soln
Base diagonal $=\sqrt{144+25}=13$. $\tan\theta=\dfrac{9}{13}\Rightarrow\theta=\tan^{-1}(0.6923)$.\\[3pt]\textbf{Conclusion:} $\theta\approx34.7°$.` },
    ],
    questions: [
      { ask: r`Find the distance between $A(1,2,-3)$ and $B(4,-2,9)$.` },
      { ask: r`Find the volume of a cone with radius 6 cm and height 10 cm.` },
      { ask: r`A sphere has volume $972\pi$ cm$^3$. Find its radius.` },
      { ask: r`A box has length 10 cm, width 4 cm, height 3 cm. Find the length of its space diagonal.` },
      { ask: r`Find the angle the space diagonal of a cube with side 8 cm makes with the base.` },
      { ask: r`A cylinder (radius 4 m, height 15 m) is capped with a hemisphere of the same radius; find the total curved surface area.` },
      { ask: r`A square pyramid has volume 320 cm$^3$ and height 15 cm; find its base side length.` },
      { ask: r`A rectangular box has length 15 cm, width 8 cm, and its space diagonal is 20 cm. Find its height.`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$\sqrt{9+16+144}=\sqrt{169}=13$`, r`$V=\tfrac13\pi(36)(10)=120\pi\approx376.99\text{ cm}^3$`,
      r`$\tfrac43\pi r^3=972\pi\Rightarrow r^3=729\Rightarrow r=9$ cm`, r`$\sqrt{100+16+9}=\sqrt{125}=5\sqrt5\approx11.18$ cm`,
      r`base diagonal $=8\sqrt2$; $\tan\theta=\tfrac{8}{8\sqrt2}=\tfrac{1}{\sqrt2}\Rightarrow\theta\approx35.3°$`,
      r`cylinder curved: $2\pi(4)(15)=120\pi$; hemisphere: $2\pi(16)=32\pi$; total $=152\pi\approx477.5\text{ m}^2$`,
      r`$320=\tfrac13s^2(15)=5s^2\Rightarrow s^2=64\Rightarrow s=8$ cm`,
      r`base diagonal $=\sqrt{225+64}=17$; $h=\sqrt{400-289}=\sqrt{111}\approx10.54$ cm`,
    ],
  },
  {
    code: "3.2", unit: U, title: "Right-Triangle Trigonometry",
    intro: r`Multi-step right-triangle problems often chain two triangles that share a common side.`,
    ideas: [
      r`$\sin\theta=\dfrac{\text{opp}}{\text{hyp}}$, $\cos\theta=\dfrac{\text{adj}}{\text{hyp}}$, $\tan\theta=\dfrac{\text{opp}}{\text{adj}}$.`,
      r`Two given angles of elevation from different positions usually mean two right triangles sharing the unknown height.`,
    ],
    examples: [
      { t: "Angle of elevation with eye height", body: r`A person whose eyes are 1.7 m up stands 25 m from a tower and sees its top at an elevation angle of $32°$. Find the tower's height.\rtri{4}{2.4}{opp}{25 m}{}\soln
$x=25\tan(32°)\approx15.6$ m; add eye height.\\[3pt]\textbf{Conclusion:} height $\approx17.3$ m.` },
      { t: "Two-step angle of depression", body: r`From a 60 m cliff, the angle of depression to a boat is $22°$. It sails away until the angle of depression is $11°$. Find the distance sailed.\soln
$d_1=\dfrac{60}{\tan22°}\approx148.5$; $d_2=\dfrac{60}{\tan11°}\approx308.6$.\\[3pt]\textbf{Conclusion:} distance $\approx160.1$ m.` },
      { t: "Flagpole on a building", body: r`A 5 m flagpole sits atop a building. From the ground, the angle of elevation to the pole's base is $38°$, and to its top is $44°$. Find the building's height.\soln
$h\tan(44°)=(h+5)\tan(38°)$ combined via $d$; solving $h=\dfrac{5\tan(38°)}{\tan(44°)-\tan(38°)}$.\\[3pt]\textbf{Conclusion:} $h\approx18.5$ m.` },
      { t: "Bearing components", body: r`A hiker walks 10 km on a bearing of $055°$. Find how far north and east she travels.\soln
North: $10\cos55°\approx5.74$; East: $10\sin55°\approx8.19$.\\[3pt]\textbf{Conclusion:} $\approx5.74$ km north, $\approx8.19$ km east.` },
    ],
    questions: [
      { ask: r`Find the angle of elevation to the top of a 30 m tower from a point 45 m away.` },
      { ask: r`A person with eyes at 1.6 m stands 20 m from a tree, seeing its top at $28°$ elevation. Find the tree's height.` },
      { ask: r`From an 80 m cliff, the angle of depression to a boat is $15°$. Find the horizontal distance to the boat.` },
      { ask: r`A plane flies 250 km on a bearing of $160°$. Find its distance south and east of its start.` },
      { ask: r`From two points 50 m apart along a line from a tower's base, elevation angles are $20°$ (far) and $35°$ (near). Find the tower's height.`, challenge: true, ws: "3.4cm" },
      { ask: r`A 6 m flagpole sits on a building. Ground elevation angles are $35°$ to its base and $41°$ to its top. Find the building's height.`, challenge: true, ws: "3.4cm" },
      { ask: r`A ladder 8 m long leans against a wall, making a $70°$ angle with the ground. Find how high up the wall it reaches.` },
      { ask: r`A ship sails 40 km on a bearing of $200°$. Find its distance south and west of its start.` },
    ],
    answers: [
      r`$\tan^{-1}(30/45)\approx33.7°$`, r`$20\tan28°+1.6\approx12.24$ m`, r`$80/\tan15°\approx298.6$ m`,
      r`south $=250\cos20°\approx234.9$ km, east $=250\sin20°\approx85.5$ km`,
      r`$h(1/\tan20°-1/\tan35°)=50\Rightarrow h(2.747-1.428)=50\Rightarrow h\approx37.9$ m`,
      r`$h=\dfrac{6\tan35°}{\tan41°-\tan35°}\approx\dfrac{4.202}{0.169}\approx24.9$ m`,
      r`$8\sin70°\approx7.52$ m`,
      r`angle from south is $20°$; south $=40\cos20°\approx37.6$ km, west $=40\sin20°\approx13.7$ km`,
    ],
  },
  {
    code: "3.3", unit: U, title: "The Sine Rule and Cosine Rule",
    intro: r`The sine and cosine rules solve any triangle, including the tricky ambiguous case.`,
    ideas: [
      r`$\dfrac{a}{\sin A}=\dfrac{b}{\sin B}=\dfrac{c}{\sin C}$; $a^2=b^2+c^2-2bc\cos A$.`,
      r`Area $=\tfrac12ab\sin C$.`,
      r`Ambiguous case (SSA): check whether both $\theta$ and $180°-\theta$ give valid triangles.`,
    ],
    examples: [
      { t: "Sine rule for a side", body: r`In $\triangle ABC$, $A=35°$, $B=70°$, $a=14$. Find $b$.\gtri{A}{B}{C}{a}{b}{c}\soln
$\dfrac{14}{\sin35°}=\dfrac{b}{\sin70°}\Rightarrow b=\dfrac{14\sin70°}{\sin35°}$.\\[3pt]\textbf{Conclusion:} $b\approx22.9$.` },
      { t: "Cosine rule for the largest angle", body: r`A triangle has sides $6,8,11$. Find the largest angle.\soln
Opposite $11$: $\cos C=\dfrac{36+64-121}{96}=\dfrac{-21}{96}$.\\[3pt]\textbf{Conclusion:} $C\approx102.6°$.` },
      { t: "Ambiguous case", body: r`In $\triangle ABC$, $A=40°$, $a=9$, $b=13$. Find both possible values of $B$.\soln
$\sin B=\dfrac{13\sin40°}{9}\approx0.928$. $B_1\approx68.2°$; $B_2=180°-68.2°=111.8°$; check $A+B_2=151.8°<180°$, valid.\\[3pt]\textbf{Conclusion:} $B\approx68.2°$ or $111.8°$.` },
      { t: "Navigation with the cosine rule", body: r`A ship sails 30 km on a bearing of $050°$, then 45 km on a bearing of $140°$. Find the direct distance home.\soln
Included angle $=140-50=90°$. $d^2=900+2025-0=2925$.\\[3pt]\textbf{Conclusion:} $d\approx54.1$ km.` },
    ],
    questions: [
      { ask: r`In $\triangle ABC$, $A=55°$, $C=65°$, $c=18$. Find $a$.` },
      { ask: r`A triangle has sides $7,9,13$. Find the largest angle.` },
      { ask: r`In $\triangle ABC$, $A=28°$, $a=8$, $b=15$. Determine whether the ambiguous case applies, and find every valid value of $B$.`, challenge: true, ws: "3.4cm" },
      { ask: r`Find the area of a triangle with sides 9 and 12 and included angle $65°$.` },
      { ask: r`A hiker walks 4 km on a bearing of $030°$, then 6 km on a bearing of $120°$. Find the direct distance back to the start.` },
      { ask: r`In $\triangle ABC$, $a=10$, $b=14$, $C=50°$. Find $c$.` },
      { ask: r`A triangular field has sides 80 m, 95 m, and an included angle of $72°$ between them. Find its area in m$^2$.` },
      { ask: r`In $\triangle ABC$, $A=48°$, $a=11$, $c=15$. Find angle $C$, and comment on whether the ambiguous case applies.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$a=\dfrac{18\sin55°}{\sin65°}\approx16.3$`, r`$\cos C=\dfrac{49+81-169}{126}=\dfrac{-39}{126}\Rightarrow C\approx107.9°$`,
      r`$\sin B=\dfrac{15\sin28°}{8}\approx0.880$; $B_1\approx61.6°$, $B_2=118.4°$; check $A+B_2=146.4°<180°$: both valid`,
      r`$\tfrac12(9)(12)\sin65°\approx48.98$`,
      r`included angle $=120-30=90°$: $d^2=16+36=52\Rightarrow d\approx7.21$ km`,
      r`$c^2=100+196-280\cos50°\approx296-180.0=116.0\Rightarrow c\approx10.77$`,
      r`$\tfrac12(80)(95)\sin72°\approx3616.6\text{ m}^2$`,
      r`$\sin C=\dfrac{15\sin48°}{11}\approx1.013$ --- impossible (sin can't exceed 1), so no triangle exists with these values; the ambiguous case doesn't apply because there's no valid triangle at all`,
    ],
  },
  {
    code: "3.4", unit: U, title: "Radian Measure, Arcs and Sectors",
    intro: r`Radians make arc length and sector area formulas clean: $s=r\theta$, $A=\tfrac12r^2\theta$.`,
    ideas: [
      r`$180°=\pi$ rad.`,
      r`Segment area $=\tfrac12r^2(\theta-\sin\theta)$.`,
    ],
    examples: [
      { t: "Convert degrees to radians", body: r`Convert $315°$ to radians as an exact multiple of $\pi$.\soln
$315\times\dfrac{\pi}{180}=\dfrac{7\pi}{4}$.\\[3pt]\textbf{Conclusion:} $\dfrac{7\pi}{4}$.` },
      { t: "Solve for the angle", body: r`An arc of length 15 cm is cut from a circle of radius 6 cm. Find $\theta$ in radians.\sector{2}{100}{r}\soln
$15=6\theta\Rightarrow\theta=2.5$.\\[3pt]\textbf{Conclusion:} $\theta=2.5$ rad.` },
      { t: "Solve for the radius", body: r`A sector has area 45 cm$^2$ and angle $\dfrac{3\pi}{4}$. Find $r$.\soln
$45=\tfrac12r^2\left(\tfrac{3\pi}4\right)\Rightarrow r^2=\dfrac{120}{\pi}$.\\[3pt]\textbf{Conclusion:} $r\approx6.18$ cm.` },
      { t: "Segment area", body: r`Find the segment area for a circle of radius 8 cm with central angle $\dfrac{\pi}{2}$.\soln
Sector: $\tfrac12(64)(\pi/2)=16\pi$. Triangle: $\tfrac12(64)\sin(\pi/2)=32$.\\[3pt]\textbf{Conclusion:} $16\pi-32\approx18.27\text{ cm}^2$.` },
    ],
    questions: [
      { ask: r`Convert $250°$ to radians (round to 3 d.p.).` },
      { ask: r`Convert $\dfrac{5\pi}{9}$ radians to degrees.` },
      { ask: r`Find the arc length for angle $1.4$ rad in a circle of radius 9 cm.` },
      { ask: r`A sector has area 60 cm$^2$ and radius 10 cm; find its angle in radians.` },
      { ask: r`Find the segment area for a circle of radius 12 cm with central angle $\dfrac{2\pi}{3}$.`, challenge: true, ws: "3.2cm" },
      { ask: r`A sector's perimeter is 30 cm and its area is 54 cm$^2$; set up and solve for its radius $r$.`, challenge: true, ws: "3.6cm" },
      { ask: r`A running track is a rectangle 90 m by 24 m, capped by two semicircular ends of radius 12 m; find the total perimeter.` },
      { ask: r`Find the area of a sector with radius 5 cm and angle $2.2$ rad.` },
    ],
    answers: [
      r`$250\times\pi/180\approx4.363$`, r`$5\pi/9\times180/\pi=100°$`, r`$s=9(1.4)=12.6$ cm`,
      r`$60=\tfrac12(100)\theta\Rightarrow\theta=1.2$ rad`,
      r`sector $=\tfrac12(144)(2\pi/3)=48\pi$; triangle $=\tfrac12(144)\sin(2\pi/3)=72\cdot\tfrac{\sqrt3}2\approx62.35$; segment $\approx150.80-62.35\approx88.45\text{ cm}^2$`,
      r`$2r+r\theta=30$, $\tfrac12r^2\theta=54\Rightarrow r\theta=108/r$; $2r+108/r=30\Rightarrow2r^2-30r+108=0\Rightarrow r^2-15r+54=0\Rightarrow(r-6)(r-9)=0$: $r=6$ or $r=9$`,
      r`straight sides $2(90)=180$; two semicircles $=2(12\pi)=24\pi$; total $\approx180+75.4=255.4$ m`,
      r`$\tfrac12(25)(2.2)=27.5\text{ cm}^2$`,
    ],
  },
  {
    code: "3.5", unit: U, title: "The Unit Circle and Trigonometric Identities",
    intro: r`The unit circle and the Pythagorean identity let you find exact trig values in any quadrant.`,
    ideas: [
      r`$\sin^2\theta+\cos^2\theta=1$, $\tan\theta=\dfrac{\sin\theta}{\cos\theta}$.`,
      r`Quadrant signs (All-Students-Take-Calculus): Q1 all $+$, Q2 sin $+$, Q3 tan $+$, Q4 cos $+$.`,
    ],
    examples: [
      { t: "Exact value", body: r`Find the exact value of $\sin(300°)$.\soln
Reference angle $60°$, Q4 (sin negative): $-\sin(60°)=-\dfrac{\sqrt3}{2}$.\\[3pt]\textbf{Conclusion:} $-\dfrac{\sqrt3}2$.` },
      { t: "Quadrant and Pythagorean identity", body: r`Given $\sin\theta=-\dfrac{5}{13}$, $\theta$ in Q3, find $\cos\theta$.\soln
$\cos^2\theta=1-\tfrac{25}{169}=\tfrac{144}{169}$; Q3 cosine negative.\\[3pt]\textbf{Conclusion:} $\cos\theta=-\dfrac{12}{13}$.` },
      { t: "Prove an identity", body: r`Prove $(\sin x+\cos x)^2=1+2\sin x\cos x$.\soln
Expand: $\sin^2x+2\sin x\cos x+\cos^2x=1+2\sin x\cos x$ (using the Pythagorean identity).\\[3pt]\textbf{Conclusion:} identity confirmed.` },
      { t: "From tangent to sine and cosine", body: r`Given $\tan\theta=-\dfrac34$, $\theta$ in Q2, find $\sin\theta$ and $\cos\theta$.\soln
Reference triangle: opp 3, adj 4, hyp 5. Q2: sin $+$, cos $-$.\\[3pt]\textbf{Conclusion:} $\sin\theta=\dfrac35$, $\cos\theta=-\dfrac45$.` },
    ],
    questions: [
      { ask: r`Find the exact value of $\cos(150°)$.` },
      { ask: r`Given $\cos\theta=\dfrac{8}{17}$, $\theta$ in Q4, find $\sin\theta$.` },
      { ask: r`Prove that $\tan x\sin x+\cos x=\dfrac{1}{\cos x}$.` },
      { ask: r`Prove that $1-\dfrac{\sin^2x}{1+\cos x}=\cos x$.`, challenge: true, ws: "3.2cm" },
      { ask: r`Given $\tan\theta=2$, $\theta$ in Q3, find $\sin\theta+\cos\theta$ exactly.` },
      { ask: r`Find the exact value of $\tan(225°)$.` },
      { ask: r`Given $\sin\theta=0.6$ and $\theta$ in Q2, find $\tan\theta$ exactly.` },
      { ask: r`Prove that $\dfrac{\cos x}{1+\sin x}=\dfrac{1-\sin x}{\cos x}$.`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$-\dfrac{\sqrt3}{2}$`, r`$\sin^2\theta=1-64/289=225/289\Rightarrow\sin\theta=-15/17$ (Q4)`,
      r`$\tan x\sin x+\cos x=\dfrac{\sin^2x}{\cos x}+\cos x=\dfrac{\sin^2x+\cos^2x}{\cos x}=\dfrac{1}{\cos x}$`,
      r`$1-\dfrac{1-\cos^2x}{1+\cos x}=1-\dfrac{(1-\cos x)(1+\cos x)}{1+\cos x}=1-(1-\cos x)=\cos x$`,
      r`reference triangle opp 2 adj 1 hyp $\sqrt5$; Q3 both negative: $\sin\theta=-2/\sqrt5$, $\cos\theta=-1/\sqrt5$; sum $=-3/\sqrt5=-3\sqrt5/5$`,
      r`$225°$ is Q3, reference $45°$: $\tan(225°)=1$`,
      r`$\cos\theta=-0.8$ (Q2 negative); $\tan\theta=0.6/(-0.8)=-3/4$`,
      r`cross-multiply: $\cos^2x=(1-\sin x)(1+\sin x)=1-\sin^2x$, true by the Pythagorean identity`,
    ],
  },
  {
    code: "3.6", unit: U, title: "Trigonometric Functions and Equations",
    intro: r`Solving trig equations combines the unit circle's symmetry with ordinary algebra --- including factoring quadratics in $\sin x$ or $\cos x$.`,
    ideas: [
      r`$y=a\sin(b(x-c))+d$: amplitude $|a|$, period $\dfrac{2\pi}{b}$, midline $y=d$.`,
      r`Quadratic-in-trig equations factor exactly like ordinary quadratics after substituting $u=\sin x$ or $u=\cos x$.`,
    ],
    examples: [
      { t: "State transformation features", body: r`State the amplitude, period, and midline of $y=6\cos(3x)-2$.\splot{-9}{5}{\addplot[exblue,thick]{6*cos(deg(3*x))-2};}\soln
Amplitude 6, period $\dfrac{2\pi}{3}$, midline $y=-2$.\\[3pt]\textbf{Conclusion:} amplitude 6, period $2\pi/3$, midline $y=-2$.` },
      { t: "Solve a linear trig equation", body: r`Solve $\cos x=-0.4$ for $0\leq x\leq2\pi$.\soln
Reference angle $\cos^{-1}(0.4)\approx1.159$. Q2: $x\approx\pi-1.159\approx1.983$. Q3: $x\approx\pi+1.159\approx4.301$.\\[3pt]\textbf{Conclusion:} $x\approx1.983,4.301$.` },
      { t: "Quadratic in sine", body: r`Solve $2\sin^2x+\sin x-1=0$ for $0\leq x\leq2\pi$.\soln
$(2\sin x-1)(\sin x+1)=0$. $\sin x=\tfrac12\Rightarrow x=\tfrac{\pi}6,\tfrac{5\pi}6$. $\sin x=-1\Rightarrow x=\tfrac{3\pi}2$.\\[3pt]\textbf{Conclusion:} $x=\tfrac{\pi}6,\tfrac{5\pi}6,\tfrac{3\pi}2$.` },
      { t: "Identity substitution first", body: r`Solve $2\cos^2x-\sin x-1=0$ for $0\leq x\leq2\pi$.\soln
$2(1-\sin^2x)-\sin x-1=0\Rightarrow-2\sin^2x-\sin x+1=0\Rightarrow2\sin^2x+\sin x-1=0\Rightarrow(2\sin x-1)(\sin x+1)=0$.\\[3pt]\textbf{Conclusion:} $x=\tfrac{\pi}6,\tfrac{5\pi}6,\tfrac{3\pi}2$ (same equation as Example 3, after substitution).` },
    ],
    questions: [
      { ask: r`State the amplitude, period, and midline of $y=4\sin(2x)+3$.` },
      { ask: r`Solve $\sin x=0.65$ for $0\leq x\leq2\pi$.` },
      { ask: r`Solve $2\cos^2x-\cos x-1=0$ for $0\leq x\leq2\pi$.` },
      { ask: r`Solve $2\sin^2x-\cos x-1=0$ for $0\leq x\leq2\pi$ (substitute $\sin^2x=1-\cos^2x$ first).`, challenge: true, ws: "3.4cm" },
      { ask: r`A tide's depth is $D(t)=3\sin\!\left(\dfrac{\pi}{6}t\right)+7$ metres; find the first two times in $0\leq t\leq12$ hours the depth is $8.5$ m.` },
      { ask: r`Solve $\tan x=-1$ for $0\leq x\leq2\pi$.` },
      { ask: r`Solve $2\sin^2x+3\sin x+1=0$ for $0\leq x\leq2\pi$.` },
      { ask: r`A Ferris wheel's height is $h(t)=10\sin\!\left(\dfrac{\pi}{4}t\right)+12$ m; find every time in the first 8 minutes it reaches height 17 m.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`amplitude 4, period $\pi$, midline $y=3$`,
      r`reference $\sin^{-1}(0.65)\approx0.708$; $x\approx0.708,\ \pi-0.708\approx2.434$`,
      r`$(2\cos x+1)(\cos x-1)=0$: $\cos x=-\tfrac12\Rightarrow x=\tfrac{2\pi}3,\tfrac{4\pi}3$; $\cos x=1\Rightarrow x=0,2\pi$`,
      r`$2(1-\cos^2x)-\cos x-1=0\Rightarrow-2\cos^2x-\cos x+1=0\Rightarrow2\cos^2x+\cos x-1=0\Rightarrow(2\cos x-1)(\cos x+1)=0$: $\cos x=\tfrac12\Rightarrow x=\tfrac{\pi}3,\tfrac{5\pi}3$; $\cos x=-1\Rightarrow x=\pi$`,
      r`$\sin(\pi t/6)=0.5\Rightarrow \pi t/6=\pi/6$ or $5\pi/6\Rightarrow t=1$ or $t=5$ hours`,
      r`Q2 and Q4: $x=\tfrac{3\pi}4,\tfrac{7\pi}4$`,
      r`$(2\sin x+1)(\sin x+1)=0$: $\sin x=-\tfrac12\Rightarrow x=\tfrac{7\pi}6,\tfrac{11\pi}6$; $\sin x=-1\Rightarrow x=\tfrac{3\pi}2$`,
      r`$10\sin(\pi t/4)=5\Rightarrow\sin(\pi t/4)=0.5\Rightarrow\pi t/4=\pi/6$ or $5\pi/6\Rightarrow t=\tfrac23$ or $\tfrac{10}3$ min (period 8, so no repeats within 8 min beyond these)`,
    ],
  },
];
