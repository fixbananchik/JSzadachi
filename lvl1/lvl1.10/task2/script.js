let a = 12345
let b = String(a).slice('')
let ans = ''

for(let i of b){
    ans = i+ans
}

console.log(ans)