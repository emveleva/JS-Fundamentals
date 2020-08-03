function solve(arr){
    
    let furniture = [];
    let totalPrice = 0;
    
    for (let data of arr){
        let match = />>(?<name>[A-Za-z]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/g.exec(data);
        if (match) {
            furniture.push(match.groups.name)
            totalPrice += Number(match.groups.price)* Number(match.groups.quantity)
        }
    }
    //     let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/g;
    //     if (line.match(pattern)){
    //         let mobel = line.split('<');
    //         let priceData = mobel[2].split('!')
    //         let price = Number(priceData[0])*Number(priceData[1]);
    //         mobel = mobel[0].substring(2);
    //         furniture.push(mobel)
    //         totalPrice += price;
    //     }
    // }
    console.log('Bought furniture:')
    if (furniture.length>0){
        console.log(furniture.join('\n'))
    }
    
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`)
}

solve([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]
)