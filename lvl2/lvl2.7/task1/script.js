let a = 'a bc def ghij'
let b = []
b = a.split(' ').map((element,index)=> {
    if(element.lenght<=3)
        return element.toUpperCase()
    else
        return element
})

console.log(b)