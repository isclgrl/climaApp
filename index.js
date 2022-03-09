const { inquireMenu,
        leerInput,
        pausa
    } = require('./helpers/inquirer');

const main = async() => {
    console.clear();

    let opt;

    do{
        opt = await inquireMenu(); 
        console.log({opt})



        if (opt !== 0) await pausa();

        // switch(opt){

        // }

    } while(opt !== 0);

}

main();