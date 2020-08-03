function solve(arr){
    let username = arr.shift();

    while ((line = arr.shift()) !== 'Sign up'){
        let [command, arg1, arg2] = line.split(' ');

        switch (command) {
            case 'Case':
                if (arg1 === 'lower'){
                    username = username.toLowerCase();
                } else if (arg1 === 'upper'){
                    username = username.toUpperCase();
                }
                console.log(username)
                break;
        
            case 'Reverse':
                let startIndex = Number(arg1);
                let endIndex = Number(arg2);
                if (username[startIndex] !== undefined && username[endIndex] !== undefined && startIndex < endIndex){
                    let substring = username.substring(startIndex, endIndex+1).split('').reverse().join('');
                    console.log(substring)
                }
                break;

            case 'Cut':
                if (username.includes(arg1)){
                    username = username.replace(arg1, '');
                    console.log(username)
                } else {
                    console.log(`The word ${username} doesn't contain ${arg1}.`)
                }
                break;

            case 'Replace':
                while (username.includes(arg1)){
                    username = username.replace(arg1, '*')
                }
                console.log(username)
                break;

            case 'Check':
                if (username.includes(arg1)){
                    console.log('Valid')
                } else {
                    console.log(`Your username must contain ${arg1}.`)
                }
                break;
        }
    }
}


solve([ 'ThisIsMyString', 'Case lower', 'Reverse 2 3', 'Reverse 11 13', 'Cut th', 'Replace i', 'Check s', 'Check p', 'Sign up' ])