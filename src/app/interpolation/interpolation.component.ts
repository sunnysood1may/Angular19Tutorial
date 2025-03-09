import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css',
})
export class InterpolationComponent {
  title = 'Interpolation Example';

  num1 = 2;

  num2 = 3;

  num3 = 'Num 3 is string';

  imageUrl =
    'https://logowik.com/content/uploads/images/angular-new6082.logowik.com.webp';

  getMessage() {
    return 'This is function';
  }
}
