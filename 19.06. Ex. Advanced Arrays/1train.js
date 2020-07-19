function solve(arr){
    let train = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());

    for (let command of arr){
        let commandInfo = command.split(" ");
        if (commandInfo.length === 2){
            let wagon = Number(commandInfo);
            train.push(commandInfo[1]);        
        } else {
            let passengers = Number(commandInfo[0]);
            for (let wagon in train){
                let currentPassengers = train[wagon];
                if ((currentPassengers + passengers) <= maxCapacity){
                    train[wagon] += passengers;
                    break;
                }
            }
        }
    }
    console.log(train.join(' '))
}
solve([ '32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75' ])