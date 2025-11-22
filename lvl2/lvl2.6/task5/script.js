let a = [1, 2, 3, 4, 5, 6]
let prev = ''

a.map((element)=>{if(prev!=''){b.push(Number(prev + String(element)))
    prev = String(element)}
    else prev = String(element)
})

console.log(prev)