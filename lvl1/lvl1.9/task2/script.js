let a = ['index.html', 'style.css', 'script.js', 'image.png', 'video.mp4']

for(let i of a){
    if(i.slice(i.length-4,i.length)!='.html'){
        a.pop(i)
    }
}

console.log(a)
