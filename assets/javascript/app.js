$(document).ready(function(){

  
  $("#start-button").on("click", gameState.startTimer);

});


var gameState = {
    timeRemaining : 120,
    startTimer: function() {
    $("#timer").text("Time remaining: " + gameState.timeRemaining);
    setInterval(gameState.countdown, 1000);
    $("#start-page").hide();
    trivia.displayQuestions();
  },
    countdown: function() {
    gameState.timeRemaining--;
    $("#timer").text("Time remaining: " + gameState.timeRemaining);
    if (gameState.timeRemaining === 0) {
      gameState.stopTimer();
      $("#timer").empty();
    }
  },
    stopTimer: function() {
    clearInterval();
    trivia.checkAnswers();
  },
     showEndPage: function(numCorrect, numIncorrect, numUnanswered) {
    $("#end-page").show();
    $("#questions-box").empty();
    $("#timer").empty();
    $("#timer").hide();
    $("#correct-answers").text("right answers: " + numCorrect);
    $("#incorrect-answers").text("wrong answers: " + numIncorrect);
    $("#unanswered").text("missed questions: " + numUnanswered);
  }
}
var questions =
[
  {
    question: "how old is thor? ",
    answers: ["33", "3000", "1500"],
    correct: "1500"
  },

  {
    question: "who was the first avenger?",
    answers: ["iron man", "thor", "captain america"],
    correct: "captain america"
  },
  {
    question: "what is the strongest metal in the MCU?",
    answers: ["vibranium", "unobtainium", "supermetal"],
    correct: "vibranium"
  },
  {
    question: "what is Dr.Stranges first name?",
    answers: ["steven", "richard", "larry"],
    correct: "steven"
  },
  {
    question: "how old is spiderman in Infinity war?",
    answers: ["12", "15", "16"],
    correct: "16"
  },
  {
    question: "what race is Loki?",
    answers: ["Asguardian", "Ice Giant", "Giant"],
    correct: "Ice Giant"
  },
  {
    question: "where is starlord born?",
    answers: ["Florida", "tennesee", "missouri"],
    correct: "missouri"
  },
  {
    question: "what was the last infinity stone to be found?",
    answers: ["soul", "mind", "time"],
    correct: "mind"
  },
  {
    question: "who is captain americas best friend?",
    answers: ["the gym", "falcon", "bucky"],
    correct: "bucky"
  },
  {
    question: "whos the strongest avenger?",
    answers: ["hulk", "thor","spiderman"],
    correct: "thor"
  }
]
var trivia = {
    displayQuestions: function() {
    var divContainer = $("#questions-box");
    var answerGroup = $(".form-check");
    divContainer.append('<h2>Answer the following questions:</h2>');
            
    for (var i = 0; i < questions.length; i++) {

      divContainer.append('<div id="question">' + questions[i].question + '</div>');

      var answer1 = questions[i].answers[0];
      var answer2 = questions[i].answers[1];
      var answer3 = questions[i].answers[2];

      divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer1 + '</label></div>');
      divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer2 + '</label></div>');
      divContainer.append('<div class="form-check"><input class="form-check-input" type="radio" name="radio-group'+i+'" id="radio'+i+'"><label class="form-check-label" id="radio'+i+'label" for="radio'+i+'">' + answer3 + '</label></div>');
    }

    
    var doneButton = '<button class="btn btn-warning" id="done-button" type="submit">Done</button>';
    divContainer.append(doneButton);
    $("#done-button").on("click", gameState.stopTimer);
  },

  
  checkAnswers: function() {
    var correctAnswer;
    var userAnswer;
    var numCorrect = 0;
    var numIncorrect = 0;
    var numUnanswered = 0;

    
    for (var i = 0; i < questions.length; i++) {
      correctAnswer = questions[i].correct;
      userAnswer = $('input[id=radio'+i+']:checked + label').text();

      if (userAnswer === correctAnswer) {
        numCorrect++;
      } else if (userAnswer === "") {
        numUnanswered++;
      } else if (userAnswer !== correctAnswer) {
        {
          numIncorrect++;
        }
      }
    }

    
    gameState.showEndPage(numCorrect, numIncorrect, numUnanswered);
  },
}


