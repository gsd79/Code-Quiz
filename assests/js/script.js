// DOM element variables
var buttonEl = document.getElementById("start-btn");
var gameIntro = document.getElementById("game-intro");
var gameBody = document.getElementById("game-body");

// quiz variables
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("quiz-choices");
var feedbackEl = document.getElementById("feedback");
let currentQuestionIndex = 0;

//timer variables
var timerEl = document.getElementById("timer");
var time = 60;
var timerId;


function quizStart() {
    //clear starter elements
    gameIntro.setAttribute("class", "hide");
    // un-hide quiz elements
    gameBody.setAttribute("class", "show");
    // start and show time to count down by one second from 60
    timerId = setInterval(countDownTimer, 1000);
    // get questions from getQuestions function
    getQuestions()
}
function getQuestions() {
    // get question from array
    var currentQuestion = quizQuestions[currentQuestionIndex];

    // display question
    var questTitleEl = document.getElementById("quiz-qst");
    questTitleEl.textContent = currentQuestion.question;

    // clear previous question choices
    choicesEl.innerHTML = "";

    // loop over choices
    currentQuestion.choices.forEach((element, index) =>{
        // create new list element for each newly generated choices
        var choiceNode = document.createElement("li");
        choiceNode.setAttribute("id", "choices");
        // choiceNode.setAttribute("value", choice);

        choiceNode.textContent = index + 1 + ". " + element;

        // event listner for answer choice
        choiceNode.addEventListener("click", function () {
            questionClick(quizQuestions, element)
        });

        // display on the page and append to unordered list element
        choicesEl.appendChild(choiceNode);
    });
}

// click on question answer either generate new question or end quiz if final question, and deduct time for answering wrong
function questionClick(quizQuestions, answer) {
    // check if user guessed wrong
    if ( answer !== quizQuestions[currentQuestionIndex].answer) {
        // penalize 10 seconds from time/score
        time -= 10;
        // if, when time is penalized, and will take time to bellow zero, make time equal zero
        if (time < 0) {
            time = 0;
        }
        // display new time on page
        timerEl.textContent = "time:" + time;
        // feedback response should chosen question be wrong
        feedbackEl.textContent = "Gonna be a no from me, dawg";
    } else {
        // else answer is correct
        feedbackEl.textContent = "YES! You're so smart!";
    }

    // display feedback for one second
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    // move to next question
    currentQuestionIndex++;

    // check if we've run out of questions
    if (currentQuestionIndex === quizQuestions.length) {
        quizEnd();
    } else {
        getQuestions();
    }
}
function countDownTimer() {
    time--;
    timerEl.textContent = "time: " + time;

    if (time <= 0) {

        quizEnd();
        
    }
};

function quizEnd() {
    clearInterval(timerId);
    // TODO: what happens when quiz ends?
    // localstorage option, initials and score. score = time remaining on timer if any
    // 
}



buttonEl.addEventListener("click", quizStart);
// quizItemEl.addEventListener("click", questionChoice);