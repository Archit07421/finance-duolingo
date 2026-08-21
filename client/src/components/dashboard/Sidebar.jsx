import { NavLink } from "react-router-dom";
import {
  Award,
  BookOpen,
  Bot,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Home,
  Newspaper,
  Target,
  User,
  Zap,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: Home, to: "/dashboard" },
  { label: "Learning Path", icon: BookOpen, to: "/lessons" },
  { label: "Daily Challenge", icon: Zap, to: "/quiz" },
  { label: "Quizzes", icon: ClipboardList, to: "/quizzes" },
  { label: "Risk Assessment", icon: Target, to: "/risk" },
  { label: "AI Coach", icon: Bot, to: "/ai-coach" },
  { label: "Scam Detector", icon: Newspaper, to: "/fake-news" },
  { label: "Achievements", icon: Award, to: "/achievements" },
];

const bottomItems = [{ label: "Profile", icon: User, to: "/profile" }];

function NavItem({ item, collapsed, onNavigate }) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.to}
      end={item.to === "/dashboard"}
      onClick={onNavigate}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${
          isActive
            ? "border border-slate-700 bg-slate-800/60 text-white"
            : "border border-transparent text-slate-400 hover:bg-slate-800/40 hover:text-slate-200"
        } ${collapsed ? "justify-center px-2" : ""}`
      }
      title={collapsed ? item.label : undefined}
    >
      <Icon className="h-4 w-4 shrink-0" />
      {!collapsed && <span>{item.label}</span>}
    </NavLink>
  );
}

export default function Sidebar({
  collapsed,
  mobileOpen,
  onToggleCollapse,
  onCloseMobile,
}) {
  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col border-r border-slate-800 bg-[#050810] transition-all duration-200 lg:static lg:translate-x-0 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } ${collapsed ? "w-[72px]" : "w-[260px]"}`}
      >
        <div
          className={`flex h-14 items-center border-b border-slate-800 px-4 ${
            collapsed ? "justify-center px-2" : "justify-between"
          }`}
        >
          {!collapsed && (
            <span className="text-base font-semibold text-white">
              Invest<span className="text-blue-400">Quest</span>
            </span>
          )}
          <button
            type="button"
            onClick={onToggleCollapse}
            className="hidden rounded-md p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white md:inline-flex"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
          {menuItems.map((item) => (
            <NavItem
              key={item.to}
              item={item}
              collapsed={collapsed}
              onNavigate={onCloseMobile}
            />
          ))}
        </nav>

        <div className="space-y-1 border-t border-slate-800 px-3 py-4">
          {bottomItems.map((item) => (
            <NavItem
              key={item.to}
              item={item}
              collapsed={collapsed}
              onNavigate={onCloseMobile}
            />
          ))}
        </div>
      </aside>
    </>
  );
}
