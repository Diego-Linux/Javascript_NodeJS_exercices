
// DESAFIO:  CRIAR UMA SIMPLES CALCULADORA

// CALCULADORA COM ALGUNS INCREMENTOS =>
/*function calculadora(number, num) {

    soma = number + num;
    subtracao = number - num;
    multiplicacao = number * num;
    divisao = number / num;
    exponenciacao = number ** num;

    vetor = [soma, subtracao, multiplicacao, divisao, exponenciacao]
    vetor2 = ['+', '-', '*', '/', '**']
    console.log(`\n`)
    for (let i = 0; i < vetor.length; i++) {
        console.log(`${number}` + ` ${vetor2[i]} ` + `${num} = ` + vetor[i])
    }
    console.log(`\n`)

}

calculadora(5, 2)*/

// CALCULADORA BÁSICA =>    

let choice = '+'

function calculadora(number, num, choice) {
    soma = number + num;
    subtracao = number - num;
    multiplicacao = number * num;
    divisao = number / num;
    exponenciacao = number ** num;

    if (choice === '+') {
        console.log(soma)
    }
    else if (choice === '-') {
        console.log(subtracao)
    }
    else if (choice === '*') {
        console.log(multiplicacao)
    }
    else if (choice === '/') {
        console.log(divisao)
    }
    else if (choice === '**') {
        console.log(exponenciacao)
    }
    else {
        console.log('Operação inválida!')
    }

}

calculadora(5, 2, '/')