function solve(arr){
    let paintingNumbers = arr.shift().split(' ').map(Number);

    while ((line = arr.shift()) !== 'END'){
        let [command, arg1, arg2] = line.split(' ');

        switch (command) {
            case 'Change':
                let changePaintingNumber = Number(arg1);
                let changedNumber = Number(arg2);
                if (paintingNumbers.includes(changePaintingNumber)){
                    paintingNumbers.splice(paintingNumbers.indexOf(changePaintingNumber), 1, changedNumber);
                }
                break;
        
            case 'Hide':
                let hideNumber = Number(arg1);
                if (paintingNumbers.includes(hideNumber)){
                    paintingNumbers.splice(paintingNumbers.indexOf(hideNumber), 1)
                }
                break;

            case 'Switch':
                let switch1 = Number(arg1);
                let switch2 = Number(arg2);
                if (paintingNumbers.includes(switch1) && paintingNumbers.includes(switch2)){
                    let switchedIndex = paintingNumbers.indexOf(switch2);
                    paintingNumbers.splice(paintingNumbers.indexOf(switch1), 1, switch2);
                    paintingNumbers.splice(switchedIndex, 1, switch1);
                }
                break;
            
            case 'Insert':
                let insertPlace = Number(arg1)+1;
                let insertNumber = Number(arg2);
                if (paintingNumbers[insertPlace] !== undefined){
                    paintingNumbers.splice(insertPlace, 0, insertNumber);
                }
                break;

            case 'Reverse':
                paintingNumbers.reverse();
        }


    }
    console.log(paintingNumbers.join(' '))
}

solve([
    '77 120 115 101 101 97 78 88 112 111 108 101 111 110',
    'Insert 5 32',
    'Switch 97 78',
    'Hide 88',
    'Change 120 117',
    'END'
  ]
  
  )