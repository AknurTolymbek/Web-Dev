import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PizzaListComponent } from './pizza-list/pizza-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: PizzaListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
