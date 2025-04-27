import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { TaskFirstComponent } from '../task-first/task-first.component';

@Component({
  selector: 'app-first',
  imports: [TaskFirstComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.scss',
})
export class FirstComponent {
  constructor(private router: Router, private sharedService: SharedService) {}

  firstNum = 0;

  secondNum = 0;

  result = 0;

  goToSecond() {
    this.router.navigate(['/second']);
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
    this.sharedService.firstPageValue = this.result;
  }
}
