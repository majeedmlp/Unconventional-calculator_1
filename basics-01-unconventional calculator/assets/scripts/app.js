const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];



// funtions

//      to get User input and convert to Number
function getUserInputNumber(){
return parseInt(userInput.value);
}

//      creates output result & description
function createAndWriteOutput(operator, resultBeforeCalculation, calculationNumber) {
  const calculationDescription = ` ${resultBeforeCalculation} ${operator} ${calculationNumber}`;
outputResult(currentResult, calculationDescription);
}

//     this is for storing operations  & log writing
function writeToLog(operationIdentifier, num1, num2, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    previousResult: num1,
    newNumber: num2,
    result: newResult,
  };
  console.log(logEntry.operation);
  logEntries.push(logEntry);
  console.log(logEntries);
}

// this is to calculate 

function calculateResult(calculationType){
  const enteredNumber = getUserInputNumber();
  const initialResult = currentResult;
  let mathOperator;
if ( calculationType !== "ADD" && 
calculationType !== "SUBTRACT" &&
calculationType !== "MULTIPLY" &&
calculationType !== "DIVIDE" ||
!enteredNumber ) {
  return;
}


  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  }
  else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  }
  else if ( calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  }
  else if (calculationType === "DIVIDE") { 
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput( mathOperator, initialResult, enteredNumber)
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

// functions - Calculation type Operators

function add() {
  calculateResult("ADD");
}  
function subtract() {
calculateResult("SUBTRACT");
}
function multiply() {
  calculateResult("MULTIPLY");
}
function divide() {
  calculateResult("DIVIDE");
}


// Buttons 

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);





