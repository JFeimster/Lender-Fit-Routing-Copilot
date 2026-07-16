# Borrower Intake Guide

**GPT:** Lender Fit Routing Copilot  
**File:** `04-borrower-intake-guide.md`  
**Version:** 1.1  
**Status:** Production Reference  
**Last Updated:** 2026-07-16  
**Purpose:** Define every canonical borrower field, validation rule, intake label, and follow-up path.

## Source Status

- Methodology status: Approved
- Operational-data status: Current Snapshot — Mixed Verification
- Human review required: Yes

## Operational Field Aliases

| Source Field | Canonical Knowledge Field |
|---|---|
| `business_persona` | `business_profile.business_persona` |
| `monthly_revenue` | `financial_profile.average_monthly_revenue` |
| `lowest_monthly_revenue_90_days` | `financial_profile.lowest_monthly_revenue_90_days` |
| `time_in_business_months` | `business_profile.time_in_business_months` |
| `credit_score_band` | `owner_profile.credit_range` |
| `bank_account_type` | `financial_profile.bank_account_type` |
| `bank_status` | `financial_profile.bank_status` |
| `funding_purpose` | `funding_request.use_of_funds` |
| `desired_funding_amount` | `funding_request.requested_amount` |
| `red_flags` | `risk_flags` |

Names, emails, phone numbers, and raw source-record notes remain in approved CRM systems. They are not general Knowledge content.

## 1. Why Normalized Intake Matters

Lender matching fails early when the same fact appears three ways:

- Revenue is monthly in one record and annual in another.
- Time in business is written as “three years” in notes but 28 months in a CRM.
- The use of funds says “working capital” even though the money is for equipment.
- An old credit estimate is treated as verified.
- A document checklist says complete while the bank link is still missing.

The canonical intake converts messy information into defined fields with source,
verification, and freshness metadata.

## 2. Required vs. Optional Fields

### Required for schema validity

- Borrower ID
- Intake date
- Data last verified
- Intake owner
- Redaction confirmation
- State
- Industry
- Time in business in months
- Average monthly revenue
- Requested amount
- At least one use of funds
- Urgency level or funding deadline
- Document completion percentage
- Available-document list
- Missing-document list
- Intake-quality score and label
- Field evidence
- Missing and conflicting field lists
- Analysis authorization and consent status

### Optional but often material

- Annual revenue
- Average bank balance
- Negative days and NSFs
- Existing obligations and funding positions
- Estimated free cash flow
- Credit range
- Ownership percentage
- Collateral
- Payment preference
- Customer concentration
- Accounts receivable
- Revenue seasonality

An optional field may become required for a particular product.

## 3. Field Dictionary

### Metadata

| Field | Definition | Example |
|---|---|---|
| `borrower_id` | Redacted internal identifier; never use SSN, EIN, or account number. | `BR-0042` |
| `analysis_id` | Optional identifier for a specific matching run. | `AN-2026-0142` |
| `intake_date` | Date the structured intake was created. | `2026-07-15` |
| `data_last_verified` | Most recent date critical fields were checked. | `2026-07-14` |
| `intake_owner` | Person or team responsible for completeness. | `Broker Ops` |
| `schema_version` | Intake-schema version. | `1.0` |
| `source_system` | CRM, form, API, or manual source. | `partner_command_center` |
| `source_record_id` | Redacted source-system record. | `deal_8721` |
| `currency` | ISO 4217 currency code. | `USD` |
| `redaction_confirmed` | Must be true before ordinary analysis. | `true` |
| `profile_status` | Draft, ready, validated, or archived. | `validated` |

### Business profile

| Field | Definition | Notes |
|---|---|---|
| `legal_business_name_redacted` | Redacted or business-only name when appropriate. | Avoid owner personal identifiers. |
| `dba_name_redacted` | Operating name. | Optional. |
| `entity_type` | LLC, corporation, sole proprietor, partnership, nonprofit, other, or unknown. | Use declared legal structure. |
| `state` | Two-letter operating-state code. | Use uppercase. |
| `industry` | Normalized industry category. | Keep source detail in notes. |
| `naics_code` | Two- to six-digit NAICS code. | Do not guess. |
| `time_in_business_months` | Whole months since actual business start. | Use consistent calculation. |
| `business_start_date` | Documented start date when available. | Optional. |
| `employee_count` | Current employee count. | Do not include contractors unless defined. |
| `business_location_type` | Commercial, home-based, mobile, online, multiple, or other. | Useful for product context. |
| `website_present` | Whether a credible business website exists. | Not a universal eligibility rule. |
| `ownership_structure_summary` | Concise ownership structure without restricted identifiers. | Example: `80/20 two-owner LLC`. |

