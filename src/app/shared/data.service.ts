import { Injectable } from '@angular/core';
import { Product } from '../models/product'

@Injectable()
export class DataService {

  constructor() { }
  private Bikes: Product[] =  [
    {
      "id": 1,
      "name": "Adult Male Bike",
      "price": 20.50,
      "image": "https://via.placeholder.com/250x250?text=Adult%20Male%20Bike",
      "product_type": "bike",
      "category" : "Adults"
    },
    {
      "id": 2,
      "name": "Adult Female Bike",
      "price": 20.50,
      "image": "https://via.placeholder.com/250x250?text=Adult%20Female%20Bike",
      "product_type": "bike",
      "category" : "Adults"
    },
    {
      "id": 3,
      "name": "Kids Unisex Bike",
      "price": 12.75,
      "image": "https://via.placeholder.com/250x250?text=Kids%20Unisex%20Bike",
      "product_type": "bike",
      "category" : "Kids"
    },
    {
      "id": 4,
      "name": "Adult Unisex Helmet",
      "price": 4.00,
      "image": "https://via.placeholder.com/250x250?text=Adult%20Unisex%20Helmet",
      "product_type": "accessory",
      "category" : "Adults"
    },
    {
      "id": 5,
      "name": "Kids Unisex Helmet",
      "price": 3.50,
      "image": "https://via.placeholder.com/250x250?text=Kids%20Unisex%20Helmet",
      "product_type": "accessory",
      "category" : "Kids"
    },
    {
      "id": 6,
      "name": "Insurance",
      "price": 9.99,
      "image": "https://via.placeholder.com/250x250?text=Insurance",
      "product_type": "addon"
    }
  ]
 getAllProducts(): Product[]{
   let products = this.Bikes.slice();
   return products;
 }

}