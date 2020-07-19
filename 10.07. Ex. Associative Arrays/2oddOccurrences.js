function solve(string){
    let words = string.toLowerCase().split(' ');
    
    let wordsMap = new Map();
    let count = 1;
    for (let i = 0; i < words.length; i++){
        let word = words[i];
    
        
    
        
        if (!wordsMap.has(word)){
            wordsMap.set(word, count);
        } else {
            let oldCount = wordsMap.get(word)
            wordsMap.set(word, oldCount + 1)
        }
    }

    let output = []
   let array = Array.from(wordsMap.entries())

   array.forEach(element => {
       if (element[1] % 2 !== 0){
           output.push(element[0])
       }
   });
   

   console.log(output.join(' '))
}


    


solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')