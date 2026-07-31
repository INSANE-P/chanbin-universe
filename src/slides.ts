// 발표 내용. 화면에는 뼈대만 두고, 세부 이야기는 말로 풀어요.
// 큰 줄기는 "제안을 받던 사람에서 제안하는 사람으로" 예요.

export type Photo = { src: string; caption: string };

export type Slide =
  | { kind: "cover"; title: string; subtitle: string; struck?: string }
  | { kind: "planet"; planetId: string; title: string; caption?: string }
  | { kind: "content"; planetId: string; title: string; bullets: string[]; glyph?: string; photo?: Photo }
  | { kind: "stat"; planetId: string; kicker?: string; big: string; lines: string[] }
  | { kind: "tiles"; planetId: string; title: string; tiles: { big: string; small: string }[]; notes?: string[] }
  | { kind: "person"; planetId: string; name: string; tag: string; color: string; traits: string[] }
  | { kind: "yeslist"; planetId: string; title: string; items: string[]; mode?: "ask" }
  | { kind: "steps"; planetId: string; title: string; steps: { name: string; desc: string }[]; note?: string }
  | { kind: "sky"; planetId: string; title: string; groups: { label: string; names: string[] }[]; photos?: Photo[] }
  | { kind: "web"; planetId: string; title: string }
  | { kind: "quote"; planetId: string; text: string; who: string }
  | { kind: "propose"; text: string; sub?: string }
  | { kind: "statement"; planetId?: string; line: string; sub?: string; glyph?: string }
  | { kind: "end"; line: string; sub?: string; glyph?: string }
  | { kind: "fin" };

