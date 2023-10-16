$(document).ready(function () {
  const resultContent = $("#resultContent");
  const firstNum = $(".firstNum");
  const secondNum = $(".secondNum");
  const operatortShow = $(".operatorShow");

  let firstNumber = "";
  let secondNumber = "";
  let chooseOperator = null;
  let result = null;
  let acceptSecondNumber = false;

  function menimsetmeNomre(num) {
    if (acceptSecondNumber) {
      secondNumber += num;
      secondNum.text(secondNumber).fadeIn(500);
      return;
    }
    firstNumber += num;
    firstNum.text(firstNumber).fadeIn(500);
  }

  function operatorIsi(op) {
    chooseOperator = op;
    acceptSecondNumber = true;
    operatortShow.text(chooseOperator).fadeIn(500);
  }

  function beraberdirEmeliyyati() {
    console.log("----------------");
    console.log("firstNumber", firstNumber);

    console.log("acceptSecondNumber", acceptSecondNumber);
    console.log("chooseOperator", chooseOperator);

    console.log("secondNumber", secondNumber);

    console.log("----------------");
    switch (chooseOperator) {
      case "+":
        result = parseInt(firstNumber) + parseInt(secondNumber);
        break;
      case "-":
        result = parseInt(firstNumber) - parseInt(secondNumber);
        break;
      case "*":
        result = parseInt(firstNumber) * parseInt(secondNumber);
        break;
      case "/":
        result = parseInt(firstNumber) / parseInt(secondNumber);
        break;
      default:
        alert("Error");
    }
    resultContent.text(result).fadeIn(1000);
  }

  function clearIsi() {
    firstNum.fadeOut(100);
    secondNum.fadeOut(100);
    firstNum.fadeOut(100);
    operatortShow.fadeOut(100);
    resultContent.fadeOut(100);

    firstNumber = "";
    secondNumber = "";
    chooseOperator = null;
    result = null;
    acceptSecondNumber = false;
  }

  $(document).on("click", "button", function () {
    const button = $(this);
    const btnValue = button.text();

    console.log(button.hasClass("num"));

    if (button.hasClass("num")) {
      menimsetmeNomre(btnValue);
    } else if (button.hasClass("operator")) {
      operatorIsi(btnValue);
    } else if (button.hasClass("clear")) {
      clearIsi();
    } else {
      beraberdirEmeliyyati();
    }
  });
});
