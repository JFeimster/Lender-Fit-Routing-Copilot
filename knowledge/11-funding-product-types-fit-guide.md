# Funding Product Types Fit Guide

**GPT:** Lender Fit Routing Copilot  
**File:** `11-funding-product-types-fit-guide.md`  
**Version:** 1.1  
**Status:** Production Reference  
**Last Updated:** 2026-07-16  
**Purpose:** Explain common funding-product categories, fit considerations, poor-fit risks, and human-review questions without inventing lender terms.

## Source Status

- Methodology status: Approved
- Operational-data status: Current Snapshot — Mixed Verification
- Human review required: Yes

## Operational Product-Family Snapshot

| Family | Public Label | Typical Speed | Primary Use |
|---|---|---|---|
| Startup Funding Path | Startup / Credit-Leverage Funding | 3–10 days to 2–3 weeks | startup launch capital, setup costs, bridge liquidity |
| Revenue Advance Program | Fast Working Capital / Revenue-Based Funding | same day to 1–3 business days | payroll gap, inventory, materials |
| Business Line Access Solution | Business Line of Credit / Revolving Access | 3 days to 2–4 weeks | cash-flow smoothing, seasonal swings, recurring working capital |
| Structured Growth Loan Path | Structured Growth Capital | 2–4 weeks to 1–3 months | expansion, refinance, larger projects |
| Equipment Finance Solution | Equipment / Truck / Asset-Backed Funding | 24 hours to 2–4 weeks | construction, transportation, trucking |
| Real Estate Capital Track | Real Estate / Asset-Secured Capital | 2–4 weeks to 1–3 months | bridge loans, DSCR rental purchases, fix-and-flip |
| Marketplace Capital Track | Ecommerce / Marketplace Seller Capital | instant to 1–3 days for some paths; longer for structured growth | inventory, ad spend, marketplace cash-flow smoothing |
| Business Credit Builder Path | Business Credit Builder / Funding Prep | 30–180 days depending on build path | not-ready applicants, new entities, thin credit profiles |
| Manual Funding Strategy Review | Manual Funding Strategy Review | advisor-dependent | mixed-use requests, large asks, conflicting signals |

### Preliminary Routing Signals

| Route | Priority | Public Result | Condition Summary |
|---|---:|---|---|
| High-Revenue Select Funding Route | 110 | High-Revenue Working Capital Review | credit: 450; all-condition route |
| Business Bank + $15K Revenue Route | 100 | Fast Working Capital Review | credit: 450; time in business: 4; all-condition route |
| Entry Revenue / Personal Bank Route | 95 | Possible Fit for Select Fast-Capital Programs | any-condition route |
| Startup Credit-Leverage Route | 90 | Startup / Credit-Leverage Funding Path | credit: 680; monthly revenue max: 9999; time in business max: 5; purposes: startup_launch, business_credit_building, marketing_growth, inventory_materials |
| Marketplace Seller Capital Route | 89 | Marketplace Seller Capital Review | monthly revenue: 3000; support: platform_or_marketplace_name; any-condition route |
| Equipment / Asset-Backed Route | 88 | Equipment / Truck Funding Review | preferred credit: 600; preferred time in business: 12; support: equipment_invoice_or_quote; any-condition route |
| Real Estate / Asset-Secured Route | 88 | Real Estate Capital Strategy Review | any-condition route |
| Business Line Access Route | 85 | Business Line of Credit / Revolving Access Review | monthly revenue: 15000; credit: 600; time in business: 12; bank account: business; purposes: working_capital, inventory_materials, marketing_growth, cash_flow_smoothing |
| Structured Growth Capital Route | 82 | Structured Growth Capital Review | monthly revenue: 20000; credit: 600; time in business: 12; purposes: marketing_growth, inventory_materials, debt_consolidation_refinancing, expansion |
| Manual Strategy Review Route | 75 | Manual Funding Strategy Review | any-condition route |
| Business Credit / Funding Prep Nurture Route | 70 | Funding Prep / Business Credit Builder Path | any-condition route |

Family-level routes are preliminary signals. Product-row criteria and human review remain controlling.

## How to Use This Guide

This guide explains product categories, not specific lender programs. It may help
a reviewer decide which category deserves comparison, but it does not establish
eligibility, availability, rates, fees, terms, speed, or approval.

For live matching, use verified rows from `05-current-funding-product-matrix.csv`
or an authorized criteria action.

