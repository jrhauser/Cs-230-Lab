import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './layouts/home-layout/home-layout.component';
import { CartLayoutComponent } from './layouts/cart-layout/cart-layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';
import { DrySuitsLayoutComponent } from './layouts/drysuits-layout/drysuits-layout.component';
import { DrytopsLayoutComponent } from './layouts/drytops-layout/drytops-layout.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CreateAccountLayoutComponent } from './layouts/create-account-layout/create-account-layout.component';
const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
  },
  {
    path: 'admin',
    component: AddProductComponent,
  },
  {
    path: 'CartLayout',
    component: CartLayoutComponent,
  },
  {
    path: 'LoginLayout',
    component: LoginLayoutComponent,
  },
  {
    path: 'DrySuitsLayout',
    component: DrySuitsLayoutComponent,
  },
  {
    path: 'DryTopsLayout',
    component: DrytopsLayoutComponent,
  },
  {
    path: "CreateAccount",
    component: CreateAccountLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
