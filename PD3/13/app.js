
// 13. Napisz program który w nieskończoność będzie wypisywał komunikat 
// `Hello World X` z różnymi opóźnieniami, gdzie X to aktualne opóźnienie w 
// sekundach. Zacznij z 1-sekundowym opóźnieniem, a następnie zwiększaj opóźnienie
// za każdym razem o 1 sekundę. 
// (Za drugim razem opóźnienie będzie wynosiło 2 sekundy, za trzecim 3 sekundy,
//      i tak dalej).



// function delayedHellows() {
//     clearInterval(interval);
//     let interval = setInterval(() => { console.log("Hello"); }, delayer(delay));
// }

// delayedHellows();
function delayedHellows() {
    let counter = 0;
    let intervalFunction = function () {
        clearInterval(interval);
        console.log(`Hello World ${counter / 1000}s.`);
        counter += 1000;
        interval = setInterval(intervalFunction, counter);

    };

    let interval = setInterval(intervalFunction, counter);
}

delayedHellows();

