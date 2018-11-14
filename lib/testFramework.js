var assert = {
  isTrue: function(assertionToCheck, message) {
    if (!assertionToCheck) {
      document.getElementById("test_result").innerHTML =( "Assertion failed: " + assertionToCheck + " is not truthy: " + message );
    }else {
      document.getElementById("test_result").innerHTML = ("Assertion passed: " + assertionToCheck + " is truthy: " + message )}
  },

  isEqual: function(operand1, operand2, message) {
    if (operand1 !== operand2) {
      // throw new Error("Assertion failed: " + operand1 + " is not equal to " + operand2);
      document.getElementById("test_result").innerHTML = ("Assertion failed: " + operand1 + " is not equal to: " + operand2 + message );
    } else {
     document.getElementById("test_result").innerHTML = ("Assertion passed: " + operand1 + " is equal to: " + operand2 + message );
    }
  }


};
