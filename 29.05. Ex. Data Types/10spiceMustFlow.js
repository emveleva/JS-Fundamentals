function solve(startingYield){
    let days = 0;
    let yieldedTotal = 0;
    while (startingYield >= 100){
        let yielded = 0;
        days++;
        yielded += startingYield;
        yielded -= 26;
        startingYield -= 10;
        yieldedTotal += yielded;
    }
    yieldedTotal -= 26;
    console.log(days);
    console.log(Math.max(yieldedTotal, 0))
}

solve(25)