import { Component } from '@angular/core';

@Component({
  selector: 'app-mouse',
  imports: [],
  templateUrl: './mouse.component.html',
  styleUrl: './mouse.component.css'
})
export class MouseComponent {

  message: string = 'Interact with the box above!';
  
  coordinates: string = '';

  onClick(){
    this.message = 'click event generated';
  }

  onDoubleClick() {
    this.message = 'Box double-clicked!';
  }

  onMouseDown() {
    this.message = 'Mouse button down!';
  }

  onMouseUp() {
    this.message = 'Mouse button released!';
  }

  onMouseEnter() {
    this.message = 'Mouse entered the box!';
  }

  onMouseLeave() {
    this.message = 'Mouse left the box!';
  }

  onMouseMove(event: MouseEvent) {
    this.message = 'onMouseMove called!';
    this.coordinates = `Mouse position: X=${event.clientX}, Y=${event.clientY}`;
  }


}
