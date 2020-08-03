function solve(arr){
    let pattern = /(.+)>(?<G1>\d{3})\|(?<G2>[a-z]{3})\|(?<G3>[A-Z]{3})\|(?<G4>[^<>]{3})<\1/;
    let count = Number(arr.shift());

    for (let i = 0; i < count; i++){
        let match = arr[i].match(pattern);
        if (match){
            let groups = arr[i].match(pattern).groups;
            console.log(`Password: ${groups.G1 + groups.G2 + groups.G3 + groups.G4}`)
        } else {
            console.log('Try another password!')
        }
    }
    
}

solve([
    '5',
    'aa>111|mqu|BAU|mqu<aa',
    '()>111!aaa!AAA!^&*<()',
    'o>088|abc|AAA|***<o',
    'asd>asd|asd|ASD|asd<asd',
    '*>088|zzzz|ZzZ|123<*'
  ]
  )