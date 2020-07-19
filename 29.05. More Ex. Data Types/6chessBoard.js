function solve(num){

    console.log('<div class="chessboard">');
    let counter = 0;

    for (let div = 1; div <= num; div++){
        console.log('<div>')
        let color = "black"
        counter++;
        if (counter % 2 == 0){
            color = "white"
        }
            for (let span = 1; span <= num; span++){
                
                
                console.log(`<span class="${color}"></span>`)
                
                if (color == "black"){
                    color = "white"
                } else {
                    color = "black";
                }
                
                
            }
        console.log('</div>')
    }
    console.log('</div>')

}

solve(3)