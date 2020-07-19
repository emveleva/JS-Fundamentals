// function solve(elements){
//     let arrayElements = elements;
//     let toSwap = [];
//     let swapped = '';
//     for (let i = 0; i < Math.ceil(elements.length/2); i++){
//         toSwap[i] = elements[i];
//     }
//     for (let i = Math.floor(elements.length/2); i < elements.length; i++){
//         swapped += elements[i] + ' ';
//     }
//     console.log(swapped)
// }


function solve(elements){
    let newString = '';
    
        for (let j = elements.length-1; j >= 0; j--){
            newString += elements[j] + ' ';
            
        }
       
    
    console.log(newString)
}

solve([ '33', '123', '0', 'dd' ])