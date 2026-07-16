# Lender Fit Routing Copilot Knowledge Index

**GPT:** Lender Fit Routing Copilot  
**File:** `00-knowledge-index.md`  
**Version:** 1.1  
**Status:** Production Reference  
**Last Updated:** 2026-07-16  
**Purpose:** Navigate, govern, update, and validate the complete 20-file Knowledge pack.

## Source Status

- Methodology status: Approved
- Operational-data status: Current Snapshot — Mixed Verification
- Human review required: Yes

> [!IMPORTANT]
> `05-current-funding-product-matrix.csv` now contains **59 active product rows**
> covering **19 providers** and **8 operational product families**.
> The source snapshot is dated June 26, 2026. It includes
> **3 source-verified rows** and
> **56 dated portfolio-import rows**.
> Imported rows may support preliminary routing, but confidence is capped at Medium
> until a qualified human confirms the provider-specific criteria.

## Operational Source Snapshot — v1.1

- Product matrix: 59 active rows from the existing internal product registry.
- Providers represented: 19.
- Product families represented: 8.
- Lead-field registry: 19 normalized intake fields.
- Family-routing registry: 11 preliminary routing rules.
- Funding-readiness scorecard: kept separate from product-fit scoring.
- PII-bearing source registries reviewed for structure only: 65 pipeline records, 1 applicant seed record, and 50 partner records.
- No source registry, Notion database, Drive file, GitHub repository, Vercel project, or Wix record was modified.

## 1. Purpose of This Knowledge Pack

This pack gives Lender Fit Routing Copilot a controlled operating system for analyzing a
redacted borrower profile against current, verified funding-product criteria.
The files separate four jobs that should never be mashed together:

1. **Data definition:** what borrower and product fields mean.
2. **Decision logic:** how hard gates, weighted scores, confidence, freshness,
   and exceptions work.
3. **Human operations:** how reviewers prepare, document, approve, override, and
   audit routing decisions.
4. **Automation:** how actions and workflows may support—but not replace—the
   qualified human reviewer.

The Knowledge pack is designed to make the GPT transparent. Every material
routing output must expose the rules used, evidence, missing information,
assumptions, confidence level, criteria-verification date, and required human
decision.

## 2. GPT Purpose and Boundaries

### The GPT may

- Accept a redacted, structured borrower profile.
- Validate intake completeness and data quality.
- Compare borrower fields with verified product criteria.
- Apply declared hard gates.
- Calculate a transparent weighted score.
- Rank apparent product matches for human review.
- Identify missing, stale, conflicting, or estimated information.
- Generate follow-up questions, review briefs, and preparation checklists.
- Return **No Current Match** when the available evidence does not support a
  defensible route.

### The GPT may not

- Approve or decline funding.
- Guarantee approval, terms, costs, amounts, or timing.
- Describe a lender-fit score as an approval probability.
- Invent lender criteria or undocumented preferences.
- Treat stale or unverified criteria as current.
- Confirm affordability or advise a borrower to accept an offer.
- Select or submit to a lender without qualified human review.
- Rank products primarily by broker compensation.
- Replace underwriting, lending, legal, tax, accounting, or compliance judgment.

## 3. Exact 20-File Inventory

