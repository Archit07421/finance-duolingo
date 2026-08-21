import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import lessons from "../data/lessons";

const STORAGE_KEY = "investquest_completed_lessons";

export default function LessonDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the lesson using the ID from the URL
  const lessonIndex = lessons.findIndex(
    (item) => item.id === id
  );

  const lesson = lessons[lessonIndex];

  // Check if this lesson is already completed
  const [completed, setCompleted] = useState(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

      return saved.includes(id);
    } catch {
      return false;
    }
  });

  // If lesson doesn't exist
  if (!lesson) {
    return (
      <div className="min-h-screen bg-[#080d18] px-4 py-10 text-white">
        <div className="mx-auto max-w-xl text-center">

          <h1 className="text-2xl font-bold">
            Lesson not found
          </h1>

          <p className="mt-3 text-slate-400">
            We couldn't find this lesson.
          </p>

          <button
            onClick={() => navigate("/lessons")}
            className="mt-6 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold hover:bg-blue-500"
          >
            ← Back to Learning Path
          </button>

        </div>
      </div>
    );
  }

  const nextLesson = lessons[lessonIndex + 1];

  // Mark lesson as completed
  const markComplete = () => {
    try {
      const saved = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "[]"
      );

      if (!saved.includes(id)) {
        saved.push(id);

        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(saved)
        );
      }

      setCompleted(true);
    } catch (error) {
      console.error("Could not save progress:", error);
    }
  };

  // Complete and move to next lesson
  const handleContinue = () => {
    markComplete();

    if (nextLesson) {
      navigate(`/lessons/${nextLesson.id}`);
    } else {
      navigate("/lessons");
    }
  };

  return (
    <div className="min-h-screen bg-[#080d18] text-white">

      <main className="mx-auto w-full max-w-4xl px-4 py-7 sm:px-6 sm:py-10">

        {/* Back button */}

        <button
          onClick={() => navigate("/lessons")}
          className="mb-8 text-sm text-slate-400 hover:text-white"
        >
          ← Back to Learning Path
        </button>


        {/* Lesson Header */}

        <section className="rounded-3xl border border-slate-800 bg-[#0d1424] p-6 sm:p-8 lg:p-10">

          <div className="flex flex-wrap items-center gap-3">

            <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400">
              Stage {lesson.stage}
            </span>

            <span className="text-xs text-slate-500">
              {lesson.stageTitle}
            </span>

          </div>


          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            {lesson.title}
          </h1>


          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
            {lesson.description}
          </p>


          <div className="mt-6 flex items-center gap-5 text-xs text-slate-500">

            <span>
              ⏱ {lesson.duration} min
            </span>

            <span>
              +{lesson.xp} XP
            </span>

          </div>

        </section>


        {/* Lesson Content */}

        <article className="mt-5 rounded-3xl border border-slate-800 bg-[#0d1424] p-6 sm:p-8 lg:p-10">

          <h2 className="text-xl font-semibold">
            Let's learn
          </h2>


          <div className="mt-6 space-y-6">

            {lesson.content.map((paragraph, index) => (
              <div
                key={index}
                className="flex gap-4"
              >

                <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-500" />

                <p className="text-sm leading-7 text-slate-300 sm:text-base">
                  {paragraph}
                </p>

              </div>
            ))}

          </div>


          {/* Key Takeaways */}

          <div className="mt-10 rounded-2xl border border-blue-500/10 bg-blue-500/[0.04] p-5 sm:p-6">

            <h2 className="font-semibold">
              💡 Key Takeaways
            </h2>


            <ul className="mt-4 space-y-3">

              {lesson.keyTakeaways.map((takeaway, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-6 text-slate-300"
                >

                  <span className="text-blue-400">
                    ✓
                  </span>

                  <span>
                    {takeaway}
                  </span>

                </li>
              ))}

            </ul>

          </div>

        </article>


        {/* Complete Lesson */}

        <section className="mt-5 rounded-3xl border border-slate-800 bg-[#0d1424] p-6 sm:p-7">

          {completed ? (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="font-semibold text-emerald-400">
                  ✓ Lesson completed
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  You earned +{lesson.xp} XP.
                </p>

              </div>


              {nextLesson && (
                <button
                  onClick={() =>
                    navigate(`/lessons/${nextLesson.id}`)
                  }
                  className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold hover:bg-blue-500"
                >
                  Next lesson →
                </button>
              )}

            </div>
          ) : (
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="font-semibold">
                  Finished this lesson?
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Mark it complete to unlock the next lesson.
                </p>

              </div>


              <button
                onClick={handleContinue}
                className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold hover:bg-blue-500"
              >
                Complete & Continue →
              </button>

            </div>
          )}

        </section>

      </main>

    </div>
  );
}