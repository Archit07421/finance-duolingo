import { Flame, Menu, Sparkles } from "lucide-react";

export default function TopNavbar({ user, onMenuClick }) {
  const initials = user.name.charAt(0).toUpperCase();

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-slate-800 bg-[#050810] px-4 lg:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        className="rounded-md p-2 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="hidden lg:block" />

      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-1.5 text-sm text-slate-300">
          <Sparkles className="h-4 w-4 text-blue-400" />
          <span className="font-medium">{user.xp.toLocaleString()}</span>
          <span className="hidden text-slate-500 sm:inline">XP</span>
        </div>

        <div className="flex items-center gap-1.5 text-sm text-slate-300">
          <Flame className="h-4 w-4 text-orange-400" />
          <span className="font-medium">{user.streak}</span>
          <span className="hidden text-slate-500 sm:inline">streak</span>
        </div>

        <div
          className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-xs font-semibold text-white"
          title={user.name}
        >
          {initials}
        </div>
      </div>
    </header>
  );
}
