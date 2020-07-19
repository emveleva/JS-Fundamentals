function solve(arr1, arr2){
    let numbers = arr1;
    let indexes = arr2;
    let counter = 0;

    let elementsToTake = indexes[0];
    let elementsToDelete = indexes[1];
    let searchedNumber = indexes[2];

    let takenNumbers = numbers.slice(0, elementsToTake);
    takenNumbers.splice(0, elementsToDelete);

    for (let el of takenNumbers){
        if (el === searchedNumber){
            counter++;
        }
    }
    console.log(`Number ${searchedNumber} occurs ${counter} times.`)

}

solve([ 5, 2, 3, 4, 1, 6 ], [ 5, 2, 3 ]
    )