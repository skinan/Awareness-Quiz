$(document).ready(function () {
    start(questionNumber);

    $(".submit-answer").on("click", function (event) {

        var userAnswer = parseInt($(this).attr("id"));
        answerCheck(userAnswer);

        setTimeout(function () {
            $(".submit-answer").removeClass("correctStyle incorrectStyle");
            start(questionNumber);
        }, 800);

        questionNumber++;
    });

});

var questionNumber = 0,
    totalCorrect = 0,
    optionFinal = 0;

var allQuestions = [
    {
        question: "Wash your hands with soap and water at for at least ______",
        choices: ["1 Second", "5 Seconds", "20 - 30 Seconds", "10 Minutes"],
        answer: 2
    }
    , {
        question: "What is forbidden for now to stop spreading the virus?",
        choices: ["Sleeping", "Eating Foods", "Shaking Hands & Hugging", "Wearing masks"],
        answer: 2
    }
    , {
        question: "What should you do now to prevent the virus from spreading in community?",
        choices: ["Stay At Home", "Roaming Around Unnecessarily", "Visit Relatives Houses",
            "Go On Party With Friends"],
        answer: 0
    }
    , {
        question: "Don't touch you face, nose, eyes without _________",
        choices: ["Dirty Hands", "Cleaning Hands", "Having Food", "Going Outside"],
        answer: 1
    }
];

// continue with next question or end
var start = function (questionNumber) {
    $('h2').hide().fadeIn(800);

    if (questionNumber !== allQuestions.length) {
        question(questionNumber);
    } else {
        end();
    }
};

// show question and possible answers
function question(questionNum) {
    $("h3").text("Question No: " + (questionNum + 1));
    $("h2").text(allQuestions[questionNum].question);

    $.each(allQuestions[questionNum].choices, function (i, answers) {
        $("#" + i).html(answers);
    });
}

function end() {
    $("h3").text("Share it with your friends. Raise awareness!");
    $("ul").hide();
    $("h2").text("You scored " + totalCorrect + " out of " + allQuestions.length + "." + " You are " +
        ((totalCorrect / allQuestions.length) * 100) + "% aware!");
    $("#try-again-container").show();
    $('#share-facebook').attr('href', "https://www.facebook.com/dialog/feed?app_id=532398964372093&display=popup&link=" +
        "https://skinan.github.io/Awareness-Quiz/&quote=I scored " +
        totalCorrect + " out of " + allQuestions.length + ". I am "
        + ((totalCorrect / allQuestions.length) * 100) + "%" + " aware! It's your turn now!" + "&redirect_uri=https://facebook.com");
    //jQuery("meta[property='og\\:url']").attr("content", url);
    //$('#mdescription').attr('content', 'my new meta description');
    //$('title').html('my new meta title');
    restart();
}

function restart() {
    $("#try-again").click(function () {
        questionNumber = 0,
            totalCorrect = 0,
            optionFinal = 0;

        start(questionNumber);
        $("#image").hide();
        $("#try-again-container").hide();
        $("h3").fadeIn(400);
        $("ul").fadeIn(400);
    });
}

function answerCheck(userAnswer) {
    var correctAnswer = allQuestions[questionNumber].answer;

    if (userAnswer === correctAnswer) {
        $("#" + userAnswer).addClass("correctStyle");
        totalCorrect++;
    } else {
        $("#" + userAnswer).addClass("incorrectStyle");
        $("#" + correctAnswer).addClass("correctStyle");
    }
}