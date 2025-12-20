let a = [12011, 111,101,1300, 0, 11001,1000]
res = 'NO'

console.log(a.map((el)=>{if(String(el).includes('3')) res = 'YES'}))