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
    title: "MEME EXPANSION",
    timeline: "Until January 2027",
    items: [
      "Autonomous AI builds strong narrative presence on social platforms",
      "Develops distinctive lazy-genius persona, worldview & identity",
      "Generates cultural signals & content autonomously",
      "Accumulates community trust, familiarity & symbolic resonance"
    ]
  },
  {
    id: "02",
    title: "MEME INFRASTRUCTURE",
    timeline: "Q3 2026 → Q2 2028",
    items: [
      "Evolves into self-reinforcing meme system for organic propagation",
      "Builds mechanisms for ideas, symbols & narratives to spread naturally",
      "Focuses on persistent cultural presence over short-term hype"
    ]
  },
  {
    id: "03",
    title: "SAVAGE LOGIC ACTIVATION",
    timeline: "Q3 – Q4 2028",
    items: [
      "Introduces lightweight Savage Logic: rule-based stability layer",
      "No aggressive growth; prioritizes discipline & long-term endurance",
      "Maintains rational behavior in uncertainty or low-attention periods"
    ]
  }
];

export const UTILITIES: TokenUtility[] = [
  {
    title: "Agent Interaction & Participation",
    description: "$PINGP enables direct engagement with PING-P — unlocking responses, priority interactions, or co-creating content in social channels."
  },
  {
    title: "Content & Ecosystem Access (Planned)",
    description: "Future features: Use $PINGP for exclusive meme events, narrative votes, or access to virtual-world interactions (e.g., NPC dialogues in metaverses). Tied to agent's organic growth."
  },
  {
    title: "Supply & Mechanics",
    description: "Token supply mechanics (including potential adjustments) evolve based on real ecosystem activity. All changes transparently communicated. No speculative promises — focused on participation."
  }
];