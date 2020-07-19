function solve(number){
    let isPrime = true;
    if (number === 1){
        isPrime = false;
    }
        for (let i = 2; i <= Math.sqrt(number); i++){
            if(number % i === 0){
                isPrime = false;
              
                break;
            } 
        }
        if (isPrime){
            console.log("true");
        } else {
            console.log("false")
        }


}
solve(81)