import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  private ENDPOINT={

    PRODUCT_DETAILS_URL:"https://fakestoreapi.com/products/"
  }
  constructor(private http:HttpClient) { }


  getProductDetails(productId:any){
    return this.http.get(`${this.ENDPOINT.PRODUCT_DETAILS_URL+'/' + productId}`)
  }
  getAllProducts(): Observable<any>{
    return this.http.get<any>(`${this.ENDPOINT.PRODUCT_DETAILS_URL}`)
  }
}
