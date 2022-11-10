const API_URL = "https://randomised-lunch-seating-api.herokuapp.com/questions";

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
  cardImage.src = `https://source.unsplash.com/random/640×480?${question.keyword}`;

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

const fetchQuestionsAndMakeCards = async () => {
  const response = await fetch(API_URL);
  const questions = await response.json();

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
};

fetchQuestionsAndMakeCards();
