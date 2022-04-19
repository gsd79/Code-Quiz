// DOM element variables
var buttonEl = document.querySelector("#start-btn");
var quizChoiceEl = document.querySelector("#quiz-qst");
var quizItemEl = document.createElement("li");
var timerEl = document.getElementById("timer");
var time= 60;

// array of questions
var quizQuestions = [
    {
        question: "commonly used data types do NOT include",
        answers: {
            1: 'strings',
            2: 'booleons',
            3: 'alerts',
            4: 'numbers',
        },
        correct: '3'
    },
    {
        question: "what is the default behavior called that is used to move declarations to the top of the current scope?",
        answers: {
            1: 'hoisting',
            2: 'arranging',
            3: 'sorting',
            4: 'jumping',
        },
        correct: '1'
    },
    {
        question: "in javascript, what is used in conjunction with HTML to 'react' to certain elements",
        answers: {
            1: 'events',
            2: 'regex',
            3: 'condition',
            4: 'boolean',
        },
        correct: '1'
    },
    {
        question: "in javascript, what element is used to store and manipulate text, usually in multiples?",
        answers: {
            1: 'recorders',
            2: 'arrays',
            3: 'variables',
            4: 'strings',
        },
        correct: '4'
    },
    {
        question: "what is considered the most popular programming language in the world?",
        answers: {
            1: 'swift',
            2: 'HTML',
            3: 'javascript',
            4: 'ruby',
        },
        correct: '3'
    },
    {
        question: "what is the name of the statement that is used to exit or end a loop?",
        answers: {
            1: 'falter statement',
            2: 'break statement',
            3: 'conditional statement',
            4: 'close statement',
        },
        correct: '3'
    },
    {
        question: "commonly used data types do NOT include",
        answers: {
            1: 'strings',
            2: 'booleons',
            3: 'alerts',
            4: 'numbers',
        },
        correct: '2'
    },
    {
        question: "any field declared with the keyword _____ is constant",
        answers: {
            1: 'constant',
            2: 'static',
            3: 'final',
            4: 'const',
        },
        correct: '4'
    },
    {
        question: "the condition of an IF/ELSE statement is enclosed in",
        answers: {
            1: 'curly braces',
            2: 'single quotes',
            3: 'parenthesis',
            4: 'double quotes',
        },
        correct: '3'
    },
    
    {
        question: "arrays in javascript can be used to store ",
        answers: {
            1: 'booleons',
            2: 'numbers and strings',
            3: 'other arrays',
            4: 'all of the above',
        },
        correct: '4'
    },
]

quizItemEl.textContent="hello";

function quizStart () {
    function getQuestions(){}
    function questionChoice(){}
}

function quizStop(){}

function quizTimer () {
    timerEl.textContent = "Time:" + time;

    if (time <= 0) {
        quizStop();
    }
}


buttonEl.addEventListener("click");
quizItemEl.addEventListener("click");