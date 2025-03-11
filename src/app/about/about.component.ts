import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  imports: [CommonModule, FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  isVisible: boolean = false;
  toggleDiv() {
    this.isVisible = !this.isVisible;
  }

  color: string = 'red';

  selectedFruit: string = 'apple';

  changeFruit(fruit: string) {
    this.selectedFruit = fruit;
  }

  students = [
    { name: 'John', age: 20 },
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 19 },
    { name: 'Maria', age: 21 }
  ];

  trackByStudentId(index: number, student: any): number {
    return student.name;
  }
  

}
