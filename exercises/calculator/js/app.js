const buttons = Array.from(document.getElementsByTagName("button"));
const displayFormula = document.getElementById("calcFormula");
const displayResult = document.getElementById("calcResult");

let calculate = "";
let calculateState = 0;

buttons.forEach( button => {
    if(button.value == "="){
        button.addEventListener("click", calc);
    } else if(button.value == "AC"){
        button.addEventListener("click", deleteCalc);
    } else if(button.value === "backspace"){
        button.addEventListener("click", backspace);
    } else {
        button.addEventListener("click", makeCalc);
    }
})

function makeCalc(){
    if (calculateState === 1 && Number.isInteger(parseInt(this.value))){
        calculate = this.value;
        calculateState = 0;
        displayResult.innerText = "";
    } else if (calculateState === 1 && !Number.isInteger(parseInt(this.value))){
        calculate = eval(calculate);
        calculate += this.value;
        calculateState = 0;
    } else {
        calculate += this.value;
    }

    displayFormula.innerText = calculate;
}

function calc(){
    try{
        calculate = eval(calculate)
        displayResult.innerText = calculate;
        calculateState = 1;

        if(calculate === undefined){
            calculate = 0;
            calc();
        }
    } catch(e) {
        if (e instanceof SyntaxError){
            backspace()
            calc()
        }
    }
}

function deleteCalc(){
    calculate = "";
    displayFormula.innerText = "";
    displayResult.innerText = "";
}

function backspace(){
    try{
        calculate = calculate.slice(0, -1);
        displayFormula.innerText = calculate;
    } catch (e) {
        calculate = displayFormula.innerText;
        backspace();
    }
}