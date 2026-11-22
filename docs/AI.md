# Identity copilot and grounded retrieval

The identity copilot explains authentication patterns, policy decisions, application configuration, and session risk from context already authorized for the caller. Optional OpenAI Responses mode sets `store: false`; optional hosted retrieval uses approved documents only.

AI is never placed in the token-issuance or policy-enforcement path. It cannot issue or validate tokens, change policy, reset authenticators, terminate sessions, provision accounts, or rotate signing keys.
