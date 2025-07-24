const quizData = [
  {
    question: "What is the capital of France?",
    a: "London",
    b: "Berlin",
    c: "Paris",
    d: "Madrid",
    correct: "c"
  },
  {
    question: "Which language is used for web apps?",
    a: "Python",
    b: "JavaScript",
    c: "Java",
    d: "C++",
    correct: "b"
  },
  {
    question: "HTML stands for?",
    a: "Hyper Text Markup Language",
    b: "High Text Markup Language",
    c: "Hyper Tabular Markup Language",
    d: "None of these",
    correct: "a"
  }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById('question');
const answerForm = document.getElementById('answer-form');
const resultEl = document.getElementById('result');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.textContent = currentQuizData.question;
  a_text.textContent = currentQuizData.a;
  b_text.textContent = currentQuizData.b;
  c_text.textContent = currentQuizData.c;
  d_text.textContent = currentQuizData.d;
}

function getSelected() {
  const answers = document.querySelectorAll('input[name="answer"]');
  let selected;
  answers.forEach((answer) => {
    if (answer.checked) {
      selected = answer.value;
    }
  });
  return selected;
}

function deselectAnswers() {
  const answers = document.querySelectorAll('input[name="answer"]');
  answers.forEach(answer => answer.checked = false);
}

answerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const selectedAnswer = getSelected();

  if (selectedAnswer) {
    if (selectedAnswer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      questionEl.textContent = `You scored ${score}/${quizData.length}!`;
      answerForm.style.display = 'none';
    }
  } else {
    resultEl.textContent = "Please select an answer!";
  }
});

loadQuiz();
