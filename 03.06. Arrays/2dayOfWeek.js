function solve(number){
    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ]
    if (number < 0 || number > days.length){
        console.log('Invalid day!');
    } else {
        console.log(days[number-1])
    }
}
solve(['1'])