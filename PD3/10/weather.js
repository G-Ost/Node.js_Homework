const request = require('request');
const getUser = require('./user.js');

async function getWeather(Id) {
    let user = await getUser(Id);
    let weather;
    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${user.address.geo.lat}&lon=${user.address.geo.lng}`;
    return new Promise(resolve => {
        request(urlWeather, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                weather = JSON.parse(body);
            } else {
                console.log('Weather not found');
            }
            resolve(weather);
        });

    });
}

module.exports = getWeather;