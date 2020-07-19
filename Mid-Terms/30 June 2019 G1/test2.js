function solve(arr){
    let contacts = arr.shift().split(' ');
    let printed = false;

    for (let i = 0; i < arr.length; i++){
        let [command, arg1, arg2] = arr[i].split(' ');

        switch (command) {
            case 'Add':
                let addContact = arg1;
                let addIndex = Number(arg2);
                if (!contacts.includes(addContact)){
                    contacts.push(addContact);
                } else {
                    if (contacts[addIndex] !== undefined){
                        contacts.splice(addIndex, 0, addContact);
                    }
                }
                break;
        
            case 'Remove':
                let removeIndex = Number(arg1);
                if (contacts[removeIndex] !== undefined){
                    contacts.splice(removeIndex, 1);
                }
                break;

            case 'Export':
                let startIndex = Number(arg1);
                let count = Number(arg2);
                if (count > contacts.length){
                    count = contacts.length;
                }
                let exported = contacts.slice(startIndex, count+1);
                console.log(exported.join(' '));
                break;
            
            case 'Print':
                let detail = arg1;
                if (detail === 'Normal'){
                    console.log(`Contacts: ${contacts.join(' ')}`);
                    printed = true;
                    break;
                } else if (detail === 'Reversed'){
                    let reversed = contacts.reverse();
                    console.log(`Contacts: ${reversed.join(' ')}`);
                    printed = true;
                    break;
                }
                break;
        }
        if (printed === true){
            break;
        }
    }
}