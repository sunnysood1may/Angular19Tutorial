import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getList(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

}
