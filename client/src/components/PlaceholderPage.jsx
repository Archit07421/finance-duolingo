import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PlaceholderPage({ title, description }) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-black px-4 text-center">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <p className="mt-3 max-w-md text-slate-400">{description}</p>
      <Link
        to="/dashboard"
        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Dashboard
      </Link>
    </div>
  );
}
