// 여정의 행성들. 순서 = 이동 순서예요.
// 클레이 색 3톤(light/base/dark)으로 손으로 빚은 질감을 내요.
// 테마 장식(방탄모, 마스크, 고리, 로고, 나침반)은 ClayPlanet.tsx가 그려요.

import greedyLogo from "./assets/greedy-logo.png";

export type Planet = {
  id: string;
  name: string;
  light: string;
  base: string;
  dark: string;
  sticker?: string;
};

export const planets: Planet[] = [
  {
    id: "game",
    name: "게임 행성",
    light: "#beb3f0",
    base: "#9c8ee0",
    dark: "#6f63b0",
  },
  {
    id: "corona",
    name: "코로나 행성",
    light: "#c2d0c8",
    base: "#9fb0a6",
    dark: "#6f8177",
  },
  {
    id: "army",
    name: "군대 행성",
    light: "#b5c47e",
    base: "#93a35c",
    dark: "#667542",
  },
  {
    id: "greedy",
    name: "그리디 행성",
    light: "#4bab8d",
    base: "#1f8a6b",
    dark: "#106350",
    sticker: greedyLogo,
  },
  {
    id: "now",
    name: "지금 행성",
    light: "#a2c0e8",
    base: "#7d9fd0",
    dark: "#52709d",
  },
];

export function planetById(id: string): Planet {
  const p = planets.find((x) => x.id === id);
  if (!p) throw new Error(`unknown planet: ${id}`);
  return p;
}
