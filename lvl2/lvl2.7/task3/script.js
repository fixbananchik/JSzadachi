let a = 123789

console.log(String(a).split('').map((element)=> {if(element%2==0) return element}))