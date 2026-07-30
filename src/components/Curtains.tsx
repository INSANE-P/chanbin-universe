import { motion } from "motion/react";

// 인형극 무대 커튼. 시작할 때 열리고, 마지막 '끝' 슬라이드에서 닫혀요.
// 열려 있는 동안에도 양옆 자락과 상단 밸런스가 무대 프레임으로 남아요.

function Valance() {
  return (
    <svg
      className="valance"
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M0,0 L1200,0 L1200,52 Q1100,94 1000,52 Q900,94 800,52 Q700,94 600,52 Q500,94 400,52 Q300,94 200,52 Q100,94 0,52 Z"
        fill="#7d2431"
      />
      <path
        d="M0,52 Q100,94 200,52 Q300,94 400,52 Q500,94 600,52 Q700,94 800,52 Q900,94 1000,52 Q1100,94 1200,52"
        fill="none"
        stroke="#f2c14e"
        strokeWidth="6"
      />
      <path
        d="M60,0 V30 M180,0 V38 M300,0 V30 M420,0 V38 M540,0 V30 M660,0 V38 M780,0 V30 M900,0 V38 M1020,0 V30 M1140,0 V36"
        stroke="#5e1620"
        strokeWidth="14"
        opacity="0.35"
      />
    </svg>
  );
}

export default function Curtains({
  closed,
  fast,
}: {
  closed: boolean;
  fast?: boolean;
}) {
  const ease = [0.55, 0.05, 0.25, 1] as const;
  const duration = fast ? 0.6 : 1.9;
  const delay = closed ? (fast ? 0 : 0.4) : fast ? 0 : 0.7;
  return (
    <div className="curtain-layer" aria-hidden>
      <motion.div
        className="curtain-panel"
        initial={{ x: 0 }}
        animate={{ x: closed ? "0vw" : "-52vw" }}
        transition={{ duration, delay, ease }}
      />
      <motion.div
        className="curtain-panel right"
        initial={{ x: 0 }}
        animate={{ x: closed ? "0vw" : "52vw" }}
        transition={{ duration, delay, ease }}
      />
      <Valance />
    </div>
  );
}
