function solve(arr){
    let weaponName = arr.shift().split('|');

    while((line = arr.shift()) !== 'Done'){
        let [command, arg1, arg2] = line.split(' ');

        switch (command) {
            case 'Move':
                let direction = arg1;
                let index = Number(arg2);
                if (weaponName[index] === undefined){
                    continue;
                } else {
                    if (direction === 'Left' && index > 0){
                        let movingLeft = weaponName.splice(index, 1);
                        weaponName.splice(index-1, 0, movingLeft);
                    } else if (direction === 'Right' && index < weaponName.length-1){
                        let movingRight = weaponName.splice(index, 1);
                        weaponName.splice(index+1, 0, movingRight);
                    }
                }
                break;

            case 'Check':
                let details = arg1;
                let odd = weaponName.filter((item, i) => i % 2 !== 0);
                let even = weaponName.filter((item, i) => i % 2 === 0);
                if (details === 'Odd'){
                    console.log(odd.join(' '));
                } else {
                    console.log(even.join(' '))
                }
                
        
                break;
        }
    }
    console.log(`You crafted ${weaponName.join('')}!`);
}

solve([
    'ri|As|er|hb|ng',
    'Move Left 1',
    'Move Right 2',
    'Move Right 3',
    'Move Left 2',
    'Done'
  ]
  
  )