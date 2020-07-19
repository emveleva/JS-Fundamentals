function printAirPollutedZones(stringMatrixValues, commands) {
    let matrix = [];
    for (let i = 0; i < stringMatrixValues.length; i++) {
        matrix[i] = stringMatrixValues[i].split(' ').map(Number);
    }

    for (const line of commands) {
        let lineTokens = line.split(' ');
        let cmd = lineTokens[0];
        let value = Number(lineTokens[1]);

        if (cmd.toLowerCase() === 'breeze' && value >= 0 && value < matrix.length) {
            for (let j = 0; j < matrix[value].length; j++) {
                matrix[value][j] -= 15;
                if (matrix[value][j] < 0) {
                    matrix[value][j] = 0;
                }
            }
        } else if (cmd.toLowerCase() === 'gale') {
            for (let i = 0; i < matrix.length; i++) {
                if (value >= 0 && value < matrix[i].length) {
                    matrix[i][value] -= 20;
                    if (matrix[i][value] < 0) {
                        matrix[i][value] = 0;
                    }
                }
            }
        } else if (cmd.toLowerCase() === 'smog') {
            for (let i = 0; i < matrix.length; i++) {
                for (let j = 0; j < matrix[i].length; j++) {
                    matrix[i][j] += value;
                }
            }
        }
    }

    let polutedAreas = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] >= 50) {
                polutedAreas.push(`[${i}-${j}]`);
            }
        }
    }

    if (polutedAreas.length > 0) {
        console.log('Polluted areas: ' + polutedAreas.join(', '));
    } else {
        console.log('No polluted areas');        
    }
}