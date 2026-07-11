// MBF3C Unit 5 — Data Management. Deep single-card lessons (MCR3U theme).
import { html, gframe } from "./seed-mpm2d.mjs";
const L = (code, title, blocks) => ({ code, title, blocks });
const EX = `style="background-color:#e6f3ff;border-left:5px solid #4a90e2;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const PR = `style="background-color:#fff7cc;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
const QA = `style="background-color:#f0f0f0;border-left:5px solid #e69138;padding:10px 14px;margin:10px 0;border-radius:6px;"`;
export const u5 = {};

u5["5.1"] = L("5.1", "Collecting & Displaying Data", [
  html(String.raw`<div class="lecture-box">
  <h1>📋 Collecting &amp; Displaying Data</h1>
  <p><strong>Overview.</strong> Good statistics start with good data. You study a whole <strong>population</strong> through a smaller <strong>sample</strong>, chosen by a method that avoids <strong>bias</strong>. The right <strong>graph</strong> then depends on the kind of data — categories, parts of a whole, a relationship, or a distribution.</p>
  <h2>📌 Key ideas</h2>
  <ul>
    <li><strong>Population</strong> = everyone of interest; <strong>sample</strong> = the part you actually survey.</li>
    <li><strong>Sampling:</strong> simple random, systematic (every \(k\)-th), stratified (by group, in proportion). A biased sample isn't representative.</li>
    <li><strong>Graphs:</strong> bar (compare categories), circle (parts of a whole), histogram (distribution of grouped numbers), scatter (relationship between two variables).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Population vs sample</h3><p>A principal surveys \(200\) of the school's \(1500\) students about lunch. Identify the population and the sample.</p><div class="solution"><div class="step"><strong>Step 1:</strong> The group of interest is all \(1500\) students; the surveyed group is \(200\).</div><em>Conclusion: population \(=1500\) students; sample \(=200\) students. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Name the sampling method</h3><p>A factory tests <em>every \(50\)th</em> item off the line. Which sampling method is this?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Selecting at a fixed interval is <strong>systematic</strong> sampling.</div><em>Conclusion: systematic. (Random groups in proportion would be stratified.) ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Spot the bias</h3><p>To find the town's favourite sport, a reporter surveys fans <em>at a hockey game</em>. Why is this biased?</p><div class="solution"><div class="step"><strong>Step 1:</strong> The sample over-represents hockey fans, so it isn't representative of the whole town.</div><em>Conclusion: biased — survey a random cross-section of the town instead. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Circle-graph angle</h3><p>In a survey, \(25\%\) chose pizza. What central angle represents pizza on a circle graph?</p><div class="solution"><div class="step"><strong>Step 1:</strong> A full circle is \(360^\circ\); take \(25\%\) of it.</div><div class="step"><strong>Step 2:</strong> \(0.25\times360^\circ\).</div><em>Conclusion: \(90^\circ\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Choose the right graph</h3><p>Match each goal to a graph: (a) compare sales by store, (b) show what fraction of a budget each item takes, (c) see if height and shoe size are related.</p><div class="solution"><div class="step"><strong>Step 1:</strong> (a) categories → <strong>bar</strong>; (b) parts of a whole → <strong>circle</strong>; (c) two variables → <strong>scatter</strong>.</div><em>Conclusion: bar, circle, scatter respectively. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>A poll surveys \(500\) of \(40\,000\) voters. Name the population and sample.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Population \(40\,000\); sample \(500\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Choosing names from a hat is which method?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Simple random sampling.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>An online poll only reaches people with internet. What's the concern?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Bias — it excludes people without internet access.</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>A category is \(40\%\) of the data. Find its circle-graph angle.</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(0.40\times360^\circ=144^\circ\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Which graph best shows the distribution of \(100\) students' test scores?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>A histogram.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: What's the difference between a population and a sample?</h3><p><em>Everyone of interest vs the part actually surveyed.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What makes a sample biased?</h3><p><em>It isn't representative — some groups are over- or under-represented.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do you find a circle-graph angle?</h3><p><em>Multiply the percent (as a decimal) by \(360^\circ\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do you pick a graph?</h3><p><em>By the data: categories → bar, parts → circle, relationship → scatter, distribution → histogram.</em></p></div>
</div>`),
]);

