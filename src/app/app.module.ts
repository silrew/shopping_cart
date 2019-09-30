import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router'
import {
  MdToolbarModule,
  MdTabsModule,
  MdButtonModule,
  MdInputModule,
  MdDatepickerModule,
  MdNativeDateModule,
  MdCheckboxModule,
  MdRadioModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { DataService } from './shared/data.service';
import  {  CartItemsService } from './shared/cart.service'

import { OrderReviewComponent } from './order-review/order-review.component';
import { OrdersReolveService } from './order-review/orders.service';
const appRoutes: Routes = [
  { path:'products', component : ProductsComponent},
  { path: 'order-review', component: OrderReviewComponent},
  { path: '**', redirectTo: '/products'}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MdToolbarModule, MdTabsModule, MdButtonModule, MdInputModule, MdDatepickerModule, MdNativeDateModule, MdCheckboxModule, MdRadioModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, FooterComponent, HeaderComponent, ProductsComponent, OrderReviewComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DataService,  CartItemsService, OrdersReolveService]
})
export class AppModule { }
