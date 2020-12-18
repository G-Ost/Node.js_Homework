// 11. Napisz program, który po 4 sekundach wypisze komunikat `Hello afer 4 seconds`, a po 8 sekundach `Hello afer 8 seconds`.
// Możesz zdefiniować tylko jedną własną funkcję!

function delayedHellows() {
    setTimeout(() => { console.log("Hello after 4 seconds"); }, 4000);
    setTimeout(() => { console.log("Hello after 8 seconds"); }, 8000);
}
delayedHellows();