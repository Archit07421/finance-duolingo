// client/src/components/lesson/LessonNode.jsx
import * as Icons from "lucide-react";
import { Check, Lock } from "lucide-react";

const OFFSETS = ["50%", "26%", "50%", "74%"]; // zigzag positions along the path

const STATUS_STYLES = {
  completed: {
    outerRing: "ring-4 ring-blue-500/20",
    fill: "bg-blue-500",
    iconColor: "text-white",
    label: "text-slate-300",
  },
  current: {
    outerRing: "ring-4 ring-white/90",
    fill: "bg-blue-500",
    iconColor: "text-white",
    label: "text-white font-semibold",
  },
  locked: {
    outerRing: "ring-4 ring-slate-800",
    fill: "bg-slate-800",
    iconColor: "text-slate-500",
    label: "text-slate-500",
  },
};

export default function LessonNode({ lesson, index, onSelect }) {
  const Icon = Icons[lesson.icon] ?? Icons.Circle;
  const styles = STATUS_STYLES[lesson.status];
  const offset = OFFSETS[index % OFFSETS.length];
  const isLocked = lesson.status === "locked";
  const isCurrent = lesson.status === "current";

  return (
    <div
      className="relative flex flex-col items-center"
      style={{ left: offset, transform: "translateX(-50%)" }}
    >
      <button
        type="button"
        disabled={isLocked}
        onClick={() => onSelect(lesson)}
        aria-label={`${lesson.title} — ${lesson.status}`}
        className={`
          relative flex h-16 w-16 items-center justify-center rounded-full
          ${styles.fill} ${styles.outerRing}
          ${isCurrent ? "animate-pulse-slow" : ""}
          transition-transform duration-200
          ${isLocked ? "cursor-not-allowed" : "cursor-pointer hover:scale-105 active:scale-95"}
          focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400
        `}
      >
        {lesson.status === "completed" ? (
          <Check className={`h-7 w-7 ${styles.iconColor}`} strokeWidth={3} />
        ) : isLocked ? (
          <Lock className={`h-5 w-5 ${styles.iconColor}`} />
        ) : (
          <Icon className={`h-7 w-7 ${styles.iconColor}`} strokeWidth={2} />
        )}

        {lesson.status === "current" && (
          <span className="absolute -bottom-1 -right-1 rounded-full bg-blue-500 px-1.5 py-0.5 text-[10px] font-bold text-white shadow">
            +{lesson.xp}
          </span>
        )}
      </button>

      <span
        className={`mt-3 max-w-[9.5rem] text-center text-sm leading-snug ${styles.label}`}
      >
        {lesson.title}
      </span>
    </div>
  );
}