"use strict";
// create an empty set that can only contain strings
const names = new Set();
names.add('mario');
names.add('peach');
names.add('luigi');
names.add('mario'); // duplicate, ignored by the Set object
// names.add(5) // error: Argument of type '5' is not assignable to parameter of type 'string'.
console.log(names);
const user1 = { email: 'mario@netninja.dev', score: 10 };
const user2 = { email: 'peach@netninja.dev', score: 15 };
const users = new Set();
users.add(user1);
users.add(user2);
users.add(user1); // duplicate, ignored by the Set object
// users.add('hi'); // error: Argument of type '"hi"' is not assignable to parameter of type 'setUser'.
console.log(users);
// sets as function arguments
function logUserEmails(users) {
    users.forEach(user => console.log(user.email));
}
logUserEmails(users);
