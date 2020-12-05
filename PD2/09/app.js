const os = require('os');

setTimeout(
    function () { console.log(`Hello ${os.userInfo().username}!`); }, 5000
);