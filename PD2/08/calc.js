const fs = require('fs');


function add(a, b, callback) {
    let result = a + b;
    if (typeof callback !== "function")
        console.log("Wrong callback definition!");
    else {
        callback(result);
        fs.writeFile("add.txt", result, (err) => {
            if (err) throw err;
        });
    }
}

function sub(a, b, callback) {
    let result = a - b;
    if (typeof callback !== "function")
        console.log("Wrong callback definition!");
    else {
        callback(result);
        fs.writeFile("add.txt", result, (err) => {
            if (err) throw err;
        });
    }
}

function multi(a, b, callback) {
    let result = a * b;
    if (typeof callback !== "function")
        console.log("Wrong callback definition!");
    else {
        callback(result);
        fs.writeFile("add.txt", result, (err) => {
            if (err) throw err;
        });
    }
}

function div(a, b, callback) {
    let result = a / b;
    if (typeof callback !== "function")
        console.log("Wrong callback definition!");
    else {
        callback(result);
        fs.writeFile("add.txt", result, (err) => {
            if (err) throw err;
        });
    }
}

// musimy pamiętać o wyeksportowaniu naszych metod aby były widoczne oraz dostępne poza tym modułem
module.exports = {
    add: add,
    sub: sub,
    multi: multi,
    div: div,
};
