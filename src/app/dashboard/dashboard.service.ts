import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../shared/models/stock';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl: string = 'https://lcds-cotacoes-santander.herokuapp.com/cotacoes';
  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]>{
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise()
  }
}
