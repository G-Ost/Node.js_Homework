// 7. Rozszerzmy naszą aplikację z zadania 6 o dodatkowe działania matematyczne takie jak mnożenie, dzielenie i odejmowanie. Podzielmy zadania na odpowiednie ścieżki.

// ```
// /mnozenie...
// /dzielenie...
// /dodawanie...
// /odejmowanie...
// ```

// Gdy działanie jest niemożliwe do wykonania, aplikacja zwraca odpowiedni komunikat oraz kod statusu `Bad Request`

const http = require("http");

const app = http.createServer((request, response) => {

    let urlObject = new URL(request.url, `http://${request.headers.host}`);

    let queryNumberA = parseInt(urlObject.searchParams.get("a"));
    let queryNumberB = parseInt(urlObject.searchParams.get("b"));

    if (isNaN(queryNumberA) || isNaN(queryNumberB)) {
        response.writeHead(400, { "Content-type": "text/plain" });
        response.write(`Error. Wrong input type.`);
    }
    else {
        if (urlObject.pathname === "/dodawanie") {
            response.writeHead(200, { "Content-type": "text/plain" });
            response.write(`Result: ${queryNumberA + queryNumberB}`);
        }
        if (urlObject.pathname === "/odejmowanie") {
            response.writeHead(200, { "Content-type": "text/plain" });
            response.write(`Result: ${queryNumberA - queryNumberB}`);
        }
        if (urlObject.pathname === "/mnozenie") {
            response.writeHead(200, { "Content-type": "text/plain" });
            response.write(`Result: ${queryNumberA * queryNumberB}`);
        }
        if (urlObject.pathname === "/dzielenie") {
            response.writeHead(200, { "Content-type": "text/plain" });
            response.write(`Result: ${queryNumberA / queryNumberB}`);
        }
        else {
            response.writeHead(400);
        }
    }
    response.end();
});

app.listen(4700);
