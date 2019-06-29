// import { ITEMS } from './mocks';
import { Item } from '../entities/item.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization':'my-auth-token'
  })
};

const URL_BASE = 'http://localhost:3000/item-list';

@Injectable()
export class ItemListService{

  constructor(private http: HttpClient){}

  getItemList(){ //getItemList():Item[]{
    // return ITEMS;
    return this.http.get(URL_BASE);
  }

  getItemId(id:number){
    return this.http.get(URL_BASE+'/'+id);
  }

  updateItem (item:Item):Observable<Item>{
    const url = `${URL_BASE}/${item.id}`;
    return this.http.put<Item>(url, item, httpOptions);
  }

  deleteItem(id:number):Observable<any>{
    const url = `${URL_BASE}/${id}`;
    return this.http.delete<Item>(url, httpOptions);
  }

  addProduct (item:Item):Observable<Item>{
    const url = `${URL_BASE}/${item.id}`;
    return this.http.post<Item>(url, item, httpOptions);
  }
}
