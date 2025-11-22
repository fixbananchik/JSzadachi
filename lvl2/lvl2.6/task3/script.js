let a = '1234567'
let b = []

a.split('').reverse().map((element, index) => {if(index%3==0) {b.push(' ')
    b.push(element)}
    else b.push(element)
})

console.log(b.reverse().join(''))