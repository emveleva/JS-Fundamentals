function solve(arr){
    let items = arr.shift().split('|');
    let budget = Number(arr.shift());
    let newPrices = [];
    let profit = 0;
    let sum = 0;
    
    for (let i = 0; i < items.length; i++){
        let [type, price] = items[i].split('->');
        price = Number(price);
        let newPrice = 0;

        switch (type) {
            case 'Clothes':
                if (price <= 50.00 && budget >= price){
                    budget -= price;
                    newPrice = price + price * 0.40;
                    sum += newPrice;
                    newPrices.push(newPrice.toFixed(2));
                    profit += price * 0.40;
                }
                break;
        
            case 'Shoes':
                if (price <= 35.00 && budget >= price){
                    budget -= price;
                    newPrice = price + price * 0.40;
                    sum += newPrice;
                    newPrices.push(newPrice.toFixed(2));
                    profit += price * 0.40;
                }

                break;

            case 'Accessories':
                if (price <= 20.50 && budget >= price){
                    budget -= price;
                    newPrice = price + price * 0.40;
                    sum += newPrice;
                    newPrices.push(newPrice.toFixed(2));
                    profit += price * 0.40;
                }
                break;
        }
    }
    console.log(newPrices.join(' '));
    console.log(`Profit: ${profit.toFixed(2)}`);
    if (budget + sum >= 150){
        console.log(`Hello, France!`)
    } else {
        console.log('Time to go.')
    }
}

solve([
    'Shoes->31.20|Clothes->40.30|Accessories->20|Shoes->25.60|Shoes->33.30|Clothes->48.60',
    '90'
  ]
  
  )