function isSimple(num){

    let flag = true;
    if (num>1000){
         console.log("Number is greater than 1000");
       return; 
     
    }
    
    if (num==0||num==1){
    console.log (`Entered number is ${num}`)
    return;
    }   
        
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = false;
            break; // выйдем из цикла
        }
    }
    
    return flag;
    }
    
    console.log (isSimple(5));