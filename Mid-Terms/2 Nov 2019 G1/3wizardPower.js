function solve(arr){
    let allCards = arr.shift().split(':');
    let newDeck = [];

    while ((line = arr.shift()) !== 'Ready'){
        let [command, arg1, arg2] = line.split(' ');

        switch (command) {
            case 'Add':
                let addCard = arg1;
                if (allCards.includes(addCard)){
                    newDeck.push(addCard);
                } else {
                    console.log('Card not found.')
                }
                break;
            case 'Insert':
                let insertCard = arg1;
                let insertIndex = Number(arg2);
                if ((!allCards.includes(insertCard)) || (insertIndex > newDeck.length-1 || insertIndex < 0)){
                    console.log('Error!');
                } else {
                    newDeck.splice(insertIndex, 0, insertCard);
                }
                break;
            
            case 'Remove':
                let removeCard = arg1;
                if (!newDeck.includes(removeCard)){
                    console.log('Card not found.')
                } else {
                    newDeck.splice(newDeck.indexOf(removeCard), 1);
                }
                break;
            
            case 'Swap':
                let swapCard1 = arg1;
                let swapCard2 = arg2;
                let indexFirst = newDeck.indexOf(swapCard1);
                let indexSecond = newDeck.indexOf(swapCard2);
                    newDeck.splice(indexFirst, 1, swapCard2);
                    newDeck.splice(indexSecond, 1, swapCard1);

                break;
            
            case 'Shuffle':
                newDeck.reverse();
                break;
            
        }
    }
    console.log(newDeck.join(' '));
}

solve([
    'Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
    'Add Moonfire',
    'Add Pounce',
    'Add Bite',
    'Add Wrath',
    'Insert Claw -1',
    'Swap Claw Moonfire',
    'Remove Bite',
    'Shuffle deck',
    'Ready'
  ]
  )