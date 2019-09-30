import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItemsService} from './shared/cart.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  allCartItems$: Observable<number>;
  constructor( private service: CartItemsService){}
  ngOnInit(){
  }
}
