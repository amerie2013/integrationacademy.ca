const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "8.5",
  title: "Derivatives of Exponential, Log & Trig Functions",
  intro: "The derivatives of the exponential, logarithmic, and trigonometric functions, combined with the chain rule.",
  lesson: [
    ["Exponential & logarithmic", R`$\dfrac{d}{dx}e^x=e^x$; $\dfrac{d}{dx}\ln x=\dfrac1x$; $\dfrac{d}{dx}a^x=a^x\ln a$.`],
    ["Trigonometric", R`$\dfrac{d}{dx}\sin x=\cos x$; $\dfrac{d}{dx}\cos x=-\sin x$; $\dfrac{d}{dx}\tan x=\sec^2 x$.`],
    ["With the chain rule", R`$\dfrac{d}{dx}e^{g(x)}=e^{g(x)}g'(x)$; $\dfrac{d}{dx}\sin\big(g(x)\big)=\cos\big(g(x)\big)g'(x)$; $\dfrac{d}{dx}\ln\big(g(x)\big)=\dfrac{g'(x)}{g(x)}$.`],
  ],
  examples: [
    ["Example 1", R`Differentiate $e^x$.`, R`$e^x$.`],
    ["Example 2", R`Differentiate $\sin x$.`, R`$\cos x$.`],
    ["Example 3", R`Differentiate $\ln x$.`, R`$\dfrac1x$.`],
    ["Example 4: Chain rule", R`Differentiate $e^{2x}$.`, R`$2e^{2x}$.`],
    ["Example 5", R`Differentiate $\cos x$.`, R`$-\sin x$.`],
  ],
  questions: [
    ["Problem 1", R`Differentiate $e^x$.`, R`$e^x$`],
    ["Problem 2", R`Differentiate $\sin x$.`, R`$\cos x$`],
    ["Problem 3", R`Differentiate $\cos x$.`, R`$-\sin x$`],
    ["Problem 4", R`Differentiate $\ln x$.`, R`$\dfrac1x$`],
    ["Problem 5", R`Differentiate $\tan x$.`, R`$\sec^2 x$`],
    ["Problem 6", R`Differentiate $e^{3x}$.`, R`$3e^{3x}$`],
    ["Problem 7", R`Differentiate $\sin(2x)$.`, R`$2\cos(2x)$`],
    ["Problem 8", R`Differentiate $\ln(x^2)$.`, R`$\dfrac2x$`],
  ],
};
