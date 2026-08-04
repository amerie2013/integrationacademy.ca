const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "4.4",
  title: "Sum, Difference & Multiple-Angle Formulas",
  intro: "The sum and difference formulas and the double- and half-angle formulas — used to find exact values and to simplify.",
  lesson: [
    ["Sum & difference", R`$\sin(A\pm B)=\sin A\cos B\pm\cos A\sin B$; $\cos(A\pm B)=\cos A\cos B\mp\sin A\sin B$; $\tan(A\pm B)=\dfrac{\tan A\pm\tan B}{1\mp\tan A\tan B}$.`],
    ["Double-angle", R`$\sin 2A=2\sin A\cos A$; $\cos 2A=\cos^2 A-\sin^2 A=2\cos^2 A-1=1-2\sin^2 A$; $\tan 2A=\dfrac{2\tan A}{1-\tan^2 A}$.`],
    ["Half-angle", R`$\sin\dfrac{A}{2}=\pm\sqrt{\dfrac{1-\cos A}{2}}$, $\cos\dfrac{A}{2}=\pm\sqrt{\dfrac{1+\cos A}{2}}$ (sign by quadrant).`],
  ],
  examples: [
    ["Example 1: Exact value", R`Find $\cos 75^\circ$ using $75=45+30$.`, R`$\cos45\cos30-\sin45\sin30=\dfrac{\sqrt2}{2}\cdot\dfrac{\sqrt3}{2}-\dfrac{\sqrt2}{2}\cdot\dfrac12=\dfrac{\sqrt6-\sqrt2}{4}$.`],
    ["Example 2: Double sine", R`If $\sin A=\dfrac35$ and $\cos A=\dfrac45$, find $\sin 2A$.`, R`$2\cdot\dfrac35\cdot\dfrac45=\dfrac{24}{25}$.`],
    ["Example 3: Double cosine", R`With $\sin A=\dfrac35$, find $\cos 2A$.`, R`$1-2\sin^2A=1-2\cdot\dfrac{9}{25}=\dfrac{7}{25}$.`],
    ["Example 4: Check with an identity", R`Verify $\sin 60^\circ$ via the double angle of $30^\circ$.`, R`$2\sin30\cos30=2\cdot\dfrac12\cdot\dfrac{\sqrt3}{2}=\dfrac{\sqrt3}{2}$. ✓`],
    ["Example 5: Difference formula", R`State $\cos(A-B)$.`, R`$\cos A\cos B+\sin A\sin B$.`],
  ],
  questions: [
    ["Problem 1", R`State the formula for $\sin 2A$.`, R`$2\sin A\cos A$`],
    ["Problem 2", R`In $\cos(A+B)=\cos A\cos B\ \_\ \sin A\sin B$, the sign is?`, R`minus`],
    ["Problem 3", R`If $\sin A=\tfrac35$, $\cos A=\tfrac45$, find $\sin 2A$.`, R`$\dfrac{24}{25}$`],
    ["Problem 4", R`$\cos 2A=2\cos^2 A-\ ?$`, R`$1$`],
    ["Problem 5", R`$\sin(A-B)=\sin A\cos B-\ ?$`, R`$\cos A\sin B$`],
    ["Problem 6", R`If $\sin A=\tfrac35$, find $\cos 2A$.`, R`$\dfrac{7}{25}$`],
    ["Problem 7", R`$\tan 2A=\dfrac{2\tan A}{1-\ ?}$`, R`$\tan^2 A$`],
    ["Problem 8", R`Using $\cos 2A=\cos^2A-\sin^2A$ with $A=30^\circ$, find $\cos 60^\circ$.`, R`$\dfrac12$`],
  ],
};
