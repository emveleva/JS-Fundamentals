function solve(arr){
    let words = [];

    arr.forEach(word => {
        let entry = {};
        if (words.some(entry => entry.word === word)){
            let objIndex = words.findIndex((entry => entry.word === word))
            words[objIndex].count += 1;
        } else {
            entry.word = word;
            entry.count = 1;
            words.push(entry)
        }
        
    });

    
       words.sort(compare)
           
     
        for (let entry of words){
            console.log(`${entry.word} -> ${entry.count} times`)
        }
    
        function compare(a, b){
            let first = a.count;
            let second = b.count;

            return second - first;
        }
    
}


solve([
    'Here',     'is',
    'the',      'first',
    'sentence', 'Here',
    'is',       'another',
    'sentence', 'And',
    'finally',  'the',
    'third',    'sentence'
  ]
  )