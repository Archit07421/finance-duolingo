// client/src/data/lessons.js
// Central source of truth for the Learning Path.
// `status` would normally come from the user's progress doc in MongoDB
// (see server/models/Progress.js) — hardcoded here so the path is
// fully wired for the frontend/hackathon build.

export const CATEGORIES = [
  { id: "fundamentals", label: "Fundamentals" },
  { id: "assets", label: "Core Assets" },
  { id: "analysis", label: "Reading the Market" },
  { id: "strategy", label: "Strategy" },
];

// status: "completed" | "current" | "locked"
export const LESSONS = [
  {
    id: "saving-vs-investing",
    category: "fundamentals",
    title: "Saving vs Investing",
    blurb: "Know when to stash cash and when to put it to work.",
    icon: "PiggyBank",
    xp: 20,
    status: "completed",
  },
  {
    id: "inflation",
    category: "fundamentals",
    title: "Inflation",
    blurb: "Why your money buys less every year, and what to do about it.",
    icon: "TrendingDown",
    xp: 20,
    status: "completed",
  },
  {
    id: "stocks",
    category: "assets",
    title: "Stocks",
    blurb: "Owning a tiny slice of a company, explained simply.",
    icon: "LineChart",
    xp: 25,
    status: "current",
  },
  {
    id: "mutual-funds",
    category: "assets",
    title: "Mutual Funds",
    blurb: "Pooling money with other investors to buy a basket of assets.",
    icon: "Layers",
    xp: 25,
    status: "locked",
  },
  {
    id: "etfs",
    category: "assets",
    title: "ETFs",
    blurb: "A basket of investments you can trade like a single stock.",
    icon: "Boxes",
    xp: 25,
    status: "locked",
  },
  {
    id: "bonds",
    category: "assets",
    title: "Bonds",
    blurb: "Lending money to companies or governments for steady interest.",
    icon: "Landmark",
    xp: 25,
    status: "locked",
  },
  {
    id: "market-cap",
    category: "analysis",
    title: "Market Capitalization",
    blurb: "How the market sizes up a company's total worth.",
    icon: "Building2",
    xp: 30,
    status: "locked",
  },
  {
    id: "pe-ratio",
    category: "analysis",
    title: "P/E Ratio",
    blurb: "A quick gut-check on whether a stock is cheap or pricey.",
    icon: "Percent",
    xp: 30,
    status: "locked",
  },
  {
    id: "diversification",
    category: "strategy",
    title: "Diversification",
    blurb: "Why 'don't put all your eggs in one basket' actually works.",
    icon: "Shuffle",
    xp: 35,
    status: "locked",
  },
  {
    id: "risk-management",
    category: "strategy",
    title: "Risk Management",
    blurb: "Protecting your portfolio from the risks you can't predict.",
    icon: "ShieldAlert",
    xp: 35,
    status: "locked",
  },
];

export const getLessonsByCategory = (categoryId) =>
  LESSONS.filter((lesson) => lesson.category === categoryId);