function solve(arr){
    let hoursOfTasks = arr.shift().split(' ').map(Number);

    while ((line = arr.shift()) !== 'End'){
        let [command, arg1, arg2] = line.split(' ');

        switch (command) {
            case 'Complete':
                let completeIndex = Number(arg1);
                if (hoursOfTasks[completeIndex] !== undefined){
                    hoursOfTasks[completeIndex] = 0;
                }
                break;
        
            case 'Change':
                let changeIndex = Number(arg1);
                let time = Number(arg2);
                if (hoursOfTasks[changeIndex] !== undefined){
                    hoursOfTasks[changeIndex] = time;
                }
                break;

            case 'Drop':
                let dropIndex = Number(arg1);
                if (hoursOfTasks[dropIndex] !== undefined){
                    hoursOfTasks[dropIndex] = -1;
                }  
                break;
            
            case 'Count':
                let detail = arg1;
                if (detail === 'Completed'){
                    let completed = hoursOfTasks.filter(n => n === 0);
                    console.log(completed.length);
                } else if (detail === 'Incomplete'){
                    let incompleted = hoursOfTasks.filter(n => n > 0);
                    console.log(incompleted.length);
                } else if (detail === 'Dropped'){
                    let dropped = hoursOfTasks.filter(n => n === -1);
                        console.log(dropped.length);
                }
                break;
                }
                

          
        }
        let filtered = hoursOfTasks.filter(n => n > 0)
    console.log(filtered.join(' '));
}

solve([
    '1 2 3 4 5 4 0 3 2 1',
    'Complete 0',
    'Complete 1',
    'Complete 2',
    'Drop 3',
    'Change 4 1',
    'Count Completed',
    'End'
  ]
  
  )