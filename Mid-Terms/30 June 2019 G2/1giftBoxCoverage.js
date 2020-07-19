function solve(arr){
    let sizeOfSide = Number(arr.shift());
    let sheetsOfPaper = Number(arr.shift());
    let singleAreaCover = Number(arr.shift());

    let totalArea = 6 * sizeOfSide * sizeOfSide;
    let coveredArea = 0;


    for (let i = 1; i <= sheetsOfPaper; i++){
        if (i % 3 === 0){
            coveredArea += singleAreaCover*0.25;
        } else {
            coveredArea += singleAreaCover;
        }
    }
    let percent = coveredArea/totalArea*100;
    console.log(`You can cover ${percent.toFixed(2)}% of the box.`)
}

solve([ '2.5', '32', '4.25' ]
)