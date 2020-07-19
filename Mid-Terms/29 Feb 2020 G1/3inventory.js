function solve(arr){
    let collectingItems = arr.shift().split(', ');

    for (let i = 0; i < arr.length; i++){
        let [command, item] = arr[i].split(' - ');

        switch (command) {
            case 'Collect':
                if (!collectingItems.includes(item)){
                    collectingItems.push(item);
                }
                break;
            
            case 'Drop':
                if (collectingItems.includes(item)){
                    collectingItems = collectingItems.filter(n => n !== item);
                }
                break;

            case 'Combine Items':
                let [command, items] = arr[i].split(' - ');
                let [oldItem, newItem] = items.split(':');
                if (collectingItems.includes(oldItem)){
                    let index = collectingItems.indexOf(oldItem);
                    collectingItems.splice(index+1, 0, newItem);
                }
                break;
            
            case 'Renew':
                if (collectingItems.includes(item)){
                    let index = collectingItems.indexOf(item);
                    let movingItem = collectingItems[index];
                    collectingItems.splice(index, 1);
                    collectingItems.push(movingItem);
                    
                    

                }
                
                break;
        }
    }
    console.log(collectingItems.join(', '));
}

solve([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])