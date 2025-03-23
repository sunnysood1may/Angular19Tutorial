import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { IData } from '../services/interfaces/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crud',
  imports: [CommonModule, RouterLink],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit  {

  users: IData[] = [];
  constructor(private service: UserService){}

  ngOnInit(): void {
    this.service.getUsers().subscribe((res) => {
      console.log(res.data);
      this.users = res.data;
    });
  }

}
