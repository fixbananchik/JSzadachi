let a = [1.456, 2.125, 3.32, 4.1, 5.34]
let b = []

for(let i of a){
    b.push(Math.round((i*10)/10))
}

console.log(b)