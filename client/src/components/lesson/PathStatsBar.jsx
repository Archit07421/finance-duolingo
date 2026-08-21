// client/src/components/lesson/PathStatsBar.jsx
import { Flame, Zap } from "lucide-react";

export default function PathStatsBar({ streak = 0, xp = 0 }) {
  return (
    <div className="flex gap-3 px-5 pt-4">
      <div className="flex flex-1 items-center gap-3 rounded-2xl bg-slate-900 px-4 py-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/15">
          <Flame className="h-5 w-5 text-orange-400" />
        </span>
        <div>
          <p className="text-base font-bold leading-none text-white">{streak} Days</p>
          <p className="mt-1 text-xs text-slate-500">Streak</p>
        </div>
      </div>

      <div className="flex flex-1 items-center gap-3 rounded-2xl bg-slate-900 px-4 py-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/15">
          <Zap className="h-5 w-5 text-blue-400" />
        </span>
        <div>
          <p className="text-base font-bold leading-none text-white">{xp}</p>
          <p className="mt-1 text-xs text-slate-500">XP Points</p>
        </div>
      </div>
    </div>
  );
}