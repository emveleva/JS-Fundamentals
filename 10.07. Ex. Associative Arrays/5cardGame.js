function solve(arr){
    let players = {};

    for (let i = 0; i < arr.length; i++){
        let draw = arr[i].split(': ');
        let playerName = draw[0];
        let drawnCards = draw[1].split(', ');
        for (let card of drawnCards){
            if (players[playerName] === undefined){
                players[playerName] = [];
            } 
            if (!players[playerName].includes(card)){
                players[playerName].push(card)
            }
        }
    }

    for (let key of Object.keys(players)){
        let totalPoints = 0;
        players[key].forEach(card => {
            let points = cardPoints(card);
            let cardPointsTotal = cardMultiplier(card) * points;
            totalPoints += cardPointsTotal;
            players[key].points = totalPoints
            
        });
    }
    for (let kvp of Object.entries(players)){
        console.log(`${kvp[0]}: ${kvp[1].points}`)
    }
    



    
        function cardMultiplier(card){
            let multiplier = 0;
            if (card[card.length-1] === 'S'){
                multiplier = 4;
            } else if (card[card.length-1] === 'H'){
                multiplier = 3;
            } else if (card[card.length-1] === 'D'){
                multiplier = 2;
            } else if (card[card.length-1] === 'C'){
                multiplier = 1;
            }
            return multiplier;
        }
        function cardPoints(card){
            let cardPoints = 0;
                if (card[0] === 'J'){
                    cardPoints = 11;
                } else if (card[0] === 'Q'){
                    cardPoints = 12;
                } else if (card[0] === 'K'){
                    cardPoints = 13;
                } else if (card[0] === 'A'){
                    cardPoints = 14;
                } else if (card[0] === '1'){
                    cardPoints = 10;
                } else {
                    cardPoints = Number(card[0]);
                }
                return cardPoints;
        }
        

    
    }

solve([
    'Pesho: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Peshoslav: QH, QC, QS, QD',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Peshoslav: QH, QC, JS, JD, JC',
    'Pesho: JD, JD, JD, JD, JD, JD'
  ]
  )