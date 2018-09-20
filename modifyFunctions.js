// This function multiplies a given input by 2 then returns the result.


function multiplyByTwo(inputNumber){ // Takes a numeric parameter input

  inputNumber = inputNumber * 2; // multiply the input by 2 then return the result.

return inputNumber;
}

// This function appends to the end of the input string "- this is a test "

function appendToEndString(inputString){ //Takes a string as parameter

  inputString = inputString + "- this is a test "; // Appends the given text to the end of the string.

  //inputString = inputString.concat("- this is a test");

  return inputString;
}



module.exports = {
  multiplyByTwo : multiplyByTwo,
  appendToEndString : appendToEndString,
}
