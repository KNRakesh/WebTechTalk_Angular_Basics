import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-child',
  imports: [CommonModule],
  templateUrl: './task-child.component.html',
  styleUrl: './task-child.component.scss',
})
export class TaskChildComponent {
  @Input()
  arrayFromParent: any = [];

  @Input()
  selectedTypeFromParent = '';

  @Input()
  filteredItemsFromParent: any = [];

  @Output()
  emitToParent = new EventEmitter;

  @Output()
  msgToParent = new EventEmitter;

  selectedItem(e: any){
    console.log(e.target.innerText, typeof e.target.innerText);
    this.emitToParent.emit(e.target.innerText)
    this.msgToParent.emit('selected');
  }
}
