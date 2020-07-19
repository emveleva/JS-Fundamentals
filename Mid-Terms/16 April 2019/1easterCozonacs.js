function solve(arr){
    let budget = Number(arr.shift());
    let flourCost = Number(arr.shift());
    let eggsCost = flourCost*0.75;
    let milkCost = (flourCost + flourCost*0.25)/4;
    let totalPrice = flourCost + milkCost + eggsCost;
    let counterCozonacs = 0;
    let counterEggs = 0;
    let counter = 0;

    while(totalPrice <= budget){
        
            budget -= totalPrice;
            counterCozonacs++;
            counterEggs += 3;
            counter++;
            if (counter % 3 === 0){
                counterEggs -= counterCozonacs - 2
            }
        
    }
        console.log(`You made ${counterCozonacs} cozonacs! Now you have ${counterEggs} eggs and ${budget.toFixed(2)}BGN left.`)

}

solve([ '20.50', '1.25' ]
)