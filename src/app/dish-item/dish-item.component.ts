import {Component, OnInit, Input} from '@angular/core';
import {Dish} from "../models/Dish.model";
import {CartService} from "../cart.service";
import {DishService} from "../dish.service";

@Component({
  selector: 'app-dish-item',
  templateUrl: './dish-item.component.html',
  styleUrls: ['./dish-item.component.css']
})
export class DishItemComponent implements OnInit {

  @Input() dish: Dish;

  constructor(private cartService: CartService, private dishService: DishService) {
  }

  ngOnInit() {
  }

  addToCart(dishObj: Dish) {
    this.cartService.addDish(dishObj);
  }

  deleteDish(dishObj: Dish) {
    this.dishService.deleteDish(dishObj);
  }

}
