function solve(arr){
    let count = Number(arr.shift());
    let pattern = /^(@[#]{1,})([A-Z][A-Za-z0-9]{4,}[A-Z])(@[#]{1,})/g;
    for (let i = 0; i < arr.length; i++){
        if (arr[i].match(pattern)){
            let productGroup = '';
            for (let char of arr[i]){
                let code = char.charCodeAt(0);
                if (char.charCodeAt(0) > 46 && char.charCodeAt(0) < 58 ){
                    productGroup += char;
                } 
            }   
            if (productGroup.length === 0){
                productGroup = '00'
            }
            console.log(`Product group: ${productGroup}`)
        } else {
            console.log('Invalid barcode')
        }
    }
}

solve([
    '6',
    '@###Val1d1teM@###',
    '@#ValidIteM@#',
    '##InvaliDiteM##',
    '@InvalidIteM@',
    '@#Invalid_IteM@#',
    '@#ValiditeM@#'
  ]
  )