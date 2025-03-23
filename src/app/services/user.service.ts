import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userName = new BehaviorSubject<string>('Sunny S');
  currentUserName = this.userName.asObservable();

  changeUserName(name: string) {
    this.userName.next(name);
  }

  constructor(private httpClient: HttpClient) {}

  private apiUrl = 'https://reqres.in/api/users';

  getUsers(): Observable<IUser> {
    return this.httpClient.get<IUser>(this.apiUrl);
  }

  getUser(user: number): Observable<IUser> {
    return this.httpClient.get<IUser>(this.apiUrl+ "/" +user);
  }

}
