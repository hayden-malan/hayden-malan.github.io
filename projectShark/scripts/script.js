function check() {

var question1 = document.sharkquiz.question1.value;
var question2 = document.sharkquiz.question2.value;
var question3 = document.sharkquiz.question3.value;
var correct = 0;

    if (question1 == "Great White") {
        correct++;
    }

    if (question2 == "Bruce") {
        correct++;
    }

    if (question3 == "Bruce") {
        correct++;
    }

var messages = ["Great job!", "Luke warm.", "Hopeless."];
var pictures = ["images/greatshark.gif", "images/lukewarmshark.gif", "images/hopelessshark.gif"];

var range;

    if (correct < 1) {
        range = 2;
    }

    if (correct > 0 && correct < 3) {
        range  = 1;
    }

    if (correct > 2) {
        range = 0;
    }
    
    
    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[range];
}