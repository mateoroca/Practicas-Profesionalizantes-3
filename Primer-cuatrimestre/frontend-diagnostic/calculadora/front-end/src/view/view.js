class View {
  constructor() {
    this.calculatorDiv = document.createElement("div");
    this.calculatorDiv.classList.add("calculator");

    this.outputDiv = document.createElement("div");
    this.outputDiv.classList.add("ouput");
    this.calculatorDiv.appendChild(this.outputDiv);

    this.display = document.createElement("input");
    this.display.classList.add("display");
    this.display.setAttribute("placeholder", "0");
    this.display.disabled = true;
    this.display.type = "text";
    this.outputDiv.appendChild(this.display);

    this.keys = document.createElement("div");
    this.keys.classList.add("keys");
    this.calculatorDiv.appendChild(this.keys);

    this.btn7 = document.createElement("button");
    this.btn7.classList.add("number-blue");
    this.btn7.innerText = "7";
    this.btn7.value = "7";
    this.keys.appendChild(this.btn7);

    this.btn8 = document.createElement("button");
    this.btn8.classList.add("number-blue");
    this.btn8.innerText = "8";
    this.btn8.value = "8";
    this.keys.appendChild(this.btn8);

    this.btn9 = document.createElement("button");
    this.btn9.classList.add("number-blue");
    this.btn9.innerText = "9";
    this.btn9.value = "9";
    this.keys.appendChild(this.btn9);

    this.btnPlus = document.createElement("button");
    this.btnPlus.classList.add("operation-green");
    this.btnPlus.innerText = "+";
    this.btnPlus.value = "+";
    this.keys.appendChild(this.btnPlus);

    this.btn4 = document.createElement("button");
    this.btn4.classList.add("number-blue");
    this.btn4.innerText = "4";
    this.btn4.value = "4";
    this.keys.appendChild(this.btn4);

    this.btn5 = document.createElement("button");
    this.btn5.classList.add("number-blue");
    this.btn5.innerText = "5";
    this.btn5.value = "5";
    this.keys.appendChild(this.btn5);

    this.btn6 = document.createElement("button");
    this.btn6.classList.add("number-blue");
    this.btn6.innerText = "6";
    this.btn6.value = "6";
    this.keys.appendChild(this.btn6);

    this.btnSubtraction = document.createElement("button");
    this.btnSubtraction.classList.add("operation-green");
    this.btnSubtraction.innerText = "-";
    this.btnSubtraction.value = "-";
    this.keys.appendChild(this.btnSubtraction);

    this.btn3 = document.createElement("button");
    this.btn3.classList.add("number-blue");
    this.btn3.innerText = "3";
    this.btn3.value = "3";
    this.keys.appendChild(this.btn3);

    this.btn2 = document.createElement("button");
    this.btn2.classList.add("number-blue");
    this.btn2.innerText = "2";
    this.btn2.value = "2";
    this.keys.appendChild(this.btn2);

    this.btn1 = document.createElement("button");
    this.btn1.classList.add("number-blue");
    this.btn1.innerText = "1";
    this.btn1.value = "1";
    this.keys.appendChild(this.btn1);

    this.btnMultiplication = document.createElement("button");
    this.btnMultiplication.classList.add("operation-green");
    this.btnMultiplication.innerText = "*";
    this.btnMultiplication.value = "*";
    this.keys.appendChild(this.btnMultiplication);

    this.btn0 = document.createElement("button");
    this.btn0.classList.add("number-blue");
    this.btn0.innerText = "0";
    this.btn0.value = "0";
    this.keys.appendChild(this.btn0);

    this.btnPoint = document.createElement("button");
    this.btnPoint.classList.add("number-blue");
    this.btnPoint.innerText = ".";
    this.btnPoint.value = ".";
    this.keys.appendChild(this.btnPoint);

    this.btnEqual = document.createElement("button");
    this.btnEqual.classList.add("equal");
    this.btnEqual.innerText = "=";
    this.btnEqual.value = "=";
    this.keys.appendChild(this.btnEqual);

    this.btnDivide = document.createElement("button");
    this.btnDivide.classList.add("operation-green");
    this.btnDivide.innerText = "/";
    this.btnDivide.value = "/";
    this.keys.appendChild(this.btnDivide);

    this.btnDelete = document.createElement("button");
    this.btnDelete.classList.add("delete");
    this.btnDelete.innerText = "borrar";
    this.calculatorDiv.appendChild(this.btnDelete);
  }
}

export default View;
