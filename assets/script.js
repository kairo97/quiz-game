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

const questions = [{
    id:0,
    q: "What is the real name of Superman?",
    a: [{text: "A. Clark Kent", isCorrect: false},
        {text: "B. Kent Clark", isCorrect: false},
        {text: "C. Calvin Ellis", isCorrect: false},
        {text: "D. Kal-El", isCorrect: true}]
},
{
    id:1,
    q: "Who killed Bruce Wayne's parents?",
    a:[{ text: "A. the Joker", isCorrect: false},
       { text: "B. A random street thug", isCorrect: false},
       { text: "C. Joe Chill", isCorrect: true},
       { text: "D. Oswald Cobblepot", isCorrect: false}]
},
{
    id:2,
    q: "Who out of the following has not been a Robin?",
    a:[{ text: "A. Dick Grayson", isCorrect: false},
       { text: "B. Damien Wayne", isCorrect: false},
       { text: "C. Jace Fox", isCorrect: true},
       { text: "D. Jason Todd", isCorrect: false}]
},
{
    id:3,
    q: "Dr. Stephen Vincent Strange MD PHD is a doctor of what field of medicine?",
    a:[{ text: "A. Neurosurgery", isCorrect: true},
      { text: "B. Psychology", isCorrect: false},
      { text: "C. Pediatrics", isCorrect: false},
      { text: "D. Cancer Research", isCorrect: false}]
},
{
    id:4,
    q: "Which Marvel character was created specifically as a parody of a DC character?",
    a:[{ text: "A. Nick Fury", isCorrect: false},
       { text: "B. Deadpool", isCorrect: true},
       { text: "C. Black Widow", isCorrect: false},
       { text: "D. Moon Knight", isCorrect: false}]
},
{
    id:5,
    q: "In the Ultimate Spider-Man comic book series written by Brian Michael Bendis what is the origin of the Venom symbiote?",
    a:[{ text: "A. Alien lifeform from an asteroid", isCorrect: false},
       { text: "B. Made on purpose by Dr. Otto Octavius", isCorrect: false},
       { text: "C. A failed cure for cancer", isCorrect: true},
       { text: "D. It remains a mystery", isCorrect: false}]
},
{
    id:6,
    q: "The original Green lantern, Alan Scott has a weakness to what?",
    a:[{ text: "A. The color yellow", isCorrect: false},
       { text: "B. Magic", isCorrect: false},
       { text: "C. Fear Itself", isCorrect: false},
       { text: "D. Wood", isCorrect: true}]
},
{
    id:7,
    q: "the famous character from StarWars Darth Vader was inspired by what comic book character?",
    a:[{ text: "A. Dr. Victor Von Doom", isCorrect: true},
       { text: "B. Iron Man (Tony Stark)", isCorrect: false},
       { text: "C. Black Mask (Roman Sionis)", isCorrect: false},
       { text: "D. Bane (Antonio Diego)", isCorrect: false}]
}
]
var start = true;
function iterate(id) {
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    const question = document.getElementById("question");
    question.innerText = questions[id].q;

    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

    op1.innerText = questions[id].a[0].text;
    op2.innerText = questions[id].a[1].text;
    op3.innerText = questions[id].a[2].text;
    op4.innerText = questions[id].a[3].text;

    op1.value = questions[id].a[0].isCorrect;
    op2.value = questions[id].a[1].isCorrect;
    op3.value = questions[id].a[2].isCorrect;
    op4.value = questions[id].a[3].isCorrect;

    var selected = "";

    op1.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue"; 
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor ="lightgoldenrodyellow" ;
        selected = op1.value;
    })

    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue"; 
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor ="lightgoldenrodyellow" ;
        selected = op2.value;
    })
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue"; 
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor ="lightgoldenrodyellow" ;
        selected = op3.value;
    })
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue"; 
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor ="lightgoldenrodyellow" ;
        selected = op4.value;
    })
    const evaluate = document.getElementsByClassName("evaluate");

    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "true";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "false";
            result[0].style.color = "red";
        }
    })
}
if (start) {
    iterate("0");
}

const next = document.getElementsByClassName ('next')[0];
var id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    }
})

