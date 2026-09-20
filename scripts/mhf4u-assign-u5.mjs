// MHF4U Unit 5 assignments — Trigonometric Functions.
const r = String.raw;

export const U5 = {
  "5.1": {
    topic: "Radian Measure",
    K: [
      r`Convert to radians (exact values): $150^\circ$, $315^\circ$ and $-60^\circ$. Convert to degrees: $\dfrac{7\pi}{6}$, $\dfrac{5\pi}{12}$ and 2 radians (to one decimal place).`,
      r`A sector has radius 8 cm and central angle $\dfrac{3\pi}{4}$. Find the arc length and the area of the sector, in exact form and to one decimal place.`,
      r`State the quadrant and the reference angle for each angle: $\dfrac{5\pi}{6}$, $\dfrac{4\pi}{3}$ and $\dfrac{11\pi}{6}$.`,
    ],
    T: [
      r`Explain why the formula $s=r\theta$ requires $\theta$ to be in radians. What would the formula look like if $\theta$ were in degrees, and why is the radian version simpler?`,
      r`List all angles coterminal with $-\dfrac{\pi}{3}$ in the interval $[0,4\pi]$, and write a general expression for all coterminal angles. Explain how the general expression is built.`,
    ],
    C: [
      r`Explain what one radian is, using a description of a circle and an arc whose length equals the radius, and explain why a full turn is $2\pi$ radians.`,
      r`Explain why multiplying by $\dfrac{\pi}{180}$ converts degrees to radians, and describe a quick reasonableness check for your conversions (for example, roughly how many degrees is 1 radian).`,
    ],
    A: [
      r`A bicycle wheel has radius 33 cm and turns through $1200^\circ$ while rolling along a flat road. (a) Express the rotation in radians. (b) How far does the bicycle travel? (c) Explain why the distance rolled equals the arc length $r\theta$.`,
      r`The London Eye has a radius of about 60 m and makes one revolution in 30 minutes. (a) Find the angle turned, in radians, in 10 minutes. (b) How far does a passenger capsule travel in those 10 minutes? (c) What is the area of the sector swept out by the line from the centre to a capsule in that time?`,
      r`A windshield wiper arm pivots at a point and sweeps through an angle of $\dfrac{2\pi}{3}$. The rubber blade runs from 20 cm to 60 cm from the pivot. (a) Find the area of the region cleaned by the blade. (b) Find the length of the arc traced by the outer end of the blade. (c) Explain why it is easier to use radians than degrees here.`,
    ],
  },

  "5.2": {
    topic: "Trigonometric Ratios & the Unit Circle",
    K: [
      r`Find the exact value of each: (a) $\sin\dfrac{5\pi}{6}$ (b) $\cos\dfrac{4\pi}{3}$ (c) $\tan\dfrac{7\pi}{4}$ (d) $\sin\!\left(-\dfrac{\pi}{3}\right)$.`,
      r`The point $P\left(-\dfrac35,\dfrac45\right)$ lies on the unit circle at angle $\theta$. State $\sin\theta$, $\cos\theta$ and $\tan\theta$, name the quadrant, and find the exact value of $\sin(\theta+\pi)$.`,
      r`Solve on $[0,2\pi)$, giving exact values: (a) $\sin\theta=-\dfrac{\sqrt3}{2}$ (b) $\cos\theta=\dfrac{\sqrt2}{2}$ (c) $\tan\theta=-1$.`,
    ],
    T: [
      r`If $\cos\theta=-\dfrac{5}{13}$ and $\dfrac{\pi}{2}<\theta<\pi$, find $\sin\theta$ and $\tan\theta$ exactly, and then find $\sin(\pi-\theta)$ and $\cos(\pi+\theta)$.`,
      r`Use the unit circle to explain why $\sin^2\theta+\cos^2\theta=1$. Then find $\cos\theta$ exactly if $\sin\theta=-\dfrac{7}{25}$ and $\theta$ is in the third quadrant.`,
    ],
    C: [
      r`Explain how the unit circle defines sine and cosine of any angle, and how the special-angle values for $\dfrac{\pi}{6}$, $\dfrac{\pi}{4}$ and $\dfrac{\pi}{3}$ come from two familiar triangles.`,
      r`Describe the CAST rule and use it to state the signs of sine, cosine and tangent in each quadrant. Use it to find the exact value of $\tan\dfrac{5\pi}{4}$.`,
    ],
    A: [
      r`A Ferris wheel has a radius of 25 m and its centre is 30 m above the ground. A rider at angle $\theta$ (measured counterclockwise from the horizontal through the centre) has height $h(\theta)=30+25\sin\theta$ metres. Find the exact height for $\theta=\dfrac{\pi}{6}$, $\dfrac{3\pi}{4}$, $\dfrac{4\pi}{3}$ and $\dfrac{11\pi}{6}$, and explain each result using the unit circle.`,
      r`The voltage of a household circuit is $v=170\sin\theta$ volts, where $\theta$ is the phase angle. (a) Find the exact voltage at $\theta=\dfrac{\pi}{6}$ and $\theta=\dfrac{5\pi}{4}$. (b) At which angles in $[0,2\pi)$ is the voltage exactly 85 V? (c) Explain why the voltage is negative for part of each cycle.`,
      r`The light intensity on a solar panel tilted at angle $\theta$ to the direct rays of the sun is $I=1000\cos\theta$ watts per square metre for $0\le\theta\le\dfrac{\pi}{2}$. (a) Find the exact intensity at $\theta=\dfrac{\pi}{6}$, $\dfrac{\pi}{4}$ and $\dfrac{\pi}{3}$. (b) At which angle is the intensity 500? (c) Explain what the unit circle tells you about the intensity when $\theta>\dfrac{\pi}{2}$.`,
    ],
  },

  "5.3": {
    topic: "Graphs of Sinusoidal Functions",
    K: [
      r`For $y=-3\sin\!\left(2\left(x-\dfrac{\pi}{4}\right)\right)+1$, state the amplitude, period, phase shift, midline, maximum and minimum values, and describe the reflection.`,
      r`Find the period of (a) $y=\cos\dfrac{x}{3}$ (b) $y=\sin(\pi x)$ (c) $y=5\sin(4x)-2$. State the formula you used.`,
      r`Write the equation of a cosine function with amplitude 2.5, period 8, a phase shift of 1 unit to the right and midline $y=4$.`,
    ],
    T: [
      r`A sinusoidal function has a maximum at $\left(\dfrac{\pi}{6},7\right)$ and the next minimum at $\left(\dfrac{\pi}{2},-1\right)$. Determine its amplitude, period and midline, and write a cosine equation. Verify it with the minimum point.`,
      r`Show that $y=5\sin(3x)$ and $y=5\cos\!\left(3\left(x-\dfrac{\pi}{6}\right)\right)$ have the same graph. Explain why there are infinitely many correct equations for one sinusoidal graph.`,
    ],
    C: [
      r`Explain how each of $a$, $k$, $d$ and $c$ changes the graph of $y=a\sin\big(k(x-d)\big)+c$, and describe how you would read each of them from a graph.`,
      r`A classmate says "$y=\sin(5x)$ has a period of 5." Identify the error, give the correct period and explain why the period is $\dfrac{2\pi}{k}$.`,
    ],
    A: [
      r`The depth of water at a wharf in Nova Scotia, in metres, is $d(t)=5.5\cos\!\left(\dfrac{2\pi}{12.4}(t-2.5)\right)+7.5$, where $t$ is in hours after midnight. (a) State the amplitude, period and midline and interpret each. (b) When is the first high tide and what is the depth? (c) Find the depth at $t=6$.`,
      r`A Ferris wheel of radius 20 m turns once every 40 seconds. Its lowest point is 2 m above the ground and a rider starts there at $t=0$. (a) Write an equation for the rider's height $h(t)$. (b) Find the height at $t=10$ and at $t=30$. (c) Explain how you chose between a sine and a cosine model.`,
      r`The number of hours of daylight in Toronto is modelled by $D(t)=3.1\sin\!\left(\dfrac{2\pi}{365}(t-80)\right)+12.2$, where $t$ is the day of the year. (a) Interpret the amplitude, midline, period and phase shift. (b) Find the daylight on day 172, the summer solstice. (c) Estimate for how many days the daylight exceeds 14 hours.`,
    ],
  },

  "5.4": {
    topic: "Reciprocal Trigonometric Functions",
    K: [
      r`Find the exact value of each: (a) $\csc\dfrac{7\pi}{6}$ (b) $\sec\dfrac{5\pi}{6}$ (c) $\cot\dfrac{3\pi}{4}$ (d) $\csc\!\left(-\dfrac{\pi}{4}\right)$.`,
      r`For $y=\cot x$, state the domain, the range, the $x$-intercepts and the equations of the vertical asymptotes on $[0,2\pi]$, and say on which intervals the function is decreasing.`,
      r`If $\cos\theta=-\dfrac35$ and $\theta$ is in the third quadrant, find $\sin\theta$, $\csc\theta$, $\sec\theta$ and $\cot\theta$.`,
    ],
    T: [
      r`Explain why $y=\csc x$ never takes a value between $-1$ and $1$, state its range, and describe how the local minimum and maximum points of $y=\csc x$ relate to the points of $y=\sin x$.`,
      r`For $y=3\sec(2x)$, find the period, the vertical asymptotes on $[0,\pi]$ and the range, and sketch the graph showing the related cosine curve.`,
    ],
    C: [
      r`Explain, using $\csc x=\dfrac{1}{\sin x}$, why the cosecant graph has vertical asymptotes and how it wraps around the graph of the sine function.`,
      r`Explain how you evaluate $\cot\theta$ at an angle where $\tan\theta$ is undefined, and at an angle where $\tan\theta=0$. Use $\theta=\dfrac{3\pi}{2}$ and $\theta=2\pi$ as examples.`,
    ],
    A: [
      r`A searchlight is 200 m from a straight wall and shines a beam at angle $\theta$ from the perpendicular. The beam's length is $L(\theta)=200\sec\theta$. (a) Find $L$ for $\theta=0$, $\dfrac{\pi}{6}$ and $\dfrac{\pi}{3}$. (b) Explain, using the asymptote of $\sec\theta$, what happens as $\theta\to\dfrac{\pi}{2}$. (c) At what angle is the beam 400 m long?`,
      r`A 40 m building casts a shadow of length $s=40\cot\theta$ metres when the sun's angle of elevation is $\theta$. (a) Find $s$ for $\theta=\dfrac{\pi}{6}$, $\dfrac{\pi}{4}$ and $\dfrac{\pi}{3}$. (b) Describe what happens to the shadow near sunrise and sunset and relate it to the graph of $\cot\theta$. (c) What is the shadow length when the sun is directly overhead?`,
      r`A roof rafter spans a horizontal run of 5 m at a roof pitch angle $\theta$, so its length is $L=5\sec\theta$ and the rise is $5\tan\theta$. (a) Find the rafter length for $\theta=\dfrac{\pi}{6}$, $\dfrac{\pi}{4}$ and $\dfrac{\pi}{3}$. (b) A different roof has a horizontal run of 12 m and a rise of 5 m. Find its pitch angle $\theta$ and its rafter length. (c) Explain why a pitch of $\dfrac{\pi}{2}$ is impossible.`,
    ],
  },
};
