import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = new BehaviorSubject<string>('Default Data');
  currentData = this.data.asObservable();

  changeData(newData: string) {
    this.data.next(newData);
  }
}
