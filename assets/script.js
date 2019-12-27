
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
  //  $(".clear").css("background-image", "none");
};



//timer countdown for quiz 
function timer() {
    
    var timeLeft = 75;
    var timeInterval = setInterval(function () {
        countdown.text("Time: " + timeLeft  );

        if (timeLeft > 0) {
            timeLeft--;
        }

    }, 1000);
}


//prints object from question.js onto index.html
function loadQuestions() {
    var li = $("<ul>");
  
     li.text(questions[0].title);
    
     var hr = $("<hr>");
   var classbtn = [ "btn", "btn-primary", "btn-lg"];


    container.append(li);
    li.append(hr);
    
    for (var i = 0; i < 4; i++) {
        var ul1 = $("<ol>");
        var btn = $("<button>");
        var br = $("<br>")
        btn.text(questions[0].choices[i]);
       
        ul1.append( br , btn   );
        li.append( ul1 );
        $('button').addClass('btn btn-warning btn-sm ');
        
      }

}
