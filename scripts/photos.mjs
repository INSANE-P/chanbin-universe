// 원본 사진을 웹용으로 줄여서 public/photos에 넣어요.
// `node scripts/photos.mjs` 로 실행해요. 원본은 건드리지 않아요.
import { mkdirSync, readdirSync, writeFileSync } from "fs";
import { join } from "path";
import sharp from "sharp";

const SRC = "C:\\Users\\박찬빈\\Desktop\\들어갈 사진";
const OUT = new URL("../public/photos/", import.meta.url);

// 파일 이름 → 웹에서 쓸 이름
const NAMES = {
  "군대사람들 2.jpg": "army-1",
  "군대사람들 3.jpg": "army-2",
  "그리디 2기 모임.jpg": "greedy-2",
  "그리디 3기 프론트 스터디.jpg": "study-1",
  "그리디 3기 프론트 스터디2.jpg": "study-2",
  "메인테이너때 했던 초록 밋업.jpg": "meetup",
  "올클 사람들.jpg": "allclear",
  "경도 사람들 1.jpg": "gyeongdo-1",
  "경도 사람들 2.jpg": "gyeongdo-2",
  "경도 회의.jpg": "gyeongdo-meeting",
  "경도 휴가.jpg": "gyeongdo-trip",
  "경도 서울게임타운.jpg": "gametown",
};

mkdirSync(OUT, { recursive: true });

const files = readdirSync(SRC).filter((f) => /\.(jpe?g|png)$/i.test(f));
for (const f of files) {
  const name = NAMES[f];
  if (!name) {
    console.log(`skip (이름 미지정): ${f}`);
    continue;
  }
  const img = sharp(join(SRC, f)).rotate();
  const meta = await img.metadata();
  const buf = await img
    .resize({ width: 900, height: 900, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer();
  writeFileSync(new URL(`${name}.jpg`, OUT), buf);
  console.log(
    `${name}.jpg  ${meta.width}x${meta.height} -> ${(buf.length / 1024).toFixed(0)} kB`,
  );
}
