const quotes = [
  "The journey of a thousand miles begins with one step.",
  "Believe you can and you're halfway there.",
  "Do one thing every day that scares you.",
  "Success is not final, failure is not fatal.",
  "Some people want it to happen, some wish it would happen, others make it happen. — Michael Jordan",
  "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
  "Your time is limited,so don’t waste it living someone else’s life. — Steve Jobs",
  "I’m intimidated by the fear of being average. — Taylor Swift",
  "When something is important enough, you do it even if the odds are not in your favor. — Elon Musk",
  "Don’t compare yourself with anyone in this world. If you do so, you are insulting yourself. — Bill Gates",
  "Be so good they can’t ignore you. — Steve Martin",
  "You define your own life. Don’t let other people write your script. — Oprah Winfrey",
  "Dream big. Start small. Act now. — Robin Sharma",
  "Don't be afraid to give up the good to go for the great. — John D. Rockefeller",
  "I never lose. I either win or learn. — Nelson Mandela",
  "Great things are done by a series of small things brought together. — Vincent Van Gogh",
  "Sometimes the smallest step in the right direction ends up being the biggest step of your life.",
  "You miss 100% of the shots you don't take. — Wayne Gretzky",
  "The secret of getting ahead is getting started. — Mark Twain",
];

const japaneseQuotes = [
  "じぶんをしんじて。",
  "ゆめはにげない。",
  "えがおをわすれないで。",
  "あしたはあしたのかぜがふく。",
  "ちいさなしっぱいをおそれないで。",
  "こころはつよく。",
  "いまをいきる。",
  "まけてもいい、でもあきらめない。",
  "じかんはたいせつに。",
  "ゆめをかなえるちからはじぶんのなかにある。",
];

const russianQuotes = [
  "Верь в себя.",
  "Мечты сбываются.",
  "Не сдавайся.",
  "Сила — в терпении.",
  "Каждый день — шанс.",
  "Будь собой.",
  "Живи сейчас.",
  "Ошибки — это рост.",
  "Маленькие шаги важны.",
  "Счастье внутри тебя.",
];

function changeQuote() {
  const randomIndex = Math.floor(Math.random() * japaneseQuotes.length);
  const newQuote = japaneseQuotes[randomIndex];
  document.getElementById("quote").innerHTML = newQuote;
}

function changeQuote2() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const newQuote = quotes[randomIndex];
  document.getElementById("quote2").innerHTML = newQuote;
}

function changeQuote3() {
  const randomIndex = Math.floor(Math.random() * russianQuotes.length);
  const newQuote = russianQuotes[randomIndex];
  document.getElementById("quote3").innerHTML = newQuote;
}

function changeQuoteGeneric(quotesArray, elementId) {
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  document.getElementById(elementId).innerHTML = quotesArray[randomIndex];
}
