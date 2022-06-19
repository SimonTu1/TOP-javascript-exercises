const removeFromArray = function(arr, ...args) {
   
    return arr.filter(newString => args.indexOf(newString) === -1);
   
   
   
 };
 
 // Do not edit below this line
 module.exports = removeFromArray;
 