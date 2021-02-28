window.onload = function(){
    const display = document.getElementById('display');
    const numbers = document.querySelectorAll('.calcButton');
    const operations = document.querySelectorAll('.operator');
    const clearButtons = document.querySelectorAll('.clear-btn');
    const acBtn = document.getElementById('AC')
    const delBtn = document.getElementById('DEL')
    const calcEqual = document.getElementById('equal');
    const decimalBtn = document.getElementById('decimal');
    const calcPower = document.getElementById('power');
    const calcSqrt = document.getElementById('sqrt');
    let MemoryCurrentNumber = 0;
    let MemoryNewNumber = false;
    let MemoryPendingOperation = '';

  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    number.addEventListener('click', function (e) {
      numberPress(e.target.textContent);
    });
  }

  for (let i = 0; i < operations.length; i++) {
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function (e) {
      operationPress(e.target.textContent);
    });
  }

  for (let i = 0; i < clearButtons.length; i++) {
    let clearBtn = clearButtons[i];
    clearBtn.addEventListener('click', function (e) {
      clear(e.target.textContent);
    });
  }

  function numberPress(number) {
    if (MemoryNewNumber) {
      display.value = number;
      MemoryNewNumber = false;
    } else {
      if (display.value === '0') {
        display.value = number;
      } else {
        display.value += number;
      }
    }
  }

  function operationPress (op) {
    let localOperationMemory = display.value;
    if (MemoryNewNumber && MemoryPendingOperation !== '=') {
      display.value = MemoryCurrentNumber
      } else {
        MemoryNewNumber = true;
        if (MemoryPendingOperation === '+' ) {
        MemoryCurrentNumber += parseFloat (localOperationMemory);
        } else if( MemoryPendingOperation === '-') {
        MemoryCurrentNumber -= parseFloat(localOperationMemory);
        } else if (MemoryPendingOperation === '*') {
        MemoryCurrentNumber *= parseFloat (localOperationMemory);
        MemoryCurrentNumber.toFixed(2)
        } else if (MemoryPendingOperation === "/") {
        MemoryCurrentNumber /= parseFloat (localOperationMemory);
        MemoryCurrentNumber.toFixed(2)
        } else if (MemoryPendingOperation === "x²") {
        MemoryCurrentNumber = parseFloat(localOperationMemory);
        MemoryCurrentNumber.toFixed(2)
      } else if (MemoryPendingOperation === "&radic;") {
        MemoryCurrentNumber = parseFloat(localOperationMemory);
        MemoryCurrentNumber.toFixed(2)
        } else {
        MemoryCurrentNumber = parseFloat(localOperationMemory);
        };
        display.value = MemoryCurrentNumber
        MemoryPendingOperation = op;
        if( (MemoryCurrentNumber).toString().indexOf('.') != -1 )
            MemoryCurrentNumber = parseFloat((MemoryCurrentNumber).toFixed(2));
        display.value = MemoryCurrentNumber;
      };
    };


  function decimal(argument) {
    let localDecimalMemory = display.value;

    if (MemoryNewNumber) {
      localDecimalMemory = '0.';
      MemoryNewNumber = false;
    } else {
      if (localDecimalMemory.indexOf('.') === -1) {
        localDecimalMemory += '.';
      }
    }
    display.value = localDecimalMemory;
  }

  function clear() {
    display.value = '0';
  }

  function del() {
    MemoryCurrentNumber = display.value;
    display.value = MemoryCurrentNumber.slice(0, -1);
    if (display.value === '') {
      display.value = '0';
    }
  }

  function sqrt() {
    display.value = MemoryCurrentNumber;
    if(MemoryCurrentNumber > 0){
      MemoryNewNumber = true;
      MemoryCurrentNumber.toFixed(2)
      return  MemoryCurrentNumber = Math.sqrt(MemoryCurrentNumber)
    } else {
        return display.value = "Недопустимое действие!"
    }
  };

  function poweer() {
    display.value = MemoryCurrentNumber;
    MemoryNewNumber = true
    return MemoryCurrentNumber = Math.pow( MemoryCurrentNumber, 2 );
  };

  calcSqrt.addEventListener("click", sqrt);
  calcPower.addEventListener("click", poweer);
  decimalBtn.addEventListener('click', decimal);
  delBtn.addEventListener('click', del);
  acBtn.addEventListener('click',clear);
}
