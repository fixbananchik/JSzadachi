let a = [1, '', 2, 3, '', 5]

console.log(a.filter((element)=>{if(element!='') return element}))