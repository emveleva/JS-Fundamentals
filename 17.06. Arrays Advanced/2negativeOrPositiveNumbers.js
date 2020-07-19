function solve(arr){
    let orderedArray = [];
    for (let el of arr){
        if (el < 0){
            orderedArray.unshift(el);
        } else {
            orderedArray.push(el);
        }
    }
    for (let el of orderedArray){
        console.log(el)
    }
}

solve([7, -2, 8, 9])