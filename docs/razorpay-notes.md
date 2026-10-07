# Razorpay verification notes

Research date: 2026-10-07.

[Official subscriptions documentation](https://razorpay.com/docs/payments/subscriptions/) confirms plan-based recurring billing, cards, UPI AutoPay and webhook notifications. Integration requires a Razorpay account and test-mode verification. This supports the proposed subscription product choice; billing implementation remains Phase 3.

[Official pricing](https://razorpay.com/pricing/) contains offers and method-specific pricing. It is not enough to verify the source documents' combined estimated cost for this merchant. The subscription surcharge, account-specific rate, taxes and mandate limits remain unverified. Do not encode the estimated vendor fee as a guaranteed rate or change customer pricing. Confirm merchant dashboard terms before activating billing.

Outstanding: account/KYC access, enabled payment methods, test plan IDs, signing requirements, exact subscription events, retry/state behavior and merchant-specific fees. No test plans or paid resources have been created.
