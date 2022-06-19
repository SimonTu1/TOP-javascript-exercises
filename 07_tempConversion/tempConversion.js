const ftoc = function(fah) {
    let celsius = (fah - 32) * 5/9;
    let newCelsius = parseFloat(celsius.toFixed(1));
    return newCelsius;
  };
  
  const ctof = function(cel) {
    let fahren = (cel * 9/5) + 32;
    let newFahren = parseFloat(fahren.toFixed(1));
    return newFahren;
  };
  
  // Do not edit below this line
  module.exports = {
    ftoc,
    ctof
  };
  