### Financial profile

| Field | Definition | Notes |
|---|---|---|
| `average_monthly_revenue` | Average gross business revenue over declared review period. | Required. |
| `revenue_review_period_months` | Number of complete months used. | Usually 3–12, depending on workflow. |
| `annual_revenue` | Gross annual business revenue. | State period and source. |
| `average_monthly_deposit_count` | Average count of business deposits. | Optional. |
| `average_bank_balance` | Average balance over declared period. | Identify calculation method. |
| `negative_days_review_period` | Number of calendar days reviewed. | Example: 90. |
| `negative_days_count` | Days ending below the defined threshold. | Define the threshold in workflow. |
| `nsf_review_period` | Days covered by NSF count. | Example: 90. |
| `nsf_or_returned_item_count` | Count of returned or nonsufficient-fund items. | Verify source. |
| `existing_monthly_debt_payments` | Estimated combined monthly business debt payments. | Include known active obligations. |
| `existing_funding_positions` | Number of active funding positions. | Nonnegative integer. |
| `estimated_free_cash_flow` | Documented estimate of cash available after operating costs and obligations. | Never imply underwriting certainty. |
| `accounts_receivable` | Current receivables balance when relevant. | Useful for invoice products. |
| `accounts_payable` | Current payables balance when relevant. | Useful for cash-flow context. |
| `gross_margin_percent` | Gross margin percentage. | Label period and source. |
| `revenue_seasonality` | None known, low, moderate, high, or unknown. | Explain peak and low periods in notes. |
| `customer_concentration_percent` | Percent of revenue from the largest customer or defined group. | Use verified data when possible. |

### Owner profile

| Field | Definition | Notes |
|---|---|---|
| `credit_range` | Category such as `640_679`, not an approval prediction. | Prefer range over exact score. |
| `ownership_percent` | Relevant owner’s percentage. | 0–100. |
| `personal_guarantee_willingness` | Yes, no, unsure, or not applicable. | Willingness is not eligibility. |
| `material_credit_events` | Disclosed categories such as bankruptcy, lien, or default. | Collect lawfully and securely. |
| `owner_information_status` | Complete, partial, not collected, or not applicable. | Helps confidence. |

### Funding request

| Field | Definition | Notes |
|---|---|---|
| `requested_amount` | Amount the borrower is seeking. | Required and greater than zero. |
| `minimum_useful_amount` | Lowest amount that can meaningfully solve the stated need. | Prevents useless small offers. |
| `use_of_funds` | Normalized list of purposes. | Required. |
| `use_of_funds_details` | Plain-English breakdown. | Example: equipment quote plus installation. |
| `funding_deadline` | Real date funds are needed. | Do not manufacture urgency. |
| `urgency_level` | Immediate, within 7/30/60 days, or flexible. | At least deadline or urgency is required. |
| `preferred_term` | Short, medium, long, flexible, or unknown. | Preference, not a guarantee. |
| `preferred_payment_frequency` | Daily, weekly, biweekly, monthly, flexible, or unknown. | Compare with cash-flow timing. |
| `collateral_available` | Equipment, real estate, receivables, inventory, none, or other. | Verify ownership and availability later. |
| `bank_link_completed` | Whether an approved bank-link step is complete. | Never collect login credentials. |
| `existing_lender_relationship` | Concise relationship note. | Do not expose credentials. |

### Document readiness

| Field | Definition |
|---|---|
| `completion_percentage` | 0–100 estimate of the required package completed. |
| `readiness_label` | Complete, mostly complete, incomplete, insufficient, or unknown. |
| `available_documents` | Canonical document categories currently available. |
| `missing_documents` | Canonical document categories still needed. |
| `document_storage_reference` | Approved-system reference, not a public restricted-data link. |
| `documents_last_reviewed` | Date a human last reviewed availability and quality. |

### Data quality

