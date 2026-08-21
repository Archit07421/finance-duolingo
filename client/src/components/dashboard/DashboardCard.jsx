import { Link } from "react-router-dom";

export default function DashboardCard({ title, description, buttonText, to }) {
  return (
    <div className="flex flex-col rounded-xl border border-slate-800 bg-[#0B1120] p-6">
      <h3 className="text-center text-base font-semibold text-white">{title}</h3>
      <p className="mt-3 flex-1 text-center text-sm leading-relaxed text-slate-400">
        {description}
      </p>
      <Link
        to={to}
        className="mt-6 block w-full rounded-lg border border-slate-600 py-2.5 text-center text-sm font-medium text-white transition-colors hover:border-slate-500 hover:bg-slate-800/50"
      >
        {buttonText}
      </Link>
    </div>
  );
}
