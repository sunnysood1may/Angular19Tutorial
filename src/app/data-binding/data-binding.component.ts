import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  count = 0;

  address = "Delhi";

  icrement(){
    this.count++;
  }

  getInput(event: KeyboardEvent){
    console.log( (event.target as HTMLInputElement).value);
  }
  

}
