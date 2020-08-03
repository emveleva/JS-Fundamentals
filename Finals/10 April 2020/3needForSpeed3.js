function solve(arr){
    let totalCars = Number(arr.shift());
    let cars = {};
    for (let i = 0; i < totalCars; i++){
        let [name, mileage, fuel] = arr.shift().split('|');
        cars[name] = {carMileage: Number(mileage), carFuel: Number(fuel)}
    }
    while ((line = arr.shift()) !== 'Stop'){
        let [command, car, arg1, arg2] = line.split(' : ')
        
        switch (command) {
            case 'Drive':
                let driveDistance = Number(arg1);
                let driveFuel = Number(arg2);
                if (cars[car].carFuel < driveFuel){
                    console.log('Not enough fuel to make that ride')
                } else {
                    cars[car].carFuel -= driveFuel;
                    cars[car].carMileage += driveDistance;
                    console.log(`${car} driven for ${driveDistance} kilometers. ${driveFuel} liters of fuel consumed.`)
                }
                if (cars[car].carMileage >= 100000){
                    delete cars[car];
                    console.log(`Time to sell the ${car}!`)
                } 
                break;
        
            case 'Refuel':
                let refuel = Number(arg1);
                let beforeRefuel = cars[car].carFuel;
                cars[car].carFuel = Math.min(cars[car].carFuel + refuel, 75);
                let refueledLiters = cars[car].carFuel - beforeRefuel;
                console.log(`${car} refueled with ${refueledLiters} liters`)
                break;

            case 'Revert':
                let revertKilometers = Number(arg1);
                cars[car].carMileage -= revertKilometers;
                if (cars[car].carMileage < 10000){
                    cars[car].carMileage = 10000;
                } else {
                    console.log(`${car} mileage decreased by ${revertKilometers} kilometers`)
                }
                break;
        }
    }
    let nameSort = Object.entries(cars).sort((a, b) => a[0].localeCompare(b[0]));
    let mileageSort = nameSort.sort((a, b) => b[1].carMileage - a[1].carMileage);

    for (let kvp of mileageSort){
        console.log(`${kvp[0]} -> Mileage: ${kvp[1].carMileage} kms, Fuel in the tank: ${kvp[1].carFuel} lt.`)
    }
    
}

solve([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
  )