function solve(age){
    if (0 <= age && age <= 2){
        console.log("baby");
    } else if (2 < age && age <= 13){
        console.log("child");
    } else if (13 < age && age <= 19){
        console.log("teenager");
    } else if (19 < age && age <= 65){
        console.log("adult");
    } else if (age >= 66){
        console.log("elder");
    } else {
        console.log("out of bounds")
    }
}