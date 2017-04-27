import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'menu',
    component: ListComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/menu',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
