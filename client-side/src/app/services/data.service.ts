
import { Injectable } from '@angular/core';
import { Customer, Receipt, Expenses, Supplier } from '../modules/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private baseUrl = 'http://127.0.0.1:3620'

  constructor(private http: HttpClient) { }

  AllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}/customrs/allCustomers`);
  }
  getCustByName(name:string):Observable<Customer>{
    return this.http.get<Customer>(`${this.baseUrl}/customrs/getCustomerByName/${name}`)
  }
  getAllSuppliers(): Observable<Supplier[]> {
    const url = `${this.baseUrl}/suppliers/getAllSuppliers`;
    return this.http.get<Supplier[]>(url);
  }

  getAllInvoices(): Observable<Receipt[]> {
    return this.http.get<Receipt[]>(`${this.baseUrl}/invoices/getAll`);
  }

  addReceipt(newReceipt: Receipt): Observable<Receipt> {

    return this.http.post<Receipt>(`${this.baseUrl}/invoices/addInvoice`,
      newReceipt,
      {
        headers: { 'content-type': 'application/json' }
      }
    )
  }
  addExpenses(newExpenses: Expenses): Observable<Expenses> {
    return this.http.post<Expenses>('http://127.0.0.1:3620/expenses/saveExpenses',
      newExpenses, {
      headers: { 'content-type': 'application/json' }
    })
  }
  getExpensesByMonth(month: number): Observable<Array<Expenses>> {
    return this.http.get<Array<Expenses>>(`${this.baseUrl}/expenses/getExpensesByMonth/${month}`);
  }
  getExpensesByYear(year: number): Observable<Array<Expenses>> {
    return this.http.get<Array<Expenses>>(`${this.baseUrl}/expenses/getExpensesByYear/${year}`);
  }
  getIncomeByMonth(month: number): Observable<Array<Receipt>> {
    return this.http.get<Array<Receipt>>(`${this.baseUrl}/receipt/getIncomeByMonth/${month}`);
  }
  getIncomeByYear(year: number): Observable<Array<Receipt>> {
    return this.http.get<Array<Receipt>>(`${this.baseUrl}/receipt/getIncomeByYear/${year}`);
  }
}
