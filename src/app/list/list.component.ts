import {Component, OnInit} from '@angular/core';
import {DishService} from '../dish.service';
import {CartService} from '../cart.service';
import {Dish} from '../models/Dish.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dishes: Array<Dish>;

  constructor(private dishService: DishService, private cartService: CartService) {
  }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  dishId(index, dish): number {
    return dish.id;
  }
}
