//variables
var number1;
var number2;
var operator;
var result;
var confirmNumber1 = false;
var confirmOperator = false;
var confirmNumber2 = false;

function enterNumber1() {
  
    // Choose the first number
    number1 = document.getElementById("number1Input").value;
  
    if (number1 == "" || number1 == "+" || number1 == "-") {
      number1 = 0;
    }	

    //the text that will appear on the screen
    var display1 = "The first number is: " + number1; 
    document.getElementById("display1").textContent = display1;
    confirmNumber1 = true;
    calculateWhenConfirmed();

}

function enterNumber2() {
  
    // Choose the second number
    number2 = document.getElementById("number2Input").value;
    if (number2 == "" || number2 == "+" || number2 == "-") {
      number2 = 0;
    }

    //the text that will appear on the screen
    var display2 = "The second number is: " + number2;
    document.getElementById("display2").textContent = display2;
    confirmNumber2 = true;
    calculateWhenConfirmed();

}

function enterOperator() {	

    // Choose the operator +, -, * or /
    operator = document.getElementById("operatorInput").value;

    //the text that will appear on the screen
    var display3 = "The operator is: " + operator;
    document.getElementById("display3").textContent = display3;
    confirmOperator = true;
    calculateWhenConfirmed();
}

function calculateResult() {

    var display4; //the text that will appear on the screen

    if (operator === "+") {
        //sum
        result = parseFloat(number1) + parseFloat(number2);
        display4 = "The result of the sum is: " + result;
        document.getElementById("display4").textContent = display4;

    } else if (operator === "-") {
      
        //subtraction
        result = parseFloat(number1) - parseFloat(number2);
        display4 = "The result of subtraction is: " + result;
        document.getElementById("display4").textContent = display4;

    } else if (operator === "*") {
      
        //multiplication
        result = parseFloat(number1) * parseFloat(number2);
        display4 = "The result of multiplication is: " + result;
        document.getElementById("display4").textContent = display4;

    } else if (operator === "/") {
      
        //division
        if (number2 == 0) {

          //analise iff number two is 0
          display4 = "ERROR! It's impossible to divide by 0!";
          document.getElementById("display4").textContent = display4;

        } else {

          result = parseFloat(number1) / parseFloat(number2);
          display4 = "The result of division is: " + result;
          document.getElementById("display4").textContent = display4;

        }
    } else if (operator === "") {
        
        //ask operator
        display4 = "The operator is not defined.";
        document.getElementById("display4").textContent = display4;

    } else {
        //if operator is diferente of the operators presente in the program
        result = "";
        display4 = "This operator is not defined in the program. Please change it.";
        document.getElementById("display4").textContent = display4;	

    }
    blurInputBox();
}

function calculateWhenConfirmed() {
//it will just calculate if all the input values are confirmed
  if (confirmNumber1 && confirmOperator && confirmNumber2) {
    calculateResult();

  }
}

function showResultInNumber1() {
    //this function puts the resulto f the operation in the number 1 to continue calculating by it
    confirmNumber1 = false;
    confirmOperator = false;
    confirmNumber2 = false;

    if (result == "") {

      resetInputsAndText();
      confirmOnEnterClick();

    } else {

      resetInputsAndText();

      document.getElementById("number1Input").value = result;
      number1 = parseFloat(result);
      var display1 = "The first number is: " + number1;
      document.getElementById("display1").textContent = display1;
      confirmNumber1 = true;

      document.getElementById("operatorInput").focus();
      calculateWhenConfirmed();

    }
}

function resetInputsAndText() {
    //this function reset all the text and inputs on the screen, for the user star calculate again
    confirmNumber1 = false;
    confirmOperator = false;
    confirmNumber2 = false;

    document.getElementById("number1Input").value = "";
    document.getElementById("display1").textContent = "";
    number1 = 0;

    document.getElementById("operatorInput").value = "";
    document.getElementById("display3").textContent = "";
    operator = "";

    document.getElementById("number2Input").value = "";
    document.getElementById("display2").textContent = "";
    number2 = 0;

    document.getElementById("display4").textContent = "";

    confirmOnEnterClick();

}

function confirmOnEnterClick() {
    //this function activate the “Enter” button to confirm the input values, in addiction to allow a focus on the input boxes
    document.getElementById("number1Input").focus();
    document.getElementById("number1Input").addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        enterNumber1();
        document.getElementById("operatorInput").focus();
      }
    });

    document.getElementById("operatorInput").addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        enterOperator();
        document.getElementById("number2Input").focus();
      }
    });

    document.getElementById("number2Input").addEventListener("keyup", function (event) {
      if (event.key === "Enter") {
        enterNumber2();
      }
    });

}

function blurInputBox() {
    //it just eliminate the focus on the input boxes
    document.getElementById("number1Input").blur();
    document.getElementById("operatorInput").blur();
    document.getElementById("number2Input").blur();
}

confirmOnEnterClick();