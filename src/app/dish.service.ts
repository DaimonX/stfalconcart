import {Injectable} from '@angular/core';
import {Dish} from './models/Dish.model';

const DISHES: Array<Dish> = [
  {id: 1, name: 'Ice cream', category: 'desert', price: 6.81, qt: 1},
  {id: 2, name: 'Stake', category: 'second', price: 12.49, qt: 1},
  {id: 3, name: 'Soup', category: 'first', price: 2.47, qt: 1},
  {id: 4, name: 'Tea', category: 'drink', price: 3.5, qt: 1},
  {id: 5, name: 'Cake', category: 'desert', price: 4.85, qt: 1}
];

@Injectable()
export class DishService {
  dishesList: Array<Dish>;

  constructor() {
    this.dishesList = DISHES;
  }

  getDishes() {
    return this.dishesList;
  }

  addDish(dish: Dish) {
    this.dishesList.unshift(dish);
  }

  deleteDish(dish: Dish) {
    let idx = this.dishesList.indexOf(dish);
    if ( idx > -1) {
      this.dishesList.splice(idx, 1);
    }
  }

}
