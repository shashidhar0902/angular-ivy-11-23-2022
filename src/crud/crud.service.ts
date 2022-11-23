import { Injectable } from "@angular/core";
import { Item } from "./item";

@Injectable({
  providedIn:'root'
})
export class crudService{
  items: Item[] = [];
  addItems(item: Item){
    console.log(this.items);
    this.items.push(item);
  }
  getItems(): Item[]{
    console.log(this.items);
    return this.items;
  }
  deleteItem(num: number){
    this.items.splice(num);
  }
}