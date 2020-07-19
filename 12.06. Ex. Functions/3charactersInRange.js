function solve(charOne, charTwo){
    let print = '';
    let start = Math.min(charOne.charCodeAt(0), charTwo.charCodeAt(0));
    let end = Math.max(charOne.charCodeAt(0), charTwo.charCodeAt(0));
    for (let i = start+1; i < end; i++){
        print += String.fromCharCode(i) + ' ';
    }
    console.log(print)
}

solve('#', ':')