# Human-Review Brief Template

**GPT:** Lender Fit Routing Copilot  
**File:** `12-human-review-brief-template.md`  
**Version:** 1.1  
**Status:** Production Reference  
**Last Updated:** 2026-07-16  
**Purpose:** Standardize concise and detailed lender-fit review briefs, reviewer decisions, and manual overrides.

## Source Status

- Methodology status: Approved
- Operational-data status: Current Snapshot — Mixed Verification
- Human review required: Yes

## Separate Score Display

- Funding-readiness score and tier:
- Funding-readiness model version:
- Product-fit score and routing label:
- Product-fit model version:
- Confidence level:
- Product criteria verification date:

Do not combine the scores or describe either score as an approval probability.

## 1. Usage Rules

Use this brief after intake validation and product analysis.

The brief must:

- Use a redacted borrower ID.
- Show criteria dates and sources.
- Expose exclusions, risks, missing data, assumptions, and confidence.
- Separate model output from human decision.
- Avoid approval language.
- Preserve No Current Match.
- Require reviewer signoff before a route is selected.

## 2. Reusable Blank Template

### Privacy and Redaction Check

- Borrower ID:
- Redaction confirmed:
- Restricted data detected:
- Approved storage references:
- Privacy notes:

### Analysis Status

Choose one:

- [ ] Ready for Matching
- [ ] Preliminary Analysis Only
- [ ] More Information Required
- [ ] No Current Match

### Borrower Snapshot

| Field | Value | Source | Verification Status | Verified Date |
|---|---|---|---|---|
| State |  |  |  |  |
| Industry |  |  |  |  |
| Time in business |  |  |  |  |
| Average monthly revenue |  |  |  |  |
| Existing positions |  |  |  |  |
| Average bank balance |  |  |  |  |
| Credit range |  |  |  |  |

### Funding Request

| Field | Value |
|---|---|
| Requested amount |  |
| Minimum useful amount |  |
| Use of funds |  |
| Funding deadline |  |
| Urgency |  |
| Preferred term |  |
| Preferred payment frequency |  |
| Collateral available |  |

### Intake Quality

- Intake quality score:
- Intake label:
- Confidence impact:
- Missing critical fields:
- Conflicting fields:
- Estimated fields:

### Data-Verification Summary

- Borrower data last verified:
- Product matrix version:
- Scoring model version:
- Hard-gate rules version:
- Criteria source status:

### Hard-Gate Summary

| Product | Rule | Borrower Value | Product Requirement | Result | Explanation |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

### Excluded Products

| Product | Failed Rule | Source | Fixable? | Next Step |
|---|---|---|---|---|
|  |  |  |  |  |

### Top Apparent Matches

| Rank | Product | Type | Score | Match Band | Confidence | Criteria Verified |
|---:|---|---|---:|---|---|---|
| 1 |  |  |  |  |  |  |
| 2 |  |  |  |  |  |  |
| 3 |  |  |  |  |  |  |

### Category Score Breakdown

| Category | Raw Rating | Weight | Weighted Points | Evidence | Conditions |
|---|---:|---:|---:|---|---|
| Core eligibility fit |  | 20 |  |  |  |
| Cash-flow and repayment fit |  | 20 |  |  |  |
| Funding-purpose fit |  | 15 |  |  |  |
| Credit and risk fit |  | 15 |  |  |  |
| Timing fit |  | 10 |  |  |  |
| Documentation fit |  | 10 |  |  |  |
| Cost and structure fit |  | 10 |  |  |  |

### Confidence Level

- Level:
- Reason:
- Evidence limitations:
- What would raise confidence:

### Strengths

- 
- 
- 

### Key Risks

- 
- 
- 

### Missing Information

- 
- 
- 

### Assumptions

- 
- 
- 

### Exception-Review Items

| Trigger | Severity | Product | Evidence Needed | Decision Required | Owner |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

### Payment-Pressure Observations

- Existing monthly obligations:
- Estimated new payment:
- Free-cash-flow evidence:
- Revenue seasonality:
- Deposit/payment timing:
- Review conclusion:

### Follow-Up Questions

#### Required Before Matching

- 

#### Required Before Ranking

- 

#### Required Before Submission

- 

### Decisions Required

- 
- 
- 

### Recommended Next Action

- Action:
- Owner:
- Due date:
- Required evidence:

### Reviewer Signoff

- Reviewer:
- Role:
- Decision:
- Date:
- Notes:

### Manual Override

- Override used:
- Original route:
- Selected route:
- Reason:
- Evidence:
- Risk acknowledgement:
- Expected advantage:
- Outcome tracking required:

### Required Disclosure

> This analysis is an internal routing aid based on the information and product criteria provided. It is not an approval, offer, guarantee, or underwriting decision. Eligibility, terms, costs, and availability may change and require current lender review.

## 3. Concise One-Page Version

