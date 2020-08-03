function solve(arr){
    let cities = {};
    while ((line = arr.shift()) !== 'Sail'){
        let [name, population, gold] = line.split('||');
        if (cities[name] === undefined){
            cities[name] = {cityPopulation: Number(population), cityGold: Number(gold)};
        } else {
            cities[name].cityPopulation += Number(population);
            cities[name].cityGold += Number(gold);
        }
    }
    
    while ((line = arr.shift()) !== 'End'){
        let [command, town, arg1, arg2] = line.split('=>')

        switch (command) {
            case 'Plunder':
                let plunderPeople = Number(arg1);
                let plunderGold = Number(arg2);
                cities[town].cityPopulation -= plunderPeople;
                cities[town].cityGold -= plunderGold;
                console.log(`${town} plundered! ${plunderGold} gold stolen, ${plunderPeople} citizens killed.`)
                if (cities[town].cityPopulation === 0 || cities[town].cityGold === 0){
                    delete cities[town];
                    console.log(`${town} has been wiped off the map!`);
                }
                break;
        
            case 'Prosper':
                let prosperGold = Number(arg1);
                if (prosperGold < 0){
                    console.log('Gold added cannot be a negative number!')
                } else {
                    cities[town].cityGold += prosperGold;
                    console.log(`${prosperGold} gold added to the city treasury. ${town} now has ${cities[town].cityGold} gold.`)
                }
                break;
        }
    }

let nameSort = Object.entries(cities).sort((a, b) => a[0].localeCompare(b[0]))
let goldSort = nameSort.sort((a, b) => b[1].cityGold - a[1].cityGold)
    let citiesLeft = Object.entries(cities).length;
    if (citiesLeft === 0){
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    } else {
        console.log(`Ahoy, Captain! There are ${citiesLeft} wealthy settlements to go to:`)
        for (let kvp of goldSort){
            console.log(`${kvp[0]} -> Population: ${kvp[1].cityPopulation} citizens, Gold: ${kvp[1].cityGold} kg`)
        }
    }
}

solve([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
  ]
  
  )