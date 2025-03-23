import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ CommonModule , ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  constructor(){
  }

  ngOnInit(): void {
  }

  submitted = false;

  // Defining FormGroup
  userForm = new FormGroup({
    name: new FormControl('sunny sk', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('ss@sunny.com', [Validators.required, Validators.email])
  });

  onSubmit() {
    this.submitted = true;
    console.log(this.userForm.value);

    /*this.userForm.setValue({
      name: "sunny s",
      email: "sunnys@ss.com"
    });*/

    /*this.userForm.patchValue({name: "sunny s"});*/

    this.userForm.reset();
    
  }

}
