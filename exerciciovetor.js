/*Neste exercício, você terá que somar os valores de um vetor até a metade de seu tamanho e colocar a soma em um índice de um novo vetor.

Faça a soma também dos valores dos itens do vetor após a metade de seu tamanho. Coloque a soma em um índice do novo vetor.

*/

new_vetor = [0,0];
vet = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function calcularVetor(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        if (i < ((vetor.length) / 2)) {
            new_vetor[0] += vet[i]
        } else {
            new_vetor[1] += vet[i]
        }
    }
    console.log(`PARTE 1 -, PARTE 2`)
    console.log(new_vetor)
}

calcularVetor(vet)


