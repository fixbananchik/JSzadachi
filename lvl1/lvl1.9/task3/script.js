let a = [1, 2, 3, 4, 5]
let b = []

for(let i of a){
    b.push(i+i*0.1)
}

console.log(b)