u5["5.2"] = L("5.2", "Central Tendency & Spread", [
  html(String.raw`<div class="lecture-box">
  <h1>📊 Central Tendency &amp; Spread</h1>
  <p><strong>Overview.</strong> A few numbers can summarize a whole data set. <strong>Central tendency</strong> — mean, median, mode — describes a "typical" value; <strong>spread</strong> — range and standard deviation — describes how scattered the data is. The trick is choosing the measure that best fits the data, especially when there are <strong>outliers</strong>.</p>
  <h2>📌 The measures</h2>
  <ul>
    <li><strong>Mean</strong> = sum ÷ count. <strong>Median</strong> = middle value (average the two middles if the count is even). <strong>Mode</strong> = most frequent.</li>
    <li><strong>Range</strong> = max − min. <strong>Standard deviation</strong> = typical distance from the mean (bigger = more spread).</li>
    <li><strong>Outliers</strong> pull the mean but barely move the median.</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: Mean</h3><p>Find the mean of \(4,8,6,10,2\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Sum \(=30\); count \(=5\).</div><em>Conclusion: mean \(=30\div5=6\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Median with an even count</h3><p>Find the median of \(3,7,8,12\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> Already ordered; with an even count, average the two middle values \(7\) and \(8\).</div><em>Conclusion: median \(=\dfrac{7+8}{2}=7.5\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Mode and range</h3><p>For \(5,5,7,9,9,9,12\), find the mode and the range.</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(9\) appears most often; range \(=12-5\).</div><em>Conclusion: mode \(=9\), range \(=7\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Outlier — mean vs median</h3><p>For \(2,3,4,5,100\), compute both the mean and the median. Which better represents the data?</p><div class="solution"><div class="step"><strong>Step 1:</strong> Mean \(=\dfrac{114}{5}=22.8\); median (middle of five) \(=4\).</div><div class="step"><strong>Step 2:</strong> The \(100\) drags the mean far above every typical value.</div><em>Conclusion: the median (\(4\)) better represents the data — it resists the outlier. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Choose the measure</h3><p>Which measure fits best: (a) favourite ice-cream flavour, (b) household incomes (a few very high), (c) symmetric test scores?</p><div class="solution"><div class="step"><strong>Step 1:</strong> (a) categories → <strong>mode</strong>; (b) skewed by high values → <strong>median</strong>; (c) symmetric → <strong>mean</strong>.</div><em>Conclusion: mode, median, mean respectively. ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Mean of \(10,12,14,16,18\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(70\div5=14\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Median of \(2,5,9,11,14,20\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Even count: \(\tfrac{9+11}{2}=10\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>Mode and range of \(4,4,4,7,9,9,15\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Mode \(4\); range \(11\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>For \(1,2,2,3,40\), is the mean or median more typical?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>Median \(=2\) (mean \(=9.6\) is distorted by the \(40\)).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Two classes have the same mean but different ranges. What does that tell you?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>One is more spread out (larger range), even though the centres match.</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do you find each centre?</h3><p><em>Mean = sum÷count; median = middle; mode = most frequent.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What does spread measure?</h3><p><em>How scattered the data is — range and standard deviation.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: Why prefer the median sometimes?</h3><p><em>It resists outliers that distort the mean.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: When is the mode the best choice?</h3><p><em>For categorical data, where averaging makes no sense.</em></p></div>
</div>`),
]);

