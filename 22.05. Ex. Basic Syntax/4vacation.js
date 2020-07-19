function solve(group, type, day){
    let total = 0;
    switch (day) {
        case "Friday":
            if (type == "Students"){
                total = group * 8.45;
                if (group >= 30){
                    total = total - total*0.15;
                }
            } else if (type == "Business"){
                total = group * 10.90;
                if (group >= 100){
                    total = total - 10*10.90;
                }
            } else if (type == "Regular"){
                total = group * 15;
                if (group >= 10 && group <= 20){
                    total = total - total * 0.05;
                }
            }
            break;
        case "Saturday":
            if (type == "Students"){
                total = group * 9.80;
                if (group >= 30){
                    total = total - total*0.15;
                }
            } else if (type == "Business"){
                total = group * 15.60;
                if (group >= 100){
                    total = total - 10*15.60;
                }
            } else if (type == "Regular"){
                total = group * 20;
                if (group >= 10 && group <= 20){
                    total = total - total * 0.05;
                }
            }
            break;
        case "Sunday":
            if (type == "Students"){
                total = group * 10.46;
                if (group >= 30){
                    total = total - total*0.15;
                }
            } else if (type == "Business"){
                total = group * 16;
                if (group >= 100){
                    total = total - 10*16;
                }
            } else if (type == "Regular"){
                total = group * 22.50;
                if (group >= 10 && group <= 20){
                    total = total - total * 0.05;
                }
            }
            break;
    }
    console.log(`Total price: ${total.toFixed(2)}`)
}

solve(30, "Students", "Sunday")