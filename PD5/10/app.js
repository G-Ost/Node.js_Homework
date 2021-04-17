// 10. Rozbudujmy aplikację z zadania 9 o zapisywanie logów do pliku - nowe logi powinny dopisywać się na końcu pliku.

const express = require('express');
const fs = require('fs');
const app = express();
let logFile;

function saveLogs(logFile, requestLog, responseLog) {
    // logFile.push(requestLog);
    // logFile.push(responseLog);
    let objectToSave = {
        requestLog: requestLog,
        responseLog: responseLog
    }
    logFile.push(objectToSave);
    let fileToSave = JSON.stringify(logFile);
    fs.writeFileSync(__dirname + "/logFile.json", fileToSave);
}


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



const timerMiddleware = (req, res, next) => {
    let currentDate = new Date();
    let requestLog = `Time of request: ${currentDate}`;
    console.log(requestLog);
    next();
    res.on("finish", () => {
        currentDate = new Date();
        let responseLog = `Time of response: ${currentDate}`;
        console.log(responseLog);
        saveLogs(logFile, requestLog, responseLog);
    });

};



app.use(timerMiddleware);

app.get('/', (req, res) => {

    res.writeHead(200);
    setTimeout(() => {
        console.log("Response sent."); return res.end("ok");
    }, 1000);
    // res.end(`Ok`);
});



app.listen(4700, () => console.log('start server'));
