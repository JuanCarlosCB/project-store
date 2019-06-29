import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../entities/item.model';
import { ItemListService } from '../item-list/item-list.service';
import { ItemListComponent } from '../item-list/item-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item : Item;
  @Output() delete:EventEmitter<number> = new EventEmitter<number>();
  @Output() update:EventEmitter<Item> = new EventEmitter<Item>();

  constructor(private itemListService:ItemListService, private router:Router) { }

  ngOnInit() {
  }

  // increaseCantidad(e){
  //   if(e.stock > 0){
  //     e.quantity++;
  //     e.stock--;
  //   }
  // }

  showKey(e){
    alert(e.key);
  }

  getCoord(e){
    alert("Recomiendo este producto");
  }

  metodoChange(e){
    console.log(e);
  }

  metodoBlur(e){
    console.log(e);
  }

  metodoFocus(e){
    console.log(e);
  }

  //hecho
  updateItem(e){
    this.update.emit(this.item);
  }

  //hecho
  deleteItem(){
    this.delete.emit(this.item.id);
  }

  //hecho
  navigateItem(){
    this.router.navigate(['/item', this.item.id]);
  }

  increaseCantidad(){
    if(this.item.stock > 0){
      this.item.quantity++;
      this.item.stock--;
    }
  }

  decreaseCantidad(){
    if(this.item.quantity > 0){
      this.item.quantity--;
      this.item.stock++;
    }
  }
}
