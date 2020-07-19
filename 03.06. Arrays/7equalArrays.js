function solve(arr1, arr2){
    let numArr1 = [];
    let numArr2 = [];
    let sumArr1 = 0;
    let areEqual = true;

    for (let i = 0; i < arr1.length; i++){
        numArr1[i] = Number(arr1[i]);
        sumArr1 += numArr1[i];
    }

    for (let i = 0; i < arr2.length; i++){
        numArr2[i]= Number(arr2[i]);
    }

    for (let i = 0; i < numArr1.length; i++){
        if(numArr1[i] !== numArr2[i]){
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
    }
    if (areEqual){
        console.log(`Arrays are identical. Sum: ${sumArr1}`)
    }

}

solve([ '1', '2', '3', '4', '5' ], [ '1', '2', '4', '4', '5' ])