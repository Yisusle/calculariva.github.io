'use strict';
function validarNumero(input) {
    // Reemplaza todo lo que no sea un número con una cadena vacía
    input.value = input.value.replace(/[^0-9]/g, '');
}

    document.addEventListener('DOMContentLoaded', () => {
        let countrys;

$(document).ready(function () {
    const textopequeño = $(".iva");

    let paises: any; // Asegúrate de tener la variable 'paises' definida
    

    getPaises()
            .then(data  => data.json()) //convertir
            .then(db => {
                paises = db.iva_paises;   //Guardar datos
                console.log(paises);

                return getIvaPais();
    }).then(data => data.json())
    .then(countrys => {
        console.log(countrys);
        console.log(countrys.iva);
        mostrarIvaPaises(countrys);
        
    })
    .catch(error =>{
        alert("Error en las peticiones.");
        console.log(error);
    });



    function getPaises(){
        return fetch('https://my-json-server.typicode.com/Yisusle/Api_Iva/db')
    }

    function getIvaPais(){
        return fetch('https://my-json-server.typicode.com/Yisusle/Api_Iva/iva_paises/1')
    }

    function mostrarIvaPaises(countrysData){
        countrys = countrysData;
        textopequeño.html("(" + countrys.iva +")");
    }

});
        /* JAVASCRIP PURO
        const inputmontoNeto = document.getElementById('montoNeto') as HTMLInputElement;
        const montoTotalInput = document.getElementById('montoTotal') as HTMLInputElement;
        const porcentajeInput = document.getElementById('porcentaje') as HTMLInputElement;
        
        // Escucha el evento 'input' en el campo de entrada
        inputmontoNeto.addEventListener('input', () => {
            
            // Verifica que countrys esté definido y el valor ingresado sea un número
            if (countrys) {
                let montoNeto = parseInt(inputmontoNeto.value.replace(',', '').replace('%', ''), 10) || 0;

                // Realiza las operaciones
                let porcentaje = montoNeto * (parseInt(countrys.iva)/ 100);
                let montoTotal = (montoNeto + porcentaje) * 4;
                
                console.log("iva: ",countrys.iva);
                console.log("Monto Neto: ",montoNeto);
                console.log("Porcentaje: ",porcentaje);
                console.log("Monto Toltal: ",montoTotal);

                // Establece el resultado en otros campos de entrada
                porcentajeInput.value = porcentaje.toFixed(0);
                montoTotalInput.value = montoTotal.toFixed(0);
            }
        });*/
            //JQUERY
        $(document).ready(function(){
            const inputmontoNeto = $('#montoNeto');
            const montoTotalInput = $('#montoTotal');
            const porcentajeInput = $('#porcentaje');
            
            // Escucha el evento 'input' en el campo de entrada
            inputmontoNeto.on('input', function () {
                // Verifica que countrys esté definido y el valor ingresado sea un número
                if (typeof countrys !== 'undefined') {
                    let montoNeto = parseInt(inputmontoNeto.val()?.replace(',', '').replace('%', ''), 10) || 0;
        
                    // Realiza las operaciones
                    let porcentaje = montoNeto * (parseInt(countrys.iva) / 100);
                    let montoTotal = (montoNeto + porcentaje) * 4;
                    
                    console.log("iva: ", countrys.iva);
                    console.log("Monto Neto: ", montoNeto);
                    console.log("Porcentaje: ", porcentaje);
                    console.log("Monto Total: ", montoTotal);
        
                    // Establece el resultado en otros campos de entrada
                    porcentajeInput.val(porcentaje.toFixed(0));
                    montoTotalInput.val(montoTotal.toFixed(0));
                }
            });
        });
});
