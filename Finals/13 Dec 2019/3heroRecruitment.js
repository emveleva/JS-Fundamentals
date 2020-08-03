function solve(arr){
    let heroes = {};

    while ((line = arr.shift()) !== 'End'){
        let [command, heroName, spellName] = line.split(' ');

        switch (command) {
            case 'Enroll':
                if (heroes[heroName] === undefined){
                    heroes[heroName] = [];
                } else {
                    console.log(`${heroName} is already enrolled.`)
                }
                break;
        
            case 'Learn':
                if (heroes[heroName] === undefined){
                    console.log(`${heroName} doesn't exist.`);
                } else {
                    if (heroes[heroName].includes(spellName)){
                        console.log(`${heroName} has already learnt ${spellName}.`)
                    } else {
                    heroes[heroName].push(spellName);
                }
            }
                break;

            case 'Unlearn':
                if (heroes[heroName] === undefined){
                    console.log(`${heroName} doesn't exist.`);
                } else {
                    if (heroes[heroName].includes(spellName)){
                        heroes[heroName].splice(heroes[heroName].indexOf(spellName), 1);
                    } else {
                        console.log(`${heroName} doesn't know ${spellName}.`)
                    }
                }
                break;
        }
    }
    let nameSort = Object.entries(heroes).sort((a, b) => a[0].localeCompare(b[0]))
    let spellsSort = nameSort.sort((a, b) => b[1].length - a[1].length)
    console.log('Heroes:')
    for (let kvp of spellsSort){
        console.log(`== ${kvp[0]}: ${kvp[1].join(', ')}`)
    }
}

solve([
    'Enroll Stefan',
    'Enroll Pesho',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Pesho ItShouldNotWork',
    'Unlearn Gosho Dispel',
    'Unlearn Stefan ItShouldWork',
    'End'
  ]
  )