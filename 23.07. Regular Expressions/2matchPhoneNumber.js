function solve(str) {
    let validNames = [];
    let pattern = /(\+359([ -])2(\2)(\d{3})(\2)(\d{4}))\b/g;

    let validName;
    while (validName = pattern.exec(str)) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(', '));
}

solve([
    '+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'
  ])