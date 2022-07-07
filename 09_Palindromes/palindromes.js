
  const palindromes = function (arr) {
    arr = arr.replace(/\W/g, "");
    arr = arr.toLowerCase();

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[arr.length - 1 - i]) {
        return false;
      }
    }
    return true;
  };





module.exports = palindromes;