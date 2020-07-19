function solve(arr){
    let tripDays = Number(arr.shift());
    let budget = Number(arr.shift());
    let people = Number(arr.shift());
    let fuelCostKm = Number(arr.shift());
    let foodCostDaily = Number(arr.shift());
    let pricePerPersonDaily = Number(arr.shift());
    let day = 1;
    let expenses = 0;
    let noBudget = false;
    let totalFood = foodCostDaily * people * tripDays;
    let hotelCost = pricePerPersonDaily * people * tripDays;
    if (people > 10){
        hotelCost -= hotelCost*0.25;
    }
    expenses += hotelCost;
    expenses += totalFood;
    for (let i = 0; i < tripDays; i++){
        let travelledDistance = Number(arr.shift());
        expenses += travelledDistance * fuelCostKm;
        if (day % 3 == 0 || day % 5 === 0){
            expenses += expenses * 0.40;
        }
        if (day % 7 === 0){
            expenses -= expenses/people;
        }
        day++;
        if (expenses > budget){
            noBudget = true;
            break;
        }
        
    }
    if (budget >= expenses){
        let leftMoney = budget - expenses;
        console.log(`You have reached the destination. You have ${leftMoney.toFixed(2)}$ budget left.`)
    } else {
        let neededMoney = expenses - budget;
        console.log(`Not enough money to continue the trip. You need ${neededMoney.toFixed(2)}$ more.`)
    }

}

solve([
  '7',   '12000', '5',
  '1.5', '10',    '20',
  '512', '318',   '202',
  '154', '222',   '108',
  '123'
]
)