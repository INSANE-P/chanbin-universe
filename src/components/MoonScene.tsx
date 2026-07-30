// 커버 장면: 두툼한 초승달 보트에 여우, 어린왕자, 장미가
// 뒷모습으로 타고 앉아 밤하늘을 올려다보고 있어요.
// 하반신은 달 보트의 앞쪽 테두리에 가려져요.

const GOLD = "#f2c14e";
const MOON = "#f2d78c";
const MOON_DARK = "#d9b968";
const FOX = "#e8873c";
const FOX_DARK = "#c96f2a";
const CREAM = "#f2e6cb";
const GREEN = "#5d8a4a";
const ROSE = "#d1495b";

export default function MoonScene({ width }: { width: number }) {
  return (
    <svg width={width} height={width * 0.66} viewBox="0 0 380 250" aria-hidden>
      <g fill={GOLD}>
        <path d="M46,36 L48.5,42 L55,44.5 L48.5,47 L46,53 L43.5,47 L37,44.5 L43.5,42 Z" />
        <path d="M330,24 L332,29 L337,31 L332,33 L330,38 L328,33 L323,31 L328,29 Z" opacity="0.85" />
        <circle cx="300" cy="70" r="2.2" opacity="0.7" />
        <circle cx="76" cy="80" r="1.8" opacity="0.6" />
      </g>

      {/* 여우 뒷모습 */}
      <path d="M158,146 Q176,136 172,110" stroke={FOX} strokeWidth="13" strokeLinecap="round" fill="none" />
      <circle cx="172" cy="110" r="7" fill={CREAM} />
      <path d="M118,152 Q116,120 140,114 Q164,120 162,152 Z" fill={FOX} />
      <circle cx="140" cy="102" r="13" fill={FOX} />
      <path d="M130,94 L134,79 L141,92 Z" fill={FOX} />
      <path d="M150,94 L146,79 L139,92 Z" fill={FOX} />
      <path d="M132,92 L134,84 L139,91 Z" fill={FOX_DARK} />
      <path d="M148,92 L146,84 L141,91 Z" fill={FOX_DARK} />

      {/* 어린왕자 뒷모습 */}
      <path d="M190,154 Q190,122 210,118 Q230,122 230,154 Z" fill={GREEN} />
      <circle cx="210" cy="100" r="14" fill={GOLD} />
      <circle cx="202" cy="88" r="6" fill={GOLD} />
      <circle cx="210" cy="84" r="7" fill={GOLD} />
      <circle cx="219" cy="88" r="6" fill={GOLD} />
      <circle cx="197" cy="95" r="5" fill={GOLD} />
      <circle cx="224" cy="95" r="5" fill={GOLD} />
      <rect x="198" y="115" width="24" height="7" rx="3.5" fill="#e0a93c" />
      <path
        d="M222,119 Q244,115 256,103 Q250,116 234,123 Q227,125 222,123 Z"
        fill="#e0a93c"
      />

      {/* 장미 */}
      <path d="M252,158 Q252,142 253,132" stroke={GREEN} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M252,148 Q243,144 240,138 Q249,140 252,144 Z" fill={GREEN} />
      <circle cx="253" cy="124" r="10" fill={ROSE} />
      <circle cx="253" cy="124" r="5.5" fill="#a83248" />
      <circle cx="250" cy="120" r="2" fill="#e77d90" />

      {/* 달 보트 */}
      <path d="M40,110 Q190,265 340,110 Q190,185 40,110 Z" fill={MOON} />
      <path
        d="M40,110 Q190,185 340,110 Q190,206 40,110 Z"
        fill="#f7e3a8"
        opacity="0.55"
      />
      <circle cx="130" cy="196" r="8" fill={MOON_DARK} opacity="0.8" />
      <circle cx="225" cy="200" r="6" fill={MOON_DARK} opacity="0.8" />
      <circle cx="180" cy="212" r="4" fill={MOON_DARK} opacity="0.7" />
      <circle cx="282" cy="172" r="5" fill={MOON_DARK} opacity="0.7" />
    </svg>
  );
}
