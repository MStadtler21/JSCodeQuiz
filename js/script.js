var startBtn = document.querySelector("#start-button");
var timeEl = document.querySelector("#timer");
var secondsLeft = 75;
var score = 0;
var questions = [
    {
        question: "What is a Boolean?",
        answers: ["A true or false statement", "A set of numbers", "A line of text", "A pack of kittens"],
        correctAns:  "A true or false statement"
    },
    {
        question: "What is Front-End Development?",
        answers: ["The mechanics of a website", "Developing grills for sports cars", "The visual aspect of a website", "The storage of data in a website"],
        correctAns:  "The visual aspect of a website"
    },
    {
        question: "What company created JavaScript?",
        answers: ["Microsoft", "Apple", "Starbucks", "NetScape"],
        correctAns:  "NetScape"
    },
];

var j = 0;
var interval;

function createQuestion() {
    document.querySelector("#questions").innerHTML = "";
    document.querySelector("#quizBox").setAttribute("style", "display: block")
    startBtn.setAttribute("style", "display: none")
    var q = questions[j].question
    var ans = questions[j].answers
    var questionPart = document.createElement("h2")
    questionPart.textContent = q;
    document.querySelector("#questions").appendChild(questionPart)

    for (var i = 0; i < ans.length; i++) {
        var ansBtn = document.createElement("button")
        ansBtn.setAttribute("value", ans[i])
        ansBtn.textContent = ans[i]
        document.querySelector("#questions").appendChild(ansBtn)
        ansBtn.addEventListener("click", checkAnswer)
    }
};

function checkAnswer(event) {
    var answer = event.target.textContent
    if (answer === questions[j].correctAns){
        console.log(secondsLeft)
        alert("correct")
    } else {
        secondsLeft-=10   
        console.log(secondsLeft)
        alert("incorrect")
    }
    if(j < questions.length - 1) {
        j++
        createQuestion()
    } 
    else {
        endGame()
    }
};

function counter () { 
    interval = setInterval(function() {
        document.querySelector("#timer")
        secondsLeft--
        if(secondsLeft===0) {
            clearInterval(interval)
        } else {
            timeEl.textContent = secondsLeft
            return secondsLeft
        }
    }, 1000)
};

function endGame() {
    clearInterval(counter)

    var highScoreList = JSON.parse(localStorage.getItem("highscores")) || [];

    var yourScore = document.getElementById("results");
    yourScore.textContent = secondsLeft;
    var userScore = JSON.stringify(yourScore.textContent);
    var highScoreName = prompt("What's your name?");
   
    var userId = {
        score: userScore,
        initials: highScoreName
    }

    highScoreList.push(userId)

    localStorage.setItem("highscores", JSON.stringify(highScoreList))
};



startBtn.addEventListener("click", createQuestion);
startBtn.addEventListener("click", counter);