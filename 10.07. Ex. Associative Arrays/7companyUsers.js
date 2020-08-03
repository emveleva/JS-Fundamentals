function solve(arr){
    let users = {};

    for (let i = 0; i < arr.length; i++){
        let [companyName, userID] = arr[i].split(' -> ');

        if (users[companyName] === undefined){
            users[companyName] = [];
        }
        if (!users[companyName].includes(userID)){
            users[companyName].push(userID)
        }
    }
    let nameSort = Object.entries(users).sort((a, b) => a[0].localeCompare(b[0]))
    for (let kvp of nameSort){
        console.log(kvp[0]);
        for (let i = 0; i < kvp[1].length; i++){
            console.log(`-- ${kvp[1][i]}`)
        }
        }
    
}

solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )