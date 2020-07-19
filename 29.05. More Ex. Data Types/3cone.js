function solve(r, h){
    let volume = 1/3*Math.PI*r*r*h;
    let l = h*h+r*r;
    l = Math.sqrt(l)
    let area = Math.PI*r*r + Math.PI*r*l;
    console.log(`volume = ${volume.toFixed(4)}`)
    console.log(`area = ${area.toFixed(4)}`)
}
solve(3, 5)