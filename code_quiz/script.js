// var with array and objections for questions
var oneSecond = 1000;
var totalSeconds = 60;
var counter = 0;
var totalScore = 0;
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#submit");
var startBtn = document.querySelector("#start");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback")
// declare variables 
function startQuiz() {
    // hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
  
    // un-hide questions section
    questionsEl.removeAttribute("class");
  
    // start timer
    timerId = setInterval(clockTick, 1000);
  
    // show starting time
    timerEl.textContent = time;
  
    getQuestion();
  }
//generating the code with the declared variables
// QUESTION OBJECTS
var question1 = {
    prompt: "How do we add color to text in css",
    a: "color: ",
    b: "text-color: ",
    c: "text: ",
    d: "text_color:",
    answer: "color:"
}

var question2 = {
    prompt: "in which section do we place the javascript ?",
    a: "<head>",
    b: "<body>",
    c: "both",
    d: "neither",
    answer: "<body>"
}

var question3 = {
    prompt: "how do we install the package.json file?",
    a: "npm init",
    b: "npm json ",
    c: "npm package",
    d: "npm package.json",
    answer: "npm init"
}

var question4 = {
    prompt: "how to do you commit a message before pushing to git?",
    a: "git commit -m",
    b: "git message ",
    c: "push message",
    d: "message commit git ",
    answer: "git commit -m"
}

var question5 = {
    prompt: "How do you add a comment in css?",
    a: "//",
    b: "** **",
    c: "!#@$%",
    d: "/*  */",
    answer: "/*  */"
}

// LIST OF QUESTION OBJECTS
var questions = [question1, question2, question3, question4, question5];

// LIST OF USER OBJECTS
var users = [];

//rendering the questions 

// Comparing the choices with the answers to determine if they are correct 

//setting penalty for wrong answers

// question index to determine which question the user is on
// PRESENT QUESTIONS
function presentQuestions(counter) {
    if ((counter < questions.length) && (totalSeconds >= 0)) {

    questionSlide.className = "question-slide-index";

    // QUESTION ELEMENT
    var questionEl = document.createElement("div");
    questionEl.className = "question-element";

    // QUESTION PROMPT
    var questionPrompt = document.createElement("h2");
    questionPrompt.textContent = questions[counter].prompt;
    questionPrompt.className = "question-prompt"
    questionEl.appendChild(questionPrompt);

    // SELECTION A BUTTON
    var selectionA = document.createElement("button");
    selectionA.textContent = questions[counter].a;
    selectionA.className = "button";
    questionEl.appendChild(selectionA);

    // SELECTION B BUTTON
    var selectionB = document.createElement("button");
    selectionB.textContent = questions[counter].b;
    selectionB.className = "button";
    questionEl.appendChild(selectionB);

    // SELECTION C BUTTON
    var selectionC = document.createElement("button");
    selectionC.textContent = questions[counter].c;
    selectionC.className = "button";
    questionEl.appendChild(selectionC);

    // SELECTION D BUTTON
    var selectionD = document.createElement("button");
    selectionD.textContent = questions[counter].d;  
    selectionD.className = "button";  
    questionEl.appendChild(selectionD); 

    // ANSWER
    var answer = questions[counter].answer;
    localStorage.setItem("answer", answer);

    // APPEND TO HTML LINKED SECTION
    questionSlide.appendChild(questionEl);

    // LISTEN FOR CLICK
    questionEl.addEventListener("click", responseHandler);

    }
    else {
        document.getElementById("questionSlide").style.display = "none";
        document.getElementById("countdown").style.display = "none";
        endQuiz();
    }
}
//calculating remaining time
//COUNTDOWN
function countdown() {
    var timerEl = document.getElementById("countdown");
    var timeInterval = setInterval( function() {
    timerEl.textContent = totalSeconds- 1;

        if (totalSeconds > 0)
            totalSeconds--;

        if (totalSeconds <= 0) {
            clearInterval(timeInterval);
            document.getElementById("questionSlide").style.display = "none";
            document.getElementById("countdown").style.display = "none";
            endQuiz()
        }
    }, oneSecond)
}


//creating highscores initials 
function saveHighscore() {
    // get value of input box
    var initials = initialsEl.value.trim();
  
    if (initials !== "") {
      // get saved scores from localstorage, or if not any, set to empty array
      var highscores =
        JSON.parse(window.localStorage.getItem("highscores")) || [];
  
      // format new score object for current user
      var newScore = {
        score: time,
        initials: initials
      };
  
      // save to localstorage
      highscores.push(newScore);
      window.localStorage.setItem("highscores", JSON.stringify(highscores));
  
      // redirect to next page
      window.location.href = "score.html";
    }
  }
//input 

//submit

//Event listener to capture initials and store locally
