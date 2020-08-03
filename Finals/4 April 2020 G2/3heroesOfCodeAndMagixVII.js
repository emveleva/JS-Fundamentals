function solve(arr){
    let characters = Number(arr.shift());
    let heroes = {};
    for (let i = 0; i < characters; i++){
        let [heroName, HP, MP] = arr.shift().split(' ');
        heroes[heroName] = {HP: Number(HP), MP: Number(MP)}
    }
    while ((line = arr.shift()) !== 'End'){
        let [command, name, arg2, arg3] = line.split(' - ');

        switch (command) {
            case 'CastSpell':
                let neededMP = Number(arg2);
                if (heroes[name].MP >= neededMP){
                    heroes[name].MP -= neededMP;
                    console.log(`${name} has successfully cast ${arg3} and now has ${heroes[name].MP} MP!`)
                } else {
                    console.log(`${name} does not have enough MP to cast ${arg3}!`)
                }
                break;
            case 'TakeDamage':
                let damage = Number(arg2);
                if (heroes[name].HP - damage > 0){
                    heroes[name].HP -= damage;
                    console.log(`${name} was hit for ${damage} HP by ${arg3} and now has ${heroes[name].HP} HP left!`)
                } else {
                    console.log(`${name} has been killed by ${arg3}!`);
                    delete heroes[name];
                }
                break;
            case 'Recharge':
                let rechargeAmount = Number(arg2);
                let oldMP = heroes[name].MP;
                heroes[name].MP = Math.min(heroes[name].MP + rechargeAmount, 200);
                console.log(`${name} recharged for ${heroes[name].MP - oldMP} MP!`)
                break;

            case 'Heal':
                let healAmount = Number(arg2);
                let oldHealth = heroes[name].HP;
                heroes[name].HP = Math.min(heroes[name].HP + healAmount, 100);
                console.log(`${name} healed for ${heroes[name].HP - oldHealth} HP!`)
                break;
        }
    }
    let nameSort = Object.entries(heroes).sort((a, b) => a[0].localeCompare(b[0]));
    let hpSort = nameSort.sort((a, b) => b[1].HP - a[1].HP);
 
 
    for (let kvp of hpSort) {
        console.log(kvp[0]);
        console.log(`  HP: ${kvp[1].HP}`);
        console.log(`  MP: ${kvp[1].MP}`);
    }
}

solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
  ]
  )