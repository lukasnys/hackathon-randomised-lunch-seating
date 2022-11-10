const API_URL = "https://randomised-lunch-seating-api.herokuapp.com/questions";

const formElement = document.getElementById("form-create");

formElement.addEventListener("submit", async (event) => {
  event.preventDefault();

  const [txtKeyword, txtQuestion] = event.target;

  const keyword = txtKeyword.value;
  const question = txtQuestion.value;

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ keyword, question }),
  });

  const data = await response.json();

  window.location.href = "../";
});
