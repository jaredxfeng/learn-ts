"use strict";
var Priority;
(function (Priority) {
    Priority[Priority["Lowest"] = 0] = "Lowest";
    Priority[Priority["Low"] = 1] = "Low";
    Priority[Priority["Medium"] = 2] = "Medium";
    Priority[Priority["High"] = 3] = "High";
    Priority[Priority["Urgent"] = 4] = "Urgent";
})(Priority || (Priority = {}));
function addTicket(details, priority) {
    console.log(`Added ticket with priority ${priority}: ${details}`);
}
// use enum to provide context and increase readability
addTicket('fix now!', Priority.High);
// out: Added ticket with priority 3: fix now!
