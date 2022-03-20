const intervalId = setInterval(function (a, b) {

    for(let i =a-1; i<b; i++){
 console.log(i+1);
 }
 
 }, 1000, 5,  15); 
 
 clearInterval(intervalId);