// MTH1W chapter 5 (Geometry & Measurement) PDF worksheet content — distinct from & above the HTML, detailed solutions.
const R = String.raw;

export const TOPICS = [
// ===================== 5.1 =====================
{
  code:"5.1", title:"Geometry & Measurement Through History", unit:"Unit 5: Geometry & Measurement",
  bigideas:R`Ancient measures were based on the body (cubit, palm, hand) and are converted just like modern units --- by multiplying or dividing with the given equivalence. The Babylonians used \textbf{base 60} (still in our minutes and degrees), and the Egyptians made right angles with a knotted \textbf{3-4-5 rope}.`,
  concepts:[
    ["Converting historical units",R`Chain the equivalences: if $1$ cubit $=7$ palms and $1$ palm $=4$ fingers, then $1$ cubit $=28$ fingers. Multiply to go to smaller units, divide to go to larger.`],
    ["Base 60 and the 3-4-5 rope",R`Base 60 gives $60$ minutes in an hour and $60$ seconds in a minute. A rope knotted into lengths $3,4,5$ forms a right angle because $3^2+4^2=5^2$ (the converse of the Pythagorean theorem).`],
  ],
  examples:[
    ["Chain conversion",R`If $1$ cubit $=7$ palms and $1$ palm $=4$ fingers, how many fingers are in $2$ cubits?`,R`Convert step by step: $2$ cubits $=2\times7=14$ palms, and $14$ palms $=14\times4=56$ fingers.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=2.6cm,minimum height=1cm] (a) at (0,0) {2 cubits};
\node[draw=ex1,thick,fill=ex1!8,rounded corners,minimum width=2.6cm,minimum height=1cm] (b) at (4.4,0) {14 palms};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=2.8cm,minimum height=1cm] (c) at (8.8,0) {56 fingers};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$\times 7$};
\draw[->,thick] (b)--(c) node[midway,above]{\scriptsize$\times 4$};
\end{tikzpicture}\end{center}`],
    ["Convert back (divide)",R`If $1$ cubit $=6$ hands, how many cubits are $42$ hands?`,R`Going to the larger unit divides: $42\div6=7$ cubits.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=2.6cm,minimum height=1cm] (a) at (0,0) {42 hands};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=2.6cm,minimum height=1cm] (b) at (4.6,0) {7 cubits};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$\div 6$};
\end{tikzpicture}\end{center}`],
    ["The 3-4-5 rope",R`Show a rope knotted into lengths $3,4,5$ makes a right angle.`,R`Test the Pythagorean relationship: $3^2+4^2=9+16=25=5^2$. Since it holds, the triangle is right-angled (converse of the theorem).
\rtri{4}{3}{3}{4}{5}`],
    ["Base 60 time",R`Write $200$ minutes in hours and minutes.`,R`Divide by $60$: $200\div60=3$ remainder $20$. So $200$ minutes $=3$ hours $20$ minutes.
\begin{center}\begin{tikzpicture}
\draw[fill=ex0!15,draw=ex0,thick] (0,0) rectangle (2.7,1.2);
\draw[fill=ex0!15,draw=ex0,thick] (2.7,0) rectangle (5.4,1.2);
\draw[fill=ex0!15,draw=ex0,thick] (5.4,0) rectangle (8.1,1.2);
\draw[fill=ex3!20,draw=ex3,thick] (8.1,0) rectangle (9.0,1.2);
\node[font=\scriptsize] at (1.35,0.6) {1 h};
\node[font=\scriptsize] at (4.05,0.6) {1 h};
\node[font=\scriptsize] at (6.75,0.6) {1 h};
\node[font=\scriptsize] at (8.55,0.6) {20};
\node[below,font=\scriptsize] at (0,-0.15) {0};
\node[below,font=\scriptsize] at (2.7,-0.15) {60};
\node[below,font=\scriptsize] at (5.4,-0.15) {120};
\node[below,font=\scriptsize] at (8.1,-0.15) {180};
\node[below,font=\scriptsize] at (9.0,-0.15) {200};
\end{tikzpicture}\end{center}`],
    ["Base 60 angle",R`A full turn is $360^\circ$. How many degrees are in one-sixth of a turn?`,R`$\tfrac16\times360^\circ=60^\circ$.
\begin{center}\begin{tikzpicture}[scale=1]
\foreach \i in {0,...,5} { \draw[thick] (0,0) -- (\i*60:2); }
\draw[thick] (0,0) circle (2);
\fill[ex3!30] (0,0) -- (0:2) arc (0:60:2) -- cycle;
\draw[thick,ex3] (0,0) -- (0:2) arc (0:60:2) -- cycle;
\node[font=\scriptsize] at (30:1.3) {$60^\circ$};
\end{tikzpicture}\end{center}`],
    ["Compare units",R`Which is longer: $3$ cubits or $20$ palms, if $1$ cubit $=7$ palms?`,R`Put both in palms: $3$ cubits $=3\times7=21$ palms. Since $21>20$, the $3$ cubits are longer.
\begin{center}\begin{tikzpicture}
\draw[fill=ex0!15,draw=ex0,thick] (0,0) rectangle (2.1,1);
\node[below,font=\scriptsize] at (1.05,-0.2) {3 cubits = 21 palms};
\draw[fill=ex3!15,draw=ex3,thick] (2.6,0) rectangle (4.6,1);
\node[below,font=\scriptsize] at (3.6,-0.2) {20 palms};
\end{tikzpicture}\end{center}`],
    ["Scaling a plan",R`On a plan $1$ cubit $=52$ cm. How long is a $5$-cubit wall, in metres?`,R`$5\times52=260$ cm, and $260$ cm $=2.6$ m.
\begin{center}\begin{tikzpicture}
\draw[fill=ex0!15,draw=ex0,thick] (0,0) rectangle (0.8,0.8);
\node[below,font=\scriptsize] at (0.4,-0.2) {1 cubit = 52 cm};
\draw[fill=ex3!15,draw=ex3,thick] (2,0) rectangle (6,0.8);
\node[below,font=\scriptsize] at (4,-0.2) {5 cubits = 260 cm = 2.6 m};
\end{tikzpicture}\end{center}`],
    ["Another rope",R`Would a rope knotted $5,12,13$ also make a right angle?`,R`Check: $5^2+12^2=25+144=169=13^2$. Yes --- it is a right triangle.
\rtri{4}{3}{12}{5}{13}`],
    ["Challenge --- to seconds",R`Convert $2$ hours $35$ minutes entirely to minutes, then to seconds.`,R`Minutes: $2\times60+35=155$ minutes. Seconds: $155\times60=9300$ seconds.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=3.2cm,minimum height=1cm] (a) at (0,0) {2 h 35 min};
\node[draw=ex1,thick,fill=ex1!8,rounded corners,minimum width=2.6cm,minimum height=1cm] (b) at (5,0) {155 min};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=2.8cm,minimum height=1cm] (c) at (9.8,0) {9300 sec};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$\times 60{+}35$};
\draw[->,thick] (b)--(c) node[midway,above]{\scriptsize$\times 60$};
\end{tikzpicture}\end{center}`],
  ],
  problems:[
    ["Problem 1",R`If $1$ cubit $=6$ hands, how many hands are in $4$ cubits?`,3.0],
    ["Problem 2",R`If $1$ palm $=4$ fingers, how many fingers are in $3$ palms?`,3.0],
    ["Problem 3",R`If $1$ cubit $=7$ palms, how many palms are in $5$ cubits?`,3.2],
    ["Problem 4",R`Write $90$ minutes in hours and minutes.`,3.0],
    ["Problem 5",R`Does a rope knotted $6,8,10$ make a right angle? Show your check.`,3.4],
    ["Problem 6",R`A full turn is $360^\circ$. How many degrees are in a quarter turn?`,3.0],
    ["Problem 7",R`If $1$ cubit $=52$ cm, how long is $4$ cubits, in cm?`,3.0],
    ["Problem 8",R`If $1$ cubit $=6$ hands, how many cubits are $42$ hands?`,3.2],
    ["Problem 9",R`Does a $4,5,6$ rope make a right angle? Explain.`,3.4],
    ["Problem 10",R`Write $150$ minutes in hours and minutes.`,3.0],
    ["Problem 11",R`Which is longer: $2$ cubits or $15$ palms ($1$ cubit $=7$ palms)?`,3.2],
    ["Problem 12",R`Convert $3$ hours $15$ minutes to minutes.`,3.0],
    ["Problem 13 --- Challenge",R`Does a $9,12,15$ rope make a right angle? How does it relate to $3,4,5$?`,3.8],
  ],
  answers:[
    R`$24$ hands.`, R`$12$ fingers.`, R`$35$ palms.`, R`$1$ h $30$ min.`, R`Yes: $36+64=100=10^2$.`,
    R`$90^\circ$.`, R`$208$ cm.`, R`$7$ cubits.`, R`No: $16+25=41\neq36$.`, R`$2$ h $30$ min.`,
    R`$15$ palms ($14$ vs $15$).`, R`$195$ minutes.`, R`Yes ($81+144=225$); it is $3,4,5$ scaled by $3$.`,
  ],
},
// ===================== 5.2 =====================
{
  code:"5.2", title:"Designs with Circle & Triangle Properties", unit:"Unit 5: Geometry & Measurement",
  bigideas:R`The interior angles of a triangle always sum to $180^\circ$. In a circle, the diameter is twice the radius ($d=2r$), an \textbf{inscribed angle} is half the \textbf{central angle} on the same arc, and an angle inscribed in a semicircle is $90^\circ$.`,
  concepts:[
    ["Triangle angles",R`The three interior angles sum to $180^\circ$, so the third angle is $180^\circ$ minus the other two. An exterior angle equals the sum of the two remote interior angles.`],
    ["Circle angles",R`$d=2r$. The inscribed angle is half the central angle standing on the same arc; equivalently the central angle is twice the inscribed angle.`],
  ],
  examples:[
    ["Third angle",R`Two angles of a triangle are $52^\circ$ and $61^\circ$. Find the third.`,R`The angles sum to $180^\circ$, so the third is $180^\circ-52^\circ-61^\circ=67^\circ$.
\begin{center}\begin{tikzpicture}[scale=0.9]
\coordinate (A) at (0,0);\coordinate (B) at (4,0);\coordinate (C) at (1.3,2.6);
\draw[thick,ex0] (A)--(B)--(C)--cycle;
\node at ($(A)+(0.35,0.25)$) {\scriptsize$52^\circ$};
\node at ($(B)+(-0.4,0.25)$) {\scriptsize$61^\circ$};
\node at ($(C)+(0,-0.35)$) {\scriptsize$67^\circ$};
\end{tikzpicture}\end{center}`],
    ["Isosceles base angles",R`An isosceles triangle has an apex angle of $40^\circ$. Find each base angle.`,R`The two base angles are equal and share the remaining $180^\circ-40^\circ=140^\circ$, so each is $140^\circ\div2=70^\circ$.
\begin{center}\begin{tikzpicture}[scale=0.9]
\coordinate (A) at (0,0);\coordinate (B) at (4,0);\coordinate (C) at (2,3.2);
\draw[thick,ex0] (A)--(B)--(C)--cycle;
\node at ($(C)+(0,-0.4)$) {\scriptsize$40^\circ$};
\node at ($(A)+(0.4,0.25)$) {\scriptsize$70^\circ$};
\node at ($(B)+(-0.4,0.25)$) {\scriptsize$70^\circ$};
\end{tikzpicture}\end{center}`],
    ["Central to inscribed",R`A central angle is $100^\circ$. Find the inscribed angle on the same arc.`,R`The inscribed angle is half the central angle: $100^\circ\div2=50^\circ$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick] (0,0) circle (2);
\coordinate (O) at (0,0);
\coordinate (P1) at (110:2); \coordinate (P2) at (10:2);
\draw[thick,ex0] (O)--(P1); \draw[thick,ex0] (O)--(P2);
\fill[ex0!25] (O) -- (P1) arc (110:10:2) -- cycle;
\node at (60:0.9) {\scriptsize$100^\circ$};
\coordinate (Q) at (-90:2);
\draw[thick,ex3] (Q)--(P1); \draw[thick,ex3] (Q)--(P2);
\node at (-50:1.15) {\scriptsize$50^\circ$};
\end{tikzpicture}\end{center}`],
    ["Inscribed to central",R`An inscribed angle is $28^\circ$. Find the central angle on the same arc.`,R`The central angle is twice the inscribed angle: $2\times28^\circ=56^\circ$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick] (0,0) circle (2);
\coordinate (O) at (0,0);
\coordinate (P1) at (100:2); \coordinate (P2) at (20:2);
\draw[thick,ex0] (O)--(P1); \draw[thick,ex0] (O)--(P2);
\fill[ex0!25] (O) -- (P1) arc (100:20:2) -- cycle;
\node at (60:0.9) {\scriptsize$56^\circ$};
\coordinate (Q) at (-90:2);
\draw[thick,ex3] (Q)--(P1); \draw[thick,ex3] (Q)--(P2);
\node at (-50:1.15) {\scriptsize$28^\circ$};
\end{tikzpicture}\end{center}`],
    ["Angle in a semicircle",R`What is the size of an angle inscribed in a semicircle?`,R`An angle inscribed in a semicircle stands on a diameter, so it is always $90^\circ$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick] (0,0) circle (2);
\draw[thick,ex0] (-2,0)--(2,0);
\coordinate (Q) at (130:2);
\draw[thick,ex3] (-2,0)--(Q)--(2,0);
\node at (Q) [above] {\scriptsize$90^\circ$};
\end{tikzpicture}\end{center}`],
    ["Radius and diameter",R`A radius is $7$ cm; find the diameter. A diameter is $18$ cm; find the radius.`,R`$d=2r=2\times7=14$ cm; and $r=\tfrac{d}{2}=\tfrac{18}{2}=9$ cm.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick] (0,0) circle (1.75);
\draw[thick,ex0] (0,0)--(1.75,0) node[midway,above,font=\scriptsize]{$r=7$};
\draw[thick,ex3] (-1.75,0)--(1.75,0) node[midway,below,font=\scriptsize]{$d=14$};
\fill (0,0) circle (1.5pt);
\end{tikzpicture}\end{center}`],
    ["Exterior angle",R`A triangle has remote interior angles $35^\circ$ and $80^\circ$. Find the exterior angle.`,R`The exterior angle equals the sum of the two remote interior angles: $35^\circ+80^\circ=115^\circ$.
\begin{center}\begin{tikzpicture}[scale=0.9]
\coordinate (A) at (0,0);\coordinate (B) at (4,0);\coordinate (C) at (1.2,2.6);
\draw[thick,ex0] (A)--(B)--(C)--cycle;
\draw[thick,ex0] (A)--($(B)+(1.5,0)$);
\node at ($(A)+(0.4,0.25)$) {\scriptsize$35^\circ$};
\node at ($(C)+(0,-0.35)$) {\scriptsize$80^\circ$};
\node at ($(B)+(0.55,0.3)$) {\scriptsize$115^\circ$};
\end{tikzpicture}\end{center}`],
    ["Equilateral",R`What is each angle of an equilateral triangle?`,R`All three angles are equal and sum to $180^\circ$, so each is $180^\circ\div3=60^\circ$.
\begin{center}\begin{tikzpicture}[scale=0.9]
\coordinate (A) at (0,0);\coordinate (B) at (3.2,0);\coordinate (C) at (1.6,2.77);
\draw[thick,ex0] (A)--(B)--(C)--cycle;
\node at ($(A)+(0.35,0.25)$) {\scriptsize$60^\circ$};
\node at ($(B)+(-0.35,0.25)$) {\scriptsize$60^\circ$};
\node at ($(C)+(0,-0.35)$) {\scriptsize$60^\circ$};
\end{tikzpicture}\end{center}`],
    ["Challenge --- triangle in a semicircle",R`A triangle is inscribed in a circle with one side a diameter; another angle is $30^\circ$. Find the third angle.`,R`The angle opposite the diameter is $90^\circ$ (semicircle). So the third angle is $180^\circ-90^\circ-30^\circ=60^\circ$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick] (0,0) circle (2);
\draw[thick,ex0] (-2,0)--(2,0);
\coordinate (Q) at (150:2);
\draw[thick,ex3] (-2,0)--(Q)--(2,0);
\node at (Q) [above] {\scriptsize$90^\circ$};
\node at (-1.5,0.3) {\scriptsize$60^\circ$};
\node at (1.5,0.3) {\scriptsize$30^\circ$};
\end{tikzpicture}\end{center}`],
  ],
  problems:[
    ["Problem 1",R`Two angles are $70^\circ$ and $55^\circ$. Find the third.`,3.0],
    ["Problem 2",R`An isosceles triangle has apex $50^\circ$. Find each base angle.`,3.2],
    ["Problem 3",R`A central angle is $120^\circ$. Find the inscribed angle on the same arc.`,3.2],
    ["Problem 4",R`An inscribed angle is $45^\circ$. Find the central angle on the same arc.`,3.2],
    ["Problem 5",R`A radius is $9$ cm. Find the diameter.`,3.0],
    ["Problem 6",R`A diameter is $26$ cm. Find the radius.`,3.0],
    ["Problem 7",R`What is the size of an angle in a semicircle?`,3.0],
    ["Problem 8",R`What is each angle of an equilateral triangle?`,3.0],
    ["Problem 9",R`A triangle has remote interior angles $40^\circ$ and $70^\circ$. Find the exterior angle.`,3.2],
    ["Problem 10",R`A right triangle has one acute angle of $37^\circ$. Find the other acute angle.`,3.2],
    ["Problem 11",R`A central angle is $30^\circ$. Find the inscribed angle on the same arc.`,3.0],
    ["Problem 12",R`A triangle has two equal angles and a third of $80^\circ$. Find the equal angles.`,3.4],
    ["Problem 13 --- Challenge",R`An inscribed angle of $90^\circ$ stands on a diameter. If the other two angles are $25^\circ$ and $x$, find $x$.`,3.6],
  ],
  answers:[
    R`$55^\circ$.`, R`$65^\circ$ each.`, R`$60^\circ$.`, R`$90^\circ$.`, R`$18$ cm.`, R`$13$ cm.`,
    R`$90^\circ$.`, R`$60^\circ$.`, R`$110^\circ$.`, R`$53^\circ$.`, R`$15^\circ$.`, R`$50^\circ$ each.`,
    R`$x=65^\circ$.`,
  ],
},
// ===================== 5.3 =====================
{
  code:"5.3", title:"Units & Unit Conversion", unit:"Unit 5: Geometry & Measurement",
  bigideas:R`Each step on the metric ladder is a factor of $10$. To convert, multiply (to smaller units) or divide (to larger units) by the right power of $10$. \textbf{Area} conversions use that factor \emph{squared} and \textbf{volume} uses it \emph{cubed}. A \textbf{rate} is found by dividing.`,
  concepts:[
    ["Metric conversions",R`$1$ m $=100$ cm $=1000$ mm; $1$ kg $=1000$ g. Multiply going down to smaller units, divide going up.`],
    ["Area, volume, and rates",R`$1\text{ m}^2=100^2=10\,000\text{ cm}^2$ and $1\text{ m}^3=100^3=1\,000\,000\text{ cm}^3$. A rate such as km/h or L/100 km comes from dividing the quantities.`],
  ],
  examples:[
    ["Metres to centimetres",R`Convert $4.2$ m to cm.`,R`$1$ m $=100$ cm, so multiply: $4.2\times100=420$ cm.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=2.4cm,minimum height=1cm] (a) at (0,0) {4.2 m};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=2.6cm,minimum height=1cm] (b) at (4,0) {420 cm};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$\times 100$};
\end{tikzpicture}\end{center}`],
    ["Grams to kilograms",R`Convert $3500$ g to kg.`,R`$1$ kg $=1000$ g, so divide: $3500\div1000=3.5$ kg.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=2.6cm,minimum height=1cm] (a) at (0,0) {3500 g};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=2.6cm,minimum height=1cm] (b) at (4.2,0) {3.5 kg};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$\div 1000$};
\end{tikzpicture}\end{center}`],
    ["Millimetres to metres",R`Convert $250$ mm to m.`,R`$1$ m $=1000$ mm, so divide: $250\div1000=0.25$ m.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=2.6cm,minimum height=1cm] (a) at (0,0) {250 mm};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=2.6cm,minimum height=1cm] (b) at (4.2,0) {0.25 m};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$\div 1000$};
\end{tikzpicture}\end{center}`],
    ["Area conversion",R`Convert $3\text{ m}^2$ to cm$^2$.`,R`Area uses the length factor squared: $1\text{ m}^2=100^2=10\,000\text{ cm}^2$. So $3\times10\,000=30\,000\text{ cm}^2$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!8] (0,0) rectangle (3,3);
\foreach \i in {1,...,5} { \draw[gray!50] (\i*0.5,0)--(\i*0.5,3); \draw[gray!50] (0,\i*0.5)--(3,\i*0.5); }
\node[below] at (1.5,-0.15) {\scriptsize 100 cm};
\node[rotate=90] at (-0.35,1.5) {\scriptsize 100 cm};
\node at (1.5,1.5) {\scriptsize $1\text{ m}^2=10{,}000$ cm$^2$};
\end{tikzpicture}\end{center}`],
    ["Volume conversion",R`Convert $2\text{ m}^3$ to cm$^3$.`,R`Volume uses the factor cubed: $1\text{ m}^3=100^3=1\,000\,000\text{ cm}^3$. So $2\times1\,000\,000=2\,000\,000\text{ cm}^3$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!8] (0,0) rectangle (2.4,2.4);
\draw[thick,ex0,fill=ex0!15] (0,2.4)--(0.7,3.1)--(3.1,3.1)--(2.4,2.4)--cycle;
\draw[thick,ex0,fill=ex0!20] (2.4,0)--(3.1,0.7)--(3.1,3.1)--(2.4,2.4)--cycle;
\node[below] at (1.2,-0.15) {\scriptsize 100 cm};
\node at (1.6,1.2) {\scriptsize $1\text{ m}^3=$};
\node at (1.6,0.8) {\scriptsize $1{,}000{,}000$ cm$^3$};
\end{tikzpicture}\end{center}`],
    ["Speed rate",R`A car travels $240$ km in $3$ h. Find the speed in km/h.`,R`Rate $=$ distance $\div$ time $=240\div3=80$ km/h.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$t$ (h)},ylabel={\scriptsize$d$ (km)},grid=both,grid style={gray!16},xmin=0,xmax=3,ymin=0,ymax=260,xtick distance=1,ytick distance=40,tick label style={font=\tiny},axis line style={-}]\addplot[domain=0:3,samples=2,ex0,thick]{80*x};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(3,240)};\end{axis}\end{tikzpicture}\end{center}`],
    ["Fuel rate",R`A car uses $54$ L over $600$ km. Find the fuel use in L/100 km.`,R`Per km it is $\tfrac{54}{600}$ L; times $100$: $\tfrac{54}{600}\times100=9$ L/100 km.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=3.2cm,minimum height=1cm] (a) at (0,0) {54 L / 600 km};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=3.2cm,minimum height=1cm] (b) at (5.2,0) {9 L / 100 km};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$\div 6$};
\end{tikzpicture}\end{center}`],
    ["Compound units",R`Convert $90$ km/h to m/s.`,R`$90$ km $=90\,000$ m and $1$ h $=3600$ s, so $\tfrac{90\,000}{3600}=25$ m/s.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=2.6cm,minimum height=1cm] (a) at (0,0) {90 km/h};
\node[draw=ex1,thick,fill=ex1!8,rounded corners,minimum width=3.2cm,minimum height=1cm] (b) at (4.6,0) {90{,}000 m/h};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=2.6cm,minimum height=1cm] (c) at (9.4,0) {25 m/s};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$\times 1000$};
\draw[->,thick] (b)--(c) node[midway,above]{\scriptsize$\div 3600$};
\end{tikzpicture}\end{center}`],
    ["Challenge --- cubic metres to litres",R`A tank holds $0.5\text{ m}^3$. How many litres is that? ($1\text{ m}^3=1000$ L)`,R`$0.5\times1000=500$ L.
\begin{center}\begin{tikzpicture}
\node[draw=ex0,thick,fill=ex0!8,rounded corners,minimum width=2.8cm,minimum height=1cm] (a) at (0,0) {0.5 m$^3$};
\node[draw=ex3,thick,fill=ex3!8,rounded corners,minimum width=2.6cm,minimum height=1cm] (b) at (4.4,0) {500 L};
\draw[->,thick] (a)--(b) node[midway,above]{\scriptsize$\times 1000$};
\end{tikzpicture}\end{center}`],
  ],
  problems:[
    ["Problem 1",R`Convert $6.5$ m to cm.`,3.0],
    ["Problem 2",R`Convert $4200$ g to kg.`,3.0],
    ["Problem 3",R`Convert $320$ cm to m.`,3.0],
    ["Problem 4",R`Convert $5$ km to m.`,3.0],
    ["Problem 5",R`Convert $2\text{ m}^2$ to cm$^2$.`,3.2],
    ["Problem 6",R`Convert $3\text{ m}^3$ to cm$^3$.`,3.2],
    ["Problem 7",R`A runner covers $180$ km in $2$ h. Find the speed (km/h).`,3.2],
    ["Problem 8",R`A car uses $40$ L over $500$ km. Find L/100 km.`,3.4],
    ["Problem 9",R`Convert $72$ km/h to m/s.`,3.4],
    ["Problem 10",R`Convert $750$ mL to L.`,3.0],
    ["Problem 11",R`Convert $0.8\text{ m}^3$ to litres.`,3.2],
    ["Problem 12",R`Convert $1.5$ kg to g.`,3.0],
    ["Problem 13 --- Challenge",R`A pool is $25\text{ m}\times10\text{ m}\times2\text{ m}$. Find its volume in m$^3$ and in litres.`,3.8],
  ],
  answers:[
    R`$650$ cm.`, R`$4.2$ kg.`, R`$3.2$ m.`, R`$5000$ m.`, R`$20\,000\text{ cm}^2$.`, R`$3\,000\,000\text{ cm}^3$.`,
    R`$90$ km/h.`, R`$8$ L/100 km.`, R`$20$ m/s.`, R`$0.75$ L.`, R`$800$ L.`, R`$1500$ g.`,
    R`$500\text{ m}^3=500\,000$ L.`,
  ],
},
// ===================== 5.4 =====================
{
  code:"5.4", title:"The Pythagorean Theorem", unit:"Unit 5: Geometry & Measurement",
  bigideas:R`In a right triangle with legs $a,b$ and hypotenuse $c$, $a^2+b^2=c^2$. Rearrange and take a square root to find a missing side. The \textbf{converse} lets you test whether a triangle is right-angled, and many word problems (ladders, diagonals) hide a right triangle.`,
  concepts:[
    ["Finding a side",R`For the hypotenuse: $c=\sqrt{a^2+b^2}$. For a leg: $a=\sqrt{c^2-b^2}$. Leave answers as exact radicals (e.g.\ $\sqrt{18}=3\sqrt2$) unless a decimal is asked.`],
    ["Converse and applications",R`If $a^2+b^2=c^2$ holds (with $c$ the longest side), the triangle is right-angled. Sketch word problems to spot the right triangle.`],
  ],
  examples:[
    ["Find the hypotenuse",R`A right triangle has legs $5$ and $12$. Find the hypotenuse.`,R`Use $c=\sqrt{a^2+b^2}=\sqrt{5^2+12^2}=\sqrt{25+144}=\sqrt{169}=13$.
\rtri{4}{3}{12}{5}{13}`],
    ["Find a leg",R`The hypotenuse is $20$ and one leg is $12$. Find the other leg.`,R`Rearrange: $a=\sqrt{c^2-b^2}=\sqrt{20^2-12^2}=\sqrt{400-144}=\sqrt{256}=16$.
\rtri{4}{3}{12}{16}{20}`],
    ["Exact radical",R`A right triangle has legs $3$ and $3$. Find the hypotenuse exactly.`,R`$c=\sqrt{3^2+3^2}=\sqrt{18}=\sqrt{9\cdot2}=3\sqrt2$.
\rtri{3}{3}{3}{3}{$3\sqrt2$}`],
    ["Verify a right triangle",R`Is $8,15,17$ a right triangle?`,R`Test the longest side as hypotenuse: $8^2+15^2=64+225=289=17^2$. Yes, it is right-angled.
\rtri{4}{3}{15}{8}{17}`],
    ["Show one is not right",R`Is $6,7,9$ a right triangle?`,R`$6^2+7^2=36+49=85$, but $9^2=81$. Since $85\neq81$, it is \textbf{not} a right triangle.
\gtri{}{}{}{9}{7}{6}`],
    ["Ladder problem",R`A $13$ m ladder reaches $12$ m up a wall. How far is its base from the wall?`,R`The wall, ground and ladder form a right triangle with hypotenuse $13$ and one leg $12$: base $=\sqrt{13^2-12^2}=\sqrt{169-144}=\sqrt{25}=5$ m.
\rtri{3}{3.5}{12 m}{5 m}{13 m}`],
    ["Diagonal of a rectangle",R`Find the diagonal of a $9$ by $12$ rectangle.`,R`The diagonal is the hypotenuse of a right triangle with legs $9$ and $12$: $\sqrt{9^2+12^2}=\sqrt{81+144}=\sqrt{225}=15$.
\begin{center}\begin{tikzpicture}[scale=0.6]
\draw[thick,ex0,fill=ex0!8] (0,0) rectangle (9,12);
\draw[thick,ex3] (0,0)--(9,12);
\node[below] at (4.5,0) {\scriptsize$9$};
\node[left] at (0,6) {\scriptsize$12$};
\node[above right] at (4.5,6) {\scriptsize$15$};
\end{tikzpicture}\end{center}`],
    ["A decimal answer",R`A right triangle has legs $5$ and $7$. Find the hypotenuse to one decimal place.`,R`$c=\sqrt{5^2+7^2}=\sqrt{74}\approx8.6$.
\rtri{4}{3.3}{7}{5}{$\sqrt{74}\approx8.6$}`],
    ["Challenge --- isosceles right triangle",R`An isosceles right triangle has legs $6$. Find the hypotenuse (exact) and the perimeter.`,R`Hypotenuse $=\sqrt{6^2+6^2}=\sqrt{72}=6\sqrt2$. Perimeter $=6+6+6\sqrt2=12+6\sqrt2$.
\rtri{3}{3}{6}{6}{$6\sqrt2$}`],
  ],
  problems:[
    ["Problem 1",R`Legs $6$ and $8$ --- find the hypotenuse.`,3.2],
    ["Problem 2",R`Legs $9$ and $12$ --- find the hypotenuse.`,3.2],
    ["Problem 3",R`Hypotenuse $25$, one leg $7$ --- find the other leg.`,3.4],
    ["Problem 4",R`Hypotenuse $10$, one leg $6$ --- find the other leg.`,3.4],
    ["Problem 5",R`Legs $2$ and $2$ --- find the hypotenuse (exact).`,3.2],
    ["Problem 6",R`Is $7,24,25$ a right triangle? Show your check.`,3.4],
    ["Problem 7",R`Is $5,6,8$ a right triangle? Explain.`,3.4],
    ["Problem 8",R`Legs $8$ and $15$ --- find the hypotenuse.`,3.2],
    ["Problem 9",R`Find the diagonal of a $5$ by $12$ rectangle.`,3.4],
    ["Problem 10",R`A $15$ m ladder has its base $9$ m from a wall. How high does it reach?`,3.6],
    ["Problem 11",R`Legs $1$ and $1$ --- find the hypotenuse (exact).`,3.2],
    ["Problem 12",R`Hypotenuse $13$, one leg $5$ --- find the other leg.`,3.4],
    ["Problem 13 --- Challenge",R`A square has a diagonal of $10$. Find its side length (exact).`,3.8],
  ],
  answers:[
    R`$10$.`, R`$15$.`, R`$24$.`, R`$8$.`, R`$\sqrt8=2\sqrt2$.`, R`Yes: $49+576=625=25^2$.`,
    R`No: $25+36=61\neq64$.`, R`$17$.`, R`$13$.`, R`$12$ m.`, R`$\sqrt2$.`, R`$12$.`,
    R`$2s^2=100\Rightarrow s=\sqrt{50}=5\sqrt2$.`,
  ],
},
// ===================== 5.5 =====================
{
  code:"5.5", title:"Changing Dimensions: Perimeter", unit:"Unit 5: Geometry & Measurement",
  bigideas:R`Perimeter is the total distance around a shape: square $4s$, rectangle $2(l+w)$, circle (circumference) $2\pi r$. If every length is multiplied by a factor $k$, the \textbf{perimeter is also multiplied by $k$} --- it scales in direct proportion.`,
  concepts:[
    ["Perimeter formulas",R`Add up the boundary: square $P=4s$, rectangle $P=2(l+w)$, triangle $P=a+b+c$, circle $C=2\pi r=\pi d$.`],
    ["Scaling perimeter",R`Enlarging (or shrinking) every side by factor $k$ multiplies the perimeter by the same $k$. To reverse it, divide the new perimeter by the old.`],
  ],
  examples:[
    ["Square perimeter",R`A square has side $7$ cm. Find its perimeter.`,R`$P=4s=4\times7=28$ cm.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!8] (0,0) rectangle (2.2,2.2);
\node[below] at (1.1,0) {\scriptsize$7$};
\node[left] at (0,1.1) {\scriptsize$7$};
\node at (1.1,1.1) {\scriptsize$P=28$};
\end{tikzpicture}\end{center}`],
    ["Rectangle perimeter",R`A rectangle is $9\times4$. Find its perimeter.`,R`$P=2(l+w)=2(9+4)=2\times13=26$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!8] (0,0) rectangle (3.6,1.6);
\node[below] at (1.8,0) {\scriptsize$9$};
\node[left] at (0,0.8) {\scriptsize$4$};
\node at (1.8,0.8) {\scriptsize$P=26$};
\end{tikzpicture}\end{center}`],
    ["Triangle perimeter",R`A triangle has sides $5,6,7$. Find its perimeter.`,R`Add the sides: $5+6+7=18$.
\gtri{}{}{}{5}{6}{7}`],
    ["Scaling factor",R`Every side of a shape is multiplied by $3$. By what factor does the perimeter change?`,R`Perimeter scales in direct proportion, so it is also multiplied by $3$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!8] (0,0) rectangle (1,1);
\node[below] at (0.5,-0.1) {\scriptsize$s$};
\draw[thick,ex3,fill=ex3!8] (2.2,0) rectangle (5.2,3);
\node[below] at (3.7,-0.1) {\scriptsize$3s$};
\draw[->,thick] (1.2,0.5)--(2,0.5) node[midway,above]{\scriptsize$\times 3$};
\end{tikzpicture}\end{center}`],
    ["Enlarge a square",R`A square of side $6$ is enlarged by factor $2.5$. Find the new perimeter.`,R`The new side is $6\times2.5=15$, so $P=4\times15=60$. (Equivalently, old $P=24$, times $2.5=60$.)
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!8] (0,0) rectangle (1.2,1.2);
\node[below] at (0.6,-0.1) {\scriptsize$6$};
\draw[thick,ex3,fill=ex3!8] (2.4,0) rectangle (5.4,3);
\node[below] at (3.9,-0.1) {\scriptsize$15$};
\draw[->,thick] (1.4,0.6)--(2.2,0.6) node[midway,above]{\scriptsize$\times 2.5$};
\end{tikzpicture}\end{center}`],
    ["Circle circumference",R`A circle has radius $5$. Find its circumference (in terms of $\pi$).`,R`$C=2\pi r=2\pi\times5=10\pi$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!8] (0,0) circle (1.8);
\draw[thick,ex3] (0,0)--(1.8,0) node[midway,above,font=\scriptsize]{$r=5$};
\fill (0,0) circle (1.2pt);
\node at (0,-2.2) {\scriptsize$C=10\pi$};
\end{tikzpicture}\end{center}`],
    ["Side from perimeter",R`A square has perimeter $48$. Find its side length.`,R`$s=\tfrac{P}{4}=\tfrac{48}{4}=12$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!8] (0,0) rectangle (2.4,2.4);
\node[below] at (1.2,0) {\scriptsize$s=12$};
\node at (1.2,1.2) {\scriptsize$P=48$};
\end{tikzpicture}\end{center}`],
    ["Rectangle: find a side",R`A rectangle has perimeter $30$ and width $5$. Find its length.`,R`$2(l+5)=30$, so $l+5=15$ and $l=10$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!8] (0,0) rectangle (4,2);
\node[below] at (2,0) {\scriptsize$l=10$};
\node[left] at (0,1) {\scriptsize$w=5$};
\end{tikzpicture}\end{center}`],
    ["Challenge --- reverse a scaling",R`A $15\times10$ cm photo is enlarged so its perimeter triples. Find the new dimensions.`,R`Perimeter tripling means every length triples: $15\times3=45$ and $10\times3=30$, so $45\times30$ cm.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!8] (0,0) rectangle (1.5,1);
\node[below] at (0.75,-0.1) {\scriptsize$15\times10$};
\draw[thick,ex3,fill=ex3!8] (3,0) rectangle (7.5,3);
\node[below] at (5.25,-0.1) {\scriptsize$45\times30$};
\draw[->,thick] (1.7,0.5)--(2.8,0.5) node[midway,above]{\scriptsize$\times 3$};
\end{tikzpicture}\end{center}`],
  ],
  problems:[
    ["Problem 1",R`A square has side $9$. Find its perimeter.`,3.0],
    ["Problem 2",R`A rectangle is $12\times5$. Find its perimeter.`,3.0],
    ["Problem 3",R`A triangle has sides $8,8,10$. Find its perimeter.`,3.0],
    ["Problem 4",R`Every side is multiplied by $4$. By what factor does the perimeter change?`,3.0],
    ["Problem 5",R`A square of side $8$ is scaled by $1.5$. Find the new perimeter.`,3.4],
    ["Problem 6",R`A circle has radius $7$. Find its circumference (in $\pi$).`,3.2],
    ["Problem 7",R`A square has perimeter $60$. Find its side.`,3.0],
    ["Problem 8",R`A rectangle has perimeter $40$ and length $12$. Find its width.`,3.4],
    ["Problem 9",R`A regular pentagon has side $6$. Find its perimeter.`,3.0],
    ["Problem 10",R`A shape has perimeter $20$; it is scaled by $2.5$. Find the new perimeter.`,3.2],
    ["Problem 11",R`A circle has diameter $10$. Find its circumference (in $\pi$).`,3.2],
    ["Problem 12",R`An equilateral triangle has perimeter $27$. Find its side.`,3.0],
    ["Problem 13 --- Challenge",R`An $8\times3$ rectangle is enlarged so the new perimeter is $66$. Find the scale factor.`,3.8],
  ],
  answers:[
    R`$36$.`, R`$34$.`, R`$26$.`, R`$\times4$.`, R`side $12$, $P=48$.`, R`$14\pi$.`, R`$15$.`,
    R`$2(12+w)=40\Rightarrow w=8$.`, R`$30$.`, R`$50$.`, R`$10\pi$.`, R`$9$.`, R`old $P=22$; $66\div22=3$.`,
  ],
},
// ===================== 5.6 =====================
{
  code:"5.6", title:"Changing Dimensions: Area", unit:"Unit 5: Geometry & Measurement",
  bigideas:R`Area formulas: square $s^2$, rectangle $lw$, triangle $\tfrac12 bh$, circle $\pi r^2$. If every length is multiplied by a factor $k$, the \textbf{area is multiplied by $k^2$} --- because area is two-dimensional.`,
  concepts:[
    ["Area formulas",R`Square $A=s^2$; rectangle $A=lw$; triangle $A=\tfrac12 bh$; circle $A=\pi r^2$.`],
    ["Scaling area",R`Scaling every length by $k$ scales area by $k^2$. To find the scale factor from an area ratio, take the square root.`],
  ],
  examples:[
    ["Square area",R`A square has side $6$ cm. Find its area.`,R`$A=s^2=6^2=36\text{ cm}^2$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!15] (0,0) rectangle (2,2);
\node[below] at (1,0) {\scriptsize$6$};
\node[left] at (0,1) {\scriptsize$6$};
\node at (1,1) {\scriptsize$A=36$};
\end{tikzpicture}\end{center}`],
    ["Rectangle area",R`A rectangle is $9\times4$. Find its area.`,R`$A=lw=9\times4=36$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!15] (0,0) rectangle (3.6,1.6);
\node[below] at (1.8,0) {\scriptsize$9$};
\node[left] at (0,0.8) {\scriptsize$4$};
\node at (1.8,0.8) {\scriptsize$A=36$};
\end{tikzpicture}\end{center}`],
    ["Triangle area",R`A triangle has base $10$ and height $6$. Find its area.`,R`$A=\tfrac12 bh=\tfrac12\times10\times6=30$.
\begin{center}\begin{tikzpicture}[scale=0.4]
\coordinate (A) at (0,0); \coordinate (B) at (10,0); \coordinate (C) at (3,6);
\draw[thick,ex0,fill=ex0!12] (A)--(B)--(C)--cycle;
\draw[dashed,ex3] (3,0)--(C);
\draw[black] (3,0)--(3,0.5)--(2.5,0.5);
\node[below] at (5,0) {\scriptsize$b=10$};
\node[right] at (3,3) {\scriptsize$h=6$};
\end{tikzpicture}\end{center}`],
    ["Circle area",R`A circle has radius $5$. Find its area (in $\pi$).`,R`$A=\pi r^2=\pi\times5^2=25\pi$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!12] (0,0) circle (1.8);
\draw[thick,ex3] (0,0)--(1.8,0) node[midway,above,font=\scriptsize]{$r=5$};
\fill (0,0) circle (1.2pt);
\node at (0,-2.2) {\scriptsize$A=25\pi$};
\end{tikzpicture}\end{center}`],
    ["Doubling the sides",R`Every side of a square is doubled. By what factor does the area change?`,R`Area scales by $k^2=2^2=4$, so the area is $4$ times as large.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!15] (0,0) rectangle (1,1);
\node[below] at (0.5,-0.1) {\scriptsize$s$};
\draw[thick,ex3,fill=ex3!10] (2.4,0) rectangle (4.4,2);
\draw[ex3] (3.4,0)--(3.4,2); \draw[ex3] (2.4,1)--(4.4,1);
\node[below] at (3.4,-0.1) {\scriptsize$2s$};
\node at (3.4,1) {\scriptsize$\times4$};
\end{tikzpicture}\end{center}`],
    ["Scaling by 3",R`All sides of a triangle are scaled by $3$. By what factor does the area change?`,R`$k^2=3^2=9$: the area becomes $9$ times as large.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!15] (0,0)--(1,0)--(0.4,0.8)--cycle;
\draw[thick,ex3,fill=ex3!10] (2.2,0)--(5.2,0)--(3.4,2.4)--cycle;
\draw[->,thick] (1.3,0.4)--(2,0.4) node[midway,above]{\scriptsize$\times 3$};
\node at (3.7,1) {\scriptsize$\times9$ area};
\end{tikzpicture}\end{center}`],
    ["Apply the area factor",R`Every side is multiplied by $5$. If the original area is $8$, find the new area.`,R`Area factor $=5^2=25$, so new area $=8\times25=200$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!15] (0,0) rectangle (1,1);
\node at (0.5,0.5) {\scriptsize$A=8$};
\draw[thick,ex3,fill=ex3!10] (2.4,0) rectangle (5.4,3);
\node at (3.9,1.5) {\scriptsize$A=200$};
\draw[->,thick] (1.2,0.5)--(2.2,0.5) node[midway,above]{\scriptsize$\times 5$ sides};
\end{tikzpicture}\end{center}`],
    ["Reverse: area ratio to scale",R`An enlarged square has $9$ times the original area. Find the scale factor.`,R`The scale factor is $\sqrt{9}=3$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!15] (0,0) rectangle (1,1);
\node[below] at (0.5,-0.1) {\scriptsize$A$};
\draw[thick,ex3,fill=ex3!10] (2.2,0) rectangle (5.2,3);
\node[below] at (3.7,-0.1) {\scriptsize$9A$};
\node at (1.6,1.5) {\scriptsize$k=\sqrt9=3$};
\end{tikzpicture}\end{center}`],
    ["Challenge --- circle radius tripled",R`A circle's radius is tripled. By what factor does the area grow, and if the original area is $4\pi$, what is the new area?`,R`Area factor $=3^2=9$, so the new area is $9\times4\pi=36\pi$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!12] (0,0) circle (0.7);
\node[below] at (0,-0.9) {\scriptsize$A=4\pi$};
\draw[thick,ex3,fill=ex3!10] (2.6,0) circle (2.1);
\node[below] at (2.6,-2.3) {\scriptsize$A=36\pi$};
\end{tikzpicture}\end{center}`],
  ],
  problems:[
    ["Problem 1",R`A square has side $7$. Find its area.`,3.0],
    ["Problem 2",R`A rectangle is $11\times3$. Find its area.`,3.0],
    ["Problem 3",R`A triangle has base $8$ and height $5$. Find its area.`,3.2],
    ["Problem 4",R`A circle has radius $6$. Find its area (in $\pi$).`,3.2],
    ["Problem 5",R`Every side is doubled. By what factor does the area change?`,3.0],
    ["Problem 6",R`Every side is scaled by $3$. By what factor does the area change?`,3.0],
    ["Problem 7",R`Sides are scaled by $4$; the original area is $5$. Find the new area.`,3.4],
    ["Problem 8",R`An enlarged shape has $16$ times the area. Find the scale factor.`,3.2],
    ["Problem 9",R`A triangle has base $12$ and height $7$. Find its area.`,3.2],
    ["Problem 10",R`A circle has diameter $10$. Find its area (in $\pi$).`,3.4],
    ["Problem 11",R`A square has area $64$. Find its side.`,3.0],
    ["Problem 12",R`Every side is scaled by $2.5$. By what factor does the area change?`,3.2],
    ["Problem 13 --- Challenge",R`A rectangle's area quadruples when scaled. Find the scale factor; if it was $10\times4$, find the new dimensions.`,3.8],
  ],
  answers:[
    R`$49$.`, R`$33$.`, R`$20$.`, R`$36\pi$.`, R`$\times4$.`, R`$\times9$.`, R`$5\times16=80$.`,
    R`$\sqrt{16}=4$.`, R`$42$.`, R`$r=5$: $25\pi$.`, R`$8$.`, R`$2.5^2=6.25$.`, R`factor $2$; $20\times8$.`,
  ],
},
// ===================== 5.7 =====================
{
  code:"5.7", title:"Volume", unit:"Unit 5: Geometry & Measurement",
  bigideas:R`Volume of a prism or cylinder is \textbf{base area $\times$ height}: rectangular prism $lwh$, cylinder $\pi r^2 h$. A cone or pyramid is exactly \textbf{one-third} of the matching cylinder or prism, and a sphere is $\tfrac43\pi r^3$.`,
  concepts:[
    ["Prisms and cylinders",R`$V_{\text{prism}}=lwh$ (or base area $\times$ height); $V_{\text{cylinder}}=\pi r^2 h$.`],
    ["Cones, pyramids, spheres",R`$V_{\text{cone}}=\tfrac13\pi r^2 h$; $V_{\text{pyramid}}=\tfrac13(\text{base area})h$; $V_{\text{sphere}}=\tfrac43\pi r^3$.`],
  ],
  examples:[
    ["Rectangular prism",R`Find the volume of a $6\times4\times3$ prism.`,R`$V=lwh=6\times4\times3=72$.
\begin{center}\begin{tikzpicture}[scale=0.9]
\draw[thick,ex0,fill=ex0!8] (0,0) rectangle (2.4,1.6);
\draw[thick,ex0,fill=ex0!15] (0,1.6)--(0.6,2.2)--(3,2.2)--(2.4,1.6)--cycle;
\draw[thick,ex0,fill=ex0!20] (2.4,0)--(3,0.6)--(3,2.2)--(2.4,1.6)--cycle;
\node[below] at (1.2,0) {\scriptsize$6$};
\node[left] at (0,0.8) {\scriptsize$3$};
\node at (2.7,0.3) {\scriptsize$4$};
\end{tikzpicture}\end{center}`],
    ["Cylinder",R`A cylinder has $r=3$, $h=10$. Find the volume (in $\pi$).`,R`$V=\pi r^2 h=\pi\times3^2\times10=90\pi$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!10] (-1,0) ellipse (1 and 0.35);
\draw[thick,ex0] (-2,0) -- (-2,2.6);
\draw[thick,ex0] (0,0) -- (0,2.6);
\draw[thick,ex0,fill=ex0!10] (-1,2.6) ellipse (1 and 0.35);
\node[below] at (-1,-0.35) {\scriptsize$r=3$};
\node[right] at (0,1.3) {\scriptsize$h=10$};
\end{tikzpicture}\end{center}`],
    ["Cone",R`A cone has $r=3$, $h=10$. Find the volume (in $\pi$).`,R`A cone is one-third of the cylinder: $V=\tfrac13\pi r^2 h=\tfrac13\times90\pi=30\pi$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!10] (-1,0) ellipse (1 and 0.35);
\draw[thick,ex0] (-2,0) -- (-1,2.6) -- (0,0);
\node[below] at (-1,-0.35) {\scriptsize$r=3$};
\node[right] at (-0.5,1.3) {\scriptsize$h=10$};
\end{tikzpicture}\end{center}`],
    ["Sphere",R`Find the volume of a sphere with $r=3$ (in $\pi$).`,R`$V=\tfrac43\pi r^3=\tfrac43\pi\times27=36\pi$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!10] (0,0) circle (1.4);
\draw[thick,ex3,dashed] (0,0) ellipse (1.4 and 0.5);
\node[below] at (0,-1.6) {\scriptsize$r=3$};
\end{tikzpicture}\end{center}`],
    ["Cube",R`Find the volume of a cube with edge $5$.`,R`$V=s^3=5^3=125$.
\begin{center}\begin{tikzpicture}[scale=0.9]
\draw[thick,ex0,fill=ex0!8] (0,0) rectangle (2,2);
\draw[thick,ex0,fill=ex0!15] (0,2)--(0.6,2.6)--(2.6,2.6)--(2,2)--cycle;
\draw[thick,ex0,fill=ex0!20] (2,0)--(2.6,0.6)--(2.6,2.6)--(2,2)--cycle;
\node[below] at (1,0) {\scriptsize$5$};
\end{tikzpicture}\end{center}`],
    ["Triangular prism",R`A triangular prism has base-triangle area $6$ and length $10$. Find the volume.`,R`$V=(\text{base area})\times\text{length}=6\times10=60$.
\begin{center}\begin{tikzpicture}[scale=0.9]
\coordinate (A) at (0,0); \coordinate (B) at (1.6,0); \coordinate (C) at (0.6,1.3);
\coordinate (A2) at (1.6,0.8); \coordinate (B2) at (3.2,0.8); \coordinate (C2) at (2.2,2.1);
\draw[thick,ex0,fill=ex0!10] (A)--(B)--(C)--cycle;
\draw[thick,ex0] (A)--(A2); \draw[thick,ex0] (B)--(B2); \draw[thick,ex0] (C)--(C2);
\draw[thick,ex0,fill=ex0!15] (A2)--(B2)--(C2)--cycle;
\node[below] at (0.8,0) {\scriptsize base area $=6$};
\node at (2.4,0.4) {\scriptsize$\ell=10$};
\end{tikzpicture}\end{center}`],
    ["Square pyramid",R`A pyramid has a $6\times6$ base and height $10$. Find the volume.`,R`$V=\tfrac13(\text{base area})h=\tfrac13\times36\times10=120$.
\begin{center}\begin{tikzpicture}[scale=0.9]
\draw[thick,ex0,fill=ex0!10] (0,0)--(2,-0.4)--(2.8,0.6)--(0.8,1)--cycle;
\draw[thick,ex0] (0,0)--(1.4,2.6);
\draw[thick,ex0] (2,-0.4)--(1.4,2.6);
\draw[thick,ex0] (2.8,0.6)--(1.4,2.6);
\draw[thick,ex0,dashed] (0.8,1)--(1.4,2.6);
\node[below] at (1.4,-0.4) {\scriptsize$6\times6$ base};
\node[right] at (1.6,1.3) {\scriptsize$h=10$};
\end{tikzpicture}\end{center}`],
    ["Compare cone and cylinder",R`A cone and cylinder share the same $r$ and $h$. How do their volumes compare?`,R`The cone's volume is exactly one-third of the cylinder's.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!8] (-1,0) ellipse (1 and 0.3);
\draw[thick,ex0] (-2,0)--(-2,2.2); \draw[thick,ex0] (0,0)--(0,2.2);
\draw[thick,ex0,fill=ex0!8] (-1,2.2) ellipse (1 and 0.3);
\draw[thick,ex3] (2,0) ellipse (1 and 0.3);
\draw[thick,ex3] (1,0)--(2,2.2)--(3,0);
\node[below] at (-1,-0.3) {\scriptsize cylinder};
\node[below] at (2,-0.3) {\scriptsize cone};
\node at (2,3) {\scriptsize$V_{\text{cone}}=\tfrac13 V_{\text{cyl}}$};
\end{tikzpicture}\end{center}`],
    ["Challenge --- doubling the radius",R`A cylinder has $r=4$, $h=9$. If the radius doubles, by what factor does the volume change?`,R`Volume depends on $r^2$, so doubling $r$ multiplies the volume by $2^2=4$.
\begin{center}\begin{tikzpicture}[scale=0.7]
\draw[thick,ex0,fill=ex0!10] (-1,0) ellipse (1 and 0.3);
\draw[thick,ex0] (-2,0)--(-2,2.2); \draw[thick,ex0] (0,0)--(0,2.2);
\draw[thick,ex0,fill=ex0!10] (-1,2.2) ellipse (1 and 0.3);
\node[below] at (-1,-0.3) {\scriptsize$r=4$};
\draw[thick,ex3,fill=ex3!10] (3,0) ellipse (2 and 0.5);
\draw[thick,ex3] (1,0)--(1,2.2); \draw[thick,ex3] (5,0)--(5,2.2);
\draw[thick,ex3,fill=ex3!10] (3,2.2) ellipse (2 and 0.5);
\node[below] at (3,-0.5) {\scriptsize$r=8$};
\node at (3,3) {\scriptsize$\times4$ volume};
\end{tikzpicture}\end{center}`],
  ],
  problems:[
    ["Problem 1",R`Find the volume of an $8\times5\times2$ prism.`,3.0],
    ["Problem 2",R`Find the volume of a cube with edge $4$.`,3.0],
    ["Problem 3",R`A cylinder has $r=2$, $h=7$. Find the volume (in $\pi$).`,3.2],
    ["Problem 4",R`A cone has $r=6$, $h=5$. Find the volume (in $\pi$).`,3.4],
    ["Problem 5",R`Find the volume of a sphere with $r=6$ (in $\pi$).`,3.4],
    ["Problem 6",R`A triangular prism has base-area $12$ and length $5$. Find the volume.`,3.2],
    ["Problem 7",R`A pyramid has a $9\times9$ base and height $4$. Find the volume.`,3.4],
    ["Problem 8",R`A cylinder has $r=5$, $h=4$. Find the volume (in $\pi$).`,3.2],
    ["Problem 9",R`A cone and cylinder share $r$ and $h$. What is the ratio of their volumes?`,3.0],
    ["Problem 10",R`Find the volume of a $10\times3\times3$ prism.`,3.0],
    ["Problem 11",R`Find the volume of a sphere with $r=1$ (in $\pi$).`,3.2],
    ["Problem 12",R`A cube has volume $27$. Find its edge.`,3.0],
    ["Problem 13 --- Challenge",R`A cylinder and cone share $r=3$, $h=8$. Find each volume (in $\pi$) and their difference.`,3.8],
  ],
  answers:[
    R`$80$.`, R`$64$.`, R`$28\pi$.`, R`$60\pi$.`, R`$288\pi$.`, R`$60$.`, R`$108$.`, R`$100\pi$.`,
    R`$1:3$.`, R`$90$.`, R`$\tfrac43\pi$.`, R`$3$.`, R`cyl $72\pi$, cone $24\pi$, difference $48\pi$.`,
  ],
},
// ===================== 5.8 =====================
{
  code:"5.8", title:"Surface Area", unit:"Unit 5: Geometry & Measurement",
  bigideas:R`Surface area is the total area of all the faces. Cube $6s^2$; rectangular prism $2(lw+lh+wh)$; cylinder $2\pi r^2+2\pi r h$ (two circles plus the wrap-around); sphere $4\pi r^2$.`,
  concepts:[
    ["Prisms",R`Add every face. Cube $SA=6s^2$; rectangular prism $SA=2(lw+lh+wh)$.`],
    ["Cylinders and spheres",R`Cylinder $SA=2\pi r^2+2\pi r h$ (top and bottom circles plus the curved side of area $2\pi r h$). Sphere $SA=4\pi r^2$.`],
  ],
  examples:[
    ["Cube",R`A cube has edge $4$. Find its surface area.`,R`$SA=6s^2=6\times4^2=6\times16=96$.
\begin{center}\begin{tikzpicture}[scale=0.9]
\draw[thick,ex0,fill=ex0!8] (0,0) rectangle (2,2);
\draw[thick,ex0,fill=ex0!15] (0,2)--(0.6,2.6)--(2.6,2.6)--(2,2)--cycle;
\draw[thick,ex0,fill=ex0!20] (2,0)--(2.6,0.6)--(2.6,2.6)--(2,2)--cycle;
\node[below] at (1,0) {\scriptsize$s=4$};
\node at (1,1) {\scriptsize$SA=96$};
\end{tikzpicture}\end{center}`],
    ["Rectangular prism",R`Find the surface area of a $5\times4\times3$ prism.`,R`$SA=2(lw+lh+wh)=2(5\cdot4+5\cdot3+4\cdot3)=2(20+15+12)=2\times47=94$.
\begin{center}\begin{tikzpicture}[scale=0.9]
\draw[thick,ex0,fill=ex0!8] (0,0) rectangle (2.2,1.6);
\draw[thick,ex0,fill=ex0!15] (0,1.6)--(0.6,2.2)--(2.8,2.2)--(2.2,1.6)--cycle;
\draw[thick,ex0,fill=ex0!20] (2.2,0)--(2.8,0.6)--(2.8,2.2)--(2.2,1.6)--cycle;
\node[below] at (1.1,0) {\scriptsize$5$};
\node[left] at (0,0.8) {\scriptsize$3$};
\node at (2.5,0.3) {\scriptsize$4$};
\node at (1.1,0.8) {\scriptsize$SA=94$};
\end{tikzpicture}\end{center}`],
    ["Cylinder",R`A cylinder has $r=4$, $h=9$. Find the surface area (in $\pi$).`,R`$SA=2\pi r^2+2\pi r h=2\pi\times16+2\pi\times4\times9=32\pi+72\pi=104\pi$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!10] (-1,0) ellipse (1 and 0.35);
\draw[thick,ex0] (-2,0)--(-2,2.6); \draw[thick,ex0] (0,0)--(0,2.6);
\draw[thick,ex0,fill=ex0!10] (-1,2.6) ellipse (1 and 0.35);
\node[below] at (-1,-0.35) {\scriptsize$r=4$};
\node[right] at (0,1.3) {\scriptsize$h=9$};
\node at (-1,3.1) {\scriptsize$SA=104\pi$};
\end{tikzpicture}\end{center}`],
    ["Sphere",R`Find the surface area of a sphere with $r=3$ (in $\pi$).`,R`$SA=4\pi r^2=4\pi\times9=36\pi$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!10] (0,0) circle (1.4);
\draw[thick,ex3,dashed] (0,0) ellipse (1.4 and 0.5);
\node[below] at (0,-1.6) {\scriptsize$r=3$};
\node at (0,1.9) {\scriptsize$SA=36\pi$};
\end{tikzpicture}\end{center}`],
    ["Edge from surface area",R`A cube has surface area $54$. Find its edge.`,R`$6s^2=54$, so $s^2=9$ and $s=3$.
\begin{center}\begin{tikzpicture}[scale=0.9]
\draw[thick,ex0,fill=ex0!8] (0,0) rectangle (1.5,1.5);
\draw[thick,ex0,fill=ex0!15] (0,1.5)--(0.5,2)--(2,2)--(1.5,1.5)--cycle;
\draw[thick,ex0,fill=ex0!20] (1.5,0)--(2,0.5)--(2,2)--(1.5,1.5)--cycle;
\node[below] at (0.75,0) {\scriptsize$s=3$};
\node at (0.75,0.75) {\scriptsize$SA=54$};
\end{tikzpicture}\end{center}`],
    ["A long box",R`Find the surface area of a $10\times2\times2$ prism.`,R`$SA=2(10\cdot2+10\cdot2+2\cdot2)=2(20+20+4)=2\times44=88$.
\begin{center}\begin{tikzpicture}[scale=0.9]
\draw[thick,ex0,fill=ex0!8] (0,0) rectangle (3.2,0.8);
\draw[thick,ex0,fill=ex0!15] (0,0.8)--(0.4,1.2)--(3.6,1.2)--(3.2,0.8)--cycle;
\draw[thick,ex0,fill=ex0!20] (3.2,0)--(3.6,0.4)--(3.6,1.2)--(3.2,0.8)--cycle;
\node[below] at (1.6,0) {\scriptsize$10$};
\node[left] at (0,0.4) {\scriptsize$2$};
\node at (3.4,0.2) {\scriptsize$2$};
\node at (1.6,2) {\scriptsize$SA=88$};
\end{tikzpicture}\end{center}`],
    ["Curved surface only",R`Find just the curved (lateral) surface of a cylinder with $r=3$, $h=10$ (in $\pi$).`,R`Lateral surface $=2\pi r h=2\pi\times3\times10=60\pi$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0!30,dashed] (-1,0) ellipse (1 and 0.35);
\draw[thick,ex3,fill=ex3!15] (-2,0)--(-2,2.6)--(0,2.6)--(0,0)--cycle;
\draw[thick,ex0!30,dashed] (-1,2.6) ellipse (1 and 0.35);
\node[below] at (-1,-0.35) {\scriptsize$r=3$};
\node[right] at (0,1.3) {\scriptsize$h=10$};
\node at (-1,3.1) {\scriptsize lateral $=60\pi$};
\end{tikzpicture}\end{center}`],
    ["Larger sphere",R`Find the surface area of a sphere with $r=5$ (in $\pi$).`,R`$SA=4\pi r^2=4\pi\times25=100\pi$.
\begin{center}\begin{tikzpicture}[scale=1]
\draw[thick,ex0,fill=ex0!10] (0,0) circle (1.7);
\draw[thick,ex3,dashed] (0,0) ellipse (1.7 and 0.6);
\node[below] at (0,-1.9) {\scriptsize$r=5$};
\node at (0,2.2) {\scriptsize$SA=100\pi$};
\end{tikzpicture}\end{center}`],
    ["Challenge --- doubling the edge",R`A cube's edge is doubled. By what factor does the surface area change?`,R`Surface area scales by $k^2=2^2=4$.
\begin{center}\begin{tikzpicture}[scale=0.8]
\draw[thick,ex0,fill=ex0!8] (0,0) rectangle (1.2,1.2);
\draw[thick,ex0,fill=ex0!15] (0,1.2)--(0.4,1.6)--(1.6,1.6)--(1.2,1.2)--cycle;
\draw[thick,ex0,fill=ex0!20] (1.2,0)--(1.6,0.4)--(1.6,1.6)--(1.2,1.2)--cycle;
\node[below] at (0.6,0) {\scriptsize$s$};
\draw[thick,ex3,fill=ex3!8] (3,0) rectangle (5.4,2.4);
\draw[thick,ex3,fill=ex3!15] (3,2.4)--(3.8,3.2)--(6.2,3.2)--(5.4,2.4)--cycle;
\draw[thick,ex3,fill=ex3!20] (5.4,0)--(6.2,0.8)--(6.2,3.2)--(5.4,2.4)--cycle;
\node[below] at (4.2,0) {\scriptsize$2s$};
\node at (4.2,4.5) {\scriptsize$\times4$ SA};
\end{tikzpicture}\end{center}`],
  ],
  problems:[
    ["Problem 1",R`A cube has edge $5$. Find its surface area.`,3.2],
    ["Problem 2",R`Find the surface area of a $6\times4\times2$ prism.`,3.6],
    ["Problem 3",R`A cylinder has $r=2$, $h=10$. Find the surface area (in $\pi$).`,3.6],
    ["Problem 4",R`Find the surface area of a sphere with $r=4$ (in $\pi$).`,3.2],
    ["Problem 5",R`A cube has edge $10$. Find its surface area.`,3.2],
    ["Problem 6",R`Find the surface area of an $8\times5\times3$ prism.`,3.6],
    ["Problem 7",R`Find the curved surface of a cylinder with $r=5$, $h=6$ (in $\pi$).`,3.4],
    ["Problem 8",R`Find the surface area of a sphere with $r=2$ (in $\pi$).`,3.2],
    ["Problem 9",R`A cube has surface area $96$. Find its edge.`,3.2],
    ["Problem 10",R`A cylinder has $r=3$, $h=3$. Find the surface area (in $\pi$).`,3.6],
    ["Problem 11",R`Find the surface area of a $2\times2\times2$ cube.`,3.0],
    ["Problem 12",R`Find the surface area of a sphere with $r=1$ (in $\pi$).`,3.0],
    ["Problem 13 --- Challenge",R`A cube's edge is tripled. By what factor does the surface area change?`,3.6],
  ],
  answers:[
    R`$150$.`, R`$2(24+12+8)=88$.`, R`$8\pi+40\pi=48\pi$.`, R`$64\pi$.`, R`$600$.`, R`$2(40+24+15)=158$.`,
    R`$60\pi$.`, R`$16\pi$.`, R`$s=4$.`, R`$18\pi+18\pi=36\pi$.`, R`$24$.`, R`$4\pi$.`, R`$\times9$.`,
  ],
},
];
