function solve(arr){
    let finalCount = {};
    let words = arr.shift().split(' ');

    for (let word of words){
        finalCount[word] = 0;

    }
    for (let word of arr){
        
        if (words.includes(word)){
            finalCount[word] += 1;
        
    }
}
let sorted = Array.from(Object.entries(finalCount)).sort((a, b) => b[1] - a[1])
for (let kvp of sorted){
    console.log(`${kvp[0]} - ${kvp[1]}`)
}
}

solve([
    'sentence this', 'In',
    'this',          'sentence',
    'you',           'have',
    'to',            'count',
    'the',           'occurances',
    'of',            'the',
    'words',         'this',
    'and',           'sentence',
    'because',       'this',
    'is',            'your',
    'task'
  ]
  )