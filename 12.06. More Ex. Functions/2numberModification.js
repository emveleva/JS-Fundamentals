function solve(number){
    let stringOfNumber = number.toString();
    let sum = 0;
    while (sum/stringOfNumber.length < 5){
        sum = 0;
    for (let i = 0; i <stringOfNumber.length; i++){
        
        sum += Number(stringOfNumber[i]);           
        }
        if (sum/stringOfNumber.length >= 5){
            break;
        } else {
        stringOfNumber = stringOfNumber + "9";
        }
    }
    
    console.log(Number(stringOfNumber))
}
solve(5835)