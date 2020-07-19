function solve(arr){
    let collected = arr.shift().split(', ');
    let length = Number(arr.shift());
    
    for (let i = 0; i < length; i++){
    let [command, arg1, arg2] = arr[i].split(', ');

    switch (command) {
        case 'Add':
            let nameAdd = arg1;
            if (collected.includes(nameAdd)){
                console.log('Tank is already bought');
            } else {
                collected.push(nameAdd);
                console.log('Tank successfully bought');
            }
            break;
        
        case 'Remove':
            let nameRemove = arg1;
            if (!collected.includes(nameRemove)){
                console.log('Tank not found');
            } else {
                collected.splice(collected.indexOf(nameRemove), 1);
                console.log('Tank successfully sold')
            }
            break;
        
        case 'Remove At':
            let indexRemove = Number(arg1);
            if (collected[indexRemove] === undefined){
                console.log('Index out of range');
            } else {
                collected.splice(indexRemove, 1);
                console.log('Tank successfully sold')
            }
            break;
        
        case 'Insert':
            let indexInsert = Number(arg1);
            let nameInsert = arg2;
            if (collected[indexInsert] === undefined){
                console.log('Index out of range');
            } else if (!collected.includes(nameInsert)) {
                collected.splice(indexInsert, 0, nameInsert);
                console.log('Tank successfully bought')
            } else {
                console.log('Tank is already bought')
            }
            break;
    }
}
    console.log(collected.join(', '))
}

solve([
    'T 34, T 34 B, T92, AMX 13 57',
    '4',
    'Add, T 34',
    'Remove, AMX CDC',
    'Insert, 10, M60',
    'Remove At, 1'
  ]
  
  )