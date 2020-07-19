function solve(arr){
    let fireLevel = arr.shift().split('#');
    let water = Number(arr.shift());
    let cells = [];
    let effort = 0;
    let totalFire = 0;
    let noWater = false;

    
        for (let i = 0; i < fireLevel.length; i++){
            let [fireType, level] = fireLevel[i].split(' = ');
            level = Number(level);
            switch (fireType) {
                case 'High':
                    if (level >= 81 && level <= 125 && water >= level){
                        water -= level;
                        effort += level * 0.25;
                        totalFire += level;
                        cells.push(level);
                    }
                    break;
                
                case 'Medium':
                    if (level <= 80 && level >= 51 && water >= level){
                        water -= level;
                        effort += level * 0.25;
                        totalFire += level;
                        cells.push(level);
                    }
                    break;

                case 'Low':
                    if (level <= 50 && level >= 1 && water >= level){
                        water -= level;
                        effort += level * 0.25;
                        totalFire += level;
                        cells.push(level);
                    }
                    break;
            }
        
        if (noWater === true){
            break;
        }
}
    console.log(`Cells:`)
    for (let i = 0; i < cells.length; i++){
        console.log(` - ${cells[i]}`);
    }
    console.log(`Effort: ${effort.toFixed(2)}`);
    console.log(`Total Fire: ${totalFire}`)
    
}

solve([
    'High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77',
    '220'
  ]
  
)