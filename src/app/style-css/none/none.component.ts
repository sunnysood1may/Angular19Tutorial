import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-none',
  template: `<p>No Encapsulation!</p>`,
  styles: [`p { color: gray; }`],
  encapsulation: ViewEncapsulation.None
})
export class NoneComponent {

}
