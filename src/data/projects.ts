export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  tags: string[];
  tab: "product" | "branding" | "community" | "ai";
  accent: string;
  accentSoft: string;
  color?: string;
  badge?: string;
  stat?: string;
  statLabel?: string;
  isFirst?: boolean;
  firstLabel?: string;
  problem: string;
  approach: string;
  features: { title: string; description: string }[];
  outcome: { label: string; value: string }[];
  timeline?: string;
  role?: string;
  team?: string;
  liveUrl?: string;
  behanceUrl?: string;
  coverImage?: string;
};

export const projects: Project[] = [
  {
    slug: "beacon-ats",
    title: "Designing the system behind the hire.",
    subtitle: "An internal ATS built around how Beacon actually works.",
    tags: ["Internal Tool", "Product Design", "Systems Design"],
    tab: "product",
    accent: "#a8d0b8",
    accentSoft: "rgba(168, 208, 184, 0.15)",
    stat: "80%",
    statLabel: "Faster hiring",
    problem: "Beacon was using BambooHR but outgrowing it. The real issue wasn't missing a hiring tool — it was missing control. They needed a system built around their actual process, their hierarchy, and their data.",
    approach: "I started by mapping how Beacon actually hired — interviewing HR, recruiters, hiring managers, and a designer who had been through the process as a candidate. The hardest design problem wasn't the interface. It was permissions — making a complex, multi-role access structure feel invisible to the people using it.",
    features: [
      { title: "Multi-role permission system", description: "Users, admins, super admins with granular access that feels invisible in use." },
      { title: "Non-linear candidate pipeline", description: "Supports real hiring — candidates move forward, backward, pause." },
      { title: "Handoff continuity", description: "New team members pick up exactly where the last person stopped." },
      { title: "Dual-sided system", description: "Candidate-facing and internal-facing flows within one connected product." },
      { title: "Atomic design system", description: "Reusable components that accelerated development handoff." },
    ],
    outcome: [
      { value: "80%", label: "Reduction in time to hire" },
      { value: "2 months", label: "Delivered vs 3-month timeline" },
      { value: "60%", label: "Faster design-to-development flow" },
    ],
    timeline: "2 months",
    role: "Product Designer · Design System",
  },
  {
    slug: "cohut-lms",
    title: "From ambitious LMS to focused cohort tool — in 48 hours.",
    subtitle: "Founding product designer on a platform built for people who run learning programs.",
    tags: ["EdTech", "Web App", "Product Design"],
    tab: "product",
    accent: "#a8c0e8",
    accentSoft: "rgba(168, 192, 232, 0.15)",
    stat: "20%",
    statLabel: "Customer satisfaction increase",
    problem: "Cohut started with a big vision — a highly customizable LMS. The reality was a three-month timeline, six engineers, one designer, and a launch date that couldn't move.",
    approach: "Discovery first. Research revealed 90% of program managers ran cohorts from desktop using spreadsheets — but learners accessed content from mobile. I built the design system early in parallel with engineering. When the team realized the LMS direction couldn't ship in time, I redesigned the entire product in 48 hours.",
    features: [
      { title: "Dual-sided platform", description: "Separate optimized flows for educators and learners." },
      { title: "Responsive dashboard", description: "Complex admin functionality that works across screen sizes." },
      { title: "Expand-on-click sidebar", description: "Predictable, unobtrusive navigation." },
      { title: "Google Calendar integration", description: "Replacing a custom build that would have missed the deadline." },
      { title: "Atomic design system", description: "Reusable components built for speed and handoff." },
    ],
    outcome: [
      { value: "20%", label: "Customer satisfaction increase between pilots" },
      { value: "15%", label: "Reduction in developer time" },
      { value: "20%", label: "Faster to market than original timeline" },
    ],
    timeline: "3 months",
    role: "Founding Product Designer · Design System · Responsive Design",
  },
  {
    slug: "luddy-app",
    title: "A language buddy that feels human — without pretending to be one.",
    subtitle: "Designing the product experience for an AI-powered language learning app.",
    tags: ["Mobile App", "AI", "UX Design"],
    tab: "product",
    accent: "#c8b4e8",
    accentSoft: "rgba(200, 180, 232, 0.15)",
    stat: "50%",
    statLabel: "Faster time to launch",
    problem: "Language learners don't need another tutor. They need someone to practise with. Existing tools were too robotic, too chatty — and users were creeped out by AIs that tried to seem human.",
    approach: "Research pointed to one consistent insight: the real barrier is anxiety, not motivation. I designed around that. Every feature was built to lower the stakes of speaking — and every animation was hand-crafted to make the app feel alive without making the AI feel human.",
    features: [
      { title: "Scripted Call Mode", description: "Guided conversations for beginners with pronunciation support." },
      { title: "Roleplay Mode", description: "Real-world scenarios for confident learners, including a Surprise me option." },
      { title: "Language Proficiency Gauge", description: "CEFR-mapped, scenario-based self-assessment." },
      { title: "In-Call Typing", description: "Low-pressure fallback for noisy environments." },
      { title: "Call Transcripts and AI Feedback", description: "Post-call review to reinforce learning and reduce anxiety." },
    ],
    outcome: [
      { value: "100%", label: "Client satisfaction" },
      { value: "50%", label: "Faster time to launch" },
      { value: "Beta", label: "Testing planned at launch" },
    ],
    timeline: "3 weeks",
    role: "Product Strategy · UI/UX Design · Interaction Design · Developer Handoff",
  },
  {
    slug: "luddy-branding",
    title: "A brand built to survive change.",
    subtitle: "Visual identity for a language learning AI built on trust, not performance.",
    tags: ["Branding", "Visual Identity", "Mobile"],
    tab: "branding",
    accent: "#c8b4e8",
    accentSoft: "rgba(200, 180, 232, 0.15)",
    problem: "The product needed a brand that felt warm and trustworthy without mimicking human emotion. Most AI products either looked too clinical or overcorrected into something uncomfortably human.",
    approach: "I led with personality before aesthetics. The brand character came first — calm, supportive, conversational, never manipulative — and every visual decision followed from that. Bauhaus-inspired direction, soft pastel colours drawn from country flags.",
    features: [
      { title: "Brand personality system", description: "Calm, supportive, conversational, never manipulative." },
      { title: "Flag-inspired colour palette", description: "Soft pastels familiar enough to evoke cultures, soft enough to feel safe." },
      { title: "Wordmark with standalone symbol", description: "Built for flexibility across use cases." },
      { title: "Typography system", description: "Cabin — tested, iterated, chosen for readability at scale." },
      { title: "Live brand style guide", description: "Documented and accessible beyond individual design files." },
    ],
    outcome: [
      { value: "1", label: "Cohesive brand identity delivered" },
      { value: "100%", label: "Client satisfaction" },
    ],
    timeline: "1 week",
    role: "Brand Strategy · Visual Identity · UX Writing",
  },
  {
    slug: "resonans-branding",
    title: "Designing an identity that could survive change.",
    subtitle: "Visual identity for a research accessibility platform still figuring out what it would become.",
    tags: ["Branding", "Visual Identity", "Communication Design"],
    tab: "branding",
    accent: "#e8b8d0",
    accentSoft: "rgba(232, 184, 208, 0.15)",
    problem: "African academic research was being produced, graded, published — and then left behind. Resonans wanted to change that. The challenge: design an identity for an organization still mid-pivot.",
    approach: "I came into the branding as co-founder, having interviewed 30+ researchers. The brand needed to communicate research, accessibility, and hope. The lamp concept emerged from the intersection of illumination, sound waves, and knowledge travelling — deliberately non-literal.",
    features: [
      { title: "Royal purple and yellow palette", description: "With mauve accent — communicates research, hope, accessibility." },
      { title: "Lamp logo concept", description: "Illumination, sound waves, knowledge travelling." },
      { title: "Full communication system", description: "Event templates, YouTube thumbnails, newsletters, social content." },
      { title: "Brand style guide", description: "Documented for consistency beyond individual design files." },
    ],
    outcome: [
      { value: "1 year", label: "Brand held through multiple product pivots" },
      { value: "30+", label: "Researchers engaged during co-founding phase" },
    ],
    timeline: "Ongoing from co-founding",
    role: "Co-Founder · Brand Identity · Communication Design",
    liveUrl: "https://www.resonanslab.com/",
  },
  {
    slug: "xepp-landing",
    title: "Turning a product into a story customers could see themselves in.",
    subtitle: "Marketing website for Beacon Power Services' first B2C product.",
    tags: ["Marketing", "Web Design", "B2C"],
    tab: "product",
    accent: "#f0b8a0",
    accentSoft: "rgba(240, 184, 160, 0.15)",
    stat: "50%",
    statLabel: "Faster than timeline",
    problem: "XEPP was Beacon's first consumer-facing product. The website needed to feel relatable, lively, and immediately clear to someone who had never heard of XEPP.",
    approach: "Before touching Figma, I used the product. I redesigned the hero from image-based to something more artistic, vectorized AI-generated assets to fit the visual language, and optimized every asset for performance without sacrificing quality.",
    features: [
      { title: "Full website design and visual direction", description: "Poppy, lively, relatable — not boring." },
      { title: "Hero section redesign", description: "More artistic, more relatable than the original image direction." },
      { title: "Vectorized AI illustrations", description: "AI-generated visuals converted to vector for visual consistency." },
      { title: "Asset optimization", description: "Files kept below tens of kilobytes without sacrificing quality." },
      { title: "Design system for handoff", description: "Small but consistent — developers could move fast." },
    ],
    outcome: [
      { value: "50%", label: "Faster than original timeline" },
      { value: "✓", label: "Successful XEPP product launch" },
      { value: "✓", label: "Positive reception across all stakeholder teams" },
    ],
    timeline: "2 weeks",
    role: "Web Designer · Visual Direction · Asset Production",
  },
  {
    slug: "udc-community",
    title: "Rebuilding a community from the inside out.",
    subtitle: "Community Manager for Untitled Designers Community — 15 chapters, one conference.",
    tags: ["Community", "Strategy", "Operations"],
    tab: "community",
    accent: "#a8d0b8",
    accentSoft: "rgba(168, 208, 184, 0.15)",
    stat: "4x",
    statLabel: "Ticket purchases in one month",
    problem: "UDC had 15 chapters across Nigeria but 40% had gone inactive. Chapter leads felt abandoned. Months later they were being asked to mobilize again.",
    approach: "I treated the community like a product. Before asking anyone to buy a ticket, I rebuilt the system that made participation possible — monthly chapter meetings, Discord migration, community profiling, and a newsletter strategy I wrote end to end.",
    features: [
      { title: "Design Lounge", description: "Weekly X Space series running consistently from June." },
      { title: "Face of Design", description: "Content series celebrating designers shaping the industry." },
      { title: "Chapter lead system", description: "Monthly meetings and update forms across all 15 chapters." },
      { title: "Community Profile Form", description: "Member database of skills, locations, participation intent." },
      { title: "Discord migration", description: "Structured environment replacing scattered WhatsApp groups." },
      { title: "Newsletter strategy", description: "Direct communication channel written end to end from May." },
    ],
    outcome: [
      { value: "4x", label: "Community ticket purchases in one month" },
      { value: "15", label: "Chapters rebuilt and active" },
      { value: "Oct 16", label: "Conference — results incoming" },
    ],
    timeline: "May 2026 — Ongoing",
    role: "Community Manager",
  },
  {
    slug: "devfest-se-lagos",
    title: "The first DevFest for students, designed by a student.",
    subtitle: "Visual identity and design leadership for the first DevFest Student Edition in Lagos.",
    tags: ["Event Design", "Visual Identity", "Design Leadership"],
    tab: "community",
    accent: "#f0b8a0",
    accentSoft: "rgba(240, 184, 160, 0.15)",
    isFirst: true,
    firstLabel: "First in Lagos",
    problem: "No template. No previous student edition to reference. The identity had to feel unmistakably DevFest while carving out something distinctly student.",
    approach: "I studied existing GDG DevFest brand guidelines and built from there — retaining colours and typography people already associated with DevFest, then introducing new graphic elements. I moved the entire team into a single collaborative Figma file.",
    features: [
      { title: "Student edition visual identity", description: "DevFest-rooted but distinctly student — arrows, movement, energy." },
      { title: "Brand style guide", description: "Team-wide consistency across all promotional materials." },
      { title: "Collaborative Figma environment", description: "Single source of truth replacing isolated file handoffs." },
      { title: "Figma onboarding", description: "Taught designers new to collaborative workflows as we built." },
    ],
    outcome: [
      { value: "↑", label: "Higher turnout than anticipated" },
      { value: "0", label: "Significant delays in delivery" },
      { value: "✓", label: "Lasting impression as first of its kind" },
    ],
    timeline: "Oct — Dec 2023",
    role: "Lead Designer · Creative Direction · Team Coordination",
    behanceUrl: "https://www.behance.net/gallery/192372345/Crafting-the-Visual-Story-of-Devfest-SE-Lagos",
  },
  {
    slug: "gdgoc-hacktoberfest",
    title: "The first open source session built for designers.",
    subtitle: "Led 100+ designers through their first GitHub contribution during Hacktoberfest 2023.",
    tags: ["Community", "Open Source", "Education"],
    tab: "community",
    accent: "#a8c0e8",
    accentSoft: "rgba(168, 192, 232, 0.15)",
    isFirst: true,
    firstLabel: "First designer-led Hacktoberfest at Unilag",
    problem: "Every Hacktoberfest resource assumed you were a developer. Designers had no clear entry point into open source.",
    approach: "I created a full onboarding programme for designers, recorded step-by-step video tutorials showing real GitHub contributions, hosted a hands-on session, and built a leaderboard to celebrate contributors.",
    features: [
      { title: "Designer-focused curriculum", description: "Covered UI/UX, accessibility, branding, and documentation contributions." },
      { title: "Video tutorials", description: "Step-by-step recordings showing real design contributions on GitHub." },
      { title: "Hands-on session", description: "Playing a Role in Open Source as a Designer." },
      { title: "Contribution leaderboard", description: "Tracked and celebrated first-time contributors publicly." },
    ],
    outcome: [
      { value: "100+", label: "Designers onboarded into open source" },
      { value: "✓", label: "Multiple successful first pull requests" },
      { value: "✓", label: "Community awareness around designers in open source" },
    ],
    timeline: "Oct — Nov 2023",
    role: "Session Lead · Curriculum Design · Content Creator",
  },
  {
    slug: "ledger",
    title: "Turning a pitch into a product.",
    subtitle: "A financial tracking tool for Nigerian small businesses, built with AI and awarded three times.",
    tags: ["AI Build", "Fintech", "Product Design"],
    tab: "ai",
    accent: "#a8d0b8",
    accentSoft: "rgba(168, 208, 184, 0.15)",
    stat: "3",
    statLabel: "Awards won",
    problem: "Nigerian small businesses manage inventory and finances across scattered tools, paper records, and memory. No simple, affordable, context-aware solution existed.",
    approach: "I used Claude as a prototyping and coding partner — describing what I wanted to build, working through the logic, generating and refining code, iterating until the idea worked. I made the product decisions. Claude helped close the gap between design and implementation.",
    features: [
      { title: "Inventory tracking", description: "Equipment and stock availability with full records." },
      { title: "Finance logging", description: "Built for informal business structures, not enterprise workflows." },
      { title: "Simple enough for anyone", description: "Designed for non-technical small business owners." },
      { title: "AI-assisted development", description: "Built entirely with Claude as coding partner." },
    ],
    outcome: [
      { value: "3", label: "Awards — most of any team at the hackathon" },
      { value: "✓", label: "Functional prototype within competition timeline" },
      { value: "✓", label: "Design thinking plus AI producing real software" },
    ],
    timeline: "Bridge Program 2026",
    role: "Product Design · AI-Assisted Development",
    team: "5 members",
  },
  {
    slug: "openvoice",
    title: "Designing for the languages AI forgot.",
    subtitle: "Lead UI/UX on an open-source platform built to crowdsource African language data for AI.",
    tags: ["Open Source", "Mobile App", "AI", "Accessibility"],
    tab: "ai",
    accent: "#e8b8d0",
    accentSoft: "rgba(232, 184, 208, 0.15)",
    problem: "African languages are severely underrepresented in AI training data. OpenVoice wanted to fix that through a crowdsourced mobile app.",
    approach: "I started by writing the PRD myself — no product manager on the project. Then the design system, then user flows. I used Figma Variables to build localization into the structure from the start so the interface could adapt across African languages without a full redesign.",
    features: [
      { title: "Four user roles", description: "Speaker, Transcriber, Writer, Reviewer — distinct but interconnected." },
      { title: "Gamified contribution tracking", description: "Encourages consistent participation from Speakers." },
      { title: "Flexible role-switching", description: "Language selection within the app, not locked at onboarding." },
      { title: "Localization-ready interface", description: "Built with Figma Variables to adapt across African languages." },
      { title: "Lightweight by design", description: "Optimized for low-end devices and slower connections." },
    ],
    outcome: [
      { value: "✓", label: "Product shipped and tested" },
      { value: "Open", label: "Codebase live on GitHub as open-source resource" },
      { value: "✓", label: "Proved a well-designed product can still be the wrong product" },
    ],
    timeline: "6 months",
    role: "Lead UI/UX Designer · Product Requirements · Design System",
  },
];

export const getProjectsByTab = (tab: Project["tab"]) =>
  projects.filter((p) => p.tab === tab);

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);