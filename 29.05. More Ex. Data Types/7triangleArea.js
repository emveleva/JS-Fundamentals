function solve(num1, num2, num3){
    let a = Number(num1);
    let b = Number(num2);
    let c = Number(num3);
    let par = (a+b+c)/2;
    let area = Math.sqrt(par*(par-a)*(par-b)*(par-c));
    console.log(area);
    
  }