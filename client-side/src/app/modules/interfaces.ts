


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