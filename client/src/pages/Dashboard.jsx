import DashboardLayout from "../layouts/DashboardLayout";

import DashboardCard from "../components/dashboard/DashboardCard";

import { useAuth } from "../context/AuthContext";
import { BackgroundBeams } from "@/components/ui/background-beams";

import { GlowingEffect } from "@/components/ui/glowing-effect";


const featureCards = [

  {
    title: "Learning Path",
    description:
      "Learn stocks, ETFs, mutual funds and investing basics.",
    buttonText: "Start Learning",
    to: "/lessons",
  },

  {
    title: "Daily Challenge",
    description:
      "Complete today's challenge and earn XP.",
    buttonText: "Start Challenge",
    to: "/quiz",
  },

  {
    title: "Quizzes",
    description:
      "Test your knowledge with finance quizzes.",
    buttonText: "Take Quiz",
    to: "/quizzes",
  },

  

  {
    title: "AI Coach",
    description:
      "Ask beginner-friendly investing questions.",
    buttonText: "Ask AI",
    to: "/ai-coach",
  },

  {
    title: "Scam Detector",
    description:
      "Analyze suspicious financial news and messages.",
    buttonText: "Analyze",
    to: "/fake-news",
  },

];


export default function Dashboard() {

  const { user } = useAuth();


  // Get first name only
  const firstName =
    user?.displayName?.split(" ")[0] || "Investor";


    return (
      <DashboardLayout>
        <div className="mx-auto max-w-6xl">
    
          {/* ================================
              WELCOME
          ================================= */}
    
          <div className="mb-6">
    
            <h1 className="text-2xl font-semibold text-white sm:text-3xl">
              Welcome{" "}
              <span className="text-blue-400">
                {firstName}
              </span>{" "}
              👋
            </h1>
    
            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              Continue your financial learning journey.
            </p>
    
          </div>
    
    
          {/* ================================
              FINANCIAL JOURNEY HERO
          ================================= */}
    
          <section
  className="
    relative
    mb-16
    min-h-[450px]
    overflow-hidden
    bg-[#07111f]
    rounded-3xl
    border
    border-slate-800
    bg-[#07111f]
  "
>
    
            {/* Animated Background Beams */}
    
            <BackgroundBeams />
    
    
            {/* Subtle blue glow */}
    
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_60%)]
              "
            />
    
    
            {/* Hero content */}
    
            <div
              className="
                relative
                z-10
                flex
                min-h-[450px]
                items-center
                justify-center
                px-6
                text-center
              "
            >
    
              <div className="max-w-3xl">
    
                {/* Label */}
    
                <div
                  className="
                    mb-6
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-blue-400/20
                    bg-blue-500/10
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-blue-300
                    backdrop-blur-md
                  "
                >
                  ✨ Your financial journey
                </div>
    
    
                {/* Heading */}
    
                <h2
                  className="
                    text-4xl
                    font-extrabold
                    leading-tight
                    tracking-tight
                    text-white
                    sm:text-6xl
                  "
                >
                  Build your financial
    
                  <span
                    className="
                      block
                      bg-gradient-to-r
                      from-blue-300
                      via-blue-400
                      to-blue-600
                      bg-clip-text
                      text-transparent
                    "
                  >
                    confidence.
                  </span>
                </h2>
    
    
                {/* Description */}
    
                <p
                  className="
                    mx-auto
                    mt-6
                    max-w-2xl
                    text-base
                    leading-7
                    text-slate-400
                    sm:text-lg
                  "
                >
                  Learn the fundamentals of money and investing,
                  practice what you know, and build smarter financial
                  habits — one lesson at a time.
                </p>
    
    
                {/* CTA */}
    
                <div className="mt-8">
    
                  <a
                    href="/lessons"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-blue-600
                      px-6
                      py-3
                      text-sm
                      font-semibold
                      text-white
                      shadow-lg
                      shadow-blue-600/20
                      transition-all
                      hover:bg-blue-500
                      hover:shadow-blue-500/30
                    "
                  >
                    Continue Learning
                    →
                  </a>
    
                </div>
    
    
                {/* Stats */}
    
                <div
                  className="
                    mx-auto
                    mt-10
                    flex
                    max-w-md
                    items-center
                    justify-center
                    gap-6
                    text-sm
                    sm:gap-10
                  "
                >
    
                  
    
                </div>
    
              </div>
    
            </div>
    
          </section>
    
    
          {/* ================================
              LEARNING HUB
          ================================= */}
    
          <section>
    
            <div className="mb-8">
    
              <p className="text-sm font-medium uppercase tracking-wider text-blue-400">
                Your Learning Hub
              </p>
    
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                What would you like to explore?
              </h2>
    
              <p className="mt-2 text-sm text-slate-400">
                Choose where you want to continue your financial journey.
              </p>
    
            </div>
    
    
            {/* Feature cards */}
    
            <div
  className="
    grid
    grid-cols-1
    gap-5
    sm:grid-cols-2
    lg:grid-cols-3
  "
>
  {featureCards.map((card) => (
    <div
      key={card.title}
      className="
        relative
        rounded-2xl
        border
        border-slate-800
        bg-[#0b1220]
        p-6
      "
    >
      {/* Glowing border */}
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />

      {/* Card content */}
      <div className="relative z-10 flex h-full flex-col">

        {/* Icon */}
        <div
          className="
            mb-5
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-blue-500/10
            text-blue-400
          "
        >
          {card.title === "Learning Path" && "📚"}
          {card.title === "Daily Challenge" && "⚡"}
          {card.title === "Quizzes" && "🧠"}
          {card.title === "Risk Assessment" && "🎯"}
          {card.title === "AI Coach" && "🤖"}
          {card.title === "Scam Detector" && "🛡️"}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-white">
          {card.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-6 text-slate-400">
          {card.description}
        </p>

        {/* Button */}
        <a
          href={card.to}
          className="
            mt-6
            inline-flex
            items-center
            justify-center
            rounded-xl
            border
            border-slate-700
            bg-slate-900/60
            px-4
            py-2.5
            text-sm
            font-medium
            text-white
            transition-all
            hover:border-blue-500/50
            hover:bg-blue-500/10
          "
        >
          {card.buttonText}
          <span className="ml-2">→</span>
        </a>

      </div>
    </div>
  ))}
</div>
    
          </section>
    
        </div>
      </DashboardLayout>
    );

}