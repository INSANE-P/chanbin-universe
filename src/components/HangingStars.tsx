// 천장에 실로 매달린 종이별들. 인형극 소품처럼 천천히 흔들려요.

const HANGERS = [
  { x: 7, len: 120, size: 26, dur: 5.2, delay: 0 },
  { x: 20, len: 70, size: 18, dur: 6.1, delay: 0.8 },
  { x: 62, len: 58, size: 15, dur: 7.0, delay: 0.2 },
  { x: 80, len: 96, size: 22, dur: 5.6, delay: 0.4 },
  { x: 93, len: 145, size: 30, dur: 6.6, delay: 1.1 },
];

function Star({ size }: { size: number }) {
  const r = size / 2;
  const c = r;
  const k = r * 0.34;
  const d = `M${c},0 L${c + k},${c - k} L${size},${c} L${c + k},${c + k} L${c},${size} L${c - k},${c + k} L0,${c} L${c - k},${c - k} Z`;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <path d={d} fill="#f2c14e" />
      <path d={d} fill="#ffffff" opacity="0.12" transform={`translate(${-r * 0.08} ${-r * 0.08})`} />
    </svg>
  );
}

export default function HangingStars() {
  return (
    <div className="hangers" aria-hidden>
      {HANGERS.map((h, i) => (
        <div
          key={i}
          className="hanger"
          style={{
            left: `${h.x}%`,
            animationDuration: `${h.dur}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          <div className="thread" style={{ height: h.len }} />
          <Star size={h.size} />
        </div>
      ))}
    </div>
  );
}
