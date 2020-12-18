// 10. Dodaj do zadania 9 zapis do pliku obiektu składającego się z nazwy 
// użytkownika oraz pobranej temperatury.


const argv = require('yargs').argv;
const getWeather = require('./weather.js');
const getUser = require('./user.js');
const fs = require('fs');
const userId = argv.id;


async function printAndSaveWeather() {
    let weather = await getWeather(userId);
    let user = await getUser(userId);
    console.log(weather.main);

    let weatherData = `Username: ${user.username},\nTemp:${weather.main.temp}`;

    fs.writeFile('weather.txt', weatherData, (error) => {
        if (error) {
            console.log('błąd zapisu do pliku');
        } else {
            console.log('plik został zapisany');
        }
    });
}

printAndSaveWeather();

