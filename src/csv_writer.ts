// how to import a JS module in a TS file?
// 1. run `npm init -Y`
// 2. run `npm install -D @types/node`
import { appendFileSync, write } from 'fs';

interface Payment {
    id: number;
    amount: number;
    to: string;
    notes: string;
}

// type is a list of union types
type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[];

class csvWriter {
    private csv: string = '';

    constructor(private columns: PaymentColumns) {
        this.csv += this.columns.join(',') + '\n';
    }
    
    addRows(payments: Payment[]): void {
        let rows = payments.map((payment) => this.formatRow(payment));
        this.csv += rows.join('\n');
        console.log(this.csv);
    }

    private formatRow(payment: Payment): string {
        return this.columns.map((col) => payment[col]).join(',');
    }

    save(filename: string): void {
        appendFileSync(filename, this.csv);
        this.csv = '\n';
        console.log('file saved to', filename);
    }
}

const writer = new csvWriter(['id', 'amount', 'to', 'notes']);
writer.addRows([
    {id: 1, amount: 50, to: 'yoshi', notes: 'design work'},
    {id: 55, amount: 100, to: 'mario', notes: 'plumbing'},
])
writer.save('./data/payments.csv');