// 8. Podziel aplikację z zadania 7 na funkcje:

// `getUser` – odpowiedzialną za pobieranie danych użytkownika

// `getWeather` – odpowiedzialną za pobieranie pogody

const request = require('request');
const argv = require('yargs').argv;

const userId = argv.id;



function getUser(Id) {
    let user;
    const urlUser = `https://jsonplaceholder.typicode.com/users/${Id}`;
    return new Promise(resolve => {
        request(urlUser, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                user = JSON.parse(body);

            } else {
                console.log('User not found');
            }
            resolve(user);
        });

    });
}

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

async function printWeather() {
    let weather = await getWeather(userId);
    console.log(weather.main);
}

printWeather();