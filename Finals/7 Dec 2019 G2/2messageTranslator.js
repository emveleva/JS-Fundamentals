function solve(arr){
    let pattern = /(?<command>[!][A-Z][a-z]{2,}[!]:)(?<message>\[[A-Za-z]{8,}\])/g;

    let messages = Number(arr.shift());
    for (let i = 0; i < messages; i++){
        let message = arr[i];
        if (message.match(pattern)){
            let messageSplit = message.split(':');
            let command = messageSplit[0].substring(1, messageSplit[0].length - 1);
            let text = messageSplit[1].substring(1, messageSplit[1].length - 1);
            let encryptedMessage = [];
            for (let char of text){
                encryptedMessage.push(char.charCodeAt(0));
            }
            console.log(`${command}: ${encryptedMessage.join(' ')}`)
        } else {
            console.log('The message is invalid')
        }
    }
}

solve([
    '3',
    '!play!:[TheNewSong]',
    '!Ride!:[Bike]',
    '!Watch!:[LordofTheRings]'
  ])