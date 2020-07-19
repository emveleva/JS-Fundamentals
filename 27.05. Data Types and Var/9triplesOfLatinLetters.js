function solve(num){
    for (let i = 0; i < num; i++){
        let letterOne = String.fromCharCode(97+i);
        for (let j = 0; j < num; j++){
            let letterTwo = String.fromCharCode(97+j);
            for (let k = 0; k < num; k++){
                let letterThree = String.fromCharCode(97+k);
                console.log(`${letterOne}${letterTwo}${letterThree}`)
            }
        }

    }
}
solve(3)