import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first',
  imports: [CounterComponent, CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  title = "First Component Load";

  constructor(private router: Router, private dataService: DataService) {
    this.saveToStorage();
  }

  goToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }

  goToDetails2() {
    this.router.navigate(['/details'], { queryParams: { id: 101, name: 'Sunny' } });
  }

  goToDetails3() {
    this.router.navigate(['/details'], { state: { id: 102, name: 'Sood' } });
  }

  saveToStorage() {
    localStorage.setItem('myData', 'Some Data is Important');
  }

  updateData() {
    this.dataService.changeData('Updated Data from Home');
    this.router.navigate(['/details']);
  }
  
  
}
