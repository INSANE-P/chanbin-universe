import { motion } from "motion/react";
import type { ReactNode } from "react";

// 무대 소품 공용 래퍼. 실에 매달려 천장에서 내려오고(스프링 낙하),
// 자리를 잡은 뒤에는 시계추처럼 아주 천천히 흔들려요.
// attach는 실이 물체 안쪽으로 파고드는 깊이(px)예요. 실은 물체 뒤로 지나가요.
export default function HangingProp({
  children,
  spread = 60,
  threads = 2,
  delay = 0.4,
  swayDur = 5.5,
  attach = 8,
}: {
  children: ReactNode;
  spread?: number;
  threads?: 1 | 2;
  delay?: number;
  swayDur?: number;
  attach?: number;
}) {
  const threadStyle = (offset: number) => ({
    left: `calc(50% + ${offset}px)`,
    bottom: `calc(100% - ${attach}px)`,
  });
  return (
    <motion.div
      initial={{ y: -560, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        y: { type: "spring", stiffness: 55, damping: 11, delay },
        opacity: { duration: 0.25, delay },
      }}
    >
      <div className="prop-sway" style={{ animationDuration: `${swayDur}s` }}>
        <div className="prop-inner">
          {threads === 2 ? (
            <>
              <span className="prop-thread" style={threadStyle(-spread / 2)} />
              <span className="prop-thread" style={threadStyle(spread / 2)} />
            </>
          ) : (
            <span className="prop-thread" style={threadStyle(0)} />
          )}
          <div className="prop-child">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}
