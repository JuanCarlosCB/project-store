import { Component, OnInit } from '@angular/core';
import { Item } from '../entities/item.model';
import { ItemListService } from '../item-list/item-list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item:Item;
  urlimg: string = '../../assets';

  constructor(private service: ItemListService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
  this.item = new Item();
  this.item.image = this.urlimg;
  }

  addProduct(){
  this.service.addProduct(this.item).subscribe(
    () => this.router.navigate([''])
    )
  }
}
