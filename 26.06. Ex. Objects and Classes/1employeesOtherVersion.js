function solve(arr){
    let employees = {};

    arr.forEach(name => {
        employees[name] = name.length
    });
for (let name in employees){
    console.log(`Name: ${name} -- Personal Number: ${employees[name]}`)
}
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
  ])
