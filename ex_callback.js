/*Complete as funções divisao e retornaQuadrado

A primeira função irá receber dois valores, o dividendo e o divisor.A função deverá retornar o resto da 
divisão destes dois valores.

A segunda função irá receber um valor base que irá ser multiplicado pelo expoente 2, para encontrar o seu quadrado.*/



//PS: Para simplificar, coloquei a function "divisao" com 3 parâmetros, usando a function "retornaQuadrado" como callback.

function divisao(dividendo,divisor,callback) {
    resultado = dividendo / divisor;
    console.log(`\n\nO resto da  divisão entre ${dividendo} e ${divisor} tem o valor: ${resultado}.\n\n`);
    callback(`O resultado da divisão entre ${dividendo} e ${divisor} elevado ao quadrado tem o valor de: `,resultado);
}

function retornaQuadrado(string,base) {
    res = base**2;

    console.log(`\n${string}` + `${res}\n`);
    
}

divisao(10,5,retornaQuadrado);
