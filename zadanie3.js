function Summ (a){
    return function(b){
      return a+b;
    }
  }
  const sumF= Summ(2); 
  const sum= sumF(3);
  
  console.log(sum);