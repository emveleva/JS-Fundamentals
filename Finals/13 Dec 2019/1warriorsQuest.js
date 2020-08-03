function solve(arr){
    let skill = arr.shift();

    while ((line = arr.shift()) !== 'For Azeroth'){
        let [command, arg1, arg2, arg3] = line.split(' ');

        switch (command) {
            case 'GladiatorStance':
                skill = skill.toUpperCase();
                console.log(skill)
                break;
        
            case 'DefensiveStance':
                skill = skill.toLowerCase();
                console.log(skill)
                break;

            case 'Dispel':
                let dispelIndex = Number(arg1);
                let dispelLetter = arg2;
                if (skill[dispelIndex] !== undefined){
                    let symbol = skill[dispelIndex];
                    skill = skill.replace(symbol, dispelLetter)
                    console.log('Success!') 
                } else {
                    console.log('Dispel too weak.')
                }
                break;

            case 'Target':
                if (arg1 === 'Change'){
                    while (skill.includes(arg2)){
                        skill = skill.replace(arg2, arg3);
                       
                    } 
                    console.log(skill)
                } else if (arg1 === 'Remove'){
                    while (skill.includes(arg2)){
                        skill = skill.replace(arg2, '')
                    }
                    console.log(skill)
                } else {
                    console.log("Command doesn't exist!")
                }
                break;

            default:
                console.log("Command doesn't exist!");
                break;
        }
    }
}

solve([
    'fr1c710n',
    'GladiatorStance',
    'Dispel 7 I',
    'Target Change RICTION riction',
    'For Azeroth'
  ]
  
  
  
  )