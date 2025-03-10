import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-directive-exp',
  imports: [CommonModule, HighlightDirective],
  templateUrl: './directive-exp.component.html',
  styleUrl: './directive-exp.component.css'
})
export class DirectiveExpComponent {

  show = true;

  items = ['Angular', 'React', 'Vue'];

  selectedColor = 'blue';

  isActive = false;

  isLarge = false;

}
