function solve(arr){
    let data = {};
    for (let i = 0; i < arr.length; i++){
        let [systemName, componentName, subcomponentName] = arr[i].split(' | ');

        if (data[systemName] === undefined){
            data[systemName] = {};
        } 
        if (!data[systemName].hasOwnProperty(componentName)){
            data[systemName][componentName] = [];
        }
        data[systemName][componentName].push(subcomponentName)
        }
    
    let sortedKeys = Object.keys(data).sort((a, b) => Object.keys(data[b]).length - Object.keys(data[a]).length || a.localeCompare(b));
    sortedKeys.forEach((key) => {
        console.log(key);
		let sortedSubKeys = Object.keys(data[key]).sort((a, b) => Object.keys(data[key][b]).length - Object.keys(data[key][a]).length);
		sortedSubKeys.forEach((subKey) => {
			console.log(`|||${subKey}`);
			data[key][subKey].forEach((subComponent) => {
				console.log(`||||||${subComponent}`);				
			});			
		});
    });
}

solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
  ]
  )