// Crear un módulo que contenga los métodos 
//     para subir piso,
//     bajar piso,
//     cambiar de piso,
//     abrir puerta y--------
//     cerrar puerta,---------
//
// además de las variables para control de su estado, puede ser un
// elevador fijo de 6 u 8 pisos,
// exponer solamente las funciones necesarias y no aquellas que no se ven expuestas en un elevador.

let pisoActual = 1;
let estadoPuerta = 0; //1 es abierto
let totalPisos = 8;
let pisosTotales = 8;

function abrirPuerta() {
    estadoPuerta = 1;
};

function cerrarPuerta() {
    estadoPuerta = 0;
};

function irApiso(pisoDestino) {
    cerrarPuerta();
    if (pisoDestino <= totalPisos) {
        if (pisoDestino > pisoActual) {
            for (let i = pisoActual; i < pisoDestino; i++) {
                subirPiso();
            }
            abrirPuerta();
        } else {
            while (pisoDestino < pisoActual) {
                bajarPiso();
            }
            abrirPuerta();
        }
    } else {
        console.log('no puedes ir a un piso mayor que ' + pisosTotales +
            " revisa bien a que numero quieres ir ")
    }
};

function subirPiso() {
    if (estadoPuerta == 0) {
        if (pisoActual < pisosTotales) {
            pisoActual++;
        }
    }

};

function bajarPiso() {
    if (estadoPuerta == 0) {
        if (pisoActual > 0) {
            pisoActual--;
        }
    }
};

function estadoPiso() {
    if (estadoPuerta === 0) {
        console.log('La puerta está cerrado y el piso es', pisoActual)
    } else {
        console.log('puerta está abierta y estoy en el piso', pisoActual)
    }
};

module.exports = {
    abrir: abrirPuerta,
    cerrar: cerrarPuerta,
    irApiso: irApiso,
    estado: estadoPiso
};