| # | Filename | Format | Purpose | Maintenance Class |
|---:|---|---|---|---|
| 1 | `00-knowledge-index.md` | Markdown | Master navigation, governance, dependencies, and update instructions. | Static governance; review quarterly |
| 2 | `01-operating-manual.md` | Markdown | Main reasoning workflow, output contract, and operational boundaries. | Static methodology; review when workflow changes |
| 3 | `02-privacy-redaction-data-handling.md` | Markdown | Privacy, redaction, sensitive-data, document, and action rules. | Static policy; review quarterly |
| 4 | `03-borrower-intake-schema.json` | JSON Schema | Canonical machine-readable borrower-profile contract. | Controlled schema |
| 5 | `04-borrower-intake-guide.md` | Markdown | Human-readable borrower-field dictionary and intake examples. | Controlled methodology |
| 6 | `05-current-funding-product-matrix.csv` | CSV | Current verified product criteria used for matching. | **Live operational data; frequent maintenance** |
| 7 | `06-product-matrix-schema.json` | JSON Schema | Canonical product-matrix and product-record contract. | Controlled schema |
| 8 | `07-product-criteria-maintenance-sop.md` | Markdown | Procedure for adding, verifying, updating, deactivating, and auditing criteria. | Operational SOP |
| 9 | `08-hard-gate-rules.json` | JSON | Versioned generic gate definitions applied before scoring. | Controlled decision logic |
| 10 | `09-weighted-scoring-model.md` | Markdown | Definitive 100-point score model, evidence rules, and examples. | Controlled decision logic |
| 11 | `10-confidence-staleness-exception-rules.md` | Markdown | Confidence, freshness, conflict, escalation, and exception logic. | Controlled decision logic |
| 12 | `11-funding-product-types-fit-guide.md` | Markdown | Educational product-category fit and poor-fit reference. | Educational reference |
| 13 | `12-human-review-brief-template.md` | Markdown | Standard concise and detailed reviewer output templates. | Operational template |
| 14 | `13-follow-up-question-library.md` | Markdown | Prioritized missing-information and clarification questions. | Operational template |
| 15 | `14-submission-checklist-template.md` | Markdown | General and product-specific preparation checklists. | Operational template |
| 16 | `15-exception-review-sop.md` | Markdown | Formal escalation, review, override, and audit procedure. | Operational SOP |
| 17 | `16-outcome-tracking-schema.json` | JSON Schema | Canonical decisions, offers, declines, funding, and audit outcomes. | Controlled schema |
| 18 | `17-crm-field-map.csv` | CSV | CRM-neutral field and pipeline-stage mapping. | Integration map |
| 19 | `18-n8n-workflow-and-action-map.md` | Markdown | Workflow, actions, checkpoints, payloads, and error handling. | Automation architecture |
| 20 | `19-test-cases-and-expected-outputs.md` | Markdown | Evaluation, privacy, routing, action, and regression test suite. | Release control |

## 4. Recommended Upload Order

Upload files in this order so the GPT encounters governance before data and
decision logic:

1. `00-knowledge-index.md`
2. `01-operating-manual.md`
3. `02-privacy-redaction-data-handling.md`
4. `03-borrower-intake-schema.json`
5. `04-borrower-intake-guide.md`
6. `06-product-matrix-schema.json`
7. `05-current-funding-product-matrix.csv`
8. `07-product-criteria-maintenance-sop.md`
9. `08-hard-gate-rules.json`
10. `09-weighted-scoring-model.md`
11. `10-confidence-staleness-exception-rules.md`
12. `11-funding-product-types-fit-guide.md`
13. `12-human-review-brief-template.md`
14. `13-follow-up-question-library.md`
15. `14-submission-checklist-template.md`
16. `15-exception-review-sop.md`
17. `16-outcome-tracking-schema.json`
18. `17-crm-field-map.csv`
19. `18-n8n-workflow-and-action-map.md`
20. `19-test-cases-and-expected-outputs.md`

The order does not change the product criteria. The current product matrix or an
authorized criteria action remains the operational source of truth.

## 5. Source-of-Truth Hierarchy

Use sources in this order:

1. Current criteria returned by an authorized action with source and
   verification metadata.
2. Current verified rows in `05-current-funding-product-matrix.csv`.
3. Approved rule files and schemas in this pack.
4. Structured user-provided information, clearly labeled by source and
   verification status.
5. General educational knowledge.

When sources conflict:

- Show the conflict.
- Show each source and verification date.
- Prefer the most recently verified authorized source only when its authority is
  established.
- Lower confidence.
- Route the affected product to exception review.
- Never silently choose the value that produces the highest score.

## 6. Canonical Terminology

| Term | Canonical Meaning |
|---|---|
| Borrower profile | Structured business and funding-request information |
| Product matrix | Current structured funding-product criteria |
| Hard gate | Mandatory pass, fail, review, or missing-data rule |
| Weighted score | Transparent internal routing score |
| Strong Apparent Fit | High alignment within the declared model |
| Potential Fit | Moderate alignment requiring human review |
| Weak or Conditional Fit | Limited alignment or material conditions |
| Poor Current Fit | Low alignment under current data and rules |
| No Current Match | No defensible route in the available verified matrix |
| Confidence level | Reliability of analysis based on quality, consistency, and freshness |
| Criteria freshness | Current, Review Soon, Stale, or Unverified |
| Exception review | Human escalation for ambiguous or borderline cases |
| Manual override | Human route change with a documented reason |
| Human-review brief | Concise operational summary for a qualified reviewer |
| Submission checklist | Preparation list, not an automatic submission |
| Outcome | Approval, decline, withdrawal, offer, funding, or other disposition |

