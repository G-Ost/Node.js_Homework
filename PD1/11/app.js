// wczytujemy moduł 'fs'
const fs = require(`fs`);
// wczytujemy moduł 'math'
const math = require('./math');

//Sprawdzamy zgodność danych parametrów
if (process.argv[2] === undefined || process.argv[3] === undefined) {
    console.log("Za mało parametrów!");
}
else if (process.argv[4] !== undefined) {
    console.log("Za dużo parametrów!");
}
else {
    // Wczytujemy pliki i zamieniamy ich zawartość na liczby
    let a = parseInt(fs.readFileSync(`./${process.argv[2]}`, `utf-8`));
    let b = parseInt(fs.readFileSync(`./${process.argv[3]}`, `utf-8`));

    // Sprawdzamy wyniki
    console.log(`${a} + ${b} =`, math.add(a, b));
    console.log(`${a} - ${b} =`, math.sub(a, b));
    console.log(`${a} * ${b} =`, math.multi(a, b));
    console.log(`${a} / ${b} =`, math.div(a, b));

    // Zapisujemy
    fs.writeFileSync(`./wynik`, `Wyniki:
\n Dodawanie liczb ${a} i ${b} daje w wyniku ${math.add(a, b)}.
\n Odejmowanie liczb ${a} i ${b} daje w wyniku ${math.sub(a, b)}.
\n Mnożenie liczb ${a} i ${b} daje w wyniku ${math.multi(a, b)}.
\n Dzielenie liczb ${a} i ${b} daje w wyniku ${math.div(a, b)}.
`);
}