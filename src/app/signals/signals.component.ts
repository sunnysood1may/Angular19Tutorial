import { Component, computed, effect, signal } from '@angular/core';

interface User {
  name: string;
  age: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
}


@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {

  count = signal(0);  // Create a signal with initial value 0
  doubleCount = computed(() => this.count() * 2);  // Computed signal

  increment() {
    this.count.set(this.count() + 1);  // Update signal value
  }

  decrement() {
    this.count.set(this.count() - 1);  // Update signal value
  }

  constructor() {
    // Effect that triggers on signal change
    effect(() => {
      console.log(`Count changed: ${this.count()}`);
    });
  }

  message = signal<string>('Hello, World!');
  updateMessage(){
    this.message.set('Updated Singal Message');
  }

  counter = signal<number>(0);
  incrementC() {
    this.counter.set(this.counter() + 1);
  }

  items = signal<string[]>(['Item 1', 'Item 2']);
  addItem() {
    const updatedItems = [...this.items(), `Item ${this.items().length + 1}`];
    this.items.set(updatedItems);
  }

  user = signal<User>({ name: 'Sunny', age: 30 });
  updateAge() {
    this.user.set({ ...this.user(), age: this.user().age + 1, name: 'Sood' });
  }

  product = signal<Product>({ id: 1, name: 'Laptop', price: 1000 });
  updatePrice() {
    this.product.set({ ...this.product(), price: this.product().price + 100 });
  }

}
