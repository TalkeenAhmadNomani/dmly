# Meta verification notes

Research date: 2026-10-07. Status: INCOMPLETE; do not enable sending.

Official URLs attempted:

- https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/
- https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/messaging-api/
- https://developers.facebook.com/docs/instagram-platform/instagram-api-with-instagram-login/messaging-api/private-replies/
- https://www.postman.com/meta/instagram/documentation/6yqw8pt/instagram-api

The developer pages returned fetch errors/HTTP 429 in this session. The official Meta Postman collection exposed only its navigation shell. Search snippets from third-party vendors are not accepted as verification.

| VERIFY item                                                              | Status     |
| ------------------------------------------------------------------------ | ---------- |
| Instagram Login professional-account eligibility and no-Page requirement | Unresolved |
| Exact scopes, standard/advanced access and review prerequisites          | Unresolved |
| OAuth endpoints, profile fields, token exchange and refresh eligibility  | Unresolved |
| Current supported Graph API version                                      | Unresolved |
| comments/messages webhook subscriptions and story payload shape          | Unresolved |
| Private-reply recipient format, one-reply constraint and time window     | Unresolved |
| Story messaging window and permitted follow-up behavior                  | Unresolved |
| Private-reply support for buttons and quick replies                      | Unresolved |
| Account/app rate limits and retry semantics                              | Unresolved |
| Signed deauthorization and deletion callbacks                            | Unresolved |

The values in the source requirements are hypotheses until these checks are resolved. API version, windows and send limits are required configuration fields. No provider calls exist yet. A research access failure is not evidence of a requirement conflict.
