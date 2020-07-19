function solve(arr){
    let targetSequence = arr.shift().split(' ').map(Number);
    let shotTargets = 0;

    for (let i = 0; i < arr.length; i++){
        currentLine = arr[i];
        if (currentLine !== "End"){
            currentLine = Number(currentLine);
            if (targetSequence[currentLine] > -1){
                let target = targetSequence[currentLine];
                for (let index in targetSequence){
                    index = Number(index);
                    if (index !== currentLine){
                        let currentSlot = targetSequence[index];
                    if (currentSlot > target){
                        targetSequence[index] = targetSequence[index] - target;
                    } else if (currentSlot <= target && currentSlot !== -1){
                        targetSequence[index] = targetSequence[index] + target;
                    }
                    }
                }
                targetSequence[currentLine] = -1;
                shotTargets++;

            }
            
        }
        else {
            break;
        }
    }
    console.log(`Shot targets: ${shotTargets} -> ${targetSequence.join(' ')}`);
}

solve([ '30 30 12 60 54 66', '0', '0', '0', '0', 'End' ])