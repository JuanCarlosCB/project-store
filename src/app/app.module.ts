import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

//import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalPipe } from './total.pipe';
import { PriceTotalPipe } from './price-total.pipe';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemListService } from './item-list/item-list.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './item/item.component';
import { ItemEditComponent } from './item-edit/item-edit.component';
import { routing } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { AddItemComponent } from './add-item/add-item.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { ShippinginformationComponent } from './shippinginformation/shippinginformation.component';
import { CartService } from './cart/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    TotalPipe,
    PriceTotalPipe,
    ItemListComponent,
    ItemComponent,
    ItemEditComponent,
    MenuComponent,
    AddItemComponent,
    OrderComponent,
    CartComponent,
    ShippinginformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [ItemListService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
