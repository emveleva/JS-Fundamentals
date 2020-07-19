function solve(arg1, arg2, arg3){
    let print = '';
    for (let i = 0; i < 3; i++){
        if (i == 0){
            print += arg3;
            print += ' ';
        } else if (i == 1){
            print += arg2;
            print += ' ';
        } else {
            print += arg1;
        }
    }
    console.log(`${print}`)
}

