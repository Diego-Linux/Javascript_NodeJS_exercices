let vetorial = [[1,2,3],[4,5,6],[7,8,9]]

function forAninhadoPares(vetor) {
    let novoVetor = [];
    let vetorPares = [];
    for (let indice = 0; indice < vetor.length; indice++) {
        let celula = vetor[indice];
        let resultado = 0;
        for (let indiceSub = 0; indiceSub < celula.length; indiceSub++) {
            resultado = resultado + celula[indiceSub];
        }
        novoVetor[indice] = resultado;
        
        if ((resultado % 2) == 0) {
            vetorPares.push(resultado);
        } 
    }
    return vetorPares;
}

function forAninhado(vetor) {
    let novoVetor = [];
    let vetorPares = [];
    for (let indice = 0; indice < vetor.length; indice++) {
        let celula = vetor[indice];
        let resultado = 0;
        for (let indiceSub = 0; indiceSub < celula.length; indiceSub++) {
            if ((celula[indiceSub] % 2) == 0){
                novoVetor.push((celula[indiceSub]));
            }
        }

    }
    return novoVetor;
}