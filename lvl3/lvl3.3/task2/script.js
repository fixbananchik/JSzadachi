let a = 1357
let res = 'YES'

String(a).split('').map((element)=>{if(element%2==0) res='NO'})

console.log(res)