let a = 'adNwdVk'
counter = 0

a.split('').map((element)=>{if(element==element.toUpperCase()) counter+=1})

if(counter<=2){
    console.log('не больше 2ух заглавных букв')
}
else{
    console.log('больше 2ух заглавных букв')
}