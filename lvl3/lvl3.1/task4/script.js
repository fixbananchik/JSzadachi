let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3, 4, 5];

if (arr2.length>=arr1.length){
    arr2 = arr2.slice(0,arr1.length)

}
else{
    arr1 = arr1.slice(0,arr2.length)
}

console.log(arr1)
console.log(arr2)
