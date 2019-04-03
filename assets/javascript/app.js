$(document).ready(function () {
    GenerateQuestion();

    $("#start").click(QuizTimer);
    $("#stop").click(StopTimer)

});



var model = [{
    Question: "What is georges middle name",
    Answers: ["Bob", "John", "Luis", "Phil"],
    Correct: 2
}];
var q;

function GenerateQuestion() {
    $("#question").text(model[0].Question);
    for (var i = 0; i < model[0].Answers.length; i++) {
        var tempAnswer = model[0].Answers[i];
        var choiceInput = "<input type=\"radio\" name=\"answer\" value=\"" + tempAnswer + "\">" + tempAnswer + "</input>";
        $("#answerChoice").append(choiceInput);
    }
    var answer = model[0].Answers[model[0].Correct];
    console.log(answer);
}

function QuizTimer() {
    var t = 10;
     q = setInterval(function() {
        $("#Timer").text(t);
        t--;
    }, 1000);
}

function StopTimer() {
    clearInterval(q);
}