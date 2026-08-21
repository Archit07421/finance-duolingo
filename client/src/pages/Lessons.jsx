// client/src/pages/LessonPath.jsx
// Route: /lesson
//
// Renders the gamified, Duolingo-style learning path for the finance
// curriculum. Reads topic data from src/data/lessons.js and will later
// read progress from GET /api/progress (see services/progressService.js).

import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import CategoryTabs from "../components/lesson/CategoryTabs";
import PathStatsBar from "../components/lesson/PathStatsBar";
import LessonNode from "../components/lesson/LessonNode";
import PathConnector from "../components/lesson/PathConnector";
import QuizCTA from "../components/lesson/QuizCTA";
import { CATEGORIES, getLessonsByCategory, LESSONS } from "../data/lessons";

const NODE_GAP = 168; // px between node centers, keep in sync with vertical rhythm below

export default function LessonPath() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);

  const lessons = useMemo(
    () => getLessonsByCategory(activeCategory),
    [activeCategory]
  );

  const completedCount = LESSONS.filter((l) => l.status === "completed").length;
  const totalXp = LESSONS.filter((l) => l.status === "completed").reduce(
    (sum, l) => sum + l.xp,
    0
  );

  const handleSelectLesson = (lesson) => {
    // Next step: build /lesson/:id to host the actual lesson + quiz flow.
    navigate(`/lesson/${lesson.id}`);
  };

  const handleStartQuiz = () => {
    navigate(`/lesson/${activeCategory}/quiz`);
  };

  return (
    <div className="min-h-screen bg-slate-950 pb-28 text-white">
      {/* Header */}
      <header className="flex items-center gap-3 px-5 pt-6">
        <button
          type="button"
          onClick={() => navigate("/")}
          aria-label="Back to dashboard"
          className="rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-900 hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div>
          <p className="text-sm text-slate-400">Your Journey</p>
          <h1 className="text-xl font-bold">Learning Path</h1>
        </div>
      </header>

      <PathStatsBar streak={4} xp={totalXp} />

      <p className="px-5 pt-4 text-xs text-slate-500">
        {completedCount} of {LESSONS.length} lessons completed
      </p>

      <nav className="mt-4">
        <CategoryTabs
          categories={CATEGORIES}
          activeId={activeCategory}
          onChange={setActiveCategory}
        />
      </nav>

      {/* Path */}
      <div className="relative mx-auto mt-10 max-w-md px-5">
        <div
          className="relative"
          style={{ height: `${(lessons.length - 1) * NODE_GAP + 96}px` }}
        >
          {lessons.map((lesson, index) => (
            <div key={lesson.id}>
              {index < lessons.length - 1 && (
                <div
                  className="absolute left-0 right-0"
                  style={{ top: `${index * NODE_GAP + 32}px`, height: `${NODE_GAP}px` }}
                >
                  <PathConnector
                    index={index}
                    active={lesson.status === "completed"}
                  />
                </div>
              )}
              <div
                className="absolute left-1/2"
                style={{ top: `${index * NODE_GAP}px` }}
              >
                <LessonNode
                  lesson={lesson}
                  index={index}
                  onSelect={handleSelectLesson}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <QuizCTA onStart={handleStartQuiz} />
    </div>
  );
}