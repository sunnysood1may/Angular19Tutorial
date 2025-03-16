import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IUser { id: number, name: string, age: number }
export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient){}
  
  private data = new BehaviorSubject<string>('Default Data');
  currentData = this.data.asObservable();

  changeData(newData: string) {
    this.data.next(newData);
  }

  getGreeting(name: string): string {
    return `Hello, ${name}! Welcome to Angular Services.`;
  }

  private users: any = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
  ];

  getUsers(){
    return this.users;
  }

  addUser(user: IUser){
    this.users.push(user);
  }

  getPosts(){
    return this.http.get<IPost[]>("https://jsonplaceholder.typicode.com/posts");
  }


}


