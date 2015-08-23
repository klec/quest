/**
 * Created by klec on 8/22/15.
 */
 var steps = {
    1:{message: "Меня видно?", img:"", buttons:{yes:true,no:true,enter:false}, answers:{2: "yes", 3: "no"}},
    2:{message: "Да? Я думал только мои сообщения, ну ладно. Привет!", img:"", buttons:{yes:false,no:false,enter:true}, answers: {4:"*"}},
    3:{message: "Хорошо. Привет!", img:"", buttons:{yes:false,no:false,enter:true}, answers: {4:"*"}},
    4:{message: "Хочешь поучавствовать в квесте?", img:"", buttons:{yes:true,no:true,enter:false}, answers: {5:"*"}},
    5:{message: "Я тоже, но еще рано", img:"", buttons:{yes:false,no:false,enter:true}, answers: {6:"*"}},
    6:{message: "Все еще рано!", img:"", buttons:{yes:false,no:false,enter:true}, answers: {6:"*"}},
    7:{message: "Хорошо. Привет!", img:"", buttons:{yes:false,no:false,enter:true}, answers: {4:"*"}},
    8:{message: "Хорошо. Привет!", img:"", buttons:{yes:false,no:false,enter:true}, answers: {4:"*"}},
    9:{message: "Хорошо. Привет!", img:"", buttons:{yes:false,no:false,enter:true}, answers: {4:"*"}}
};

var log = document.getElementById("log");
var yes = document.getElementById("yes");
var no = document.getElementById("no");
var enter = document.getElementById("enter");
var answer = document.getElementById("answer-text");

enter.onclick = processAnswer;
yes.onclick = doAnswer;
no.onclick = doAnswer;
//var acceptableAnswer = "*";
var currentStep = 1;

function showStep(id){
    addMessage(steps[id].message, "question");
    acceptableAnswer = steps[id].answers;
    currentStep = id;
    showButtons(steps[id].buttons);
}

function showButtons(buttons){
    yes.style.display = (buttons.yes)?"":"none";
    no.style.display = (buttons.no)?"":"none";
    enter.style.display = (buttons.enter)?"":"none";
}

function doAnswer() {
    answer.value = this.value;
    processAnswer();
}
function processAnswer() {
    if(answer.textLength>0) {
        addMessage(answer.value, "answer");
    }
    for(var i= 1; i< 20; i++) {
        if (steps[currentStep].answers[i] == "*" || answer.value == steps[currentStep].answers[i]) {
            showStep(i);
            break;
        }
    }
    answer.value = "";
}

function addMessage(text, type){
    var div = document.createElement("DIV");
    var message = document.createTextNode(text);

    div.appendChild(message);
    div.className = type;
    log.appendChild(div)
}
window.onload = showStep(currentStep);