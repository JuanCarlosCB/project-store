import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemListComponent} from './item-list/item-list.component';
import {ItemEditComponent} from './item-edit/item-edit.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', component: ItemListComponent},
{ path: 'item/:id', component: ItemEditComponent },
{ path: 'order', component: OrderComponent} 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
