import {Component, OnInit} from '@angular/core';
import {Dish} from "../models/Dish.model";
import {DishService} from "../dish.service";
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.css']
})
export class DishFormComponent implements OnInit {
  newDish: Dish;
  dishFrom: FormGroup;

  constructor(private dishService: DishService, fBuilder: FormBuilder) {
    this.dishFrom = fBuilder.group({
      name: '',
      category: [null, Validators.required],
      price: [null, Validators.compose([Validators.required, this.priceValidator])],
      id: [Math.random()]
    });
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

  priceValidator(control: FormControl): {[s: string]: boolean} {
    if(control.value <= 0){
      return {invalidPrice: true};
    };
  }

}
