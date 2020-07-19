function solve(arr){
    let initialNumber = 1;
    let initArray = [];
    
    for (let i = 0; i < arr.length; i++){
        let command = arr[i];
        if (command === 'add'){
            initArray.push(initialNumber + i);
        } else {
            initArray.pop();
        }

    }
    if (initArray.length > 0){
        console.log(initArray.join(' '))
    } else {
        console.log("Empty")
    }
}

solve(['add', 'add', 'remove', 'add', 'add'])