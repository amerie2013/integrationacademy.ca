// IB AA SL worksheets — Unit 3: Geometry and Trigonometry. Original problems.
// 9 worked examples + 13 practice questions per worksheet.
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
      { t: "Midpoint in 3D", body: r`Find the midpoint of $A(3,-5,7)$ and $B(-1,9,1)$.\soln
Average each coordinate: $\left(\dfrac{3-1}2,\dfrac{-5+9}2,\dfrac{7+1}2\right)$.\\[3pt]\textbf{Conclusion:} midpoint $=(1,2,4)$.` },
      { t: "Composite solid volume", body: r`An ice-cream-cone shape has a cone of radius 3 cm, height 8 cm, topped with a hemisphere of the same radius. Find the total volume.\soln
Cone: $\tfrac13\pi(9)(8)=24\pi$. Hemisphere: $\tfrac12\left(\tfrac43\pi(27)\right)=18\pi$.\\[3pt]\textbf{Conclusion:} total volume $=42\pi\approx131.9\text{ cm}^3$.` },
      { t: "Angle between a base diagonal and an edge", body: r`A box's base has length 6 cm and width 8 cm. Find the angle the base's diagonal makes with the 6 cm edge.\soln
$\tan\theta=\dfrac{8}{6}=\dfrac43\Rightarrow\theta=\tan^{-1}(1.333)$.\\[3pt]\textbf{Conclusion:} $\theta\approx53.1°$.` },
      { t: "Solve for an unknown dimension", body: r`A box has length $x$, width $x+2$, height 5 cm, and volume 175 cm$^3$. Find $x$.\soln
$5x(x+2)=175\Rightarrow x(x+2)=35\Rightarrow x^2+2x-35=0\Rightarrow(x-5)(x+7)=0$.\\[3pt]\textbf{Conclusion:} $x=5$ cm (rejecting the negative root).` },
      { t: "Application --- surface to paint", body: r`A cylindrical silo (radius 3 m, height 10 m) has a hemispherical roof of the same radius. Find the total area to paint, excluding the base (which sits on the ground).\soln
Cylinder curved: $2\pi(3)(10)=60\pi$. Hemisphere: $2\pi(9)=18\pi$.\\[3pt]\textbf{Conclusion:} total $=78\pi\approx245.0\text{ m}^2$.` },
    ],
    questions: [
      { ask: r`Find the distance between $A(1,2,-3)$ and $B(4,-2,9)$.` },
      { ask: r`Find the volume of a cone with radius 6 cm and height 10 cm.` },
      { ask: r`A sphere has volume $972\pi$ cm$^3$. Find its radius.` },
      { ask: r`A box has length 10 cm, width 4 cm, height 3 cm. Find the length of its space diagonal.` },
      { ask: r`Find the angle the space diagonal of a cube with side 8 cm makes with the base.` },
      { ask: r`A cylinder (radius 4 m, height 15 m) is capped with a hemisphere of the same radius; find the total curved surface area.` },
      { ask: r`A square pyramid has volume 320 cm$^3$ and height 15 cm; find its base side length.` },
      { ask: r`Find the midpoint of $P(-4,6,2)$ and $Q(8,-2,10)$.` },
      { ask: r`An ice-cream-cone shape has a cone of radius 6 cm, height 8 cm, topped with a hemisphere of the same radius. Find the total volume (coefficient of $\pi$).` },
      { ask: r`A box has length $x$, width $x+3$, height 4 cm, and volume 216 cm$^3$. Find $x$.` },
      { ask: r`A rectangular box has length 15 cm, width 8 cm, and its space diagonal is 20 cm. Find its height.`, challenge: true, ws: "3.2cm" },
      { ask: r`A box has length 12, width 5, height 9 (as in Example 4). Find the angle the space diagonal makes with the vertical edge (using the relationship between this angle and the base angle).`, challenge: true, ws: "3.2cm" },
      { ask: r`A cylindrical tank (radius 5 m, height 12 m) with a hemispherical dome (same radius) needs painting on the curved wall and dome only. Find the total area (coefficient of $\pi$).`, challenge: true, ws: "3cm" },
    ],
    answers: [
      r`$\sqrt{9+16+144}=\sqrt{169}=13$`, r`$V=\tfrac13\pi(36)(10)=120\pi\approx376.99\text{ cm}^3$`,
      r`$\tfrac43\pi r^3=972\pi\Rightarrow r^3=729\Rightarrow r=9$ cm`, r`$\sqrt{100+16+9}=\sqrt{125}=5\sqrt5\approx11.18$ cm`,
      r`base diagonal $=8\sqrt2$; $\tan\theta=\tfrac{8}{8\sqrt2}=\tfrac{1}{\sqrt2}\Rightarrow\theta\approx35.3°$`,
      r`cylinder curved: $2\pi(4)(15)=120\pi$; hemisphere: $2\pi(16)=32\pi$; total $=152\pi\approx477.5\text{ m}^2$`,
      r`$320=\tfrac13s^2(15)=5s^2\Rightarrow s^2=64\Rightarrow s=8$ cm`,
      r`midpoint $=(2,2,6)$`,
      r`cone $=\tfrac13\pi(36)(8)=96\pi$; hemisphere $=\tfrac12\left(\tfrac43\pi(216)\right)=144\pi$; total $=240\pi$`,
      r`$4x(x+3)=216\Rightarrow x(x+3)=54\Rightarrow x^2+3x-54=0\Rightarrow(x-6)(x+9)=0\Rightarrow x=6$ cm`,
      r`base diagonal $=\sqrt{225+64}=17$; $h=\sqrt{400-289}=\sqrt{111}\approx10.54$ cm`,
      r`the angle with the vertical edge is the complement: $90°-34.7°\approx55.3°$`,
      r`cylinder curved: $2\pi(5)(12)=120\pi$; hemisphere: $2\pi(25)=50\pi$; total $=170\pi\approx534.1\text{ m}^2$`,
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
      { t: "Perpendicular-bearing distance", body: r`Two hikers start together. Hiker A walks 8 km on bearing $070°$; Hiker B walks 6 km on bearing $160°$. Find the distance between them (note the bearings differ by exactly $90°$).\soln
Since the paths are perpendicular, use Pythagoras directly: $d=\sqrt{8^2+6^2}=\sqrt{100}$.\\[3pt]\textbf{Conclusion:} $d=10$ km.` },
      { t: "Two objects from an elevated viewpoint", body: r`From a helicopter at height 500 m, the angles of depression to two ships in a line are $25°$ and $40°$. Find the distance between the ships.\soln
$d_1=\dfrac{500}{\tan25°}\approx1072.3$; $d_2=\dfrac{500}{\tan40°}\approx595.9$.\\[3pt]\textbf{Conclusion:} distance $\approx476.4$ m.` },
      { t: "Height from a shadow", body: r`A pole casts a 12 m shadow when the sun's elevation angle is $50°$. Find the pole's height.\soln
$h=12\tan(50°)$.\\[3pt]\textbf{Conclusion:} $h\approx14.3$ m.` },
      { t: "Angle of inclination from rise and run", body: r`A ramp rises $0.9$ m over a horizontal run of $11$ m. Find its angle of inclination.\soln
$\theta=\tan^{-1}\!\left(\dfrac{0.9}{11}\right)$.\\[3pt]\textbf{Conclusion:} $\theta\approx4.7°$.` },
      { t: "Resolving a velocity vector", body: r`A plane's velocity is 250 km/h on a bearing of $070°$. Find its northward and eastward speed components.\soln
North: $250\cos70°\approx85.5$; East: $250\sin70°\approx234.9$.\\[3pt]\textbf{Conclusion:} $\approx85.5$ km/h north, $\approx234.9$ km/h east.` },
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
      { ask: r`A pole casts a 20 m shadow when the sun's elevation is $42°$. Find the pole's height.` },
      { ask: r`From a helicopter at height 400 m, angles of depression to two cars in a line are $30°$ and $50°$. Find the distance between the cars.` },
      { ask: r`Two hikers start together; A walks 9 km on bearing $050°$, B walks 12 km on bearing $140°$. Find the distance between them.`, challenge: true, ws: "3cm" },
      { ask: r`A plane's velocity is 300 km/h on bearing $035°$; find its north and east speed components.`, challenge: true, ws: "3cm" },
      { ask: r`A ramp rises 1.2 m over a horizontal run of 14 m; find its angle of inclination, then the ramp's actual length.`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$\tan^{-1}(30/45)\approx33.7°$`, r`$20\tan28°+1.6\approx12.24$ m`, r`$80/\tan15°\approx298.6$ m`,
      r`south $=250\cos20°\approx234.9$ km, east $=250\sin20°\approx85.5$ km`,
      r`$h(1/\tan20°-1/\tan35°)=50\Rightarrow h(2.747-1.428)=50\Rightarrow h\approx37.9$ m`,
      r`$h=\dfrac{6\tan35°}{\tan41°-\tan35°}\approx\dfrac{4.202}{0.169}\approx24.9$ m`,
      r`$8\sin70°\approx7.52$ m`,
      r`angle from south is $20°$; south $=40\cos20°\approx37.6$ km, west $=40\sin20°\approx13.7$ km`,
      r`$20\tan42°\approx18.0$ m`,
      r`$d_1=400/\tan30°\approx692.8$; $d_2=400/\tan50°\approx335.6$; distance $\approx357.2$ m`,
      r`bearings differ by $90°$: $d=\sqrt{81+144}=\sqrt{225}=15$ km`,
      r`north $=300\cos35°\approx245.75$, east $=300\sin35°\approx172.1$ km/h`,
      r`$\theta=\tan^{-1}(1.2/14)\approx4.9°$; length $=\sqrt{1.44+196}\approx14.05$ m`,
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
      { t: "Cosine rule for a side, obtuse angle", body: r`In $\triangle ABC$, $b=10$, $c=14$, $A=110°$. Find $a$.\soln
$a^2=100+196-2(10)(14)\cos110°=296-280(-0.342)$.\\[3pt]\textbf{Conclusion:} $a^2\approx391.8\Rightarrow a\approx19.79$.` },
      { t: "Ambiguous case with only one valid triangle", body: r`In $\triangle ABC$, $A=110°$, $a=20$, $b=15$. Find $B$, and explain why only one triangle is possible.\soln
$\sin B=\dfrac{15\sin110°}{20}\approx0.7048\Rightarrow B_1\approx44.8°$. The supplementary option $B_2=135.2°$ would make $A+B_2>180°$, impossible.\\[3pt]\textbf{Conclusion:} only $B\approx44.8°$ is valid --- an obtuse given angle always rules out the second case.` },
      { t: "Area via the cosine rule first", body: r`Find the area of a triangle with sides $8,10,13$.\soln
Find the angle opposite 13: $\cos C=\dfrac{64+100-169}{160}=-0.03125\Rightarrow C\approx91.8°$.\\[3pt]\textbf{Conclusion:} Area $=\tfrac12(8)(10)\sin(91.8°)\approx39.98$ square units.` },
      { t: "Two-leg navigation distance", body: r`A plane flies 40 km on a bearing of $015°$, then 55 km on a bearing of $100°$. Find the distance between the start and end points.\soln
Included angle $=100-15=85°$. $d^2=1600+3025-2(40)(55)\cos85°$.\\[3pt]\textbf{Conclusion:} $d^2\approx4241.3\Rightarrow d\approx65.1$ km.` },
      { t: "Application --- cost from a triangular area", body: r`A triangular garden has sides 18 m and 24 m with an included angle of $55°$. Sod costs \$8 per m$^2$. Find the total cost.\soln
Area $=\tfrac12(18)(24)\sin55°\approx176.9\text{ m}^2$.\\[3pt]\textbf{Conclusion:} cost $\approx176.9\times8\approx\$1415.20$.` },
    ],
    questions: [
      { ask: r`In $\triangle ABC$, $A=55°$, $C=65°$, $c=18$. Find $a$.` },
      { ask: r`A triangle has sides $7,9,13$. Find the largest angle.` },
      { ask: r`In $\triangle ABC$, $A=28°$, $a=8$, $b=15$. Determine whether the ambiguous case applies, and find every valid value of $B$.`, challenge: true, ws: "3.4cm" },
      { ask: r`Find the area of a triangle with sides 9 and 12 and included angle $65°$.` },
      { ask: r`A hiker walks 4 km on a bearing of $030°$, then 6 km on a bearing of $120°$. Find the direct distance back to the start.` },
      { ask: r`In $\triangle ABC$, $a=10$, $b=14$, $C=50°$. Find $c$.` },
      { ask: r`A triangular field has sides 80 m, 95 m, and an included angle of $72°$ between them. Find its area in m$^2$.` },
      { ask: r`In $\triangle ABC$, $b=9$, $c=13$, $A=100°$. Find $a$.` },
      { ask: r`In $\triangle ABC$, $A=125°$, $a=18$, $b=10$. Find $B$, explaining why only one triangle is possible.` },
      { ask: r`Find the area of a triangle with sides $7,9,11$ (find the angle first).` },
      { ask: r`In $\triangle ABC$, $A=48°$, $a=11$, $c=15$. Find angle $C$, and comment on whether the ambiguous case applies.`, challenge: true, ws: "3.4cm" },
      { ask: r`A ship sails 30 km on bearing $025°$, then 45 km on bearing $110°$. Find the direct distance between the start and end points.`, challenge: true, ws: "3.2cm" },
      { ask: r`A triangular plot has sides 20 m and 28 m with an included angle of $48°$; sod costs \$6/m$^2$. Find the total cost.`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$a=\dfrac{18\sin55°}{\sin65°}\approx16.3$`, r`$\cos C=\dfrac{49+81-169}{126}=\dfrac{-39}{126}\Rightarrow C\approx107.9°$`,
      r`$\sin B=\dfrac{15\sin28°}{8}\approx0.880$; $B_1\approx61.6°$, $B_2=118.4°$; check $A+B_2=146.4°<180°$: both valid`,
      r`$\tfrac12(9)(12)\sin65°\approx48.98$`,
      r`included angle $=120-30=90°$: $d^2=16+36=52\Rightarrow d\approx7.21$ km`,
      r`$c^2=100+196-280\cos50°\approx296-180.0=116.0\Rightarrow c\approx10.77$`,
      r`$\tfrac12(80)(95)\sin72°\approx3616.6\text{ m}^2$`,
      r`$a^2=81+169-2(9)(13)\cos100°\approx250+40.6=290.6\Rightarrow a\approx17.05$`,
      r`$\sin B=\tfrac{10\sin125°}{18}\approx0.4551\Rightarrow B\approx27.1°$; the supplementary option would make $A+B_2>180°$, so only one triangle exists`,
      r`$\cos C=\tfrac{49+81-121}{126}\approx0.0714\Rightarrow C\approx85.9°$; Area $=\tfrac12(7)(9)\sin85.9°\approx31.4$`,
      r`$\sin C=\dfrac{15\sin48°}{11}\approx1.013$ --- impossible (sin can't exceed 1), so no triangle exists with these values; the ambiguous case doesn't apply because there's no valid triangle at all`,
      r`included angle $=110-25=85°$; $d^2=900+2025-2700\cos85°\approx2925-235.4=2689.6\Rightarrow d\approx51.86$ km`,
      r`Area $=\tfrac12(20)(28)\sin48°\approx208.1\text{ m}^2$; cost $\approx208.1\times6\approx\$1248.60$`,
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
      { t: "Convert a non-standard radian value", body: r`Convert $2$ radians to degrees (nearest 0.1°).\soln
$2\times\dfrac{180}{\pi}$.\\[3pt]\textbf{Conclusion:} $\approx114.6°$.` },
      { t: "Application --- clock hand arc", body: r`A minute hand of length 8 cm sweeps from 12 to 4 (one third of a full circle). Find the arc length traced by its tip.\soln
One third of a circle is $\dfrac{2\pi}3$ rad. $s=8\left(\dfrac{2\pi}3\right)$.\\[3pt]\textbf{Conclusion:} $s=\dfrac{16\pi}3\approx16.76$ cm.` },
      { t: "Application --- pizza slice area", body: r`A pizza of radius 15 cm is cut into a slice with central angle $50°$. Find the slice's area.\soln
Convert: $\theta=50\times\dfrac{\pi}{180}=\dfrac{5\pi}{18}\approx0.8727$ rad. Area $=\tfrac12(225)(0.8727)$.\\[3pt]\textbf{Conclusion:} area $\approx98.18\text{ cm}^2$.` },
      { t: "Application --- circular window segment", body: r`A circular window of radius 40 cm has a chord cutting off a segment with central angle $\dfrac{2\pi}5$. Find the segment's area (nearest cm$^2$).\soln
Sector: $\tfrac12(1600)\left(\tfrac{2\pi}5\right)=320\pi\approx1005.3$. Triangle: $\tfrac12(1600)\sin\!\left(\tfrac{2\pi}5\right)\approx760.9$.\\[3pt]\textbf{Conclusion:} segment area $\approx244\text{ cm}^2$.` },
      { t: "Sector area from arc length and radius", body: r`A sector's arc length is 20 cm and its radius is 8 cm. Find the sector's area.\soln
$\theta=\dfrac{20}8=2.5$ rad. Area $=\tfrac12(64)(2.5)$.\\[3pt]\textbf{Conclusion:} area $=80\text{ cm}^2$.` },
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
      { ask: r`Convert $1.5$ radians to degrees (nearest 0.1°).` },
      { ask: r`A clock's hour hand (length 6 cm) sweeps from 12 to 3 (one quarter of a circle); find the arc length traced.` },
      { ask: r`A pizza of radius 20 cm is cut into a slice with central angle $40°$; find the slice's area (nearest cm$^2$).`, challenge: true, ws: "3.2cm" },
      { ask: r`A circular window of radius 30 cm has a segment with central angle $\dfrac{\pi}{3}$; find the segment's area (nearest cm$^2$).`, challenge: true, ws: "3.2cm" },
      { ask: r`A sector's arc length is 18 cm, radius 6 cm; find its area.`, challenge: true, ws: "3cm" },
    ],
    answers: [
      r`$250\times\pi/180\approx4.363$`, r`$5\pi/9\times180/\pi=100°$`, r`$s=9(1.4)=12.6$ cm`,
      r`$60=\tfrac12(100)\theta\Rightarrow\theta=1.2$ rad`,
      r`sector $=\tfrac12(144)(2\pi/3)=48\pi$; triangle $=\tfrac12(144)\sin(2\pi/3)=72\cdot\tfrac{\sqrt3}2\approx62.35$; segment $\approx150.80-62.35\approx88.45\text{ cm}^2$`,
      r`$2r+r\theta=30$, $\tfrac12r^2\theta=54\Rightarrow r\theta=108/r$; $2r+108/r=30\Rightarrow2r^2-30r+108=0\Rightarrow r^2-15r+54=0\Rightarrow(r-6)(r-9)=0$: $r=6$ or $r=9$`,
      r`straight sides $2(90)=180$; two semicircles $=2(12\pi)=24\pi$; total $\approx180+75.4=255.4$ m`,
      r`$\tfrac12(25)(2.2)=27.5\text{ cm}^2$`,
      r`$1.5\times180/\pi\approx85.9°$`,
      r`quarter circle $=\pi/2$ rad; $s=6(\pi/2)=3\pi\approx9.42$ cm`,
      r`$\theta=40\pi/180=2\pi/9\approx0.6981$; area $=\tfrac12(400)(0.6981)\approx140\text{ cm}^2$`,
      r`sector $=\tfrac12(900)(\pi/3)=150\pi\approx471.24$; triangle $=\tfrac12(900)\sin(\pi/3)\approx389.71$; segment $\approx82\text{ cm}^2$`,
      r`$\theta=18/6=3$ rad; area $=\tfrac12(36)(3)=54\text{ cm}^2$`,
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
      { t: "Exact value in Q3", body: r`Find the exact value of $\tan(210°)$.\soln
Reference angle $30°$, Q3 (tan positive): $\tan(30°)=\dfrac{1}{\sqrt3}$.\\[3pt]\textbf{Conclusion:} $\tan(210°)=\dfrac{\sqrt3}{3}$.` },
      { t: "Harder identity proof --- factoring a difference of squares", body: r`Prove $\sin^4x-\cos^4x=\sin^2x-\cos^2x$.\soln
Factor the left side as a difference of squares: $(\sin^2x-\cos^2x)(\sin^2x+\cos^2x)$.\\[3pt]\textbf{Conclusion:} the second factor is $1$ by the Pythagorean identity, leaving $\sin^2x-\cos^2x$ --- identity confirmed.` },
      { t: "Determining a quadrant from two sign conditions", body: r`Given $\sin\theta<0$ and $\cos\theta<0$, determine the quadrant of $\theta$.\soln
Check each quadrant's signs: only Q3 has both sine and cosine negative.\\[3pt]\textbf{Conclusion:} $\theta$ is in Quadrant III.` },
      { t: "Exact values from a given cosine", body: r`Given $\cos\theta=-\dfrac23$, $\theta$ in Q2, find $\sin\theta$ and $\tan\theta$ exactly.\soln
$\sin^2\theta=1-\tfrac49=\tfrac59\Rightarrow\sin\theta=\dfrac{\sqrt5}3$ (positive in Q2).\\[3pt]\textbf{Conclusion:} $\sin\theta=\dfrac{\sqrt5}3$, $\tan\theta=\dfrac{\sqrt5/3}{-2/3}=-\dfrac{\sqrt5}2$.` },
      { t: "Deriving a secant-form identity", body: r`Prove that $1+\dfrac{\sin^2x}{\cos^2x}=\dfrac{1}{\cos^2x}$.\soln
Combine the left side over a common denominator: $\dfrac{\cos^2x+\sin^2x}{\cos^2x}$.\\[3pt]\textbf{Conclusion:} the numerator is $1$ by the Pythagorean identity, giving $\dfrac{1}{\cos^2x}$ --- identity confirmed.` },
    ],
    questions: [
      { ask: r`Find the exact value of $\cos(150°)$.` },
      { ask: r`Given $\cos\theta=\dfrac{8}{17}$, $\theta$ in Q4, find $\sin\theta$.` },
      { ask: r`Prove that $\tan x\sin x+\cos x=\dfrac{1}{\cos x}$.` },
      { ask: r`Prove that $1-\dfrac{\sin^2x}{1+\cos x}=\cos x$.`, challenge: true, ws: "3.2cm" },
      { ask: r`Given $\tan\theta=2$, $\theta$ in Q3, find $\sin\theta+\cos\theta$ exactly.` },
      { ask: r`Find the exact value of $\tan(225°)$.` },
      { ask: r`Given $\sin\theta=0.6$ and $\theta$ in Q2, find $\tan\theta$ exactly.` },
      { ask: r`Find the exact value of $\cot(240°)$ (i.e.\ $1/\tan(240°)$).` },
      { ask: r`Given $\sin\theta=-\dfrac35$, $\theta$ in Q4, find $\cos\theta$ and $\tan\theta$ exactly.` },
      { ask: r`Prove that $\cos^4x-\sin^4x=2\cos^2x-1$.` },
      { ask: r`Prove that $\dfrac{\cos x}{1+\sin x}=\dfrac{1-\sin x}{\cos x}$.`, challenge: true, ws: "3.2cm" },
      { ask: r`Given $\tan\theta=-\dfrac{5}{12}$, $\theta$ in Q2, find $\sin\theta+\cos\theta$ exactly.`, challenge: true, ws: "3.2cm" },
      { ask: r`Given $\tan\theta>0$ and $\sin\theta<0$, determine the quadrant of $\theta$, explaining your reasoning.`, challenge: true, ws: "3cm" },
    ],
    answers: [
      r`$-\dfrac{\sqrt3}{2}$`, r`$\sin^2\theta=1-64/289=225/289\Rightarrow\sin\theta=-15/17$ (Q4)`,
      r`$\tan x\sin x+\cos x=\dfrac{\sin^2x}{\cos x}+\cos x=\dfrac{\sin^2x+\cos^2x}{\cos x}=\dfrac{1}{\cos x}$`,
      r`$1-\dfrac{1-\cos^2x}{1+\cos x}=1-\dfrac{(1-\cos x)(1+\cos x)}{1+\cos x}=1-(1-\cos x)=\cos x$`,
      r`reference triangle opp 2 adj 1 hyp $\sqrt5$; Q3 both negative: $\sin\theta=-2/\sqrt5$, $\cos\theta=-1/\sqrt5$; sum $=-3/\sqrt5=-3\sqrt5/5$`,
      r`$225°$ is Q3, reference $45°$: $\tan(225°)=1$`,
      r`$\cos\theta=-0.8$ (Q2 negative); $\tan\theta=0.6/(-0.8)=-3/4$`,
      r`$240°$ is Q3, reference $60°$: $\tan(240°)=\sqrt3$, so $\cot(240°)=1/\sqrt3=\sqrt3/3$`,
      r`$\cos^2\theta=1-9/25=16/25\Rightarrow\cos\theta=4/5$ (Q4 positive); $\tan\theta=-3/4$`,
      r`cross-multiply: $\cos^2x=(1-\sin x)(1+\sin x)=1-\sin^2x$, true by the Pythagorean identity`,
      r`factor as $(\cos^2x-\sin^2x)(\cos^2x+\sin^2x)=\cos^2x-\sin^2x=\cos^2x-(1-\cos^2x)=2\cos^2x-1$`,
      r`reference triangle opp 5 adj 12 hyp 13; Q2: sin $+$, cos $-$: $\sin\theta=5/13$, $\cos\theta=-12/13$; sum $=-7/13$`,
      r`$\tan\theta>0$ needs sin,cos same sign; combined with $\sin\theta<0$, both must be negative: Quadrant III`,
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
      { t: "Extended domain (more solutions)", body: r`Solve $\sin x=0.5$ for $0\leq x\leq4\pi$.\soln
In $[0,2\pi]$: $x=\tfrac{\pi}6,\tfrac{5\pi}6$. Add $2\pi$ for the second cycle: $x=\tfrac{13\pi}6,\tfrac{17\pi}6$.\\[3pt]\textbf{Conclusion:} $x=\tfrac{\pi}6,\tfrac{5\pi}6,\tfrac{13\pi}6,\tfrac{17\pi}6$.` },
      { t: "Quadratic-in-cosine requiring the quadratic formula", body: r`Solve $3\cos^2x-\cos x-1=0$ for $0\leq x\leq2\pi$ (this doesn't factor nicely).\soln
Let $u=\cos x$: $u=\dfrac{1\pm\sqrt{1+12}}6=\dfrac{1\pm\sqrt{13}}6$, giving $u\approx0.768$ or $u\approx-0.434$.\\[3pt]
\textbf{Conclusion:} $x\approx0.696,\,2.009,\,4.275,\,5.588$ (four solutions, from the two cosine values each giving two angles).` },
      { t: "Factoring out a common trig factor", body: r`Solve $2\sin x\cos x-\sin x=0$ for $0\leq x\leq2\pi$.\soln
Factor: $\sin x(2\cos x-1)=0$. $\sin x=0\Rightarrow x=0,\pi,2\pi$. $\cos x=\tfrac12\Rightarrow x=\tfrac{\pi}3,\tfrac{5\pi}3$.\\[3pt]\textbf{Conclusion:} $x=0,\tfrac{\pi}3,\pi,\tfrac{5\pi}3,2\pi$.` },
      { t: "Finding a maximum and when it first occurs", body: r`A wave's height is $h(t)=5\sin(2t)+3$; find the maximum height and the first time $t>0$ it's reached.\soln
Maximum of $\sin$ is 1, giving $h=5+3=8$, at $2t=\tfrac{\pi}2$.\\[3pt]\textbf{Conclusion:} max height $8$, first reached at $t=\tfrac{\pi}4$.` },
      { t: "Application --- bridge clearance", body: r`A bridge's vertical clearance is $C(t)=2\cos\!\left(\dfrac{\pi}6t\right)+5$ m, for $t\in[0,24)$ hours. Find all times the clearance equals 4 m.\soln
$2\cos(\pi t/6)=-1\Rightarrow\cos(\pi t/6)=-0.5\Rightarrow\pi t/6=\tfrac{2\pi}3$ or $\tfrac{4\pi}3$ (period is 12 h, so this repeats once more in $[0,24)$).\\[3pt]\textbf{Conclusion:} $t=4,\,8,\,16,\,20$ hours.` },
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
      { ask: r`Solve $\cos x=0.3$ for $0\leq x\leq4\pi$.` },
      { ask: r`Solve $2\sin^2x+\sin x=0$ for $0\leq x\leq2\pi$.` },
      { ask: r`Solve $2\sin^2x-3\sin x-2=0$ for $0\leq x\leq2\pi$ (reject any invalid value of $\sin x$).`, challenge: true, ws: "3.2cm" },
      { ask: r`Solve $2\sin^2x+\sin x-2=0$ for $0\leq x\leq2\pi$ (does not factor nicely --- use the quadratic formula).`, challenge: true, ws: "3.4cm" },
      { ask: r`A bridge's clearance is $C(t)=2\cos\!\left(\dfrac{\pi}6t\right)+5$ m for $t\in[0,24)$; find all times the clearance equals $3.5$ m (nearest 0.01 h).`, challenge: true, ws: "3.4cm" },
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
      r`reference $\approx1.266$; solutions $\approx1.266,\,5.017,\,7.549,\,11.300$`,
      r`factor $\sin x(2\sin x+1)=0$: $\sin x=0\Rightarrow x=0,\pi,2\pi$; $\sin x=-\tfrac12\Rightarrow x=\tfrac{7\pi}6,\tfrac{11\pi}6$`,
      r`$(2\sin x+1)(\sin x-2)=0$; $\sin x=2$ rejected (impossible); $\sin x=-\tfrac12\Rightarrow x=\tfrac{7\pi}6,\tfrac{11\pi}6$`,
      r`$u=\dfrac{-1\pm\sqrt{17}}4$: $u\approx0.781$ (valid) or $u\approx-1.281$ (rejected); $x\approx0.896,\,2.246$`,
      r`$\cos(\pi t/6)=-0.75\Rightarrow \pi t/6\approx2.419$ or $3.864$ (period 12h): $t\approx4.62,\,7.38,\,16.62,\,19.38$`,
    ],
  },
];
