import { Injectable } from '@angular/core';
import { CartItemsService} from '../shared/cart.service';
import { Observable } from 'rxjs';
import {Resolve, ActivatedRouteSnapshot,
           RouterStateSnapshot} from '@angular/router'

@Injectable()
export class OrdersReolveService implements Resolve<Observable<number>> {
 price$ : Observable<number>
  constructor( private service: CartItemsService) { }
  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<number>{
              this.price$ = this.service.getPriceTotal();
              return this.price$;
          }
}