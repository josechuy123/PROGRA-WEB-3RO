// let greet = require('./greet');
// let greet2 = require('./greet2').greet;
// let greet2b = require('./greet2');

// greet(); //1
// greet2(); //2
// greet2b.greet() //3



// let greet3 = require('./greet3');
// console.log(greet3);
// greet3.greet();


// let greet3b = require('./greet3');
// greet3b.message = " Saludos con el cambio en greet3 ";
// greet3b.greet();
// console.log(greet3);

// let greet4a = require('./greet4');
// console.log(greet4a);

// greet4a.greet()
// let greet4b = require('./greet4')
// greet4b.message = "saludos con el cambio en greet4"
// console.log(greet4b)
// greet4b.greet()
// console.log(greet4a)



// function aumenta(x) { //////// paso por valor
//     x++;
//     console.log(x);
// }

// let x = 5;
// aumenta(x);
// console.log(x);


// console.log('aqui trabajamos con el modulo');

// let miModulo = require('./miModulo')
// miModulo.start();
// miModulo.increment();
// miModulo.increment();
// miModulo.increment();
// miModulo.increment();
// console.log(miModulo.count());



let moduloElevador = require('./moduloElevador');

moduloElevador.irApiso(2);
moduloElevador.cerrar();
moduloElevador.estado();

moduloElevador.irApiso(5);
moduloElevador.cerrar();
moduloElevador.estado();

moduloElevador.irApiso(3);
moduloElevador.cerrar();
moduloElevador.estado();

moduloElevador.irApiso(15);
moduloElevador.cerrar();
moduloElevador.estado();