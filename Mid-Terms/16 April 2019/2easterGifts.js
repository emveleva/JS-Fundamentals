function solve(arr){
    let gifts = arr.shift().split(' ');

    while ((line = arr.shift()) !== 'No Money'){
        let [command, arg1, arg2] = line.split(' ');

        switch (command) {
            case 'OutOfStock':
                let outOfStockGift = arg1;
                if (gifts.includes(outOfStockGift)){
                   for (let i = 0; i < gifts.length; i++){
                       if (gifts[i] === outOfStockGift){
                        gifts.splice(i, 1, 'None');
                       }
                   }
                     }                
                break;
            
            case 'Required':
                let replaceGift = arg1;
                let replaceIndex = Number(arg2);
                if (gifts[replaceIndex] !== undefined){
                    gifts.splice(replaceIndex, 1, replaceGift);
                }
                break;

            case 'JustInCase':
                let justInCaseGift = arg1;
                gifts.pop()
                gifts.push(justInCaseGift);
                break;

        }
    }
    console.log(gifts.filter(n => n !== 'None').join(' '))
}

solve([
    'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
    'OutOfStock Eggs',
    'Required Spoon 2',
    'JustInCase ChocolateEgg',
    'No Money'
  ]
  )