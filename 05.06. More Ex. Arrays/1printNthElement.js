function solve(arr){
    let print = '';
    let step = arr.pop();
    let counter = 0;
    for (let index in arr){
        if (index % step === 0){
            print += arr[index] + (' ');
        }
    
    }
    console.log(print);
}

solve(['5', '20', '31', '4', '20', '2'])