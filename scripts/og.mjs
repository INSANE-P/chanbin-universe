// OG 이미지(1200x630)를 만들어요. `node scripts/og.mjs`로 실행하면
// public/og.png가 새로 써져요. 커버 화면(밤하늘 + 달 보트 + 무대 커튼)을 옮긴 그림이에요.
import { writeFileSync } from "fs";
import sharp from "sharp";

const W = 1200;
const H = 630;

// 시스템에 있는 한글 폰트를 써요. 고운바탕이 없으면 바탕으로 떨어져요.
const SERIF = "Gowun Batang, Batang, Malgun Gothic, sans-serif";

const stars = [];
for (let i = 0; i < 70; i++) {
  const x = ((i * 137.5) % 100) * 12;
  const y = ((i * 71.3) % 100) * 6.3;
  const r = i % 11 === 0 ? 2.6 : i % 3 === 0 ? 1.7 : 1.1;
  const fill = i % 4 === 0 ? "#f7d98c" : "#efe6d2";
  stars.push(
    `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${fill}" opacity="${i % 3 === 0 ? 0.85 : 0.5}"/>`,
  );
}

function paperStar(x, y, r) {
  const k = r * 0.34;
  return `<path d="M${x},${y - r} L${x + k},${y - k} L${x + r},${y} L${x + k},${y + k} L${x},${y + r} L${x - k},${y + k} L${x - r},${y} L${x - k},${y - k} Z" fill="#f2c14e"/>`;
}

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#171c39"/>
      <stop offset="0.45" stop-color="#232a52"/>
      <stop offset="1" stop-color="#33396a"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="1.05" r="0.75">
      <stop offset="0" stop-color="#f2c14e" stop-opacity="0.24"/>
      <stop offset="0.42" stop-color="#e07a5f" stop-opacity="0.09"/>
      <stop offset="1" stop-color="#e07a5f" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#sky)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  ${stars.join("")}
  ${paperStar(168, 96, 13)}
  ${paperStar(1042, 74, 10)}
  ${paperStar(1080, 470, 8)}
  ${paperStar(126, 452, 7)}

  <g transform="translate(600 400) scale(1.62)">
    <path d="M-94,-38 Q-72,-50 -78,-74" stroke="#e8873c" stroke-width="14" stroke-linecap="round" fill="none"/>
    <circle cx="-78" cy="-75" r="6.5" fill="#f2e6cb"/>
    <path d="M-132,-34 Q-134,-66 -110,-72 Q-86,-66 -88,-34 Z" fill="#e8873c"/>
    <circle cx="-110" cy="-84" r="13" fill="#e8873c"/>
    <path d="M-120,-92 L-116,-107 L-109,-94 Z" fill="#e8873c"/>
    <path d="M-100,-92 L-104,-107 L-111,-94 Z" fill="#e8873c"/>
    <path d="M-118,-94 L-116,-102 L-111,-95 Z" fill="#c96f2a"/>
    <path d="M-102,-94 L-104,-102 L-109,-95 Z" fill="#c96f2a"/>

    <path d="M-60,-32 Q-60,-64 -40,-68 Q-20,-64 -20,-32 Z" fill="#5d8a4a"/>
    <circle cx="-40" cy="-86" r="14" fill="#f2c14e"/>
    <circle cx="-48" cy="-98" r="6" fill="#f2c14e"/>
    <circle cx="-40" cy="-102" r="7" fill="#f2c14e"/>
    <circle cx="-31" cy="-98" r="6" fill="#f2c14e"/>
    <circle cx="-53" cy="-91" r="5" fill="#f2c14e"/>
    <circle cx="-26" cy="-91" r="5" fill="#f2c14e"/>
    <rect x="-52" y="-71" width="24" height="7" rx="3.5" fill="#e0a93c"/>
    <path d="M-28,-67 Q-6,-71 6,-83 Q0,-70 -16,-63 Q-23,-61 -28,-63 Z" fill="#e0a93c"/>

    <path d="M2,-28 Q2,-44 3,-54" stroke="#5d8a4a" stroke-width="3.5" stroke-linecap="round" fill="none"/>
    <path d="M2,-38 Q-7,-42 -10,-48 Q-1,-46 2,-42 Z" fill="#5d8a4a"/>
    <circle cx="3" cy="-62" r="10" fill="#d1495b"/>
    <circle cx="3" cy="-62" r="5.5" fill="#a83248"/>

    <path d="M-210,-76 Q-60,79 90,-76 Q-60,-1 -210,-76 Z" fill="#f2d78c"/>
    <path d="M-210,-76 Q-60,-1 90,-76 Q-60,20 -210,-76 Z" fill="#f7e3a8" opacity="0.55"/>
    <circle cx="-140" cy="10" r="8" fill="#d9b968" opacity="0.8"/>
    <circle cx="-45" cy="14" r="6" fill="#d9b968" opacity="0.8"/>
    <circle cx="-90" cy="26" r="4" fill="#d9b968" opacity="0.7"/>
    <circle cx="12" cy="-14" r="5" fill="#d9b968" opacity="0.7"/>
  </g>

  <text x="600" y="150" text-anchor="middle" font-family="${SERIF}" font-weight="700" font-size="82" fill="#f7d98c">YES맨이 만든 인연</text>
  <text x="600" y="206" text-anchor="middle" font-family="${SERIF}" font-size="34" fill="#f2c14e">박찬빈</text>

  <g fill="#7d2431">
    <rect x="0" y="0" width="66" height="${H}"/>
    <rect x="${W - 66}" y="0" width="66" height="${H}"/>
    <path d="M0,0 L${W},0 L${W},34 Q1100,66 1000,34 Q900,66 800,34 Q700,66 600,34 Q500,66 400,34 Q300,66 200,34 Q100,66 0,34 Z"/>
  </g>
  <path d="M0,34 Q100,66 200,34 Q300,66 400,34 Q500,66 600,34 Q700,66 800,34 Q900,66 1000,34 Q1100,66 ${W},34" fill="none" stroke="#c99b3f" stroke-width="5"/>
  <rect x="66" y="0" width="5" height="${H}" fill="#c99b3f"/>
  <rect x="${W - 71}" y="0" width="5" height="${H}" fill="#c99b3f"/>
</svg>`;

const out = new URL("../public/og.png", import.meta.url);
const png = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(out, png);
console.log(`og.png written (${(png.length / 1024).toFixed(1)} kB)`);
