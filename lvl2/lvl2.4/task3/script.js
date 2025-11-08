let a = 120394
let b = a.split('')
let sum = 0

for(let i of b){
    if (Number(i)%2==0){
        sum+=1
    }
}

console.log(sum)