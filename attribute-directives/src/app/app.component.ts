import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  highlightColor = 'white';

  isStyleApplied = false;

  // TASK

  numbers = Array.from({ length: 50 }, (_, i) => i + 1);

  highlight(color: string) {
    this.highlightColor = color;
  }

  toggle() {
    this.isStyleApplied = !this.isStyleApplied;
  }

  // TASK
  greenBtnClicked = true;

  clearBtnStatus = true;

  showMessage = false;

  chooseNumber = 0;

  greenBtnClick(e: any) {
    if ((this.greenBtnClicked = true)) {
      this.greenBtnClicked = !this.greenBtnClicked;
    }
    this.clearBtnStatus = false;
    console.log(e);
    this.chooseNumber = e;
  }

  clearBtnClick() {
    this.clearBtnStatus = true;
    this.chooseNumber = 0;
  }
}
