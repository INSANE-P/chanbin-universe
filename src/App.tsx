import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "motion/react";
import { slides } from "./slides";
import { planets } from "./planets";
import PaperSky from "./components/PaperSky";
import StageFloor from "./components/StageFloor";
import HangingStars from "./components/HangingStars";
import StageLamps from "./components/StageLamps";
import SlideView from "./components/SlideView";
import Curtains from "./components/Curtains";

// 해당 슬라이드 시점에 도착해 있는 행성 인덱스 (커버는 -1)
function planetIdxAt(i: number): number {
  let idx = -1;
  for (let s = 0; s <= i; s++) {
    const sl = slides[s];
    if ("planetId" in sl && sl.planetId) {
      idx = planets.findIndex((p) => p.id === sl.planetId);
    }
    if (sl.kind === "end") idx = planets.length - 1;
  }
  return idx;
}

export default function App() {
  const [index, setIndex] = useState(() => {
    const n = Number(window.location.hash.slice(1));
    return Number.isInteger(n) && n >= 0 && n < slides.length ? n : 0;
  });
  // 행성이 바뀔 때 커튼을 닫았다 여는 장면 전환
  const [cycling, setCycling] = useState(false);
  const indexRef = useRef(index);
  indexRef.current = index;
  const cyclingRef = useRef(false);

  useEffect(() => {
    const timers: number[] = [];
    const go = (dir: 1 | -1) => {
      if (cyclingRef.current) return;
      const cur = indexRef.current;
      const next = cur + dir;
      if (next < 0 || next >= slides.length) return;

      const planetChanges = planetIdxAt(cur) !== planetIdxAt(next);
      const finInvolved =
        slides[cur].kind === "fin" || slides[next].kind === "fin";

      if (planetChanges && !finInvolved) {
        cyclingRef.current = true;
        setCycling(true);
        timers.push(window.setTimeout(() => setIndex(next), 700));
        timers.push(
          window.setTimeout(() => {
            setCycling(false);
            cyclingRef.current = false;
          }, 950),
        );
      } else {
        setIndex(next);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", " ", "Enter", "PageDown"].includes(e.key)) {
        e.preventDefault();
        go(1);
      } else if (["ArrowLeft", "PageUp", "Backspace"].includes(e.key)) {
        e.preventDefault();
        go(-1);
      }
    };
    const onClick = () => go(1);
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  useEffect(() => {
    window.history.replaceState(null, "", `#${index}`);
  }, [index]);

  const fin = slides[index].kind === "fin";

  return (
    <>
      <PaperSky />
      <StageFloor />
      <HangingStars />
      <StageLamps />
      <div className="stage-light" aria-hidden />
      <AnimatePresence mode="wait">
        <SlideView key={index} slide={slides[index]} />
      </AnimatePresence>
      <div className="vignette" aria-hidden />
      <div className="grain" aria-hidden />
      {!fin && (
        <div className="page-num pen" aria-hidden>
          {index + 1} / {slides.length}
        </div>
      )}
      <Curtains closed={cycling || fin} fast={cycling} />
    </>
  );
}
