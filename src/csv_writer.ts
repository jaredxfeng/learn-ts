// how to import a JS module in a TS file?
// 1. run `npm init -Y`
// 2. run `npm install -D @types/node`
import { appendFileSync } from 'fs';

export class csvWriter<T> {
    private csv: string = '';

    // keyof T means the keys of a custom type/interface T
    constructor(private columns: (keyof T)[]) {
        this.csv += this.columns.join(',') + '\n';
    }
    
    addRows(rows: T[]): void {
        let rowsStr: string[] = rows.map((row) => this.formatRow(row));
        this.csv += rowsStr.join('\n');
        console.log(this.csv);
    }

    private formatRow(row: T): string {
        return this.columns.map((col) => row[col]).join(',');
    }

    save(filename: string): void {
        appendFileSync(filename, this.csv);
        this.csv = '\n';
        console.log('file saved to', filename);
    }
}

