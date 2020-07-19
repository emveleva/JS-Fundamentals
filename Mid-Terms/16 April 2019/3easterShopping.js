function solve(arr){
    let shops = arr.shift().split(' ');
    let commands = Number(arr.shift());

    for (let i = 0; i < commands; i++){
        let [command, arg1, arg2] = arr.shift().split(' ');

        switch (command) {
            case 'Include':
                let includeShop = arg1;
                shops.push(includeShop);                
                break;
            
            case 'Visit':
                let whichShops = arg1;
                let numberOfShops = Number(arg2);
                if (shops.length >= numberOfShops){
                    if (whichShops === 'first'){
                        shops.splice(0, numberOfShops);
                    } else {
                        shops.splice(shops.length - numberOfShops, shops.length);
                    }
                }
                break;
            
            case 'Prefer':
                let shopIndex1 = Number(arg1);
                let shopIndex2 = Number(arg2);
                if (shops[shopIndex1] !== undefined && shops[shopIndex2] !== undefined){
                    let toBeMoved = shops[shopIndex1];
                    shops.splice(shopIndex1, 1, shops[shopIndex2]);
                    shops.splice(shopIndex2, 1, toBeMoved);
                }
                break;

            case 'Place':
                let placeShop = arg1;
                let placeIndex = Number(arg2);
                if (shops[placeIndex + 1] !== undefined){
                    shops.splice(placeIndex + 1, 0, placeShop)
                }
                break;
        }
    }
    console.log(`Shops left:
${shops.join(' ')}`)
}

solve([
    'Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
    '5',
    'Include HM',
    'Visit first 2',
    'Visit last 1',
    'Prefer 3 1',
    'Place Library 2'
  ]
  )