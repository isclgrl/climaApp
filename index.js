const { inquireMenu,
    leerInput,
    pausa
} = require('./helpers/inquirer');
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
                const lugar = await leerInput('Ciudad: ');
                console.log(lugar);
                // Buscar lugares
                // Seleccionar lugar
                // Mostrar resultados
                console.log('\ninformacion del lugar\n'.green);
                console.log('Ciudad: ',);
                console.log('Lat: ');
                console.log('Lng: ');
                console.log('Temperatura: ');
                console.log('Minima: ');
                console.log('Maxima: ');
            break;
        }

        if (opt !== 0) await pausa();

    } while (opt !== 0);

}

main();