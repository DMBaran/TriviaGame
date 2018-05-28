var total = 5;
var score = 0;

window.onload = function () {
    var oneMinute = 120 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
    
            display.textContent = minutes + ":" + seconds;
    
            if (--timer < 0) {
                timer = 0;
                alert('Times up. Try again')
                window.location.reload();
            }
        }, 1000);
    }
};

function submitAnswers () {

    //Get user input//
    var q1 = document.forms['questionForm']['q1'].value;
    var q2 = document.forms['questionForm']['q2'].value;
    var q3 = document.forms['questionForm']['q3'].value;
    var q4 = document.forms['questionForm']['q4'].value;
    var q5 = document.forms['questionForm']['q5'].value;

    //validation//
    for(var i = 1; i <= total; i++){
        if(eval('q'+i) == null || eval('q'+i) == '') {
            alert('You missed question '+ i);
            return false;
        }
    }

    //set correct answers//
    var answers = ['d','a','d','d','d'];

    //Check answers//
    for(var i = 1; i <= total; i++) {
        if(eval('q'+i) == answers[i - 1]) {
            score++;
        }
    }

    //Display results//
    alert('You scored ' + score + ' out of ' + total);
    window.location.reload();
}