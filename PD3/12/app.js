// 12. Napisz program który:
// Wypisze komunikat `Hello` 5 razy, w odstępach co 1 sekundę,
// następnie wypisze `Finish` i się zakończy. Użyj funkcji `setInterval`.

function delayedHellows() {
    let helloInterval = setInterval(() => { console.log("Hello"); }, 1000);
    setTimeout(() => { console.log("Finish"); clearInterval(helloInterval); }, 5500);
    return;
}

delayedHellows();
