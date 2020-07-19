function solve(arr){
    let storedUsernames = arr.shift().split(', ');
    let lost = 0;
    let blacklisted = 0;

    while ((line = arr.shift()) !== 'Report'){
        let [command, name, newName] = line.split(' ');

        switch (command) {
            case 'Blacklist':
                if (storedUsernames.includes(name)){
                    storedUsernames.splice(storedUsernames.indexOf(name), 1, 'Blacklisted');
                    console.log(`${name} was blacklisted.`);
                    blacklisted++;
                } else {
                    console.log(`${name} was not found.`)
                }
                break;
            case 'Error':
                let index1 = name;
                name = storedUsernames[index1];
                if (storedUsernames[index1] !== 'Blacklisted' && storedUsernames[index1] !== 'Lost'){
                    storedUsernames.splice(index1, 1, 'Lost');
                    console.log(`${name} was lost due to an error.`);
                    lost++;
                }
                break;
            case 'Change':
                let index2 = name;
                if (storedUsernames[index2] === undefined){
                    continue;
                } else {
                    name = storedUsernames[index2];
                    storedUsernames.splice(index2, 1, newName);
                    console.log(`${name} changed his username to ${newName}.`)
                }
            
                break;
        }
    }
    console.log(`Blacklisted names: ${blacklisted}`);
    console.log(`Lost names: ${lost}`);
    console.log(storedUsernames.join(' '))
}

solve([
    'Mike, John, Eddie',
    'Blacklist Mike',
    'Error 0',
    'Error 1',
    'Change 2 Mike123',
    'Report'
  ]
  )