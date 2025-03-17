import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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


  onSubmit(form: any) {
    console.log('Form Submitted!', form.value);
    alert('Registration Successful!');
  }

}