| Field | Definition |
|---|---|
| `intake_quality_score` | 0–100 completion and reliability score. |
| `intake_label` | Complete, mostly complete, incomplete, or insufficient for matching. |
| `field_evidence` | Source and verification record for important fields. |
| `missing_critical_fields` | Critical fields unavailable. |
| `conflicting_fields` | Fields with inconsistent values or sources. |
| `estimated_fields` | Values not verified directly. |
| `analysis_confidence` | High, Medium, or Low based on quality and freshness. |

### Consent and authorization

| Field | Definition |
|---|---|
| `analysis_authorization_status` | Whether analysis is authorized. |
| `consent_status` | Confirmed, not collected, declined, or unknown. |
| `submission_authorization_status` | Separate status for actual submission. |
| `authorization_last_verified` | Date status was confirmed. |
| `consent_record_reference` | Approved-system reference. |

### Risk flags and notes

Risk flags are structured objects with category, severity, description, source,
review requirement, and resolution status. Notes must not become a dumping
ground for restricted data.

## 4. Allowed Values

### Credit ranges

- `720_plus`
- `680_719`
- `640_679`
- `600_639`
- `550_599`
- `below_550`
- `unknown`
- `not_provided`

### Use of funds

- `working_capital`
- `inventory`
- `equipment`
- `payroll`
- `expansion`
- `marketing`
- `receivables_gap`
- `tax_obligation`
- `debt_refinance`
- `acquisition`
- `real_estate`
- `emergency_repair`
- `other`

### Verification status

- `verified`
- `borrower_reported`
- `estimated`
- `conflicting`
- `stale`
- `unverified`
- `not_applicable`

### Source type

- `user_provided`
- `document_verified`
- `bank_link_verified`
- `crm_imported`
- `api_retrieved`
- `calculated`
- `estimated`
- `unknown`

## 5. Fictional-Data Rule

All examples in this guide are fictional. Do not reuse them as evidence of a
real lender requirement, approval, or case study.

## 6. Revenue Definitions

### Average monthly revenue

Use gross business revenue over a stated period:

```text
sum of complete-month revenue ÷ number of complete months
```

Do not mix:

- Gross sales and net income
- Personal deposits and business revenue
- Partial months with complete months without labeling them
- Borrower estimates and verified bank data without exposing the distinction

### Annual revenue

Identify whether it is:

- Prior calendar year
- Trailing 12 months
- Current-year projection
- Tax-return figure
- Borrower-reported estimate

A projection is not a verified historical result.

## 7. Time-in-Business Calculation

Preferred method:

```text
whole months between verified business start date and intake date
```

Use the actual operating start required by the workflow, not whichever date
produces the better result. If formation date and operating date differ, retain
both in source notes and escalate when material.

## 8. Existing-Obligation Definitions

Include known active business obligations that affect payment pressure or a
declared product rule.

Distinguish:

- Monthly installment obligations
- Daily or weekly revenue-based payments
- Revolving balances
- Equipment obligations
- Real-estate obligations
- Obligations intended to be paid off through the proposed transaction

Do not hide positions because they weaken the match.

## 9. Use-of-Funds Normalization

Ask what the money will actually pay for.

“Working capital” is too broad when the real use is:

- Payroll bridge
- Inventory order
- Equipment purchase
- Receivables gap
- Marketing campaign
- Tax obligation
- Debt refinance
- Emergency repair

The expected duration of the benefit should be compared with the product
structure.

## 10. Funding-Deadline Definitions

| Value | Meaning |
|---|---|
| Immediate | A documented need within roughly three business days |
| Within 7 Days | Capital required within one week |
| Within 30 Days | Capital required within one month |
| Within 60 Days | Capital required within two months |
| Flexible | No fixed near-term deadline |

Record the real operational event: payroll date, equipment delivery, inventory
deadline, closing date, or receivables gap.

## 11. Document-Readiness Definitions

Suggested labels:

| Completion | Label |
|---:|---|
| 100 | Complete |
| 75–99 | Mostly Complete |
| 50–74 | Incomplete |
| Below 50 | Insufficient |
| Unknown | Unknown |

A percentage is a workflow estimate. Product-specific documents may change the
final checklist.

## 12. Credit-Range Handling

Use a range where possible. Record source and date. Do not ask for a full credit
report in ordinary chat. Do not present the range as a lender decision.

