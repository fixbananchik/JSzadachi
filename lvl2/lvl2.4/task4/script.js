let a = 'abcde'
let b =''

for(let i of a){
    if (a.find(i)%2!=0){
        b = b + (i.toUpperCase())
    }
    else{
        b = b+i
    }
}

console.log(b)