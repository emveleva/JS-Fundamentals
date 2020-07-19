function solve(firstName, lastName, age){
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = Number(age);

    for (let key in person){
        console.log(`${key}: ${person[key]}`)
    }
}

solve('Peter', 'Pan', '20')