Never use **approval probability** as a synonym for lender-fit score.

## 7. File Dependency Map

```text
00 Knowledge Index
 ├─ 01 Operating Manual
 ├─ 02 Privacy and Redaction
 ├─ 03 Borrower Intake Schema ── 04 Borrower Intake Guide
 ├─ 06 Product Matrix Schema ── 05 Current Product Matrix
 ├─ 07 Criteria Maintenance SOP
 ├─ 08 Hard-Gate Rules
 ├─ 09 Weighted Scoring Model
 ├─ 10 Confidence / Staleness / Exceptions
 ├─ 11 Product-Type Fit Guide
 ├─ 12 Human-Review Brief
 ├─ 13 Follow-Up Questions
 ├─ 14 Submission Checklist
 ├─ 15 Exception Review SOP
 ├─ 16 Outcome Schema
 ├─ 17 CRM Field Map
 ├─ 18 n8n and Action Map
 └─ 19 Test Cases
```

### Key dependencies

- `03-borrower-intake-schema.json` and `04-borrower-intake-guide.md` must use the
  same field names and allowed values.
- `05-current-funding-product-matrix.csv` must conform to
  `06-product-matrix-schema.json`.
- `08-hard-gate-rules.json` must reference fields defined in the borrower and
  product schemas.
- `09-weighted-scoring-model.md` and
  `10-confidence-staleness-exception-rules.md` must use identical match and
  freshness labels.
- `17-crm-field-map.csv` must map the canonical fields rather than create
  competing definitions.
- `19-test-cases-and-expected-outputs.md` must test the current versions of all
  rule files and schemas.

## 8. Static Methodology vs. Live Operational Data

### Mostly static

Files 1–5 and 7–20 define methodology, schemas, templates, workflow, and tests.
They should change only through documented version control.

### Live operational data

`05-current-funding-product-matrix.csv` is the primary maintenance burden. It
must be reviewed whenever a provider changes criteria and on the schedule
defined in `07-product-criteria-maintenance-sop.md`.

An authorized API may eventually replace the CSV as the live source of truth.
If that occurs, keep the CSV either as an offline fallback with a visible
snapshot date or replace it with a file that explains the API source and
retrieval rules.

## 9. Version-Control Rules

Use semantic versions for pack methodology:

- Patch: wording, formatting, or nonbreaking clarification.
- Minor: new optional fields, rules, or examples.
- Major: breaking field changes, scoring changes, or workflow changes.

Use dated versions for operational matrices:

```text
PM-YYYY-MM-DD-rN
```

Every analysis should retain:

- Borrower schema version
- Product-matrix version
- Hard-gate rules version
- Scoring-model version
- Prompt or agent version
- Workflow version

Never overwrite the historical version attached to an existing analysis.

## 10. Criteria-Freshness Warning

Default freshness rules:

| Age Since Verification | Label | Routing Treatment |
|---:|---|---|
| 0–30 days | Current | May be scored normally |
| 31–90 days | Review Soon | Score with visible warning |
| More than 90 days | Stale | Verify before final routing |
| No verification date | Unverified | Do not present as final recommendation |

These are governance defaults, not lender requirements.

## 11. Human-Review Requirement

Human review is mandatory before:

- Treating a ranked product as a selected route.
- Creating or changing a submission checklist.
- Saving a manual override.
- Updating external CRM, task, or outcome records.
- Sharing a route with a borrower as a recommendation.
- Submitting any application or document package.

The GPT may prepare a decision. It may not own the lending decision.

## 12. Replacing `05-current-funding-product-matrix.csv`

1. Export or collect current criteria from approved sources.
2. Normalize rows to the exact CSV headers.
3. Leave unsupported or unknown values blank; do not infer them.
4. Add `criteria_last_verified`, `criteria_source`, `product_owner`,
   `matrix_version`, and `record_status`.
5. Validate each row against `06-product-matrix-schema.json`.
6. Review state, industry, amount, revenue, time-in-business, position,
   collateral, and use-of-funds fields.
