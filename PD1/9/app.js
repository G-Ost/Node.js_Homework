// Definiujemy funkcję
function hello(name) {
    //Sprawdzamy czy parametr został dany, jeśli nie, podmieniamy go na 'world'
    if (name === undefined) {
        name = "world";
    }
    // Wyświetlamy wiadomość
    console.log(`Hello ${name}`)
}
// Wywołujemy funkcję
hello(process.argv[2]);