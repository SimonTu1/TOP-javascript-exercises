
      const fibonacci = function (n) {
        if (n < -1) {
          return "OOPS";
        }
        if (n <= 1) {
          return parseInt(n);
        }

        return fibonacci(n - 1) + fibonacci(n - 2);
      };



module.exports = fibonacci;