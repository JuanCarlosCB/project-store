import { Component, OnInit } from '@angular/core';
import { ItemListService } from '../item-list/item-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../entities/item.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  item:Item;

    constructor(private service: ItemListService, private route:ActivatedRoute, private router:Router){}

    ngOnInit(){
      this.route.params.subscribe(params =>{
        const id = <number>params['id'];
        if(id != null){
          this.service.getItemId(id)
          .subscribe( (data:Item) => this.item = data,
          error => console.error(error),
          () => console.log('My item list is loaded!'))
        }
      })
    }

    //hecho
    updateItem(){
      this.service.updateItem(this.item).subscribe(
        () => this.router.navigate(['/home'])
      );
    }
  }
