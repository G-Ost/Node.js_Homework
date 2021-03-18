// 8. Napiszmy aplikacja która zwróci wszystkie parametry podane w url. Zwracany rezultat powinien być obiektem i mieć `'Content-type':'application/json'`

// ```
// http://localhost:4700?a=5&b=2 //wywołanie
// {'a':'1','b':'2'} //rezultat
// http://localhost:4700?name=jan&lastname=kowalski //wywołanie
// {'name':'jan','lastname':'kowalski'} //rezultat
// ```

const http = require("http");

const app = http.createServer((request, response) => {



    function paramsToObject(entries) {
        const result = {};
        for (const [key, value] of entries) {
            result[key] = value;
        }
        return result;
    }

    const urlParams = new URLSearchParams(request.url.substring(2)); //substring do pozbycia się "/?"
    const entries = urlParams.entries();
    const params = paramsToObject(entries);
    response.writeHead(200, { "Content-type": "application/json" });
    response.end(JSON.stringify(params));
});

app.listen(4700);
