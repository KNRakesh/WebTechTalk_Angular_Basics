import { Component } from '@angular/core';
import { TaskChildComponent } from '../task-child/task-child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-parent',
  imports: [TaskChildComponent, CommonModule],
  templateUrl: './task-parent.component.html',
  styleUrl: './task-parent.component.scss',
})
export class TaskParentComponent {

  selectedType = '';

  filteredItems: any;

  finalSelectedItem = '';

  isMessageDisplayed = '';

  items = [
    { name: 'Green', type: 'color' },
    { name: 'Dog', type: 'animal' },
    { name: 'Apple', type: 'fruit' },
    { name: 'Mango', type: 'fruit' },
    { name: 'Yellow', type: 'color' },
    { name: 'Cat', type: 'animal' },
    { name: 'Blue', type: 'color' },
    { name: 'Red', type: 'color' },
    { name: 'Cow', type: 'animal' },
    { name: 'Goat', type: 'animal' },
    { name: 'Black', type: 'color' },
    { name: 'Banana', type: 'fruit' },
    { name: 'Cherry', type: 'fruit' }
  ];

  typeSelection(type: string) {
    this.selectedType = type;
    this.filteredItems = this.items.filter(item => item.type === type); 
  }

  mySelectedItem(msg: any) {
    this.finalSelectedItem = msg;
  }

  mySelectedMsg(e: any) {
    this.isMessageDisplayed = e;
  }
}
