function solve(arr){
    let password = arr.shift();

    while ((line = arr.shift()) !== 'Done'){
        let [command, arg1, arg2] = line.split(' ');

        switch (command) {
            case 'TakeOdd':
                let passwordOdd = ''
                for (let i in password){
                    if (i % 2 !== 0){
                        passwordOdd += password[i];
                    }
                }
                console.log(passwordOdd)
                password = passwordOdd;
                break;
        
            case 'Cut':
                let index = Number(arg1);
                let length = Number(arg2);
                let substring = password.substring(index, index + length);
                password = password.replace(substring, '')
                console.log(password)
                break;

            case 'Substitute':
                let oldPassword = password;
                while (password.includes(arg1)){
                   password = password.replace(arg1, arg2); 
                }
                if (oldPassword === password){
                    console.log('Nothing to replace!')
                } else {
                    console.log(password)
                }
        }
    }
    console.log(`Your password is: ${password}`)
}

solve([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
  ]
  )