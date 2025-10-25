let a = [0,1,5,-1,4,-3,-2,10]
count = 0

for(let i of a){
    if(i<0){
        count += 1
    }
}

console.log(count)