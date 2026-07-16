# Exception Review SOP

**GPT:** Lender Fit Routing Copilot  
**File:** `15-exception-review-sop.md`  
**Version:** 1.1  
**Status:** Production Reference  
**Last Updated:** 2026-07-16  
**Purpose:** Define escalation, evidence, reviewer authority, manual override, audit, and decision handling for ambiguous or borderline routes.

## Source Status

- Methodology status: Approved
- Operational-data status: Current Snapshot — Mixed Verification
- Human review required: Yes

## Current Source-Conflict Examples

Escalate instead of silently choosing a value when:

- Product-level and provider-level credit minimums differ.
- Numeric fields conflict with free-text requirements.
- A product row is dated but labeled as an imported portfolio record.
- A provider rule contains missing critical fields.
- A family-routing threshold is mistaken for a provider hard gate.
- A white-label description conflicts with the internal product record.

## 1. Definition of Exception Review

Exception review is the controlled human process used when normal routing logic
cannot produce a defensible final route without interpretation, additional
evidence, or authorized judgment.

An exception is not permission to ignore a rule.

## 2. Exception Categories

- Intake Data
- Product Criteria
- Hard-Gate Review
- Seasonal Revenue
- Customer Concentration
- Existing Obligations
- Payoff at Closing
- Industry Classification
- Criteria Freshness
- Conflicting Sources
- Low-Confidence High Score
- Manual Override
- Privacy or Security
- Fraud or Verification Concern
- Product-Network Coverage Gap
- No Current Match

## 3. Severity Levels

| Severity | Definition |
|---|---|
| Low | Minor issue unlikely to change the route |
| Medium | Material condition requiring reviewer judgment |
| High | Likely to change eligibility, ranking, timing, or documentation |
| Critical | Privacy, fraud, security, deception, or prohibited override issue |

## 4. Priority Levels

| Priority | Target Treatment |
|---|---|
| Critical | Stop immediately and escalate |
| High | Resolve before route is shared or checklist created |
| Medium | Resolve before submission preparation |
| Low | Resolve during normal review |

Priority should consider severity, deadline, criteria age, missing documents,
requested amount, open borrower communication, and potential harm.

## 5. Trigger Table

| Trigger | Default Severity | Required Action |
|---|---|---|
| Hard gate returns Review | Medium | Assign authorized reviewer |
| Criteria are Stale | High | Reverify before final route |
| Criteria are Unverified | High | Block recommendation |
| Critical borrower field conflicts | High | Resolve source conflict |
| High score with Low confidence | High | Block final strong-route language |
| Seasonal revenue affects payment timing | Medium | Review low-period cash flow |
| Customer concentration is material | Medium | Review concentration and customer quality |
| Existing positions may be paid off | Medium | Verify payoff mechanics |
| Industry classification is unclear | Medium | Obtain documented classification |
| User requests silent override | Critical | Refuse and escalate |
| Restricted data appears | Critical | Stop and follow privacy process |
| No verified product fits | Medium | Return No Current Match |
| Product network lacks category | Medium | Label coverage gap |

## 6. Intake-Data Exceptions

Examples include conflicting revenue, time-in-business dates, requested amount,
use of funds, positions, bank-review periods, or consent status.

Required evidence:

- Source references
- Verification dates
- Field owner
- Materiality assessment
- Resolution or explicit unresolved status

## 7. Product-Criteria Exceptions

Examples:

- Two current sources show different thresholds.
- Provider communication conflicts with the matrix.
- Required documents changed.
- Product appears paused.
- State or industry coverage is unclear.
- Product Owner is unavailable.

Do not choose the most permissive interpretation.

## 8. Hard-Gate Review Cases

A gate may return Review when the rule is conditional, the borrower is near a
threshold, the source is ambiguous, collateral may be substituted, a position
may be paid off, or an alternative document path may exist.

The reviewer must identify the authorized exception policy.

## 9. Seasonal-Revenue Cases

Review peak and low months, deposit timing, payment timing, inventory or payroll
cycle, low-period balances, whether the need is recurring, and whether the
product intensifies low-season pressure.

## 10. Customer-Concentration Cases

Review largest-customer percentage, contract duration, payment history, dispute
risk, receivable eligibility, replacement pipeline, and effect of customer loss.

## 11. Existing-Position Cases

Review count, balances, frequencies, standing, renewal/refinance intent, stacking
rules, payment pressure, and current provider position criteria.

## 12. Payoff-at-Closing Cases

Require a current payoff statement, authorized mechanics, verified product rule,
timing, net proceeds, borrower understanding, and reviewer approval.

Do not count a position as paid off because the borrower intends to do so.

## 13. Industry-Classification Cases

Review actual revenue-producing activities, NAICS, formation records, website,
contracts, invoices, restricted definitions, and mixed-industry treatment.

Do not relabel a business to evade a restriction.

