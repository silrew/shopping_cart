import { Component, OnInit } from '@angular/core';
import { Items, CartItemsService } from '../shared/cart.service';
import { Subject, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { OrdersReolveService } from './orders.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.css'],
  providers: [OrdersReolveService]
})
export class OrderReviewComponent implements OnInit {
  cartItems: Items[];
  priceToatal$: Observable<number>;
  total: number;
  constructor(public cartservice: CartItemsService,
    public route: ActivatedRoute) {
  }
  removeItem(item) {
    this.cartservice.removeItem(item);
  }

  ngOnInit() {
    this.cartItems = this.cartservice.getAllCartItems();
    this.cartservice.getPriceTotal().subscribe(data => this.total = data);
  }

}