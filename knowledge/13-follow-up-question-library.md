# Follow-Up Question Library

**GPT:** Lender Fit Routing Copilot  
**File:** `13-follow-up-question-library.md`  
**Version:** 1.1  
**Status:** Production Reference  
**Last Updated:** 2026-07-16  
**Purpose:** Provide prioritized, privacy-safe questions for missing, conflicting, stale, and product-specific information.

## Source Status

- Methodology status: Approved
- Operational-data status: Current Snapshot — Mixed Verification
- Human review required: Yes

## Current Intake-Registry Questions

- **`business_persona`:** Which description best fits the business: established small business, gig/1099 operator, ecommerce seller, startup, real-estate investor, or equipment-heavy operator?
- **`lowest_monthly_revenue_90_days`:** What was the lowest monthly revenue during the last 90 days?
- **`bank_account_type`:** Are business sales deposited into a business account, personal account, or neither?
- **`bank_status`:** How would you describe recent account activity: inconsistent deposits, consistent deposits, strong clean activity, or recent NSFs/overdrafts?

Do not ask for full account numbers, routing numbers, passwords, or unredacted statements in ordinary chat.

## 1. How to Use This Library

Ask the smallest useful set of questions needed for the next decision.

Do not:

- Ask for information already supplied.
- Ask for Social Security numbers, full tax IDs, account numbers, routing
  numbers, passwords, tokens, or unredacted documents in ordinary chat.
- Ask every question at once.
- Use questions to pressure the borrower.
- Hide why the information matters.

## 2. Priority Labels

| Label | Meaning |
|---|---|
| Required Before Matching | Final hard-gate evaluation cannot begin without it |
| Required Before Ranking | Product comparison would be materially unreliable without it |
| Required Before Submission | Needed after human route selection and before package submission |
| Helpful for Product Comparison | Improves comparison but may not block preliminary analysis |
| Human Review Only | Requires authorized judgment or secure handling |

## 3. Question Style

Good:

> What is average monthly revenue over the most recent three complete months,
> and is that figure verified or borrower-reported?

Bad:

> Send me all your banking information.

## 4. Business Identity

- **Required Before Matching:** What redacted internal borrower ID should this analysis use?
- **Required Before Submission:** Has the legal business name been verified in the approved system?
- **Human Review Only:** Are there any identity inconsistencies that require secure verification?

## 5. Entity and Ownership

- **Required Before Ranking:** What is the legal entity type?
- **Required Before Submission:** What ownership percentages are recorded in the approved system?
- **Human Review Only:** Does the ownership structure create a product-specific eligibility question?

## 6. State and Geography

- **Required Before Matching:** What state does the business primarily operate in?
- **Required Before Ranking:** Does the business operate or register in any additional states relevant to the request?
- **Human Review Only:** Which state should control the eligibility review when operations and registration differ?

## 7. Industry and NAICS

- **Required Before Matching:** What is the business’s primary industry?
- **Helpful for Product Comparison:** Is a current NAICS code available?
- **Human Review Only:** Does the business activity cross into a restricted or specially reviewed industry?

## 8. Time in Business

- **Required Before Matching:** How many complete months has the business operated?
- **Required Before Ranking:** Is that figure based on formation date, operating date, or verified revenue history?
- **Human Review Only:** Which date should control if the formation and operating dates differ?

## 9. Revenue

- **Required Before Matching:** What is average monthly revenue over the most recent complete review period?
- **Required Before Ranking:** How many months were used to calculate that average?
- **Required Before Ranking:** Is the revenue verified, borrower-reported, or estimated?
- **Helpful for Product Comparison:** How much does revenue vary between peak and low months?

## 10. Bank Activity

- **Required Before Ranking:** What is the current average bank balance over the defined review period?
- **Required Before Ranking:** How many negative days and returned items occurred during that period?
- **Human Review Only:** Do recent bank trends materially differ from the historical average?

## 11. Existing Obligations

- **Required Before Ranking:** What active business debt payments are currently due each month?
- **Required Before Submission:** Has the debt schedule been verified against current records?
- **Helpful for Product Comparison:** Will any obligation be paid off through the proposed transaction?

## 12. Existing Funding Positions

- **Required Before Ranking:** How many active funding positions does the business currently have?
- **Required Before Submission:** What are the current balances and payment frequencies in the approved system?
- **Human Review Only:** Would a payoff-at-closing structure change the position count?

## 13. Credit Range

- **Required Before Ranking:** What current credit range is available?
- **Required Before Ranking:** Is the range verified, borrower-reported, or unknown?
- **Human Review Only:** Are there material recent credit events that require secure review?

## 14. Requested Amount

- **Required Before Matching:** How much capital is requested?
- **Required Before Ranking:** Is the request one amount or a range?
- **Helpful for Product Comparison:** Would a lower amount still solve the stated need?

## 15. Minimum Useful Amount

- **Helpful for Product Comparison:** What is the minimum amount that would meaningfully solve the need?
- **Human Review Only:** Would accepting less capital create a partial solution with the same payment burden?

## 16. Use of Funds

- **Required Before Matching:** What will the capital specifically pay for?
- **Required Before Ranking:** How much of the request is allocated to each use?
- **Helpful for Product Comparison:** How long will each financed expense produce value?

## 17. Funding Deadline

- **Required Before Matching:** What is the real date by which funds must be available?
- **Required Before Ranking:** What business event creates that deadline?
- **Human Review Only:** Is the deadline compatible with the documentation and verification process?

## 18. Urgency

