// 커튼콜 인사 실루엣. 허리를 숙이고 한 팔은 뒤로 우아하게 뻗은 정지 포즈예요.
// 두꺼운 라운드 스트로크로 그려서 관절 이음새 없이 한 덩어리로 흘러요.
const SIL = "#0d0f1f";

export default function BowFigure({ height }: { height: number }) {
  return (
    <svg
      width={height * 1.05}
      height={height}
      viewBox="0 0 220 200"
      aria-hidden
    >
      <g
        fill="none"
        stroke={SIL}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M96,186 C96,158 96,138 99,120" strokeWidth="17" />
        <path d="M114,186 C114,160 112,140 106,120" strokeWidth="17" />
        <path d="M89,189 L103,189" strokeWidth="11" />
        <path d="M108,189 L124,189" strokeWidth="11" />
        <path d="M101,122 C103,98 115,82 136,73" strokeWidth="30" />
        <path d="M132,72 C126,90 118,102 108,112" strokeWidth="12" />
        <path d="M128,64 C108,56 86,50 66,54" strokeWidth="12" />
        <path d="M138,72 L150,80" strokeWidth="16" />
      </g>
      <g fill={SIL}>
        <circle cx="63" cy="54" r="6.5" />
        <circle cx="158" cy="86" r="14" />
        <path d="M96,116 Q78,144 82,172 Q92,150 102,124 Z" />
        <g transform="rotate(38 162 78)">
          <ellipse cx="162" cy="78" rx="21" ry="4.5" />
          <rect x="150" y="59" width="24" height="20" rx="6" />
        </g>
      </g>
    </svg>
  );
}
