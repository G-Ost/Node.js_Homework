// 11. Napiszmy aplikację która zwraca dane użytkownika pobrane z adresu `https://jsonplaceholder.typicode.com/users/{userId}`.
// UserId niech będzie pobierane  adresu naszego endpointu (np `http//localhost:4700/users/:userId`). 
// W przypadku braku użytkownika lub problemów w komunikacji z serwerem rzućmy wyjątek, który zostanie obsłużony w middleware. 
// Middleware powinno zapisać do pliku czas wystąpienia wyjątku i zwrócić odpowiedź ze stosownym komunikatem.

const express = require("express");
const fs = require('fs');
const app = express();
const getUser = require('./user.js');
let logFile;



fs.readFile(__dirname + "/logFile.json", (err, data) => {
    if (err) { console.log(err); logFile = []; }
    else {
        if (typeof data === Object) {
            logFile = data;
        }
        else {
            logFile = [];
        }
    }
});


function saveLog(logFile, errorLog, dateInfo) {
    let objectToSave = dateInfo + ", " + errorLog;
    logFile.push(objectToSave);
    let fileToSave = JSON.stringify(logFile);
    fs.writeFileSync(__dirname + "/logFile.json", fileToSave);
}



const userErrorMiddleware = (error, req, res, next) => {
    let currentDate = new Date();
    res.writeHead(404);
    res.end(error.message);
    console.error(error.message);
    saveLog(logFile, error.message, currentDate);
    next();
};





app.get("/users/:id", (request, response, next) => {
    let requestedId = parseInt(request.params.id);

    getUser(requestedId).then((value) => {
        let userInfo = value;
        if (value !== false) {
            console.log(userInfo);
            response.writeHead(200, { "Content-type": "application/json" });
            response.end(JSON.stringify(userInfo));
        }
        else {
            let error = new Error("Error: user not found.");
            next(error);
        }
    }
    );


});

app.use("/users", userErrorMiddleware);


app.listen(4700, () => console.log("Server is working"));