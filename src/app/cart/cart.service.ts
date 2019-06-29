import { Injectable } from '@angular/core';
import { Cart } from '../entities/cart.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../entities/item.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'my-auth-token'
  })
};

const URL_BASE = 'http://localhost:3000/order';

@Injectable()
export class CartService {
  cart:Cart[];
  constructor(private http: HttpClient) { }

  getTotalCart(total:number){
    return this.http.get(URL_BASE+'/'+total);
  }

  addItem(cartItem:Cart){
    this.cart.push(cartItem);
  }
}
