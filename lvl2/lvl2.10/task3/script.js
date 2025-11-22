let a = 'abcde abcde abcde'
let prev = ' '

console.log(a.split('').map((element)=> {if(prev==' '){prev = '!'
    return '!'
    
}
    else {
        prev = element
        return element
    }
}).join(''))