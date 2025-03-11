import { Component, ViewEncapsulation } from '@angular/core';
import { EmulatedComponent } from './emulated/emulated.component';
import { NoneComponent } from './none/none.component';
import { ShadowComponent } from './shadow/shadow.component';

@Component({
  selector: 'app-style-css',
  imports: [EmulatedComponent,NoneComponent,ShadowComponent],
  templateUrl: './style-css.component.html',
  styleUrl: './style-css.component.css'
  /*styles: [`
    p {
      color: green;
      font-size: 16px;
    }
  `],*/
})
export class StyleCssComponent {

}
