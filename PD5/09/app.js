// 9. Napiszmy middleware który loguje w konsoli czas odebrania żądania oraz czas wysłania odpowiedzi.
//  Uwaga: czas wysłania odpowiedzi zalogujmy po jej wysłaniu!

const express = require('express');
const app = express();

const timerMiddleware = (req, res, next) => {
    let currentDate = new Date();
    console.log(`Time of request: ${currentDate}`);
    next();
    res.on("finish", () => {
        currentDate = new Date();
        console.log(`Time of response: ${currentDate}`);
    })

};



app.use(timerMiddleware);

app.get('/', (req, res) => {

    res.writeHead(200);
    setTimeout(() => {
        console.log("Response sent."); return res.end("ok");
    }, 2000);
    // res.end(`Ok`);
});



app.listen(4700, () => console.log('start server'));