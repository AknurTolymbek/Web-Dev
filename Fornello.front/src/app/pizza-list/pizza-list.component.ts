import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pizza-list.component.html'
})
export class PizzaListComponent {
  pizzas = [
    {
      name: 'Pepperoni',
      description: 'Chicken pepperoni, extra mozzarella cheese, marinara sauce',
      price: 2850,
      imageUrl: 'https://media.dodostatic.net/image/r:584x584/11ee7d5f9d4f264d98d40bf411913db1.avif'
    },
    {
      name: 'Cheesy',
      description: 'Mozzarella cheese, cheddar cheese, parmesan cheese, Alfredo sauce',
      price: 2800,
      imageUrl: 'assets/pizza2.jpg'
    },
    {
      name: 'Margherita ',
      description: 'Extra mozzarella cheese, tomatoes, marinara sauce, Italian seasoning',
      price: 2800,
      imageUrl: 'assets/pizza2.jpg'
    },
    {
      name: 'BBQ Chicken',
      description: 'Chicken, chicken ham, barbecue sauce, red onion, mozzarella cheese, marinara sauce',
      price: 2850,
      imageUrl: 'assets/pizza2.jpg'
    },
    {
      name: 'Cheesy chiken',
      description: 'Chicken, mozzarella cheese, cheddar cheese, parmesan cheese, cheese sauce, tomatoes, Alfredo sauce, garlic',
      price: 2800,
      imageUrl: 'assets/pizza2.jpg'
    },
    {
      name: 'Hawaiian',
      description: 'Double chicken, pineapple, mozzarella cheese, Alfredo sauce',
      price: 2800,
      imageUrl: 'assets/pizza2.jpg'
    },
  ];
}