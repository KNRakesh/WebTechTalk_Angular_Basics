import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './model-driven.component.html',
  styleUrl: './model-driven.component.scss',
})
export class ModelDrivenComponent implements OnInit {
  myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      uname: new FormControl('Surender', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      readTerms: new FormControl(false),
    });
  }

  onSubmit() {
    this.myForm.reset();
  }

  accept() {
    // this.myForm.setValue({
    //   uname: 'Surender',
    //   email: null,
    //   readTerms: true
    // })

    this.myForm.patchValue({
      readTerms: true
    })
  }
}
