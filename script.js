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

function imprimirArriendoFinal() {
    let receiptContent = `
        <html>
        <head>
            <title>Recibo de Arriendo</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; }
                h1 { color: #333; }
                table { width: 100%; border-collapse: collapse; }
                th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                th { background-color: #f2f2f2; }
                .total { font-weight: bold; }
            </style>
        </head>
        <body>
            <h1>Recibo de Arriendo</h1>
            <table>
                <tr>
                    <th>Item</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Subtotal</th>
                </tr>`;

    let total = 0;
    const elements = document.querySelectorAll('.btn-group > input[type=number]');
    elements.forEach(element => {
        const cantidad = parseInt(element.value);
        if (cantidad > 0) {
            const precioUnitario = preciosAlquiler[element.id];
            const subtotal = cantidad * precioUnitario;
            total += subtotal;
            receiptContent += `
                <tr>
                    <td>${element.id}</td>
                    <td>${cantidad}</td>
                    <td>$${precioUnitario.toLocaleString()}</td>
                    <td>$${subtotal.toLocaleString()}</td>
                </tr>`;
        }
    });

    receiptContent += `
                <tr class="total">
                    <td colspan="3">Total</td>
                    <td>$${total.toLocaleString()}</td>
                </tr>
            </table>
        </body>
        </html>`;

    const receiptWindow = window.open('', 'Recibo de Arriendo', 'width=600,height=600');
    receiptWindow.document.write(receiptContent);
    receiptWindow.document.close();
    receiptWindow.focus();
}

const imprimirButton = document.getElementById('imprimirButton');
if (imprimirButton) {
    imprimirButton.addEventListener('click', imprimirArriendoFinal);
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