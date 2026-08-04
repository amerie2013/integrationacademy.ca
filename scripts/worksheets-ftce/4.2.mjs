const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "4.2",
  title: "The Unit Circle, Radians & Quadrant Signs",
  intro: "Radian measure, the unit circle, reference angles, and the signs of the trig functions by quadrant.",
  lesson: [
    ["Radians", R`A full circle is $2\pi$ rad $=360^\circ$. Convert degrees to radians by multiplying by $\dfrac{\pi}{180}$: $180^\circ=\pi$, $90^\circ=\tfrac{\pi}{2}$, $60^\circ=\tfrac{\pi}{3}$, $45^\circ=\tfrac{\pi}{4}$, $30^\circ=\tfrac{\pi}{6}$.`],
    ["The unit circle", R`A point at angle $\theta$ on the unit circle is $(\cos\theta,\sin\theta)$. Quadrantal angles are $0,\tfrac{\pi}{2},\pi,\tfrac{3\pi}{2}$. A <b>reference angle</b> reduces any angle to an acute one.`],
    ["Signs by quadrant", R`"All Students Take Calculus": QI all positive; QII $\sin$ positive; QIII $\tan$ positive; QIV $\cos$ positive.`],
  ],
  examples: [
    ["Example 1: To radians", R`Convert $60^\circ$ to radians.`, R`$60\cdot\dfrac{\pi}{180}=\dfrac{\pi}{3}$.`],
    ["Example 2: To degrees", R`Convert $\dfrac{3\pi}{4}$ to degrees.`, R`$\dfrac{3\pi}{4}\cdot\dfrac{180}{\pi}=135^\circ$.`],
    ["Example 3: Unit-circle point", R`Give the unit-circle coordinates at $90^\circ$.`, R`$(\cos 90^\circ,\sin 90^\circ)=(0,1)$.`],
    ["Example 4: Sign", R`What is the sign of $\cos\theta$ in Quadrant II?`, R`Negative (only $\sin$ is positive in QII).`],
    ["Example 5: Reference angle", R`Find the reference angle of $210^\circ$.`, R`$210-180=30^\circ$.`],
  ],
  questions: [
    ["Problem 1", R`Convert $45^\circ$ to radians.`, R`$\dfrac{\pi}{4}$`],
    ["Problem 2", R`Convert $\dfrac{\pi}{6}$ to degrees.`, R`$30^\circ$`],
    ["Problem 3", R`Evaluate $\cos 0$.`, R`$1$`],
    ["Problem 4", R`Evaluate $\sin\dfrac{\pi}{2}$.`, R`$1$`],
    ["Problem 5", R`In which quadrant is $\sin<0$ and $\cos>0$?`, R`Quadrant IV`],
    ["Problem 6", R`Reference angle of $150^\circ$?`, R`$30^\circ$`],
    ["Problem 7", R`$2\pi$ radians equals how many degrees?`, R`$360^\circ$`],
    ["Problem 8", R`Sign of $\tan\theta$ in Quadrant III?`, R`positive`],
  ],
};
