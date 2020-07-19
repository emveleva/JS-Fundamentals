function solve(arr){
    let piratingDays = Number(arr.shift());
    let plunderPerDay = Number(arr.shift());
    let expectedPlunder = Number(arr.shift());
    let collectedPlunder = 0;

    for (let day = 1; day <= piratingDays; day++){
        collectedPlunder += plunderPerDay;
        if (day % 3 === 0){
            collectedPlunder += plunderPerDay*0.50;
        }
        if (day % 5 === 0){
              collectedPlunder -= collectedPlunder*0.30;
        } 

    
}
    if (collectedPlunder >= expectedPlunder){
        console.log(`Ahoy! ${collectedPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = collectedPlunder/expectedPlunder*100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
    }

} 

solve([ '10', '20', '380' ]
)