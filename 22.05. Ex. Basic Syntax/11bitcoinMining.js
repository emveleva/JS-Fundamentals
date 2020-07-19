function solve(input){
    let total = input.length;
    let counter = 0;
    let goldGrams = 0;
    let leva = 0;
    let bitcoins = 0;
    let dayFirstBitcoin = 0;
    let first = true;
    while (counter < total){
        counter++;
        goldGrams = Number(input.shift());
        if (counter % 3 === 0){
            goldGrams = goldGrams - goldGrams * 0.30;
        }
        leva += goldGrams * 67.51;
        while (leva >= 11949.16){
            if (first){
            dayFirstBitcoin = counter;
            first = false;
            }
            bitcoins++;
            leva = leva - 11949.16;
        }
        

        

    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins > 0){
        console.log(`Day of the first purchased bitcoin: ${dayFirstBitcoin}`);
    }
    console.log(`Left money: ${leva.toFixed(2)} lv.`)

}

solve([ 3124.15, 504.212, 2511.124 ])