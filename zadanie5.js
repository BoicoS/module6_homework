
const sum = (a, b) => {  
    let result = a;
      for (let i = 1; i <=b; i++) {
        result *= a;
      }
      return result;
    }
    
    console.log(sum(5, 3));