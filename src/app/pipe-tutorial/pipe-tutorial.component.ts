import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pipe-tutorial',
  imports: [CommonModule, TruncatePipe, /*FilterPipe,*/ FormsModule],
  templateUrl: './pipe-tutorial.component.html',
  styleUrl: './pipe-tutorial.component.css'
})
export class PipeTutorialComponent {

  currentDate = new Date();
  amount = 12345.6789;
  message = 'Angular is awesome!';
  person = { name: 'Sunny', age: 35, location: 'Chandigarh' };

  message2 = 'This is a long message that needs to be truncated!';
  searchText = '';
  names = ['Sunny', 'Shilpa', 'Rahul', 'Tomia', 'Pregya'];

}
