import { Component, NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { Category } from './category';

@Component({
  selector: 'app-root',
  imports: [ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'lab5';
  
  categories: Category[] = [
    {
      id: 1,
      name: 'Devices'
    },
    {
      id: 2,
      name: 'For kids'
    },
    {
      id: 3,
      name: 'Beauty'
    },
    {
      id: 4,
      name: 'Household'
    }
  ]

  currentCategory!: string;

  setCategory(name: string) {
    this.currentCategory = name;
  }
}