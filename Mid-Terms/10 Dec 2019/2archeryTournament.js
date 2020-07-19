function solve(arr){
    let targets = arr.shift().split('|').map(Number);
    let points = 0;

    while ((line = arr.shift()) !== 'Game over'){
        if (line === 'Reverse'){
            targets.reverse();
        } else {
            let [direction, index, length] = line.split(' ')[1].split('@');
            index = Number(index);
            length = Number(length);
            if (targets[index] === undefined){
                continue;
            }
            while (length-- > 0){
                index = index + (direction === 'Left' ? -1 : 1);
                if(index === -1) {
                    index = targets.length - 1;
                } else if (index === targets.length){
                    index = 0;
                }
            }
            points += targets[index] >= 5 ? 5 : targets[index];
            targets[index] = (value = targets[index] - 5) >= 0? value : 0;
        }
    }
    console.log(targets.join(' - '));
    console.log(`Iskren finished the archery tournament with ${points} points!`)
}
        
        

 
solve([
    '10|10|10|10|10',
    'Shoot Left@0@2',
    'Shoot Right@4@5',
    'Shoot Right@6@5',
    'Reverse',
    'Game over',
    ''
  ]
  )