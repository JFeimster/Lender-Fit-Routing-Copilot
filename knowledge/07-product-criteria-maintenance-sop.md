# Product Criteria Maintenance SOP

**GPT:** Lender Fit Routing Copilot  
**File:** `07-product-criteria-maintenance-sop.md`  
**Version:** 1.1  
**Status:** Production Reference  
**Last Updated:** 2026-07-16  
**Purpose:** Define how funding-product criteria are sourced, verified, changed, versioned, deactivated, audited, and replaced.

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

## Read-Only Source Rule

Refreshing this Knowledge pack does not require changing source systems.

1. Read the existing registries and approved connector records.
2. Normalize only fields required by the existing Knowledge contracts.
3. Replace the Knowledge-pack snapshot and increment its version.
4. Leave Notion properties, Drive documents, repository registries, Wix content, and Vercel settings unchanged unless a separate task explicitly requests an edit.

## 1. Why Criteria Maintenance Matters

The lender-fit model is only as trustworthy as the product criteria it receives.
A clean scoring engine connected to stale rules produces organized nonsense.

Criteria maintenance protects against:

- Routing a borrower to an inactive product
- Applying an old revenue or time-in-business threshold
- Missing a state or industry restriction
- Presenting outdated documentation requirements
- Treating a broker anecdote as a lender rule
- Comparing a borrower against an unverified product
- Hiding the source and age of a requirement

The maintenance process must preserve source, date, owner, version, and review
history for every product record.

## 2. Ownership Model

Use four roles.

| Role | Responsibility |
|---|---|
| Product Owner | Maintains the business relationship and monitors criteria changes |
| Criteria Editor | Normalizes source information into the product matrix |
| Criteria Reviewer | Verifies the change against approved evidence |
| System Owner | Publishes the matrix, archives the prior version, and runs validation |

No one person should add, approve, and publish a material rule change without
secondary review.

## 3. Approved Information Sources

Approved sources may include:

- Current provider or lender rate sheets
- Current provider portal criteria
- Written program guides
- Written provider communications
- Authorized API responses
- Executed agreements defining program rules
- Verified relationship-manager communications documented in writing
- Internal decision records clearly tied to a current provider rule
- Current compliance or operations notices

Each source must be identified in `criteria_source`.

## 4. Prohibited Information Sources

Do not convert these into hard gates:

- Memory
- Sales chatter
- Social-media posts
- Undated screenshots
- Old email threads without reconfirmation
- One-off approval or decline outcomes
- A broker’s “they usually like this” comment
- AI-generated lender criteria
- Competitor websites
- Unverified marketplace summaries
- Borrower anecdotes
- Assumptions inferred from product names

Anecdotal information may be stored in `notes` with an explicit
`unverified` label. It must not silently become eligibility logic.

## 5. Verification Cadence

| Trigger | Required Review |
|---|---|
| Provider announces a change | Immediate |
| New product is added | Before activation |
| Product becomes inactive | Immediate |
| Criteria reach 31 days | Review Soon check |
| Criteria reach 91 days | Stale; final routing blocked |
| Exception pattern appears | Within five business days |
| Product is frequently overridden | Monthly review |
| Matrix version is replaced | Full validation |
| No provider updates occur | Monthly operational audit |

## 6. Freshness Labels

| Age Since Verification | Label | Operational Treatment |
|---:|---|---|
| 0–30 days | Current | May be scored normally |
| 31–90 days | Review Soon | Score with warning and verify before final route |
| More than 90 days | Stale | Do not present as final route |
| No date | Unverified | Do not rank as a final recommendation |
| Product deactivated | Inactive | Exclude from matching |

Freshness is a governance rule, not a lender rule.

## 7. How to Add a Product

1. Create a unique `product_id`.
2. Record the exact product name and product type.
3. Record provider name only when permitted.
4. Attach or reference the approved source.
5. Enter only criteria supported by the source.
6. Leave unsupported fields blank.
7. Set `record_status` to `unverified`.
8. Assign a Product Owner.
9. Have the Criteria Reviewer compare every populated field with the source.
10. Add `criteria_last_verified`.
11. Set `record_status` to `current` only after approval.
12. Increment `matrix_version`.
13. Archive the prior matrix.
14. Run schema, duplicate, freshness, and regression tests.
15. Publish the new matrix.

