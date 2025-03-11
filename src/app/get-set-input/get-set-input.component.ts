import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-set-input',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './get-set-input.component.html',
  styleUrl: './get-set-input.component.css'
})
export class GetSetInputComponent {

  inputValue: string = '';

  getValue(value: string) {
    this.inputValue = value;
    console.log('Input Value:', value);
  }

  setValue(input: HTMLInputElement) {
    console.log(input.value);
    //input.value = 'John Doe';
    this.inputValue = input.value;
  }

  name: string = 'sunny sood';
  setName() {
    this.name = 'John Doe';
  }

  nameControl = new FormControl('');

  setRValue() {
    this.nameControl.setValue('John Doe');
  }

  getRValue() {
    console.log('Input Value:', this.nameControl.value);
  }

  getEName(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.name = inputElement.value;
    console.log(inputElement.value);
    console.log('Input Value:', this.name);
  }

  setEName() {
    this.name = 'John Doe';
  }

}
