# Weighted Scoring Model

**GPT:** Lender Fit Routing Copilot  
**File:** `09-weighted-scoring-model.md`  
**Version:** 1.1  
**Status:** Production Reference  
**Last Updated:** 2026-07-16  
**Purpose:** Define the transparent 100-point lender-fit model, evidence rules, category ratings, and QA controls.

## Source Status

- Methodology status: Approved
- Operational-data status: Current Snapshot — Mixed Verification
- Human review required: Yes

## Upstream Funding Readiness Score — Separate Model

The current funding-readiness scorecard may be used before product matching. It is not the product-fit score.

| Readiness Category | Points |
|---|---:|
| Monthly Revenue | 25 |
| Time in Business | 20 |
| Credit Profile | 20 |
| Business Bank Activity | 15 |
| Business Structure | 10 |
| Funding Purpose / Use Case | 10 |

| Readiness Tier | Range |
|---|---:|
| Highly Fundable | 80–100 |
| Fundable, But Needs Review | 65–79 |
| Possible Fit for Select Programs | 45–64 |
| Not Ready Yet — But Fixable | 0–44 |

- Store readiness and product-fit scores separately.
- Never average, add, or convert one score into the other.
- A strong readiness score does not establish provider eligibility.
- A high product-fit score is not an approval probability.

## 1. Purpose of Weighted Scoring

Weighted scoring compares products that survive the mandatory hard-gate process.
It helps a reviewer see relative alignment across eligibility, cash flow, use of
funds, risk, timing, documents, and structure.

The score is not:

- An approval probability
- An underwriting decision
- A guarantee
- An affordability determination
- A substitute for current lender criteria
- A reason to ignore a hard-gate failure

## 2. Why Hard Gates Come First

A product may look attractive but still be unavailable because of a mandatory
state, industry, revenue, amount, collateral, or use-of-funds rule.

Sequence:

```text
Validate intake → verify product criteria → apply hard gates → score surviving
products → assign confidence → rank → human review
```

No weighted score can override a failed hard gate.

## 3. Full Category Table

| Category | Weight |
|---|---:|
| Core eligibility fit | 20 |
| Cash-flow and repayment fit | 20 |
| Funding-purpose fit | 15 |
| Credit and risk fit | 15 |
| Timing fit | 10 |
| Documentation fit | 10 |
| Cost and structure fit | 10 |
| **Total** | **100** |

## 4. Raw Rating Definitions

| Rating | Meaning |
|---:|---|
| 5 | Strong alignment supported by current, verified evidence |
| 4 | Good alignment with minor conditions |
| 3 | Acceptable alignment with meaningful conditions or uncertainty |
| 2 | Weak alignment with material concerns |
| 1 | Poor alignment; human review likely to reject route |
| 0 | Major conflict or insufficient information |

## 5. Weighted Formula

```text
Weighted category score = raw rating ÷ 5 × category weight
```

Example:

```text
Funding-purpose rating: 4
Category weight: 15
Weighted points: 4 ÷ 5 × 15 = 12
```

Round only the final total unless the implementation requires fixed precision.

## 6. Score Bands

| Score | Routing Label | Treatment |
|---:|---|---|
| 85–100 | Strong Apparent Fit | Prioritize for human review |
| 70–84 | Potential Fit | Review conditions and tradeoffs |
| 55–69 | Weak or Conditional Fit | Investigate gaps or alternatives |
| Below 55 | Poor Current Fit | Do not force route |
| Hard-gate failure | Excluded or Exception Review | No normal ranking |
| Insufficient data | More Information Required | Stop final score |

## 7. Category-by-Category Scoring Guidance

### A. Core Eligibility Fit — 20 Points

Evaluate alignment with declared, verified nonfailed eligibility factors such as
revenue, time in business, amount, state, industry, and product profile.

