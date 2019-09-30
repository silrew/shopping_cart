import { Product } from '../models/product';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';



export interface Items {
  item: Product;
  qty: number;
  accessory?: Product[];
}
@Injectable()
export class CartItemsService {
  private items: Items[] = [];
  private totalCartItems = new Subject<number>();
  private totalCartItems$ = this.totalCartItems.asObservable();
  private priceTotal = new BehaviorSubject<number>(null);
  private priceTotal$ = this.priceTotal.asObservable();
  index: number;
  AllProducts: Product[];


  constructor(private dataservice: DataService) {
    this.AllProducts = this.dataservice.getAllProducts();
  }

  findAccessory(item: Product): Product {
    let accs = this.AllProducts.find((prod) => prod.product_type === 'accessory' && item.category === prod.category);
    return accs;
  }
  findAddOn(): Product {
    return this.AllProducts.find((prod) => prod.product_type === 'addon')
  }
  addItem(item: Product, hasAcceesory?: boolean, hasInsurance?: boolean, value?: number) {
    let counter = !value ? 1 : +value;

    if (this.items.length === 0) {
      this.items[0] = { item: item, qty: counter, accessory: [] };

    } else {
      let itemFound: Product; let index: number;
      this.items.forEach((prod, i) => {
        if (prod.item.id === item.id) {
          itemFound = prod.item;
          index = i;
        }
      });
      if (itemFound) {
        if (hasAcceesory) {
          let acs = this.findAccessory(item);
          this.items[index].accessory.push(acs);
        }
        if (hasInsurance) {
          let ins = this.findAddOn();
          this.items[index].accessory.push(ins);
        }
        if (!hasAcceesory && !hasInsurance && !value) {
          this.items[index].qty++;
        }
        if (!hasAcceesory && !hasInsurance && value) {
          this.items[index].qty = this.items[index].qty + counter;
        }
      } else {
        this.items.push({ item: item, qty: counter, accessory: [] })
      }

    }
    this.getToatalItems();
    this.getTotalPrice();
  }
  getToatalItems() {
    let total = this.items.reduce((acc, curr) => acc + curr.qty, 0); console.log(total, 'after 1 calc');
    this.items.forEach((prod, i) => {
      if (prod.accessory.length > 0) {
        total = total + prod.accessory.length;
      }
    });
    this.totalCartItems.next(total);
  }

  removeItem(item) {
    let index: number;
    this.items.some((prod, i) => {
      if (prod.item.id === item.id) {
        index = i;
        return true;
      }
    });
    this.items.splice(index, 1);
    this.getToatalItems();
    this.getTotalPrice();
  }
  getTotalPrice() {
    let totalPrice: number;
    let price = this.items.reduce((acc, curr) => acc + curr.item.price * curr.qty, 0);
    this.items.forEach((prod, i) => {
      if (prod.accessory.length > 0) {
        price = prod.accessory.reduce((acc, curr) => acc + curr.price, price)
      }
    });
    this.priceTotal.next(price);
  }

  getAllCartItems(): Items[] {
    return this.items;
  }
  getallItemsCount(): Observable<number> {
    return this.totalCartItems$;
  }
  getPriceTotal(): Observable<number> {
    return this.priceTotal$;
  }

}