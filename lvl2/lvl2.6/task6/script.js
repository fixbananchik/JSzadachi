let a = 'aaa bbb ccc eee fff'
let b = []
b = a.split(' ').map((element,index)=> {
    if(index%2==1)
        return element[0].toUpperCase()+element.slice(1)
    else return element
})

console.log(b.join(' '))