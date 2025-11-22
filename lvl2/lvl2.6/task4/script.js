let a = 'AbCdE'
let b = []

a.split('').map((element)=>{if( element==element.toUpperCase() ) b.push(element.toLowerCase())
    else b.push(element.toUpperCase())
})

console.log(b.join(''))