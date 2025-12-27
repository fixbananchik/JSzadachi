let a = 'dfjjvh vlcm digjnv alkfmc vbjh cvxcmcvc'

let words = a.split(' ').filter(word => word.length > 0);
let result = {};
    
words.forEach(word => {
    let Letter = word[0];
    if (!result[Letter]) {
        result[Letter] = [];
    }
    if (!result[Letter].includes(word)) {
        result[Letter].push(word);
    }
})

console.log(result)
