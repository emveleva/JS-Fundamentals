function solve(arr){
    let parkingLot = [];

    for (let i = 0; i < arr.length; i++){
        let [direction, carNumber] = arr[i].split(', ');

        if (direction === 'IN' && !parkingLot.includes(carNumber)){
            parkingLot.push(carNumber);
        } else if (direction === 'OUT' && parkingLot.includes(carNumber)){
            parkingLot.splice(parkingLot.indexOf(carNumber), 1)
        }
    }
    if (parkingLot.length < 1){
        console.log('Parking Lot is Empty')
    } else {
    let sorted = parkingLot.sort((a, b) => a.localeCompare(b))
    console.log(sorted.join('\n'))
    }
}

solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CB2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
  ]
  )