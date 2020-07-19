function solve(arr){
    let initialString = arr.shift()
                           .split(' ')
                           .map(Number);
    for (let i = 0; i < arr.length; i++){
        let [command, firstNum, secondNum] = arr[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command){
            case "Add":
                initialString.push(firstNum);
            break;
            case "Remove":
                initialString = initialString.filter(el => el !== firstNum);
            break;
            case "RemoveAt":
                initialString.splice(firstNum, 1);
            break;
            case "Insert":
                initialString.splice(secondNum, 0, firstNum)
            break;
        }
    }
    console.log(initialString.slice().join(' '))

}

solve([ '4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3' ])