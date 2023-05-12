function setValue(value, display) {
  display.value = display.value + value;
}

function deleteDisplay(display) {
  display.value = "";
}

function evalValues(display) {
  display.value = eval(display.value);
}

let ButtonNumAndOpereitorsList = [];

function startApplication() {
  let calculatorDiv = document.createElement("div");
  calculatorDiv.classList.add("calculator");
  document.body.appendChild(calculatorDiv);

  let outputDiv = document.createElement("div");
  outputDiv.classList.add("ouput");
  calculatorDiv.appendChild(outputDiv);

  let display = document.createElement("input");
  display.classList.add("display");
  display.setAttribute("placeholder", "0");
  display.disabled = true;
  display.type = "text";
  outputDiv.appendChild(display);

  let keys = document.createElement("div");
  keys.classList.add("keys");
  calculatorDiv.appendChild(keys);

  let btn7 = document.createElement("button");
  btn7.classList.add("number-blue");
  btn7.innerText = "7";
  btn7.value = "7";
  keys.appendChild(btn7);

  let btn8 = document.createElement("button");
  btn8.classList.add("number-blue");
  btn8.innerText = "8";
  btn8.value = "8";
  keys.appendChild(btn8);

  let btn9 = document.createElement("button");
  btn9.classList.add("number-blue");
  btn9.innerText = "9";
  btn9.value = "9";
  keys.appendChild(btn9);

  let btnAdd = document.createElement("button");
  btnAdd.classList.add("operation-green");
  btnAdd.innerText = "+";
  btnAdd.value = "+";
  keys.appendChild(btnAdd);

  let btn4 = document.createElement("button");
  btn4.classList.add("number-blue");
  btn4.innerText = "4";
  btn4.value = "4";
  keys.appendChild(btn4);

  let btn5 = document.createElement("button");
  btn5.classList.add("number-blue");
  btn5.innerText = "5";
  btn5.value = "5";
  keys.appendChild(btn5);

  let btn6 = document.createElement("button");
  btn6.classList.add("number-blue");
  btn6.innerText = "6";
  btn6.value = "6";
  keys.appendChild(btn6);

  let btnSubtraction = document.createElement("button");
  btnSubtraction.classList.add("operation-green");
  btnSubtraction.innerText = "-";
  btnSubtraction.value = "-";
  keys.appendChild(btnSubtraction);

  let btn3 = document.createElement("button");
  btn3.classList.add("number-blue");
  btn3.innerText = "3";
  btn3.value = "3";
  keys.appendChild(btn3);

  let btn2 = document.createElement("button");
  btn2.classList.add("number-blue");
  btn2.innerText = "2";
  btn2.value = "2";
  keys.appendChild(btn2);

  let btn1 = document.createElement("button");
  btn1.classList.add("number-blue");
  btn1.innerText = "1";
  btn1.value = "1";
  keys.appendChild(btn1);

  let btnMultiplication = document.createElement("button");
  btnMultiplication.classList.add("operation-green");
  btnMultiplication.innerText = "*";
  btnMultiplication.value = "*";
  keys.appendChild(btnMultiplication);

  let btn0 = document.createElement("button");
  btn0.classList.add("number-blue");
  btn0.innerText = "0";
  btn0.value = "0";
  keys.appendChild(btn0);

  let btnPoint = document.createElement("button");
  btnPoint.classList.add("number-blue");
  btnPoint.innerText = ".";
  btnPoint.value = ".";
  keys.appendChild(btnPoint);

  let btnEqual = document.createElement("button");
  btnEqual.classList.add("equal");
  btnEqual.innerText = "=";
  btnEqual.value = "=";
  keys.appendChild(btnEqual);

  let btnDivide = document.createElement("button");
  btnDivide.classList.add("operation-green");
  btnDivide.innerText = "/";
  btnDivide.value = "/";
  keys.appendChild(btnDivide);

  let btnDelete = document.createElement("button");
  btnDelete.classList.add("delete");
  btnDelete.innerText = "borrar";
  calculatorDiv.appendChild(btnDelete);

  ButtonNumAndOpereitorsList.push(
    btn0,
    btn1,
    btn2,
    btn3,
    btn4,
    btn5,
    btn6,
    btn7,
    btn8,
    btn9,
    btnAdd,
    btnSubtraction,
    btnDivide,
    btnMultiplication,
    btnPoint
  );

  ButtonNumAndOpereitorsList.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setValue(btn.value, display);
    });
  });

  btnDelete.addEventListener("click", function () {
    deleteDisplay(display);
  });

  btnEqual.addEventListener("click", function () {
    evalValues(display);
  });
}

window.addEventListener("load", startApplication);
