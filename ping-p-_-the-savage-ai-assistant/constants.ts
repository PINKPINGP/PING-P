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
    title: "The Coronation",
    timeline: "NOW | Q1 - Q2 2026",
    items: [
      "Identity Drop: 'Savage Ping-Peu' persona launch.",
      "Viral Initiation: 4K Cinematic Ad campaign.",
      "Community Genesis: Gathering the top 1% elite partners."
    ]
  },
  {
    id: "02",
    title: "The Autopilot Era",
    timeline: "UPCOMING | Q3 - Q4 2026",
    items: [
      "Financial Partner Engine: Autonomous on-chain growth activation.",
      "Trust Layer Audit: Security & transparency hardening.",
      "Savage Logic Engine fully operational."
    ]
  },
  {
    id: "03",
    title: "The Underworld Expansion",
    timeline: "~ Q1 2028",
    items: [
      "Secret Mission Unlock: 'GTA 6-style' interactive challenges.",
      "Digital Sovereign Perks: Rewards for the 'No-Finger-Lifting' lifestyle.",
      "Ecosystem Synergy within Virtuals Protocol."
    ]
  },
  {
    id: "04",
    title: "The AI Utopia",
    timeline: "2027 & Beyond",
    items: [
      "Humanity's Insurance Protocol: Long-term asset protection.",
      "Global Brand Dominance: From Meme to Financial Freedom Symbol.",
      "Sovereign Decree: Community co-steering."
    ]
  }
];

export const UTILITIES: TokenUtility[] = [
  {
    title: "ACP Economy",
    description: "$PINGP is the native gas for B2B services via the Agent Commerce Protocol. Organic on-chain demand."
  },
  {
    title: "Assistant Utility (2027)",
    description: "Unlocks the 'Savage Logic' dashboard—exclusive, filtered on-chain alpha sniffed out 24/7."
  },
  {
    title: "Self-Burning Engine",
    description: "Earnings from influencer roles & NPC activities buy back and burn $PINGP. Shrinking supply, rising value."
  }
];
