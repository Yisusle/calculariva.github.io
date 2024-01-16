'use_strcit'
var countrys;

document.addEventListener('DOMContentLoaded', () => {
    const ivaPais = countrys.iva; // Asegúrate de tener la variable 'countrys' definida
    let formulario = document.getElementById('formulario') as HTMLFormElement;
    let netoSinIva = document.getElementsByClassName('montoNeto')[0] as HTMLInputElement;
    let porcentajeElement = document.getElementsByClassName('porcentaje')[0] as HTMLInputElement;
    let montoTotalElement = document.getElementsByClassName('montoTotal')[0] as HTMLInputElement;

    // Escucha el evento 'submit' en el formulario
    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del formulario

        // Realiza el cálculo
        let porcentaje = parseFloat(netoSinIva.value) * (ivaPais / 100);
        const resultadoSuma = parseFloat(netoSinIva.value) + porcentaje;
        let montoTotal = (parseFloat(netoSinIva.value) + porcentaje) * 4;

        // Actualiza los campos de resultado
        porcentajeElement.value = porcentaje.toString();
        montoTotalElement.value = montoTotal.toString();
    });
});


