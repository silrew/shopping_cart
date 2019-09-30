import { Component, OnInit, Input } from '@angular/core';
import { CartItemsService} from '../shared/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 cartItemsno: number;
  items:Array <any>;
  cartItems$: Observable<number>;
  constructor(private service: CartItemsService) { }
  
  ngOnInit() {
    this.cartItems$ = this.service.getallItemsCount();
  }

}