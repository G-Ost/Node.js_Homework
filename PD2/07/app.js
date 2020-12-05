const myCalc = require('./calc');
myCalc.div(100, 5, function someCallback(wynik) { console.log(wynik); });
myCalc.add(2, 4, function someCallback(wynik) { console.log(wynik); })