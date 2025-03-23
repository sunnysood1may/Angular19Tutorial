import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {

  @Input() user: any;
  @Output() userUpdated = new EventEmitter<string>();

  notifyParent(){
    this.userUpdated.emit("Passging message to parent from child component");
  }

  showMessage() {
    alert('Hello from Child Component!');
  }

  userName!: string;

  constructor(private userService: UserService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.userService.currentUserName.subscribe(name => {
      this.userName = name;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
