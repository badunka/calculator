window.onload = function(){
    let calc = document.getElementsByClassName('.calculator');
    let calcDisplay = document.getElementsByClassName('.calculator__display');
    let calcKeys = document.getElementsByClassName('.calculator__key');
    let calcButton = document.getElementsByClassName('.calculator__button');
    let calcClear = document.getElementsByClassName('.calculator__clear');
    let calcEqual = document.getElementsByClassName('.calculator__key--equal');
    let calcPower = document.getElementsByClassName('.calculator__power');
    let calcSpace = document.getElementsByClassName('.calculator__backspace');
		let calSqrt = document.getElementsByClassName('.calculator_sqrt');

    // INIT CALC KEYS
    calcKeys.forEach = function () {
  button.addEventListener("click", () => {

      if(calculator.previousOperand === "" &&
      calculator.currentOperand !== "" &&
  calculator.readyToReset) {
          calculator.currentOperand = "";
          calculator.readyToReset = false;
      }
  })
};

    // ADD NUMBERS TO INPUT
    calcButton.onclick = function () {
        calcDisplay.val( calcDisplay.val() + $(this).attr('value') );
    };

    // CLEAR INPUT
    calcClear.onclick = function () {
        calcDisplay.val('');
    };

    // SHOW RESULT
    calcEqual.onclick = function () {
        calcDisplay.val( eval( calcDisplay.val() ) );
    };

    // POWER BUTTON
    calcPower.onclick = function () {
        calcDisplay.val( Math.pow( calcDisplay.val(), 2 ) );
    };

	   calSqrt.onclick = function () {
        calcDisplay.val( Math.sqrt( calcDisplay.val()) );
    };

    // BACKSPACE BUTTON
    calcSpace.onclick = function () { // https://www.w3schools.com/jsref/jsref_substring.asp
        calcDisplay.val( calcDisplay.val().slice(0,-1) );
    };
}
