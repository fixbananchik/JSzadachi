let arr1 = [1, 2, 3]
let arr2 = ['a', 'b', 'c']
let arr3 = []

arr1.map((element,index)=> {
    if(index<=1){
        arr3.push(element)
    }
    else{
        arr2.map((el)=> arr3.push(el))
        arr3.push(element)
    }
})

console.log(arr3)