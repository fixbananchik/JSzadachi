let a = 'aaa bbb ccc eee fff'

a.split(' ').filter((element,index)=>{if(index%2==0) return true})