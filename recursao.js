function fatorial(num) {
    if (num == 1) {
        return 1;
    }
    else {
        return num * fatorial(num - 1)
    }
}
let result = fatorial(5)
console.log('Result ->', result)


/* RECURSÃO É O ATO DE UMA CHAMADA DE MÉTODO DENTRO DELE MESMO !*/