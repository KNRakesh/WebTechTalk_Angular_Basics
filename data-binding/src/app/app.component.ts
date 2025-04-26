import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'data-binding';
  firstName = 'Rakesh';
  imgPath = 'https://picsum.photos/id/237/200/300';
  defaultValue = 'Surender';

  taskDefaultValue = '';
  submitted = false;

  verifyText(e: any) {
    if (this.taskDefaultValue === 'submitted') {
      this.submitted = !this.submitted;
    }
  }

  passValueToComponent(e: any) {
    console.log(e.target.value);
  }

  changeValue(e: any) {
    console.log(e.target.value, 'value changed');
  }
}
