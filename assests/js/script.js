// DOM element variables
var startEl = document.getElementById("start-btn");
var saveEl = document.getElementById("svscore-btn");
// var restartEl = document.getElementById("restart-btn");
var gameIntro = document.getElementById("game-intro");
var gameBody = document.getElementById("game-body");
var scoreBody = document.getElementById("score-body");


// quiz variables
var question = document.getElementById("question");
var answer = document.getElementById("answer")
var choicesEl = document.getElementById("quiz-choices");
var feedbackEl = document.getElementById("feedback");

var scoreEl = document.getElementById("score-results");
var initialsEl = document.getElementById ("score-save");
let questionArrIndex = 0;

//timer variables
var timerEl = document.getElementById("timer");
var time = 80;
var timerId;

function countDownTimer() {
    time--;
    timerEl.textContent = "time: " + time;
    
    if (time <= 0) {
        quizEnd();        
    }
};

function quizStart() {
    //clear starter elements
    gameIntro.setAttribute("class", "hide");
    // un-hide quiz elements
    gameBody.setAttribute("class", "show");
    // start and show time to count down by one second from 80
    timerId = setInterval(countDownTimer, 1000); 
    // get questions from getQuestions function
    getQuestions()
}


function getQuestions() {
    //TODO: for restarting purposes, start array from beginning
    
    // get first question from array
    var currentQuestion = quizQuestions[questionArrIndex];
    
    // display question
    var questName = document.getElementById("quiz-qst");
    questName.textContent = currentQuestion.question;
    // display question
    var questionNameEl = document.getElementById("quiz-qst");
    questionNameEl.textContent = currentQuestion.question;
    
    // clear previous question choices
    choicesEl.innerHTML = "";
    
    // loop over choices
    currentQuestion.choices.forEach((element, index) =>{
        // create new list element for each newly generated choices
        var choiceOp = document.createElement("li");
        choiceOp.setAttribute("id", "choices");
       

        choiceOp.textContent = index + 1 + ". " + element;

        // event listner for answer choice
        choiceOp.addEventListener("click", function () {
            choiceSelect(quizQuestions, element)
        });

        // display on the page and append to unordered list element
        choicesEl.appendChild(choiceOp);
    });
}
// click on question answer either generate new question or end quiz if final question, and deduct time for answering wrong
function choiceSelect(quizQuestions, choiceOp) {
    // check if user guessed wrong
    if ( choiceOp !== quizQuestions[questionArrIndex].answer) {
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
        // if answer is correct
        feedbackEl.textContent = "YES! You're so smart!";
    }
    
    // display feedback for one second
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
    
    // increment through array
        questionArrIndex++;
    
    // check if we've run out of questions
    if (questionArrIndex === quizQuestions.length) {
        quizEnd();
    } else {
        getQuestions();
    }
}

function quizEnd() {
    clearInterval(timerId);
    // hide game
    gameBody.setAttribute("class", "hide");
    // un-hide score elements
    scoreBody.setAttribute("class", "show");
    
    scoreEl.textContent = "game over! your score is: " + time;
}

function scoreStorage() {
    //set score and initials to localstorage
    
    localStorage.setItem(initialsEl.value, time)
    
    }
    



startEl.addEventListener("click", quizStart);
saveEl.addEventListener("click", scoreStorage);
// restartEl.addEventListener("click", quizStart);