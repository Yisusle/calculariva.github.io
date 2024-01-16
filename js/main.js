'use strict';
function validarNumero(input) {
    // Reemplaza todo lo que no sea un número con una cadena vacía
    input.value = input.value.replace(/[^0-9]/g, '');
}
document.addEventListener('DOMContentLoaded', function () {
    var countrys;
    $(document).ready(function () {
        var textopequeño = $(".iva");
        var paises; // Asegúrate de tener la variable 'paises' definida
        getPaises()
            .then(function (data) { return data.json(); }) //convertir
            .then(function (db) {
            paises = db.iva_paises; //Guardar datos
            console.log(paises);
            return getIvaPais();
        }).then(function (data) { return data.json(); })
            .then(function (countrys) {
            console.log(countrys);
            console.log(countrys.iva);
            mostrarIvaPaises(countrys);
        })
            .catch(function (error) {
            alert("Error en las peticiones.");
            console.log(error);
        });
        function getPaises() {
            return fetch('https://my-json-server.typicode.com/Yisusle/Api_Iva/db');
        }
        function getIvaPais() {
            return fetch('https://my-json-server.typicode.com/Yisusle/Api_Iva/iva_paises/1');
        }
        function mostrarIvaPaises(countrysData) {
            countrys = countrysData;
            textopequeño.html("(" + countrys.iva + ")");
        }
    });
    var inputmontoNeto = document.getElementById('montoNeto');
    var montoTotalInput = document.getElementById('montoTotal');
    var porcentajeInput = document.getElementById('porcentaje');
    // Escucha el evento 'input' en el campo de entrada
    inputmontoNeto.addEventListener('input', function () {
        // Verifica que countrys esté definido y el valor ingresado sea un número
        if (countrys) {
            var montoNeto = parseInt(inputmontoNeto.value.replace(',', '').replace('%', ''), 10) || 0;
            // Realiza las operaciones
            var porcentaje = montoNeto * (parseInt(countrys.iva) / 100);
            var montoTotal = (montoNeto + porcentaje) * 4;
            console.log("iva: ", countrys.iva);
            console.log("Monto Neto: ", montoNeto);
            console.log("Porcentaje: ", porcentaje);
            console.log("Monto Toltal: ", montoTotal);
            // Establece el resultado en otros campos de entrada
            porcentajeInput.value = porcentaje.toFixed(0);
            montoTotalInput.value = montoTotal.toFixed(0);
        }
    });
});
