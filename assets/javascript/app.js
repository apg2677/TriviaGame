var q;
var answer;
var score = 0;
var next = 0;
var t = 10;

var model = [{
    Question: "What is georges middle name?",
    Answers: ["Bob", "John", "Luis", "Phil"],
    Correct: 2
}, {
    Question: "Which president was martin van buren?",
    Answers: ["Eighth", "First", "Third", "Tenth"],
    Correct: 0
},
{
    Question: "Who is jerry's worst enemy",
    Answers: ["Kramer", "George", "The Drake", "Newman"],
    Correct: 3
}
    , {
    Question: "Which famous baseball player does elaine date?",
    Answers: ["Mike Schmidt", "Joe Dimagio", "Jackie Robison", "Keith Hernandez"],
    Correct: 3
},
{
    Question: "What company did george pretend to apply for?",
    Answers: ["Vandelay Industries", "Cinnabon", "Google", "Apple"],
    Correct: 0
},
{
    Question: "What job does george pretend to be?",
    Answers: ["Architect", "Teacher", "Policeman", "Attorney"],
    Correct: 0
}
];
var max = model.length;





$(document).ready(function () {

    Initialize();
});



function Initialize() {
    GenerateQuestion(next);
    $("#start").click(QuizTimer);
    $("#stop").click(StopTimer);
    $("#btnSubmit").click(CheckAnswer);
    $("#restart").click(Restart);
}

function GenerateQuestion(q) {


    $("#question").text(model[q].Question);
    for (var i = 0; i < model[q].Answers.length; i++) {
        var tempAnswer = model[q].Answers[i];
        var choiceInput = "<input type=\"radio\" name=\"answer\" value=\"" + tempAnswer + "\">" + tempAnswer + "</input>";
        $("#answerChoice").append(choiceInput);
    }
    answer = model[q].Answers[model[q].Correct];
    console.log(answer);
}

function QuizTimer() {
    t = 10;
    q = setInterval(function () {
        $("#Timer").text(t);
        t--;
        CheckTimer();
    }, 1000);
}

function CheckTimer() {
    if (t < 1) {
        next++;
        t = 10;
        $("#answerChoice").empty();
        $("#question").empty();
        GenerateQuestion(next);
    }
}

function StopTimer() {
    clearInterval(q);
}

function ResetTimer() {
    clearInterval(q);
    QuizTimer();
}

function CheckAnswer() {
    var radioValue = $("input[name='answer']:checked").val();
    if (radioValue === answer) {
        console.log("Correct!");
        score++;
        CorrectAlert();
        ResetTimer();
        $("#score").text(score);
    }
    else {
        console.log("Incorrect!");
        WrongAlert();
        ResetTimer();
    }
    $("#answerChoice").empty();
    $("#question").empty();
    next++;
    if (next < max) {
        GenerateQuestion(next);
    }
    else {
        StopTimer();
        Restart();
        $("#message").text("Game Over!");
    }

}
function CorrectAlert() {
    $("#message").animate({ opacity: 1 }, 500);
    $("#message").text("Correct!").css("color", "green");
    $("#message").animate({ opacity: 0 }, 1000);

}
function WrongAlert() {
    $("#message").animate({ opacity: 1 }, 500);
    $("#message").text("Wrong!").css("color", "red");
    $("#message").animate({ opacity: 0 }, 1000);

}

function Restart() {
    q=0;
   
    score = 0;
    next = 0;
    t = 10;
  
    $("#answerChoice").empty();
    $("#question").empty();
    Initialize();

    // alert("restart!");
    // score = 0;
    // next = 0;
    // t = 10;
    // q=0;
    // resetTimer();

    // GenerateQuestion();
}