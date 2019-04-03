$(document).ready(function () {
    $("#question").text(model[0].Question);
    for (var i = 0; i < model[0].Answers.length; i++) {
        var tempAnswer = model[0].Answers[i];
        var choiceInput = 
        "<input type=\"radio\" name=\"answer\" value=\"" + tempAnswer + "\">" + tempAnswer + "</input>";
        
        $("#answerChoice").append(choiceInput);

    }
    $("#start").click(QuizTimer);
    $("#stop").click(StopTimer)

});



var model = [{
    Question: "What is georges middle name",
    Answers: ["Bob", "John", "Luis", "Phil"]
}];
var q;

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