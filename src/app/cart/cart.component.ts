import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Cart } from '../entities/cart.model';
import { CartService } from './cart.service';
import { Item } from '../entities/item.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems:Cart[];
  // @Output() total:EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    // this.total.emit(this.getTotalCart());
  }


  // remove(itemRemovable:number){
  //   this.cart.filter( item => item.id !== itemRemovable);
  // }
}
