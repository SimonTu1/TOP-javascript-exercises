const sumAll = function(min,max ) {
  
    let list = [];
    let finalSum = 0;
    if(min < 0 || max < 0){
         return "ERROR"
    }
    if(!Number.isInteger(min) || !Number.isInteger(max)){
         return "ERROR";

    }

    if(min > max){
         list = (min - max) + 1;
         finalSum = list * (min + max) / 2
    }
    
  for(let i = min; i < max + 1; i++){
       finalSum += i;
  }
    return finalSum;

  
     }

     
    

    
   

  
 



// Do not edit below this line
module.exports = sumAll;
