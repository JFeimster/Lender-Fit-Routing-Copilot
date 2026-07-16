(() => {
  "use strict";
  const steps = ["Privacy", "Intake", "Gates", "Score", "Confidence", "Rank", "Review"];
  const matches = [
    { family: "Equipment Financing", score: 88, label: "Strong Apparent Fit", text: "Direct purpose alignment. Vendor quote and existing position still require review." },
    { family: "Term Loan", score: 76, label: "Potential Fit", text: "Revenue and operating history align. Cash-flow support and current criteria need confirmation." },
    { family: "Line of Credit", score: 61, label: "Conditional Fit", text: "Useful for recurring working capital, but weaker for the equipment portion." }
  ];

  function render() {
    const stepTarget = document.querySelector("[data-steps]");
    const matchTarget = document.querySelector("[data-matches]");
    stepTarget.innerHTML = steps.map((step, index) => `<span class="mini-step" data-step="${index}"><i>${index + 1}</i><b>${step}</b></span>`).join("");
    matchTarget.innerHTML = matches.map(match => `
      <article class="mini-match">
        <header><div><span>APPARENT ROUTE</span><strong>${match.family}</strong></div><b>${match.score}</b></header>
        <span class="label">${match.label}</span>
        <p>${match.text}</p>
      </article>
    `).join("");
  }

  function countScore(value = 88) {
    const node = document.querySelector("[data-score]");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { node.textContent = value; return; }
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / 650, 1);
      node.textContent = Math.round(value * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function run() {
    const nodes = [...document.querySelectorAll(".mini-step")];
    const button = document.querySelector("[data-run]");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = reduce ? 20 : 220;
    nodes.forEach(node => node.classList.remove("is-active", "is-done"));
    button.disabled = true;
    nodes.forEach((node, index) => {
      setTimeout(() => {
        if (index > 0) {
          nodes[index - 1].classList.remove("is-active");
          nodes[index - 1].classList.add("is-done");
        }
        node.classList.add("is-active");
        if (index === nodes.length - 1) {
          setTimeout(() => {
            node.classList.remove("is-active");
            node.classList.add("is-done");
            countScore();
            button.disabled = false;
          }, delay);
        }
      }, index * delay);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    render();
    document.querySelector("[data-run]").addEventListener("click", run);
    setTimeout(run, 250);
  });
})();