function solve(numOne, numTwo){
    let n = numOne;
    let k = numTwo;
    let print = [1];        
    for (let i = 1; i < n; i++){
        let nextElement = 0;
        let initialIndex = Math.max(print.length - k, 0);
        for (let j = initialIndex; j < print.length; j++){
            nextElement += print[j];
        }
        print.push(nextElement);

    }
    console.log(print.join(' '))
}
solve(6, 3)