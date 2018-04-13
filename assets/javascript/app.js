function submitAnswers () {
    var total = 5;
    var score = 0;

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
    var answers = ['d','c','d','d','d'];
}