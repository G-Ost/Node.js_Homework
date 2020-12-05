
const myCalc = require('./calc');
myCalc.add(100, 5, function someCallback(wynik) { console.log(`Result = ${wynik}`); });