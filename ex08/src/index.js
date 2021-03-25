const _ = require('lodash');
var users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },
    {
        firstName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female"
    }
];
function getUsers() {
    var output = "";
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
    }
    return output;
}
function findUser(lastName, gender) {
    try {
        var user = _.find(users)
    } catch (error) {
        return;
        console.log();
    }
}
getUsers();
findUser();
module.exports = findUser;