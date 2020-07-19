function solve(arr){
    let shoppingList = arr[0].split('!');
    
    for (let i = 1; i < arr.length; i++){
        let [command, product] = arr[i].split(' ');

        switch (command) {
            case 'Urgent':
                if (!shoppingList.includes(product)){
                    shoppingList.unshift(product);
                }
                break;
            case 'Unnecessary':
                if (shoppingList.includes(product)){
                    shoppingList =shoppingList.filter(n => n !== product);
                }
                break;
            case 'Correct':
                [command, oldItem, newItem] = arr[i].split(' ');
                if (shoppingList.includes(oldItem)){
                    let replacingPosition = shoppingList.indexOf(oldItem);
                    shoppingList[replacingPosition] = newItem;
                }
                break;
            case 'Rearrange':
                if (shoppingList.includes(product)){
                    let replacingPosition = shoppingList.indexOf(product);
                    let movingItem = shoppingList.splice(replacingPosition, 1);
                    shoppingList.push(movingItem);
                }
                break;
        }
        }
        console.log(shoppingList.join(', '))

}

solve([
    'Milk!Pepper!Water!Banana!Grapes',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Milk',
    'Correct Banana Potatoes',
    'Go Shopping!'
  ]
  )