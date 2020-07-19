function solve(arr){
    let journeyCost = Number(arr.shift());
    let months = Number(arr.shift());
    let currentMonth = 0;
    let savings = 0;

    for (let i = 0; i < months; i++){
        currentMonth++;
        if (currentMonth % 2 !== 0 && currentMonth !== 1){
            savings -= savings * 0.16;
        }
        if (currentMonth % 4 === 0){
            savings += savings * 0.25;
        }

        savings += journeyCost*0.25;
    }
    if (savings >= journeyCost){
        let souvenirs = savings - journeyCost;
        console.log(`Bravo! You can go to Disneyland and you will have ${souvenirs.toFixed(2)}lv. for souvenirs.`)
    } else {
        let neededMoney = journeyCost - savings;
        console.log(`Sorry. You need ${neededMoney.toFixed(2)}lv. more.`)
    }
}

solve([ '3265', '3' ])