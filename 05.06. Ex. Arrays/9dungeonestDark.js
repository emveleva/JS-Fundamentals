function solve(rooms){
    let str = rooms[0].split("|");
    let initialHealth = 100;
    let initialCoins = 0;
    let roomCounter = 0;
    let isDead = false;
    let string = rooms;
    let currentHealth = 100;
    
    for (let i = 0; i < str.length; i++){
        roomCounter++;
        let [command, number] = str[i].split(' ');
        
        number = Number(number);

        switch (command){
            case "potion":
                if (currentHealth < 100 && currentHealth + number <= 100){
                    currentHealth += number;
                    console.log(`You healed for ${number} hp.`)
                } else {
                    console.log(`You healed for ${initialHealth - currentHealth} hp.`)
                        currentHealth = 100;
                }
                  
                console.log(`Current health: ${currentHealth} hp.`)
            break;
            case "chest":
                initialCoins += number;
                console.log(`You found ${number} coins.`)
            break;
            default:
                if (currentHealth > number){
                    currentHealth -= number;
                    console.log(`You slayed ${command}.`)
                } else {
                    console.log(`You died! Killed by ${command}.`)
                    console.log(`Best room: ${roomCounter}`)
                    isDead = true;
                    break;
                }
               
                
        }
        if (isDead){
            break;
        }
    }
    if (isDead == false){
        console.log(`You've made it!`);
        console.log(`Coins: ${initialCoins}`)
        console.log(`Health: ${currentHealth}`)
    }
}

solve([ 'cat 10|potion 30|orc 10|chest 10|snake 25|chest 110' ]
)