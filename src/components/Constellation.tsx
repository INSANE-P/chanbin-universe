import { motion } from "motion/react";

// 마무리 별자리.
// 왼쪽은 언제 만났는지(군대, 그리디 기수별), 오른쪽은 뭘 같이 했는지(프로젝트별)예요.
// 같은 사람이 양쪽에 나오기도 해요. 여러 번 같이 했다는 뜻이에요.

const CENTER = { x: 700, y: 450 };
const COL_W = 110;
const ROW_H = 38;

type Cluster = {
  label: string;
  hub: { x: number; y: number };
  origin: { x: number; y: number };
  cols: number;
  names: string[];
};

const CLUSTERS: Cluster[] = [
  // 왼쪽 - 언제 만났나
  {
    label: "군대",
    hub: { x: 420, y: 116 },
    origin: { x: 40, y: 46 },
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
    hub: { x: 420, y: 425 },
    origin: { x: 40, y: 330 },
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
    label: "그리디 3기",
    hub: { x: 332, y: 700 },
    origin: { x: 40, y: 646 },
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

  // 오른쪽 - 뭘 같이 했나
  {
    label: "그리디 4기",
    hub: { x: 1058, y: 132 },
    origin: { x: 1150, y: 46 },
    cols: 2,
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
    label: "줍줍",
    hub: { x: 1058, y: 378 },
    origin: { x: 1150, y: 340 },
    cols: 2,
    names: ["전서희", "황혜림", "강동현", "임규영", "이창희"],
  },
  {
    label: "경찰과 도둑",
    hub: { x: 1058, y: 558 },
    origin: { x: 1150, y: 520 },
    cols: 2,
    names: ["정상희", "이창희", "황혜림", "홍의민", "김다임", "윤지희"],
  },
  {
    label: "올클",
    hub: { x: 1058, y: 746 },
    origin: { x: 1150, y: 690 },
    cols: 2,
    names: [
      "김주환",
      "채현우",
      "김수민",
      "남해윤",
      "송혜정",
      "안금서",
      "이진",
      "하수한",
    ],
  },
  {
    label: "캡스톤",
    hub: { x: 450, y: 832 },
    origin: { x: 536, y: 814 },
    cols: 2,
    names: ["안금서", "신지우", "정재연", "지예람"],
  },
  {
    label: "홈페이지",
    hub: { x: 872, y: 832 },
    origin: { x: 958, y: 814 },
    cols: 2,
    names: ["신혜빈", "이진", "윤재홍"],
  },
];

// 격자가 딱딱해 보이지 않게 자리마다 조금씩 흔들어요.
function jitter(seed: number, amp: number) {
  return Math.sin(seed * 12.9898) * amp;
}

function pos(c: Cluster, i: number, ci: number) {
  const seed = ci * 31 + i * 7 + 1;
  return {
    x: c.origin.x + (i % c.cols) * COL_W + jitter(seed, 7),
    y: c.origin.y + Math.floor(i / c.cols) * ROW_H + jitter(seed + 3, 6),
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
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
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
    <svg className="constellation" viewBox="0 0 1400 910" aria-hidden>
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
        const hubDelay = 0.45 + ci * 0.16;
        const nameStart = hubDelay + 0.4;
        return (
          <g key={`ray-${c.label}`}>
            <Ray
              d={curve(CENTER.x, CENTER.y, c.hub.x, c.hub.y, ci % 2 ? 24 : -24)}
              delay={hubDelay}
              width={1.8}
              opacity={0.5}
            />
            {c.names.map((n, i) => {
              const p = pos(c, i, ci);
              return (
                <Ray
                  key={`${n}-${i}`}
                  d={curve(
                    c.hub.x,
                    c.hub.y,
                    p.x,
                    p.y,
                    (i % 2 ? 1 : -1) * (9 + (i % 3) * 5),
                  )}
                  delay={nameStart + i * 0.03}
                  width={1}
                  opacity={0.26}
                />
              );
            })}
          </g>
        );
      })}

      {CLUSTERS.map((c, ci) => {
        const hubDelay = 0.45 + ci * 0.16;
        const nameStart = hubDelay + 0.45;
        return (
          <g key={`star-${c.label}`}>
            <Twinkle
              x={c.hub.x}
              y={c.hub.y}
              r={10}
              halo={34}
              delay={hubDelay + 0.12}
            />
            <motion.text
              x={c.hub.x}
              y={c.hub.y + 38}
              textAnchor="middle"
              fontFamily="'Gowun Batang', serif"
              fontWeight="700"
              fontSize="24"
              letterSpacing="2"
              fill="#f7d98c"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: hubDelay + 0.25 }}
            >
              {c.label}
            </motion.text>

            {c.names.map((n, i) => {
              const p = pos(c, i, ci);
              const delay = nameStart + i * 0.03;
              return (
                <g key={`${n}-${i}`}>
                  <Twinkle x={p.x} y={p.y} r={5} halo={15} delay={delay} />
                  <motion.text
                    x={p.x + 14}
                    y={p.y + 6}
                    fontFamily="'Nanum Pen Script', cursive"
                    fontSize="19"
                    fill="#efe6d2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.92 }}
                    transition={{ duration: 0.5, delay: delay + 0.08 }}
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
        transition={{ type: "spring", stiffness: 200, damping: 17, delay: 0.2 }}
        style={{ transformOrigin: `${CENTER.x}px ${CENTER.y}px` }}
      >
        <circle cx={CENTER.x} cy={CENTER.y} r="62" fill="url(#coreHalo)" />
        <path
          d={`M${CENTER.x},${CENTER.y - 23} L${CENTER.x + 7},${CENTER.y - 7} L${CENTER.x + 23},${CENTER.y} L${CENTER.x + 7},${CENTER.y + 7} L${CENTER.x},${CENTER.y + 23} L${CENTER.x - 7},${CENTER.y + 7} L${CENTER.x - 23},${CENTER.y} L${CENTER.x - 7},${CENTER.y - 7} Z`}
          fill="#fff6da"
        />
        <text
          x={CENTER.x}
          y={CENTER.y + 50}
          textAnchor="middle"
          fontFamily="'Gowun Batang', serif"
          fontWeight="700"
          fontSize="24"
          fill="#fff6da"
        >
          나
        </text>
      </motion.g>
    </svg>
  );
}
