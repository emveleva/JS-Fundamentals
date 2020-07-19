function solve(arr){
    let maxHeight = 30;
    let cubicYardCost = 1900;
    let footHeightDaily = 195;
    let totalCost = 0;
    let totalCubicYards = [];
    let counter = 0;
    let done = false;
    let length = arr.length;
   

    for (let i = 0; i < maxHeight; i++){ 
        let dailyHeight = 0;
        for (let j = 0; j < arr.length; j++){
            if (arr[j] < maxHeight){
                arr.splice(arr.indexOf(arr[j]), 1, arr[j] + 1)
                totalCost += cubicYardCost * footHeightDaily;
                dailyHeight += footHeightDaily;
            } else {
                arr.splice(arr.indexOf(arr[j]), 1);
                j--;
                counter++;
                if (counter === length){
                    done = true;
                    break;
                }
            }
            

        } 
        if (done === true){
            break;
        }
        
        totalCubicYards.push(dailyHeight)
        
    }
    console.log(totalCubicYards.join(', '));
    console.log(`${totalCost} pesos`)
}



solve([ 17, 22, 17, 19, 17])