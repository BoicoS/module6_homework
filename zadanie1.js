function getOddEvenelem (arr){
    let countOdd=0;
    let countEven=0;
    let countZero=0;
    
    
    
     for (let i=0; i<arr.length; i=i+1){    
       if (typeof(arr[i])=='number'&& !arr[i]==0){      
            if (arr[i]%2==0){
                countEven = countEven+1; 
                
              } else{
              countOdd = countOdd+1;
              
              }
      }else {
            if (arr[i]==0){
            countZero= countZero+1;
          }
      }
     
     }
      console.log (countEven);  
      console.log (countOdd);  
      console.log (countZero);  


  }
  
  var arr1 = [0, 1, 4, 6, 7,null];
  getOddEvenelem(arr1);