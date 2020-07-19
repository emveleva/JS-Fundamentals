function solve(arr){
    let initialValues = arr.shift().split(' ').map(Number);

    while ((line = arr.shift()) !== 'end'){
        let [command, arg1, arg2] = line.split(' ');

        switch (command) {
       
            case 'swap':
                let swapIndex1 = Number(arg1);
                let swapIndex2 = Number(arg2);
                if (initialValues[swapIndex1] !== undefined && initialValues[swapIndex2] !== undefined){
                    let swapped = initialValues[swapIndex1];
                    initialValues.splice(swapIndex1, 1, initialValues[swapIndex2]);
                    initialValues.splice(swapIndex2, 1, swapped)
                }
                    break;

                case 'multiply':
                    let multiplyIndex1 = Number(arg1);
                    let multiplyIndex2 = Number(arg2);
                    let multiplied = initialValues[multiplyIndex1]* initialValues[multiplyIndex2];
                    initialValues.splice(multiplyIndex1, 1, multiplied)
                    break;

                case 'decrease':
                    initialValues = initialValues.map(x => x-1);
                    break;
        }
    }
    console.log(initialValues.join(', '))
}

solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  
  )