## 13. Collateral Categories

- None
- Equipment
- Real estate
- Accounts receivable
- Inventory
- Other
- Unknown

“Available” means potentially available for review, not confirmed eligible or
properly valued.

## 14. Bank-Link Status

Use:

- `true`: completed through approved workflow
- `false`: not completed
- `null`: unknown or not applicable

Never request a username, password, routing number, or account number.

## 15. Data-Source Labels

A value should identify whether it came from the borrower, document, bank link,
CRM, API, calculation, estimate, or unknown source.

Source labels affect confidence. They do not automatically decide truth.

## 16. Verification-Status Labels

### Verified

Supported by an approved current source.

### Borrower reported

Provided by the borrower but not yet independently verified.

### Estimated

Calculated or approximated from partial data.

### Conflicting

More than one material value exists.

### Stale

Previously verified but outside the approved age window.

### Unverified

Source or confirmation is absent.

### Not applicable

The field does not apply to this profile or product.

## 17. Intake-Quality Formula

A simple completion score may be calculated:

```text
completed required fields ÷ total required fields × 100
```

Improve it by weighting critical fields more heavily and reducing the score for
conflicts, stale values, and estimates.

The score must not override a decisive missing field.

## 18. Completeness Thresholds

| Score | Label | Routing |
|---:|---|---|
| 90–100 | Complete | Matching may proceed if product criteria are verified |
| 75–89 | Mostly Complete | Matching may proceed with visible limitations |
| 50–74 | Incomplete | Preliminary analysis and questions only |
| Below 50 | Insufficient for Matching | Stop final ranking |

## 19. Conflicting-Data Handling

When values conflict:

1. Preserve each value and source.
2. Do not average them unless the metric requires an approved calculation.
3. Flag the field.
4. Lower confidence.
5. Ask a targeted clarification.
6. Route to human review when material.
7. Never choose the value that creates a stronger match without evidence.

## 20. Missing-Information Routing

### Stop before matching when missing

- State
- Industry
- Time in business
- Average monthly revenue
- Requested amount
- Use of funds
- Urgency or deadline
- Verified product criteria

### Request before final ranking when material

- Existing positions
- Negative bank activity
- Credit range
- Required collateral
- Product-specific documents
- Ownership or guarantee information

## 21. Prioritized Follow-Up Questions

### Required Before Matching

- What state does the business primarily operate in?
- What is the normalized industry or NAICS code?
- How many complete months has the business operated?
- What is average monthly revenue over the most recent complete review period?
- How much capital is requested?
- What will the capital specifically pay for?
- What is the real funding deadline?

### Required Before Ranking

- How many active funding positions exist?
- What monthly payments are currently active?
- Which required documents are available?
- Are the revenue and bank metrics verified or borrower-reported?
- Is collateral available for the stated product type?

### Helpful for Product Comparison

- What is the minimum useful amount?
- Which payment frequency best matches deposit timing?
- How long will the financed expense produce value?
- Is the business seasonal?
- Is one customer responsible for a material share of revenue?

## 22. Common Intake Mistakes

- Using annual revenue in a monthly field
- Mixing personal and business deposits
- Treating partial months as complete
- Using “working capital” without detail
- Omitting active positions
- Treating a borrower-reported score as verified
- Marking documents complete without human review
- Leaving verification dates blank
- Pasting restricted identifiers into notes
- Using an old CRM record without freshness review

## 23. Privacy Reminders

Do not enter SSNs, full tax IDs, account numbers, routing numbers, credentials,
or unredacted documents. Use approved-system references and structured derived
fields.

## 24. Completed Fictional Intake Example

