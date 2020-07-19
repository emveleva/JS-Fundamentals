function solve(arr){
    let pirateShip = arr.shift().split('>').map(Number);
    let warpirateShip = arr.shift().split('>').map(Number);
    let maxHealth = Number(arr.shift());
    let stop = false;


    while ((line = arr.shift()) !== 'Retire'){
        let [ command, arg1, arg2, arg3] = line.split(' ');

        switch (command) {
            case 'Fire':
                let fireIndex = Number(arg1);
                let fireDamage = Number(arg2);
                if (fireIndex > -1 && fireIndex < warpirateShip.length){
                    warpirateShip[fireIndex] -= fireDamage;
                    if (warpirateShip[fireIndex] <= 0){
                        console.log('You won! The enemy ship has sunken.');
                        stop = true;
                        break;
                    }
                }
                break;
            
            case 'Defend':
                let defendStart = Number(arg1);
                let defendEnd = Number(arg2);
                let defendDamage = Number(arg3);
                if ((defendStart > -1 && defendStart < pirateShip.length) && (defendEnd > -1 && defendEnd < pirateShip.length && defendStart < defendEnd)){
                    for (let i = defendStart; i <= defendEnd; i++){
                        pirateShip[i] -= defendDamage;
                        if (pirateShip[i] <= 0){
                            console.log('You lost! The pirate ship has sunken.');
                            stop = true;
                            break;
                        }
                    }
                }
                break;

            case 'Repair':
                let repairIndex = Number(arg1);
                let repairHealth = Number(arg2);
                if (repairIndex > -1 && repairIndex < pirateShip.length){
                    pirateShip[repairIndex] += repairHealth;
                    if (pirateShip[repairIndex] > maxHealth){
                        pirateShip[repairIndex] = maxHealth;
                    }
                }
                break;
            case 'Status':
                let needRepair = pirateShip.filter(n => n < maxHealth*0.20);
                    console.log(`${needRepair.length} sections need repair.`)
                
                break;
        }
        if (stop === true){
            break;
        }
      
    }
    if (stop == false){
        let sumPirateShip = 0;
        for (let i = 0; i < pirateShip.length; i++){
            sumPirateShip += pirateShip[i];
            
        }
        let sumWarship = 0;
        for (let i = 0; i < warpirateShip.length; i++){
            sumWarship += warpirateShip[i];
            
        }
        console.log(`Pirate ship status: ${sumPirateShip}`)
        console.log(`Warship status: ${sumWarship}`)

}
}

solve([
    '2>3>1>5>2',
    '6>7>0>9>10>11',
    '20',
    'Status',
    'Fire 2 3',
    'Defend 0 4 1',
    'Repair 0 30',
    'Retire'
  ]
  
  )