import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { crudService } from './crud.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CRUDComponent implements OnInit {
  constructor(
    private crudservice: crudService,
    private formBuilder: FormBuilder
  ) {}

  checkOutForm = this.formBuilder.group({
    name: '',
    cost: '',
  });
  dummyItem: Item;
  onSubmit() {
    console.log(this.checkOutForm.value.name, this.checkOutForm.value.cost);
    this.dummyItem = {
      'Name': this.checkOutForm.value.name,
      'Cost': this.checkOutForm.value.cost
    };
    this.crudservice.addItems(this.dummyItem);
    this.checkOutForm.reset();
  }

  buttonTrue: boolean = true;

  toggleButton() {
    this.buttonTrue = !this.buttonTrue;
  }
  items: Item[] = [];

  Delete(){
    // this.crudservice.deleteItem;
  }
  ngOnInit() {
    this.items = this.crudservice.getItems();
  }
}
