var q;
var answer;
var score=0;

var model = [{
    Question: "What is georges middle name",
    Answers: ["Bob", "John", "Luis", "Phil"],
    Correct: 2
}];



$(document).ready(function () {
    GenerateQuestion();

    $("#start").click(QuizTimer);
    $("#stop").click(StopTimer)
    $("#btnSubmit").click(CheckAnswer);
});



function GenerateQuestion() {
    $("#question").text(model[0].Question);
    for (var i = 0; i < model[0].Answers.length; i++) {
        var tempAnswer = model[0].Answers[i];
        var choiceInput = "<input type=\"radio\" name=\"answer\" value=\"" + tempAnswer + "\">" + tempAnswer + "</input>";
        $("#answerChoice").append(choiceInput);
    }
    answer = model[0].Answers[model[0].Correct];
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

function CheckAnswer() {
    var radioValue = $("input[name='answer']:checked").val();
    if(radioValue===answer) {
        console.log("Correct!");
        score++;
        $("#score").text(score);
    }
    else {
        console.log("Incorrect!");
    }

}