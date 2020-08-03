function solve(arr){
    let pattern = /(U\$(?<username>[A-Z][a-z]{2,})U\$)(P@\$(?<pass>[A-Za-z]{5,}[A-Za-z0-9]*\d)P@\$)/;
    let inputCount = Number(arr.shift());
    let regCount = 0;

    for (let line of arr){
        let match = line.match(pattern);
        if (match){
            let groupss = line.match(pattern).groups;
            console.log(`Registration was successful`);
            console.log(`Username: ${groupss.username}, Password: ${groupss.pass}`)
            regCount++;
        } else {
            console.log('Invalid username or password')
        }
    
    }
        
    console.log(`Successful registrations: ${regCount}`)
}

solve([
    '3',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$MichaelU$P@$asdqwe123P@$',
    'U$UserU$P@$ad2P@$'
  ])


  let dateRegexp = /9(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
let str = "92019-04-30";

let groups = str.match(dateRegexp).groups;

alert(groups.year); // 2019
alert(groups.month); // 04
alert(groups.day); // 30
