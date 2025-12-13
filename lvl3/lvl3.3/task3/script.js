let a = 'abcba'
let buffer = a.split('')

if(buffer.length % 2 == 0){
    slice_index = buffer.length / 2
    right_array = buffer.slice(slice_index)
    left_array = buffer.slice(0, slice_index)
}
else{
    slice_index = ((buffer.length - 1) / 2) + 1
    right_array = buffer.slice(slice_index)
    left_array = buffer.slice(0, slice_index - 1)
}



if(right_array.reverse().join('') == left_array.join('')){
    console.log('одинаковые')
}
else{
    console.log('не одинаковые')
}
