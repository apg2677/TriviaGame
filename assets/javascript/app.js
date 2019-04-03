var q;
var answer;
var score = 0;
var next = 0;

var model = [{
    Question: "What is georges middle name?",
    Answers: ["Bob", "John", "Luis", "Phil"],
    Correct: 2
}, {
    Question: "Which president was martin van buren?",
    Answers: ["Eighth", "First", "Third", "Tenth"],
    Correct: 0
}
];
var max = model.length;





$(document).ready(function () {
    
    GenerateQuestion(next);

    $("#start").click(QuizTimer);
    $("#stop").click(StopTimer)
    $("#btnSubmit").click(CheckAnswer);
});



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
    var t = 10;
    q = setInterval(function () {
        $("#Timer").text(t);
        t--;
    }, 1000);
}

function StopTimer() {
    clearInterval(q);
}

function CheckAnswer() {
    var radioValue = $("input[name='answer']:checked").val();
    if (radioValue === answer) {
        console.log("Correct!");
        score++;
        $("#score").text(score);
    }
    else {
        console.log("Incorrect!");
    }
    $("#answerChoice").empty();
    $("#question").empty();
    next++;
    if(next < max)
    {
        GenerateQuestion(next);
    }   
    else {
        $("#message").text("Game Over!");
    }

}