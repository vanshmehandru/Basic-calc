let display = document.getElementById("display");
let current = ""; // stores the current input

function press(val) {
    if (val === "AC") {
        current = "";
        display.value = "";
    } else if (val === "C") {
        current = current.slice(0, -1);
        display.value = current;
    } else if (val === "+/-") {
        if (current) {
            if (current.startsWith("-")) {
                current = current.slice(1);
            } else {
                current = "-" + current;
            }
            display.value = current;
        }
    } else {
       
        if (val === "." && current.split(/[\+\-\*\/]/).pop().includes(".")) {
            return;
        }
        current += val;
        display.value = current;
    }
}

function calculate() {
    try {
        let expression = current.replace(/×/g, "*").replace(/÷/g, "/");
        let result = eval(expression);
        display.value = result;
        current = result.toString();
    } catch {
        display.value = "Error";
        current = "";
    }
}
