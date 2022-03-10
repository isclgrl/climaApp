require('dotenv').config();

const { inquireMenu, leerInput, pausa, listarLugares } = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async () => {

    console.clear();

    const busquedas = new Busquedas();
    let opt;

    do {
        opt = await inquireMenu();

        switch (opt) {
            case 1:
                // Mostrar mensaje
                const termino = await leerInput('Ciudad: ');
                // Buscar lugares
                const lugares = await busquedas.ciudad(termino);
                // Seleccionar lugar
                const id = await listarLugares(lugares);
                const lugarSel = lugares.find( l => l.id === id);
                console.log(lugarSel);

                // Clima
                // Mostrar resultados
                console.log('\ninformacion del lugar\n'.green);
                console.log('Ciudad: ', lugarSel.nombre);
                console.log('Lat: ', lugarSel.lat);
                console.log('Lng: ', lugarSel.lng);
                console.log('Temperatura: ');
                console.log('Minima: ');
                console.log('Maxima: ');
                break;
        }

        if (opt !== 0) await pausa();

    } while (opt !== 0);

}

main();
