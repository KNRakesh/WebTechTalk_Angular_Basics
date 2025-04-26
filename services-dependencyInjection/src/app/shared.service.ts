import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}

  firstPageValue = 0;

  calculateTotal(firstNum: any, secondNum: any) {
    return firstNum + secondNum;
  }
}
