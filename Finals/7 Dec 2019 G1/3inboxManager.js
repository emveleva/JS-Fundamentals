function solve(arr){
    let users = {};

    while ((line = arr.shift()) !== 'Statistics'){
        let [command, username, email] = line.split('->');

        switch (command) {
            case 'Add':
                if (users[username] === undefined){
                    users[username] = [];
                } else {
                    console.log(`${username} is already registered`)
                }
                break;
        
            case 'Send':
                if (users[username] !== undefined){
                users[username].push(email)
                }
                break;

            case 'Delete':
                if (users[username] !== undefined){
                    delete users[username];
                } else {
                    console.log(`${username} not found!`)
                }
                break;
        }   
    }

    let toBeSorted = Object.entries(users);
    let emailSort = toBeSorted.sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))
    
    console.log(`Users count: ${Object.keys(emailSort).length}`)
    for (let kvp of emailSort){
        console.log(kvp[0])
        if (kvp[1].length > 0){
            console.log(` - ${kvp[1].join('\n - ')}`)
        }
    }   
}

solve([
    'Add->Mike',
    'Add->George',
    'Send->kk->Hello World',
    'Send->kk->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
  ]
  )