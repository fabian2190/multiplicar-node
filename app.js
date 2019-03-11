'use strict'
const { crearArchivo } = require('./multiplicar/multiplicar.js');
const { listarTabla } = require('./multiplicar/multiplicar.js');
const argv = require('./config/yargs').argv
console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla))
            .catch(err => console.log(err));

        break;
    case 'crear':
        console.log(argv.base)
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}


//let parametro = argv[2];s
//let base = parametro.split('=')[1];

/*

*/