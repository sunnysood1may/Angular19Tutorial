import { Component, ViewChild } from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  imports: [UserDetailsComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  selectedUser = { name: 'John Doe', age: 30 };
  message: string = "";

  showChildMessage($event: string){
    this.message = $event;
  }

  @ViewChild(UserDetailsComponent) childComponet!: UserDetailsComponent

  callChildMethod() {
    this.childComponet.showMessage();
  }

  constructor(private userService: UserService) {}

  updateName(event: any) {
    this.userService.changeUserName(event.target.value);
  }

}
