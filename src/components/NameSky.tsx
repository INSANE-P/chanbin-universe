import { motion } from "motion/react";

// 만난 사람들이 밤하늘에 별처럼 하나씩 켜져요.
// 그룹(역할)마다 한 줄씩, 이름이 순서대로 점등돼요.

export type SkyGroup = { label: string; names: string[] };

function TinyStar() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" aria-hidden>
      <path
        d="M12 0 L15 9 L24 12 L15 15 L12 24 L9 15 L0 12 L9 9 Z"
        fill="#f2c14e"
      />
    </svg>
  );
}

export default function NameSky({ groups }: { groups: SkyGroup[] }) {
  let order = 0;
  return (
    <div className="name-sky">
      {groups.map((g) => (
        <div className="sky-row" key={g.label}>
          <motion.span
            className="sky-label pen"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + order * 0.055 }}
          >
            {g.label}
          </motion.span>
          <div className="sky-names">
            {g.names.map((n) => {
              const delay = 0.7 + order++ * 0.055;
              return (
                <motion.span
                  className="sky-name"
                  key={n}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                    delay,
                  }}
                >
                  <TinyStar />
                  {n}
                </motion.span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
