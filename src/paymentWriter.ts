interface Payment {
    id: number;
    amount: number;
    to: string;
    notes: string;
}

// type is a list of union types
// type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[];

import { csvWriter } from './csv_writer';

const paymentWriter = new csvWriter<Payment>(['id', 'amount', 'to', 'notes']);

paymentWriter.addRows([
    {id: 1, amount: 50, to: 'yoshi', notes: 'design work'},
    {id: 55, amount: 100, to: 'mario', notes: 'plumbing'},
])

paymentWriter.save('./data/payments.csv');