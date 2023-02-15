var questions = [
  {
    question: 'What is the real name of Superman?',
    answers: [
      { text: 'Clark Kent', correct: false },
      { text: 'Kent Clark', correct: false },
      { text: 'Calvin Ellis', correct: false },
        { text: 'Kal-El', correct: true}
    ]
},
{
    question: "who killed Bruce Wayne's parents",
    answers: [
        { text: 'The Joker', correct: false },
        { text: 'A random thug', correct: false },
        { text: 'Joe Chill', correct: true },
        { text: 'Oswald Cobblepot', correct: false }
    ]
},
{
    question: 'Dr Stephen Vincent Strange PHD MD is a doctor in what field of medicine?',
    answers: [
        { text: 'Neurosurgery', correct: true },
        { text: 'Pediatrics', correct: false },
        { text: 'Cancer Research', correct: false },
        { text: 'Radiology', correct: false }
    ]
},
{
    question: 'Which of the following characters has never been a Robin?',
    answers: [
        { text: 'Jason Todd', correct: false },
        { text: 'Dick Grayson', correct: false },
        { text: 'Jace Fox', correct: true },
        { text: 'Damien Wayne', correct: false }
    ]
},
{
    question: 'Which Marvel character was created specifically as a parody of an existing DC character?',
    answers: [
        { text: 'Black Widow', correct: false },
        { text: 'Deadpool', correct: true },
        { text: 'Star-Lord', correct: false },
        { text: 'Moon Knight', correct: false }
    ]
},
{
    question: 'The Original Green-Lantern, Alan Scott has a weakness to what?',
    answers: [
        { text: 'The color yellow', correct: false },
        { text: 'Fear itself', correct: false },
        { text: 'Alien Blood', correct: false },
        { text: 'Wood', correct: true }
    ]
},
{
    question: 'In the Ultimate Spider-man comic book series by Brian Michael Bendis, what is the origin of the Venom Symbiote?',
    answers: [
        { text: 'An alien from an asteroid', correct: false },
        { text: 'A failed cure for cancer', correct: true },
        { text: 'An experiment by Otto Octavius', correct: false },
        { text: 'A byproduct of creating nuclear weapons', correct: false }
    ]
},
{
    question: 'What comic book character was the inspiration for famous Star Wars villian Darth Vader?',
    answers: [
        { text: 'Tony Stark (Iron Man)', correct: false },
        { text: 'Roman Sionis (Black Mask)', correct: false },
        { text: 'Dr Victor Von Doom', correct: true },
        { text: 'Slade Wilson (Deathstroke the Terminator)', correct: false }
    ]
}
]
var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var clockElement = document.getElementById('timer');
var win = document.getElementById('correct-score');
var lose = document.getElementById('incorrect-score');
var shuffledQuestions, currentQuestionIndex;
var correctScore = 0;
var incorrectScore = 0;
var isCorrect = false;
var timeLeft;
var timer;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', setNextQuestion);


function startGame() {
    correctScore = 0;
    incorrectScore = 0;
    win.textContent = correctScore;
    lose.textContent = incorrectScore;
    isCorrect = false;
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}
function setNextQuestion() {
  resetState();
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    countDown();
  } else {
    clearInterval(timer);
    questionContainerElement.classList.add('hide');
    startButton.classList.remove('hide');
  }
}
function countDown() {
  timeLeft = 10;
  clockElement.textContent = timeLeft;
  timer = setInterval(function() {
    if (timeLeft > 0) {
      timeLeft--;
      clockElement.textContent = timeLeft;
    } else {
        setNextQuestion();
        incorrectScore++;
      clearInterval(timer);
    }
  }, 1000);
}


function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
  nextButton.classList.add('hide');
}

function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  if (correct) {
    correctScore++;
    win.textContent = correctScore;
  } else {
    incorrectScore++;
    lose.textContent = incorrectScore;
  }
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    clearInterval(timer);
    questionContainerElement.classList.add('hide');
    startButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

