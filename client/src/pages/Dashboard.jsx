import DashboardLayout from "../layouts/DashboardLayout";
import DashboardCard from "../components/dashboard/DashboardCard";

const featureCards = [
  {
    title: "Learning Path",
    description: "Learn stocks, ETFs, mutual funds and investing basics.",
    buttonText: "Start Learning",
    to: "/lessons",
  },
  {
    title: "Daily Challenge",
    description: "Complete today's challenge and earn XP.",
    buttonText: "Start Challenge",
    to: "/quiz",
  },
  {
    title: "Quizzes",
    description: "Test your knowledge with finance quizzes.",
    buttonText: "Take Quiz",
    to: "/quizzes",
  },
  {
    title: "Risk Assessment",
    description:
      "Find out whether you are Conservative, Moderate or Aggressive.",
    buttonText: "Assess Risk",
    to: "/risk",
  },
  {
    title: "AI Coach",
    description: "Ask beginner-friendly investing questions.",
    buttonText: "Ask AI",
    to: "/ai-coach",
  },
  {
    title: "Scam Detector",
    description: "Analyze suspicious financial news and messages.",
    buttonText: "Analyze",
    to: "/fake-news",
  },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">
            Welcome <span className="text-blue-400">Archit</span> 👋
          </h1>

          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            Continue your financial learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map((card) => (
            <DashboardCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}