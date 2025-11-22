let a = 123456
let b = []
let sum = 0
let prev = ''

String(a).split('').map((element)=>{if(prev!=''){b.push(Number(prev + String(element)))
    prev = ''}
    else prev = String(element)
})

b.map((element)=> sum+=Number(element))
console.log(sum)