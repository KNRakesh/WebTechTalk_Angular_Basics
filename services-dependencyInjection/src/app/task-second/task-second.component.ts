import { Component } from '@angular/core';
import { ShapecolorService } from '../shapecolor.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-second',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-second.component.html',
  styleUrl: './task-second.component.scss',
})
export class TaskSecondComponent {
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
