import {Injectable} from '@angular/core';
import {Dish} from './models/Dish.model';

@Injectable()
export class CartService {
  private cart: Dish[] = [];

  addDish(dish: Dish) {
    let idx = this.cart.findIndex(dishInCart => dishInCart.id === dish.id);
    if (idx != -1) {
      this.cart[idx].qt = this.cart[idx].qt + 1;
    } else {
      this.cart.push(dish);
    }
    alert(dish.name + ' aded to your cart');
  }

  removeDish(dish: Dish) {
    let idx = this.cart.findIndex(dishInCart => dishInCart.id === dish.id);
    if (idx != -1 && this.cart[idx].qt > 1) {
      this.cart[idx].qt = this.cart[idx].qt - 1;
    } else {
      this.cart.splice(idx, 1);
    }
  }

  getCart(): Array<Dish> {
    return this.cart;
  }

  cartCount() {
    let result = 0;
    if (this.cart.length > -1) {
      result = this.cart.reduce((sum, cartItm) => {
          return sum + cartItm.qt*cartItm.price;
        }, 0);
    }
    return result;
  }

  constructor() {
  }

}
