// client/src/components/lesson/PathConnector.jsx
// Draws the winding dashed line between two consecutive nodes on the path.
// Positions are percentage-based so the connector matches LessonNode's
// zigzag OFFSETS regardless of screen width.

const OFFSETS = [50, 26, 50, 74];

export default function PathConnector({ index, active }) {
  const startX = OFFSETS[index % OFFSETS.length];
  const endX = OFFSETS[(index + 1) % OFFSETS.length];

  // Control points pull the curve outward for a natural "S" wind.
  const c1x = startX + (endX - startX) * 0.15;
  const c2x = startX + (endX - startX) * 0.85;

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <path
        d={`M ${startX} 0 C ${c1x} 40, ${c2x} 60, ${endX} 100`}
        fill="none"
        stroke={active ? "#3b82f6" : "#334155"}
        strokeWidth="2.5"
        strokeDasharray="6 8"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}