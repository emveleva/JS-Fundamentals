function solve(text){
    let indexToCut = text.lastIndexOf(`\\`);
    let fileDetails = text.substring(indexToCut+1);
    let indexDot = fileDetails.lastIndexOf('.');
    console.log(`File name: ${fileDetails.substring(0, indexDot)}`);
    console.log(`File extension: ${fileDetails.substring(indexDot+1)}`)
    
}

solve('C:\\Internal\\training-internal\\Template.bak.pptx')