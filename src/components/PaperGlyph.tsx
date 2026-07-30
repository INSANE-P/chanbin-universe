// 종이 오려 붙인 소품들. 색은 어린왕자(2015) 팔레트를 따라요.

const INK = "#453a2c";
const CREAM = "#f2e6cb";
const CREAM_DARK = "#d8c49a";
const GOLD = "#f2c14e";
const TERRA = "#e07a5f";
const FOX = "#e8873c";

function Gamepad() {
  return (
    <g transform="rotate(-8 60 60)">
      <rect x="16" y="42" width="88" height="44" rx="22" fill="#6f63b0" />
      <rect x="33" y="58" width="18" height="7" rx="3.5" fill={CREAM} />
      <rect x="38.5" y="52.5" width="7" height="18" rx="3.5" fill={CREAM} />
      <circle cx="78" cy="56" r="5.5" fill={GOLD} />
      <circle cx="89" cy="67" r="5.5" fill={TERRA} />
    </g>
  );
}

function Mask() {
  return (
    <g transform="rotate(6 60 60)">
      <path
        d="M30,50 Q60,38 90,50 Q94,66 90,78 Q60,92 30,78 Q26,66 30,50 Z"
        fill={CREAM}
      />
      <path
        d="M38,56 H82 M36,64 H84 M38,72 H82"
        stroke={CREAM_DARK}
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M30,52 Q12,50 15,64 M90,52 Q108,50 105,64"
        stroke="#9fb0a6"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}

function Helmet() {
  return (
    <g>
      <path
        d="M28,66 Q28,32 60,30 Q92,32 92,66 L92,72 Q60,80 28,72 Z"
        fill="#93a35c"
      />
      <ellipse
        cx="46"
        cy="46"
        rx="11"
        ry="6"
        fill="#b5c47e"
        transform="rotate(-22 46 46)"
      />
      <path d="M22,68 Q60,80 98,68 L98,75 Q60,88 22,75 Z" fill="#667542" />
      <path
        d="M42,80 Q60,92 78,80"
        stroke={INK}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}

function Medal() {
  return (
    <g>
      <path d="M46,18 L60,44 L74,18 L86,18 L67,54 L53,54 L34,18 Z" fill={TERRA} />
      <circle cx="60" cy="74" r="25" fill={GOLD} />
      <circle cx="60" cy="74" r="18.5" fill="#e0a93c" />
      <path
        d="M60,62 L63.5,70 L72,70.7 L65.6,76.2 L67.7,84.6 L60,79.8 L52.3,84.6 L54.4,76.2 L48,70.7 L56.5,70 Z"
        fill={CREAM}
      />
    </g>
  );
}

function Fox() {
  return (
    <g>
      <path d="M32,26 L46,52 L24,52 Z" fill={FOX} />
      <path d="M88,26 L96,52 L74,52 Z" fill={FOX} />
      <path d="M24,50 L96,50 L84,78 L60,98 L36,78 Z" fill={FOX} />
      <path d="M44,74 L60,98 L76,74 L60,82 Z" fill={CREAM} />
      <path
        d="M24,50 L60,82 L96,50"
        stroke="#c96f2a"
        strokeWidth="2.5"
        fill="none"
      />
      <circle cx="46" cy="62" r="3.5" fill={INK} />
      <circle cx="74" cy="62" r="3.5" fill={INK} />
      <circle cx="60" cy="94" r="3.5" fill={INK} />
    </g>
  );
}

function Compass() {
  return (
    <g>
      <circle cx="60" cy="62" r="32" fill={CREAM} stroke={GOLD} strokeWidth="6" />
      <path d="M60,38 L67,62 L60,70 L53,62 Z" fill={TERRA} />
      <path d="M60,86 L53,62 L60,54 L67,62 Z" fill="#7d9fd0" />
      <circle cx="60" cy="62" r="4.5" fill={GOLD} />
    </g>
  );
}

function Plane() {
  return (
    <g>
      <path d="M12,66 L108,28 L64,90 Z" fill="#f7f0dd" />
      <path d="M12,66 L64,58 L64,90 Z" fill={CREAM_DARK} />
      <path d="M108,28 L64,58" stroke="#c9b98d" strokeWidth="2.5" fill="none" />
    </g>
  );
}

function Sparkle() {
  return (
    <g fill={GOLD}>
      <path d="M38,20 L43,33 L56,38 L43,43 L38,56 L33,43 L20,38 L33,33 Z" />
      <path d="M82,48 L86,58 L96,62 L86,66 L82,76 L78,66 L68,62 L78,58 Z" />
      <path d="M48,76 L51,84 L59,87 L51,90 L48,98 L45,90 L37,87 L45,84 Z" opacity="0.85" />
    </g>
  );
}

function YesBubble() {
  return (
    <g>
      <path
        d="M18,36 Q18,22 32,22 L88,22 Q102,22 102,36 L102,60 Q102,74 88,74 L54,74 L36,94 L42,74 L32,74 Q18,74 18,60 Z"
        fill={CREAM}
      />
      <text
        x="60"
        y="58"
        textAnchor="middle"
        fontFamily="'Nanum Pen Script', cursive"
        fontSize="36"
        fill={INK}
      >
        YES!
      </text>
    </g>
  );
}

function NoBubble() {
  return (
    <g>
      <path
        d="M18,36 Q18,22 32,22 L88,22 Q102,22 102,36 L102,60 Q102,74 88,74 L54,74 L36,94 L42,74 L32,74 Q18,74 18,60 Z"
        fill={CREAM}
      />
      <text
        x="60"
        y="58"
        textAnchor="middle"
        fontFamily="'Nanum Pen Script', cursive"
        fontSize="36"
        fill={TERRA}
      >
        NO...
      </text>
    </g>
  );
}

const GLYPHS: Record<string, () => React.ReactElement> = {
  gamepad: Gamepad,
  mask: Mask,
  helmet: Helmet,
  medal: Medal,
  fox: Fox,
  compass: Compass,
  plane: Plane,
  sparkle: Sparkle,
  yes: YesBubble,
  no: NoBubble,
};

export default function PaperGlyph({
  name,
  size,
}: {
  name: string;
  size: number;
}) {
  const G = GLYPHS[name];
  if (!G) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" aria-hidden>
      <G />
    </svg>
  );
}
