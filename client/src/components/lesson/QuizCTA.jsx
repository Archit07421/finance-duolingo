// client/src/components/lesson/QuizCTA.jsx
import { Target } from "lucide-react";

export default function QuizCTA({ onStart }) {
  return (
    <div className="mx-5 mt-8 flex items-center justify-between gap-4 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6">
      <div>
        <h3 className="text-xl font-bold text-white">Ready for a challenge?</h3>
        <p className="mt-1 text-sm text-blue-100">
          Take a quick quiz to earn extra XP!
        </p>
        <button
          type="button"
          onClick={onStart}
          className="mt-4 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 transition-transform hover:scale-105 active:scale-95"
        >
          Start Quiz
        </button>
      </div>
      <Target className="h-16 w-16 shrink-0 text-blue-300/70" strokeWidth={1.5} />
    </div>
  );
}