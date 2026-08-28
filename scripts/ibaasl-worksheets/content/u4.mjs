// IB AA SL worksheets — Unit 4: Statistics and Probability. Original problems.
// 9 worked examples + 13 practice questions per worksheet.
const r = String.raw;
const U = "4: Statistics and Probability";

export default [
  {
    code: "4.1", unit: U, title: "Sampling and Presenting Data",
    intro: r`Good sampling avoids bias; grouped data needs a midpoint estimate for its mean.`,
    ideas: [
      r`Stratified sampling: sample each subgroup proportionally to its size.`,
      r`Estimated mean from grouped data: $\bar x\approx\dfrac{\sum fm}{\sum f}$, using class midpoints $m$.`,
    ],
    examples: [
      { t: "Stratified sample sizes", body: r`A population of 1000 has 350 in group P, 650 in group Q. Find stratified sample sizes for a total sample of 40.\soln
Fraction $=40/1000=1/25$. P: $350/25=14$. Q: $650/25=26$.\\[3pt]\textbf{Conclusion:} 14 from P, 26 from Q.` },
      { t: "Bias critique", body: r`A survey on gym habits only interviews people leaving a gym at 6am. Identify the bias.\soln
This is convenience sampling of a specific subgroup (early-morning gym-goers), likely the most dedicated exercisers.\\[3pt]\textbf{Conclusion:} over-represents highly motivated exercisers; underestimates how rarely the average person exercises.` },
      { t: "Grouped mean", body: r`Estimate the mean from: $0$--$10$ (freq 5), $10$--$20$ (freq 8), $20$--$30$ (freq 7).\soln
Midpoints $5,15,25$. $\sum fm=25+120+175=320$; $\sum f=20$.\\[3pt]\textbf{Conclusion:} $\bar x=16$.` },
      { t: "Modal class", body: r`State the modal class for the data in the previous example.\soln
Highest frequency (8) is in the $10$--$20$ class.\\[3pt]\textbf{Conclusion:} modal class $10$--$20$.` },
      { t: "Systematic sampling", body: r`A quality inspector checks every 20th item off a production line of 2000 items. State the sampling method and the sample size.\soln
This is systematic sampling (constant interval $k=20$).\\[3pt]\textbf{Conclusion:} sample size $=2000/20=100$ items.` },
      { t: "Estimating the median from grouped data", body: r`Estimate the median class for the grouped data $0$--$10$(4), $10$--$20$(9), $20$--$30$(7).\soln
Total frequency $=20$; the median (10th/11th value) falls where the cumulative frequency first reaches $10$: after $4$ (in $0$--$10$) plus $9$ (in $10$--$20$) $=13\geq10$.\\[3pt]\textbf{Conclusion:} median class is $10$--$20$.` },
      { t: "Comparing two grouped means", body: r`Two classes' test scores are grouped as: Class A --- $60$--$70$(3), $70$--$80$(9), $80$--$90$(3); Class B --- $60$--$70$(6), $70$--$80$(6), $80$--$90$(3). Compare their estimated means.\soln
Class A: $\bar x=\dfrac{3(65)+9(75)+3(85)}{15}=\dfrac{195+675+255}{15}=\dfrac{1125}{15}=75$.\\[3pt]
Class B: $\bar x=\dfrac{6(65)+6(75)+3(85)}{15}=\dfrac{390+450+255}{15}=\dfrac{1095}{15}=73$.\\[3pt]\textbf{Conclusion:} Class A's estimated mean (75) is slightly higher than Class B's (73).` },
      { t: "Application --- stratified sample by three groups", body: r`A survey of 900 residents (500 downtown, 250 suburban, 150 rural) needs a stratified sample of 90. Find each group's sample size.\soln
Fraction $=90/900=1/10$.\\[3pt]\textbf{Conclusion:} downtown $50$, suburban $25$, rural $15$.` },
      { t: "Identifying a sampling frame issue", body: r`A phone survey uses only listed landline numbers to estimate opinions of all adults. Explain a limitation of this sampling frame.\soln
Many adults, especially younger ones, don't have listed landlines --- they're mobile-only or unlisted.\\[3pt]\textbf{Conclusion:} the sampling frame excludes a large, systematically different portion of the population, biasing the results.` },
    ],
    questions: [
      { ask: r`A population of 600 has 220 in group A, 380 in group B; find stratified sample sizes for a sample of 30.` },
      { ask: r`Estimate the mean from: $0$--$4$ (freq 6), $4$--$8$ (freq 9), $8$--$12$ (freq 5).` },
      { ask: r`State the modal class for the data in the previous question.` },
      { ask: r`A researcher only surveys people who respond to an online ad; explain a likely bias.` },
      { ask: r`Estimate the mean from: $10$--$20$ (freq 3), $20$--$30$ (freq 8), $30$--$40$ (freq 12), $40$--$50$ (freq 7).`, challenge: true, ws: "3cm" },
      { ask: r`A school of 1200 (700 juniors, 500 seniors) wants a stratified sample of 60; find sample sizes for each group.` },
      { ask: r`Explain why a census (surveying an entire population) is not always more useful than a well-designed sample.` },
      { ask: r`An inspector checks every 15th item from a batch of 1500; state the method and sample size.` },
      { ask: r`Estimate the median class for: $0$--$5$(2), $5$--$10$(6), $10$--$15$(8), $15$--$20$(4).` },
      { ask: r`A survey of 800 residents (450 urban, 200 suburban, 150 rural) needs a stratified sample of 80; find each group's sample size.` },
      { ask: r`A university surveys only students in the library on a Friday night to estimate typical study habits; explain the bias.`, challenge: true, ws: "3cm" },
      { ask: r`Two classes' scores are grouped: Class C --- $50$--$60$(4),$60$--$70$(10),$70$--$80$(6); Class D --- $50$--$60$(8),$60$--$70$(6),$70$--$80$(6). Compare their estimated means.`, challenge: true, ws: "3.4cm" },
      { ask: r`A pollster only calls numbers from a decade-old phone directory; explain a limitation of this sampling frame.`, challenge: true, ws: "3cm" },
    ],
    answers: [
      r`fraction $=1/20$: A: $11$, B: $19$`, r`midpoints $2,6,10$; $\sum fm=12+54+50=116$, $\sum f=20$: $\bar x=5.8$`,
      r`$4$--$8$ (freq 9)`, r`over-represents people active online / interested enough to respond, under-represents everyone else`,
      r`midpoints $15,25,35,45$; $\sum fm=45+200+420+315=980$, $\sum f=30$: $\bar x\approx32.7$`,
      r`fraction $=1/20$: juniors $35$, seniors $25$`,
      r`a census can be slower, costlier, and harder to keep accurate/consistent across every member than a well-designed representative sample`,
      r`systematic sampling; sample size $=1500/15=100$`,
      r`cumulative: $2,8,16,20$; the median position (10th value) falls once cumulative reaches $\geq10$, in the $10$--$15$ class`,
      r`fraction $=80/800=1/10$: urban $45$, suburban $20$, rural $15$`,
      r`over-represents heavy studiers who use the library late on a Friday, under-represents typical/lighter studiers`,
      r`Class C: $\bar x=\tfrac{4(55)+10(65)+6(75)}{20}=\tfrac{220+650+450}{20}=\tfrac{1320}{20}=66$; Class D: $\bar x=\tfrac{8(55)+6(65)+6(75)}{20}=\tfrac{440+390+450}{20}=\tfrac{1280}{20}=64$; Class C's mean is slightly higher`,
      r`the directory is outdated --- misses newer residents, movers, and increasingly excludes people without landlines, skewing who gets reached`,
    ],
  },
  {
    code: "4.2", unit: U, title: "Measures of Central Tendency and Spread",
    intro: r`Standard deviation, quartiles, and the outlier rule describe how spread out data is.`,
    ideas: [
      r`$\sigma=\sqrt{\dfrac{\sum(x-\bar x)^2}{n}}$.`,
      r`Outlier rule: below $Q_1-1.5\,IQR$ or above $Q_3+1.5\,IQR$.`,
      r`Adding a constant shifts the mean, not the SD; multiplying scales both.`,
    ],
    examples: [
      { t: "Mean and median", body: r`Find the mean and median of $6,6,11,14,23$.\soln
Mean $=\dfrac{60}{5}=12$; median (middle value) $=11$.\\[3pt]\textbf{Conclusion:} mean 12, median 11.` },
      { t: "Standard deviation", body: r`Find the SD of $4,6,8,10,12$.\soln
Mean $=8$; deviations squared: $16,4,0,4,16$; sum $=40$; $\sigma=\sqrt{8}$.\\[3pt]\textbf{Conclusion:} $\sigma\approx2.83$.` },
      { t: "Outlier check", body: r`A data set has $Q_1=22$, $Q_3=38$. Is $65$ an outlier?\soln
$IQR=16$; upper fence $=38+24=62$.\\[3pt]\textbf{Conclusion:} yes, $65>62$.` },
      { t: "Transformation", body: r`A data set has mean 55, SD 6. Every value is tripled, then 4 is subtracted. Find the new mean and SD.\soln
Tripling: mean $165$, SD $18$; subtracting 4 changes only the mean.\\[3pt]\textbf{Conclusion:} new mean $161$, SD $18$.` },
      { t: "Lower outlier check", body: r`A data set has $Q_1=30$, $Q_3=50$. Is $2$ an outlier?\soln
$IQR=20$; lower fence $=30-30=0$.\\[3pt]\textbf{Conclusion:} no, since $2>0$ (it's above the lower fence).` },
      { t: "Finding a missing data value from the mean", body: r`Five values have a mean of 14: $8,12,17,19,x$. Find $x$.\soln
Sum must be $5(14)=70$. $8+12+17+19=56$, so $x=70-56$.\\[3pt]\textbf{Conclusion:} $x=14$.` },
      { t: "SD from a frequency table", body: r`Find the SD of the data $2$(freq 2), $4$(freq 3), $6$(freq 1) (6 values total).\soln
Mean $=\dfrac{2(2)+4(3)+6(1)}{6}=\dfrac{4+12+6}{6}=\dfrac{22}{6}\approx3.67$.\\[3pt]
Deviations squared (weighted): $2(2-3.67)^2+3(4-3.67)^2+1(6-3.67)^2\approx2(2.79)+3(0.109)+1(5.43)\approx11.14$.\\[3pt]\textbf{Conclusion:} $\sigma=\sqrt{11.14/6}\approx1.36$.` },
      { t: "Comparing spread using range vs IQR", body: r`Data set E has range 40 but IQR 5; data set F has range 20 but IQR 12. Which is more consistent in its middle 50\%, and why might the ranges be misleading?\soln
IQR measures the middle 50\% spread, ignoring extreme values; E's small IQR (5) shows most data is tightly clustered despite one or two extreme outliers stretching the range.\\[3pt]\textbf{Conclusion:} E is more consistent in its middle half; its large range is likely driven by outliers, which the IQR correctly ignores.` },
      { t: "Application --- effect of a scaling error", body: r`A scale reads every mass 2 kg too high, and additionally every reading was mistakenly recorded in a unit requiring multiplication by 1.1. If the true mean is 60 kg and true SD is 4 kg, find the reported mean and SD (assume the $+2$ happened before the $\times1.1$).\soln
Add 2: mean $62$, SD unchanged $4$. Multiply by $1.1$: mean $62(1.1)=68.2$, SD $4(1.1)=4.4$.\\[3pt]\textbf{Conclusion:} reported mean $68.2$ kg, SD $4.4$ kg.` },
    ],
    questions: [
      { ask: r`Find the mean and median of $2,5,9,12,27$.` },
      { ask: r`Find the SD of $3,7,11,15,19$.` },
      { ask: r`A data set has $Q_1=10$, $Q_3=20$. Is $36$ an outlier?` },
      { ask: r`A data set has mean 30, SD 4. Every value has 12 added. Find the new mean and SD.` },
      { ask: r`A data set has mean 20, SD 3. Every value is doubled. Find the new mean and SD.` },
      { ask: r`Class A: median 80, IQR 6. Class B: median 76, IQR 18. Compare performance and consistency.` },
      { ask: r`A data set has five-number summary $5,15,20,28,55$. Determine whether $55$ is an outlier.`, challenge: true, ws: "3.2cm" },
      { ask: r`A data set has mean 44 and SD 5. Every value is halved and then 10 is added. Find the new mean and SD.`, challenge: true, ws: "3.2cm" },
      { ask: r`A data set has $Q_1=25$, $Q_3=45$. Is the value $1$ an outlier?` },
      { ask: r`Five values have a mean of 20: $14,18,22,25,x$. Find $x$.` },
      { ask: r`Find the SD of the data $3$(freq 1), $5$(freq 4), $7$(freq 1) (6 values total).`, challenge: true, ws: "3.4cm" },
      { ask: r`Data set G has range 50 but IQR 6; data set H has range 15 but IQR 10. Which is more consistent in its middle 50\%, and explain why the ranges alone would be misleading.`, challenge: true, ws: "3.2cm" },
      { ask: r`A sensor overreads every value by 3 units, and its readings must then be multiplied by 1.2 to correct the unit. If the true mean is 50 and true SD is 6, find the reported mean and SD.`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`mean $=11$, median $=9$`, r`mean $=11$; deviations sq: $64,16,0,16,64=160$; $\sigma=\sqrt{32}\approx5.66$`,
      r`$IQR=10$, fence $=20+15=35$; $36>35$: yes, outlier`, r`mean $42$, SD unchanged $4$`,
      r`mean $40$, SD $6$`, r`A has higher median (better typical score) and smaller IQR (more consistent)`,
      r`$IQR=13$, fence $=28+19.5=47.5$; $55>47.5$: yes, outlier`,
      r`halving: mean $22$, SD $2.5$; $+10$ changes only mean: mean $32$, SD $2.5$`,
      r`$IQR=20$, lower fence $=25-30=-5$; $1>-5$: not an outlier`,
      r`sum must be $100$; $14+18+22+25=79$, so $x=21$`,
      r`mean $=\tfrac{3+20+7}{6}=5$; deviations sq (weighted): $1(4)+4(0)+1(4)=8$; $\sigma=\sqrt{8/6}\approx1.15$`,
      r`H is more consistent in its middle half (smaller IQR); G's large range is likely driven by one or two extreme outliers, which the IQR ignores`,
      r`add 3: mean $53$, SD unchanged $6$; multiply by $1.2$: mean $63.6$, SD $7.2$`,
    ],
  },
  {
    code: "4.3", unit: U, title: "Bivariate Data and Correlation",
    intro: r`Correlation measures linear association; a regression line predicts, but extrapolation is risky.`,
    ideas: [
      r`$r$ near $\pm1$: strong linear relationship; near 0: weak/none.`,
      r`Interpolation (inside the data range) is more trustworthy than extrapolation (outside it).`,
    ],
    examples: [
      { t: "Interpret r", body: r`A study finds $r=-0.82$ between hours of TV watched and test scores. Interpret this.\soln
Strong negative correlation --- more TV watched tends to associate with lower scores.\\[3pt]\textbf{Conclusion:} strong negative correlation.` },
      { t: "Interpolation", body: r`A line $y=2.1x+8$ fits data for $x\in[0,20]$. Predict $y$ at $x=12$ and classify.\soln
$y=2.1(12)+8=25.2+8$; $x=12$ is inside $[0,20]$.\\[3pt]\textbf{Conclusion:} $y=33.2$; interpolation.` },
      { t: "Extrapolation risk", body: r`Using the same line, predict $y$ at $x=80$ and explain the risk.\soln
$y=2.1(80)+8=176$; far outside $[0,20]$.\\[3pt]\textbf{Conclusion:} $y=176$ mathematically, but unreliable since it's extrapolated well beyond the data.` },
      { t: "Slope interpretation", body: r`A line relating monthly rent $x$ (\$100s) to apartment size $y$ (m$^2$) is $y=3.5x+12$. Interpret the slope.\soln
Each extra \$100 in monthly rent is associated with about $3.5$ more m$^2$ of space, on average.\\[3pt]\textbf{Conclusion:} slope $3.5$: more rent associates with more space.` },
      { t: "Comparing correlation strength between two data sets", body: r`Data set M has $r=0.61$ between exercise hours and mood score; data set N has $r=0.88$ between sleep hours and mood score. Which variable shows a stronger linear relationship with mood?\soln
Compare $|r|$ values: $0.88>0.61$.\\[3pt]\textbf{Conclusion:} sleep hours shows the stronger linear relationship with mood.` },
      { t: "Predicting and reasoning about reliability near the data's edge", body: r`A line $y=1.8x+22$ fits data for $x\in[5,25]$. Predict $y$ at $x=24$ and comment on reliability.\soln
$y=1.8(24)+22=43.2+22=65.2$.\\[3pt]\textbf{Conclusion:} $x=24$ is inside $[5,25]$ (interpolation), so this prediction is reasonably reliable, though close to the data's edge.` },
      { t: "Using two data points to build a rough line, then interpreting", body: r`A relationship passes near $(2,10)$ and $(8,34)$. Find the approximate slope and interpret it.\soln
$m=\dfrac{34-10}{8-2}=\dfrac{24}{6}=4$.\\[3pt]\textbf{Conclusion:} each unit increase in $x$ is associated with about a 4-unit increase in $y$.` },
      { t: "Application --- identifying a confounding variable", body: r`A study finds a strong positive correlation between the number of firefighters sent to a fire and the amount of damage caused. Explain why this doesn't mean firefighters cause damage.\soln
Larger fires require more firefighters AND cause more damage --- fire size is the confounding variable driving both.\\[3pt]\textbf{Conclusion:} the correlation reflects a shared cause (fire size), not firefighters causing damage.` },
      { t: "Extrapolation with a physically impossible result", body: r`A line $y=-5x+120$ models a runner's finishing time (minutes) vs training weeks $x$, fit for $x\in[0,15]$. Predict $y$ at $x=30$ and explain why the result signals extrapolation has failed.\soln
$y=-5(30)+120=-150+120=-30$.\\[3pt]\textbf{Conclusion:} a negative finishing time is physically impossible --- a clear sign this extrapolation, far outside $[0,15]$, has broken down.` },
    ],
    questions: [
      { ask: r`Describe the correlation implied by $r=0.25$.` },
      { ask: r`Describe the correlation implied by $r=-0.97$.` },
      { ask: r`A line $y=4x+15$ fits data for $x\in[2,18]$; predict $y$ at $x=10$ and classify (interpolation/extrapolation).` },
      { ask: r`Using the same line, predict $y$ at $x=60$ and explain the risk.` },
      { ask: r`A line relates study hours $x$ to score $y$: $y=5.2x+48$; interpret the $y$-intercept in context.` },
      { ask: r`Ice cream sales and sunscreen sales are strongly positively correlated. Explain why this doesn't mean one causes the other.` },
      { ask: r`A line $y=-2.4x+90$ models a car's value (\$1000s) vs its age $x$ (years), fit on data for $x\in[0,10]$; predict the value at $x=25$ and explain why this prediction is almost certainly wrong.`, challenge: true, ws: "3.4cm" },
      { ask: r`Data set P has $r=0.45$ between coffee intake and typing speed; data set Q has $r=-0.79$ between screen brightness and eye strain relief. Which shows the stronger linear relationship?` },
      { ask: r`A line $y=2.2x+30$ fits data for $x\in[4,20]$; predict $y$ at $x=19$ and comment on reliability.` },
      { ask: r`A relationship passes near $(3,15)$ and $(9,45)$; find the approximate slope and interpret it.` },
      { ask: r`A study finds cities with more ice cream shops also have more reported sunburns. Identify the confounding variable and explain.`, challenge: true, ws: "3cm" },
      { ask: r`A line $y=-3x+80$ models a hiker's remaining energy (\%) vs distance walked $x$ (km), fit for $x\in[0,20]$; predict energy at $x=35$ and explain why the result is physically impossible.`, challenge: true, ws: "3.2cm" },
      { ask: r`A line $y=6.5x+40$ relates advertising spend (\$100s) to weekly sales; interpret both the slope and the intercept in context.`, challenge: true, ws: "3cm" },
    ],
    answers: [
      r`very weak positive correlation`, r`very strong negative correlation`,
      r`$y=55$; interpolation (10 is inside [2,18])`,
      r`$y=255$; extrapolation, far outside the fitted range, so unreliable`,
      r`predicted score with 0 study hours is 48 --- a baseline from prior knowledge/other factors`,
      r`a confounding variable (hot weather) increases both independently`,
      r`$y=-2.4(25)+90=30$; but a car's value can't go negative and doesn't depreciate linearly forever, so extrapolating this far is unrealistic`,
      r`$|-0.79|>|0.45|$: screen brightness/eye strain shows the stronger relationship`,
      r`$y=2.2(19)+30=71.8$; $x=19$ is inside $[4,20]$ but near the edge, so reasonably reliable but worth caution`,
      r`$m=\tfrac{45-15}{9-3}=5$; each unit increase in $x$ associates with about a 5-unit increase in $y$`,
      r`warmer weather (or tourist season) is the confounding variable --- it independently increases both ice cream shop visits and sun exposure/sunburns`,
      r`$y=-3(35)+80=-25$; negative remaining energy is impossible, showing the extrapolation (far outside $[0,20]$) has failed`,
      r`slope $6.5$: each extra \$100 spent associates with about 6.5 more weekly sales; intercept $40$: baseline sales with no advertising spend`,
    ],
  },
  {
    code: "4.4", unit: U, title: "Probability Basics and Venn Diagrams",
    intro: r`Venn diagrams and the addition rule solve "at least one" and unknown-overlap problems.`,
    ideas: [
      r`$P(A\cup B)=P(A)+P(B)-P(A\cap B)$.`,
      r`Independent: $P(A\cap B)=P(A)P(B)$. Mutually exclusive: $P(A\cap B)=0$.`,
    ],
    examples: [
      { t: "Addition rule", body: r`Of 40 students, 24 study French, 18 study Spanish, 9 study both. Find $P(\text{at least one})$.\soln
$P(F\cup S)=\tfrac{24}{40}+\tfrac{18}{40}-\tfrac{9}{40}=\tfrac{33}{40}$.\\[3pt]\textbf{Conclusion:} $\tfrac{33}{40}$.` },
      { t: "Unknown overlap", body: r`Of 60 people, 38 like tea, 30 like coffee, 8 like neither. Find how many like both.\soln
At least one $=52$. $52=38+30-\text{both}\Rightarrow\text{both}=16$.\\[3pt]\textbf{Conclusion:} $16$.` },
      { t: "Independence check", body: r`$P(A)=0.5$, $P(B)=0.4$, $P(A\cap B)=0.2$. Are $A,B$ independent?\soln
$P(A)P(B)=0.2$, matches $P(A\cap B)$.\\[3pt]\textbf{Conclusion:} yes, independent.` },
      { t: "Mutually exclusive check", body: r`$P(C)=0.35$, $P(D)=0.4$, $P(C\cup D)=0.75$. Are $C,D$ mutually exclusive?\soln
$P(C\cap D)=0.35+0.4-0.75=0$.\\[3pt]\textbf{Conclusion:} yes, $P(C\cap D)=0$.` },
      { t: "Finding a region only in one set", body: r`Of 70 people, 45 like hiking, 30 like biking, 12 like both. Find $P(\text{hiking only})$.\soln
Hiking only $=45-12=33$.\\[3pt]\textbf{Conclusion:} $P(\text{hiking only})=\tfrac{33}{70}$.` },
      { t: "Neither region from a Venn diagram", body: r`Of 90 people, 50 like jazz, 40 like classical, 20 like both. Find $P(\text{neither})$.\soln
At least one $=50+40-20=70$; neither $=90-70=20$.\\[3pt]\textbf{Conclusion:} $P(\text{neither})=\tfrac{20}{90}=\tfrac29$.` },
      { t: "Three-fact independence verification", body: r`A die is rolled and a coin is flipped. Let $A$="die shows 4" and $B$="coin shows heads". Verify $A,B$ are independent.\soln
$P(A)=\tfrac16$, $P(B)=\tfrac12$, $P(A\cap B)=\tfrac1{12}$ (one specific outcome out of 12 equally likely).\\[3pt]\textbf{Conclusion:} $P(A)P(B)=\tfrac16\cdot\tfrac12=\tfrac1{12}=P(A\cap B)$ --- confirmed independent (as expected, since a die and coin don't influence each other).` },
      { t: "Solving for a probability given independence", body: r`$A,B$ are independent, $P(A)=0.6$, $P(A\cup B)=0.88$. Find $P(B)$.\soln
$P(A\cup B)=P(A)+P(B)-P(A)P(B)\Rightarrow0.88=0.6+P(B)-0.6P(B)$.\\[3pt]
$0.88=0.6+0.4P(B)\Rightarrow0.28=0.4P(B)$.\\[3pt]\textbf{Conclusion:} $P(B)=0.7$.` },
      { t: "Application --- overlapping subscriptions", body: r`Of 500 households, 320 subscribe to streaming service X, 210 to service Y, and 80 subscribe to neither. Find how many subscribe to both, and $P(\text{exactly one})$.\soln
At least one $=500-80=420$; both $=320+210-420=110$.\\[3pt]\textbf{Conclusion:} both $=110$; exactly one $=420-110=310\Rightarrow P=\tfrac{310}{500}=0.62$.` },
    ],
    questions: [
      { ask: r`$P(A)=0.6$, $P(B)=0.25$, $P(A\cap B)=0.1$. Find $P(A\cup B)$.` },
      { ask: r`Of 50 people, 30 own a car, 22 own a bike, 10 own neither. Find how many own both.` },
      { ask: r`$P(A)=0.4$, $P(B)=0.3$, $P(A\cap B)=0.12$. Are $A,B$ independent?` },
      { ask: r`$P(C)=0.5$, $P(D)=0.3$. If mutually exclusive, find $P(C\cup D)$.` },
      { ask: r`Of 80 gym members, 50 use weights, 35 use cardio, everyone uses at least one. Find how many use both.` },
      { ask: r`A survey of 100 finds 65 like pop music, 45 like rock, and $x$ like both, with 15 liking neither. Find $x$ and $P(\text{pop only})$.`, challenge: true, ws: "3.4cm" },
      { ask: r`Explain why two mutually exclusive events with nonzero probability can never be independent.` },
      { ask: r`Of 60 people, 40 like tea, 25 like coffee, 10 like both. Find $P(\text{tea only})$.` },
      { ask: r`Of 100 people, 55 like reading, 45 like gaming, 20 like both. Find $P(\text{neither})$.` },
      { ask: r`A card is drawn from a deck and a coin flipped. Let $A$="card is a King", $B$="coin shows tails". Verify $A,B$ are independent.` },
      { ask: r`$A,B$ are independent, $P(A)=0.5$, $P(A\cup B)=0.75$. Find $P(B)$.`, challenge: true, ws: "3.2cm" },
      { ask: r`Of 600 households, 380 subscribe to service X, 250 to service Y, 90 subscribe to neither. Find how many subscribe to both, and $P(\text{exactly one})$.`, challenge: true, ws: "3.4cm" },
      { ask: r`$P(A)=0.35$, $P(B)=0.5$, $P(A\cup B)=0.675$. Determine whether $A,B$ are independent.`, challenge: true, ws: "3cm" },
    ],
    answers: [
      r`$0.6+0.25-0.1=0.75$`, r`at least one $=40$; both $=30+22-40=12$`,
      r`$P(A)P(B)=0.12$, matches: yes independent`, r`$0.8$`,
      r`$50+35-80=5$`,
      r`at least one $=85$; $85=65+45-x\Rightarrow x=25$; pop only $=65-25=40\Rightarrow P=0.40$`,
      r`if mutually exclusive, one occurring guarantees the other didn't ($P(A\cap B)=0$), which contradicts independence unless one probability is already 0`,
      r`tea only $=40-10=30\Rightarrow P=\tfrac{30}{60}=0.5$`,
      r`at least one $=55+45-20=80$; neither $=100-80=20\Rightarrow P=0.2$`,
      r`$P(A)=\tfrac{4}{52}=\tfrac1{13}$, $P(B)=\tfrac12$, $P(A\cap B)=\tfrac1{26}$; $P(A)P(B)=\tfrac1{26}$, matches: independent`,
      r`$0.75=0.5+P(B)-0.5P(B)\Rightarrow0.25=0.5P(B)\Rightarrow P(B)=0.5$`,
      r`at least one $=510$; both $=380+250-510=120$; exactly one $=510-120=390\Rightarrow P=0.65$`,
      r`$P(A)P(B)=0.175$; $P(A\cap B)=P(A)+P(B)-P(A\cup B)=0.35+0.5-0.675=0.175$: matches, so independent`,
    ],
  },
  {
    code: "4.5", unit: U, title: "Conditional Probability and Tree Diagrams",
    intro: r`Tree diagrams handle sequences of events, including without-replacement draws and reversed conditionals.`,
    ideas: [
      r`$P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$.`,
      r`Multiply along a branch; add across matching outcomes.`,
    ],
    examples: [
      { t: "Basic conditional probability", body: r`$P(A)=0.6$, $P(A\cap B)=0.18$. Find $P(B\mid A)$.\soln
$P(B\mid A)=\dfrac{0.18}{0.6}$.\\[3pt]\textbf{Conclusion:} $0.3$.` },
      { t: "Without replacement", body: r`A bag has 6 red, 4 blue balls. Two drawn without replacement; find $P(\text{both red})$.\soln
$\dfrac6{10}\times\dfrac59=\dfrac{30}{90}$.\\[3pt]\textbf{Conclusion:} $\dfrac13$.` },
      { t: "At least one", body: r`Using the same bag, find $P(\text{at least one blue})$.\soln
$1-P(\text{both red})=1-\tfrac13$.\\[3pt]\textbf{Conclusion:} $\dfrac23$.` },
      { t: "Reverse conditional (tree reversal)", body: r`Factory A makes 65\% of items with a 2\% defect rate; Factory B makes 35\% with a 6\% defect rate. Given an item is defective, find $P(\text{from B})$.\soln
$P(A\cap d)=0.65(0.02)=0.013$; $P(B\cap d)=0.35(0.06)=0.021$; total $=0.034$.\\[3pt]\textbf{Conclusion:} $P(B\mid d)=\dfrac{0.021}{0.034}\approx0.618$.` },
      { t: "Three-stage without-replacement sequence", body: r`A bag has 5 red, 3 blue balls. Three drawn without replacement; find $P(\text{all three red})$.\soln
$\dfrac58\times\dfrac47\times\dfrac36=\dfrac{60}{336}$.\\[3pt]\textbf{Conclusion:} $\dfrac{60}{336}=\dfrac{5}{28}$.` },
      { t: "Conditional probability from a two-way table", body: r`Of 100 students, 60 play sports; of those, 40 also do music. Of the 40 who don't play sports, 10 do music. Find $P(\text{music}\mid\text{sports})$.\soln
$P(\text{music}\mid\text{sports})=\dfrac{40}{60}$.\\[3pt]\textbf{Conclusion:} $\dfrac23$.` },
      { t: "Comparing conditional probabilities both ways", body: r`Using the same data (100 students; 60 sports, 40 of them music; 40 non-sports, 10 of them music), find $P(\text{sports}\mid\text{music})$ and compare to $P(\text{music}\mid\text{sports})$.\soln
Total music $=40+10=50$. $P(\text{sports}\mid\text{music})=\dfrac{40}{50}=0.8$.\\[3pt]\textbf{Conclusion:} $P(\text{sports}\mid\text{music})=0.8\neq P(\text{music}\mid\text{sports})=\tfrac23\approx0.667$ --- confirming order matters.` },
      { t: "Independence test using a tree diagram's branches", body: r`A spinner has $P(\text{red})=0.4$ on each of two independent spins. Find $P(\text{exactly one red})$ using a tree diagram.\soln
Two paths: (red, not red) and (not red, red), each with probability $0.4\times0.6=0.24$.\\[3pt]\textbf{Conclusion:} $P(\text{exactly one red})=0.24+0.24=0.48$.` },
      { t: "Application --- medical test reliability (reverse conditional)", body: r`A disease affects 2\% of a population. A test correctly detects it 95\% of the time (true positive) and gives a false positive 3\% of the time. Given a positive result, find $P(\text{has the disease})$.\soln
$P(\text{disease}\cap+)=0.02(0.95)=0.019$. $P(\text{no disease}\cap+)=0.98(0.03)=0.0294$. Total $P(+)=0.0484$.\\[3pt]\textbf{Conclusion:} $P(\text{disease}\mid+)=\dfrac{0.019}{0.0484}\approx0.393$ --- surprisingly low, since the disease is rare.` },
    ],
    questions: [
      { ask: r`$P(A)=0.7$, $P(A\cap B)=0.28$. Find $P(B\mid A)$.` },
      { ask: r`A bag has 5 green, 5 yellow marbles. Two drawn without replacement; find $P(\text{both green})$.` },
      { ask: r`Using the same bag, find $P(\text{at least one yellow})$.` },
      { ask: r`Two independent events each have probability 0.3. Find $P(\text{exactly one occurs})$.` },
      { ask: r`A box has 9 working, 3 faulty phones. Two selected without replacement; find $P(\text{at least one faulty})$.`, challenge: true, ws: "3.2cm" },
      { ask: r`Machine X makes 40\% of output with 5\% defects; Machine Y makes 60\% with 2\% defects. Find the overall $P(\text{defective})$.` },
      { ask: r`Using the previous question, given an item is defective, find $P(\text{from Machine X})$.`, challenge: true, ws: "3.2cm" },
      { ask: r`A bag has 6 red, 4 blue, 2 green balls. Three drawn without replacement; find $P(\text{all three red})$.` },
      { ask: r`Of 120 students, 70 play an instrument; of those, 30 also play a sport. Of the 50 who don't play an instrument, 20 play a sport. Find $P(\text{sport}\mid\text{instrument})$.` },
      { ask: r`Using the previous question's data, find $P(\text{instrument}\mid\text{sport})$ and state whether it equals $P(\text{sport}\mid\text{instrument})$.` },
      { ask: r`A spinner has $P(\text{blue})=0.3$ on each of two independent spins; find $P(\text{exactly one blue})$.`, challenge: true, ws: "3cm" },
      { ask: r`A disease affects 1\% of a population; a test detects it correctly 90\% of the time and gives a false positive 4\% of the time. Given a positive result, find $P(\text{has the disease})$.`, challenge: true, ws: "3.4cm" },
      { ask: r`A box has 10 working, 2 faulty phones. Two selected without replacement; find $P(\text{exactly one faulty})$.`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$0.28/0.7=0.4$`, r`$\tfrac5{10}\times\tfrac49=\tfrac{20}{90}=\tfrac29$`, r`$1-\tfrac29=\tfrac79$`,
      r`$2(0.3\times0.7)=0.42$`,
      r`$P(\text{no faulty})=\tfrac9{12}\times\tfrac8{11}=\tfrac{72}{132}=\tfrac6{11}$; at least one $=1-\tfrac6{11}=\tfrac5{11}$`,
      r`$0.4(0.05)+0.6(0.02)=0.02+0.012=0.032$`,
      r`$P(X\mid d)=\dfrac{0.02}{0.032}=0.625$`,
      r`$\tfrac6{12}\times\tfrac5{11}\times\tfrac4{10}=\tfrac{120}{1320}=\tfrac1{11}$`,
      r`$P(\text{sport}\mid\text{instrument})=\tfrac{30}{70}=\tfrac37\approx0.429$`,
      r`total sport players $=30+20=50$; $P(\text{instrument}\mid\text{sport})=\tfrac{30}{50}=0.6$; not equal to $\tfrac37\approx0.429$, confirming order matters`,
      r`$2(0.3\times0.7)=0.42$`,
      r`$P(d\cap+)=0.01(0.9)=0.009$; $P(\text{no }d\cap+)=0.99(0.04)=0.0396$; total $=0.0486$; $P(d\mid+)=0.009/0.0486\approx0.185$`,
      r`$P(\text{no faulty})=\tfrac{10}{12}\times\tfrac9{11}=\tfrac{90}{132}=\tfrac{15}{22}$; $P(\text{both faulty})=\tfrac2{12}\times\tfrac1{11}=\tfrac2{132}=\tfrac1{66}$; exactly one $=1-\tfrac{15}{22}-\tfrac1{66}=1-\tfrac{45}{66}-\tfrac1{66}=\tfrac{20}{66}=\tfrac{10}{33}$`,
    ],
  },
  {
    code: "4.6", unit: U, title: "Discrete Random Variables and the Binomial Distribution",
    intro: r`The binomial distribution models a fixed number of independent yes/no trials.`,
    ideas: [
      r`$E(X)=\sum xP(X=x)$.`,
      r`$X\sim B(n,p)$: $P(X=k)=\dbinom nk p^k(1-p)^{n-k}$, $E(X)=np$, $\text{Var}(X)=np(1-p)$.`,
    ],
    examples: [
      { t: "Unknown table entry", body: r`$P(X=0)=0.1$, $P(X=1)=k$, $P(X=2)=0.5$. Find $k$ and $E(X)$.\soln
$k=1-0.1-0.5=0.4$. $E(X)=0(0.1)+1(0.4)+2(0.5)$.\\[3pt]\textbf{Conclusion:} $k=0.4$, $E(X)=1.4$.` },
      { t: "Binomial probability", body: r`$X\sim B(9,0.35)$. Find $P(X=3)$.\soln
$\binom93(0.35)^3(0.65)^6\approx84(0.042875)(0.0754)\approx0.272$.\\[3pt]\textbf{Conclusion:} $P(X=3)\approx0.272$.` },
      { t: "At least one", body: r`$X\sim B(6,0.15)$. Find $P(X\geq1)$.\soln
$P(X=0)=(0.85)^6\approx0.377$.\\[3pt]\textbf{Conclusion:} $P(X\geq1)\approx0.623$.` },
      { t: "Solve for p", body: r`$X\sim B(5,p)$ and $P(X=5)=0.00243$. Find $p$.\soln
$p^5=0.00243\Rightarrow p=0.00243^{1/5}=0.3$ (recognizing $0.3^5=0.00243$).\\[3pt]\textbf{Conclusion:} $p=0.3$.` },
      { t: "Expected value of a custom discrete variable", body: r`A game pays \$10 with probability 0.2, \$0 with probability 0.5, and $-\$5$ (a loss) with probability 0.3. Find the expected value.\soln
$E(X)=10(0.2)+0(0.5)+(-5)(0.3)=2+0-1.5$.\\[3pt]\textbf{Conclusion:} $E(X)=\$0.50$ --- the game is favourable on average.` },
      { t: "At most $k$ successes", body: r`$X\sim B(6,0.25)$. Find $P(X\leq1)$.\soln
$P(X=0)=(0.75)^6\approx0.178$. $P(X=1)=\binom61(0.25)(0.75)^5\approx0.356$.\\[3pt]\textbf{Conclusion:} $P(X\leq1)\approx0.178+0.356=0.534$.` },
      { t: "Between two values", body: r`$X\sim B(10,0.4)$. Find $P(2\leq X\leq4)$.\soln
$P(2)=\binom{10}2(0.4)^2(0.6)^8\approx0.121$; $P(3)\approx0.215$; $P(4)\approx0.251$.\\[3pt]\textbf{Conclusion:} $P(2\leq X\leq4)\approx0.121+0.215+0.251=0.587$.` },
      { t: "Solve for $n$ given a mean", body: r`$X\sim B(n,0.3)$ and $E(X)=12$. Find $n$.\soln
$np=12\Rightarrow0.3n=12$.\\[3pt]\textbf{Conclusion:} $n=40$.` },
      { t: "Application --- warranty claims", body: r`A store sells 20 items with a 5\% individual chance of a warranty claim. Find the expected number of claims and the probability of at least 2 claims.\soln
$E(X)=20(0.05)=1$. $P(X\geq2)=1-P(0)-P(1)=1-(0.95)^{20}-20(0.05)(0.95)^{19}\approx1-0.358-0.377$.\\[3pt]\textbf{Conclusion:} expected claims $=1$; $P(X\geq2)\approx0.265$.` },
    ],
    questions: [
      { ask: r`$P(X=0)=0.2$, $P(X=1)=k$, $P(X=2)=0.35$. Find $k$ and $E(X)$.` },
      { ask: r`$X\sim B(7,0.4)$. Find $P(X=2)$.` },
      { ask: r`$X\sim B(8,0.1)$. Find $P(X\geq1)$.` },
      { ask: r`$X\sim B(40,0.25)$. Find the mean and variance.` },
      { ask: r`A basketball player makes 65\% of free throws; for 8 attempts, find $P(\text{makes at least 6})$.`, challenge: true, ws: "3.4cm" },
      { ask: r`$X\sim B(4,p)$ and $P(X=0)=0.0016$. Find $p$.` },
      { ask: r`A factory tests 10 items with a 4\% individual defect rate; find $P(\text{at most 1 defective})$.`, challenge: true, ws: "3.4cm" },
      { ask: r`A game pays \$20 with probability 0.15, \$0 with probability 0.6, and $-\$8$ with probability 0.25. Find the expected value.` },
      { ask: r`$X\sim B(7,0.3)$. Find $P(X\leq1)$.` },
      { ask: r`$X\sim B(12,0.35)$. Find $P(3\leq X\leq5)$.` },
      { ask: r`$X\sim B(n,0.2)$ and $E(X)=15$. Find $n$.` },
      { ask: r`A shop sells 25 items with a 4\% individual chance of a return; find the expected number of returns and $P(\text{at least 2 returns})$.`, challenge: true, ws: "3.4cm" },
      { ask: r`$X\sim B(6,p)$ and $\text{Var}(X)=1.5$ with $p<0.5$; find $p$ (solve $6p(1-p)=1.5$).`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$k=0.45$; $E(X)=0.45+0.7=1.15$`, r`$\binom72(0.4)^2(0.6)^5\approx21(0.16)(0.07776)\approx0.261$`,
      r`$P(X=0)=(0.9)^8\approx0.4305$; $P(X\geq1)\approx0.5695$`, r`mean $=10$, variance $=40(0.25)(0.75)=7.5$`,
      r`$P(6)+P(7)+P(8)=\binom86(0.65)^6(0.35)^2+\binom87(0.65)^7(0.35)+\binom88(0.65)^8\approx0.2587+0.1373+0.0319\approx0.428$`,
      r`$(1-p)^4=0.0016\Rightarrow1-p=0.0016^{1/4}=0.2\Rightarrow p=0.8$`,
      r`$P(0)=(0.96)^{10}\approx0.6648$; $P(1)=\binom{10}1(0.04)(0.96)^9\approx0.2770$; sum $\approx0.9418$`,
      r`$E(X)=20(0.15)+0(0.6)+(-8)(0.25)=3-2=\$1.00$`,
      r`$P(0)=(0.7)^7\approx0.0824$; $P(1)=\binom71(0.3)(0.7)^6\approx0.2471$; sum $\approx0.3295$`,
      r`$P(3)\approx0.2039$, $P(4)\approx0.2367$, $P(5)\approx0.1959$; sum $\approx0.6365$`,
      r`$0.2n=15\Rightarrow n=75$`,
      r`$E(X)=25(0.04)=1$; $P(X\geq2)=1-(0.96)^{25}-25(0.04)(0.96)^{24}\approx1-0.360-0.375\approx0.265$`,
      r`$6p-6p^2=1.5\Rightarrow6p^2-6p+1.5=0\Rightarrow4p^2-4p+1=0\Rightarrow(2p-1)^2=0\Rightarrow p=0.5$ (boundary; for $p<0.5$ strictly, note this is the only solution --- the variance is maximized exactly at $p=0.5$)`,
    ],
  },
  {
    code: "4.7", unit: U, title: "The Normal Distribution",
    intro: r`Z-scores standardize any normal distribution, letting probabilities and percentiles be found (or reversed).`,
    ideas: [
      r`$z=\dfrac{x-\mu}{\sigma}$.`,
      r`Inverse normal: given a probability, work backward for $x=\mu+z\sigma$.`,
    ],
    examples: [
      { t: "Z-score and probability", body: r`$\mu=80$, $\sigma=6$. Find $P(X<89)$ given $P(Z<1.5)\approx0.9332$.\soln
$z=\dfrac{89-80}{6}=1.5$.\\[3pt]\textbf{Conclusion:} $P(X<89)\approx0.9332$.` },
      { t: "Inverse normal", body: r`$\mu=80$, $\sigma=6$. Find the score at the 90th percentile, given $P(Z<1.2816)\approx0.90$.\soln
$x=80+1.2816(6)$.\\[3pt]\textbf{Conclusion:} $x\approx87.69$.` },
      { t: "Between two values", body: r`$\mu=80$, $\sigma=6$. Find $P(71<X<89)$ given $P(Z<-1.5)\approx0.0668$ and $P(Z<1.5)\approx0.9332$.\soln
$z_1=-1.5$, $z_2=1.5$.\\[3pt]\textbf{Conclusion:} $P\approx0.9332-0.0668=0.8664$.` },
      { t: "Solve for mu and sigma", body: r`It's known $P(X<60)=0.1587$ and $P(X<100)=0.8413$. Find $\mu,\sigma$ (using $P(Z<-1)\approx0.1587$, $P(Z<1)\approx0.8413$).\soln
$\mu-\sigma=60$, $\mu+\sigma=100$. Add: $2\mu=160\Rightarrow\mu=80$; $\sigma=20$.\\[3pt]\textbf{Conclusion:} $\mu=80$, $\sigma=20$.` },
      { t: "Finding P(X > a)", body: r`$\mu=100$, $\sigma=12$. Find $P(X>121)$ given $P(Z<1.75)\approx0.9599$.\soln
$z=\dfrac{121-100}{12}=1.75$. $P(X>121)=1-P(X<121)$.\\[3pt]\textbf{Conclusion:} $P(X>121)\approx1-0.9599=0.0401$.` },
      { t: "Finding a lower percentile", body: r`$\mu=65$, $\sigma=9$. Find the value below which the lowest 15\% falls, given $P(Z<-1.0364)\approx0.15$.\soln
$x=65+(-1.0364)(9)$.\\[3pt]\textbf{Conclusion:} $x\approx55.67$.` },
      { t: "Sample proportion within a bound", body: r`$\mu=500$, $\sigma=25$. A batch is rejected if a measurement is outside $[450,550]$. Find the proportion rejected, given $P(Z<-2)\approx0.0228$ and $P(Z<2)\approx0.9772$.\soln
$z_1=\dfrac{450-500}{25}=-2$, $z_2=\dfrac{550-500}{25}=2$. Accepted proportion: $0.9772-0.0228=0.9544$.\\[3pt]\textbf{Conclusion:} rejected proportion $\approx1-0.9544=0.0456$ (4.56\%).` },
      { t: "Solving with an asymmetric pair of z-values", body: r`It's known $P(X<70)=0.0668$ and $P(X<130)=0.9938$ for a normal distribution. Find $\mu,\sigma$, using $P(Z<-1.5)\approx0.0668$ and $P(Z<2.5)\approx0.9938$.\soln
$\mu-1.5\sigma=70$ and $\mu+2.5\sigma=130$. Subtract: $4\sigma=60\Rightarrow\sigma=15$.\\[3pt]\textbf{Conclusion:} $\sigma=15$; $\mu=70+1.5(15)=92.5$.` },
      { t: "Application --- setting a pass threshold", body: r`A company wants only the top 10\% of test scores (normal, $\mu=72$, $\sigma=8$) to qualify for advancement. Find the minimum qualifying score, given $P(Z<1.2816)\approx0.90$.\soln
The top 10\% corresponds to the 90th percentile: $x=72+1.2816(8)$.\\[3pt]\textbf{Conclusion:} minimum score $\approx82.25$, so a score of $83$ or higher would qualify.` },
    ],
    questions: [
      { ask: r`$\mu=45$, $\sigma=4$. Find the z-score for $x=53$.` },
      { ask: r`$\mu=120$, $\sigma=10$. Find $P(X<135)$ given $P(Z<1.5)\approx0.9332$.` },
      { ask: r`$\mu=120$, $\sigma=10$. Find the score at the 95th percentile, given $P(Z<1.645)\approx0.95$.` },
      { ask: r`$\mu=120$, $\sigma=10$. Find $P(105<X<135)$ given $P(Z<-1.5)\approx0.0668$ and $P(Z<1.5)\approx0.9332$.` },
      { ask: r`A machine's fill weights are normal with unknown $\mu,\sigma$; $P(X<480)=0.1587$, $P(X<540)=0.8413$. Find $\mu,\sigma$.`, challenge: true, ws: "3.2cm" },
      { ask: r`$\mu=50$, $\sigma=8$. Find the weight below which the lightest 10\% falls, given $P(Z<-1.2816)\approx0.10$.` },
      { ask: r`Explain why $P(X<\mu)=0.5$ for any normal distribution.` },
      { ask: r`$\mu=90$, $\sigma=14$. Find $P(X>115)$ given $P(Z<1.786)\approx0.9629$.` },
      { ask: r`$\mu=200$, $\sigma=30$. A batch is rejected outside $[140,260]$; find the rejected proportion, given $P(Z<-2)\approx0.0228$, $P(Z<2)\approx0.9772$.` },
      { ask: r`$P(X<40)=0.0668$ and $P(X<100)=0.9938$ for a normal distribution; find $\mu,\sigma$ (using $z=-1.5$ and $z=2.5$).` },
      { ask: r`A company wants the top 5\% of scores (normal, $\mu=68$, $\sigma=10$) to qualify; find the minimum qualifying score, given $P(Z<1.645)\approx0.95$.`, challenge: true, ws: "3.2cm" },
      { ask: r`$\mu=300$, $\sigma=20$. Find the value below which the lowest 5\% falls, given $P(Z<-1.645)\approx0.05$.`, challenge: true, ws: "3cm" },
      { ask: r`It's known $P(X<55)=0.0228$ and $P(X<115)=0.9938$; find $\mu,\sigma$ (using $z=-2$ and $z=2.5$).`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$z=2$`, r`$P\approx0.9332$`, r`$x=120+1.645(10)\approx136.45$`, r`$0.9332-0.0668=0.8664$`,
      r`$\mu-\sigma=480$, $\mu+\sigma=540$: $\mu=510$, $\sigma=30$`,
      r`$50+(-1.2816)(8)\approx39.75$`,
      r`the normal distribution is symmetric about $\mu$, so exactly half the probability lies below the mean`,
      r`$z=(115-90)/14\approx1.786$; $P(X>115)\approx1-0.9629=0.0371$`,
      r`$z_1=-2,z_2=2$; accepted $=0.9772-0.0228=0.9544$; rejected $\approx0.0456$`,
      r`$\mu-1.5\sigma=40$, $\mu+2.5\sigma=100$; subtract: $4\sigma=60\Rightarrow\sigma=15$; $\mu=40+1.5(15)=62.5$`,
      r`$68+1.645(10)\approx84.45$, so a score of $85$ or higher qualifies`,
      r`$300+(-1.645)(20)\approx267.1$`,
      r`$\mu-2\sigma=55$, $\mu+2.5\sigma=115$; subtract: $4.5\sigma=60\Rightarrow\sigma\approx13.33$; $\mu=55+2(13.33)\approx81.67$`,
    ],
  },
];
