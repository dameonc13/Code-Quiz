
var jumbo = $("#clearJumbo");
var countdown = $("#count");
var container = $(".load");


//button when clicked starts quiz
$("#quiz").on("click", function () {

    clear();
    timer();
    loadQuestions();

});


// function that clears html content 
function clear() {

    $(".clear").empty();
    $(".clear").css("background", "none");
};



//timer countdown for quiz 
function timer() {
    
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
        countdown.text("Timer: " + timeLeft + " seconds remaining");

        if (timeLeft > 0) {
            timeLeft--;
        }

    }, 1000);
}


//prints object from question.js onto index.html
function loadQuestions() {
    var li = $("<ul>");
    var ul1 = $("<li>");
    var ul2 = $("<li>");
    var ul3 = $("<li>")
    var ul4 = $("<li>")
     li.text(questions[0].title);
    ul1.text(questions[0].choices[0]);
    ul2.text(questions[0].choices[1]);
    ul3.text(questions[0].choices[2]);
    ul4.text(questions[0].choices[3]);

 
    container.append(li);
    for (var i = 0; i < 4; i++) {
        var ul1 = $("<li>");
        ul1.text(questions[0].choices[i]);
    
        li.append( ul1);
      }

}