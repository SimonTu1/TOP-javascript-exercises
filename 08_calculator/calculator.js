const add = function (num1, num2) {
    return num1 + num2;
  };
  console.log(add(2, 6));

  const subtract = function (num1, num2) {
    return num1 - num2;
  };
  console.log(subtract(10, 4));

  const sum = function (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  };
  console.log(sum([5, 6, 7]));

  const multiply = function (arr) {
    let sum = 1;
    for (let i = 0; i < arr.length; i++) {
      sum *= arr[i];
    }
    return sum;
  };
  console.log(multiply([1, 8, 9]));

  const power = function (a, b) {
    return a ** b;
  };

  console.log(power(4, 3));

  const factorial = function (n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  };

  module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
  };