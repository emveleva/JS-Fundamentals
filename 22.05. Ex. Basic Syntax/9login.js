function solve(input){
    let user = input.shift();
    let correct = user.split("").reverse().join("");
    let pass = input.shift();
    let counter = 1;

    while (pass != correct){
        counter++;
        console.log(`Incorrect password. Try again.`)
        if (counter == 4){
            console.log(`User ${user} blocked!`);
            break;
        }
        pass = input.shift();
    }
    if (pass == correct){
        console.log(`User ${user} logged in.`)
    }
}

solve([ 'sunny', 'rainy', 'cloudy', 'sunny', 'not sunny' ])