function solve(year, month, day){
    let date = new Date(year, month-1, day);
    date.setDate(date.getDate() + 1);
    let printMonth = '' + (date.getMonth()+1);
    let printDay = "" + date.getDate();
    let printYear = date.getFullYear();
    console.log(`${printYear}-${printMonth}-${printDay}`)
}

solve(2016, 9, 30)


// var currDate = new Date(1951, 12-1, 24);
// console.log('Today the date is '+ currDate);
// // now increment it by 1 day
// currDate.setDate(currDate.getDate() + 1);
// console.log('Tomorrow the date is '+ currDate);