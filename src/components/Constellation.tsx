import { motion } from "motion/react";

// 마무리 별자리. 밤하늘에 그려 넣은 성좌처럼, 가운데 별에서 무리로 빛줄기가 뻗고
// 무리마다 사람들이 별로 이어져요. 이름은 중복 없이 한 번씩만 나와요.

const CENTER = { x: 540, y: 332 };
const COL_W = 112;
const ROW_H = 39;

type Cluster = {
  label: string;
  hub: { x: number; y: number };
  origin: { x: number; y: number };
  cols: number;
  names: string[];
};

const CLUSTERS: Cluster[] = [
  {
    label: "군대",
    hub: { x: 424, y: 116 },
    origin: { x: 44, y: 48 },
    cols: 3,
    names: [
      "정지훈",
      "권성우",
      "이용재",
      "천정우",
      "이상곤",
      "조은혜",
      "서동하",
      "고혁빈",
      "정현진",
      "구홍진",
      "엄연재",
      "박태준",
      "서지문",
      "김동현",
    ],
  },
  {
    label: "그리디 2기",
    hub: { x: 424, y: 492 },
    origin: { x: 44, y: 392 },
    cols: 3,
    names: [
      "이승용",
      "김수민",
      "원태연",
      "김주환",
      "김범수",
      "송혜정",
      "김의천",
      "정창우",
      "임규영",
      "신지훈",
      "신지우",
      "강동현",
      "황혜림",
      "이창희",
      "허석준",
      "전서희",
      "김지우",
      "염지환",
    ],
  },
  {
    label: "그리디 4기",
    hub: { x: 656, y: 122 },
    origin: { x: 762, y: 66 },
    cols: 3,
    names: [
      "김민기",
      "이진",
      "홍의민",
      "김동건",
      "고규민",
      "천동현",
      "김민욱",
      "강대현",
      "정명준",
      "이채현",
      "김하은",
      "이태규",
    ],
  },
  {
    label: "그리디 3기",
    hub: { x: 656, y: 458 },
    origin: { x: 762, y: 402 },
    cols: 2,
    names: [
      "신혜빈",
      "정상희",
      "남해윤",
      "안금서",
      "심혁",
      "윤재홍",
      "강건",
      "강예령",
    ],
  },
  {
    label: "프로젝트",
    hub: { x: 448, y: 608 },
    origin: { x: 556, y: 612 },
    cols: 4,
    names: ["채현우", "김다임", "윤지희", "하수한"],
  },
];

// 격자가 딱딱해 보이지 않게 자리마다 조금씩 흔들어요.
function jitter(seed: number, amp: number) {
  return Math.sin(seed * 12.9898) * amp;
}

function pos(c: Cluster, i: number, ci: number) {
  const seed = ci * 31 + i * 7 + 1;
  return {
    x: c.origin.x + (i % c.cols) * COL_W + jitter(seed, 9),
    y: c.origin.y + Math.floor(i / c.cols) * ROW_H + jitter(seed + 3, 7),
  };
}

// 살짝 휘어진 빛줄기
function curve(x1: number, y1: number, x2: number, y2: number, bow: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const cx = mx + (-dy / len) * bow;
  const cy = my + (dx / len) * bow;
  return `M${x1.toFixed(1)},${y1.toFixed(1)} Q${cx.toFixed(1)},${cy.toFixed(1)} ${x2.toFixed(1)},${y2.toFixed(1)}`;
}

function Ray({
  d,
  delay,
  width,
  opacity,
}: {
  d: string;
  delay: number;
  width: number;
  opacity: number;
}) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke="#f2c14e"
      strokeWidth={width}
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    />
  );
}

function Twinkle({
  x,
  y,
  r,
  delay,
  halo,
}: {
  x: number;
  y: number;
  r: number;
  delay: number;
  halo: number;
}) {
  const k = r * 0.3;
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 240, damping: 18, delay }}
      style={{ transformOrigin: `${x}px ${y}px` }}
    >
      <circle cx={x} cy={y} r={halo} fill="url(#halo)" />
      <path
        d={`M${x},${y - r} L${x + k},${y - k} L${x + r},${y} L${x + k},${y + k} L${x},${y + r} L${x - k},${y + k} L${x - r},${y} L${x - k},${y - k} Z`}
        fill="#fff6da"
      />
    </motion.g>
  );
}

