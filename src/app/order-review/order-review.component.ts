import { Component, OnInit } from '@angular/core';
import { Items,CartItemsService} from '../shared/cart.service';
import { Subject, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { OrdersReolveService } from './orders.service';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-order-review',
  templateUrl: './order-review.component.html',
  styleUrls: ['./order-review.component.css'],
  providers:[OrdersReolveService]
})
export class OrderReviewComponent implements OnInit {
 cartItems: Items[];
 priceToatal$: Observable<number>;
 total: number;
  constructor(public cartservice: CartItemsService,
              public route: ActivatedRoute) {
      // this.route.data.subscribe(amt => this.priceToatal$ = amt. priceTotal);
      // console.log(this.priceToatal$)
   }
removeItem(item){
  this.cartservice.removeItem(item);
}

  ngOnInit() {
    this.cartItems = this.cartservice.getAllCartItems();
    //  this.priceToatal$ = 
    this.cartservice.getPriceTotal().subscribe(data=>this.total = data);
    
    // .subscribe(val =>{
    //    this.total = val;
    //    console.log(this.total, 'in oreer')
    //    });
       console.log(this.total, 'out oreer');
     
  }

}