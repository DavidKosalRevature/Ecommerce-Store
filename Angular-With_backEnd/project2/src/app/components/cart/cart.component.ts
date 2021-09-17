import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICart } from 'src/app/models/cart.model';
import { IOrder } from 'src/app/models/order.model';
import { IProducts } from 'src/app/models/product.model';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orders: IOrder[] = [];


  items : ICart[]=[];

  constructor(private router: Router, private orderService: OrderService) { }


  ngOnInit(): void {
    this.orderService.getOrder().subscribe(data => {
      this.orders = data;
    })

   this.orderService.getAllCarts().subscribe(data=>{
     this.items=data
   })
  }

  onClickCheckout() {
    this.router.navigate(['/login'])
  }
  onClickRemove(item:ICart){
    console.log("Cart component"+item)
    this.orderService.deleteCart(item).subscribe(cart=>{
      console.log(cart);
    })
  }
}
