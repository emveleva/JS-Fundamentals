function solve(arr){
    let cats = [];
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
            
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    for (let i = 0; i < arr.length; i++){
        let [name, ageText] = arr[i].split(' ');
        cats.push(new Cat(name, Number(ageText)));
    }

    for (const cat of cats){
        cat.meow();
    }

}

solve(['Mellow 2', 'Tom 5'])