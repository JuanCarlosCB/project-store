import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Cart } from '../entities/cart.model';
import { ShippingInformation } from '../entities/shippinginformation.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  cart:Cart[];
  shippingInformation: ShippingInformation;
  total = 0;
  ordered: boolean;

  constructor(private cartService:CartService, private router:Router) { }

  ngOnInit() {
    this.cart = this.cartService.cart;
    this.ordered = false;
  }

  updateTotal(total){
    this.total = total;
  }


}
