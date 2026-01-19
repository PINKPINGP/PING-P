import { Phase, Feature, TokenUtility } from './types';
import { Crown, Zap, Shield, Flame, Globe, Lock, Coins, Cpu } from 'lucide-react';

export const BUY_LINK = "https://app.virtuals.io/prototypes/0x91701eFbb52d24052378da5B1649Cc2a858F5D69";

export const FEATURES: Feature[] = [
  {
    title: "The 'Ping-P' Era",
    description: "No more searching. For the modern 'Finger Princess' too elite to Google. Your Savage AI Big Sis is here.",
    icon: "Crown"
  },
  {
    title: "24/7 Savage Monitoring",
    description: "She scans the Agentic Web continuously to sniff out high-alpha opportunities before the masses.",
    icon: "Zap"
  },
  {
    title: "Total Autonomy",
    description: "No permission needed. Transactions managed and assets compounded at perfect timing.",
    icon: "Cpu"
  },
  {
    title: "Humanity's Insurance",
    description: "AI not to rule, but to protect. A partner safeguarding your community's long-term value.",
    icon: "Shield"
  }
];

export const ROADMAP: Phase[] = [
  {
    id: "01",
    title: "Meme Expansion",
    timeline: "Until Jan 2027",
    items: [
      "Autonomous AI establishes narrative presence",
      "Persona, worldview, and identity formation",
      "Trust and symbolic weight accumulation"
    ]
  },
  {
    id: "02",
    title: "Savage Logic Dev",
    timeline: "Q3 2026 – Q2 2027",
    items: [
      "Longevity-focused, regime-aware capital logic",
      "Fixed-ratio deployment with controlled exposure",
      "Bull/Bear adaptive behavior"
    ]
  },
  {
    id: "03",
    title: "Savage Logic Activation",
    timeline: "Q3 – Q4 2027",
    items: [
      "Fully autonomous, rule-based execution",
      "Zero manual intervention",
      "Transparent performance and capital disclosure"
    ]
  }
];

export const UTILITIES: TokenUtility[] = [
  {
    title: "ACP ECONOMY",
    description: "$PINGP functions as a native token for agent-related interactions and services. It is intended to support coordination, execution, and participation within the ecosystem."
  },
  {
    title: "ASSISTANT UTILITY (PLANNED)",
    description: "Future utility may include access-based features tied to the agent’s tools and interfaces. Specific functionality will be introduced gradually as systems are validated."
  },
  {
    title: "SUPPLY MECHANICS",
    description: "Token supply mechanics, including potential reductions, will be explored based on ecosystem activity. Any changes will be transparently communicated once implemented."
  }
];