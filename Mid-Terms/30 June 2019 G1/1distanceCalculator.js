function solve(arr){
    let stepsMade = Number(arr.shift());
    let lengthOfStepCm = Number(arr.shift());
    let distanceMeters = Number(arr.shift());
    let passedDistance = 0;

    let lengthMeters = lengthOfStepCm/100;
    
    for (let i = 1; i <= stepsMade; i++){
        if (i % 5 === 0){
            passedDistance += lengthMeters - lengthMeters*0.30;
        } else {
            passedDistance += lengthMeters;
        }
    }
    let percent = passedDistance/distanceMeters*100;
    console.log(`You travelled ${percent.toFixed(2)}% of the distance!`)
}

solve([ '5000', '7.5', '500' ]
)