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
        question: "Wash your hands with soap and water for at least _____",
        choices: ["1 Second", "5 Seconds", "20 - 30 Seconds", "10 Minutes"],
        answer: 2
    }
    , {
        question: "What is forbidden to prevent the virus from spreading?",
        choices: ["Sleeping", "Eating Foods", "Shaking Hands & Hugging", "Wearing masks"],
        answer: 2
    }
    , {
        question: "What should you do now to prevent the virus from spreading in  your community?",
        choices: ["Stay at home & keep distance from eachother", "Roaming Around Unnecessarily",
            "Visit Relatives Houses",
            "Party With Friends"],
        answer: 0
    }
    , {
        question: "Don't touch you face, nose, eyes without _________ first",
        choices: ["Dirty Hands", "Cleaning Hands", "Having Food", "Going Outside"],
        answer: 1
    },
    {
        question: "Which of these is not a trusted news source?",
        choices: ["WHO(World Health Organisation)", "Verified Government Sources", "Verified International Sources",
            "Unverified Social Media Pages"],

        answer: 3
    },
    {
        question: "What is the minimum period of quarantine for COVID-19?",
        choices: ["1 Day", "10 Hours", "14 Days",
            "5 Minutes"],

        answer: 2
    },
    {
        question: "What is meant by Social Distancing?",
        choices: ["Maintaining physical distancing from everyone", "Blocking people at social websites",
            "Family get together",
            "Vacation trip with friends"],

        answer: 0

    },
    {
        question: "Select one option that you should do as an aware citizen:",
        choices: ["Spread panic", "Spread rumor", "Spread awareness & follow government instructions.",
            "Spread propaganda"],

        answer: 2
    },
    {
        question: "What should you do if you notice the symptoms of COVID-19 in yourself?",
        choices: ["Going outside to have a walk", "Start doing panic", "Stay away from others and seek proper medical help",
            "Spend quality time with family members"],

        answer: 2
    },
    {
        question: "How can you contribute in the fight against virus?",
        choices: ["Not following instructions","Going outside & creating crowd", "Following the instructions of government properly",
            "Believing in misconceptions about the virus"],

        answer: 2
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