function solve(distance, passangers, price){
    let fuel = distance / 100 * 7;
    fuel = fuel + passangers * 0.100;
    let totalPrice = price * fuel;
    console.log(`Needed money for that trip is ${totalPrice}lv.`)
}

solve(260, 9, 2.49)