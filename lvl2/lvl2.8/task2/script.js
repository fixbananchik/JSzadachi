let a = '1 22 333 4444 22 5555 1'

console.log(a.split(' ').map((element)=> {if(element<=999) return element}).filter(el => el!=undefined).join(' '))