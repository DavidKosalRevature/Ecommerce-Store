import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  private ENDPOINT={

    PRODUCT_DETAILS_URL:""
  }
  constructor(private http:HttpClient) { }


  getProductDetails(productId:any){
    return this.http.get(`${this.ENDPOINT.PRODUCT_DETAILS_URL + productId}`)
  }
}
