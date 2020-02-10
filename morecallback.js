function add(x, y) {
    res = x + y;
    console.log(res)
}

function sub(x, y) {
    res = x - y;
    console.log(res)
}

function mult(x, y) {
    res = x * y;
    console.log(res)
}

function div(x, y) {
    res = x / y;
    console.log(res)
}



function calcular(x, y, computar) {
    return computar(x, y);
}


calcular(10, 5, add)