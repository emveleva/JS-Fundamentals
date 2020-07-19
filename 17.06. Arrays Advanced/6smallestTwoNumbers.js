function solve(arr){
    let sorted = arr.sort((a, b) => {
        return a-b;
    });
    let newSorted = sorted.slice(0, 2).join(' ');
    console.log(newSorted)
}

solve([30, 15, 50, 5])