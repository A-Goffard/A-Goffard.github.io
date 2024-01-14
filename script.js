document.addEventListener('DOMContentLoaded', function () {
    var formulariosCompletos = 0;

    var forms = document.querySelectorAll('form');

    forms.forEach(function (formulario) {
        formulario.addEventListener('submit', function (event) {
            event.preventDefault();
            var formId = formulario.id;
            verificarString(getCadenaEsperada(formId), getResultId(formId), formId);
        });
    });

    function verificarString(cadenaEsperada, resultadoId, formId) {
        var inputString = document.querySelector('#' + formId + ' input[type="text"]').value;

        if (inputString === cadenaEsperada) {
            mostrarResultado(obtenerMensajeCorrecto(formId), resultadoId, '#ABDB2A');
            formulariosCompletos++;

            if (formulariosCompletos === forms.length) {
                document.getElementById('btnIrAOtraPagina').style.display = 'block';
            }
        } else {
            mostrarResultado('Sigue intentándolo. La respuesta no es la que queremos. ', resultadoId, 'red');
        }
    }

    function mostrarResultado(mensaje, resultadoId, color) {
        document.getElementById(resultadoId).textContent = mensaje;
        document.getElementById(resultadoId).style.color = color;
    }

    function obtenerMensajeCorrecto(formId) {
        switch (formId) {
            case 'formulario1':
                return '¡Bien! Podemos seguir entonces...';
            case 'formulario2':
                return 'Vamos bien. A por lo siguiente.';
            case 'formulario3':
                return 'Se te da bien esto...';
            case 'formulario4':
                return '¿Trabajas en equipo?';
            case 'formulario5':
                return 'Ya te falta menos';
            case 'formulario6':
                return '¡Eres la caña! A por la última...';
            case 'formulario7':
                return '¡Genial! Ya lo tienes todo.... o tal vez no....';
            default:
                return '';
        }
    }

    function getCadenaEsperada(formId) {
        switch (formId) {
            case 'formulario1':
                return 'CODER';
            case 'formulario2':
                return 'Eres el futuro de la programación';
            case 'formulario3':
                return 'Disfruta del proceso de aprender';
            case 'formulario4':
                return 'Encuentra buena compañía';
            case 'formulario5':
                return 'Comparte';
            case 'formulario6':
                return 'No te rindas';
            case 'formulario7':
                return 'Y el poder del código te acompañará';
            default:
                return '';
        }
    }

    function getResultId(formId) {
        switch (formId) {
            case 'formulario1':
                return 'resultado1';
            case 'formulario2':
                return 'resultado2';
            case 'formulario3':
                return 'resultado3';
            case 'formulario4':
                return 'resultado4';
            case 'formulario5':
                return 'resultado5';
            case 'formulario6':
                return 'resultado6';
            case 'formulario7':
                return 'resultado7';
            default:
                return '';
        }
    }

    // Añade un evento de clic al botón btnIrAOtraPagina
    document.getElementById('btnIrAOtraPagina').addEventListener('click', function () {
        // Redirige a otraPagina.html
        window.location.href = '/otraPagina.html';
    });










    //ESTA PARTE HAY QUE MODIFICAR JUNTO CON LA OTRAPAGINA


    // Animación Typed.js para el primer mensaje
    var options1 = {
        strings: [
            'Eres <b>CODER</b>.',
        ],
        typeSpeed: 50,
        showCursor: false,
        startDelay: 1000, // Retardo de 1 segundo
        onComplete: function () {
            // Puedes añadir acciones adicionales después de la animación
        }
    };

    var typed1 = new Typed('#typed-output1', options1);

    // Animación Typed.js para el segundo mensaje
    var options2 = {
        strings: [
            'El futuro de la programación.',
        ],
        typeSpeed: 50,
        showCursor: false,
        startDelay: 3000, // Retardo de 3 segundos
        onComplete: function () {
            // Puedes añadir acciones adicionales después de la animación
        }
    };

    var typed2 = new Typed('#typed-output2', options2);

    // Animación Typed.js para el tercer mensaje
    var options3 = {
        strings: [         
            '<b>Disfruta del proceso de aprendizaje</b>. Es importante, y hace que mejores no solo como coder, sino también como persona.',
        ],
        typeSpeed: 50,
        showCursor: false,
        startDelay: 6000, // Retardo de 6 segundos
        onComplete: function () {
            // Puedes añadir acciones adicionales después de la animación
        }
    };
    
    var typed3 = new Typed('#typed-output3', options3);

    // Animación Typed.js para el cuarto mensaje
    var options4 = {
        strings: [
            'Encontrar <b>buena compañía</b> te llevará lejos. Un buen equipo hace que lo genial sea aún mejor.',
        ],
        typeSpeed: 50,
        showCursor: false,
        startDelay: 16000, // Retardo de 16 segundos
        onComplete: function () {
            // Puedes añadir acciones adicionales después de la animación
        }
    };
    
    var typed4 = new Typed('#typed-output4', options4); 
    
    // Animación Typed.js para el quinto mensaje
    var options5 = {
        strings: [         
            '<b>Compartir</b> en la vida es esencial para la felicidad y la excelencia.',
        ],
        typeSpeed: 50,
        showCursor: false,
        startDelay: 25000, // Retardo de 25 segundos
        onComplete: function () {
            // Puedes añadir acciones adicionales después de la animación
        }
    };
    
    var typed5 = new Typed('#typed-output5', options5);    

    // Animación Typed.js para el sexto mensaje
    var options6 = {
        strings: [         
            '<b>No te rindas nunca</b>. No sabemos lo que nos depara la vida ni en qué momento llegará.',
        ],
        typeSpeed: 50,
        showCursor: false,
        startDelay: 32000, // Retardo de 32 segundos
        onComplete: function () {
            // Puedes añadir acciones adicionales después de la animación
        }
    };
    
    var typed6 = new Typed('#typed-output6', options6);

    // Animación Typed.js para el septimo mensaje
    var options7 = {
        strings: [         
            'El poder del código te acompañará el resto de tu vida. <b>Haz que merezca la pena.</b>',
        ],
        typeSpeed: 50,
        showCursor: false,
        startDelay: 40000, // Retardo de 40 segundos
        onComplete: function () {
            // Puedes añadir acciones adicionales después de la animación
        }
    };
    
    var typed7 = new Typed('#typed-output7', options7);    

    // Animación Typed.js para el octabo mensaje
    var options8 = {
        strings: [         
            '<b>Disfruta, vive, respeta, aprende... Sé feliz.</b>',
        ],
        typeSpeed: 50,
        showCursor: false,
        startDelay: 47000, // Retardo de 47 segundos 
        onComplete: function () {
            // Puedes añadir acciones adicionales después de la animación
        }
    };
    
    var typed8 = new Typed('#typed-output8', options8);

    // Puedes agregar más instancias de Typed.js según sea necesario
});

