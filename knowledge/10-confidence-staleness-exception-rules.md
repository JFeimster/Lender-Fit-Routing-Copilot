# Confidence, Staleness, and Exception Rules

**GPT:** Lender Fit Routing Copilot  
**File:** `10-confidence-staleness-exception-rules.md`  
**Version:** 1.1  
**Status:** Production Reference  
**Last Updated:** 2026-07-16  
**Purpose:** Define confidence levels, criteria freshness, missing and conflicting data treatment, and human escalation.

## Source Status

- Methodology status: Approved
- Operational-data status: Current Snapshot — Mixed Verification
- Human review required: Yes

## Source-Verification Confidence Caps

| Product Source Label | Maximum Initial Confidence |
|---|---|
| `verified` with current date and no conflict | High |
| `imported_from_portfolio_report` with current date | Medium |
| Current date but conflicting provider-level information | Low |
| Missing verification date or source | Low; no final recommendation |
| Stale source | Low until reconfirmed |

A current date measures freshness. It does not automatically prove independent verification.

## 1. Score and Confidence Are Different

**Score** measures alignment within the declared model.

**Confidence** measures whether the evidence supporting that score is reliable,
current, complete, and internally consistent.

A high score with Low confidence is not a final strong route.

## 2. Confidence Definitions

### High Confidence

Use only when:

- Critical borrower fields are complete.
- Critical values are verified and current.
- Product criteria are Current.
- No material conflicts remain.
- Few assumptions exist.
- Required documents are substantially available.
- The product record has source, owner, and verification date.

### Medium Confidence

Use when:

- Core fields are present.
- Some values are borrower-reported or estimated.
- Criteria are Review Soon.
- Minor conflicts or document gaps remain.
- The route depends on a condition that is likely fixable.

### Low Confidence

Use when:

- Critical values are missing or conflicting.
- Product criteria are Stale or Unverified.
- Several fields are estimated.
- Source references are absent.
- Documents do not support key values.
- The route depends on undocumented preferences.
- The product matrix has incomplete operational data.

## 3. Confidence Factors

Assess:

- Intake completeness
- Field verification status
- Data freshness
- Source authority
- Internal consistency
- Document readiness
- Product-criteria freshness
- Product-record completeness
- Number and severity of assumptions
- Number and severity of risk flags
- Presence of exception triggers
- Quality of cash-flow evidence

## 4. Criteria-Freshness Model

| Age | Label | Confidence Effect |
|---:|---|---|
| 0–30 days | Current | No automatic reduction |
| 31–90 days | Review Soon | Maximum confidence is Medium unless reverified |
| More than 90 days | Stale | Low; no final routing |
| No verification date | Unverified | Low; no final recommendation |
| Inactive product | Inactive | Excluded |

## 5. Missing-Data Penalties

### Critical missing data

Examples:

- State
- Industry
- Time in business
- Average monthly revenue
- Requested amount
- Use of funds
- Deadline or urgency
- Verified product criteria

Treatment:

- Status: More Information Required
- Confidence: Low
- Final ranking: Blocked

### Supporting missing data

Examples:

- Average balance
- Deposit count
- Credit range
- Estimated free cash flow
- Customer concentration
- Payment preference

Treatment depends on product relevance. Lower category rating and confidence when
the missing field could materially change the route.

## 6. Conflicting-Data Penalties

A conflict is material when different values could change:

- A hard-gate result
- A score band
- Product ranking
- Document requirements
- Payment-pressure review
- Exception status

Treatment:

- Preserve each value and source.
- Do not select the favorable value.
- Lower confidence to Medium or Low.
- Create exception review.
- Ask one targeted clarification.
- Block final routing when the conflict affects a hard gate.

## 7. Estimated-Data Handling

Estimated data must be labeled.

Use estimates only when:

- The calculation method is known.
- The source fields are available.
- The estimate is relevant.
- The output states the limitation.
- A verified value is not being disguised as an estimate.

Estimated data cannot satisfy a mandatory verified field unless the product rule
explicitly allows it.

## 8. Borrower-Reported vs. Verified Data

| Source | Default Reliability Treatment |
|---|---|
| Document verified | Stronger |
| Bank-link verified | Stronger |
| Authorized API retrieved | Stronger |
| CRM imported with current source | Moderate to strong |
| Borrower reported | Moderate |
| Calculated | Depends on source fields and formula |
| Estimated | Lower |
| Unknown | Low |

A verified value can still be stale. A borrower-reported value can still be
accurate. The labels describe evidence, not character.

## 9. Stale-Product Handling

For Stale products:

- Show last verification date.
- Exclude from final recommendations.
- Allow historical comparison only.
- Create a criteria-verification task.
- Do not refresh the date without source review.
- Do not substitute general industry knowledge.

## 10. Unverified-Product Handling

For Unverified products:

- Do not state that the product is currently available.
- Do not rank as a final route.
- Show missing source and verification fields.
- Request product-owner review.
- Use educational product-category guidance only.

## 11. Exception Triggers

Create exception review for:

- Hard gate returns Review.
- Borrower is near a threshold.
- Criteria conflict.
- Criteria are Review Soon, Stale, or Unverified.
- Revenue is seasonal.
- Customer concentration is high.
- Existing positions may be paid off.
- Industry classification is unclear.
- Required collateral is conditional.
- Personal guarantee rule is conditional.
- High score has Low confidence.
- Manual override is requested.
- No Current Match may reflect a product-network gap.

## 12. Exception Severity

