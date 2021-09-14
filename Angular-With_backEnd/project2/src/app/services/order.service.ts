import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { IOrder } from '../models/order.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private BASEURL = 'http://localhost:9091/';
  private ENDPOINTS = {
    IOrder: 'orders',
  };
  constructor(private http: HttpClient) { }

  getOrder():Observable<IOrder[]>{
    return this.http.get<IOrder[]>(
      `${this.BASEURL + this.ENDPOINTS.IOrder}`
    );

  } 

  createOrder(data:IOrder):Observable<IOrder>{
    return this.http.post<IOrder>(
      `${this.BASEURL + this.ENDPOINTS.IOrder}`,data
    );

  }


}
