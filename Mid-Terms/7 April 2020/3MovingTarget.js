function solve(arr){
    let targetSequence = arr[0].split(' ').map(Number);
    
    for (let i = 1; i < arr.length; i++){
        let [command, index, power] = arr[i].split(' ');
        index = Number(index);
        power = Number(power);
        switch (command) {
            case 'Shoot':
                if (index < targetSequence.length && index >= 0){
                    targetSequence[index] -= power;
                    if (targetSequence[index] <= 0){
                        targetSequence.splice(index, 1);
                    }
                }
                break;
            
            case 'Add':
                if (index < targetSequence.length && index >= 0){
                    targetSequence.splice(index, 0, power);
                } else {
                    console.log(`Invalid placement!`)
                }
                break;
            
            case 'Strike':
                let firstIndex = index - power;
                let lastIndex = index + power;
                if (firstIndex >= 0 && lastIndex < targetSequence.length){
                    targetSequence.splice(firstIndex, (1 + (power*2)));
                    
                } else {
                    console.log('Strike missed!')
                }
                break;
            default:
                break;
                }
            

                
        
    }
    console.log(targetSequence.join('|'))

}

solve([
    '47 55 85 78 99 20',
    'Shoot 1 55',
    'Shoot 8 15',
    'Strike 2 3',
    'Add 0 22',
    'Add 2 40',
    'Add 2 50',
    'End'
  ]
  
  
  
  
  )