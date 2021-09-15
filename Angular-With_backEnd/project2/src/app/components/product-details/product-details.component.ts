import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailsService } from 'src/app/services/product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

public productId:any;
public products:any



  constructor(private productDetailsService:ProductDetailsService,private route:ActivatedRoute) { 

    this.productId=this.route.snapshot.paramMap.get('productId')
  }

  ngOnInit(): void {

this.productDetailsService.getProductDetails(2).subscribe(data=>{
  this.productId=data
  console.log(this.productId)
})


    this.productDetailsService.getAllProducts().subscribe(data=>{
      this.products=data
console.log(this.products)
    })
  }



}
