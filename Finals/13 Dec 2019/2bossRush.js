function solve(arr){
    let lines = Number(arr.shift());

    let pattern = /(\|[A-Z]{4,}\|:#[A-Za-z]+\s[A-Za-z]+#)/g;

    for (let i = 0; i < lines; i++){
        if (arr[i].match(pattern)){
            let validInput = arr[i].split('|:#');
            let name = validInput[0].replace('|', '');
            let title = validInput[1].replace('#', '')
            console.log(`${name}, The ${title}`)
            let strength = name.length;
            let armour = title.length;
            console.log(`>> Strength: ${strength}`);
            console.log(`>> Armour: ${armour}`)
        } else {
            console.log('Access denied!')
        }

    }

}

solve([
    '3',
    '|PETER|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'
  ]
  
  )