function solve(arr){
    let inventory = arr.shift().split(' ');

    for( let i = 0; i < arr.length; i++){
        let commands = arr[i].slice().split(' ')
        let command = commands[0];
        let equipment = commands[1];

        switch (command) {
            case 'Buy':
                if (!inventory.includes(equipment)){
                    inventory.push(equipment);
                }                
                break;
                
            case 'Trash':
                if (inventory.includes(equipment)){
                    inventory.splice(inventory.indexOf(equipment), 1);
                }
                break;
            
            case 'Repair':
                for (let i = 0; i < inventory.length; i++) {
                    if (equipment === inventory[i]) {
                        let repaired = inventory.splice(i, 1);
                        inventory.push(repaired.toString());
                    }
                }
                break;
            
            case 'Upgrade':
                
                    let item = equipment.split("-");
                    for (let i = 0; i < inventory.length; i++) {
                        if (item[0] === inventory[i]) {
                        let newItem = item[0] + ":" + item[1];
                        inventory.splice(i + 1, 0, newItem);
                    }
                
            }
            
                break;
        }
    }
    console.log(inventory.join(' '))
}

solve([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
  ]
  )