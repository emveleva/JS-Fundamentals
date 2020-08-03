function solve(arr){
    let travelDestinations = {};

    for (let i = 0; i < arr.length; i++){
        let [countryName, townName, travelCost] = arr[i].split(' > ');

        if (travelDestinations[countryName] === undefined){
            travelDestinations[countryName] = {};
        }
        if (!travelDestinations[countryName].hasOwnProperty(townName)){
            travelDestinations[countryName][townName] = Number(travelCost);
        } else {
            travelDestinations[countryName][townName] = Math.min(travelDestinations[countryName][townName], Number(travelCost))
        }
    }
    let nameSort = Object.keys(travelDestinations).sort((a, b) => a[0].localeCompare(b[0]));
    let result = "";
    nameSort.forEach(key => {
        result += key + " -> ";
        let costSort = [...Object.keys(travelDestinations[key])].sort((a, b) => travelCost(a, b, travelDestinations, key));   
        for (let town of costSort) {
            result += `${town} -> ${travelDestinations[key][town]} `;
        }
        result += "\n";
    
    
    });
    console.log(result);

    function travelCost(town1, town2, destination, country) {
        let priceOne = destination[country][town1];
        let priceTwo = destination[country][town2];
 
        return priceOne - priceTwo
    }
    
}

solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 200",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 900"
    ]
    )