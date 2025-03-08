import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular19Tutorial';

  constructor(){}

}
