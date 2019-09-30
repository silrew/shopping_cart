import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Product } from '../models/product';
import { CartItemsService } from '../shared/cart.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<any>;
  accessory: Product;
  insurance: Product;
  itemSelected: Product;
  ins: any;
  acs: any;
  itemCount = 1;
  constructor(private dataService: DataService,
    private cartservice: CartItemsService,
    private router: Router) { }

  openModal(bike, value) {
    this.cartservice.addItem(bike, false, false, value);
    this.itemSelected = bike;
    this.accessory = this.products.find((prod) => prod.category === bike.category && prod.product_type === 'accessory')
    this.insurance = this.products.find(prod => prod.product_type === 'addon');
    this.ins = false;
    this.acs = false;
  }
  addAccessory(hasAccessory, hasdAddon) {
    this.cartservice.addItem(this.itemSelected, hasAccessory, hasdAddon)
  }
  orderReview() {
    this.router.navigate(['/order-review']);
  }
  updateItem(no, bike) {
    if (no > this.itemCount) {
      this.cartservice.addItem(bike);
    } else (this.cartservice.removeItem(bike))
  }
  ngOnInit() {
    this.products = this.dataService.getAllProducts();
  }

}