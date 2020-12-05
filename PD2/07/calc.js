function add(a, b, callback) {
    let result = a + b;
    if (typeof callback !== "function")
        console.log("Wrong callback definition!");
    else
        callback(result);
}

function sub(a, b, callback) {
    let result = a - b;
    if (typeof callback !== "function")
        console.log("Wrong callback definition!");
    else
        callback(result);
}

function multi(a, b, callback) {
    let result = a * b;
    if (typeof callback !== "function")
        console.log("Wrong callback definition!");
    else
        callback(result);
}

function div(a, b, callback) {
    let result = a / b;
    if (typeof callback !== "function")
        console.log("Wrong callback definition!");
    else
        callback(result);
}

module.exports = {
    add: add,
    sub: sub,
    multi: multi,
    div: div,
};
