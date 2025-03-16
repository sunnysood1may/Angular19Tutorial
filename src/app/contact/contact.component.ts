import { Component, inject } from '@angular/core';
import { API_URL, apiUrlFactory } from '../app.config';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [
    {
      provide: API_URL,
      useFactory: apiUrlFactory,
    },
  ],
})
export class ContactComponent {

  apiUrl = inject(API_URL);

}
