// 6. Stwórzmy aplikację która pobiera 2 parametry `a` i `b` z adresu url i wykona mnożenie w naszej aplikacji. Rezultat działania powinniśmy wysłać do użytkownika końcowego(klienta).

// ```
// http://localhost:4700?a=5&b=2 //wywołanie
// 10 //rezultat
// ```

const http = require("http");

const app = http.createServer((request, response) => {

    let urlObject = new URL(request.url, `http://${request.headers.host}`);

    let a = urlObject.searchParams.get("a");
    let b = urlObject.searchParams.get("b");
    response.writeHead(200, { "Content-type": "text/plain" });
    response.write(`Result: ${a * b}`);


    response.end();
});

app.listen(4700);