export default function Constellation() {
  return (
    <svg className="constellation" viewBox="0 0 1080 680" aria-hidden>
      <defs>
        <radialGradient id="halo">
          <stop offset="0" stopColor="#f7d98c" stopOpacity="0.5" />
          <stop offset="0.55" stopColor="#f2c14e" stopOpacity="0.14" />
          <stop offset="1" stopColor="#f2c14e" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="coreHalo">
          <stop offset="0" stopColor="#fff6da" stopOpacity="0.85" />
          <stop offset="0.4" stopColor="#f7d98c" stopOpacity="0.3" />
          <stop offset="1" stopColor="#f2c14e" stopOpacity="0" />
        </radialGradient>
      </defs>

      {CLUSTERS.map((c, ci) => {
        const hubDelay = 0.5 + ci * 0.2;
        const nameStart = hubDelay + 0.5;
        return (
          <g key={`ray-${c.label}`}>
            <Ray
              d={curve(CENTER.x, CENTER.y, c.hub.x, c.hub.y, ci % 2 ? 26 : -26)}
              delay={hubDelay}
              width={1.8}
              opacity={0.5}
            />
            {c.names.map((n, i) => {
              const p = pos(c, i, ci);
              return (
                <Ray
                  key={n}
                  d={curve(
                    c.hub.x,
                    c.hub.y,
                    p.x,
                    p.y,
                    (i % 2 ? 1 : -1) * (10 + (i % 3) * 6),
                  )}
                  delay={nameStart + i * 0.04}
                  width={1}
                  opacity={0.28}
                />
              );
            })}
          </g>
        );
      })}

      {CLUSTERS.map((c, ci) => {
        const hubDelay = 0.5 + ci * 0.2;
        const nameStart = hubDelay + 0.55;
        return (
          <g key={`star-${c.label}`}>
            <Twinkle
              x={c.hub.x}
              y={c.hub.y}
              r={9}
              halo={30}
              delay={hubDelay + 0.15}
            />
            <motion.text
              x={c.hub.x}
              y={c.hub.y + 34}
              textAnchor="middle"
              fontFamily="'Gowun Batang', serif"
              fontWeight="700"
              fontSize="21"
              letterSpacing="2"
              fill="#f7d98c"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: hubDelay + 0.3 }}
            >
              {c.label}
            </motion.text>

            {c.names.map((n, i) => {
              const p = pos(c, i, ci);
              const delay = nameStart + i * 0.04;
              return (
                <g key={n}>
                  <Twinkle x={p.x} y={p.y} r={5.5} halo={17} delay={delay} />
                  <motion.text
                    x={p.x + 15}
                    y={p.y + 6}
                    fontFamily="'Nanum Pen Script', cursive"
                    fontSize="21"
                    fill="#efe6d2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.92 }}
                    transition={{ duration: 0.6, delay: delay + 0.1 }}
                  >
                    {n}
                  </motion.text>
                </g>
              );
            })}
          </g>
        );
      })}

      <motion.g
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 17, delay: 0.25 }}
        style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }}
      >
        <circle cx={CENTER.x} cy={CENTER.y} r="60" fill="url(#coreHalo)" />
        <path
          d={`M${CENTER.x},${CENTER.y - 22} L${CENTER.x + 6.6},${CENTER.y - 6.6} L${CENTER.x + 22},${CENTER.y} L${CENTER.x + 6.6},${CENTER.y + 6.6} L${CENTER.x},${CENTER.y + 22} L${CENTER.x - 6.6},${CENTER.y + 6.6} L${CENTER.x - 22},${CENTER.y} L${CENTER.x - 6.6},${CENTER.y - 6.6} Z`}
          fill="#fff6da"
        />
        <text
          x={CENTER.x}
          y={CENTER.y + 48}
          textAnchor="middle"
          fontFamily="'Gowun Batang', serif"
          fontWeight="700"
          fontSize="23"
          fill="#fff6da"
        >
          나
        </text>
      </motion.g>
    </svg>
  );
}
