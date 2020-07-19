function solve(input){
    const employees = [];

    for (let personName of input){
        let personObject = {};

        personObject.name = personName;
        personObject.number = personName.length;

        employees.push(personObject)
    }
    

    for (let employee of employees){
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`)
    }
        
    }

    solve([
        'Silas Butler',
        'Adnaan Buckley',
        'Juan Peterson',
        'Brendan Villarreal'
      ])
