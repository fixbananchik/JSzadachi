let a = [1, 2, 3, 3, 4, 5]
prev = ''
counter = 0

a.map((element)=>{if(prev!=element) prev = element
    else {counter+=1 
    prev = element}
})

if(counter>0){
    console.log('есть')
}
else{
    console.log('нет')
}