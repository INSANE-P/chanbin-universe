import { useId } from "react";
import type { Planet } from "../planets";

// 손으로 빚은 클레이 행성. 행성마다 테마 장식을 입고 있어요.
// 군대 행성은 방탄모를 쓰고, 코로나 행성은 마스크를 쓰고,
// 게임 행성은 고리와 패드 버튼 크레이터, 그리디 행성은 동아리 로고,
// 지금 행성은 나침반 문양과 깃발이에요.

const CREAM = "#f2e6cb";
const CREAM_DARK = "#d8c49a";
const GOLD = "#f2c14e";
const TERRA = "#e07a5f";

const BLOB_D =
  "M110,22 C146,20 178,44 188,76 C198,108 190,146 164,168 C138,190 96,196 66,178 C36,160 20,128 26,94 C32,60 58,32 92,24 C98,22.5 104,22 110,22 Z";

function Blob({ planet, volcano }: { planet: Planet; volcano?: boolean }) {
  const { light, base, dark } = planet;
  return (
    <>
      {volcano && (
        <>
          <path d="M76,30 L90,8 L104,28 Z" fill={dark} />
          <ellipse cx="90" cy="10" rx="7" ry="3.5" fill={light} />
          <path d="M138,34 L148,18 L158,32 Z" fill={dark} />
          <ellipse cx="148" cy="19" rx="5" ry="2.5" fill={light} />
        </>
      )}
      <path d={BLOB_D} fill={base} />
      <ellipse
        cx="76"
        cy="66"
        rx="34"
        ry="22"
        fill={light}
        opacity="0.5"
        transform="rotate(-24 76 66)"
      />
      <path
        d="M186,84 C194,116 186,148 162,166 C136,186 100,192 72,178 C110,190 148,178 168,152 C184,130 188,108 186,84 Z"
        fill={dark}
        opacity="0.4"
      />
    </>
  );
}

function Speckles({ dark }: { dark: string }) {
  return (
    <>
      <circle cx="132" cy="70" r="9" fill={dark} opacity="0.3" />
      <circle cx="98" cy="120" r="12" fill={dark} opacity="0.25" />
      <circle cx="152" cy="124" r="6" fill={dark} opacity="0.3" />
      <circle cx="62" cy="118" r="7" fill={dark} opacity="0.25" />
      <circle cx="118" cy="158" r="8" fill={dark} opacity="0.22" />
      <circle cx="80" cy="152" r="4" fill={dark} opacity="0.3" />
    </>
  );
}

function Decoration({ planet, clipId }: { planet: Planet; clipId: string }) {
  switch (planet.id) {
    case "game":
      return (
        <>
          <path
            d="M8,108 A102,26 0 0 0 212,108"
            fill="none"
            stroke={GOLD}
            strokeWidth="8"
            opacity="0.9"
          />
          <g transform="translate(58 92) rotate(-10)">
            <rect x="-14" y="-4" width="28" height="9" rx="4.5" fill={CREAM} opacity="0.9" />
            <rect x="-4.5" y="-13.5" width="9" height="28" rx="4.5" fill={CREAM} opacity="0.9" />
          </g>
          <circle cx="146" cy="76" r="11" fill={GOLD} opacity="0.95" />
          <circle cx="164" cy="102" r="11" fill={TERRA} opacity="0.95" />
        </>
      );

    case "corona":
      return (
        <>
          <path
            d="M56,92 Q110,78 164,92 Q172,120 164,142 Q110,158 56,142 Q48,120 56,92 Z"
            fill={CREAM}
          />
          <path
            d="M72,104 H148 M68,118 H152 M72,132 H148"
            stroke={CREAM_DARK}
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M56,98 Q30,92 26,112 M164,98 Q190,92 194,112"
            stroke={CREAM_DARK}
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
        </>
      );

    case "army":
      return (
        <>
          <clipPath id={clipId}>
            <path d={BLOB_D} />
          </clipPath>
          <g clipPath={`url(#${clipId})`}>
            <path
              d="M48,66 Q66,44 92,54 Q106,66 92,82 Q62,94 48,66 Z"
              fill="#5d6b34"
            />
            <path
              d="M128,74 Q156,62 172,82 Q178,102 156,108 Q128,104 128,74 Z"
              fill="#7a6a45"
            />
            <path
              d="M70,116 Q94,104 112,120 Q120,140 100,150 Q70,148 70,116 Z"
              fill="#b5c47e"
            />
            <path
              d="M132,132 Q158,124 170,140 Q172,158 150,164 Q130,158 132,132 Z"
              fill="#5d6b34"
            />
            <path
              d="M44,132 Q58,124 66,138 Q66,154 50,156 Q40,146 44,132 Z"
              fill="#7a6a45"
            />
            <path
              d="M96,168 Q116,160 132,172 Q128,186 108,186 Q96,180 96,168 Z"
              fill="#b5c47e"
              opacity="0.85"
            />
          </g>
          <path
            d="M34,80 Q38,12 110,8 Q182,12 186,80 L186,92 Q110,66 34,92 Z"
            fill="#7e8c4b"
          />
          <ellipse
            cx="72"
            cy="38"
            rx="20"
            ry="10"
            fill="#a8b86b"
            transform="rotate(-24 72 38)"
          />
          <path
            d="M24,88 Q110,60 196,88 L196,104 Q110,78 24,104 Z"
            fill="#57633a"
          />
          <path
            d="M96,22 H124 M110,22 V36"
            stroke="#57633a"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.6"
          />
        </>
      );

    case "greedy":
      return planet.sticker ? (
        <>
          <clipPath id={clipId}>
            <circle cx="110" cy="106" r="56" />
          </clipPath>
          <circle cx="110" cy="106" r="60" fill={CREAM} />
          <image
            href={planet.sticker}
            x="54"
            y="50"
            width="112"
            height="112"
            clipPath={`url(#${clipId})`}
          />
        </>
      ) : null;

    case "now":
      return (
        <>
          <circle cx="110" cy="112" r="34" fill={CREAM} opacity="0.9" />
          <path d="M110,86 L118,112 L110,120 L102,112 Z" fill={TERRA} />
          <path d="M110,138 L102,112 L110,104 L118,112 Z" fill="#52709d" />
          <circle cx="110" cy="112" r="5" fill={GOLD} />
          <path d="M148,44 L148,10" stroke={CREAM} strokeWidth="5" strokeLinecap="round" />
          <path d="M151,12 L184,20 L151,30 Z" fill={GOLD} />
        </>
      );

    default:
      return null;
  }
}

export default function ClayPlanet({
  planet,
  size,
  dim,
}: {
  planet: Planet;
  size: number;
  dim?: boolean;
}) {
  const clipId = useId();
  return (
    <svg
      width={size}
      height={size * 0.94}
      viewBox="0 0 220 206"
      style={dim ? { filter: "grayscale(0.9)", opacity: 0.35 } : undefined}
      aria-hidden
    >
      <Blob planet={planet} volcano={planet.id === "game" || planet.id === "now"} />
      {planet.id !== "greedy" && planet.id !== "corona" && planet.id !== "army" && (
        <Speckles dark={planet.dark} />
      )}
      <Decoration planet={planet} clipId={clipId} />
    </svg>
  );
}
