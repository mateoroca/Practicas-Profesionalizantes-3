class Controller {
  constructor(viewReference, modelReferens) {
    this.innerView = viewReference;
    this.innerModel = modelReferens;

    this.innerView.btn0.addEventListener("click", () => {
      this.onButton0Click();
    });
    this.innerView.btn1.addEventListener("click", () => {
      this.onButton1Click();
    });
    this.innerView.btn2.addEventListener("click", () => {
      this.onButton2Click();
    });
    this.innerView.btn3.addEventListener("click", () => {
      this.onButton3Click();
    });
    this.innerView.btn4.addEventListener("click", () => {
      this.onButton4Click();
    });
    this.innerView.btn5.addEventListener("click", () => {
      this.onButton5Click();
    });
    this.innerView.btn6.addEventListener("click", () => {
      this.onButton6Click();
    });
    this.innerView.btn7.addEventListener("click", () => {
      this.onButton7Click();
    });
    this.innerView.btn8.addEventListener("click", () => {
      this.onButton8Click();
    });
    this.innerView.btn9.addEventListener("click", () => {
      this.onButton9Click();
    });
    this.innerView.btnPoint.addEventListener("click", () => {
      this.onButtonPointClick();
    });
    this.innerView.btnPlus.addEventListener("click", () => {
      this.onButtonPlusClick();
    });
    this.innerView.btnMultiplication.addEventListener("click", () => {
      this.onButtonMultiplicateClick();
    });
    this.innerView.btnSubtraction.addEventListener("click", () => {
      this.onButtonSustractClick();
    });

    this.innerView.btnDivide.addEventListener("click", () => {
      this.onButtonDivideClick();
    });

    this.innerView.btnDelete.addEventListener("click", () => {
      this.onButtonDeleteClick();
    });

    this.innerView.btnEqual.addEventListener("click", () => {
      this.onButtonEqualClick();
    });
  }
  onButton0Click() {
    this.innerView.display.value += "0";
  }
  onButton1Click() {
    this.innerView.display.value += "1";
  }
  onButton2Click() {
    this.innerView.display.value += "2";
  }
  onButton3Click() {
    this.innerView.display.value += "3";
  }
  onButton4Click() {
    this.innerView.display.value += "4";
  }
  onButton5Click() {
    this.innerView.display.value += "5";
  }
  onButton6Click() {
    this.innerView.display.value += "6";
  }
  onButton7Click() {
    this.innerView.display.value += "7";
  }
  onButton8Click() {
    this.innerView.display.value += "8";
  }
  onButton9Click() {
    this.innerView.display.value += "9";
  }
  onButtonPointClick() {
    this.innerView.display.value += ".";
  }
  onButtonPlusClick() {
    this.innerView.display.value += "+";
  }
  onButtonSustractClick() {
    this.innerView.display.value += "-";
  }
  onButtonMultiplicateClick() {
    this.innerView.display.value += "*";
  }
  onButtonDivideClick() {
    this.innerView.display.value += "/";
  }
  onButtonDeleteClick() {
    this.innerView.display.value = this.innerView.display.value.slice(0, -1);
  }

  onButtonEqualClick() {
    let expression = this.innerView.display.value.trim();
    expression = expression.replace(/^0+(?=\d)/, "");

    if (expression != null && expression !== "") {
      const url = `http://localhost:3000/evaluate?expression=${encodeURIComponent(
        expression
      )}`;

      axios
        .post(url)
        .then((response) => {
          const result = response.data;
          this.innerView.display.value = result;
          console.log(response);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      alert("error you can't evaluate empty data");
    }
  }
}

export default Controller;