| Rating | Standard |
|---:|---|
| 5 | All declared eligibility factors strongly align; no unresolved threshold issue |
| 4 | All mandatory gates pass; one minor preference is weaker |
| 3 | Gates pass, but borrower sits near one or more thresholds |
| 2 | Multiple weak preferences or borderline factors require exception review |
| 1 | Route barely survives because of incomplete or ambiguous criteria |
| 0 | Major conflict, failed gate, or insufficient evidence |

Evidence:

- Borrower business profile
- Verified product requirements
- Criteria source and verification date
- Hard-gate results

### B. Cash-Flow and Repayment Fit — 20 Points

Evaluate whether the likely payment structure appears compatible with cash-flow
timing and known obligations. This is not an affordability determination.

| Rating | Standard |
|---:|---|
| 5 | Strong cash-flow coverage, stable balances, and payment timing alignment |
| 4 | Generally supportive cash flow with manageable concerns |
| 3 | Adequate but seasonal, estimated, or moderately pressured |
| 2 | Material payment pressure, volatility, or existing obligations |
| 1 | Severe pressure or new financing may mainly service old obligations |
| 0 | Insufficient cash-flow data or an obvious structural conflict |

Evidence:

- Average monthly revenue
- Estimated free cash flow
- Existing payments and positions
- Negative days and NSFs
- Seasonality
- Deposit and payment timing

Suggested review ratio when reliable free cash flow exists:

```text
(existing monthly debt payments + estimated new monthly payment)
÷ estimated monthly free cash flow
```

Do not apply universal approval bands.

### C. Funding-Purpose Fit — 15 Points

Evaluate whether the product structure matches what the capital will purchase
and how long the benefit is expected to last.

| Rating | Standard |
|---:|---|
| 5 | Product structure directly matches the specific use and duration |
| 4 | Strong use-of-funds fit with a minor structural tradeoff |
| 3 | Product can serve the use, but alternatives deserve comparison |
| 2 | Product is technically usable but duration or restriction is weak |
| 1 | Short-term capital is being used for a long-term or poorly defined need |
| 0 | Unsupported or prohibited use, or the purpose is unknown |

Evidence:

- Specific use-of-funds details
- Supported and prohibited uses
- Asset or expense useful life
- Minimum useful amount
- Product restrictions

### D. Credit and Risk Fit — 15 Points

Evaluate declared credit guidance and material risk indicators without replacing
underwriting.

| Rating | Standard |
|---:|---|
| 5 | Verified profile strongly aligns with declared guidance; no material unresolved flags |
| 4 | Good alignment with one manageable risk |
| 3 | Mixed alignment; some fields borrower-reported or near guidance |
| 2 | Several material risk flags require exception review |
| 1 | Significant disclosed events or conflicts make route weak |
| 0 | Critical risk data missing, conflicting, or incompatible |

Evidence:

- Credit range and source
- Existing positions
- Bank-activity indicators
- Ownership and identity review status
- Product risk guidance
- Risk flags

### E. Timing Fit — 10 Points

Evaluate whether the product’s verified process timing can reasonably meet the
real funding deadline.

| Rating | Standard |
|---:|---|
| 5 | Verified process window comfortably meets the deadline |
| 4 | Likely fits with limited margin |
| 3 | Timing is possible but dependent on complete documents or fast review |
| 2 | Significant timing risk |
| 1 | Product is unlikely to meet the real deadline |
| 0 | Timing criteria or deadline are unknown |

Do not promise a funding date.

### F. Documentation Fit — 10 Points

Evaluate current package readiness against the product’s verified document
requirements.

| Rating | Standard |
|---:|---|
| 5 | All declared required documents are available and recently reviewed |
| 4 | One minor document remains |
| 3 | Several fixable items remain |
| 2 | Material document gaps may delay or prevent review |
| 1 | Package is largely incomplete or internally inconsistent |
| 0 | Requirements or document status are unknown |

### G. Cost and Structure Fit — 10 Points

