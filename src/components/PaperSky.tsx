// 깊은 남보라 종이 밤하늘. 지평선에 금빛 잔광이 배어 있고
// 색색의 종이별이 아주 천천히 떠다니며, 몇 개는 스톱모션처럼 깜빡여요.

type Star = { x: number; y: number; s: number; big: boolean; tw: boolean };

const STARS: Star[] = Array.from({ length: 64 }, (_, i) => ({
  x: (i * 37.7 + 11) % 100,
  y: (i * 23.3 + 7) % 100,
  s: 1 + (i % 3) * 0.7,
  big: i % 9 === 0,
  tw: i % 5 === 0,
}));

const STAR_COLORS = ["#efe6d2", "#f7d98c", "#e8b9c0", "#b9c8ee"];

function PaperStar({ x, y, r }: { x: number; y: number; r: number }) {
  const d = `M${x},${y - r} L${x + r * 0.32},${y - r * 0.32} L${x + r},${y} L${x + r * 0.32},${y + r * 0.32} L${x},${y + r} L${x - r * 0.32},${y + r * 0.32} L${x - r},${y} L${x - r * 0.32},${y - r * 0.32} Z`;
  return <path d={d} fill="#f2c14e" opacity="0.9" />;
}

export default function PaperSky() {
  return (
    <div className="sky" aria-hidden>
      <div className="sky-drift">
        <svg
          className="sky-stars"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          {STARS.map((st, i) =>
            st.big ? (
              <g key={i} className={st.tw ? "twinkle" : undefined}>
                <PaperStar x={st.x} y={st.y} r={st.s * 1.1} />
              </g>
            ) : (
              <circle
                key={i}
                className={st.tw ? "twinkle" : undefined}
                cx={st.x}
                cy={st.y}
                r={st.s * 0.22}
                fill={STAR_COLORS[i % STAR_COLORS.length]}
                opacity={i % 3 === 0 ? 0.85 : 0.5}
              />
            ),
          )}
          <path
            d="M14,14 A7,7 0 1,0 21,24 A5.6,5.6 0 1,1 14,14 Z"
            fill="#f2c14e"
            opacity="0.85"
          />
          <circle cx="84" cy="16" r="4.6" fill="#d98c8c" opacity="0.4" />
          <circle cx="11" cy="72" r="3" fill="#7d86c9" opacity="0.4" />
        </svg>
      </div>
    </div>
  );
}
