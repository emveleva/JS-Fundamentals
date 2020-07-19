function solve(arr){
    let contacts = {};

    for (let line of arr){
        let [name, number] = line.split(' ');
        contacts[name] = number;
    }
    for (let name in contacts){
        console.log(`${name} -> ${contacts[name]}`)
    }
}

solve([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
  ])

function solve2(arr){
    let contacts = [];

    arr.forEach(line => {
        let tokens = line.split(' ');
        let name = tokens[0];
        let number = tokens[1];
        let contact = {         
        };

        
        if(contacts.some(contact => contact.name === name)){
            let objIndex = contacts.findIndex((contact => contact.name == name))
            contacts[objIndex].number = number;
        } else {
            contact.name = name;
            contact.number = number;
            contacts.push(contact)
        }  
        
        

        
    });
        
   
    for (let contact of contacts){
        console.log(`${contact.name} -> ${contact.number}`)
    }

}

solve2([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
  ])
