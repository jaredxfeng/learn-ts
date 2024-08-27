"use strict";
const personOne = {
    id: 1,
    firstName: 'mario',
};
const personTwo = {
    id: 2,
    firstName: 'Yoshi',
    email: 'yoshi@netninja.dev',
};
const personThree = {
    email: 'peach@netninja.dev',
};
function printUser(user) {
    console.log(user.id, user.email, user.firstName);
}
// printUser(personOne) wrong type
printUser(personTwo);
// printUser(personThree) wrong type
