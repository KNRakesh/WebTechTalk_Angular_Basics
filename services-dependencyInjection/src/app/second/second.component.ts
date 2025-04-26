import { SharedService } from './../shared.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.scss',
})
export class SecondComponent {
  firstNum = 0;

  secondNum = 0;

  result = 0;

  prevPageValue = 0;

  constructor(private router: Router, private sharedService: SharedService) {}

  goToFirst() {
    this.router.navigate(['first']);
  }

  getFirstNumber(num: any) {
    this.firstNum = Number(num.value);
  }

  getSecondNumber(num: any) {
    this.secondNum = Number(num.value);
  }

  calculateTotal() {
    this.result = this.sharedService.calculateTotal(
      this.firstNum,
      this.secondNum
    );
    this.prevPageValue = this.sharedService.firstPageValue;
  }
}
