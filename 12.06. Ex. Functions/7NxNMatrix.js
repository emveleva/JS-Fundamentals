function solve(number){
 let textFromNumber = number.toString() + ' ';
 for (let i = 1; i <= number; i++){
     console.log(textFromNumber.repeat(number))
 }   
}

solve(7)