function solve(name, lastName, hairColor){
    let person = {};
    person.name = name;
    person.lastName = lastName;
    person.hairColor = hairColor;
    let json = JSON.stringify(person);

    console.log(json)
}

solve('George', 'Jones', 'Brown')