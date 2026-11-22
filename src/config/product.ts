import type { ProductConfig } from "./types";

export const product: ProductConfig = {
  id: "gatepost",
  name: "Gatepost",
  category: "Identity & Access",
  tagline: "Single sign-on you run, on keys you hold.",
  description: "A self-hosted workforce identity control plane for OIDC, OAuth 2.1, SAML, passkeys, adaptive policy, SCIM provisioning, sessions, and authentication telemetry.",
  repositoryUrl: "https://github.com/ConseilTek-Tektons/gatepost",
  nav: [{ label: "Applications", badge: "24" }, { label: "Directory" }, { label: "Access policy" }, { label: "Sessions" }, { label: "Events" }],
  demoUsers: [
    { id: "demo-admin", name: "Maya Chen", email: "maya@northstar.example", role: "security_admin", label: "Security administrator" },
    { id: "demo-manager", name: "Jon Bell", email: "jon@northstar.example", role: "application_admin", label: "Application administrator" },
    { id: "demo-host", name: "Priya Rao", email: "priya@northstar.example", role: "helpdesk", label: "Identity help desk" },
  ],
  ai: {
    name: "Identity copilot",
    description: "Ask about authentication anomalies, policy simulation, application configuration, and session risk.",
    systemPrompt: "You are Gatepost's identity copilot. Use only supplied authentication and policy context, cite supporting events or rules, and remain advisory. Never issue tokens, change policy, reset factors, or terminate sessions.",
    suggestedQuestions: ["What caused the authentication spike?", "Explain this policy decision.", "Which applications lack step-up authentication?"],
  },
};