## 14. Stale-Criteria Cases

- Block final route.
- Show last verification date.
- Assign Product Owner.
- Obtain approved current source.
- Update matrix version.
- Rerun gates and scoring.
- Preserve original analysis.

## 15. Conflicting-Source Cases

Record each source, value, date, authority, affected field, potential impact,
resolution owner, and final written confirmation.

## 16. Low-Confidence High-Score Cases

Required output:

```text
Provisional score: [score]
Confidence: Low
Final route: Blocked pending verification
```

Do not present a final Strong Apparent Fit until confidence improves.

## 17. No Current Match Cases

Classify:

- Borrower data insufficient
- All products fail
- Criteria stale or unverified
- Unsupported use
- Amount outside matrix
- Payment-pressure concern
- Product-network gap
- Privacy or authorization block

Explain next steps without promising future approval.

## 18. Reviewer Roles and Authority

| Role | Authority |
|---|---|
| Intake Owner | Resolve intake fields |
| Product Owner | Verify availability and criteria |
| Criteria Reviewer | Approve matrix changes |
| Senior Routing Reviewer | Approve conditional route or alternative |
| Security or Privacy Owner | Handle restricted-data events |
| Authorized Fraud or Underwriting Role | Review fraud or credit concerns |
| System Owner | Publish rules and maintain audit |
| Compliance or Legal Role | Review policy or legal interpretation |

## 19. Required Evidence

Every exception record should include IDs, trigger, category, severity, priority,
source references, dates, missing information, compensating factors, risks,
reviewer, due date, decision, reason, override status, and audit timestamps.

## 20. Service-Level Targets

| Priority | Target |
|---|---|
| Critical | Immediate acknowledgment |
| High | Same business day when practical |
| Medium | Before submission preparation |
| Low | Within routine review cycle |

These are operating targets, not borrower promises.

## 21. Manual Override Process

1. Preserve original model result.
2. Identify proposed alternative.
3. State evidence, expected advantage, and risks.
4. Confirm no prohibited factor controls the change.
5. Obtain authorized approval.
6. Record date and versions.
7. Create outcome-tracking requirement.
8. Never overwrite original output.

## 22. Prohibited Overrides

Refuse overrides intended to increase compensation alone, hide a failed gate,
conceal positions, misstate borrower facts, treat stale criteria as current,
avoid documents, bypass consent, transmit restricted data improperly, manufacture
approval language, or submit automatically.

## 23. Audit Logging

Log creation, assignment, evidence, status changes, reviewer decision, override,
criteria updates, workflow calls, final resolution, and outcome link.

Do not log restricted identifiers or raw documents unnecessarily.

## 24. Decision Outcomes

- Approve Route for Further Review
- Reject Route
- Request More Information
- Hold
- Select Alternative Product
- No Current Match

“Approve Route for Further Review” does not mean approve funding.

## 25. Escalation Matrix

| Issue | Primary Owner | Secondary Owner |
|---|---|---|
| Missing intake | Intake Owner | Senior Reviewer |
| Criteria conflict | Product Owner | Criteria Reviewer |
| Stale criteria | Product Owner | System Owner |
| Hard-gate exception | Senior Reviewer | Product Owner |
| Privacy event | Privacy Owner | Security Owner |
| Fraud concern | Authorized Fraud Role | Compliance |
| Prohibited override | Senior Reviewer | Compliance |
| Network coverage gap | Product Strategy Owner | System Owner |

## 26. Example Exception Records

### Fictional Example A — Stale Criteria

- Exception ID: `EX-FICT-001`
- Category: Criteria Freshness
- Severity: High
- Trigger: Criteria verified 112 days ago
- Decision: Hold
- Next step: Obtain current source

### Fictional Example B — Position Payoff

- Exception ID: `EX-FICT-002`
- Category: Payoff at Closing
- Severity: Medium
- Trigger: Product allows one position; borrower has two
- Evidence: Current payoff statement and provider confirmation
- Decision: Request More Information

### Fictional Example C — Prohibited Override

- Exception ID: `EX-FICT-003`
- Category: Manual Override
- Severity: Critical
- Trigger: Higher-commission route requested without fit evidence
- Decision: Reject Route

## 27. Final QA Checklist

- [ ] Trigger is explicit.
- [ ] Severity and priority are assigned.
- [ ] Evidence is listed.
- [ ] Versions are recorded.
- [ ] Reviewer authority is appropriate.
- [ ] Original model result is preserved.
- [ ] Override reason is evidence-based.
- [ ] Privacy rules are followed.
- [ ] Outcome tracking is required.
- [ ] Decision language is accurate.
- [ ] Required disclosure is included.

## Required Disclosure

> This analysis is an internal routing aid based on the information and product criteria provided. It is not an approval, offer, guarantee, or underwriting decision. Eligibility, terms, costs, and availability may change and require current lender review.
