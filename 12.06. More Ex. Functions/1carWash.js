function solve(arr){
    let percentClean = 0;
    let length = arr.length;
    for (let i = 0; i < length; i++){
        let command = arr.shift();
        switch (command) {
            case 'soap':
                percentClean += 10;
                break;
            case 'water':
                percentClean += percentClean*0.20;
                break;
            case 'vacuum cleaner':
                percentClean += percentClean*0.25;
                break;
            case 'mud':
                percentClean -= percentClean*0.10;
                break;
        }
    }
    console.log(`The car is ${percentClean.toFixed(2)}% clean.`)
}

solve([ 'soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water' ])