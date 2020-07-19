function solve(arr){
    let students = new Map();

    for (let line of arr){
        let tokens = line.split(' ');
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (!students.has(name)){
            students.set(name, grades);
        } else {
            let oldGrades = students.get(name);
            students.set(name, oldGrades.concat(grades))
        }
    }
    let studentEntries = Array.from(students.entries());
    let sortedStudents = studentEntries.sort((a, b) => {
        let studentNameA = a[0];
        let studentGradesA = a[1];
        let studentNameB = b[0];
        let studentGradesB = b[1];

        let getAverageGradesA = getAverageGrades(studentGradesA);
        let getAverageGradesB = getAverageGrades(studentGradesB);

        return getAverageGradesA - getAverageGradesB;
        
    })

    for (let kvp of sortedStudents){
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`)
    }
    
    function getAverageGrades(grades){
        let gradeSum = 0;
        for (const grade of grades){
            gradeSum += grade;
        }
        return gradeSum/grades.length;
    }
}

solve([ 'Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6' ])