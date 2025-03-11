import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-dom',
  template: `<p>Shadow DOM Encapsulation!</p>`,
  styles: [`p { color: yellow; }`],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowComponent {

}
