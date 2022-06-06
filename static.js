

const display = document.getElementById("display");
let num1 = "";
let num2 = "";
let op = "";


function press(num) {
    num1 += num;
    display.innerHTML = num1;
}

function setOP(key) {
    op = key;
    num2 = num1;
    num1 = "";
}

function clr() {
    num1 = "";
    num2 = "";
    op = "";
    display.innerHTML = "0";
}

function calculate() {
    let a = parseFloat(num2);
    let b = parseFloat(num1);
    let res = 0;
    switch (op) {
        case "+":
            res = a + b;
            break;
        case "-":
            res = a - b;
            break;
        case "*":
            res = a * b;
            break;
        case "/":
            res = a / b;
            break;}
            
            num1 = res;
            op = "";
            display.innerHTML = res;
}


/*

const display = document.getElementById("display");
let num1 = "";
let num2 = "";
let op = "";

function press(num) {
    let num = num1;
    num1 = display.innerHTML;
}

function setOP(op) {
    let op = "";
    let num2 = num1;
    display.innerHTML = "";
}

function clr(){
    display.innerHTML="0"
}

function calculate() {
    num2 = a
    num1 = b
    result = res
    switch (
        case:
            a + b = res;
            break;
        case:
            a - b = res;
            break;
        case:
            a / b = res;
            break;
        case:
            a * b = res;
            break;
        display.innerHTML = res;
    )
} */