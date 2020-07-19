function solve(input){
    let data = {};

    for (let line of input){
        let tokens = line.split(' | ');

        const obj = {
        name: tokens[0],
        latitude: Number(tokens[1]).toFixed(2),
        longtitude: Number(tokens[2]).toFixed(2),
    };
    console.log(obj);
}

    
}

solve([ 'Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625' ])