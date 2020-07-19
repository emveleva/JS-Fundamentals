function solve(arr){
    let x1 = arr.shift();
    let y1 = arr.shift();
    let x2 = arr.shift();
    let y2 = arr.shift();
    

    function checkPointsDistance(x1, y1, x2, y2){
    let a = x1 - x2;
    let b = y1 - y2;
    let c = Math.sqrt(a*a + b*b);
    return c;
    }

    function checkToBase(x1, y1){
        let a = x1;
        let b = y1;
        let c = Math.sqrt(a*a + b*b);
        return c;
    }
    
    let result = '';
    
    if (checkToBase(x1, y1) % 1 === 0){
        result = "valid";
    } else {
        result = 'invalid';
    }
        console.log(`{${x1}, ${y1}} to {0, 0} is ${result}`);
    if (checkToBase(x2, y2) % 1 == 0){
        result = "valid";
    } else {
        result = 'invalid';
    }   
        console.log(`{${x2}, ${y2}} to {0, 0} is ${result}`);
    if (checkPointsDistance(x1, y1, x2, y2) % 1 == 0){
        result = "valid";
    } else {
        result = 'invalid';
    }
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${result}`);

}
solve([2, 1, 1, 1])