```json
{
  "metadata": {
    "borrower_id": "BR-FICTIONAL-0042",
    "analysis_id": "AN-FICTIONAL-0091",
    "intake_date": "2026-07-15",
    "data_last_verified": "2026-07-14",
    "intake_owner": "Fictional Broker Ops",
    "schema_version": "1.0",
    "source_system": "fictional_crm",
    "source_record_id": "deal_fictional_42",
    "currency": "USD",
    "redaction_confirmed": true,
    "profile_status": "validated"
  },
  "business_profile": {
    "legal_business_name_redacted": "Fictional Construction Co.",
    "dba_name_redacted": null,
    "entity_type": "llc",
    "state": "VA",
    "industry": "commercial_construction",
    "naics_code": "236220",
    "time_in_business_months": 38,
    "business_start_date": "2023-05-01",
    "employee_count": 9,
    "business_location_type": "commercial",
    "website_present": true,
    "ownership_structure_summary": "Single-owner LLC"
  },
  "financial_profile": {
    "average_monthly_revenue": 85000,
    "revenue_review_period_months": 6,
    "annual_revenue": 980000,
    "average_monthly_deposit_count": 18,
    "average_bank_balance": 32000,
    "negative_days_review_period": 90,
    "negative_days_count": 2,
    "nsf_review_period": 90,
    "nsf_or_returned_item_count": 1,
    "existing_monthly_debt_payments": 6200,
    "existing_funding_positions": 1,
    "estimated_free_cash_flow": 18000,
    "accounts_receivable": 140000,
    "accounts_payable": 72000,
    "gross_margin_percent": 31,
    "revenue_seasonality": "moderate",
    "customer_concentration_percent": 22
  },
  "owner_profile": {
    "credit_range": "680_719",
    "ownership_percent": 100,
    "personal_guarantee_willingness": "yes",
    "material_credit_events": ["none_disclosed"],
    "owner_information_status": "complete"
  },
  "funding_request": {
    "requested_amount": 150000,
    "minimum_useful_amount": 120000,
    "use_of_funds": ["equipment", "working_capital"],
    "use_of_funds_details": "Fictional equipment purchase and installation bridge.",
    "funding_deadline": "2026-08-15",
    "urgency_level": "within_30_days",
    "preferred_term": "medium",
    "preferred_payment_frequency": "monthly",
    "collateral_available": ["equipment"],
    "bank_link_completed": true,
    "existing_lender_relationship": null
  },
  "document_readiness": {
    "completion_percentage": 85,
    "readiness_label": "mostly_complete",
    "available_documents": [
      "application",
      "bank_statements",
      "business_bank_link",
      "profit_and_loss",
      "balance_sheet",
      "debt_schedule",
      "business_formation_documents"
    ],
    "missing_documents": ["equipment_quote"],
    "document_storage_reference": "secure://fictional/deal_42",
    "documents_last_reviewed": "2026-07-14"
  },
  "data_quality": {
    "intake_quality_score": 94,
    "intake_label": "complete",
    "field_evidence": [
      {
        "field_name": "average_monthly_revenue",
        "source_type": "bank_link_verified",
        "verification_status": "verified",
        "verified_date": "2026-07-14",
        "source_reference": "secure_ref_revenue_42",
        "review_notes": null
      }
    ],
    "missing_critical_fields": [],
    "conflicting_fields": [],
    "estimated_fields": ["estimated_free_cash_flow"],
    "analysis_confidence": "high"
  },
  "consent_and_authorization": {
    "analysis_authorization_status": "confirmed",
    "consent_status": "confirmed",
    "submission_authorization_status": "not_requested",
    "authorization_last_verified": "2026-07-14",
    "consent_record_reference": "secure_ref_consent_42"
  },
  "risk_flags": [
    {
      "category": "document_gap",
      "severity": "medium",
      "description": "Fictional equipment quote is not yet available.",
      "source_type": "user_provided",
      "human_review_required": true,
      "resolved": false,
      "resolution_notes": null
    }
  ],
  "notes": {
    "borrower_summary": "Fictional example for schema training only.",
    "internal_review_notes": null,
    "privacy_notes": "No live personal data."
  }
}
```

## 25. Incomplete Fictional Intake Example

```json
{
  "borrower_id": "BR-FICTIONAL-0099",
  "known_fields": {
    "state": "MD",
    "industry": "restaurant",
    "requested_amount": 50000
  },
  "missing_critical_fields": [
    "time_in_business_months",
    "average_monthly_revenue",
    "use_of_funds",
    "urgency_level_or_funding_deadline"
  ],
  "analysis_status": "more_information_required",
  "allowed_next_step": "Generate intake questions only; do not rank products."
}
```

## Required Disclosure

> A complete intake does not confirm eligibility, affordability, approval, terms,
> or funding. It only gives the routing process enough structured information to
> begin a controlled comparison against current verified product criteria.
