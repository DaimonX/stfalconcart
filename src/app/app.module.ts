import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';

import {DishService} from './dish.service';
import {CartService} from './cart.service';
import { DishFormComponent } from './dish-form/dish-form.component';
import { DishItemComponent } from './dish-item/dish-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    ListComponent,
    CartComponent,
    DishFormComponent,
    DishItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [DishService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
