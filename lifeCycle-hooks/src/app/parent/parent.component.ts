import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, CommonModule, FormsModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {

  isChild = true;

  channelName = ''; 

  constructor() {
    console.log('Parent constructor is called');
  }

  ngOnInit(): void {
    console.log('Parent OnInit is called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Parent OnChanges is called');
  }
  
  ngDoCheck(): void {
    console.log('Parent DoCheck is called');  
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }
}
