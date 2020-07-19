function solve(base, increment){
    let stoneTotal = 0;
    let gold = 0;
    let lapisLazuliTotal = 0;
    let marbleTotal = 0;
    let height = 0;
    let counter = 0;
    
    for (let i = base; i >= 1; i-=2){
        counter++;
        let stone = 0;
        let marble = 0;
        let lapisLazuli = 0;
        let area = i*i;
        let par = i * 4;
        if (i - 2 < 1){
            gold += Math.ceil(area*increment);
        } else if (counter % 5 === 0){
            lapisLazuli = (par - 4);
            lapisLazuliTotal += lapisLazuli*increment;
            stone = area - lapisLazuli;
            stoneTotal += stone*increment;
        } else {
            marble = (par-4);
            marbleTotal += marble*increment;
            stone = area - marble;
            stoneTotal += stone*increment;
        }
        
        
    }
    console.log(`Stone required: ${Math.ceil(stoneTotal)}`)
    console.log(`Marble required: ${Math.ceil(marbleTotal)}`)
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuliTotal)}`)
    console.log(`Gold required: ${(gold)}`)
    console.log(`Final pyramid height: ${Math.floor(counter*increment)}`)
}
solve(11, 1)