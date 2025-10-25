let a = '11,45,23'
let b = a.slice(',')
let sum=0

for (let i of b){
    sum+=i
}

console.log(sum)