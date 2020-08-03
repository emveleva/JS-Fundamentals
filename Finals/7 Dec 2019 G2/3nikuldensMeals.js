function solve(arr){
    let guests = {};
    let unlikedMeals = 0;

    while ((line = arr.shift()) !== 'Stop'){
        let [command, guest, meal] = line.split('-');

        switch (command) {
            case 'Like':
                if (guests[guest] === undefined){
                    guests[guest] = [];
                } 
                if (!guests[guest].includes(meal)){
                    guests[guest].push(meal)
                }
                break;
        
            case 'Unlike':
                if (guests[guest] === undefined){
                    console.log(`${guest} is not at the party.`)
                } else {
                if (guests[guest].includes(meal)){
                    guests[guest].splice(guests[guest].indexOf(meal), 1);
                    console.log(`${guest} doesn't like the ${meal}.`)
                    unlikedMeals++;
                } else {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`)
                }
            }
                break;
        }
    }
    let nameSort = Object.entries(guests).sort((a, b) => a[0].localeCompare(b[0]));
    let likedMealsSort = nameSort.sort((a, b) => b[1].length - a[1].length);

    for (let kvp of likedMealsSort){
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`)
    }
    console.log(`Unliked meals: ${unlikedMeals}`)
}

solve([
    'Like-Mike-frenchFries',
    'Like-Mike-salad',
    'Like-George-fruit',
    'Like-Steven-salad',
    'Unlike-Steven-salad',
    'Unlike-Steven-fruit',
    'Stop'
  ]
  )