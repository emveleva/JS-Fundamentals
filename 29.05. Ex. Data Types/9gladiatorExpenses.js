function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armourPrice){
    let expenses = 0;
    let counter = 0;
    for (let i = 1; i <= lostFightsCount; i++){
        if (i % 2 == 0){
            expenses += helmetPrice;
        } 
        if (i % 3 == 0){
            expenses += swordPrice;
        }
        if (i % 2 == 0 && i % 3 == 0){
            expenses += shieldPrice;
            counter++;
        }
        if (counter  == 2){
            expenses += armourPrice;
            counter = 0;
        }

    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}
solve(23, 12.50, 21.50, 40, 200)
