function solve(arr){
    let print = '';
    for (let index = 0; index < arr.length; index++){
        let element = arr[index];
        let isBigger = true;
        for (let i = index + 1; i < arr.length; i++){
            let nextElement = arr[i];
            if (element <= nextElement){
                isBigger = false;
                break;
            }
        }
        if (isBigger){
            print += element + ' ';
        }
    }
    console.log(print);
}

solve([1, 5, 3, 2])