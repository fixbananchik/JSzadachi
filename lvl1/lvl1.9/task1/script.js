let a = ['http://', 'https://', 'ftp://', 'mailto://', 'tel://']

for(let i of a){
    if(i.slice(0, 7)!='http://'){
        a.pop(i)
    }
}

console.log(a)