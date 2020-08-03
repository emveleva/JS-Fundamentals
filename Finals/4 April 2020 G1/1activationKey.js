function solve(arr){
    let rawKey = arr.shift();

    while ((line = arr.shift()) !== 'Generate'){
        let [command, arg1, arg2, arg3] = line.split('>>>');

        switch (command) {
            case 'Contains':
                if (rawKey.includes(arg1)){
                    console.log(`${rawKey} contains ${arg1}`)
                } else {
                    console.log('Substring not found!')
                }
                break;
            
            case 'Flip':
                let startIndex = Number(arg2);
                let endIndex = Number(arg3);
                let substring = rawKey.substring(startIndex, endIndex);
                if (arg1 === 'Upper'){
                    rawKey = rawKey.replace(substring, substring.toUpperCase())
                } else {
                    rawKey = rawKey.replace(substring, substring.toLowerCase())
                }
                console.log(rawKey)
                break;

            case 'Slice':
                let startSlice = Number(arg1);
                let endSlice = Number(arg2);
                let sliced = rawKey.substring(startSlice, endSlice);
                rawKey = rawKey.replace(sliced, '')
                console.log(rawKey)
                break;
        }
    }
    console.log(`Your activation key is: ${rawKey}`)
}

solve([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
  ]
  )