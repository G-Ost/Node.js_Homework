const request = require('request');

function getUser(Id) {
    let user;
    const urlUser = `https://jsonplaceholder.typicode.com/users/${Id}`;
    return new Promise(resolve => {
        request(urlUser, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                user = JSON.parse(body);

            } else {
                console.log('User not found');
            }
            resolve(user);
        });

    });
}


module.exports = getUser;