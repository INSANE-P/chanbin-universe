# YES맨이 만든 인연

발표용 웹사이트예요. 어린왕자 인형극 무대 위에서 슬라이드가 넘어가요.

## 실행

```bash
pnpm dev
```

## 조작

- 다음: →, Space, Enter, PageDown, 마우스 클릭 (발표용 리모컨 호환)
- 이전: ←, PageUp, Backspace
- 현재 위치는 URL 해시(#3)에 저장돼서 새로고침해도 그 자리로 돌아와요

## 내용 고치기

`src/slides.ts` 하나만 보면 돼요. 슬라이드 배열이 곧 발표 순서예요.

| kind | 쓰임 |
| --- | --- |
| `cover` | 표지. 달 보트 위 어린왕자 |
| `planet` | 막이 바뀔 때 행성이 실에 매달려 내려와요 |
| `content` | 제목 + 불릿. `glyph`나 `photo`를 곁들일 수 있어요 |
| `stat` | 큰 숫자 하나 |
| `tiles` | 매달린 팻말 여러 장 |
| `person` | 인물 한 명 조명 |
| `yeslist` | 제안 목록에 YES 도장이 찍혀요 |
| `steps` | 거쳐 온 자리들 |
| `sky` | 이름이 별처럼 하나씩 켜져요 |
| `web` | 마무리 별자리. 사람은 `Constellation.tsx`에 있어요 |
| `statement` | 한 문장 |
| `end` | 암전 + 스포트라이트 + 인사 |
| `fin` | 커튼이 닫혀요 |

## 화면 구성

- `PaperSky` 밤하늘, `StageFloor` 무대 바닥과 각광, `Curtains` 커튼, `StageLamps` 조명, `HangingStars` 매달린 별
- 소품은 전부 `HangingProp`으로 매달아요. `attach`는 실이 소품 안으로 파고드는 깊이예요
- 행성이 바뀔 때 커튼이 잠깐 닫혔다 열려요 (`App.tsx`의 cycling)

## 사진과 OG

```bash
pnpm og      # public/og.png 다시 만들기
```

사진은 `public/photos`에 있어요. 원본에서 다시 뽑으려면 `node scripts/photos.mjs`를 쓰는데, 경로가 데스크톱으로 박혀 있으니 필요하면 고쳐서 써요.

## 배포

Vercel에 GitHub 레포를 연결하면 자동 배포돼요. Vite 프로젝트라 별도 설정은 없어요.

폰트는 로컬 번들이라 발표장에 인터넷이 없어도 돌아가요.
