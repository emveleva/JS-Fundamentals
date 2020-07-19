function solve(arr){
    let storage = new Map();

    arr.forEach(line => {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);

        if (storage.has(product)){
            let oldQuantity = storage.get(product);
            storage.set(product, oldQuantity + quantity);
        } else {

            storage.set(product, quantity);
        }
        
        
    });

    for (let key of storage.keys()){
        console.log(`${key} -> ${storage.get(key)}`)
    }
}

solve([ 'tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40' ])