function solve(arr1, arr2){
    let numbers = arr1;
    let commands = arr2;
    let stop = false;

    for (let i = 0; i < commands.length; i++){
        let splited = commands[i].split(' ');
        let command = splited[0];

        switch (command) {
            case 'add':
                let addIndex = Number(splited[1]);
                let addElement = Number(splited[2]);
                numbers.splice(addIndex, 0, addElement);                
                break;
        
            case 'addMany':
                let index = Number(splited[1]);
                                
                for (let j = splited.length-1; j >= 2 ; j--){
                    let numberToAdd = Number(splited[j]);
                    numbers.splice(index, 0, numberToAdd)
                }
                break;

            case 'contains':
                let element = Number(splited[1]);
                if (numbers.includes(element)){
                    console.log(numbers.indexOf(element))
                } else {
                    console.log(`-1`);
                }
                break;
            
            case 'remove':
                let removeIndex = Number(splited[1]);
                numbers.splice(removeIndex, 1);
                break;
            
            case 'shift':
                let rotations = Number(splited[1]) % numbers.length;

                for (let a = 0; a < rotations; a++){
                    let first = numbers.shift();
                    numbers.push(first);             
                }
                break;

            case 'sumPairs':
                numbers = numbers.map((e, i, numbers) => i < numbers.length - 1 ? (numbers[i] += numbers[i + 1]) : numbers[i] = numbers[i]).filter((e, i) => i % 2 === 0);
                break;

                case 'print':
                    console.log('[ ' + numbers.join(', ') + ' ]');
                    stop = true;
                    break;

        } 
        if (stop === true){
            break;
        }
    }
}

solve([ 1, 2, 4, 5, 6, 7 ], [ 'addMany 1 8', 'contains 1', 'contains -3', 'print' ])