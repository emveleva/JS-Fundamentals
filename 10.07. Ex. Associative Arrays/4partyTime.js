function solve(arr){
    let VIP = [];
    let regular = [];
    let pattern = /[\d]/g;

    while ((line = arr.shift()) !== 'PARTY'){
        let guest = line;
        if (guest[0].match(pattern)){
            VIP.push(guest);
        } else {
            regular.push(guest)
        }
    }

    for (let i = 0; i < arr.length; i++){
        let incomingGuest = arr[i];
        if (VIP.includes(incomingGuest)){
            let indexVIP = VIP.indexOf(incomingGuest);
            VIP.splice(indexVIP, 1)
        } else {
            let index = regular.indexOf(incomingGuest)
            regular.splice(index, 1)
        }
    }
    console.log(VIP.length + regular.length);
    console.log(VIP.join('\n'));
    console.log(regular.join('\n'))
}

solve(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
)