| Severity | Meaning |
|---|---|
| Low | Minor issue unlikely to change the route |
| Medium | Material condition requires reviewer decision |
| High | Likely to change ranking, eligibility, or timing |
| Critical | Privacy, fraud, compliance, or prohibited override issue |

## 13. Exception Priority

| Priority | Suggested Treatment |
|---|---|
| Critical | Immediate stop and senior escalation |
| High | Review before any route is shared |
| Medium | Review before submission preparation |
| Low | Document and resolve during routine review |

Priority may consider:

- Funding deadline
- Severity
- Product freshness
- Missing critical documents
- Value of requested amount
- Open borrower communication
- Existing lender relationship
- No Current Match status

## 14. Escalation Roles

| Issue | Reviewer |
|---|---|
| Missing intake data | Intake owner or processor |
| Product criteria | Product Owner and Criteria Reviewer |
| Hard-gate exception | Senior broker or authorized credit-review role |
| Privacy exposure | Security, privacy, or compliance owner |
| Fraud concern | Authorized fraud or underwriting personnel |
| Manual override | Senior reviewer |
| No Current Match | Product-network or strategy owner |
| Action failure | Workflow or integration owner |

## 15. Manual Override Requirements

Required fields:

- Analysis ID
- Borrower ID
- Original top route
- Selected route
- Reviewer
- Date
- Reason
- Evidence
- Risk acknowledgement
- Expected advantage
- Follow-up action
- Outcome-tracking requirement

Prohibited override reasons:

- Compensation alone
- Popularity
- Personal preference without evidence
- Hiding a restriction
- Avoiding documentation
- Bypassing stale criteria
- Making a promised outcome fit the system

## 16. No Current Match Triggers

Return No Current Match when:

- Every product fails.
- No verified products exist.
- Product criteria are stale or unverified.
- Critical borrower information is missing.
- Use of funds is unsupported.
- Requested amount falls outside all verified ranges.
- Payment pressure makes forced routing misleading.
- Product network lacks the required structure.
- A safe recommendation cannot be explained transparently.

## 17. Product-Network Coverage Gaps

Distinguish borrower weakness from inventory weakness.

A No Current Match may mean:

- No equipment product exists in the matrix.
- No product supports the borrower’s state.
- No product covers the amount range.
- No product supports the industry.
- No product offers the needed payment structure.
- Existing products are stale or inactive.

Label the result:

```text
No Current Match — Product Network Coverage Gap
```

Do not tell the borrower they are unfundable merely because the matrix is thin.

## 18. Required Output Language

Use:

- Confidence: High / Medium / Low
- Criteria last verified: [date]
- Missing information: [list]
- Assumptions: [list]
- Exception review required: Yes / No
- Final routing status: [status]

Avoid:

- Definitely qualifies
- Guaranteed
- Approved
- Safe
- Affordable
- Best lender
- Exact approval odds

## Canonical Match Labels

These routing labels must remain consistent across the Knowledge pack:

| Score or Condition | Canonical Label |
|---|---|
| 85–100 with adequate evidence | Strong Apparent Fit |
| 70–84 | Potential Fit |
| 55–69 | Weak or Conditional Fit |
| Below 55 | Poor Current Fit |
| No defensible verified route | No Current Match |

The label describes alignment inside the declared model. It does not describe an
approval probability, final lender decision, or borrower entitlement.

## 19. Decision Table

| Condition | Score | Confidence | Routing |
|---|---|---|---|
| High score, High confidence, Current criteria | Show strong apparent fit | High | Human review |
| High score, Low confidence | Show provisional score only | Low | More information / exception |
| Medium score, High confidence | Show reliable conditional fit | High | Compare alternatives |
| Failed hard gate | Do not score normally | N/A | Exclude |
| Stale criteria | Historical score only if useful | Low | Verify criteria |
| Empty matrix | No score | Low | No Current Match |
| Critical conflict | Stop | Low | Exception review |
| Unsupported use | No normal score | N/A | Exclude |
| Product-network gap | No score | Varies | No Current Match |

## 20. Fictional Examples

### Example A — High Score, Low Confidence

A fictional profile scores 88, but revenue is estimated and product criteria are
110 days old.

Output:

```text
Provisional score: 88
Confidence: Low
Final routing: Blocked
Reason: Stale criteria and estimated revenue
Next step: Verify current criteria and revenue
```

### Example B — Moderate Score, High Confidence

A fictional profile scores 72 using current verified data.

Output:

```text
Potential Fit
Confidence: High
Reason: Reliable evidence shows moderate alignment and a clear payment-frequency tradeoff.
```

### Example C — No Current Match Due to Matrix Gap

The borrower seeks equipment financing, but the verified matrix contains no
active equipment product.

Output:

```text
No Current Match — Product Network Coverage Gap
The result does not establish that the borrower is ineligible elsewhere.
```

## 21. Review Checklist

- [ ] Score and confidence are separate.
- [ ] Criteria date is shown.
- [ ] Missing data is listed.
- [ ] Conflicts are preserved.
- [ ] Estimates are labeled.
- [ ] Stale criteria block final routing.
- [ ] Unverified products are not presented as available.
- [ ] Exception severity and owner are assigned.
- [ ] Overrides include evidence.
- [ ] No Current Match distinguishes borrower and network gaps.
- [ ] Required disclosure is included.

## Required Disclosure

> This analysis is an internal routing aid based on the information and product criteria provided. It is not an approval, offer, guarantee, or underwriting decision. Eligibility, terms, costs, and availability may change and require current lender review.
