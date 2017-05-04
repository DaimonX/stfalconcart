import {Component, OnInit} from '@angular/core';
import {Dish} from "../models/Dish.model";
import {DishService} from "../dish.service";


@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.css']
})
export class DishFormComponent implements OnInit {
  newDish: Dish;

  constructor(private dishService: DishService) {
  }

  ngOnInit() {
  }

  onSubmit(form: any) {
    this.newDish = {
      id: form.id,
      name: form.name,
      category: form.category,
      price: form.price,
      qt: 1
    }
    this.dishService.addDish(this.newDish);
    return false;
  }

}
