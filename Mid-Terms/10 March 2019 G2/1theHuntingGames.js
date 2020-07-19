function solve(arr){
    let adventureDays = Number(arr.shift());
    let playersCount = Number(arr.shift());
    let groupEnergy = Number(arr.shift());
    let waterPerPersonDaily = Number(arr.shift());
    let foodPerPersonDaily = Number(arr.shift());
    let totalWater = waterPerPersonDaily * playersCount * adventureDays;
    let totalFood = foodPerPersonDaily * playersCount * adventureDays;
    let noEnergy = false;
    let day = 1;
    for (let i = 0; i < arr.length; i++){
        let energyLoss = Number(arr[i]);
        groupEnergy -= energyLoss;
        if (groupEnergy <= 0){
            noEnergy = true;
            break;
        }
        if (day % 2 === 0){
            groupEnergy = groupEnergy + groupEnergy*0.05;
            totalWater = totalWater - totalWater*0.30;
        }
        if (day % 3 === 0){
            groupEnergy = groupEnergy + groupEnergy*0.10;
            totalFood = totalFood - (totalFood/playersCount);
            
        }
        
        
        day++;
    }
    if (noEnergy === true){
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`)
    } else {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`)
    }

}

solve([
    '10',     '7',      '5035.5',
    '11.3',   '7.2',    '942.3',
    '500.57', '520.68', '540.87',
    '505.99', '630.3',  '784.20',
    '321.21', '456.8',  '330',
    ''
  ]
  )