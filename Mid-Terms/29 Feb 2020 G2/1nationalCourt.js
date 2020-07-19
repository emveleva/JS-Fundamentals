function solve(arr){
    let hours = 0;
    let totalGuests = Number(arr[3]);
    while (totalGuests > 0){
        hours++;
        if (hours % 4 === 0){
            hours++;
        }
        for (let i = 0; i < 3; i++){
            if (totalGuests > 0){
                totalGuests -= Number(arr[i]);
            }
        }
    }
    console.log(`Time needed: ${hours}h.`)
}

solve([ '1', '2', '3', '45' ])
