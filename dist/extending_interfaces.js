"use strict";
const user = {
    id: 1,
    format() {
        return `This user has an id of ${this.id}`;
    }
};
const bill = {
    id: 2,
    amount: 50,
    server: 'mario',
    format() {
        return `Bill with id ${this.id} has $${this.amount} to pay`;
    }
};
function printFormatted(val) {
    console.log(val.format());
}
function printBill(bill) {
    console.log('server:', bill.server);
    console.log(bill.format());
}
printFormatted(user);
printFormatted(bill); // accepts an extension of the defined type in a function call
// printBill(user) type mismatch
printBill(bill);
