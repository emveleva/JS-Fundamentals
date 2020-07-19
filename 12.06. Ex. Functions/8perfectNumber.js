function solve(number){

    findDividers(number);
    


    function findDividers(number){
    let dividers = [];

    for (let i = 1; i < number; i++){
        if (number % i === 0){
            dividers.push(i);
        }
    }
        let sum = 0;
        let length = dividers.length;
        for (let i = 0; i < length; i++){
            sum += dividers[i];
        }
        if (sum === number){
            console.log('We have a perfect number!')
        } else {
            console.log("It's not so perfect.")
        }
    }
}

solve(6)