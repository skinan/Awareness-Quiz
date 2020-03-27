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
        question: "Wash your hands with soap and water for at least _____ every time",
        choices: ["1 Second", "5 Seconds", "20 - 30 Seconds", "10 Minutes"],
        answer: 2
    }
    , {
        question: "What is forbidden to prevent the virus from spreading?",
        choices: ["Sleeping", "Eating foods", "Shaking hands & hugging", "Wearing masks"],
        answer: 2
    }
    , {
        question: "What is your duty to prevent the virus from spreading in  your community or locality?",
        choices: ["Staying at home & keeping physical distance from each other", "Roaming around unnecessarily",
            "Visiting relatives' houses",
            "Doing party with friends"],
        answer: 0
    }
    , {
        question: "Don't touch your face, nose, eyes with _________",
        choices: ["Sleeping", "Unclean hands", "Having food", "Clean hands"],
        answer: 1
    },
    {
        question: "Which of these is not a trusted news source?",
        choices: ["WHO(World Health Organization)", "Verified Government Sources", "Verified International Sources",
            "Unverified Social Media Page"],

        answer: 3
    },
    {
        question: "What is the minimum length of self-quarantine for all to prevent COVID-19 from spreading?",
        choices: ["1 Day", "10 Hours", "14 Days",
            "5 Minutes"],

        answer: 2
    },
    {
        question: "What is meant by Social Distancing?",
        choices: ["Maintaining proper physical distance from everyone", "Blocking people at social websites",
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
        choices: ["Going outside to have a walk", "Start doing panic", "Keep distance from others and seek proper medical help",
            "Spend quality time with family members"],

        answer: 2
    },
    {
        question: "How can you contribute in the fight against the virus?",
        choices: ["Not following instructions","Going outside & creating crowd", "Staying at home & " +
        "following the instructions of the government & the health organizations properly",
            "Believing in misconceptions about the virus"],

        answer: 2
    },
    {
        question: "What you should not do?",
        choices: ["Washing hands frequently with soap & water or hand sanitizer", "Wearing masks outside home", "Use a tissue or cover face " +
        "with elbow while sneezing and coughing",
            "Sneeze on other person or open-air"],

        answer: 3
    },
    {
        question: "How to confirm the presence of COVID-19 in anyone's body?",
        choices: ["Proper medical test by verified authority", "Asking your best friend", "Asking your neighbour",
            "Through discussion with random persons in social media"],

        answer: 0
    },
    {
        question: "The virus effected person should be kept __________",
        choices: ["In isolation & proper medical treatment", "With healthy people", "With other effected people",
            "With famliy & friends"],

        answer: 0
    },
    {
        question: "What you should not do?",
        choices: ["Cleaning & disinfecting frequently touched objects", "Boiling your food properly while cooking",
            "Following proper health instructions given by verified health organisations",
            "Not maintaining cleanliness and hygiene "],

        answer: 3

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
        Math.floor(((totalCorrect / allQuestions.length) * 100)) + "% aware!");
    $("#try-again-container").show();
    $('#share-facebook').attr('href', "https://www.facebook.com/dialog/feed?app_id=532398964372093&display=popup&link=" +
        "https://skinan.github.io/Awareness-Quiz/&quote=I scored " +
        totalCorrect + " out of " + allQuestions.length + ". I am "
        + Math.floor(((totalCorrect / allQuestions.length) * 100)) + "%" + " aware! It's your turn now!" + "&redirect_uri=https://facebook.com");

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