function solve(arr){
    let countStudents = Number(arr.shift());
    let countLectures = Number(arr.shift());
    let initialBonus = Number(arr.shift());
    let totalBonus = 0;
    let maxAttendance = 0;
    for (let i = 0; i < arr.length; i++){
        let attendance = arr[i];
        let currentBonus = (attendance/countLectures)*(5+(initialBonus));
        if (currentBonus > totalBonus){
            totalBonus = currentBonus;
            maxAttendance = attendance;
        }
    }   
    console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`);
    console.log(`The student has attended ${maxAttendance} lectures.`)
}

solve([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
  ])