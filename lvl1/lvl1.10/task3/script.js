let a = [1, 2, 3, 4, 5, 6]
let c = a.length/2

for(let i=0; i<c;i++){
    console.log(a.slice(0,2))
    a.shift()
    a.shift()
}