Each category below uses the same 14-part structure.

## 1. Business Line of Credit

### 1. Plain-English Definition

A revolving facility that may allow repeated draws up to an approved limit.

### 2. Common Uses of Funds

Recurring working capital, uneven expenses, short operating gaps, flexible access.

### 3. Business Profiles That May Warrant Review

Businesses with recurring needs, variable cash cycles, and a preference for reusable capital.

### 4. Potential Poor-Fit Situations

One-time long-lived projects, businesses needing a fixed long amortization, or severe ongoing losses.

### 5. Common Documentation Categories

Application, bank information, financial statements, debt schedule, and provider-specific documents.

### 6. Timing Considerations

May require more setup than a one-time short product; draw availability and renewal terms matter.

### 7. Payment-Structure Considerations

Review draw rules, variable pricing, minimum payments, and whether payment timing matches deposits.

### 8. Collateral or Guarantee Considerations

May be unsecured or secured; guarantees may be required depending on verified criteria.

### 9. Cash-Flow Risks

Repeated draws can hide unresolved operating leaks and create persistent utilization.

### 10. Hard-Gate Examples

State, revenue, time in business, amount, active status, and declared credit or document rules.

### 11. Weighted-Scoring Considerations

Favor recurring-need fit, flexibility, and payment timing; reduce for one-time long-lived uses.

### 12. Human-Review Questions

Is the need recurring? How often will draws occur? What prevents permanent dependence on the line?

### 13. Alternatives to Compare

Term loan, short-term working capital, invoice financing.

### 14. Compliance-Safe Language

May be considered when recurring access matters; eligibility and structure vary.


## 2. Term Loan

### 1. Plain-English Definition

A lump-sum financing structure repaid over a defined term.

### 2. Common Uses of Funds

Expansion, acquisition support, refinancing, major projects, and defined working-capital needs.

### 3. Business Profiles That May Warrant Review

Businesses with a specific amount, clear use, and cash flow that can support scheduled payments.

### 4. Potential Poor-Fit Situations

Highly uncertain needs, recurring draw requirements, or a mismatch between term and asset life.

### 5. Common Documentation Categories

Application, financial statements, bank records, tax documents, debt schedule, and use-of-funds support.

### 6. Timing Considerations

Longer-term options may require more documentation and review.

### 7. Payment-Structure Considerations

Review payment amount, frequency, amortization, prepayment terms, and balloon risk when verified.

### 8. Collateral or Guarantee Considerations

May be unsecured or secured; guarantees may apply.

### 9. Cash-Flow Risks

Fixed obligations can strain cash flow when revenue is seasonal or declining.

### 10. Hard-Gate Examples

Amount, revenue, time in business, state, industry, documentation, collateral, and declared credit rules.

### 11. Weighted-Scoring Considerations

Favor clear purpose and term alignment; reduce for vague uses or severe timing mismatch.

### 12. Human-Review Questions

Does the term match the benefit? Are projected payments supportable through low months?

### 13. Alternatives to Compare

Line of credit, equipment financing, SBA-related financing.

### 14. Compliance-Safe Language

May fit a defined project when term and repayment align with the business need.


## 3. Equipment Financing

### 1. Plain-English Definition

Financing tied to the purchase or refinance of business equipment.

### 2. Common Uses of Funds

Vehicles, machinery, medical equipment, restaurant equipment, construction equipment, and hardware.

### 3. Business Profiles That May Warrant Review

Businesses purchasing identifiable revenue-producing equipment with invoices or quotes.

### 4. Potential Poor-Fit Situations

General operating losses, unsupported soft costs, or equipment with unclear ownership or value.

### 5. Common Documentation Categories

Equipment quote, invoice, specifications, business records, financial information, and ownership documents.

### 6. Timing Considerations

Timing depends on equipment verification, vendor documents, appraisal, and provider review.

### 7. Payment-Structure Considerations

Review down payment, term, useful life, and whether payments begin before equipment produces revenue.

### 8. Collateral or Guarantee Considerations

The equipment commonly supports the transaction; guarantees may apply.

### 9. Cash-Flow Risks

Equipment can become an expensive anchor if demand, utilization, or resale value disappoints.

### 10. Hard-Gate Examples

Equipment eligibility, amount, vendor, state, industry, TIB, revenue, and document rules.

### 11. Weighted-Scoring Considerations

