(function(exports) {

  function fizzBuzz() {
    var fizzBuzz = new FizzBuzz("Test fizzBuzz");
    assert.isTrue(fizzBuzz.number === "FizzBuzz", 'number is equal to fizzbuzz');
  };

  fizzBuzz();

})(this);
