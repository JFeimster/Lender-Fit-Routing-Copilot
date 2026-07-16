# Agent Instructions

- Preserve the static-first architecture.
- Keep executable endpoints in `api/` and Action definitions in `actions/`.
- Keep shared business logic in `lib/`.
- Keep the exact 20 Knowledge filenames in `knowledge/current/`.
- Do not expose borrower PII, credentials, commissions, private contacts, or portal data.
- Do not automate application submission, offer acceptance, agreement signing, or borrower-message sending.
- Require human review before final product routing.
- Never overwrite existing files without explicit approval.
