import { Fragment } from "react";
import { motion } from "motion/react";
import type { Slide } from "../slides";
import { planetById, planets } from "../planets";
import ClayPlanet from "./ClayPlanet";
import PaperGlyph from "./PaperGlyph";
import ClayFace from "./ClayFace";
import MoonScene from "./MoonScene";
import HangingProp from "./HangingProp";
import BowFigure from "./BowFigure";
import NameSky from "./NameSky";
import Constellation from "./Constellation";
import Photo from "./Photo";

const ORDINALS = ["첫", "두", "세", "네", "다섯", "여섯"];

// 커튼콜 무대에 흩뿌려진 장미와 꽃잎 (x: 중앙 기준 px, y: 바닥에서 px)
const ROSES = [
  { x: -190, y: -6, rot: -24, s: 1, petal: false },
  { x: -128, y: 14, rot: 40, s: 0.85, petal: true },
  { x: -96, y: -12, rot: 12, s: 0.9, petal: false },
  { x: -34, y: 16, rot: -60, s: 0.8, petal: true },
  { x: 52, y: -14, rot: 70, s: 1, petal: false },
  { x: 96, y: 12, rot: -30, s: 0.85, petal: true },
  { x: 152, y: -4, rot: 24, s: 0.95, petal: false },
  { x: 196, y: 10, rot: -12, s: 0.75, petal: true },
];

function RoseMini() {
  return (
    <svg width="26" height="24" viewBox="0 0 26 24" aria-hidden>
      <path
        d="M6,20 Q12,16 18,12"
        stroke="#5d8a4a"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M11,17 Q9,12 12,10 Q13,15 11,17 Z" fill="#5d8a4a" />
      <circle cx="20" cy="9" r="6.5" fill="#d1495b" />
      <circle cx="20" cy="9" r="3.5" fill="#a83248" />
    </svg>
  );
}

function PetalMini() {
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" aria-hidden>
      <ellipse cx="6" cy="5" rx="5" ry="3.5" fill="#d1495b" opacity="0.85" />
    </svg>
  );
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: "easeOut" as const },
});

// 인용문에서 NO와 YES만 색으로 갈라 보여줘요.
function withTone(line: string) {
  return line.split(/(NO|YES)/).map((seg, i) => {
    if (seg === "NO") {
      return (
        <em key={i} className="tone-no">
          NO
        </em>
      );
    }
    if (seg === "YES") {
      return (
        <em key={i} className="tone-yes">
          YES
        </em>
      );
    }
    return <span key={i}>{seg}</span>;
  });
}

function Header({ planetId }: { planetId: string }) {
  const p = planetById(planetId);
  return (
    <motion.header className="slide-header" {...fadeUp(0.35)}>
      <ClayPlanet planet={p} size={26} />
      <span className="pen">{p.name}</span>
    </motion.header>
  );
}

