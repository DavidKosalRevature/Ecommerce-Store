import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/order.model';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orders: IOrder[]=[];
  items=this.cartService.getItems();
  
  constructor(private orderService: OrderService, private cartService: CartService) { }
 
 
  ngOnInit(): void {
this.orderService.getOrder().subscribe(data=>{
  this.orders=data;
})
  }

}
