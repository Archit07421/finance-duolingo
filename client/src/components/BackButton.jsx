import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="
        mb-6
        inline-flex
        items-center
        gap-2
        rounded-lg
        border
        border-slate-700
        bg-slate-900/60
        px-4
        py-2
        text-sm
        font-medium
        text-slate-300
        transition-all
        hover:border-blue-500/50
        hover:bg-blue-500/10
        hover:text-white
      "
    >
      <ArrowLeft className="h-4 w-4" />
      Back
    </button>
  );
}