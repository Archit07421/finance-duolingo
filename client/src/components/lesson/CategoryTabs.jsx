// client/src/components/lesson/CategoryTabs.jsx
export default function CategoryTabs({ categories, activeId, onChange }) {
    return (
      <div className="scrollbar-none flex gap-6 overflow-x-auto border-b border-slate-800 px-5">
        {categories.map((category) => {
          const isActive = category.id === activeId;
          return (
            <button
              key={category.id}
              type="button"
              onClick={() => onChange(category.id)}
              className={`
                relative shrink-0 whitespace-nowrap pb-3 pt-1 text-sm font-medium transition-colors
                ${isActive ? "text-blue-400" : "text-slate-500 hover:text-slate-300"}
              `}
            >
              {category.label}
              {isActive && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-blue-500" />
              )}
            </button>
          );
        })}
      </div>
    );
  }