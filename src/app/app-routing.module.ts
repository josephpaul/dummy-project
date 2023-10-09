import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path:'details/:id',
    component: DetailsPageComponent,
    pathMatch: 'full',
  },
  {
    path:'cart',
    component: CartPageComponent,
    pathMatch: 'full',
  }, 
  {
    path:'categories',
    component: CategoriesComponent,
    pathMatch: 'full',
  },
  {
    path:'category/:category',
    component: CategoryComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
