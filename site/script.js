(() => {
  "use strict";

  const fallbackData = {
    borrower: {
      business: "Ridgeway Electric LLC",
      industry: "Electrical contractor",
      state: "Georgia",
      timeInBusiness: "42 months",
      averageMonthlyRevenue: "$78,000",
      requestedAmount: "$125,000",
      useOfFunds: "Equipment + working capital",
      creditRange: "660–679",
      existingPositions: 1,
      documentReadiness: 82
    },
    steps: [
      { label: "Privacy Check", status: "pass", detail: "Redacted profile accepted" },
      { label: "Intake Quality", status: "pass", detail: "82% document readiness" },
      { label: "Hard Gates", status: "review", detail: "7 pass · 1 review" },
      { label: "Product Scoring", status: "pass", detail: "Top score: 88" },
      { label: "Confidence", status: "pass", detail: "High" },
      { label: "Apparent Ranking", status: "pass", detail: "3 routes retained" },
      { label: "Human Review", status: "review", detail: "Required before action" }
    ],
    gates: [
      { label: "State eligibility", status: "pass", detail: "Georgia supported" },
      { label: "Industry eligibility", status: "pass", detail: "Contractor profile permitted" },
      { label: "Minimum revenue", status: "pass", detail: "$78K exceeds requirement" },
      { label: "Time in business", status: "pass", detail: "42 months exceeds requirement" },
      { label: "Requested amount", status: "pass", detail: "$125K within range" },
      { label: "Existing positions", status: "review", detail: "One active position needs payoff review" },
      { label: "Supported use of funds", status: "pass", detail: "Equipment and working capital supported" },
      { label: "Required documentation", status: "pass", detail: "Core package substantially complete" }
    ],
    matches: [
      {
        id: "equipment", family: "Equipment Financing", label: "Strong Apparent Fit",
        labelKey: "strong", score: 88, confidence: "High", freshness: "Current",
        why: ["Equipment purchase is a direct product-purpose match", "Revenue and operating history clear the known gates", "Requested amount is inside the reviewed range"],
        risks: ["Final equipment quote still needs confirmation", "Existing position may affect available structure"],
        missing: ["Vendor quote dated within 30 days"], review: "Human review required before provider selection"
      },
      {
        id: "term", family: "Term Loan", label: "Potential Fit", labelKey: "potential",
        score: 76, confidence: "Medium", freshness: "Review Soon",
        why: ["Operating history and revenue are directionally aligned", "Lump-sum need can support a structured term"],
        risks: ["Working-capital portion may shorten the useful-life match", "Criteria should be reconfirmed before route selection"],
        missing: ["Current debt schedule", "Monthly free-cash-flow support"], review: "Criteria and payment pressure need review"
      },
      {
        id: "loc", family: "Business Line of Credit", label: "Weak or Conditional Fit",
        labelKey: "conditional", score: 61, confidence: "Medium", freshness: "Current",
        why: ["Working-capital need may benefit from revolving access", "Revenue is sufficient for initial review"],
        risks: ["Equipment purchase is not the cleanest revolving-credit use", "Existing position could constrain structure"],
        missing: ["Recurring draw plan", "Expected repayment cycle"], review: "Keep as a secondary route only"
      }
    ],
    outputs: ["Borrower snapshot", "Intake-quality assessment", "Hard-gate report", "Excluded-product reasons", "Ranked apparent matches", "Follow-up questions", "Exception-review path", "Human-review brief", "Submission checklist", "No Current Match explanation"]
  };

  const descriptions = {
    "Borrower snapshot": "A redacted, normalized view of the facts driving the route.",
    "Intake-quality assessment": "Completeness, source quality, conflicts, and material missing fields.",
    "Hard-gate report": "Pass, fail, review, and missing-data results before scoring.",
    "Excluded-product reasons": "The exact criteria that removed a product from normal ranking.",
    "Ranked apparent matches": "Surviving routes ordered with strengths, risks, and conditions.",
    "Follow-up questions": "Only the questions needed to resolve material routing gaps.",
    "Exception-review path": "Evidence, owner, priority, and decision options for borderline cases.",
    "Human-review brief": "A concise internal handoff with versions, assumptions, and next action.",
    "Submission checklist": "Product-specific preparation steps after a human selects a route.",
    "No Current Match explanation": "A defensible stop condition with practical next steps."
  };

  async function getData() {
    if (window.location.protocol === "file:") return fallbackData;
    try {
      const response = await fetch(window.LFRC_CONFIG?.dataPath || "./data/demo-routing-data.json");
      if (!response.ok) throw new Error("Demo data unavailable");
      return await response.json();
    } catch (error) {
      console.warn("Using embedded demo data.", error);
      return fallbackData;
    }
  }

  function renderBorrower(borrower) {
    const target = document.querySelector("[data-borrower-details]");
    if (!target) return;
    const rows = [
      ["Business", borrower.business],
      ["Industry", borrower.industry],
      ["State", borrower.state],
      ["Time in business", borrower.timeInBusiness],
      ["Average monthly revenue", borrower.averageMonthlyRevenue],
      ["Requested amount", borrower.requestedAmount],
      ["Use of funds", borrower.useOfFunds],
      ["Credit range", borrower.creditRange],
      ["Existing positions", borrower.existingPositions]
    ];
    target.innerHTML = rows.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join("");
  }

  function renderSequence(steps) {
    const target = document.querySelector("[data-sequence-list]");
    if (!target) return;
    target.innerHTML = steps.map((step, index) => `
      <li class="sequence-item" data-step="${index}">
        <span class="sequence-icon">${index + 1}</span>
        <span><strong>${step.label}</strong><small>${step.detail}</small></span>
      </li>
    `).join("");
  }

  function renderGates(gates) {
    const target = document.querySelector("[data-gate-list]");
    if (!target) return;
    target.innerHTML = gates.map(gate => `
      <div class="gate-row" data-status="${gate.status}">
        <span class="gate-row__icon" aria-label="${gate.status}">${gate.status === "pass" ? "✓" : "!"}</span>
        <span><strong>${gate.label}</strong><small>${gate.detail}</small></span>
      </div>
    `).join("");
  }

  function badgeClass(labelKey) {
    return labelKey === "strong" ? "badge--strong" : labelKey === "potential" ? "badge--info" : "badge--current";
  }

  function renderMatches(matches) {
    const target = document.querySelector("[data-match-grid]");
    if (!target) return;
    target.innerHTML = matches.map(match => `
      <article class="match-card reveal" data-match="${match.labelKey}">
        <div class="match-card__top">
          <div><span>PRODUCT FAMILY</span><strong>${match.family}</strong></div>
          <div class="match-score">${match.score}<small>FIT SCORE</small></div>
        </div>
        <div class="match-meta">
          <span class="badge ${badgeClass(match.labelKey)}">${match.label}</span>
          <span class="badge badge--info">${match.confidence} confidence</span>
          <span class="badge badge--current">${match.freshness}</span>
        </div>
        <div class="match-body">
          <h4>Why it may fit</h4>
          <ul>${match.why.map(item => `<li>${item}</li>`).join("")}</ul>
          <details class="match-details">
            <summary>Risks, missing data, and review</summary>
            <h4>Risks</h4>
            <ul>${match.risks.map(item => `<li>${item}</li>`).join("")}</ul>
            <h4>Missing information</h4>
            <ul>${match.missing.map(item => `<li>${item}</li>`).join("")}</ul>
            <p><strong>Review status:</strong> ${match.review}</p>
          </details>
        </div>
      </article>
    `).join("");
  }

  function renderOutputs(outputs) {
    const target = document.querySelector("[data-output-grid]");
    if (!target) return;
    target.innerHTML = outputs.map((item, index) => `
      <article class="output-card reveal">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <h3>${item}</h3>
        <p>${descriptions[item] || ""}</p>
      </article>
    `).join("");
  }

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach(item => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(item => observer.observe(item));
  }

  function animateScore(targetValue = 88) {
    const node = document.querySelector("[data-score]");
    if (!node) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      node.textContent = String(targetValue);
      return;
    }
    const start = performance.now();
    const duration = 780;
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      node.textContent = String(Math.round(targetValue * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function runSequence() {
    const items = [...document.querySelectorAll(".sequence-item")];
    const button = document.querySelector("[data-run-demo]");
    if (!items.length) return;
    items.forEach(item => item.classList.remove("is-active", "is-complete"));
    if (button) {
      button.disabled = true;
      button.textContent = "Routing…";
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const delay = reduce ? 25 : 360;
    items.forEach((item, index) => {
      setTimeout(() => {
        if (index > 0) items[index - 1].classList.remove("is-active");
        if (index > 0) items[index - 1].classList.add("is-complete");
        item.classList.add("is-active");
        if (index === items.length - 1) {
          setTimeout(() => {
            item.classList.remove("is-active");
            item.classList.add("is-complete");
            animateScore(88);
            if (button) {
              button.disabled = false;
              button.innerHTML = 'Run Routing Sequence <span aria-hidden="true">▶</span>';
            }
          }, delay);
        }
      }, index * delay);
    });
  }

  function initFilters() {
    const buttons = document.querySelectorAll("[data-filter]");
    const cards = document.querySelectorAll("[data-match]");
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        buttons.forEach(item => item.classList.remove("is-active"));
        button.classList.add("is-active");
        const filter = button.dataset.filter;
        cards.forEach(card => {
          card.hidden = filter !== "all" && card.dataset.match !== filter;
        });
      });
    });
  }

  async function init() {
    const data = await getData();
    renderBorrower(data.borrower);
    renderSequence(data.steps);
    renderGates(data.gates);
    renderMatches(data.matches);
    renderOutputs(data.outputs);
    initFilters();
    initReveal();

    document.querySelector("[data-run-demo]")?.addEventListener("click", runSequence);
    setTimeout(runSequence, 550);

    document.querySelectorAll(".faq-item").forEach(item => {
      item.addEventListener("toggle", () => {
        if (!item.open) return;
        document.querySelectorAll(".faq-item[open]").forEach(other => {
          if (other !== item) other.open = false;
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
