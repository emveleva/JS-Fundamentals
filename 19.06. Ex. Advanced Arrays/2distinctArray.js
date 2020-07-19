function solve(arr){
    let outputArr = [];
    for (let element of arr){
        if (!outputArr.includes(element)){
            outputArr.push(element)
        }
    }
    console.log(outputArr.join(' '))
    
}