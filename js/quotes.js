const quotes = [
  {
    quote: "태도는 사소한 것이지만 그것이 만드는 차이는 엄청나다.",
    author: "윈스턴 처칠",
  },
  {
    quote:
      "성공의 비결은 모르겠다. 하지만 실패의 비결은 알고 있다. 모든 사람들을 기쁘게 하려는 것이다.",
    author: "빌 코스비",
  },
  { quote: "웃음이 없는 하루는 버린 하루다.", author: "찰리 채플린" },
  {
    quote: "나약한 태도는 그 사람 자체도 나약하게 만든다.",
    author: "알버트 아인슈타인",
  },
  {
    quote: "영원히 살 것처럼 꿈꾸고 오늘 죽을 것처럼 살아라.",
    author: "제임스 딘",
  },
  {
    quote: "조금도 도전하지 않으려고 하는 것이 인생에서 가장 위험한 일이다.",
    author: "오프라 윈프리",
  },
  {
    quote:
      "새로운 일에 도전하다 보면 가끔 실수를 저지를 수 있다. 자신의 실수를 빨리 인정하고 다른 시도에 집중하는 것이 최선이다.",
    author: "스티브 잡스",
  },
  {
    quote: "행동은 모든 성공의 가장 기초적인 핵심이다.",
    author: "파블로 피카소",
  },
  {
    quote: "용기란 죽을만큼 두려워도 무언가 해보는 것이다.",
    author: "존 웨인",
  },
  {
    quote:
      "오늘 나무 그늘에서 쉴 수 있는 이유는 예전에 나무를 심었기 때문이다.",
    author: "워렌 버핏",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
