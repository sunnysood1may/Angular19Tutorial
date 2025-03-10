import { Component } from '@angular/core';

@Component({
  selector: 'app-drag',
  imports: [],
  templateUrl: './drag.component.html',
  styleUrl: './drag.component.css'
})
export class DragComponent {

  onDragStart(event: DragEvent) {
    console.log('Drag Start');
    event.dataTransfer?.setData('text', 'This is a draggable item');
  }

  onDrag(event: DragEvent) {
    console.log('Dragging...');
  }

  onDragEnd(event: DragEvent) {
    console.log('Drag End');
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();  // Allow the drop
    console.log('Drag Over');
  }

  onDragEnter(event: DragEvent) {
    console.log('Drag Enter');
  }

  onDragLeave(event: DragEvent) {
    console.log('Drag Leave');
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const data = event.dataTransfer?.getData('text');
    console.log('Dropped:', data);
    alert(`Dropped: ${data}`);
  }

}
