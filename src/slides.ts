// 발표 내용. 화면에는 뼈대만 두고, 세부 이야기는 말로 풀어요.

export type PersonCard = { color: string; name: string; desc: string };
export type Photo = { src: string; caption: string };

export type Slide =
  | { kind: "cover"; title: string; subtitle: string }
  | { kind: "planet"; planetId: string; title: string; caption?: string }
  | { kind: "content"; planetId: string; title: string; bullets: string[]; glyph?: string; photo?: Photo }
  | { kind: "stat"; planetId: string; kicker?: string; big: string; lines: string[] }
  | { kind: "tiles"; planetId: string; title: string; tiles: { big: string; small: string }[]; notes?: string[] }
  | { kind: "person"; planetId: string; name: string; tag: string; color: string; traits: string[] }
  | { kind: "yeslist"; planetId: string; title: string; items: string[] }
  | { kind: "steps"; planetId: string; title: string; steps: { name: string; desc: string }[]; note?: string }
  | { kind: "sky"; planetId: string; title: string; groups: { label: string; names: string[] }[]; photos?: Photo[] }
  | { kind: "web"; planetId: string; title: string }
  | { kind: "people"; planetId: string; title: string; people: PersonCard[] }
  | { kind: "quote"; planetId: string; text: string; who: string }
  | { kind: "statement"; planetId?: string; line: string; sub?: string; glyph?: string }
  | { kind: "end"; line: string; sub?: string; glyph?: string }
  | { kind: "fin" };

