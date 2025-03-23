import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LifeHooksComponent } from '../life-hooks/life-hooks.component';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule, LifeHooksComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  constructor(private cdr: ChangeDetectorRef) {}

  count = 0;
  address = "Delhi";

  icrement(){
    //this.count++;

    setTimeout(() => {
      this.count++;
      this.cdr.detectChanges();  // Manually trigger change detection
    }, 1000);
  }

  getInput(event: KeyboardEvent){
    console.log( (event.target as HTMLInputElement).value);
  }
  

}
