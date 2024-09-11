
export interface Receipt {
    receiptNumber: number,
    customer: Customer,
    sum: number,
    paymentMethods:string,
    date:Date,
    description:string
}
export interface Customer {
    name: string,
    number:string
}

export interface Supplier{
    name:string,
    number:string
}

export interface Expenses{
    date:Date,
    amount: number,
    supplier: Supplier,
    paymentMethods:string,
    detail:string
}