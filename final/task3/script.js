let a = 'ё3т21л4541т34'
let nums = ['1','2','3','4','5','6','7','8','9','0']

console.log(a.split('').filter((el)=>{return el in nums}).sort((a,b)=>a-b)).join(' ')