export const slides: Slide[] = [
  {
    kind: "cover",
    title: "YES맨이 만든 인연",
    subtitle: "박찬빈",
  },

  // 1막. 게임 행성
  {
    kind: "planet",
    planetId: "game",
    title: "게임 행성",
    caption: "고등학교 입학시험 얘기부터 할게요.",
  },
  {
    kind: "stat",
    planetId: "game",
    kicker: "공부 안 하고 본 시험",
    big: "전교 22등",
    lines: [
      "전교 30등까지 쓸 수 있는 자습실이 생겼어요",
      "제가 천재인 줄 알았어요",
      "그때부터 공부를 안 했어요",
    ],
  },
  {
    kind: "tiles",
    planetId: "game",
    title: "자습실은 안 가고 PC방에 갔어요",
    tiles: [
      { big: "248", small: "레벨" },
      { big: "333", small: "레벨" },
      { big: "50", small: "레벨" },
    ],
    notes: ["롤 계정이 세 개였어요"],
  },
  {
    kind: "content",
    planetId: "game",
    title: "게임 중독이었어요",
    glyph: "gamepad",
    bullets: [
      "학교에서도 게임 생각만 했어요",
      "친구들이랑도 게임 얘기만 했어요",
      "정신 차려 보니 고3이었어요",
    ],
  },

  // 2막. 코로나 행성
  {
    kind: "planet",
    planetId: "corona",
    title: "코로나 행성",
    caption: "갈 수 있는 대학이 없어서 재수를 했어요.",
  },
  {
    kind: "content",
    planetId: "corona",
    title: "재수할 때 고립됐어요",
    glyph: "mask",
    bullets: [
      "코로나라 재수학원도 못 갔어요",
      "만나던 친구만 만나게 됐어요",
    ],
  },
  {
    kind: "tiles",
    planetId: "corona",
    title: "대학 1, 2학년은 학교를 안 갔어요",
    tiles: [
      { big: "부산", small: "3주에 한 번" },
      { big: "일본", small: "여행" },
      { big: "게임", small: "친구들이랑" },
    ],
    notes: [
      "사람을 잘 안 만났고, 사회 탓을 많이 했어요",
      "돈도 흥청망청 썼어요",
    ],
  },

  // 3막. 군대 행성
  {
    kind: "planet",
    planetId: "army",
    title: "군대 행성",
    caption: "카투사가 좋다길래 토익 보고 지원했는데 됐어요.",
  },
  {
    kind: "statement",
    planetId: "army",
    line: "조용히 18개월만\n채우고 나오자",
    sub: "입대할 때 생각은 이랬어요",
    glyph: "helmet",
  },
  {
    kind: "person",
    planetId: "army",
    name: "정지훈 상병",
    tag: "서른 살, 댄서",
    color: "#f2c14e",
    traits: [
      "계급 낮은 사람도 안 하는 일을 혼자 다 했어요",
      "본인 일이 아닌 것도 열심히 했어요",
      "저한테 자꾸 같이 하자고 했어요",
    ],
  },
  {
    kind: "statement",
    planetId: "army",
    line: "시키지도 않은 일을\n왜 하세요?",
    sub: "친해지고 나서 물어봤어요",
  },
  {
    kind: "quote",
    planetId: "army",
    text: "“노라고 하는 사람보다 예스라고 하는 사람한테 기회가 더 많이 와. 일이 늘어날수록 그 안에서 기회랑 인연이 생기고, 그게 영향력이야.”",
    who: "정지훈 상병의 대답이었어요",
  },
  {
    kind: "yeslist",
    planetId: "army",
    title: "안 믿겼지만 따라 해봤어요",
    items: [
      "심심하다고 데려가는 미군 훈련",
      "주말 하와이안 셔츠 쇼핑",
      "클럽, 주말 농구",
      "INTEL, SUPPLY 작업",
    ],
  },
  {
    kind: "stat",
    planetId: "army",
    kicker: "18개월 동안",
    big: "훈련 6번",
    lines: [
      "FS, UFS, CHD, 포병 훈련, JDOCS",
      "통역병인데 화력과 일도 저한테 물어봤어요",
    ],
  },
  {
    kind: "statement",
    planetId: "army",
    line: "마지막 훈련에서\nACOM을 받았어요",
    sub: "미 육군 표창이에요",
    glyph: "medal",
  },
  {
    kind: "sky",
    planetId: "army",
    title: "군대에서 만난 사람들",
    groups: [
      {
        label: "지금도 만나요",
        names: [
          "정지훈",
          "권성우",
          "이용재",
          "천정우",
          "이상곤",
          "조은혜",
          "서동하",
          "고혁빈",
          "정현진",
          "구홍진",
          "엄연재",
          "박태준",
          "서지문",
          "김동현",
        ],
      },
    ],
    photos: [
      { src: "/photos/army-1.jpg", caption: "전역하고도 만나요" },
      { src: "/photos/army-2.jpg", caption: "" },
    ],
  },

  // 4막. 그리디 행성
  {
    kind: "planet",
    planetId: "greedy",
    title: "그리디 행성",
    caption: "전역하고 학교로 돌아왔어요.",
  },
  {
    kind: "content",
    planetId: "greedy",
    title: "할 줄 아는 건 반복문 정도였어요",
    glyph: "sparkle",
    bullets: [
      "수업에서 배운 게 전부였어요",
      "뭐라도 해보자고 동아리에 들어갔어요",
      "그게 그리디였어요",
    ],
  },
  {
    kind: "steps",
    planetId: "greedy",
    title: "그리디에서 맡은 자리들",
    steps: [
      { name: "2기 멤버", desc: "스터디, 줍줍" },
      { name: "3기 스터디 리드", desc: "스터디를 이끌었어요" },
      { name: "4기 운영진", desc: "동아리 운영을 해요" },
    ],
    note: "자리를 옮길 때마다 제안이 왔어요",
  },
  {
    kind: "sky",
    planetId: "greedy",
    title: "2기 때 만난 사람들",
    groups: [
      { label: "운영진", names: ["이승용", "김수민", "원태연", "김주환"] },
      { label: "프론트 리뷰어", names: ["김범수", "송혜정", "김의천"] },
      {
        label: "프론트 동기",
        names: ["정창우", "임규영", "신지훈", "신지우", "강동현"],
      },
      {
        label: "백엔드 동기",
        names: ["황혜림", "이창희", "허석준", "전서희", "김지우", "염지환"],
      },
    ],
    photos: [{ src: "/photos/greedy-2.jpg", caption: "2기 모임" }],
  },
  {
    kind: "sky",
    planetId: "greedy",
    title: "3기 때 만난 사람들",
    groups: [
      {
        label: "같이 리드",
        names: [
          "송혜정",
          "임규영",
          "신지우",
          "신혜빈",
          "정상희",
          "남해윤",
          "안금서",
        ],
      },
      {
        label: "스터디원",
        names: ["심혁", "윤재홍", "강건", "강예령"],
      },
    ],
    photos: [
      { src: "/photos/study-1.jpg", caption: "프론트 스터디" },
      { src: "/photos/study-2.jpg", caption: "" },
    ],
  },
  {
    kind: "sky",
    planetId: "greedy",
    title: "4기 때 만난 사람들",
    groups: [
      {
        label: "같이 운영진",
        names: [
          "김범수",
          "신혜빈",
          "정상희",
          "정창우",
          "황혜림",
          "심혁",
          "윤재홍",
          "김민기",
          "이진",
        ],
      },
      {
        label: "새 프론트 멤버",
        names: ["홍의민", "김동건", "고규민", "천동현"],
      },
      {
        label: "새 백엔드 멤버",
        names: [
          "김민욱",
          "강대현",
          "정명준",
          "이채현",
          "김하은",
          "이태규",
        ],
      },
    ],
    photos: [{ src: "/photos/meetup.jpg", caption: "초록 밋업" }],
  },
  {
    kind: "sky",
    planetId: "greedy",
    title: "프로젝트에서 만난 사람들",
    groups: [
      {
        label: "줍줍",
        names: ["전서희", "황혜림", "강동현", "임규영", "이창희"],
      },
      {
        label: "경찰과 도둑",
        names: ["정상희", "이창희", "황혜림", "홍의민", "김다임", "윤지희"],
      },
      {
        label: "올클",
        names: [
          "김주환",
          "채현우",
          "김수민",
          "남해윤",
          "송혜정",
          "안금서",
          "이진",
          "하수한",
        ],
      },
      {
        label: "캡스톤",
        names: ["안금서", "신지우"],
      },
    ],
    photos: [
      { src: "/photos/allclear.jpg", caption: "올클 사람들" },
      { src: "/photos/gyeongdo-meeting.jpg", caption: "경도 팀" },
    ],
  },
  {
    // 군대 14명 + 그리디 42명. 중복 빼고 센 숫자라 명단이 바뀌면 같이 고쳐요.
    kind: "web",
    planetId: "greedy",
    title: "예스라고 답해서 만난 사람들이에요",
  },
  {
    kind: "stat",
    planetId: "greedy",
    kicker: "이름을 세어 보니",
    big: "56명",
    lines: ["정지훈 상병 말이 맞았어요"],
  },
  {
    kind: "statement",
    planetId: "greedy",
    line: "일을 늘릴수록\n인연이 늘었어요",
    glyph: "fox",
  },

  // 5막. 지금 행성
  {
    kind: "planet",
    planetId: "now",
    title: "지금 행성",
    caption: "지금은 개발자 취업 준비를 하고 있어요.",
  },
  {
    kind: "content",
    planetId: "now",
    title: "요즘 프로젝트가 의미 없다는 말을 많이 들어요",
    glyph: "compass",
    bullets: [
      "AI로 만드는 속도가 빨라졌으니까요",
      "그래도 사람만 만들 수 있는 게 있다고 생각해요",
      "쓰고 싶은 기술이 생기면 프로젝트에서 쓸 곳을 찾아 제안해요",
    ],
  },
  {
    kind: "content",
    planetId: "now",
    title: "그래서 만들고 끝내지 않아요",
    photo: { src: "/photos/gametown.jpg", caption: "서울 게임 타운" },
    bullets: [
      "축제랑 박람회에 나가서 유저를 만나요",
      "만든 걸 직접 써보는 사람을 보는 게 좋아요",
    ],
  },
  {
    kind: "content",
    planetId: "now",
    title: "요즘 사는 게 재밌어요",
    photo: { src: "/photos/gyeongdo-trip.jpg", caption: "같이 간 휴가" },
    bullets: [
      "하는 일도 많고, 만나는 사람도 많아요",
      "근데 일을 너무 많이 벌였어요",
    ],
  },
  {
    kind: "statement",
    planetId: "now",
    line: "그래서 이제,\n조금은 노맨이 되어 보려고요.",
    glyph: "no",
  },

  // 암전 + 스포트라이트 + 실루엣 인사
  {
    kind: "end",
    line: "감사합니다",
  },

  // 마지막 한 번 더 넘기면 커튼이 조용히 닫혀요
  { kind: "fin" },
];
