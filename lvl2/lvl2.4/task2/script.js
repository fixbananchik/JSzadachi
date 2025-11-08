let a = []
let b = []
let obj = {'привет':'мир'}
for(let i in obj){
    a.push(i)
    b.push(a[i])
}

console.log(a)
console.log(b)