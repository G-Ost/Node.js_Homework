// 9. Stwórzmy aplikację której zadaniem będzie operacja na tablicy zawierającej użytkowników

//     - stworzyć ścieżkę `/add` do dodawania użytkownika która przyjmuje parametry `name`, `username`, `email` np `?name=Jan&username=janko&email=jan@nowak.abc`, 
// dodanie użytkownika powinno zadziałać tyko wtedy gdy zostało wysłane żądanie typu `POST`, jako rezultat należy zwrócić identyfikator dodanego użytkownika 
// (sposób przydzielania identyfikatorów dowolny)
//     - dodać ścieżkę `/show` do wyświetlania wszystkich użytkowników (gdy żądanie będzie typu `GET`)
//     - rozbudować ścieżkę `/show` tak by wyświetlała jedynie wybranego użytkownika, jeżeli zostanie podany odpowiedni `id` (`/show?id=1`) oraz żądanie będzie typu `GET`, 
// gdy nie ma użytkownika o danym id zwracamy odpowiedni kod statusu
//     - rozszerzyć aplikację o kasowanie użytkownika poprzez ścieżkę `/delete?id=1`, gdy nie ma użytkownika o danym id zwracamy odpowiedni kod statusu


const http = require("http");
const fs = require("fs");

let userId = 1;
let userBase = [];


fs.readFile("./09/database.json", function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        if (data.length !== 0) {
            userBase = JSON.parse(data);
            userId = userBase[userBase.length - 1].id + 1;
        }

    }
});


const app = http.createServer((request, response) => {
    function userData(id, name, username, email) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
    }
    let urlObject = new URL(request.url, `http://${request.headers.host}`);



    function checkIfUserExists(userId) {
        let returnedUser = userBase.find(element => element.id === parseInt(userId));
        if (returnedUser === undefined) {
            return false;
        }
        else {
            return returnedUser;
        }
    }


    function saveBaseToJSON() {
        fs.writeFile("./09/database.json", JSON.stringify(userBase), function (err) {
            if (err) {
                response.writeHead(500, { "Content-type": "text/plain" });
            }
        });
    }

    if (urlObject.pathname === "/add") {
        let name = urlObject.searchParams.get("name");
        let username = urlObject.searchParams.get("username");
        let email = urlObject.searchParams.get("email");
        if (request.method === "POST" && (name !== "" && username !== "" && email !== "")) {
            let user = new userData(userId, name, username, email);
            userBase.push(user);
            saveBaseToJSON();
            response.writeHead(201, { "Content-type": "text/plain" });
            response.write(`Request accepted, userID = ${userId}.`);
            userId++;
        }
        else {
            response.writeHead(400);
        }
    }


    if (urlObject.pathname === "/show") {
        let requestedId = urlObject.searchParams.get("id");
        if (request.method === "GET") {
            if (requestedId === null) {
                response.writeHead(200, { "Content-type": "application/json" });
                response.end(JSON.stringify(userBase));
            }
            else {
                let returnedUser = checkIfUserExists(requestedId);
                if (returnedUser) {
                    response.writeHead(200, { "Content-type": "application/json" });
                    response.end(JSON.stringify(returnedUser));
                }
                else {
                    response.writeHead(404);
                }
            }
        }
        else {
            response.writeHead(400);
        }
    }

    if (urlObject.pathname === "/delete") {
        if (request.method === "DELETE") {
            let requestedId = urlObject.searchParams.get("id");
            let returnedUser = checkIfUserExists(requestedId);
            if (returnedUser) {
                userBase.splice(requestedId - 1, 1);
                saveBaseToJSON();
            } else {
                response.writeHead(404);
            }
        }
        else {
            response.writeHead(400);
        }
    }





    response.end();
});

app.listen(4700);

// http://localhost:4700/add?name=Jan&username=janko&email=jan@nowak.abc
// http://localhost:4700/show
// http://localhost:4700/show?id=3
// http://localhost:4700/delete?id=3