## 8. How to Update a Product

For each change:

- Identify the affected `product_id`.
- Preserve the old value in the change log.
- Record the new value.
- Record the source.
- Record the effective date.
- Record who edited and reviewed it.
- Recalculate freshness.
- Assess whether the change breaks hard-gate or scoring logic.
- Increment the matrix version.
- Retest affected cases.

Do not update several unrelated rules under one vague note such as
“program revised.”

## 9. How to Deactivate a Product

1. Set `active_status` to `false`.
2. Set `record_status` to `inactive`.
3. Record the deactivation date and source.
4. Explain whether the product is paused, closed, replaced, or unknown.
5. Remove it from normal matching.
6. Preserve the record for audit and historical analysis.
7. Identify any analyses that relied on the prior active version.
8. Do not delete the record merely to make the matrix look clean.

## 10. Handling Conflicting Criteria

When two approved sources conflict:

1. Preserve both source references.
2. Record each value and date.
3. Do not choose the more permissive value.
4. Set `record_status` to `unverified` or `review_soon`.
5. Add an exception note.
6. Contact the authorized provider representative or source owner.
7. Resolve the conflict in writing.
8. Record the resolution and reviewer.
9. Increment the matrix version.
10. Retest affected routes.

## 11. Undocumented Lender Preferences

Undocumented preferences may be recorded only as:

- `notes`
- `best_fit_profile`
- `exception_policy`

They must be labeled:

```text
Anecdotal / not a hard gate / requires verification
```

They may inform a reviewer’s questions but may not exclude a product or increase
a weighted score without approved evidence.

## 12. Required Source Evidence

Every current product should have:

- Source type
- Source date
- Source reference
- Effective date when known
- Product Owner
- Criteria Reviewer
- Verification date
- Matrix version
- Record status
- Change summary

A private portal reference must not include login credentials.

## 13. Required Verification Fields

Before a record can be `current`, confirm:

- Product ID
- Product name
- Product type
- Active status
- Amount range
- State rules
- Industry rules
- Time-in-business rules
- Revenue rules
- Existing-position rules when applicable
- Collateral or guarantee rules when applicable
- Supported and prohibited uses of funds
- Required documents
- Criteria source
- Criteria last verified
- Product owner
- Matrix version

Blank fields are acceptable when the product does not declare the rule or the
information is truly unknown. Unknown fields must not be interpreted as
“no restriction.”

## 14. Change-Log Process

Maintain an immutable change log with:

| Field | Description |
|---|---|
| Change ID | Unique identifier |
| Product ID | Affected product |
| Matrix Version From | Prior version |
| Matrix Version To | New version |
| Field Changed | Canonical field |
| Old Value | Prior value |
| New Value | New value |
| Source | Approved source |
| Effective Date | When the rule applies |
| Editor | Person entering change |
| Reviewer | Person approving change |
| Review Date | Approval date |
| Reason | Clear explanation |
| Test Cases Run | Regression references |
| Rollback Reference | Prior archive |

## 15. Version-Control Process

Use:

```text
PM-YYYY-MM-DD-rN
```

Example:

```text
PM-2026-07-15-r1
```

Increment the revision for every production matrix replacement on the same day.

Do not reuse a version identifier.

## 16. Reviewer Signoff

A reviewer confirms:

- The source is approved and current.
- Every populated field is supported.
- Unknown fields remain unknown.
- No hard gate was inferred.
- State and industry lists are normalized.
- Amount and revenue units are correct.
- Date and version metadata are complete.
- The product status is appropriate.
- Affected tests passed.

## 17. Stale-Record Handling

For `stale` records:

- Exclude them from final routing.
- Allow matrix audit and historical review.
- Show the last verification date.
- Create a criteria-review task.
- Do not refresh the date without rechecking the source.
- Do not copy old values into a new row and call them current.

## 18. Unverified-Record Handling

For `unverified` records:

