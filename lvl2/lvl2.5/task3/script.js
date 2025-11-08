let a = [1, 2, 3, 4, 5, 6]
let sum1 = 0
let sum2 = 0

a.map((element,index) => {if(index%2==0) sum1 += element
     else sum2 += element})

console.log(sum1/sum2)