function solve(arr, count){
    let print = '';
    let rotations = count % arr.length;

    for (let index in arr){
        if (index >= rotations){
            let element = arr[index];
            print += element + ' ';
        }

    }
    for (let index in arr){
        if(index < rotations){
            let element = arr[index];
            print += element + ' ';
        } else {
            break;
        }
    }
    console.log(print)

}

solve([51, 47, 32, 61, 21], 2)