const questions = [
  { keyword: "flying", question: "Would you rather have the ability to fly at 5km/h or run at 100km/h?" },
  { keyword: "food", question: "If you had to eat one meal for the rest of your life, what would it be?" },
  { keyword: "superpower", question: "If you could have any superpower, what would it be?" },
  { keyword: "animal", question: "If you could be an animal, which would it be?" },
  { keyword: "person", question: "If you could be somebody else for a day, who would you be?" },
  { keyword: "person", question: "Who do you look up to most in your life?" },
  { keyword: "temperature", question: "Would you rather be always cold or always hot?" },
  { keyword: "season", question: "What is your favourite season?" },
  { keyword: "movie", question: "What is your favourite movie/series?" },
  { keyword: "language", question: "Would you rather speak to animals or speak all languages?" },
  { keyword: "shouting", question: "Would you rather only be able to whisper or only be able to shout?" },
  { keyword: "money", question: "Would you rather have more money or more time?" },
  { keyword: "hate", question: "If you could rid the world of one thing, what would it be?" },
  { keyword: "speech", question: "What topic could you talk about for 30 minutes without preparation?" },
  { keyword: "elbows", question: "Would you rather be without elbows or knees?" },
  { keyword: "prank", question: "What is the best prank you ever pulled (or was pulled on you)?" },
  { keyword: "age", question: "If you could choose to stop ageing at any age, which would you choose?" },
  { keyword: "mastery", question: "What is an unusual skill you would love to master?" },
  { keyword: "apocalypse", question: "If the world was about to end in 24 hours, what would you do?" },
  { keyword: "skill", question: "What are you hilariously bad at?" },
];

const createCard = (question) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const cardHeader = createCardHeader(question);
  cardDiv.appendChild(cardHeader);

  const cardContent = createCardContent(question);
  cardDiv.appendChild(cardContent);

  return cardDiv;
};

const createCardHeader = (question) => {
  const cardHeaderDiv = document.createElement("div");
  cardHeaderDiv.classList.add("card__header");

  const cardImage = document.createElement("img");
  cardImage.src = `https://source.unsplash.com/random/640×480p?${question.keyword}`;

  cardHeaderDiv.appendChild(cardImage);

  return cardHeaderDiv;
};

const createCardContent = (question) => {
  const cardContentDiv = document.createElement("div");
  cardContentDiv.classList.add("card__content");

  const h2Question = document.createElement("h1");
  h2Question.textContent = question.question;

  cardContentDiv.appendChild(h2Question);

  return cardContentDiv;
};

const questionsContainerDiv = document.getElementById("questions-container");
const questionIds = [];

for (let i = 0; i < 3; i++) {
  let randomQuestionIndex = Math.round(Math.random() * 20);
  while (questionIds.includes(randomQuestionIndex)) {
    randomQuestionIndex = Math.round(Math.random() * 20);
  }

  questionIds.push(randomQuestionIndex);
  const randomQuestion = questions[randomQuestionIndex];

  const cardDiv = createCard(randomQuestion);
  questionsContainerDiv.appendChild(cardDiv);
}
