import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CRUDComponent } from '../crud/crud.component';
import { ShowApiComponent } from '../show-api/show-api.component';
import { ListComponent } from '../list/list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot([
    {path:'crud',component:CRUDComponent},
    {path:'showapi',component:ShowApiComponent},
    {path:'list',component:ListComponent}
  ])],
  declarations: [ AppComponent,ShowApiComponent,ListComponent,CRUDComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
