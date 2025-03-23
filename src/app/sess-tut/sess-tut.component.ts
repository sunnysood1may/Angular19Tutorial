import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sess-tut',
  imports: [],
  templateUrl: './sess-tut.component.html',
  styleUrl: './sess-tut.component.css'
})
export class SessTutComponent implements OnInit {

  constructor(private cookieService: CookieService){}

  ngOnInit(): void {

    localStorage.setItem("token","ERTERER");
    const tokenU = localStorage.getItem("token");
    //console.log(tokenU);
    //alert(tokenU);
    localStorage.removeItem("token");

    sessionStorage.setItem("address","New Delhi");
    //console.log(  sessionStorage.getItem("address") );
    sessionStorage.removeItem("address");
    //console.log(  sessionStorage.getItem("address") );


    this.cookieService.set("State","Chandigarh",1);
    console.log( "Cookie",  this.cookieService.get("State") );

    this.cookieService.delete("State");
    console.log( "Cookie",this.cookieService.get("State") );

    

  }
  

}
