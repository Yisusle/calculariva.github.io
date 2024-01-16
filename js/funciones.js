'use_strcit'
function cambiarNegrita(valor) {
    var input = document.getElementById('InputNegritas');
    input.style.fontWeight = valor !== '' ? 'bold' : 'normal';
}

$(document).ready(function () {
    const textopequeño = $(".iva");

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

    function mostrarIvaPaises(countrys){
        textopequeño.html("(" + countrys.iva +")");
    
    }

});