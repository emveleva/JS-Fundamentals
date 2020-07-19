function solve(arr){
    let frogNames = arr.shift().split(' ');
    let printed = false;
    
    for (let i = 0; i < arr.length; i++){
        let [command, arg1, arg2] = arr[i].split(' ');

        switch (command) {
            case 'Join':
                let addFrog = arg1;
                frogNames.push(addFrog);
                break;

            case 'Jump':
                let jumpName = arg1;
                let jumpIndex = Number(arg2);
                if (frogNames[jumpIndex] !== undefined){
                    frogNames.splice(jumpIndex, 0, jumpName);
                }
                break;

            case 'Dive':
                let diveIndex = Number(arg1);
                if (frogNames[diveIndex] !== undefined){
                    frogNames.splice(diveIndex, 1);
                }
                break;

            case 'First':
                let countFirst = Number(arg1);
                if (countFirst > frogNames.length){
                    countFirst = frogNames.length;
                }
                let first = frogNames.slice(0, countFirst);
                    console.log(first.join(' '));
                break;

            case 'Last':
                let countLast = Number(arg1);
                if (countLast > frogNames.length){
                    countLast = frogNames.length;
                }
                let last = frogNames.slice(frogNames.length - countLast, frogNames.length);
                console.log(last.join(' '));
                break;
    
            case 'Print':
                let printDetail = arg1;
                printed = true;
                if (printDetail === 'Normal'){
                    console.log(`Frogs: ${frogNames.join(' ')}`);
                    break;
                } else if (printDetail === 'Reversed'){
                    let reversed = frogNames.reverse();
                    console.log(`Frogs: ${reversed.join(' ')}`);
                    break;
                }
                    
                break;
        }
        if (printed === true){
            break;
        }
    }
}

solve([
    'A B C D E F',
    'Join G',
    'Jump Q 3',
    'Last 3',
    'Dive 2',
    'Print Normal'
  ]
  
  )