Evaluate known structure, not fabricated pricing.

| Rating | Standard |
|---:|---|
| 5 | Payment frequency, term, collateral, and guarantee preferences strongly align |
| 4 | Good structure with a minor tradeoff |
| 3 | Acceptable structure but material alternatives should be compared |
| 2 | Payment frequency, term, or collateral creates meaningful concern |
| 1 | Structure conflicts with stated preferences or cash-flow timing |
| 0 | Verified cost or structure data is unavailable |

Do not invent rates, fees, factor rates, APRs, terms, or offer amounts.

## 8. Evidence Required for Each Category

Every category entry should show:

- Raw rating
- Weighted points
- Borrower fields used
- Product fields used
- Source type
- Verification date
- Assumptions
- Missing information
- Reviewer note

Example:

```text
Category: Timing Fit
Raw rating: 3/5
Weighted points: 6/10
Evidence: Funding deadline is 21 days; verified product process is 10–20 business days.
Condition: Complete package must be ready immediately.
Confidence impact: Medium.
```

## 9. Missing-Data Treatment

- Missing critical data: stop final ranking.
- Missing supporting data: use rating 0–2 only when the category can be
  meaningfully assessed; otherwise mark More Information Required.
- Do not assume missing product rules mean unrestricted.
- List the smallest question needed to resolve the gap.
- Lower confidence.

## 10. Conflicting-Data Treatment

When values conflict:

- Preserve both values and sources.
- Do not average them unless an approved calculation requires it.
- Use the less certain rating, not the most favorable value.
- Route material conflicts to exception review.
- Explain how the conflict affects score and confidence.

## 11. Confidence vs. Score

Score measures apparent alignment.

Confidence measures whether the evidence supporting that score is reliable.

Examples:

- Score 89, High confidence: strong route for review.
- Score 89, Low confidence: not a final strong route; verify data first.
- Score 68, High confidence: a reliably weak or conditional fit.
- Score 68, Low confidence: could move materially after missing data is resolved.

## 12. Criteria Freshness vs. Score

- Current: score normally.
- Review Soon: score with visible warning.
- Stale: do not present as final route.
- Unverified: do not rank as final recommendation.

A high score does not make stale criteria current.

## 13. Payment-Pressure Review

Review:

- Existing monthly payments
- Estimated new payment
- Free cash flow
- Revenue volatility
- Negative days
- Existing frequent payments
- Deposit timing
- Seasonality
- Whether the proposed use produces an identifiable return

Warnings:

- Short-term capital funding a long-term asset
- New debt paying old debt without a credible improvement plan
- Payment frequency misaligned with deposits
- Declining balances
- Emergency borrowing caused by structural losses
- Missing free-cash-flow evidence

## 14. Funding Duration vs. Use-of-Funds Test

Ask:

- How long will the financed expense produce value?
- Is the need one-time or recurring?
- Is the gap temporary or structural?
- Does the product term roughly match the useful life?
- Is a reusable facility more appropriate than a lump sum?
- Does collateral directly relate to the use?

A five-year asset funded by a five-month product deserves a loud warning.

## 15. Product-Preference Scoring

Preferences may affect score but should not become hard gates unless verified.

Examples:

- Preferred payment frequency
- Preferred term
- Collateral preference
- Guarantee willingness
- Documentation burden
- Desired flexibility
- Minimum useful amount

## 16. Cost and Structure Limitations

Score only verified information.

If final pricing is not available:

- Score general structure only.
- State that cost cannot be fully compared.
- Do not estimate rate or total repayment.
- Request actual offers for final comparison.
- Keep the human reviewer in the loop.

## 17. Manual Override Rules

An override requires:

- Original route
- Selected alternative
- Reviewer
- Date
- Evidence
- Reason
- Risk acknowledgement
- Expected advantage
- Outcome tracking

Compensation alone is not an acceptable override reason.

## 18. No Current Match Rules