Favor direct equipment use, useful-life alignment, and complete quote; reduce for mixed or vague uses.

### 12. Human-Review Questions

Is the equipment new or used? Who is the vendor? When will it produce revenue?

### 13. Alternatives to Compare

Term loan, line of credit, lease structure, short-term working capital.

### 14. Compliance-Safe Language

May fit when the financed asset and repayment period reasonably align.


## 4. Invoice Financing

### 1. Plain-English Definition

A structure that advances or lends against eligible business receivables.

### 2. Common Uses of Funds

Bridging customer payment delays and supporting working capital tied to completed invoices.

### 3. Business Profiles That May Warrant Review

B2B businesses with eligible invoices, creditworthy customers, and long payment cycles.

### 4. Potential Poor-Fit Situations

Consumer receivables, disputed invoices, concentrated weak customers, or uncompleted work.

### 5. Common Documentation Categories

Invoice list, aging report, customer information, contracts, proof of delivery, and business records.

### 6. Timing Considerations

Can move quickly when invoices and customers are verified; disputes slow the process.

### 7. Payment-Structure Considerations

Review advance mechanics, fees, collections, recourse, and customer-notification rules.

### 8. Collateral or Guarantee Considerations

Receivables support the structure; guarantees may vary.

### 9. Cash-Flow Risks

Customer concentration, disputes, dilution, and slow collections can reduce value.

### 10. Hard-Gate Examples

Eligible receivables, customer concentration, invoice status, state, industry, and documents.

### 11. Weighted-Scoring Considerations

Favor strong invoice quality and predictable collections; reduce for disputes or concentration.

### 12. Human-Review Questions

Are invoices complete, undisputed, and owed by eligible customers?

### 13. Alternatives to Compare

Factoring, line of credit, purchase order financing.

### 14. Compliance-Safe Language

May help bridge qualified receivables; structure and customer effects require review.


## 5. Factoring

### 1. Plain-English Definition

A sale or assignment of eligible receivables to a factor under verified terms.

### 2. Common Uses of Funds

Accelerating cash from invoices and outsourcing or supporting collections.

### 3. Business Profiles That May Warrant Review

B2B companies with eligible invoices and customers that meet factor requirements.

### 4. Potential Poor-Fit Situations

Businesses needing confidential customer relationships, consumer invoices, or disputed receivables.

### 5. Common Documentation Categories

Aging report, invoices, customer records, contracts, proof of delivery, and corporate documents.

### 6. Timing Considerations

Timing depends on debtor verification and notice or assignment procedures.

### 7. Payment-Structure Considerations

Review recourse, reserves, fees, collection control, and customer communication.

### 8. Collateral or Guarantee Considerations

Receivables are central; personal guarantees or repurchase obligations may apply.

### 9. Cash-Flow Risks

Customer experience, concentration, disputes, and chargebacks matter.

### 10. Hard-Gate Examples

Invoice eligibility, debtor quality, concentration, industry, and document rules.

### 11. Weighted-Scoring Considerations

Favor high-quality receivables; reduce for disputes, concentration, or relationship concerns.

### 12. Human-Review Questions

Who controls collections? Is the structure recourse? How will customers be notified?

### 13. Alternatives to Compare

Invoice financing, line of credit.

### 14. Compliance-Safe Language

May improve cash timing, but the operational and customer impact must be reviewed.


## 6. Revenue-Based Financing

### 1. Plain-English Definition

Financing repaid through a fixed or variable structure tied to business revenue.

### 2. Common Uses of Funds

Short-duration working capital, inventory, marketing, and opportunities with measurable return.

### 3. Business Profiles That May Warrant Review

Businesses with consistent deposits and the ability to support frequent or revenue-linked payments.

### 4. Potential Poor-Fit Situations

Long-lived assets, already pressured cash flow, or using new capital mainly to service old obligations.

### 5. Common Documentation Categories

Bank records, bank link, application, revenue history, debt schedule, and business verification.

### 6. Timing Considerations

May be faster than documentation-heavy products when criteria and data are complete.

### 7. Payment-Structure Considerations

Review frequency, total repayment, remittance mechanics, reconciliation, and stacking risk.

### 8. Collateral or Guarantee Considerations

Often unsecured, though guarantees may apply.

### 9. Cash-Flow Risks

Frequent payments can amplify volatility and low-balance days.

