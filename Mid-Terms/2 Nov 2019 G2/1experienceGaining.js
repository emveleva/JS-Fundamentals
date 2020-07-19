function solve(arr){
    let experienceNeeded = Number(arr.shift());
    let battlesCount = Number(arr.shift());
    let gainedExperience = 0;
    let counter = 0;
    let gained = false;

    for (let i = 0; i < battlesCount; i++){
        let currentExperience = Number(arr.shift());
        counter++;
        if (counter % 3 === 0){
            gainedExperience += currentExperience + currentExperience*0.15;
        } else if (counter % 5 === 0){
            gainedExperience += currentExperience - currentExperience*0.10;
        } else {
            gainedExperience += currentExperience;
        }
        if (gainedExperience >= experienceNeeded){
            console.log(`Player successfully collected his needed experience for ${counter} battles.`);
            gained = true;
            break;
        }
        

    }
    if (gained == false){
        let experienceLeft = experienceNeeded - gainedExperience;
        console.log(`Player was not able to collect the needed experience, ${experienceLeft.toFixed(2)} more needed.`)
    }
}

solve([
    '500', '5',
    '50',  '100',
    '200', '100',
    '30'
  ]
  )