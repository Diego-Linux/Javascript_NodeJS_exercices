 soma = (a, b, callback) => {
    callback(a + b);
};

 msgCallback = (x) => {
    console.log('A soma é:', x)
};

soma(2, 5, msgCallback);

multiplicacao = (a, b, callbackm) => {
    callbackm(a * b);
};

msgCallbackm = (y) => {
    console.log('A multiplicação é:',y)
}

multiplicacao(2,5,msgCallbackm)