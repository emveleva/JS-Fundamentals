function solve(arr){
    let biscuitsDayWorker = Number(arr.shift());
    let totalWorkers = Number(arr.shift());
    let competitorProduction = Number(arr.shift());
    let totalBiscuits = 0;
    let dailyBiscuits = biscuitsDayWorker*totalWorkers;

    for (let day = 0; day < 30; day++){
        if (day % 3 === 0){
            totalBiscuits += dailyBiscuits*0.75;
        } else {
            totalBiscuits += dailyBiscuits;
        }
        totalBiscuits = Math.floor(totalBiscuits);
    }
    console.log(`You have produced ${totalBiscuits} biscuits for the past month.`);
    let difference = Math.max(totalBiscuits, competitorProduction)-Math.min(totalBiscuits, competitorProduction);
    let percentDifference = difference/competitorProduction*100;
    if (totalBiscuits > competitorProduction){
        console.log(`You produce ${percentDifference.toFixed(2)} percent more biscuits.`)
    } else {
        console.log(`You produce ${percentDifference.toFixed(2)} percent less biscuits.`)
    }
}

solve([ '78', '8', '16000' ])