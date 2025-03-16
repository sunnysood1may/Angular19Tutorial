import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userName = new BehaviorSubject<string>('Sunny S');
  currentUserName = this.userName.asObservable();

  changeUserName(name: string) {
    this.userName.next(name);
  }
}
