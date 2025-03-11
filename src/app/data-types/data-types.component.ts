import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

type Employee = {
  name: string;
  age: number;
  isActive: boolean;
};

@Component({
  selector: 'app-data-types',
  imports: [CommonModule],
  templateUrl: './data-types.component.html',
  styleUrl: './data-types.component.css'
})
export class DataTypesComponent {

  name: string = "Sunny";

  age: number = 30;
  height: number = 5.9;
  isActive: boolean = false;

  numbers: number[] = [1, 2, 3, 4];
  names: Array<string> = ["John", "Doe", "Sunny"];

  person: [string, number, boolean] = ["Sunny", 30, true];

  setColor = Color;

  randomValue: any = "Hello";

  constructor(){
    this.randomValue = 42;
    this.randomValue = true;
    this.greet();
    //this.throwError("This is message");
    if (typeof this.value === "string") {
      console.log(`String value: ${this.value}`);
    } 
  }

  private greet(): void {
    console.log("Hello World");
  }

  nullValue: null = null;
  undefinedValue: undefined = undefined;

  throwError(message: string): never {
    throw new Error(message);
  }

  user: { name: string; age: number } = {
    name: "Sunny",
    age: 30,
  };

  Uid: number | string = "sunny";

  emp: Employee = {
    name: "Sunny",
    age: 30,
    isActive: true,
  };

  direction: "up" | "down" = "up";

  value: unknown = "Hello";
  
  
  

}
