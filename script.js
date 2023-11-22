function mostrarNumerosPrimos() {
    const limiteUsuario = parseInt(document.getElementById("limite").value);
    const primos = numerosPrimosAte(limiteUsuario);

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Números primos até ${limiteUsuario}:<br>${primos.join(', ')}`;
}

function ehPrimo(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function numerosPrimosAte(limite) {
    const numerosPrimos = [];
    for (let i = 2; i <= limite; i++) {
        if (ehPrimo(i)) {
            numerosPrimos.push(i);
        }
    }
    return numerosPrimos;
}

