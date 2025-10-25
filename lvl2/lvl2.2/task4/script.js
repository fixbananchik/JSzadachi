let a = [1, 2, 3, 4, 5, 6]
let sum1 = 0
let sum2 = 0

for(let i = 0;i<=a.length;i+=1){
    if(i<a.length/2){
        sum1 += a[i]
    }
    else if (i>=a.length/2&i<a.length   ){
        sum2 += a[i]
    }
}

console.log(sum1/sum2)
