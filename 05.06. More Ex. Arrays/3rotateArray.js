function solve(arr){
    let rotations = arr.pop() % arr.length;
    for (let i = 0; i < rotations; i++){
        let popped = arr.pop();
        arr.unshift(popped);
    }
    console.log(arr.join(' '))

}

solve(['1', '2', '3', '4', '2'])