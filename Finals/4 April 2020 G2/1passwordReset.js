function solve(arr){
    let password = arr.shift();
    while ((line = arr.shift())!== 'Done'){
        let [command, arg1, arg2] = line.split(' ');
        
        switch (command) {
            case 'TakeOdd':
                let passwordOdd = '';
                for (let i in password){
                    if (i % 2 !== 0){
                        passwordOdd += password[i];
                    }
                }
                password = passwordOdd;
                console.log(password)
                break;
        
            case 'Cut':
                let index = Number(arg1);
                let length = Number(arg2);
                let substring = password.substring(index, index+length);
                password = password.replace(substring, '')
                console.log(password)
                break;

            case 'Substitute':
                if (!password.includes(arg1)){
                    console.log('Nothing to replace!')
                } else {
                while (password.includes(arg1)){
                    let tempPass = password.replace(arg1, arg2);
                    if (tempPass !== password){
                        password = tempPass;
                    }
                } 
                console.log(password)
                break;
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