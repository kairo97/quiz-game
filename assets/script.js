// 1 done. make opening page that dexribes the quiz's content breifly
// 2 done.  make a button on opening page that will change page to start of game
// 3 done. make a page with the first question and four possible answers, each clickable
// 4  make each answer diplay opaque on hover and on click display correct or wrong at bottom of page
// 5 make timer in corner of page recording how long each question takes
// 6 done make a button at bottom page, only displayed after answer is clicked to move to next question
// 7 done repeat steps 2-6 over 5-10 pages of questions
// 8 TODO: log number of right and wrong questions
// 9 TODO: log amount of time taken on each question
// 10 TODO: determine score based on questions answered correctly
// 11 TODO: diplay score at end of quiz
// 12 TODO: give option to log score with name on highscore page
var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-btn');
var clockElement = document.getElementById('timer');
var win = document.getElementById('correct-score');
var lose = document.getElementById('incorrect-score');
var shuffledQuestions, currentQuestionIndex;
var correctScore = 0;
var inCorrectScore = 0;
var isCorrect = false;
var timer;
var timerCount;
var playerChoice;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function countDown() {
    timeLeft = 10;
    var timeIntreval = setInterval(function () {
        if (timeLeft > 0) {
             clockElement.textContent = timeLeft;
             timeLeft --;
        } else if (timeLeft === 0){ 
            clearInterval(timeIntreval);
        }
    
    }, 1000);
    
}
function startGame() {
    timerCount = 10;
    isCorrect = false;
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion();
    
    
}
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    setCorrectScore()
    setinCorrectScore()
    countDown()
    
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            addPoint()
        } else {
            losePoint()
        }
        button.addEventListener('click', selectAnswer) 
        answerButtonsElement.appendChild(button)
        
    },)
}

function resetState() {
        nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
    
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
function setCorrectScore() {
    correctScore.textContent = correctScore;
    localStorage.setItem('correct-score', correctScore);
}
function setinCorrectScore() {
    inCorrectScore.textContent = inCorrectScore;
    localStorage.setItem('incorrect-score', inCorrectScore);
}
function addPoint() {
    var storedPoints = localStorage.getItem('correct-score'); 
    if (storedPoints === null) {
        correctScore = 0;
    } else {
        correctScore = storedPoints ++;
    }
    win.textContent = correctScore;
}
function losePoint() {
    var storedLoss = localStorage.getItem('inCorrect-score');
    if (storedLoss === null) {
        inCorrectScore = 0;
    } else {
        inCorrectScore = storedLoss ++;
    }
    lose.textContent = inCorrectScore;
    setNextQuestion();

}

var questions = [
    {
        question: 'What is the real name of Superman?',
        answers: [
        { text: 'Clark Kent', correct: false },
        { text: 'Kent Clark', correct: false },
        { text: 'Calvin Ellis', correct: false},
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
