"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.csvWriter = void 0;
// how to import a JS module in a TS file?
// 1. run `npm init -Y`
// 2. run `npm install -D @types/node`
const fs_1 = require("fs");
class csvWriter {
    // keyof T means the keys of a custom type/interface T
    constructor(columns) {
        this.columns = columns;
        this.csv = '';
        this.csv += this.columns.join(',') + '\n';
    }
    addRows(rows) {
        let rowsStr = rows.map((row) => this.formatRow(row));
        this.csv += rowsStr.join('\n');
        console.log(this.csv);
    }
    formatRow(row) {
        return this.columns.map((col) => row[col]).join(',');
    }
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = '\n';
        console.log('file saved to', filename);
    }
}
exports.csvWriter = csvWriter;
