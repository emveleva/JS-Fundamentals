function solve(arr){
    let initialLoot = arr.shift().split('|');

    while ((line = arr.shift()) !== 'Yohoho!'){
        let lineDetails = line.split(' ');
        let command = lineDetails.shift();
        
            
                
        switch (command) {
            case 'Loot':
                for (let i = 0; i < lineDetails.length; i++){
                    if (!initialLoot.includes(lineDetails[i])){
                        initialLoot.unshift(lineDetails[i])
                    }
                }
                break;
        
            case 'Drop':
                let index = Number(lineDetails[0]);
                if (index < 0 || index > initialLoot.length){
                    continue;
                } else {
                    let dropped = initialLoot.splice(index, 1);
                    initialLoot.push(dropped)
                }
                break;
            case 'Steal':
                let count = Number(lineDetails[0]);
                if(count < initialLoot.length){
                    let stollen = initialLoot.splice(initialLoot.length - count, count);
                    console.log(stollen.join(', '))
                } else if (count >= initialLoot.length){
                    count = initialLoot.length;
                    stollen = initialLoot.slice(0, count);
                    console.log(stollen.join(', '));
                    initialLoot.splice(0, count);

                }
                break;
                }
        }
        if (initialLoot.length > 0){
        let sum = 0;
        for (let i = 0; i < initialLoot.length; i++){
            sum += initialLoot[i].length;
        }
        let average = sum / initialLoot.length;
        console.log(`Average treasure gain: ${average.toFixed(2)} pirate credits.`)
    } else {
        console.log('Failed treasure hunt.')
    }
    }



solve([
    'Diamonds|Silver|Shotgun|Gold',
    'Loot Silver Medals Coal',
    'Drop -1',
    'Drop 1',
    'Steal 6',
    'Yohoho!'
  ]
  
  )