### Deal Snapshot

- Borrower ID:
- State / Industry:
- Time in business:
- Average monthly revenue:
- Requested amount:
- Use of funds:
- Deadline:
- Existing positions:
- Intake quality:
- Data last verified:

### Routing Summary

| Rank | Product | Score | Confidence | Criteria Date | Status |
|---:|---|---:|---|---|---|
| 1 |  |  |  |  |  |
| 2 |  |  |  |  |  |
| 3 |  |  |  |  |  |

### Exclusions

- Product:
- Failed gate:
- Reason:

### Material Risks

- 
- 

### Missing Information

- 
- 

### Human Decision Needed

- 
- 

### Next Action

- Owner:
- Due:
- Action:

> This analysis is an internal routing aid based on the information and product criteria provided. It is not an approval, offer, guarantee, or underwriting decision. Eligibility, terms, costs, and availability may change and require current lender review.

## 4. Detailed Version

Use the reusable blank template when:

- Several products were evaluated.
- Exceptions exist.
- Criteria conflict.
- Confidence is Low.
- A manual override is considered.
- Payment pressure is material.
- The route may become an audit or training example.

Add attachments only through approved storage references.

## 5. Fictional Completed Example

> This example is fictional and does not represent a real lender, borrower,
> approval, or product criterion.

### Privacy and Redaction Check

- Borrower ID: `BR-FICTIONAL-0042`
- Redaction confirmed: Yes
- Restricted data detected: No
- Privacy notes: Structured fictional fields only

### Analysis Status

Ready for Matching

### Borrower Snapshot

| Field | Value | Source | Verification | Date |
|---|---|---|---|---|
| State | VA | CRM | Verified | 2026-07-14 |
| Industry | Commercial construction | Document | Verified | 2026-07-14 |
| Time in business | 38 months | Formation records | Verified | 2026-07-14 |
| Average monthly revenue | $85,000 | Bank link | Verified | 2026-07-14 |
| Existing positions | 1 | Debt schedule | Borrower reported | 2026-07-14 |
| Credit range | 680–719 | Approved source | Verified | 2026-07-10 |

### Funding Request

- Requested amount: $150,000
- Minimum useful amount: $120,000
- Use: Fictional equipment purchase and installation bridge
- Deadline: 2026-08-15
- Preferred payment: Monthly
- Collateral: Equipment

### Intake Quality

- Score: 94
- Label: Complete
- Missing critical fields: None
- Estimated fields: Estimated free cash flow

### Product Matrix

- Version: `PM-FICTIONAL-2026-07-15-r1`
- Criteria status: Current
- This fictional matrix is not included in the Knowledge pack.

### Top Apparent Match

| Product | Score | Band | Confidence | Criteria Date |
|---|---:|---|---|---|
| Fictional Equipment Product | 87 | Strong Apparent Fit | High | 2026-07-12 |

### Category Breakdown

| Category | Rating | Weight | Points | Evidence |
|---|---:|---:|---:|---|
| Core eligibility | 5 | 20 | 20 | Fictional criteria align |
| Cash flow | 4 | 20 | 16 | Positive but estimated free cash flow |
| Purpose | 5 | 15 | 15 | Direct equipment use |
| Credit/risk | 4 | 15 | 12 | One existing position |
| Timing | 4 | 10 | 8 | Process may fit if package is complete |
| Documents | 4 | 10 | 8 | Equipment quote missing |
| Cost/structure | 4 | 10 | 8 | Monthly preference aligns |

### Risks

- Equipment quote missing
- Existing position still borrower-reported
- Final cost cannot be compared before an actual offer

### Exception Review

Not required at this stage.

### Decisions Required

- Verify existing position.
- Obtain equipment quote.
- Reconfirm product criteria before route selection.

### Recommended Next Action

Processor requests the equipment quote and verifies the debt schedule.

### Reviewer Signoff

- Reviewer: Fictional Senior Reviewer
- Decision: Approve route for further review
- Date: 2026-07-15

> This analysis is an internal routing aid based on the information and product criteria provided. It is not an approval, offer, guarantee, or underwriting decision. Eligibility, terms, costs, and availability may change and require current lender review.

## 6. Reviewer Writing Standards

Use concise language.

Good:

```text
Product passes declared gates. Score is 78 with Medium confidence because
existing positions are borrower-reported and criteria are 61 days old.
```

Bad:

```text
This lender should definitely approve.
```

## 7. QA Checklist

- [ ] Borrower ID is redacted.
- [ ] Analysis status is explicit.
- [ ] Criteria version and date are visible.
- [ ] Excluded products are shown.
- [ ] Score breakdown is visible.
- [ ] Confidence is explained.
- [ ] Risks and missing data are not buried.
- [ ] Exceptions have owners.
- [ ] Manual override is separate from model output.
- [ ] Reviewer signs the decision.
- [ ] Required disclosure is present.
