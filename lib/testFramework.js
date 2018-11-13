const assert = {
  isTrue: function(assertionToCheck, message) {
    if (!assertionToCheck) {
      document.getElementById("test_result").innerHTML = ("Assertion failed: " + assertionToCheck + " is not truthy. " + message)
    } else document.getElementById("test_result").innerHTML = ("Assertion Passed: " + assertionToCheck + ". " + message)
    }
  };
