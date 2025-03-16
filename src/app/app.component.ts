import { Component, Inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { HeaderComponent } from './header/header.component';
import { APP_CONFIG, AppConfig } from './app.config';

const apiConfig: AppConfig = {
  apiUrl: 'https://api.example.com',
  timeout: 3000,
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{ provide: APP_CONFIG, useValue: apiConfig }],
})
export class AppComponent {
  title = 'Angular19Tutorial';

  constructor(@Inject(APP_CONFIG) public config: AppConfig) {
  }
}
