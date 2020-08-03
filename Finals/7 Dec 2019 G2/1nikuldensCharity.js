function solve(arr){
    let text = arr.shift();

    while ((line = arr.shift()) !== 'Finish'){
        let [command, arg1, arg2] = line.split(' ');

        switch (command) {
            case 'Replace':
                while(text.includes(arg1)){
                    text = text.replace(arg1, arg2)
                }
                console.log(text)    
                break;
        
            case 'Cut':
                let startCutIndex = Number(arg1);
                let endCutIndex = Number(arg2);
                if (text[startCutIndex] !== undefined && text[endCutIndex] !== undefined){
                    let substring = text.substring(startCutIndex, endCutIndex+1);
                    text = text.replace(substring, '')
                    console.log(text);
                } else {
                    console.log('Invalid indexes!')
                }
                break;

            case 'Make':
                if (arg1 === 'Upper'){
                    text = text.toUpperCase();
                } else {
                    text = text.toLowerCase();
                }
                console.log(text)
                break;

            case 'Check':
                if (text.includes(arg1)){
                    console.log(`Message contains ${arg1}`)
                } else {
                    console.log(`Message doesn't contain ${arg1}`)
                }
                break;

            case 'Sum':
                let startSumIndex = Number(arg1);
                let endSumIndex = Number(arg2);
                if (text[startSumIndex] !== undefined && text[endSumIndex] !== undefined){
                    let substringToSum = text.substring(startSumIndex, endSumIndex+1);
                    let sum = 0;
                    for (let char of substringToSum){
                        sum += char.charCodeAt(0);
                    }
                    console.log(sum)
                } else {
                    console.log('Invalid indexes!')
                }
        }
    }
}

solve([
    'DinnerIsServed',
    'Make Upper',
    'Check Dinner',
    'Replace N M',
    'Finish'
  ]
  
  
  )