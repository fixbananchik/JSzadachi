let a = 'as123r34'
let nums = [0,1,2,3,4,5,6,7,8,9]
let counter = 0

a.split('').map((element)=>{if(element in nums) counter+=1})

if(a.length-counter<=3){
    console.log('букв не больше 3х')
}
else{
    console.log('букв больше 3х')
}