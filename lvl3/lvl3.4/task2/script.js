let a = [1, 2, 3, 4, 5, 6]
let b = []

a.map((element,index)=>{if(index%2!=0)
    {b.push(element)
    b.push(a[index-1])
    }})

console.log(b)