// // 8. Zmodyfikujmy zadanie 7 tak by middleware Express `express.static` zwracało pliki tylko z folderu `images`, folder ten powinien znajdować się w głównym folderze aplikacji.


const express = require('express');
const app = express();

app.use(express.static(__dirname + "/images"));


app.get('/:filename', (req, res) => {
    res.send(`file ${req.params.filename} does not exists`);
    // ...
});

app.listen(4700, () => console.log('start server'));
