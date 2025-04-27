import { ShapecolorService } from './../shapecolor.service';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskSecondComponent } from '../task-second/task-second.component';

@Component({
  selector: 'app-task-first',
  imports: [FormsModule, CommonModule, TaskSecondComponent],
  templateUrl: './task-first.component.html',
  styleUrl: './task-first.component.scss',
})
export class TaskFirstComponent {
  shape = '';

  color = '';

  class = '';

  object: any;

  constructor(private shapecolorService: ShapecolorService) {}

  getclass(shape: any, color: any, object: any) {
    this.shape = shape;
    this.color = color;
    this.object = object;
    this.class = this.shapecolorService.applyClass(this.shape, this.color);
    this.object.className = '';
    this.object.classList.add(this.class);
  }
}
