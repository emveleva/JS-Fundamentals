function solve(arr){
    let message = arr.shift();
 
    while ((line = arr.shift()) !== 'Reveal'){
        let [command, arg1, arg2] = line.split(':|:');

        switch (command) {
            case 'InsertSpace':
                let insertIndex = Number(arg1);
                message = message.substr(0, insertIndex) + ' ' + message.substr(insertIndex);
                console.log(message)
                break;
        
            case 'Reverse':
                if (message.includes(arg1)){
                    let reversed = ''
                    for (let i = arg1.length - 1; i >= 0; i--){
                        reversed += arg1[i]
                    }
                    message = message.replace(arg1, '');
                    message += reversed
                    console.log(message)
                } else {
                    console.log('error')
                }
                break;

            case 'ChangeAll':
                while (message.includes(arg1)){
                    message = message.replace(arg1, arg2)
                }
                console.log(message)
                break;
        }
    }
    console.log(`You have a new text message: ${message}`)
}

solve([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]
  
  )