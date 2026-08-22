import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getUserProfile } from "../services/userService";
import quizData from "../data/quizData";

const levels = [
  {
    id: "easy",
    title: "Easy",
    subtitle: "Build your foundation",
    description:
      "Learn and test the essential concepts every beginner investor should know.",
    icon: "🌱",
    accent: "blue",
  },
  {
    id: "medium",
    title: "Medium",
    subtitle: "Strengthen your knowledge",
    description:
      "Put your understanding of investing, risk and financial concepts to the test.",
    icon: "⚡",
    accent: "purple",
  },
  {
    id: "hard",
    title: "Hard",
    subtitle: "Challenge yourself",
    description:
      "Take on deeper concepts and see how strong your financial knowledge really is.",
    icon: "🔥",
    accent: "orange",
  },
];

export default function Quizzes() {
  const navigate = useNavigate();

  // Automatically calculated from quizData
  const totalQuestions = Object.values(quizData).reduce(
    (total, questions) => total + questions.length,
    0
  );

  // Prototype values — later these can come from user progress
  const { user } = useAuth();

const [profile, setProfile] = useState(null);

useEffect(() => {
  const loadProfile = async () => {
    if (!user?.uid) return;

    try {
      const data = await getUserProfile(user.uid);
      setProfile(data);
    } catch (error) {
      console.error(
        "Failed to load profile:",
        error
      );
    }
  };

  loadProfile();
}, [user]);

const xp = profile?.xp || 0;
const streak = profile?.streak || 0;
const questionsSolved = 0;

  const overallProgress =
    totalQuestions > 0
      ? Math.min((questionsSolved / totalQuestions) * 100, 100)
      : 0;

  return (
    <div className="min-h-screen bg-[#080d18] text-white">
      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <button
        onClick={() => navigate("/dashboard")}
        className="
          mb-6
          inline-flex
          items-center
          gap-2
          rounded-lg
          border
          border-blue-500/40
          bg-blue-500/10
          px-3
          py-2
          text-sm
          font-medium
          text-blue-400
          transition-all
          hover:border-blue-400
          hover:bg-blue-500/20
          hover:text-blue-300
        "
      >
        ← Home
      </button>
        {/* Header */}
        <section className="mb-10">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div>
              <p className="mb-2 text-sm font-medium text-blue-400">
                KNOWLEDGE CHECK
              </p>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Test your finance knowledge
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Choose a difficulty level and challenge yourself.
                Complete quizzes to earn XP and build your streak.
              </p>
            </div>

            {/* Overall stats */}
            <div className="flex gap-3">

              <div className="rounded-2xl border border-slate-800 bg-[#0d1424] px-4 py-3">
                <p className="text-xs text-slate-500">XP</p>
                <p className="mt-1 text-lg font-semibold">
                  {xp.toLocaleString()}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-[#0d1424] px-4 py-3">
                <p className="text-xs text-slate-500">Streak</p>
                <p className="mt-1 text-lg font-semibold">
                  🔥 {streak}
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* Difficulty cards */}
        <section>

          <div className="mb-5">
            <h2 className="text-lg font-semibold">
              Choose your challenge
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Each level contains {quizData.easy.length} questions.
            </p>
          </div>


          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

            {levels.map((level) => {

              const questionCount =
                quizData[level.id]?.length ?? 0;

              return (
                <button
                  key={level.id}
                  onClick={() =>
                    navigate(`/quiz?level=${level.id}`)
                  }
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-slate-800
                    bg-[#0d1424]
                    p-6
                    text-left
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-slate-600
                    hover:bg-[#111a2d]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-blue-500/50
                  "
                >

                  {/* subtle glow */}
                  <div className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-32
                    w-32
                    rounded-full
                    bg-blue-500/10
                    blur-3xl
                    transition
                    group-hover:bg-blue-500/20
                  " />

                  {/* Icon */}
                  <div className="
                    mb-6
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-slate-800/80
                    text-xl
                  ">
                    {level.icon}
                  </div>


                  {/* Title */}
                  <h3 className="text-xl font-semibold">
                    {level.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-blue-400">
                    {level.subtitle}
                  </p>

                  <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-400">
                    {level.description}
                  </p>


                  {/* Bottom */}
                  <div className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-slate-800
                    pt-5
                  ">

                    <div>
                      <p className="text-xs text-slate-500">
                        Questions
                      </p>

                      <p className="mt-1 font-semibold">
                        {questionCount}
                      </p>
                    </div>

                    <span className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-slate-800
                      text-slate-300
                      transition
                      group-hover:bg-blue-600
                      group-hover:text-white
                    ">
                      →
                    </span>

                  </div>

                </button>
              );
            })}

          </div>

        </section>


        {/* Progress section */}
        <section className="
          mt-8
          rounded-3xl
          border
          border-slate-800
          bg-[#0d1424]
          p-6
          sm:p-7
        ">

          <div className="
            flex
            flex-col
            gap-6
            lg:flex-row
            lg:items-center
            lg:justify-between
          ">

            {/* Progress information */}
            <div className="flex-1">

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-sm font-semibold">
                    Your progress
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Keep going — you're building your knowledge.
                  </p>
                </div>

                <span className="text-sm font-semibold text-blue-400">
                  {Math.round(overallProgress)}%
                </span>

              </div>


              {/* Progress bar */}
              <div className="
                mt-4
                h-2
                overflow-hidden
                rounded-full
                bg-slate-800
              ">

                <div
                  className="
                    h-full
                    rounded-full
                    bg-blue-500
                    transition-all
                  "
                  style={{
                    width: `${overallProgress}%`,
                  }}
                />

              </div>

            </div>


            {/* Questions solved */}
            <div className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-slate-800
              bg-[#080d18]
              px-5
              py-4
            ">

              <div className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-blue-500/10
                text-blue-400
              ">
                ✓
              </div>

              <div>
                <p className="text-xs text-slate-500">
                  Questions solved
                </p>

                <p className="mt-1 font-semibold">
                  {questionsSolved} / {totalQuestions}
                </p>
              </div>

            </div>

          </div>

        </section>

      </main>
    </div>
  );
}