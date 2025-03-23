import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

interface IUser {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: IUser = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router){ }


  onSubmit(form: any) {
    console.log('Form Submitted!', form.value);
    alert('Registration Successful!');

    this.authService.login();
    this.router.navigate(['/userLists']);
    
  }

}
