function solve(number){
    let arr = [];
    let times = number/10;
    for (let i = 0; i < 10; i++){
        
        if (i < times){
            arr += "%";
        } else {
            arr += ".";
        } 
        

    }
    if (times === 10) {
        console.log(`100% Complete!`);
        console.log(`[${arr}]`)
    } else {
    console.log(`${number}% [${arr}]`)
    console.log(`Still loading...`)
    }
    
}

solve(30)