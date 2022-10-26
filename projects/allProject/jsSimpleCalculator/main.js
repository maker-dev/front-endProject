const display = document.querySelector(".display");
let displayNumber = () => {
    let numbers = document.querySelectorAll(".numbers");
    numbers.forEach((number) => {
        number.addEventListener("click",function () {
            display.textContent += number.textContent;
        })
    })
}

let displayClear = () => {
    let clearC = document.querySelector(".clear");
    clearC.addEventListener("click",function () {
        display.textContent = "";
    })
}


let displayOperation = () => {
    let operations = document.querySelectorAll(".operations");
    operations.forEach((operation) => {
        operation.addEventListener("click",function () {
            if (display.textContent !== "" && display.textContent[display.textContent.length-1] !== ".") {
                if ((display.textContent[display.textContent.length-1] == "+" || display.textContent[display.textContent.length-1] == "-" || display.textContent[display.textContent.length-1] == "÷" || display.textContent[display.textContent.length-1] == "×")) {
                    display.textContent = display.textContent.substring(0,display.textContent.length-1)+operation.textContent;
                } else {
                    display.textContent += operation.textContent;
                }
            } 
        })
    })
}


let displayComma = () => {
    let comma = document.querySelector(".comma");
    comma.addEventListener("click",function () {
        if (display.textContent !== "" && display.textContent[display.textContent.length-1] != comma.textContent) {
            if (display.textContent[display.textContent.length-1] !== "+" && display.textContent[display.textContent.length-1] !== "-" && display.textContent[display.textContent.length-1] !== "÷" && display.textContent[display.textContent.length-1] !== "×") {
                for (let i = 0; i < display.textContent.length; i++) {
                    if (display.textContent[i] == "+" || display.textContent[i] == "-" || display.textContent[i] == "÷" || display.textContent[i] == "×") {
                        let checkComma = /(\+|-|÷|×)\d+$/g;
                        if (checkComma.test(display.textContent)) {
                            display.textContent += ".";
                        }
                        break;
                    }
                }
                let checkComma = /^\d+$/g;
                if (checkComma.test(display.textContent)) {
                    display.textContent += ".";
                }
            }
        }
    })
}

let displayResult = () => {
    let equal = document.querySelector(".equal");
    equal.addEventListener("click",function () {
        let forResult = ["+","-","÷","×","."];
        let makeResult = true;
        if (display.textContent !== "" ) {
            for (let i = 0; i < forResult.length; i++) {
                if (display.textContent[display.textContent.length-1] === forResult[i]) {
                    makeResult = false;
                }
            }
            if (makeResult === true) {
                let result = "";
                for (let i = 0; i < display.textContent.length; i++) {
                    if (display.textContent[i] === "÷") {
                        result += "/";
                    } else if (display.textContent[i] === "×") {
                        result += "*";
                    } else {
                        result += display.textContent[i];
                    }
                }
                display.textContent = eval(result);
            }
        }
        makeResult = true;
    })
}

displayNumber();

displayComma();

displayOperation();

displayClear();

displayResult();