function Content({ slide }: { slide: Slide }) {
  switch (slide.kind) {
    case "cover":
      return (
        <div className="scene-center">
          {slide.struck && (
            <motion.div
              className="struck-wrap"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 0.62, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <span className="struck-title">{slide.struck}</span>
              <svg
                className="strike"
                viewBox="0 0 100 14"
                preserveAspectRatio="none"
                aria-hidden
              >
                <motion.path
                  d="M1,9 Q26,4 50,8 T99,6"
                  fill="none"
                  stroke="#d1495b"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.45, delay: 1.05, ease: "easeIn" }}
                />
              </svg>
            </motion.div>
          )}
          <motion.div className="title-spot" {...fadeUp(1.75)}>
            <h1 className="cover-title">{slide.title}</h1>
          </motion.div>
          <motion.p className="cover-sub pen" {...fadeUp(2.4)}>
            {slide.subtitle}
          </motion.p>
          <div className="moon-scene">
            <HangingProp spread={340} attach={138} delay={2.6} swayDur={7}>
              <MoonScene width={430} />
            </HangingProp>
          </div>
          <motion.div
            className="cover-plane"
            initial={{ x: -280, y: 70, rotate: -8, opacity: 0 }}
            animate={{ x: 260, y: -50, rotate: 6, opacity: [0, 1, 1, 1] }}
            transition={{ duration: 5, delay: 3.2, ease: "easeInOut" }}
          >
            <PaperGlyph name="plane" size={54} />
          </motion.div>
        </div>
      );

    case "planet": {
      const p = planetById(slide.planetId);
      const ord = ORDINALS[planets.findIndex((x) => x.id === p.id)];
      return (
        <>
        <motion.div
          className="beam"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.9 }}
        />
        <div className="scene-center">
          {/* 무대 리깅에서 실에 매달려 내려오는 행성 */}
          <div className="planet-hero">
            <HangingProp spread={120} attach={44} delay={0.5} swayDur={6.2}>
              <ClayPlanet planet={p} size={280} />
            </HangingProp>
          </div>
          <motion.p className="slide-kicker pen" {...fadeUp(1.7)}>
            {ord} 번째 행성
          </motion.p>
          <motion.h2 className="planet-title" {...fadeUp(1.85)}>
            {slide.title}
          </motion.h2>
          {slide.caption && (
            <motion.p className="slide-caption pen" {...fadeUp(2.2)}>
              {slide.caption}
            </motion.p>
          )}
        </div>
        </>
      );
    }

    case "content": {
      const p = planetById(slide.planetId);
      return (
        <div className="slide-frame">
          <div className="slide-grid">
            <div>
              <motion.div className="slide-header" {...fadeUp(0.35)}>
                <ClayPlanet planet={p} size={26} />
                <span className="pen">{p.name}</span>
              </motion.div>
              <motion.h2 className="slide-title" {...fadeUp(0.55)}>
                {slide.title}
              </motion.h2>
              <ul className="slide-bullets">
                {slide.bullets.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.95 + i * 0.35, ease: "easeOut" }}
                  >
                    {b}
                  </motion.li>
                ))}
              </ul>
            </div>
            {slide.photo && (
              <div className="slide-photo">
                <Photo photo={slide.photo} width={280} />
              </div>
            )}
            {!slide.photo && slide.glyph && (
              <div className="slide-glyph">
                <HangingProp spread={46} attach={58} delay={1} swayDur={5.2}>
                  <PaperGlyph name={slide.glyph} size={150} />
                </HangingProp>
              </div>
            )}
          </div>
        </div>
      );
    }

    case "stat":
      return (
        <div className="slide-frame frame-center">
          <Header planetId={slide.planetId} />
          {slide.kicker && (
            <motion.p className="stat-kicker pen" {...fadeUp(0.5)}>
              {slide.kicker}
            </motion.p>
          )}
          <motion.h2
            className="stat-big"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
          >
            {slide.big}
          </motion.h2>
          <div className="stat-lines">
            {slide.lines.map((l, i) => (
              <motion.p key={i} {...fadeUp(1.3 + i * 0.4)}>
                {l}
              </motion.p>
            ))}
          </div>
        </div>
      );

    case "tiles":
      return (
        <div className="slide-frame frame-center">
          <Header planetId={slide.planetId} />
          <motion.h2 className="slide-title" {...fadeUp(0.5)}>
            {slide.title}
          </motion.h2>
          <div className="tiles-row">
            {slide.tiles.map((t, i) => (
              <HangingProp
                key={i}
                threads={1}
                attach={10}
                delay={0.9 + i * 0.25}
                swayDur={5 + i * 0.8}
              >
                <div
                  className="paper-card tile"
                  style={{ transform: `rotate(${i % 2 ? 1.6 : -1.6}deg)` }}
                >
                  <span className="tile-big">{t.big}</span>
                  <span className="tile-small pen">{t.small}</span>
                </div>
              </HangingProp>
            ))}
          </div>
          {slide.notes?.map((n, i) => (
            <motion.p className="board-note" key={i} {...fadeUp(2 + i * 0.35)}>
              {n}
            </motion.p>
          ))}
        </div>
      );

    case "person":
      return (
        <div className="scene-center">
          <motion.div
            className="person-halo"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          >
            <ClayFace color={slide.color} size={120} />
          </motion.div>
          <motion.h2 className="person-feature-name" {...fadeUp(1)}>
            {slide.name}
          </motion.h2>
          <motion.p className="person-tag pen" {...fadeUp(1.2)}>
            {slide.tag}
          </motion.p>
          <div className="person-traits">
            {slide.traits.map((t, i) => (
              <motion.p key={i} {...fadeUp(1.6 + i * 0.45)}>
                {t}
              </motion.p>
            ))}
          </div>
        </div>
      );

    case "yeslist":
      return (
        <div className="slide-frame">
          <Header planetId={slide.planetId} />
          <motion.h2 className="slide-title" {...fadeUp(0.5)}>
            {slide.title}
          </motion.h2>
          <div className={slide.mode === "ask" ? "yes-rows ask" : "yes-rows"}>
            {slide.items.map((item, i) => (
              <div className="yes-row" key={i}>
                <motion.div
                  className="paper-card yes-strip"
                  initial={{ opacity: 0, x: slide.mode === "ask" ? 26 : -26 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: 0.9 + i * 0.5, ease: "easeOut" }}
                >
                  {item}
                </motion.div>
                {slide.mode === "ask" ? (
                  <motion.span
                    className="ask-mark"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 16,
                      delay: 1.2 + i * 0.5,
                    }}
                  >
                    <svg width="42" height="34" viewBox="0 0 42 34" aria-hidden>
                      <path
                        d="M6,2 H36 Q40,2 40,6 V20 Q40,24 36,24 H16 L6,33 L9,24 H6 Q2,24 2,20 V6 Q2,2 6,2 Z"
                        fill="#f2c14e"
                      />
                    </svg>
                    <span className="pen">저</span>
                  </motion.span>
                ) : (
                  <motion.span
                    className="yes-stamp pen"
                    initial={{ opacity: 0, scale: 2.4, rotate: -32 }}
                    animate={{ opacity: 1, scale: 1, rotate: -12 }}
                    transition={{
                      duration: 0.28,
                      delay: 1.3 + i * 0.5,
                      ease: "easeIn",
                    }}
                  >
                    YES!
                  </motion.span>
                )}
              </div>
            ))}
          </div>
        </div>
      );

    case "steps":
      return (
        <div className="slide-frame frame-center">
          <Header planetId={slide.planetId} />
          <motion.h2 className="slide-title" {...fadeUp(0.5)}>
            {slide.title}
          </motion.h2>
          <div className="steps-row">
            {slide.steps.map((s, i) => (
              <Fragment key={s.name}>
                <motion.div
                  className="paper-card step-card"
                  initial={{ opacity: 0, y: 26 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + i * 0.45, ease: "easeOut" }}
                >
                  <span className="step-name">{s.name}</span>
                  <span className="step-desc pen">{s.desc}</span>
                </motion.div>
                {i < slide.steps.length - 1 && (
                  <motion.span className="step-arrow" {...fadeUp(1.15 + i * 0.45)}>
                    →
                  </motion.span>
                )}
              </Fragment>
            ))}
          </div>
          {slide.note && (
            <motion.p className="board-note" {...fadeUp(2.5)}>
              {slide.note}
            </motion.p>
          )}
        </div>
      );

    case "web":
      return (
        <div className="slide-frame frame-center">
          <motion.h2 className="slide-title web-heading" {...fadeUp(0.3)}>
            {slide.title}
          </motion.h2>
          <div className="web-wrap">
            <Constellation />
          </div>
        </div>
      );

    case "sky":
      return (
        <div className="slide-frame">
          <Header planetId={slide.planetId} />
          <motion.h2 className="slide-title sky-heading" {...fadeUp(0.35)}>
            {slide.title}
          </motion.h2>
          {slide.photos?.length ? (
            <div className="sky-with-photos">
              <NameSky groups={slide.groups} />
              <div className="sky-photos">
                {slide.photos.map((p, i) => (
                  <Photo key={p.src} photo={p} index={i} width={196} />
                ))}
              </div>
            </div>
          ) : (
            <NameSky groups={slide.groups} />
          )}
        </div>
      );

    case "quote":
      return (
        <div className="scene-center">
          <div className="quote-wrap">
            <HangingProp spread={300} delay={0.5} swayDur={7.5}>
              <div className="paper-card quote-card">
                <p className="quote-text">
                  {slide.text.split("\n").map((line, li, arr) => (
                    <span key={li}>
                      {withTone(line)}
                      {li < arr.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                {slide.tail && <p className="quote-tail">{slide.tail}</p>}
              </div>
            </HangingProp>
          </div>
          <motion.p className="quote-who pen" {...fadeUp(1.8)}>
            {slide.who}
          </motion.p>
        </div>
      );

    case "fin":
      return <div />;

    case "end":
      return (
        <>
          <motion.div
            className="lights-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.3 }}
          />
          <motion.div
            className="spot-cone"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.1 }}
          />
          <motion.h2 className="thanks-line thanks-top" {...fadeUp(3)}>
            {slide.line}
          </motion.h2>
          <div className="bow-stage">
            <motion.div
              className="spot-pool"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 1.2 }}
            />
            {ROSES.map((r, i) => (
              <motion.span
                key={i}
                className="rose-item"
                style={{
                  left: `calc(50% + ${r.x}px)`,
                  bottom: r.y,
                  transform: `rotate(${r.rot}deg) scale(${r.s})`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 2.2 + i * 0.12 }}
              >
                {r.petal ? <PetalMini /> : <RoseMini />}
              </motion.span>
            ))}
            <motion.div
              className="bow-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.7, ease: "easeOut" }}
            >
              <BowFigure height={185} />
            </motion.div>
          </div>
        </>
      );

    case "propose":
      return (
        <div className="scene-center">
          <motion.div
            className="paper-card propose-bubble"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 150, damping: 13, delay: 0.5 }}
          >
            <p className="propose-text">{slide.text}</p>
          </motion.div>
          {slide.sub && (
            <motion.p className="propose-sub pen" {...fadeUp(1.5)}>
              {slide.sub}
            </motion.p>
          )}
        </div>
      );

    case "statement": {
      // 지워지는 말이 있으면 그게 먼저 뜨고 그어진 뒤에 본문이 나와요.
      const lineDelay = slide.struck ? 1.9 : 0.8;
      return (
        <div className="scene-center">
          {slide.struck && (
            <motion.div
              className="struck-wrap struck-big"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <span className="struck-title">{slide.struck}</span>
              <svg
                className="strike"
                viewBox="0 0 100 14"
                preserveAspectRatio="none"
                aria-hidden
              >
                <motion.path
                  d="M1,9 Q26,4 50,8 T99,6"
                  fill="none"
                  stroke="#d1495b"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.45, delay: 1.1, ease: "easeIn" }}
                />
              </svg>
            </motion.div>
          )}
          {slide.glyph && (
            <div className="mark-glyph">
              <HangingProp
                threads={1}
                attach={34}
                delay={0.4}
                swayDur={5.8}
              >
                <PaperGlyph name={slide.glyph} size={104} />
              </HangingProp>
            </div>
          )}
          <motion.h2 className="statement-line" {...fadeUp(lineDelay)}>
            {slide.line.split("\n").map((l, i, arr) => (
              <span key={i}>
                {l}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </motion.h2>
          {slide.sub && (
            <motion.p className="slide-caption pen" {...fadeUp(lineDelay + 0.9)}>
              {slide.sub}
            </motion.p>
          )}
        </div>
      );
    }
  }
}

export default function SlideView({ slide }: { slide: Slide }) {
  return (
    <motion.div
      className="scene"
      initial={{ opacity: 0, y: 46, rotate: 0.8 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      exit={{
        opacity: 0,
        y: -34,
        rotate: -1.2,
        transition: { duration: 0.28, ease: "easeIn" },
      }}
      transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
    >
      <Content slide={slide} />
    </motion.div>
  );
}
