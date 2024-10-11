import "./style.css";

const mockData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
  },
  {
    question: "What is the longest river in the world?",
    options: ["Amazonas", "Nilo", "Yangtsé", "Miño"],
  },
  {
    question: "Who wrote Romeo and Juliet?",
    options: [
      "Jane Austen",
      "Cervantes",
      "William Shakerpeare",
      "Charles Dickens",
    ],
  },
  {
    question: "How many planets are there in our solar system?",
    options: ["7", "8", "9", "10"],
  },
];

const TEXT_TITLE = "Quiz Question";

const TEXT_BUTTONS_ARRAY = ["Previous", "Next"];

const OPTIOON_SELECTED = "#3CB371";

let currentQuestionIndex = 0;

/********* Design *******/
const body = document.querySelector("body");

const h2Title = document.createElement("h2");
h2Title.textContent = TEXT_TITLE;
const pQuestion = document.createElement("p");
pQuestion.textContent = mockData[0].question;

const divContainer = document.createElement("div");
divContainer.className = "container";

const divFooter = document.createElement("div");
divFooter.className = "container-footer";

const createButton = (text, className) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.classList.add(className);
  return button;
};

const createLi = (textButton) => {
  const li = document.createElement("li");
  li.appendChild(createButton(textButton, "answer-btn"));
  return li;
};

const createUl = (textButtons) => {
  const ul = document.createElement("ul");
  textButtons.forEach((textButton) => {
    ul.appendChild(createLi(textButton));
  });
  ul.classList.add("container-answers");
  return ul;
};

let buttonsFooter;
const createFooter = (textButtons) => {
  buttonsFooter = textButtons.map((textButton) => {
    let button = createButton(textButton, "footer-btn");
    if (textButton === "Previous") button.disabled = true;
    divFooter.appendChild(button);
    return button;
  });
  return divFooter;
};

divContainer.appendChild(h2Title);
divContainer.appendChild(pQuestion);
let ulContainer = createUl(mockData[currentQuestionIndex].options);
divContainer.appendChild(ulContainer);
divContainer.appendChild(createFooter(TEXT_BUTTONS_ARRAY));
body.appendChild(divContainer);

/********* Funcionality ***************/

// Set answers in the ulContainer list element
const setAnswers = (ulContainer, mockData) => {
  Array.from(ulContainer.children).forEach((liAnswer, index) => {
    liAnswer.firstChild.textContent =
      mockData[currentQuestionIndex].options[index];
  });
};

// Previous button
buttonsFooter[0].addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    resetOptions();
    buttonsFooter[1].disabled = false; // Enable Next button
    currentQuestionIndex--;
    pQuestion.textContent = mockData[currentQuestionIndex].question;
    buttonsFooter[0].disabled = currentQuestionIndex === 0;
    setAnswers(ulContainer, mockData);
  }
});

// Next button
buttonsFooter[1].addEventListener("click", () => {
  if (currentQuestionIndex < mockData.length - 1) {
    resetOptions();
    buttonsFooter[0].disabled = false; // Enable Previous button
    currentQuestionIndex++;
    pQuestion.textContent = mockData[currentQuestionIndex].question;
    buttonsFooter[1].disabled = currentQuestionIndex === mockData.length - 1;
    setAnswers(ulContainer, mockData);
  }
});

let buttons = document.querySelectorAll(".answer-btn");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    resetOptions();
    button.style.background = OPTIOON_SELECTED;
  });
});

const resetOptions = () => {
  buttons.forEach((button) => button.removeAttribute("style"));
};
