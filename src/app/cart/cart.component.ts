import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';
import {Dish} from "../models/Dish.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartDishes: Dish[] = [];
  totalCount: number = 0;

  constructor(private cartService: CartService) {
    this.cartDishes = cartService.getCart();
    this.totalCount = this.cartService.cartCount();
  }

  ngOnInit() {
  }

  removeDish(dishObj: Dish){
    this.cartService.removeDish(dishObj);
    this.totalCount = this.cartService.cartCount();
  }

}
