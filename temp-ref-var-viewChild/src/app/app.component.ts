import { FormsModule } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  inputRececived = '';

  countOfa = 0;

  countOfe = 0;

  countOfi = 0;

  countOfo = 0;

  countOfu = 0;

  @ViewChild('myInput', { static: true }) myCustomInput: any;

  @ViewChild('taskInput', { static: true }) myTaskInput: any;

  ngOnInit(): void {
    this.myCustomInput.nativeElement.focus();
    this.myTaskInput.nativeElement.focus();
  }

  sendInput(input: any, channelName: any) {
    console.log(input.value);
    console.log(channelName.innerText);
  }

  typedInput(input: any) {
    this.countOfa = input.value.split('').filter((x: string) => x === 'a').length;
    this.countOfe = input.value.split('').filter((x: string) => x === 'e').length;
    this.countOfi = input.value.split('').filter((x: string) => x === 'i').length;
    this.countOfo = input.value.split('').filter((x: string) => x === 'o').length;
    this.countOfu = input.value.split('').filter((x: string) => x === 'u').length;
  }
}