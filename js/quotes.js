const quotes = [
  {
    quote: "왼손은 거들뿐..",
    author: "강백호",
  },
  {
    quote: "천재 강백호님이시다 음하하하.",
    author: "강백호",
  },
  {
    quote:
      "영감님에 영광에 시대는 언제 였나요? 국가대표였을때인가요? 난 지금입니다!...",
    author: "강백호",
  },
  {
    quote: "물론 난 천재니깐.",
    author: "강백호",
  },
  {
    quote: "정말 좋아합니다....이번엔 거짓이 아니라구요.",
    author: "강백호",
  },
  {
    quote: "난 바스켓맨이니깐.",
    author: "강백호",
  },
  {
    quote:
      "산왕이 우리나라 제일의 팀이라면 내가 이들을 물리쳐 정상을 차지할것이다.",
    author: "서태웅",
  },
  {
    quote:
      "우리나라 최고의 선수란 어떤선수라고 생각하냐 아마 팀을 우리나라 최고로 이끄는 선수겠지. 내가 그렇게 한다. 한발자국도 물러설 생각은없다.",
    author: "서태웅",
  },
  {
    quote: "아까웠다. 너로선.",
    author: "서태웅",
  },
  {
    quote: "나는 신현철에게 진다 하지만 북산은 지지않는다",
    author: "채치수",
  },
  {
    quote:
      "소연아 니가 발견한 저 이상한녀석은 북산에 절대 필요한 남자가 되었다.",
    author: "채치수",
  },
  {
    quote: "뼈가부러져도 좋다 걸을수 없어도 좋다 간신히 잡은기회다.",
    author: "채치수",
  },
  {
    quote: "이감독님, 농구가 하고싶어요...",
    author: "정대만",
  },
  {
    quote: "이런 힘든상황에서야 말로 난 더욱 불타오르는 녀석이었다.",
    author: "정대만",
  },
  {
    quote: "어서 시합을 계속 하자구 내 리듬이 깨지기 전에.",
    author: "정대만",
  },
  {
    quote:
      "난 누구냐! 니가 말해봐 내이름을 말해봐 난 누구냐?! 그래, 난 정대만 포기를 모르는 남자지..",
    author: "정대만",
  },
  {
    quote:
      "나한테 3점슛을 빼앗아 가면 이젠 아무것도 남지 않는다. 이젠 내겐 링밖에 보이지 않아.",
    author: "정대만",
  },
  {
    quote: "이 소리가 고요하다 날 되살아나게한다 몇번이라도",
    author: "정대만",
  },
  {
    quote: "저녀석을 쓰러뜨리고 내가 톱이 된다.",
    author: "송태섭",
  },
  {
    quote: "나 정도는 언제든 블로킹 할 수 있을거라 생각했나.",
    author: "송태섭",
  },
  {
    quote: "정신차리지 못해! 흐름은 우리자신들이 가져오는거야!",
    author: "송태섭",
  },
  {
    quote: "힘들더라도 심장이 두근대도 최선을 다해 괜찮은 척을 해.",
    author: "송태섭",
  },
  {
    quote: "나는 팀의 주역이 아니라도 좋다.",
    author: "변덕규",
  },
  {
    quote:
      "1대 1도 공격선택중의 하나에 지나지 않는다 그것을 깨닫지 못하는 동안은 네게 질마음은 없다.",
    author: "윤대협",
  },
  {
    quote: "우리들은 강하다.",
    author: "이감독",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const quoteForm = document.querySelector("#quote");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
