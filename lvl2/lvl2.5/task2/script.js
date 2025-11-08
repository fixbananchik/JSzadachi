let a = 'abcdefg'
let b = []

b = a.split('').filter(element => {
    if((a.indexOf(element)+1)%3!=0){
        return element
    }

})

console.log(b.join(''))