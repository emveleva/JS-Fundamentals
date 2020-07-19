function solve(arr){
    let numbers = arr.shift()
        .split(' ')
        .map(Number);
    
    while ((line = arr.shift()) !== 'End'){
        let [command, arg1, arg2] = line.split(' ');

        switch (command) {
            case 'Switch':
                let switchIndex = Number(arg1);
                if (numbers[switchIndex] !== undefined){
                    numbers[switchIndex] = numbers[switchIndex] - (numbers[switchIndex] * 2)
                }
                break;
        
            case 'Change':
                let changeIndex = Number(arg1);
                let changeValue = Number(arg2);
                if (numbers[changeIndex] !== undefined){
                    numbers[changeIndex] = changeValue;
                }
                break;
            
            case 'Sum':
                let detail = arg1;
                if (detail == 'Negative'){
                    let negative = numbers.filter (n => n < 0);
                    let sumNegative = 0;
                    for (let el of negative){
                        sumNegative += el;
                    }
                    console.log(sumNegative);
                } else if (detail == 'Positive'){
                    let positive = numbers.filter (n => n > -1);
                    let sumPositive = 0;
                    for (let el of positive){
                        sumPositive += el;
                    }
                    console.log(sumPositive);
                } else {
                    let sumAll = 0;
                    for (let el of numbers){
                        sumAll += el;
                    }
                    console.log(sumAll)
                }
                break;
        }
    }
    let allPositive = numbers.filter(n => n > -1);
    console.log(allPositive.join(' '));
}

solve([
    '1 2 3 4 5 4 3 2 1 0',
    'Switch -4',
    'Change 13 0',
    'Switch 0',
    'Sum All',
    'End'
  ]
  
)