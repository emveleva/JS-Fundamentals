function solve(arr, number){

    let print = '';

    for (let i = 0; i < arr.length; i++){
        let element = arr[i];
        for (let j = i + 1; j < arr.length; j++){
            let nextElement = arr[j];
            if (element + nextElement === number){
                console.log(element + ' ' + nextElement);
                
            }
        }
    }

}

solve([14, 20, 60, 13, 7, 19, 8], 27)