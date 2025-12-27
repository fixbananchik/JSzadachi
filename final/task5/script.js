let a = 12345

function convert(a){
    d = a//86400
    h = (a%86400)//3600
    m = ((a%86400)%3600)//60
    s = ((a%86400)%3600)%60
    return { d, h, m, s }
}

