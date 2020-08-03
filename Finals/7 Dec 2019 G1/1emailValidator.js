function solve(arr){
    let email = arr.shift();

    while((line = arr.shift()) !== 'Complete'){
        let [command, arg] = line.split(' ');

        switch (command) {
            case 'Make':
                if (arg === 'Upper'){
                    email = email.toUpperCase();
                } else if (arg === 'Lower'){
                    email = email.toLowerCase();
                }
                console.log(email)
                break;
        
            case 'GetDomain':
                let count = Number(arg);
                console.log(email.substr(email.length - count, count))
                break;

            case 'GetUsername':
                if (email.includes('@')){
                    console.log(email.substring(0, email.indexOf('@')))
                } else {
                    console.log(`The email ${email} doesn't contain the @ symbol.`)
                }
                break;

            case 'Replace':
                while (email.includes(arg)){
                    email = email.replace(arg, '-')
                }
                console.log(email);
                break;

            case 'Encrypt':
                let chars = [];
                for (let char of email){
                    chars.push(char.charCodeAt(0))
                }
                console.log(chars.join(' '))
        }       

    }
}

solve([
    'Mike123@somemail.com',
    'Make Upper',
    'GetDomain 3',
    'GetUsername',
    'Encrypt',
    'Complete'
  ]
  )