- Do not produce final recommendations.
- Do not describe the product as available.
- Allow a reviewer to inspect the record.
- List missing evidence.
- Assign an owner and due date.
- Retain the record only if there is a legitimate path to verification.

## 19. Emergency Product Changes

When a provider pauses, closes, or materially changes a program:

1. Mark the record `inactive` or `unverified` immediately.
2. Block it from routing.
3. Notify active reviewers.
4. Identify open deals tied to the product.
5. Record the source and timestamp.
6. Publish a hotfix matrix version.
7. Complete secondary review as soon as practical.
8. Document any temporary manual process.

## 20. Audit Schedule

### Weekly

- Review Stale, Unverified, and Review Soon records.
- Check products without owners.
- Check missing source references.
- Review recently changed fields.
- Review routing exceptions tied to criteria.

### Monthly

- Compare provider inventory with active matrix rows.
- Review manual overrides by product.
- Review decline reasons suggesting a missing rule.
- Check duplicate products.
- Check inconsistent list values.
- Review product-network coverage gaps.

### Quarterly

- Full schema conformance review.
- Full source-evidence review.
- Archive integrity check.
- Access and permissions review.
- Workflow and action regression test.

## 21. Quality-Control Checklist

- [ ] Product ID is unique.
- [ ] Product is active or explicitly inactive.
- [ ] Source is approved.
- [ ] Verification date is present.
- [ ] Product Owner is assigned.
- [ ] Amounts use the matrix currency.
- [ ] Monthly and annual revenue fields are not confused.
- [ ] State codes are normalized.
- [ ] Industry values are normalized.
- [ ] Unknown does not mean unrestricted.
- [ ] No rate, term, or speed was guessed.
- [ ] No anecdote became a hard gate.
- [ ] Required documents are current.
- [ ] Record status matches freshness.
- [ ] Matrix version changed.
- [ ] Prior version was archived.
- [ ] Tests passed.

## 22. Matrix Replacement Procedure

1. Freeze edits to the current production matrix.
2. Export the candidate matrix.
3. Validate against `06-product-matrix-schema.json`.
4. Validate CSV headers.
5. Check duplicate IDs.
6. Check status and freshness.
7. Compare field-level changes with prior version.
8. Review high-impact changes.
9. Run routing regression tests.
10. Obtain reviewer signoff.
11. Archive the old matrix.
12. Publish the new file.
13. Update GPT Knowledge or the authorized data service.
14. Record deployment date and owner.
15. Monitor early exceptions.

## 23. Rollback Procedure

Rollback when:

- Schema validation fails.
- Criteria source is later found unreliable.
- Product IDs are duplicated or remapped incorrectly.
- Hard gates behave unexpectedly.
- Reviewers report material false exclusions or inclusions.
- The matrix contains restricted information.

Steps:

1. Disable affected routing.
2. Restore the prior archived matrix.
3. Record the rollback reason.
4. Notify reviewers.
5. Correct the candidate matrix.
6. Re-run validation and tests.
7. Publish a new version; never reuse the failed version.

## 24. Example Change Log

| Change ID | Product ID | Field | Old | New | Source | Reviewer | Status |
|---|---|---|---|---|---|---|---|
| CHG-FICT-001 | PROD-FICT-01 | `minimum_time_in_business_months` | 12 | 18 | Fictional provider notice | Fictional Reviewer | Approved |
| CHG-FICT-002 | PROD-FICT-01 | `record_status` | current | inactive | Fictional pause notice | Fictional Reviewer | Approved |

These rows are fictional workflow examples, not real lender criteria.

## 25. Criteria-Maintenance Dashboard Metrics

Track:

- Total products
- Active products
- Current products
- Review Soon products
- Stale products
- Unverified products
- Products without owners
- Products without sources
- Average days since verification
- Changes this week
- Emergency deactivations
- Exceptions tied to criteria conflicts
- Overrides by product
- Declines suggesting missing rules
- Product-network coverage gaps

## Required Disclosure

> This analysis is an internal routing aid based on the information and product criteria provided. It is not an approval, offer, guarantee, or underwriting decision. Eligibility, terms, costs, and availability may change and require current lender review.
