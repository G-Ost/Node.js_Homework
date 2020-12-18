// 9. Podziel aplikację z zadania 7 na moduły odpowiednio:

// `app.js` – plik główny który uruchomi naszą aplikację i wywoła funkcje z naszego modułu `user.js`

// `user.js` – moduł z pobieraniem danych użytkownika

// `weather.js` – moduł z pobieraniem danych o prognozie pogody


const argv = require('yargs').argv;
const getWeather = require('./weather.js');

const userId = argv.id;


async function printWeather() {
    let weather = await getWeather(userId);
    console.log(weather.main);
}

printWeather();