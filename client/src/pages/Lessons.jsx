import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import lessons from "../data/lessons";
import BackButton from "../components/BackButton";

const STORAGE_KEY = "investquest_completed_lessons";

export default function Lessons() {
  const navigate = useNavigate();

  const completedLessons = useMemo(() => {
    try {
      return JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );
    } catch {
      return [];
    }
  }, []);

  const completedSet = new Set(completedLessons);

  const totalLessons = lessons.length;

  const completedCount = lessons.filter((lesson) =>
    completedSet.has(lesson.id)
  ).length;

  const progress =
    totalLessons > 0
      ? Math.round((completedCount / totalLessons) * 100)
      : 0;

  const totalXP = lessons.reduce(
    (total, lesson) => total + lesson.xp,
    0
  );

  const earnedXP = lessons
    .filter((lesson) => completedSet.has(lesson.id))
    .reduce((total, lesson) => total + lesson.xp, 0);

  const stages = [...new Set(lessons.map((lesson) => lesson.stage))];

  return (
    <div className="min-h-screen bg-[#080d18] text-white">

      <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">

        {/* ================================= */}
        {/* HEADER */}
        {/* ================================= */}

        <section className="mb-8">

          <p className="text-sm font-medium uppercase tracking-wider text-blue-400">
            LEARNING PATH
          </p>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">

            <div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Your investing journey
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Start from the basics and gradually build the knowledge
                you need to become a more confident investor.
              </p>

            </div>

          </div>

        </section>


        {/* ================================= */}
        {/* PROGRESS CARD */}
        {/* ================================= */}

        <section className="
          mb-10
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
          ">

            {/* Progress */}
            <div className="flex-1">

              <div className="flex items-end justify-between">

                <div>

                  <p className="text-sm font-semibold">
                    Overall progress
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {completedCount} of {totalLessons} lessons completed
                  </p>

                </div>

                <p className="text-2xl font-bold text-blue-400">
                  {progress}%
                </p>

              </div>


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
                    duration-500
                  "
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

            </div>


            {/* Stats */}

            <div className="
              grid
              grid-cols-2
              gap-3
              sm:min-w-[300px]
            ">

              <div className="
                rounded-2xl
                border
                border-slate-800
                bg-[#080d18]
                p-4
              ">

                <p className="text-xs text-slate-500">
                  XP earned
                </p>

                <p className="mt-1 text-xl font-semibold">
                  {earnedXP}
                </p>

              </div>


              <div className="
                rounded-2xl
                border
                border-slate-800
                bg-[#080d18]
                p-4
              ">

                <p className="text-xs text-slate-500">
                  Total XP
                </p>

                <p className="mt-1 text-xl font-semibold">
                  {totalXP}
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================================= */}
        {/* LEARNING STAGES */}
        {/* ================================= */}

        <div className="space-y-10">

          {stages.map((stageNumber) => {

            const stageLessons = lessons.filter(
              (lesson) => lesson.stage === stageNumber
            );

            const stageTitle =
              stageLessons[0]?.stageTitle || "";

            return (

              <section key={stageNumber}>

                {/* Stage heading */}

                <div className="mb-5 flex items-center gap-4">

                  <div className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-500/10
                    text-sm
                    font-bold
                    text-blue-400
                  ">
                    {stageNumber}
                  </div>

                  <div>

                    <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      Stage {stageNumber}
                    </p>

                    <h2 className="mt-1 text-xl font-semibold">
                      {stageTitle}
                    </h2>

                  </div>

                </div>


                {/* Lesson list */}

                <div className="space-y-3">

                  {stageLessons.map((lesson, index) => {

                    const completed =
                      completedSet.has(lesson.id);

                    // First incomplete lesson is unlocked.
                    const previousLesson =
                      lessons[lessons.indexOf(lesson) - 1];

                    const unlocked =
                      index === 0 ||
                      completed ||
                      completedSet.has(previousLesson?.id);

                    return (

                      <button
                        key={lesson.id}
                        disabled={!unlocked}
                        onClick={() =>
                          navigate(`/lessons/${lesson.id}`)
                        }
                        className={`
                          group
                          flex
                          w-full
                          items-center
                          gap-4
                          rounded-2xl
                          border
                          p-4
                          text-left
                          transition-all
                          sm:p-5

                          ${
                            completed
                              ? "border-emerald-500/20 bg-emerald-500/[0.04]"
                              : unlocked
                              ? "border-slate-800 bg-[#0d1424] hover:border-slate-700 hover:bg-[#111a2d]"
                              : "cursor-not-allowed border-slate-900 bg-[#0a101c] opacity-50"
                          }
                        `}
                      >

                        {/* Status */}

                        <div className={`
                          flex
                          h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          text-sm
                          font-semibold

                          ${
                            completed
                              ? "bg-emerald-500/10 text-emerald-400"
                              : unlocked
                              ? "bg-blue-500/10 text-blue-400"
                              : "bg-slate-800 text-slate-600"
                          }
                        `}>

                          {completed
                            ? "✓"
                            : unlocked
                            ? index + 1
                            : "🔒"}

                        </div>


                        {/* Content */}

                        <div className="min-w-0 flex-1">

                          <div className="
                            flex
                            flex-col
                            gap-1
                            sm:flex-row
                            sm:items-center
                            sm:gap-3
                          ">

                            <h3 className="
                              truncate
                              text-sm
                              font-semibold
                              sm:text-base
                            ">
                              {lesson.title}
                            </h3>

                            {completed && (
                              <span className="
                                w-fit
                                rounded-full
                                bg-emerald-500/10
                                px-2
                                py-0.5
                                text-[10px]
                                font-medium
                                text-emerald-400
                              ">
                                COMPLETED
                              </span>
                            )}

                          </div>

                          <p className="
                            mt-1
                            line-clamp-2
                            text-xs
                            leading-5
                            text-slate-500
                            sm:text-sm
                          ">
                            {lesson.description}
                          </p>

                          <div className="
                            mt-3
                            flex
                            items-center
                            gap-4
                            text-xs
                            text-slate-500
                          ">

                            <span>
                              ⏱ {lesson.duration} min
                            </span>

                            <span>
                              +{lesson.xp} XP
                            </span>

                          </div>

                        </div>


                        {/* Arrow */}

                        {unlocked && (

                          <div className="
                            hidden
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-slate-800
                            text-slate-400
                            transition
                            group-hover:bg-blue-600
                            group-hover:text-white
                            sm:flex
                          ">
                            →
                          </div>

                        )}

                      </button>

                    );
                  })}

                </div>

              </section>

            );
          })}

        </div>


        {/* Footer */}

        <div className="
          mt-12
          rounded-2xl
          border
          border-blue-500/10
          bg-blue-500/[0.03]
          p-5
          text-center
        ">

          <p className="text-sm font-medium">
            Learn at your own pace.
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Understanding the basics is more important than rushing
            through the lessons.
          </p>

        </div>

      </main>

    </div>
  );
}