export const slides: Slide[] = [
  {
    kind: "cover",
    struck: "YES맨이 만든 인연",
    title: "같이 해볼래요?",
    subtitle: "박찬빈",
  },

  // 1막. 게임 행성 - 아무도 안 물어봤고, 저도 안 했어요
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

  // 2막. 코로나 행성 - 물어볼 사람도 없었어요
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
      { big: "해외여행", small: "충동적으로" },
      { big: "게임", small: "친구들이랑" },
    ],
    notes: [
      "사람을 잘 안 만났고, 사회 탓을 많이 했어요",
      "돈도 흥청망청 썼어요",
    ],
  },

  // 3막. 군대 행성 - 누가 저한테 물어봤어요
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
      "그러면서 저한테 자꾸 물어봤어요",
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
    text: "“누가 같이 하자고 할 때, NO라고 하는 사람보다 YES라고 하는 사람한테 기회가 와. 일이 늘어날수록 그 안에서 인연이 생기고.”",
    who: "정지훈 상병의 대답이었어요",
  },
  {
    kind: "yeslist",
    planetId: "army",
    title: "그 뒤로 계속 물어보더라고요",
    items: [
      "훈련 같이 갈래?",
      "주말에 하와이안 셔츠 사러 갈래?",
      "클럽 갈래? 농구할래?",
      "INTEL, SUPPLY 작업 보러 갈래?",
    ],
  },
  {
    kind: "stat",
    planetId: "army",
    kicker: "18개월 동안",
    big: "훈련 6번",
    lines: [
      "FS, UFS, FTX, 포병 훈련, JDOCS",
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

  // 4막. 그리디 행성 - 제안이 계속 왔어요
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
    kind: "yeslist",
    planetId: "greedy",
    title: "여기서도 계속 물어보더라고요",
    items: [
      "스터디 리드 해볼래?",
      "운영진 해볼래?",
      "경도 같이 할래?",
      "올클 같이 할래?",
      "캡스톤 같이 할래?",
    ],
  },
  {
    kind: "steps",
    planetId: "greedy",
    title: "그래서 해본 일이 계속 늘었어요",
    steps: [
      { name: "2기 멤버", desc: "스터디하고 줍줍 만들고" },
      { name: "3기 스터디 리드", desc: "스터디를 이끌고" },
      { name: "4기 운영진", desc: "동아리를 운영하고" },
    ],
    note: "일이 늘어난 만큼 만나는 사람도 늘었어요",
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
        names: ["김민욱", "강대현", "정명준", "이채현", "김하은", "이태규"],
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
        names: ["안금서", "신지우", "정재연", "지예람"],
      },
      {
        label: "홈페이지",
        names: ["신혜빈", "이진", "윤재홍"],
      },
    ],
    photos: [
      { src: "/photos/allclear.jpg", caption: "올클 사람들" },
      { src: "/photos/gyeongdo-meeting.jpg", caption: "경도 팀" },
    ],
  },

  // 5막. 지금 행성 - 이제는 제가 물어봐요
  {
    kind: "planet",
    planetId: "now",
    title: "지금 행성",
    caption: "지금은 개발자 취업 준비를 하고 있어요.",
  },
  {
    kind: "statement",
    planetId: "now",
    line: "어느 순간부터\n제가 먼저 물어보고 있었어요",
  },
  {
    kind: "yeslist",
    planetId: "now",
    mode: "ask",
    title: "요즘 제가 하는 말이에요",
    items: [
      "이거 GraphQL로 해볼까요?",
      "동아리 홈페이지 만들어볼까요?",
      "서울 게임 타운 나가볼까요?",
    ],
  },
  {
    kind: "content",
    planetId: "now",
    title: "그래서 진짜 나갔어요",
    photo: { src: "/photos/gametown.jpg", caption: "서울 게임 타운" },
    bullets: [
      "경찰과 도둑을 들고 부스를 차렸어요",
      "만든 걸 직접 써보는 사람을 보는 게 좋더라고요",
    ],
  },
  {
    kind: "content",
    planetId: "now",
    title: "그러다 축제 광이 됐어요",
    photo: { src: "/photos/gyeongdo-trip.jpg", caption: "같이 간 휴가" },
    bullets: [
      "경도 팀에 04년생이 많아서 저도 같이 어려진 것 같아요",
      "노는 게 좋아졌어요",
      "김천 김밥 축제랑 청년 대로에 컨택하고 있어요",
    ],
  },
  {
    kind: "content",
    planetId: "now",
    title: "요즘 프로젝트가 의미 없다는 말을 많이 들어요",
    glyph: "compass",
    bullets: [
      "AI로 만드는 속도가 빨라졌으니까요",
      "그래도 만드는 것보다 사람을 만나러 나가는 게 안 없어지더라고요",
      "그건 아직 사람만 할 수 있는 것 같아요",
    ],
  },
  {
    kind: "statement",
    planetId: "now",
    line: "요즘은 제안을 너무 많이 해서\n일이 많아졌어요",
    sub: "조금은 NO맨이 되어 보려고요",
    glyph: "no",
  },

  // 마무리
  {
    // 군대 14명 + 그리디 44명. 중복 빼고 센 숫자라 명단이 바뀌면 같이 고쳐요.
    kind: "web",
    planetId: "greedy",
    title: "물어보고 답하다 만난 사람들이에요",
  },
  {
    kind: "stat",
    planetId: "greedy",
    kicker: "세어 보니",
    big: "58명",
    lines: ["정지훈 상병 말이 맞았어요"],
  },
  {
    kind: "statement",
    planetId: "greedy",
    line: "저한테 먼저 물어봐 준 사람들이\n지금의 저를 만들었어요",
    sub: "이제는 제가 물어보려고요",
    glyph: "fox",
  },
  {
    kind: "propose",
    text: "오늘 회식 가실래요?",
    sub: "진심이에요",
  },

  // 암전 + 스포트라이트 + 실루엣 인사
  {
    kind: "end",
    line: "감사합니다",
  },

  // 마지막 한 번 더 넘기면 커튼이 조용히 닫혀요
  { kind: "fin" },
];