### 10. Hard-Gate Examples

Revenue, deposits, negative days, positions, amount, state, industry, and use-of-funds rules.

### 11. Weighted-Scoring Considerations

Favor short measurable uses and stable deposits; reduce for structural losses or long-lived assets.

### 12. Human-Review Questions

What return should the capital produce before repayment ends? How many active positions exist?

### 13. Alternatives to Compare

Line of credit, term loan, invoice financing.

### 14. Compliance-Safe Language

May support a short, measurable need when payment pressure is acceptable and terms are verified.


## 7. Short-Term Working Capital

### 1. Plain-English Definition

A short-duration lump-sum working-capital product with a relatively compressed repayment period.

### 2. Common Uses of Funds

Temporary operating gaps, emergency repairs, inventory, payroll bridges, and short opportunities.

### 3. Business Profiles That May Warrant Review

Businesses with a real temporary gap and sufficient cash flow to absorb the payment schedule.

### 4. Potential Poor-Fit Situations

Permanent operating losses, long-term projects, repeated refinancing, or severe payment pressure.

### 5. Common Documentation Categories

Bank information, application, business verification, revenue history, and debt schedule.

### 6. Timing Considerations

Often positioned for speed, but actual timing depends on current verified criteria and package quality.

### 7. Payment-Structure Considerations

Review total cost, payment frequency, early payoff, renewal, and stacking implications.

### 8. Collateral or Guarantee Considerations

Often unsecured; guarantees may apply.

### 9. Cash-Flow Risks

A short term can turn a manageable gap into a deeper cash squeeze.

### 10. Hard-Gate Examples

Revenue, bank activity, positions, amount, state, industry, and declared document rules.

### 11. Weighted-Scoring Considerations

Favor temporary gaps and clear repayment source; reduce for recurring emergencies.

### 12. Human-Review Questions

What event resolves the gap? Is the business borrowing again to repay prior capital?

### 13. Alternatives to Compare

Line of credit, term loan, invoice financing.

### 14. Compliance-Safe Language

May fit a temporary gap; it should not be used to disguise a broken operating model.


## 8. SBA-Related Financing

### 1. Plain-English Definition

Financing offered through eligible lenders under applicable SBA program requirements.

### 2. Common Uses of Funds

Expansion, acquisition, equipment, real estate, refinancing, and longer-term business needs.

### 3. Business Profiles That May Warrant Review

Businesses able to support a more documented process and meet current program and lender criteria.

### 4. Potential Poor-Fit Situations

Immediate emergencies, incomplete financials, unsupported uses, or inability to tolerate a longer process.

### 5. Common Documentation Categories

Application, tax returns, financial statements, personal financial information, business plan or projections, and purpose-specific documents.

### 6. Timing Considerations

Usually requires more documentation and review than faster products.

### 7. Payment-Structure Considerations

Review amortization, guarantees, collateral, fees, prepayment, and program-specific requirements.

### 8. Collateral or Guarantee Considerations

Guarantees and collateral may be required depending on current rules.

### 9. Cash-Flow Risks

Long process, document burden, and changing lender overlays can create timing risk.

### 10. Hard-Gate Examples

Program eligibility, lender overlay, use of funds, state, industry, credit, collateral, and documents.

### 11. Weighted-Scoring Considerations

Favor long-term uses and complete records; reduce for urgent or poorly documented requests.

### 12. Human-Review Questions

Can the borrower tolerate the process? Are the financial records complete and consistent?

### 13. Alternatives to Compare

Bank term loan, equipment financing, commercial real estate financing.

### 14. Compliance-Safe Language

May support longer-term needs; current program and lender requirements must be verified.


## 9. Bank Financing

### 1. Plain-English Definition

Conventional financing offered by a bank or similar depository institution under its current credit policies.

### 2. Common Uses of Funds

Working capital, equipment, expansion, real estate, and refinancing.

### 3. Business Profiles That May Warrant Review

Established businesses with organized financials, stable cash flow, and time for a documented review.

### 4. Potential Poor-Fit Situations

Immediate emergencies, incomplete records, or profiles outside current bank policy.

### 5. Common Documentation Categories

Financial statements, tax returns, bank records, debt schedule, business documents, and collateral support.

### 6. Timing Considerations

Often slower and more documentation-heavy than short-term products.

### 7. Payment-Structure Considerations

Review amortization, covenants, collateral, guarantees, and relationship requirements.

