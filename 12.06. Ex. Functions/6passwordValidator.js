function solve(pass){
    
    if (!length(pass)){
        console.log('Password must be between 6 and 10 characters')
    }
    if (!lettersDigits(pass)){
        console.log('Password must consist only of letters and digits')
    }
    if (!reqDigits(pass)){
        console.log('Password must have at least 2 digits')
    }
    if (length(pass) && lettersDigits(pass) && reqDigits(pass)){
        console.log('Password is valid')
    }

    function length(pass){
        if (pass.length > 5 && pass.length < 11){
            return true;
        }
    }
    function lettersDigits(pass){
        let isOkay = false;
        for (let i = 0; i < pass.length; i++){
            let el = pass.charCodeAt(i);
            if ((el > 47 && el < 58) || (el > 64 && el < 91) || (el >96 && el < 123) ){
                isOkay =  true;
            } else {
                isOkay = false;
                break;
            }
        }
        return isOkay;
    }

    function reqDigits(pass){
        let counter = 0;
        let isOkay = false;
        for (let char of pass){
            let n = char.charCodeAt(0);
            if (n > 47 && n < 58){
                counter++;
            }
            if (counter === 2){
                isOkay = true;
                break;
            }
        }
        return isOkay;
        
    }


}


solve('MyPass123')