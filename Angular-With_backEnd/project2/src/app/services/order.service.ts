import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IOrder } from '../models/order.model';
import { Observable } from 'rxjs';
import { IProducts } from '../models/product.model';
import { ICart } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // connect backend 
  private BASEURL = 'http://localhost:9091/';
  private ENDPOINTS = {
    IOrder: 'orders',
    ICart: 'carts/'

  };
  constructor(private http: HttpClient) { }

  getOrder(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(
      `${this.BASEURL + this.ENDPOINTS.IOrder}`
    );

  }


  createOrder(data: IOrder): Observable<IOrder> {
    return this.http.post<IOrder>(
      `${this.BASEURL + this.ENDPOINTS.IOrder}`, data
    );

  }


  addCart(carts: ICart): Observable<ICart> {
    return this.http.post<ICart>(
      `${this.BASEURL + this.ENDPOINTS.ICart}`, carts
    )

  }

  getCart(cart: ICart): Observable<ICart[]> {
    return this.http.get<ICart[]>(
      `${this.BASEURL + this.ENDPOINTS.ICart + cart.id}`
    );

  }
  getAllCarts(): Observable<ICart[]> {
    return this.http.get<ICart[]>(
      `${this.BASEURL + this.ENDPOINTS.ICart}`
    );

  }


  public deleteCart(cart: ICart): Observable<ICart> {
    console.log("Cart service " + cart)
    console.log("Cart service url " + `${this.BASEURL + this.ENDPOINTS.ICart + cart.id}`)

    return this.http.delete<ICart>(
      `${this.BASEURL + this.ENDPOINTS.ICart + cart.id}`
    )
  }

  deleteAllCarts(): Observable<ICart> {
    return this.http.delete<ICart>(
      this.BASEURL + this.ENDPOINTS.ICart
    )
  }




}
