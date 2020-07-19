function solve(numOne, numTwo){

    let result = (factorial(numOne)/factorial(numTwo)).toFixed(2)
    function factorial(n){
        return (n != 1) ? n * factorial(n - 1) : 1;
        
    }
    console.log(result)
}

solve(5, 2)