import { Component, ViewEncapsulation } from '@angular/core';

@Component({  
  selector: 'app-emulated',
  template: `<p>Emulated Encapsulation!</p>`,
  styles: [`p { color: red; }`],
  encapsulation: ViewEncapsulation.Emulated
})
export class EmulatedComponent {

}
