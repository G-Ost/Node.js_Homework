const os = require('os');
const fs = require('fs');


let message = `Hello ${os.userInfo().username}!`;
setTimeout(
    function () { console.log(message); }, 5000
)
fs.writeFile("Hello.txt", message, (err) => {
    if (err) throw err;
});