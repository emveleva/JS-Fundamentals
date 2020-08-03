function solve(arr){
    let mine = {};

    for (let i = 0; i < arr.length; i+=2){
        let resource = arr[i];
        let quantity = Number(arr[i+1]);

        if (mine[resource] === undefined){
            mine[resource] = quantity;
        } else {
            mine[resource] += quantity;
        }
    }
    for (let kvp of Object.entries(mine)){
        console.log(`${kvp[0]} -> ${kvp[1]}`)
    }
}

solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    )