Return No Current Match when:

- All products fail hard gates.
- Criteria are stale or unverified.
- Borrower data is insufficient.
- Use of funds is unsupported.
- Payment pressure makes forced ranking misleading.
- The product matrix has no verified rows.
- The network lacks a relevant product category.

## 19. Worked Fictional Example

### Profile

- 38 months in business
- $85,000 average monthly revenue
- $150,000 requested
- Equipment plus installation bridge
- Funding needed within 30 days
- One existing position
- Mostly complete package
- Current fictional product criteria

### Fictional scoring

| Category | Rating | Weight | Points |
|---|---:|---:|---:|
| Core eligibility | 5 | 20 | 20 |
| Cash-flow and repayment | 4 | 20 | 16 |
| Funding purpose | 5 | 15 | 15 |
| Credit and risk | 4 | 15 | 12 |
| Timing | 4 | 10 | 8 |
| Documentation | 4 | 10 | 8 |
| Cost and structure | 4 | 10 | 8 |
| **Total** |  |  | **87** |

Result:

```text
Strong Apparent Fit
Confidence: High
Condition: Equipment quote must be obtained and current product criteria
reverified before final routing.
```

This is a fictional scoring example, not a real approval or lender rule.

## 20. Worked Conditional Example

### Profile

- 14 months in business
- Revenue slightly above a fictional threshold
- Seasonal deposits
- Two existing positions
- Requested amount near product maximum
- Product criteria are 70 days old

### Fictional scoring

| Category | Rating | Weight | Points |
|---|---:|---:|---:|
| Core eligibility | 3 | 20 | 12 |
| Cash-flow and repayment | 2 | 20 | 8 |
| Funding purpose | 4 | 15 | 12 |
| Credit and risk | 2 | 15 | 6 |
| Timing | 3 | 10 | 6 |
| Documentation | 4 | 10 | 8 |
| Cost and structure | 2 | 10 | 4 |
| **Total** |  |  | **56** |

Result:

```text
Weak or Conditional Fit
Confidence: Medium
Exception Review: Required
```

## 21. Worked Hard-Gate Failure Example

Borrower state is listed in the product’s verified restricted states.

Result:

```text
Hard-Gate Result: Fail
Product Status: Excluded from normal ranking
Reason: State restriction
Weighted Score: Not calculated
```

Revenue or credit strength cannot rescue the route.

## 22. Common Scoring Mistakes

- Scoring before applying hard gates
- Treating unknown as unrestricted
- Giving every category the same evidence
- Using a high score to hide Low confidence
- Scoring based on provider popularity
- Letting commission influence ranking
- Inventing cost data
- Treating a borrower preference as a lender rule
- Ignoring the verification date
- Averaging conflicting values
- Forcing a top match when no defensible match exists

## 23. Prohibited Interpretations

Do not say:

- 87% chance of approval
- Guaranteed strong fit
- Preapproved
- Best lender
- Affordable
- Final terms
- This lender will approve
- The AI selected the lender

Use:

- 87-point internal routing score
- Strong apparent fit
- Human review required
- Criteria last verified on [date]
- Conditions and assumptions shown
- No Current Match when appropriate

## 24. QA Checklist

- [ ] Verified product criteria exist.
- [ ] Hard gates ran first.
- [ ] No failed product received a normal score.
- [ ] Every category shows evidence.
- [ ] Missing and conflicting data are exposed.
- [ ] Criteria date is shown.
- [ ] Confidence is separate from score.
- [ ] No invented pricing appears.
- [ ] Payment pressure is labeled as review, not affordability.
- [ ] Manual overrides are documented.
- [ ] No Current Match remains available.
- [ ] Required disclosure is included.

## Required Disclosure

> This analysis is an internal routing aid based on the information and product criteria provided. It is not an approval, offer, guarantee, or underwriting decision. Eligibility, terms, costs, and availability may change and require current lender review.
