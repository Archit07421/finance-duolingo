import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BookOpen,
  Bot,
  Shield,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Interactive Lessons",
    description: "Learn stocks, ETFs, bonds, and more through bite-sized lessons.",
  },
  {
    icon: Sparkles,
    title: "Earn XP & Badges",
    description: "Stay motivated with streaks, levels, and achievement badges.",
  },
  {
    icon: Bot,
    title: "AI Finance Coach",
    description: "Get simple explanations for any beginner finance question.",
  },
  {
    icon: Shield,
    title: "Scam Detector",
    description: "Spot red flags in financial headlines and suspicious messages.",
  },
];

export default function Landing() {
  return (
    <div className="min-h-svh bg-black text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 sm:px-6">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600">
            <TrendingUp className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold">
            Invest<span className="text-blue-500">Quest</span>
          </span>
        </div>
        <Link
          to="/dashboard"
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
        >
          Sign In
        </Link>
      </nav>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-12 text-center sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
            <Award className="h-4 w-4" />
            Duolingo-style financial literacy
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Learn Finance. Play Challenges.{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Invest Smarter.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Master investing concepts through interactive lessons, quizzes, and
            AI-powered education — no financial advice, just clarity.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:shadow-blue-500/30"
            >
              Start Learning
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/lessons"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-8 py-3.5 text-base font-semibold text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
            >
              Browse Lessons
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-left transition-colors hover:border-slate-700"
            >
              <div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-400">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
        InvestQuest — Educational platform only. Not financial advice.
      </footer>
    </div>
  );
}
