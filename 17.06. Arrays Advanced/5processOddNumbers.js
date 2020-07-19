function solve(arr){
    let newArr = [];
    let print = '';
    for (let index in arr){
        if (index % 2 != 0){
            newArr.unshift(arr[index]*2);
            

        }
    }
    for (let element of newArr){
        print += element + ' ';
    }
    console.log(print);
}

solve([10, 15, 20, 25])