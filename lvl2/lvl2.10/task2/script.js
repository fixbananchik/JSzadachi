let a= 122355679
let chet = 0

String(a).split('').map((element)=> {if(Number(element)%2==0) chet = Number(element)})

console.log(chet)