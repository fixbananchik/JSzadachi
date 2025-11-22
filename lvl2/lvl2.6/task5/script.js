let a = [1, 2, 3, 4, 5, 6]
let prev = ''
let b = []

a.map((element)=>{if(prev!=''){b.push(Number(prev + String(element)))
    prev = ''}
    else prev = String(element)
})

console.log(b)