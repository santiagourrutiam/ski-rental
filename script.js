// Objeto Alquiler con los precios, modificar valores aquí si cambian los valores cada temporada
const preciosAlquiler = {
    skiAdulto: 25000,
    skiNino: 18000,
    snowboardAdulto: 25000,
    snowboardNino: 18000,
    skiGamaAltaCompleto: 35000,
    soloSkiAdulto: 14000,
    soloSkiNino: 10000,
    soloSnowboardAdulto: 14000,
    soloSnowboardNino:14000,
    soloSkiGamaAlta: 20000,
    soloBotasSkiSnowboardAdulto: 12000,
    soloBotasSkiSnowboardNino: 10000,
    bastones: 6000,
    randonneConPieles: 30000,
    botasRandonne: 12000,
    bastonesTelescopicos: 8000,
    antiparras: 10000,
    guantes: 8000,
    casco: 8000
};



// Función para calcular el valor total del arriendo a medida que se activan los listener de cada item
function calcularTotalArriendo() {
    let total = 0;
    for (let item in preciosAlquiler) {
        const element = document.getElementById(item);
        if (element) {
            const cantidad = parseInt(element.value) || 0;
            total += preciosAlquiler[item] * cantidad;
        }
    }
    document.getElementById('total').innerText = total;
}

// Funciones para incrementar y decrementar numero de equipos por categoría
function increment(id) {
    const input = document.getElementById(id);
    if (input) {
        input.value = parseInt(input.value) + 1;
        calcularTotalArriendo();
    }
}


function decrement(id) {
    const input = document.getElementById(id);
    if (input && input.value > 0) {
        input.value = parseInt(input.value) - 1;
        calcularTotalArriendo();
    }
}

function imprimirArriendoFinal(element) {
    var nodosArriendo = [];

}

// event listeners para cada item
document.addEventListener('DOMContentLoaded', () => {
    for (let item in preciosAlquiler) {
        const element = document.getElementById(item);
        if (element) {
            element.addEventListener('input', calcularTotalArriendo);
        }
    }
});