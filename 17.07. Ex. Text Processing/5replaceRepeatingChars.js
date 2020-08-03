function solve(string){
    let newString = '';
    let chars = string.split('');
    for (let i = 0; i < chars.length; i++){
        if (chars[i] !== chars[i+1]){
            newString += chars[i]
        }
    }
    console.log(newString)
}

solve('aaaaabbbbbcdddeeeedssaa')