7. Assign a second human reviewer for material changes.
8. Save the prior matrix as an immutable archive.
9. Replace the GPT Knowledge file.
10. Run the matrix and regression tests in
    `19-test-cases-and-expected-outputs.md`.

Do not merge an unverified spreadsheet directly into production because it
looks tidy. A polished mistake is still a mistake.

## 13. Updating Schemas Without Breaking Compatibility

Before changing a schema:

1. Identify every file and action that references the field.
2. Decide whether the change is additive or breaking.
3. Preserve existing field names whenever practical.
4. Add new optional fields before making them required.
5. Update the human guide and CRM map in the same release.
6. Increment the schema and Knowledge-pack version.
7. Run old and new fictional examples through validation.
8. Document migration instructions.
9. Do not reinterpret an existing field without renaming or versioning it.

## 14. Knowledge-File Maintenance Calendar

| Frequency | Review |
|---|---|
| On every provider notice | Affected product-matrix rows |
| Weekly | Products marked Review Soon, Stale, Unverified, or Inactive |
| Monthly | Matrix completeness, source links, owners, exception patterns |
| Quarterly | Privacy rules, operating manual, field schemas, CRM map |
| On workflow release | Action map, prompts, test cases, output templates |
| Annually | Full governance review and archive cleanup |

## 15. Prohibited Content

Do not add:

- Fabricated lender or provider records
- Guessed minimum revenue or credit rules
- Universal rate, cost, term, or speed claims
- Private credentials or API keys
- Full Social Security or tax-identification numbers
- Full bank account or routing numbers
- Unredacted identity documents
- Raw borrower documents used as general examples
- Fake approvals, declines, testimonials, or case studies
- Compensation rules that silently control product ranking
- Instructions authorizing automatic lender submission

## 16. Required Disclosure

> This analysis is an internal routing aid based on the information and product criteria provided. It is not an approval, offer, guarantee, or underwriting decision. Eligibility, terms, costs, and availability may change and require current lender review.

## 17. Quick Diagnostic: Which File Should Answer This?

| Question | Primary File |
|---|---|
| What is the GPT allowed to do? | `01-operating-manual.md` |
| Can this data be pasted into chat? | `02-privacy-redaction-data-handling.md` |
| Is this borrower object valid? | `03-borrower-intake-schema.json` |
| What does this borrower field mean? | `04-borrower-intake-guide.md` |
| What products are currently available? | `05-current-funding-product-matrix.csv` |
| Is this product record structured correctly? | `06-product-matrix-schema.json` |
| How should criteria be updated? | `07-product-criteria-maintenance-sop.md` |
| Does this product fail a mandatory rule? | `08-hard-gate-rules.json` |
| How is the 100-point score calculated? | `09-weighted-scoring-model.md` |
| Why is confidence Low despite a high score? | `10-confidence-staleness-exception-rules.md` |
| What product category may fit this use case? | `11-funding-product-types-fit-guide.md` |
| How should the reviewer brief look? | `12-human-review-brief-template.md` |
| What should we ask next? | `13-follow-up-question-library.md` |
| What must be prepared before submission? | `14-submission-checklist-template.md` |
| Who handles an ambiguous deal? | `15-exception-review-sop.md` |
| How are decisions and outcomes recorded? | `16-outcome-tracking-schema.json` |
| Which CRM property receives this field? | `17-crm-field-map.csv` |
| How should n8n and actions connect? | `18-n8n-workflow-and-action-map.md` |
| Did the GPT pass release testing? | `19-test-cases-and-expected-outputs.md` |

## 18. Final Readiness Checklist

- [ ] All 20 files use the expected filenames.
- [ ] The product matrix contains 59 rows, source dates, and verification labels.
- [ ] No product criteria were inferred.
- [ ] Borrower and product schemas validate.
- [ ] Hard-gate fields exist in both schemas.
- [ ] Scoring and freshness labels are consistent.
- [ ] Privacy rules prohibit sensitive identifiers in chat.
- [ ] No Current Match is supported.
- [ ] Every ranked result exposes confidence and verification date.
- [ ] Manual overrides require a reason.
- [ ] External write actions require confirmation.
- [ ] No automatic application-submission action exists.
- [ ] The current test suite passes.
- [ ] A qualified human remains responsible for the final route.