### 8. Collateral or Guarantee Considerations

Collateral and guarantees may be required.

### 9. Cash-Flow Risks

Covenants and fixed obligations can create ongoing operating constraints.

### 10. Hard-Gate Examples

Current bank policy, amount, use, cash flow, state, industry, collateral, and documentation.

### 11. Weighted-Scoring Considerations

Favor stability and complete records; reduce for urgency or unresolved financial inconsistencies.

### 12. Human-Review Questions

What bank relationship exists? Are covenants and reporting obligations understood?

### 13. Alternatives to Compare

SBA-related financing, line of credit, term loan.

### 14. Compliance-Safe Language

May fit established borrowers; institution-specific criteria and final terms require direct review.


## 10. Commercial Real Estate Financing

### 1. Plain-English Definition

Financing tied to the acquisition, refinance, construction, or improvement of commercial property.

### 2. Common Uses of Funds

Owner-occupied property, investment property, refinance, construction, and major improvements.

### 3. Business Profiles That May Warrant Review

Businesses or investors with a defined property, equity, documentation, and a viable repayment source.

### 4. Potential Poor-Fit Situations

Unclear ownership, insufficient equity, unsupported property type, or immediate working-capital needs.

### 5. Common Documentation Categories

Property details, purchase contract, rent roll, appraisal, environmental review, financials, tax returns, and ownership records.

### 6. Timing Considerations

Typically requires property and third-party review, making timing material.

### 7. Payment-Structure Considerations

Review amortization, term, balloon, covenants, debt-service coverage, and closing costs.

### 8. Collateral or Guarantee Considerations

Real estate is central collateral; guarantees may apply.

### 9. Cash-Flow Risks

Property value, occupancy, tenant concentration, environmental issues, and balloon risk matter.

### 10. Hard-Gate Examples

Property type, geography, amount, leverage, use, borrower profile, and documentation.

### 11. Weighted-Scoring Considerations

Favor defined property economics and adequate timeline; reduce for unclear valuation or urgency.

### 12. Human-Review Questions

What is the property use? Who occupies it? What equity and cash flow support the transaction?

### 13. Alternatives to Compare

SBA-related financing, bank financing, bridge or specialty financing.

### 14. Compliance-Safe Language

May fit a defined property transaction; appraisal, title, legal, and lender review remain necessary.


## 11. Purchase Order Financing

### 1. Plain-English Definition

Financing designed to support supplier costs tied to eligible purchase orders.

### 2. Common Uses of Funds

Fulfilling large verified customer orders when supplier costs exceed available cash.

### 3. Business Profiles That May Warrant Review

Product businesses with valid purchase orders, qualified customers, and reliable suppliers.

### 4. Potential Poor-Fit Situations

Service businesses, speculative inventory, cancellable orders, or weak supplier/customer documentation.

### 5. Common Documentation Categories

Purchase order, supplier quote, customer verification, contracts, margins, logistics, and business records.

### 6. Timing Considerations

Timing depends on customer, supplier, and transaction verification.

### 7. Payment-Structure Considerations

Review advance mechanics, supplier payment, margins, fees, and repayment source.

### 8. Collateral or Guarantee Considerations

The transaction and inventory may support the structure; guarantees may vary.

### 9. Cash-Flow Risks

Thin margins, cancellations, logistics failures, and customer concentration matter.

### 10. Hard-Gate Examples

Valid PO, supplier, customer, margin, product, state, industry, and document rules.

### 11. Weighted-Scoring Considerations

Favor confirmed orders and adequate margins; reduce for speculative or cancellable demand.

### 12. Human-Review Questions

Is the order firm? Can the supplier perform? Is the margin sufficient after financing cost?

### 13. Alternatives to Compare

Inventory financing, line of credit, factoring.

### 14. Compliance-Safe Language

May support a qualified order; supplier, customer, margin, and execution risk require review.


## 12. Inventory Financing

### 1. Plain-English Definition

Financing used to purchase or carry eligible inventory.

### 2. Common Uses of Funds

Seasonal stock, reorder cycles, bulk purchases, and growth inventory.

### 3. Business Profiles That May Warrant Review

Businesses with predictable sell-through, margins, and inventory controls.

### 4. Potential Poor-Fit Situations

Obsolete, speculative, highly perishable, or poorly tracked inventory.

### 5. Common Documentation Categories

