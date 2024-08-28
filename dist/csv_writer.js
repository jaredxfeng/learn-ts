"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// how to import a JS module in a TS file?
// 1. run `npm init -Y`
// 2. run `npm install -D @types/node`
const fs_1 = require("fs");
class csvWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = '';
        this.csv += this.columns.join(',') + '\n';
    }
    addRows(payments) {
        let rows = payments.map((payment) => this.formatRow(payment));
        this.csv += rows.join('\n');
        console.log(this.csv);
    }
    formatRow(payment) {
        return this.columns.map((col) => payment[col]).join(',');
    }
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = '\n';
        console.log('file saved to', filename);
    }
}
const writer = new csvWriter(['id', 'amount', 'to', 'notes']);
writer.addRows([
    { id: 1, amount: 50, to: 'yoshi', notes: 'design work' },
    { id: 55, amount: 100, to: 'mario', notes: 'plumbing' },
]);
writer.save('./data/payments.csv');
