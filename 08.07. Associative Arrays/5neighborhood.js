function solve(arr){
    let mapNeighborhoods = new Map();
    let neighborhoods = arr.shift().split(', ')

    for (let neighborhood of neighborhoods){
        mapNeighborhoods.set(neighborhood, []);
    }

    for (let line of arr){
        let [neighborhood, person] = line.split(' - ');
        if (neighborhoods.includes(neighborhood)){
            mapNeighborhoods.get(neighborhood).push(person);
        }
    }
    let sorted = Array.from(mapNeighborhoods).sort((a, b) => b[1].length - a[1].length);

    for (let kvp of sorted){
        console.log(`${kvp[0]}: ${kvp[1].length}`)
        if (kvp[1].length > 0){
            for (let i = 0; i < kvp[1].length; i++){
                console.log(`--${kvp[1][i]}`)
            }
        }

        
    }
}

solve([
    'Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
  ]
  )