- **Required Before Matching:** Is the need immediate, within 7 days, within 30 days, within 60 days, or flexible?
- **Helpful for Product Comparison:** Would a slower product still work if its structure is more suitable?

## 19. Payment Preferences

- **Helpful for Product Comparison:** Which payment frequency best matches the business’s deposit timing?
- **Helpful for Product Comparison:** Does the business prefer a reusable facility or a fixed lump sum?
- **Human Review Only:** Which tradeoffs are acceptable between timing, term, payment frequency, and documentation?

## 20. Collateral

- **Required Before Ranking:** What collateral categories may be available?
- **Required Before Submission:** Has ownership and availability been verified?
- **Human Review Only:** Is the collateral suitable for the selected product type?

## 21. Personal Guarantee

- **Required Before Ranking:** Is the relevant owner willing to consider a personal guarantee?
- **Required Before Submission:** Has the product’s actual guarantee requirement been reverified?
- **Human Review Only:** Are there ownership or legal questions requiring qualified review?

## 22. Accounts Receivable

- **Helpful for Product Comparison:** What is the current accounts-receivable balance?
- **Required Before Ranking:** Are the invoices completed, undisputed, and owed by business customers?
- **Human Review Only:** How concentrated are receivables among the largest customers?

## 23. Equipment

- **Helpful for Product Comparison:** What equipment is being purchased or refinanced?
- **Required Before Ranking:** Is a current vendor quote or invoice available?
- **Required Before Submission:** Has the equipment’s ownership, condition, and intended use been verified?

## 24. Inventory

- **Helpful for Product Comparison:** What inventory will be purchased?
- **Required Before Ranking:** What is the expected sell-through period and gross margin?
- **Human Review Only:** What happens if demand or platform payouts are slower than forecast?

## 25. Documents

- **Required Before Ranking:** Which required document categories are already available?
- **Required Before Ranking:** Which material documents are missing?
- **Required Before Submission:** When were the documents last reviewed for completeness and consistency?

## 26. Bank-Link Completion

- **Required Before Ranking:** Has the approved business bank-link step been completed?
- **Required Before Submission:** Is the linked account the primary operating account?
- **Human Review Only:** Are there data-quality or authorization issues with the bank-link result?

## 27. Consent and Authorization

- **Required Before Matching:** Is analysis authorization confirmed?
- **Required Before Submission:** Is borrower consent for the intended submission documented in the approved system?
- **Human Review Only:** Does the planned use of data exceed the authorization currently recorded?

## 28. Conflicting Information

- **Required Before Matching:** Which value is current, and what source supports it?
- **Required Before Ranking:** When were the conflicting values recorded?
- **Human Review Only:** Could the conflict change a hard-gate result or product ranking?

## 29. Stale Information

- **Required Before Ranking:** Can this borrower field be reverified before scoring?
- **Required Before Ranking:** Can the product criteria be reverified before final routing?
- **Human Review Only:** Should the product be disabled until current evidence is available?

## 30. Product-Specific Clarification

- **Required Before Ranking:** Which declared product requirement is unclear or missing?
- **Required Before Submission:** Has the provider’s current documentation requirement been confirmed?
- **Human Review Only:** Is the issue a hard gate, preference, or undocumented anecdote?

## 31. Exception Review

- **Human Review Only:** What exact condition triggered exception review?
- **Human Review Only:** What evidence would resolve the exception?
- **Human Review Only:** Which authorized reviewer owns the decision?
- **Human Review Only:** Is a manual override being requested, and what evidence supports it?

## 32. Submission Readiness

- **Required Before Submission:** Has the selected product’s criteria been reverified?
- **Required Before Submission:** Are all product-specific documents complete?
- **Required Before Submission:** Is borrower authorization documented?
- **Required Before Submission:** Has a qualified human approved the route?

## 33. No Current Match Follow-Up

- **Required Before Matching:** Is No Current Match caused by missing borrower data or by an empty product matrix?
- **Helpful for Product Comparison:** Which product category or amount range is missing from the current network?
- **Human Review Only:** What readiness work or product-network expansion could create a future route?
- **Human Review Only:** Would waiting, collecting documents, reducing obligations, or changing the requested structure materially improve the analysis?

## 34. Question-Selection Logic

1. Identify the next blocked decision.
2. Select only questions that can unblock it.
3. Rank critical fields first.
4. Separate chat-safe questions from secure-system tasks.
5. Avoid duplicate questions.
6. Explain the reason when the user may not understand why a field matters.
7. Stop when enough information exists for the next stage.

## 35. Mini Question Sets

### Intake Missing Core Fields

- What state does the business primarily operate in?
- How many complete months has it operated?
- What is average monthly revenue over the latest complete period?
- How much is requested?
- What will the capital specifically pay for?
- What is the real deadline?

### High Score, Low Confidence

- Which key values are estimated?
- Which values can be verified now?
- When were the product criteria last confirmed?
- What conflict could materially change the ranking?

### Product Matrix Audit

- Which rows have no source?
- Which rows have no verification date?
- Which products are Stale or Unverified?
- Which fields are being treated as unrestricted because they are blank?

### No Current Match

- Is the result caused by missing data, failed gates, stale criteria, or a
  product-network gap?
- What fixable gap should be addressed first?
- Which product category is absent from the matrix?
- Would a different amount, use, timeline, or documentation status change the
  analysis?

## 36. Required Disclosure

> This analysis is an internal routing aid based on the information and product criteria provided. It is not an approval, offer, guarantee, or underwriting decision. Eligibility, terms, costs, and availability may change and require current lender review.
