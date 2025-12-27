function MinMax(i) {
    return {
        max: Math.max(...i),
        min: Math.min(...i)
    };
}

let a = [1,2,3,4,5,6,7]
console.log(MinMax(a))