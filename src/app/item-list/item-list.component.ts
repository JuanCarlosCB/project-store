import { Component, OnInit } from '@angular/core';
import { Item } from '../entities/item.model';
import { ITEMS } from './mocks';
import { ItemListService } from './item-list.service';
import { Router } from '@angular/router';
import { Cart } from '../entities/cart.model';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items : Item[];

  constructor(private itemListService: ItemListService, private cartService:CartService,private router:Router) { }

  ngOnInit() {

    this.callService();
  }

  callService(){
    this.itemListService.getItemList()
    .subscribe( (data:Item[]) => this.items = data,
    error => console.error(error),
    () => console.log('My item list is loaded!')
  )
  }

  totalItems(){

    //con reduce
    if (this.items !== undefined && this.items !== null) {
      return this.items.reduce((prev, item) => prev + item.stock, 0);
    }
  }


  deleteItem(id:number){ //hecho
    this.itemListService.deleteItem(id).subscribe(
      () => this.callService()
    );
  }

  navigateOrder(){
    this.router.navigate(['order']);
  }

  addItem(cartItem:Cart){
    this.cartService.addItem(cartItem);
  }
}
