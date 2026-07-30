// 클레이 인형 얼굴. color는 스카프(옷) 색이에요.
export default function ClayFace({
  color,
  size,
}: {
  color: string;
  size: number;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" aria-hidden>
      <path d="M16,62 Q40,76 64,62 L64,80 L16,80 Z" fill={color} />
      <circle cx="40" cy="40" r="27" fill="#f2dcc0" />
      <circle cx="31" cy="16" r="5" fill="#f2c14e" />
      <circle cx="40" cy="13" r="6" fill="#f2c14e" />
      <circle cx="49" cy="16" r="5" fill="#f2c14e" />
      <circle cx="31" cy="40" r="3" fill="#453a2c" />
      <circle cx="49" cy="40" r="3" fill="#453a2c" />
      <circle cx="25" cy="49" r="5" fill="#e07a5f" opacity="0.4" />
      <circle cx="55" cy="49" r="5" fill="#e07a5f" opacity="0.4" />
      <path
        d="M34,50 Q40,56 46,50"
        stroke="#453a2c"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
