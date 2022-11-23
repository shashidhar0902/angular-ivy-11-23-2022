import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

export class ListComponent {

  private _listFilter: string;
  get listFilter(): string{
    return this._listFilter;
  }  
  set listFilter(value: string){
    this._listFilter = value;
    console.log(this._listFilter);
  }

ngOnInit(){
  this._listFilter = '';
}
showImage: boolean = false;
  products: IProduct[] = [
    {
      productName: 'One',
      productImageUrl: './One.png',
      productCost: 1
    },
    {

      productName: 'Two',
      productImageUrl: './assets/Images/Two.jpg',
      productCost: 2,
    },
    {
      productName: 'Three',
      productImageUrl: './assets/Images/Three.jpg',
      productCost: 3
    },
    {
      productCost: 4,
      productName: 'Four',
      productImageUrl: './assets/Images/Four.jpg',
    },
  ];

  filteredProducts(): IProduct[]{
    return this.products.filter(
      (product:IProduct) => product.productName.toLowerCase().includes(this._listFilter.toLowerCase()));
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
