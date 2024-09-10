
import { Injectable } from '@angular/core';
import { Customer, Receipt } from '../modules/interfaces';
import { PaymentMethods } from '../modules/enums';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private baseUrl = 'http://127.0.0.1:3620'

  constructor(private http: HttpClient) { }

  get AllReceipts(): Observable<Array<Receipt>> {
    // ניתוב להבאת כל הקבלות
    return this.http.get<Array<Receipt>>(`${this.baseUrl}`);
  }

  get AllCustomers(): Observable<Array<Customer>> {
    // ניתוב להבאת כל הלקוחות
    return this.http.get<Array<Customer>>(`${this.baseUrl}`);
  }

  get lastNumber():Observable<number>{
    return this.http.get<number>(`${this.baseUrl}`);
  }

  addReceipt(newReceipt: Receipt): Observable<Receipt> {
    return this.http.post<Receipt>(`${this.baseUrl}`,
      newReceipt, {
      headers: { 'content-type': 'application/json' }
    })
  }
}