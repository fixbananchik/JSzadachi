let a = [1,2,3,3,4,5,5,6,7,8,8,9,4,7,5,4,3,5]

a.filter((element,index)=>{if(index%5!=0) return true})