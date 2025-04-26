import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss'
})
export class TemplateDrivenComponent {

  @ViewChild('myForm', {static: true}) myForm: any;

  onSubmit(myForm: any) {
    console.log(myForm)
    this.myForm.reset();
  }
}
