import { Phase, Feature, TokenUtility } from './types';

export const BUY_LINK = "https://app.virtuals.io/prototypes/0x91701eFbb52d24052378da5B1649Cc2a858F5D69";
export const GITHUB_LINK = "https://github.com/PINKPINGP/PING-P";
export const WHITEPAPER_LINK = "./whitepaper.pdf";
export const DOCS_SECTION = "#docs";
export const CHAIN = "Base";
export const STATUS = "Under Active Development";

export const FEATURES: Feature[] = [
  {
    title: "Persistent Character",
    description: "PING-P is designed as a recognizable cultural AI with a stable persona, voice, and worldview that deepen over time.",
    icon: "Crown"
  },
  {
    title: "Reaction Loops",
    description: "Community interactions feed back into the system, shaping future outputs and helping the agent evolve through engagement.",
    icon: "Zap"
  },
  {
    title: "Meme Infrastructure",
    description: "The project is moving from simple posting toward systems that allow ideas, symbols, and narratives to spread organically.",
    icon: "Cpu"
  },
  {
    title: "Future Environments",
    description: "PING-P is built to extend beyond social media into narrative NPCs and interactive digital spaces as the ecosystem matures.",
    icon: "Shield"
  }
];

export const ROADMAP: Phase[] = [
  {
    id: "01",
    title: "MEME EXPANSION",
    timeline: "Until January 2027",
    items: [
      "Establishes a clear identity across social platforms",
      "Builds a distinctive lazy-genius persona and cultural voice",
      "Generates autonomous content, signals, and recognizable behavior",
      "Accumulates trust, familiarity, and symbolic resonance"
    ]
  },
  {
    id: "02",
    title: "MEME INFRASTRUCTURE",
    timeline: "Q3 2026 -> Q2 2028",
    items: [
      "Develops systems for meme propagation and narrative reinforcement",
      "Experiments with cultural signal detection and pattern recognition",
      "Focuses on persistent digital presence over short-term hype"
    ]
  },
  {
    id: "03",
    title: "SAVAGE LOGIC ACTIVATION",
    timeline: "Q3 - Q4 2028",
    items: [
      "Introduces a lightweight internal stability layer",
      "Keeps system behavior disciplined during low-attention periods",
      "Supports long-term resilience without aggressive optimization"
    ]
  }
];

export const UTILITIES: TokenUtility[] = [
  {
    title: "Agent Interaction",
    description: "$PINGP supports direct engagement with PING-P through interaction, participation, and future ecosystem actions tied to the agent."
  },
  {
    title: "Narrative Ecosystem Access",
    description: "Planned uses include access to exclusive content, community-driven experiences, and future virtual-world mechanics involving PING-P."
  },
  {
    title: "Participation First",
    description: "$PINGP is designed primarily as a participation and interaction token within the ecosystem, not as a speculative financial instrument."
  }
];
