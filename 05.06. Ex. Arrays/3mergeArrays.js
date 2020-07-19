function solve(arr1, arr2){
    let newArray = [];
    let print = '';
    for (let index in arr1){
        if(index % 2 === 0 ){
            newArray[index] = Number(arr1[index]) + Number (arr2[index]);
        } else {
            newArray[index] = arr1[index] + arr2[index];
        }
        
    }
    for (let i = 0; i < newArray.length; i++){
        if (i < newArray.length-1){
        print += newArray[i] + ' - ';
        } else {
        print += newArray[i];
        }
    }
    console.log(print)
}

solve([ '13', '12312', '5', '77', '4' ], [ '22', '333', '5', '122', '44' ])