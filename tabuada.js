// TABUADA DE SOMENTE UM NÚMERO=>

/*function tabuada_one(num) {
    for (let i = 0; i <= 10; i++) {
        resultado = num * i;
        console.log(`${num} x ${i} = ` + resultado)
    }
}*/


// TABUADA COMPLETA =>
function tabuada(param,paramtwo) {
    for (let i = 1; i <= param; i++) {
        console.log('=============')
        for (let y = 1; y <= paramtwo; y++) {
            resultado = i * y;
            console.log(`${i} x ${y} = ` + resultado)
        }

    }
}

tabuada(10,10)
