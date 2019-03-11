'use strict'

//requiereds
const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} x ${i} = ${base*i} \n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base}.txt`.red)
            }
        });

    });
}

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject(`alguno de los valores introducidos no es un numero`);
        } else {

            let data = '';
            console.log('========================'.green);
            console.log(`=======Tabla de ${base}=======`.magenta);
            console.log('========================'.green);


            for (let i = 1; i <= limite; i++) {
                data += (`${base} x ${i} = ${base*i} \n`);
            }

            resolve(data);
        }
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}