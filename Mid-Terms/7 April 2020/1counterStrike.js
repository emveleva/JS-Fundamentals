function solve(input){
    let initialEnergy = Number(input.shift());
    let currentMove = Number(input.shift());
    let battlesWon = 0;

    while (currentMove !== 'End of battle'){
        if (initialEnergy >= currentMove){
            initialEnergy -= currentMove;
            battlesWon++;
        } else {
            console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${initialEnergy} energy`);
            break;
        }
        if (battlesWon % 3 === 0){
            initialEnergy += battlesWon;
        }

        currentMove = input.shift();
    }
    if (currentMove == "End of battle"){
        console.log(`Won battles: ${battlesWon}. Energy left: ${initialEnergy}`)
    }
}

solve([ '200', '54', '14', '28', '13', 'End of battle' ]
  )