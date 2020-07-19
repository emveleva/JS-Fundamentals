function solve(arr){
 let neighborhood = arr[0].split('@').map(Number);
 let cupid = 0;
 let hadValentines = [];
 for (let i = 1; i < arr.length-1; i++){
    let [command, length] = arr[i].split(' ');
    length = Number(length);
    cupid += length;
    if (cupid > neighborhood.length-1){
        cupid = 0;
    }
    
    if (neighborhood[cupid] > 0){
        neighborhood[cupid] -= 2;
    } 
    if (neighborhood[cupid] == 0 && !hadValentines.includes(cupid)){
            console.log(`Place ${cupid} has Valentine's day.`);
            hadValentines.push(cupid);
        } else if (hadValentines.includes(cupid)){
            console.log(`Place ${cupid} already had Valentine's day.`)
        }
    
    }
    console.log(`Cupid's last position was ${cupid}.`);
    let failed = neighborhood.length - hadValentines.length;
    if (failed > 0){
        console.log(`Cupid has failed ${failed} places.`)
    } else {
        console.log(`Mission was successful.`)
    }
    
}

solve([ '10@10@10@2', 'Jump 1', 'Jump 2', 'Love!' ])