import { Injectable } from '@angular/core';
import { IOrder } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items:IOrder[]=[]
  constructor() { }

  addToCart(order:IOrder){
    this.items.push(order);
  }
getItems(){
  return this.items;
}
clearCart(){
  this.items=[];
  return this.items;
}


}
