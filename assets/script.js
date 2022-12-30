// 1 done TODO: make opening page that dexribes the quiz's content breifly
// 2 TODO: make a button on opening page that will change page to start of game
// 3 TODO: make a page with the first question and four possible answers, each clickable
// 4 TODO: make each answer diplay opaque on hover and on click display correct or wrong at bottom of page
// 5 TODO: make timer in corner of page recording how long each question takes
// 6 TODO: make a button at bottom page, only displayed after answer is clicked to move to next question
// 7 TODO: repeat steps 2-6 over 5-10 pages of questions
// 8 TODO: log number of right and wrong questions
// 9 TODO: log amount of time taken on each question
// 10 TODO: determine score based on questions answered correctly
// 11 TODO: diplay score at end of quiz
// 12 TODO: give option to log score with name on highscore page
var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-btn')

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
function startGame() {
    console.log("started")
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer) 
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
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

var questions = [
    {
    question: 'What is the real name of superman?',
    answers: [
        { text: 'Clark Kent', correct: false },
        { text: 'Kent Clark', correct: false },
        { text: 'Calvin Ellis', correct: false},
        { text: 'Kal-El', correct: true}
    ]
}
]