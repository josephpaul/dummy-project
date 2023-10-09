import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }


  getProducts(){
    return this.http.get('https://fakestoreapi.com/products');
  }


  getProductById(id:number){
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }

  getCategories(){
    return this.http.get('https://fakestoreapi.com/products/categories');
  }

  getByCategory(category:string){
    return this.http.get(`https://fakestoreapi.com/products/category/${category}`);
  }

  getCartCount(){

    let cart;

    let items=localStorage.getItem('cart') as string;

    if(items){
      cart=JSON.parse(items);

      if(cart&&cart.length){
        return cart.length;
      }
      else  
      return 0;

    }

  }


}
