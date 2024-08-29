"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type is a list of union types
// type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[];
const csv_writer_1 = require("./csv_writer");
const paymentWriter = new csv_writer_1.csvWriter(['id', 'amount', 'to', 'notes']);
paymentWriter.addRows([
    { id: 1, amount: 50, to: 'yoshi', notes: 'design work' },
    { id: 55, amount: 100, to: 'mario', notes: 'plumbing' },
]);
paymentWriter.save('./data/payments.csv');
