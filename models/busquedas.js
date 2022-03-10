const axios = require('axios');

class Busquedas {

    historial = ['Madrid', 'Tokio', 'Manchester'];

    constructor() {
        //TODO: leer db si existe
    }

    async ciudad(lugar = '') {

        try {
            //peticion http
            // console.log('ciudad: ', lugar);
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Durango%2C%20Mexico.json?limit=5&language=es&access_token=pk.eyJ1IjoiaXNjbGdybCIsImEiOiJjbDBrYTB1aTUwa2h6M2JtaTc4ZmEzOGF6In0.rTRBVmNNI6DuRl1Z7sdQrw');
            console.log("resp: ", resp.data);
            return []; // retornar los lugares 
        } catch (error) {
            return []; // retornar los lugares 
        }

    }
}

module.exports = Busquedas;