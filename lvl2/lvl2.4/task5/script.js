let a = 'aaa bbb ccc'
let prev = ' '
let b = ''

for(let i of a){
    if (prev == ' '){
        b = b + i.toUpperCase()
    }
    else{
        b = b+i
    }
    prev = i

}

console.log(b)