u5["5.3"] = L("5.3", "Probability", [
  html(String.raw`<div class="lecture-box">
  <h1>🎲 Probability</h1>
  <p><strong>Overview.</strong> Probability measures how likely an event is, on a scale from \(0\) (impossible) to \(1\) (certain). <strong>Theoretical</strong> probability comes from counting equally likely outcomes; <strong>experimental</strong> probability comes from actually running trials. The two get closer as the number of trials grows.</p>
  <h2>📌 The rules</h2>
  <ul>
    <li><strong>Theoretical:</strong> \(P(\text{event})=\dfrac{\text{favourable outcomes}}{\text{total outcomes}}\).</li>
    <li><strong>Experimental:</strong> \(P=\dfrac{\text{successes}}{\text{trials}}\). <strong>Complement:</strong> \(P(\text{not }A)=1-P(A)\).</li>
    <li><strong>Independent events:</strong> multiply — \(P(A\text{ and }B)=P(A)\times P(B)\).</li>
  </ul>
  <h2>🔵 Examples</h2>
  <div class="example-box" ${EX}><h3>Example 1: A single outcome</h3><p>Find the probability of rolling a \(4\) on a fair die.</p><div class="solution"><div class="step"><strong>Step 1:</strong> One favourable outcome out of six.</div><em>Conclusion: \(P=\dfrac16\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 2: Several favourable outcomes</h3><p>Find the probability of rolling an even number on a die.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Favourable: \(2,4,6\) — three of six.</div><em>Conclusion: \(P=\dfrac36=\dfrac12\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 3: Complement</h3><p>Find the probability of <em>not</em> rolling a \(4\).</p><div class="solution"><div class="step"><strong>Step 1:</strong> \(P(\text{not }4)=1-P(4)=1-\dfrac16\).</div><em>Conclusion: \(\dfrac56\). ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 4: Experimental vs theoretical</h3><p>A coin is flipped \(50\) times and lands heads \(30\) times. Find the experimental probability and compare it to the theoretical one.</p><div class="solution"><div class="step"><strong>Step 1:</strong> Experimental \(=\dfrac{30}{50}=0.6\); theoretical \(=\dfrac12=0.5\).</div><div class="step"><strong>Step 2:</strong> They differ by chance; with more flips the experimental value drifts toward \(0.5\).</div><em>Conclusion: \(0.6\) vs \(0.5\) — close, and converging with more trials. ✓</em></div></div>
  <div class="example-box" ${EX}><h3>Example 5: Two independent events</h3><p>Find the probability of rolling a \(6\) and then another \(6\) on two rolls.</p><div class="solution"><div class="step"><strong>Step 1:</strong> The rolls are independent, so multiply: \(\dfrac16\times\dfrac16\).</div><em>Conclusion: \(\dfrac1{36}\). ✓</em></div></div>
  <h2>🟡 Practice Questions</h2>
  <div class="practice-box" ${PR}><h3>Question 1</h3><p>Probability of drawing a red card from a standard deck?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{26}{52}=\dfrac12\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 2</h3><p>Probability of rolling a number less than \(3\) on a die?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac26=\dfrac13\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 3</h3><p>If \(P(\text{rain})=0.3\), what is \(P(\text{no rain})\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(1-0.3=0.7\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 4</h3><p>A spinner landed on red \(18\) of \(60\) spins. Experimental \(P(\text{red})\)?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac{18}{60}=0.3\).</em></div></div></details></div>
  <div class="practice-box" ${PR}><h3>Question 5</h3><p>Probability of two heads in a row?</p><details><summary>View answer</summary><div class="solution"><div class="step"><em>\(\dfrac12\times\dfrac12=\dfrac14\).</em></div></div></details></div>
  <h2>❓ Q&amp;A Summary</h2>
  <div class="qa-box" ${QA}><h3>Q1: How do you find theoretical probability?</h3><p><em>Favourable outcomes ÷ total outcomes.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q2: What is the complement rule?</h3><p><em>\(P(\text{not }A)=1-P(A)\).</em></p></div>
  <div class="qa-box" ${QA}><h3>Q3: How do experimental and theoretical probability relate?</h3><p><em>They get closer as the number of trials grows.</em></p></div>
  <div class="qa-box" ${QA}><h3>Q4: How do you combine independent events?</h3><p><em>Multiply their probabilities.</em></p></div>
</div>`),
]);
