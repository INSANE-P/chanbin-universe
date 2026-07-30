// 나무 판자 무대 바닥. 판자 선이 관객 쪽으로 살짝 벌어져서 원근감이 나요.

const LINES = Array.from({ length: 13 }, (_, i) => {
  const topX = i * 100;
  const bottomX = 600 + (topX - 600) * 1.35;
  return { topX, bottomX };
});

export default function StageFloor() {
  return (
    <div className="stage-floor" aria-hidden>
      <div className="footlights">
        {Array.from({ length: 9 }, (_, i) => (
          <span key={i} className="foot" />
        ))}
      </div>
      <svg viewBox="0 0 1200 140" preserveAspectRatio="none" className="stage-floor-svg">
        <rect width="1200" height="140" fill="#5a3d2b" />
        <rect width="1200" height="10" fill="#7a5238" />
        <rect y="10" width="1200" height="4" fill="#3d2a1d" opacity="0.6" />
        {LINES.map((l, i) => (
          <path
            key={i}
            d={`M${l.topX},10 L${l.bottomX},140`}
            stroke="#4a3122"
            strokeWidth="3"
          />
        ))}
        <rect y="14" width="1200" height="126" fill="url(#floorShade)" />
        <defs>
          <linearGradient id="floorShade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f7d98c" stopOpacity="0.08" />
            <stop offset="1" stopColor="#1a1026" stopOpacity="0.45" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