Inventory reports, supplier invoices, purchase orders, sales history, margins, and financial records.

### 6. Timing Considerations

Timing depends on inventory verification and supplier documentation.

### 7. Payment-Structure Considerations

Review advance rate, repayment source, seasonality, storage, and sell-through timing.

### 8. Collateral or Guarantee Considerations

Inventory may support the structure; guarantees may apply.

### 9. Cash-Flow Risks

Slow sell-through, markdowns, obsolescence, and platform payout delays can strain cash flow.

### 10. Hard-Gate Examples

Inventory type, amount, margins, supplier, state, industry, and documentation.

### 11. Weighted-Scoring Considerations

Favor proven sell-through and margin; reduce for speculative or aging stock.

### 12. Human-Review Questions

How quickly does inventory sell? What happens if demand misses the forecast?

### 13. Alternatives to Compare

Line of credit, purchase order financing, term loan.

### 14. Compliance-Safe Language

May fit a documented inventory cycle; sell-through and cash-conversion timing require review.


## 13. Business Credit Card or Revolving Credit Product

### 1. Plain-English Definition

A revolving credit product that may be used for eligible business purchases and short-term liquidity.

### 2. Common Uses of Funds

Travel, supplies, recurring expenses, emergency purchases, and short timing gaps.

### 3. Business Profiles That May Warrant Review

Businesses that can manage revolving balances and payment discipline.

### 4. Potential Poor-Fit Situations

Large long-term projects, chronic deficits, or businesses likely to carry expensive balances indefinitely.

### 5. Common Documentation Categories

Application, identity and business verification, and issuer-specific information.

### 6. Timing Considerations

Process timing varies by issuer and application review.

### 7. Payment-Structure Considerations

Review annual fees, interest, limits, promotional terms, utilization, and payment behavior.

### 8. Collateral or Guarantee Considerations

Usually unsecured; personal guarantees may apply.

### 9. Cash-Flow Risks

High utilization and revolving balances can become expensive and affect credit.

### 10. Hard-Gate Examples

Issuer-specific eligibility, state, business type, owner profile, and verification rules.

### 11. Weighted-Scoring Considerations

Favor flexible short uses and disciplined payoff; reduce for large long-term funding needs.

### 12. Human-Review Questions

How quickly will the balance be repaid? What happens after any promotional period?

### 13. Alternatives to Compare

Line of credit, short-term working capital, term loan.

### 14. Compliance-Safe Language

May support smaller flexible needs; actual issuer criteria and costs must be reviewed.


## 14. Other / Specialty Product

### 1. Plain-English Definition

A product that does not fit the standard categories and requires explicit verified criteria.

### 2. Common Uses of Funds

Use only as defined by the product’s current documentation.

### 3. Business Profiles That May Warrant Review

Profiles that match a clearly documented specialty use case.

### 4. Potential Poor-Fit Situations

Any case where rules, source, or product purpose are unclear.

### 5. Common Documentation Categories

Only the documents declared by the verified product source.

### 6. Timing Considerations

Do not infer timing.

### 7. Payment-Structure Considerations

Do not infer payment structure or cost.

### 8. Collateral or Guarantee Considerations

Do not infer collateral or guarantee requirements.

### 9. Cash-Flow Risks

Unknown structure creates elevated risk and low confidence.

### 10. Hard-Gate Examples

All criteria must be explicitly verified.

### 11. Weighted-Scoring Considerations

Score only declared fields; otherwise return Unverified or No Current Match.

### 12. Human-Review Questions

What exactly is the product? What source defines its rules? Who owns verification?

### 13. Alternatives to Compare

Compare against standard categories first.

### 14. Compliance-Safe Language

Do not route until the specialty product is fully defined and verified.

## Cross-Category Comparison Rules

When comparing categories:

1. Start with the use of funds.
2. Compare the useful life of the expense with the product duration.
3. Review payment frequency against deposit timing.
4. Review existing obligations and positions.
5. Compare document burden with the real deadline.
6. Separate product availability from product appropriateness.
7. Do not call one category universally best.
8. Do not rank a category primarily by broker compensation.
9. Use No Current Match when the verified matrix does not support the need.

## Required Disclosure

> This analysis is an internal routing aid based on the information and product criteria provided. It is not an approval, offer, guarantee, or underwriting decision. Eligibility, terms, costs, and availability may change and require current lender review.
