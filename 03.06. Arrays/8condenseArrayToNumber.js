function solve(num){
    let condensed = num;

    while (condensed.length > 1){
     let tempCondensed = [];
    for (let i = 0; i < condensed.length-1; i++){
        tempCondensed[i] = condensed[i] + condensed[i+1];
        
    
}
condensed = tempCondensed;
    }
    console.log(condensed[0])

}

solve([ 2, 10, 3 ])