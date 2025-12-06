let a = 123456789
let prev = 0
let ans = ''

String(a).slice('').map((element)=>{if (Number(element)<prev){ans = 'no'
    prev = Number(element)
}
else prev = Number(element)

})

if (ans != 'no'){
    ans = 'yes'
}

console.log(ans)