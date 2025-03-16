import { Component, OnInit } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { Router } from '@angular/router';
import { DataService, IPost } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-first',
  imports: [CounterComponent, CommonModule],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit {
  title = "First Component Load";

  constructor(private router: Router, private dataService: DataService) {
    this.saveToStorage();
    this.greeting = this.dataService.getGreeting('Sunny');
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

  users: any[] = [];
  user: any;
  greeting: string | undefined;

  posts$!: Observable<IPost[]>;

  ngOnInit(): void {
    this.users = this.dataService.getUsers();
    this.posts$ = this.dataService.getPosts();
  }

  addNewUser(){
    const newUser = { id: 3, name: 'Alice Johnson', age: 28 };
    this.dataService.addUser(newUser);
    this.users = this.dataService.getUsers(); // Refreshing the list
  }

 

  
  
  
}
