function sumaOdJeden(x,suma){
    if (x===1) return suma+1;
    else return sumaOdJeden(x-1,suma+x)
}

console.log(sumaOdJeden(5,0));