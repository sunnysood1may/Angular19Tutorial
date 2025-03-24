import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { IData } from '../../services/interfaces/user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit{

  user: IData = {  
    id: 0,
    email: '',
    first_name: '',
    last_name: '',
    avatar: ''
  };

   //user: IData[] = [{ id: 1, name: 'John', job: 'Developer' }];  // ✅ No Error


  constructor(private route: ActivatedRoute, private service: UserService){}

  ngOnInit(): void {
    const userId = this.route.snapshot.params['id'];

    this.service.getUser(userId).subscribe((res)=>{
      //this.user = res.data;
    })
  }

  onSubmit(event: any){

  }

}
