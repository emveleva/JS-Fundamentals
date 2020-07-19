function solve(arr){
   let numbers =  arr.split(' ').map(Number);
 
   
    numbers.sort((a, b) => b - a);
   

    let average = 0;
    for (let el of numbers){
        average += el;
    }
    average = average/numbers.length;

    let topFive = numbers.filter(n => n > average);
    if (topFive.length < 5 && topFive.length > 0){
        console.log(topFive.join(' '));
    } else if (topFive.length >= 5){
        let firstFive = topFive.slice(0, 5);
        console.log(firstFive.join(' '))
    } else {
        console.log('No')
    }
}

solve('10 20 30 40 50')

